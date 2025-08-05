# Pacote Database

Este pacote contém o cliente Prisma e os modelos de dados compartilhados para serem utilizados por outros serviços da aplicação.

## Estrutura

- `prisma/`: Contém o schema do Prisma e as migrações
- `src/`: Código fonte do pacote
  - `client.ts`: Exporta o cliente Prisma como singleton
  - `models.ts`: Define os tipos e interfaces dos modelos
  - `repositories/`: Contém os repositórios para acesso aos dados
    - `user-repository.ts`: Repositório para operações com usuários

## Configuração

1. Certifique-se de que o arquivo `.env` está configurado corretamente:

```
DATABASE_URL="mysql://root:@localhost:3306/auth_db"
```

2. Execute as migrações para criar o banco de dados:

```bash
npm run migrate:dev
```

## Uso

Para utilizar este pacote em outros serviços, importe-o como dependência:

```json
{
  "dependencies": {
    "@monorepo/database": "1.0.0"
  }
}
```

E então importe os componentes necessários:

```typescript
import { prisma, UserRepository } from '@monorepo/database';

// Usando o cliente Prisma diretamente
const users = await prisma.user.findMany();

// Ou usando o repositório
const userRepository = new UserRepository();
const user = await userRepository.findByEmail('usuario@exemplo.com');
```
