// Exportando o cliente Prisma
export { prisma, getPrismaClient } from './client';

// Exportando os tipos e modelos
export * from './models';

// Exportando os repositórios
export { UserRepository } from './repositories/user-repository';
