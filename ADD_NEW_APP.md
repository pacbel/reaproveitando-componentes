# Adicionando um Novo App ao Monorepo

Este documento descreve o passo a passo para adicionar um novo aplicativo Next.js ao monorepo, seguindo o padrão estabelecido para app1, app2 e app3.

## 📋 Passos para Criar um Novo App (ex: app4)

### 1. Criar Estrutura Básica

```bash
# Criar pasta para o novo app
mkdir apps\app4

# Entrar na pasta e inicializar Next.js
cd apps\app4
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes
```

### 2. Configurar package.json do Novo App

Edite `apps/app4/package.json`:

- Mude `"name"` para `"@monorepo/app4"`
- Adicione dependências compartilhadas:

  ```json
  "dependencies": {
    "@monorepo/shared-ui": "*",
    "@monorepo/auth-service": "*",
    "next": "15.4.1",
    "react": "19.1.0",
    "react-dom": "19.1.0"
  }
  ```

- Defina porta única nos scripts (ex: `-p 3003`):

  ```json
  "scripts": {
    "dev": "next dev -p 3003",
    "start": "next start -p 3003",
    // ...
  }
  ```

### 3. Atualizar package.json Raiz

Edite `package.json` na raiz:

- Adicione scripts para o novo app:

  ```json
  "scripts": {
    "dev:app4": "npm run dev --workspace=apps/app4",
    "start:app4": "npm run start --workspace=apps/app4",
    // ...
  }
  ```

- Atualize `"dev:all"` para incluir o novo app:

  ```json
  "dev:all": "concurrently \"npm run dev:app1\" \"npm run dev:app2\" \"npm run dev:app3\" \"npm run dev:app4\" \"npm run dev:api\""
  ```

### 4. Criar Dockerfile

Crie `apps/app4/Dockerfile` com o seguinte conteúdo (copie de app1 e ajuste):

```dockerfile
# Multi-stage build for Next.js app
FROM node:20-alpine AS builder

# Update packages for security
RUN apk update && apk upgrade

# Set working directory
WORKDIR /app

# Copy root package files
COPY package*.json ./

# Copy workspace package files
COPY apps/app4/package*.json ./apps/app4/

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build --workspace=apps/app4

# Production stage
FROM node:20-alpine AS runner

# Update packages for security
RUN apk update && apk upgrade

# Set working directory
WORKDIR /app

# Copy built app from builder stage
COPY --from=builder /app/apps/app4/.next ./.next
COPY --from=builder /app/apps/app4/public ./public

# Copy node_modules from builder
COPY --from=builder /app/node_modules ./node_modules

# Copy package.json for scripts
COPY --from=builder /app/apps/app4/package.json ./package.json

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start", "--workspace=apps/app4"]
```

### 5. Atualizar docker-compose.yml

Adicione o novo serviço em `docker-compose.yml`:

```yaml
  app4:
    build:
      context: .
      dockerfile: apps/app4/Dockerfile
    ports:
      - "3003:3000"  # Porta externa:interna
    environment:
      - NODE_ENV=production
    depends_on:
      - api
```

### 6. Instalar Dependências

```bash
# Na raiz do projeto
npm install
```

## ✅ Verificação

Após seguir os passos:

1. Teste desenvolvimento: `npm run dev:app4`
2. Teste todos os apps: `npm run dev:all`
3. Teste build: `npm run build --workspace=apps/app4`
4. Teste Docker local: `docker-compose up --build app4`

## 📝 Notas Importantes

- **Portas**: Cada app deve ter porta única (3000, 3001, 3002, etc.)
- **Dependências**: Sempre inclua `@monorepo/shared-ui` e `@monorepo/auth-service`
- **Versões**: Mantenha consistência com as versões dos outros apps
- **Estrutura**: Siga o padrão `src/app` com layout.tsx e page.tsx
- **Docker**: Ajuste a porta no docker-compose se necessário

## 🚀 Próximos Passos

- Personalize o conteúdo do app (páginas, componentes)
- Configure rotas e funcionalidades específicas
- Adicione testes se necessário
- Atualize documentação do projeto
