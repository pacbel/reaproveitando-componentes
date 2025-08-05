import { prisma } from '../client';
import { CreateUserInput, UpdateUserInput, User } from '../models';

export class UserRepository {
  /**
   * Busca um usuário pelo ID
   */
  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  /**
   * Busca um usuário pelo email
   */
  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  /**
   * Lista todos os usuários
   */
  async findAll(): Promise<User[]> {
    return prisma.user.findMany();
  }

  /**
   * Cria um novo usuário
   */
  async create(data: CreateUserInput): Promise<User> {
    return prisma.user.create({
      data,
    });
  }

  /**
   * Atualiza um usuário existente
   */
  async update(id: string, data: UpdateUserInput): Promise<User> {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  /**
   * Remove um usuário
   */
  async delete(id: string): Promise<User> {
    return prisma.user.delete({
      where: { id },
    });
  }
}
