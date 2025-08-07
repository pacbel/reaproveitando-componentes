# Monorepo com Workspaces - Reutilização de Componentes no Next.js

## Sobre o Projeto

Este projeto demonstra a implementação da técnica de **Monorepo com Workspaces** para reutilização de componentes, páginas, serviços e banco de dados entre diferentes aplicações Next.js. Esta abordagem é similar ao conceito de DLLs no desenvolvimento para Windows, permitindo encapsular funcionalidades em pacotes compartilhados que podem ser utilizados por múltiplos projetos.

## Estrutura do Projeto

```
reaproveitando-componentes/
├── packages/                  # Pacotes compartilhados
│   ├── shared-ui/            # Componentes de UI reutilizáveis
│   │   ├── src/
│   │   │   ├── components/   # Componentes React
│   │   │   ├── hooks/        # Hooks personalizados
│   │   │   └── index.ts      # Exportações públicas
│   │   └── package.json
│   ├── database/             # Pacote de acesso a dados (Prisma extraído)
│   │   ├── src/
│   │   │   ├── client.ts     # Cliente Prisma singleton
│   │   │   ├── models.ts     # Tipos e interfaces
│   │   │   ├── repositories/ # Repositórios para acesso a dados
│   │   │   └── index.ts      # Exportações públicas
│   │   ├── prisma/           # Esquema do banco de dados
│   │   └── package.json
│   ├── auth-service/         # Serviço de autenticação
│   │   ├── src/
│   │   └── package.json
│   └── api/                  # API REST para autenticação
│       ├── src/
│       └── package.json
├── apps/                     # Aplicações
│   ├── app1/                 # Primeiro aplicativo
│   │   ├── src/
│   │   │   ├── app/
│   │   │   └── pages/
│   │   └── package.json
│   └── app2/                 # Segundo aplicativo
│       ├── src/
│       │   ├── app/
│       │   └── pages/
│       └── package.json
└── package.json              # Configuração do monorepo
```

## Como Funciona

### Pacotes Compartilhados

1. **@monorepo/shared-ui**: Contém componentes de interface reutilizáveis como o `LoginForm` e hooks como o `useAuth`.

2. **@monorepo/database**: Contém o cliente Prisma, modelos de dados e repositórios para acesso ao banco de dados. Este pacote foi extraído do auth-service para permitir o reaproveitamento da camada de dados por outros serviços.

3. **@monorepo/auth-service**: Implementa a lógica de autenticação e gerenciamento de usuários, utilizando o pacote database para acesso aos dados.

4. **@monorepo/api**: Implementa uma API REST que utiliza o auth-service para fornecer endpoints de autenticação.

### Aplicações

1. **app1**: Primeira aplicação que utiliza os componentes e serviços compartilhados.

2. **app2**: Segunda aplicação com tema visual diferente, mas que reutiliza os mesmos componentes e serviços.

## Vantagens da Abordagem

