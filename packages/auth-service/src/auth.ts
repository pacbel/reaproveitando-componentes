import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export interface AuthConfig {
  jwtSecret: string;
  jwtExpiresIn?: string;
  bcryptRounds?: number;
}

// Interface para o payload do JWT
export interface JWTPayload {
  userId: string;
  email: string;
  iat?: number;
  exp?: number;
}

export class AuthService {
  private config: AuthConfig;

  constructor(config: AuthConfig) {
    this.config = {
      jwtExpiresIn: '7d',
      bcryptRounds: 10,
      ...config,
    };
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !await bcrypt.compare(password, user.password)) {
      throw new Error('Credenciais inválidas');
    }

    // Criar o token JWT com tipagem simplificada
    // @ts-ignore - Ignorando erros de tipagem do JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      this.config.jwtSecret,
      { expiresIn: this.config.jwtExpiresIn || '7d' }
    );

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  }

  async register(email: string, password: string, name: string) {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error('Usuário já existe');
    }

    const saltRounds = this.config.bcryptRounds || 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  async validateToken(token: string) {
    try {
      // Verificar o token JWT com tipagem simplificada
      // @ts-ignore - Ignorando erros de tipagem do JWT
      const decoded = jwt.verify(token, this.config.jwtSecret) as JWTPayload;
      
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
      });

      if (!user) {
        throw new Error('Usuário não encontrado');
      }

      return {
        id: user.id,
        email: user.email,
        name: user.name,
      };
    } catch (error) {
      throw new Error('Token inválido');
    }
  }
}
