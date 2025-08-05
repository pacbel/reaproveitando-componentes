// Definindo os tipos manualmente até que o Prisma Client seja gerado
// Estes tipos devem corresponder ao schema.prisma

// Tipo para User do Prisma
export interface PrismaUser {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

// Tipo para Post do Prisma
export interface PrismaPost {
  id: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Exportando os tipos dos modelos para uso em outros pacotes
export type User = PrismaUser;
export type Post = PrismaPost;

// Tipos para criação de usuários
export interface CreateUserInput {
  email: string;
  name: string;
  password: string;
}

// Tipos para atualização de usuários
export interface UpdateUserInput {
  email?: string;
  name?: string;
  password?: string;
}

// Tipos para criação de posts
export interface CreatePostInput {
  title: string;
  content: string;
  published?: boolean;
  authorId: string;
}

// Tipos para atualização de posts
export interface UpdatePostInput {
  title?: string;
  content?: string;
  published?: boolean;
}
