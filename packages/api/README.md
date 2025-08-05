# API de Autenticação

Esta API fornece endpoints para autenticação de usuários, utilizando os pacotes `@monorepo/database` e `@monorepo/auth-service`.

## Endpoints

### Autenticação

- **POST /api/auth/login**: Realiza login de usuário
- **POST /api/auth/register**: Registra um novo usuário
- **GET /api/auth/me**: Retorna informações do usuário autenticado

### Teste

- **GET /api/health**: Verifica se a API está funcionando

## Configuração

1. Certifique-se de que o arquivo `.env` está configurado corretamente:

```
PORT=3001
JWT_SECRET=sua_chave_secreta_aqui
```

2. Certifique-se de que o banco de dados está configurado e as migrações foram aplicadas:

```bash
npm run setup:db
```

## Execução

Para iniciar a API em modo de desenvolvimento:

```bash
npm run dev:api
```

Para iniciar a API em modo de produção:

```bash
npm run start:api
```

## Exemplos de Uso

### Login

```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "usuario@exemplo.com", "password": "senha123"}'
```

### Registro

```bash
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name": "Usuário Teste", "email": "usuario@exemplo.com", "password": "senha123"}'
```

### Verificar Usuário Autenticado

```bash
curl -X GET http://localhost:3001/api/auth/me \
  -H "Authorization: Bearer SEU_TOKEN_JWT"
```