1. **DRY (Don't Repeat Yourself)**: Escreva o código uma vez e utilize em múltiplos projetos.

2. **Manutenção centralizada**: Correções e melhorias são implementadas em um único lugar e beneficiam todos os projetos.

3. **Consistência**: Garante que todos os projetos utilizem os mesmos componentes e comportamentos.

4. **Tipagem compartilhada**: Com TypeScript, as interfaces e tipos são compartilhados entre os projetos.

5. **Escalabilidade**: Facilita a adição de novos projetos que podem aproveitar os componentes existentes.

## Como Executar

### Instalação e Configuração

```bash
# Executar o script de configuração (cria o banco e instala dependências)
./setup.ps1
```

Ou manualmente:

```bash
# Instalar todas as dependências (execute apenas na raiz do projeto)
npm install

# Configurar o banco de dados
npm run setup:db
```

> **Importante**: Uma das vantagens do monorepo com workspaces é que você só precisa executar `npm install` uma única vez na pasta raiz do projeto. O npm automaticamente instalará as dependências de todos os pacotes e aplicativos definidos no workspace. Não é necessário entrar em cada pasta separadamente para instalar as dependências.

### Executar a API

```bash
npm run dev:api
```

### Executar o Aplicativo 1

```bash
npm run dev:app1
```

### Executar o Aplicativo 2

```bash
npm run dev:app2
```

## Banco de Dados

O projeto utiliza Prisma ORM com MySQL. O esquema do banco de dados agora é definido no pacote `database` e compartilhado entre as aplicações.

Para configurar o banco de dados:

1. O arquivo `.env` já está configurado no pacote database com a URL de conexão:

```
DATABASE_URL="mysql://root:@localhost:3306/auth_db"
```

2. Execute o script de configuração para criar o banco e aplicar as migrações:

```bash
./setup.ps1
```

Ou execute manualmente:

```bash
npm run setup:db
```

## Passo a Passo para Distribuição das Aplicações

A estrutura de monorepo com workspaces do npm permite gerenciar múltiplas aplicações e pacotes compartilhados de forma eficiente. Abaixo está o passo a passo detalhado de como funciona a distribuição de cada aplicação neste projeto:

### 1. Configuração do Monorepo

O arquivo `package.json` na raiz do projeto define os workspaces:

```json
{
  "workspaces": [
    "packages/*",
    "apps/*"
  ]
}
```

Isso permite que o npm reconheça todos os pacotes em `packages/` e `apps/` como parte do mesmo monorepo.

### 2. Desenvolvimento de Pacotes Compartilhados

1. **Pacote Database**
   - Contém o cliente Prisma e os repositórios de acesso a dados
   - Exporta suas funcionalidades através do arquivo `src/index.ts`
   - Outros pacotes o utilizam como dependência normal: `"@monorepo/database": "1.0.0"`
   - Gerencia suas próprias migrações com scripts como `migrate:dev`

2. **Pacote Auth-Service**
   - Depende do pacote database: `"@monorepo/database": "1.0.0"`
   - Implementa a lógica de autenticação e gerenciamento de usuários
   - Exporta suas funcionalidades através do arquivo `src/index.ts`

3. **Pacote Shared-UI**
   - Define componentes React reutilizáveis
   - Usa `peerDependencies` para React e Next.js, evitando duplicação
   - Exporta seus componentes através do arquivo `src/index.ts`

4. **Pacote API**
   - Depende dos pacotes auth-service e database
   - Implementa endpoints REST para autenticação
   - Possui seus próprios scripts para execução: `dev` e `start`

### 3. Configuração das Aplicações

1. **App1 e App2**
   - Cada aplicação tem seu próprio `package.json` com dependências específicas
   - Referenciam os pacotes compartilhados usando o caractere curinga: `"@monorepo/shared-ui": "*"`
   - Possuem suas próprias configurações de porta para desenvolvimento:
     - App1: porta 3000
     - App2: porta 3001
   - Cada aplicação pode ter seu próprio tema visual, mas reutiliza os mesmos componentes

### 4. Instalação de Dependências

Uma das principais vantagens do monorepo com workspaces é a instalação centralizada:

```bash
npm install
```

Este comando, executado na raiz do projeto:
- Instala todas as dependências de todos os pacotes e aplicações
- Cria links simbólicos entre os pacotes locais (em vez de baixá-los do npm)
- Deduplica dependências comuns, economizando espaço em disco

### 5. Execução das Aplicações

O arquivo `package.json` raiz define scripts para executar cada aplicação:

```bash
# Executar API
npm run dev:api

# Executar App1
npm run dev:app1

# Executar App2
npm run dev:app2
```

Cada script usa a flag `--workspace` para executar o comando no contexto do pacote específico.

### 6. Construção para Produção

Para construir todas as aplicações para produção simultaneamente:

```bash
npm run build
```

Este comando utiliza a flag `--workspaces --if-present` para executar o script `build` em todos os pacotes que o possuem.

Para construir cada aplicação individualmente:

```bash
# Construir App1
npm run build --workspace=apps/app1

# Construir App2
npm run build --workspace=apps/app2

# Construir API (se tiver script de build)
npm run build --workspace=packages/api
```

Você também pode adicionar estes comandos ao package.json raiz para facilitar:

```json
{
  "scripts": {
    "build:app1": "npm run build --workspace=apps/app1",
    "build:app2": "npm run build --workspace=apps/app2",
    "build:api": "npm run build --workspace=packages/api"
  }
}
```

### 7. Publicação e Implantação

Para implantar as aplicações:

1. Cada aplicação pode ser construída e implantada independentemente
2. Os pacotes compartilhados são incluídos no build de cada aplicação
3. Para implantações em ambientes como Vercel ou Netlify, configure cada aplicação separadamente apontando para o diretório específico dentro do monorepo

## Considerações Finais

Esta estrutura de monorepo é ideal para equipes que trabalham em múltiplos projetos relacionados e desejam maximizar a reutilização de código. É o equivalente moderno às DLLs do desenvolvimento Windows, adaptado para o ecossistema JavaScript/React.
