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
│   └── auth-service/         # Serviço de autenticação
│       ├── src/
│       ├── prisma/           # Esquema do banco de dados
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

2. **@monorepo/auth-service**: Implementa a lógica de autenticação e gerenciamento de usuários, incluindo o esquema Prisma para o banco de dados.

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

### Instalação

```bash
# Instalar todas as dependências (execute apenas na raiz do projeto)
npm install
```

> **Importante**: Uma das vantagens do monorepo com workspaces é que você só precisa executar `npm install` uma única vez na pasta raiz do projeto. O npm automaticamente instalará as dependências de todos os pacotes e aplicativos definidos no workspace. Não é necessário entrar em cada pasta separadamente para instalar as dependências.

### Executar o Aplicativo 1

```bash
npm run dev:app1
```

### Executar o Aplicativo 2

```bash
npm run dev:app2
```

## Banco de Dados

O projeto utiliza Prisma ORM com MySQL. O esquema do banco de dados é definido no pacote `auth-service` e compartilhado entre as aplicações.

Para configurar o banco de dados:

1. Crie um arquivo `.env` na raiz do projeto com a URL de conexão:

```
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
```

2. Execute as migrações do Prisma:

```bash
npx prisma migrate dev --schema=./packages/auth-service/prisma/schema.prisma
```

## Considerações Finais

Esta estrutura de monorepo é ideal para equipes que trabalham em múltiplos projetos relacionados e desejam maximizar a reutilização de código. É o equivalente moderno às DLLs do desenvolvimento Windows, adaptado para o ecossistema JavaScript/React.
