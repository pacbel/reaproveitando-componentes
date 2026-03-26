import { PrismaClient } from './generated/client';

// Singleton para garantir apenas uma instância do PrismaClient
let prismaInstance: PrismaClient | null = null;

export function getPrismaClient(): PrismaClient {
  if (!prismaInstance) {
    prismaInstance = new PrismaClient();
  }
  return prismaInstance;
}

// Exporta uma instância do cliente para uso direto
export const prisma = getPrismaClient();
