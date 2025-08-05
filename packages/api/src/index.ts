import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AuthService } from '@monorepo/auth-service';
import { UserRepository } from '@monorepo/database';

// Configuração do ambiente
dotenv.config();

// Configuração do servidor
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Inicialização do serviço de autenticação
const authService = new AuthService({
  jwtSecret: process.env.JWT_SECRET || 'sua_chave_secreta_aqui',
  jwtExpiresIn: '1d',
});

// Rotas de autenticação
app.post('/api/auth/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email e senha são obrigatórios' 
      });
    }
    
    const result = await authService.login(email, password);
    
    return res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(401).json({ 
      success: false, 
      message: 'Credenciais inválidas' 
    });
  }
});

app.post('/api/auth/register', async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Nome, email e senha são obrigatórios' 
      });
    }
    
    const user = await authService.register(email, password, name);
    
    return res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Erro no registro:', error);
    return res.status(400).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Erro ao registrar usuário' 
    });
  }
});

app.get('/api/auth/me', async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        success: false, 
        message: 'Token não fornecido' 
      });
    }
    
    const token = authHeader.split(' ')[1];
    const user = await authService.validateToken(token);
    
    return res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Erro na validação do token:', error);
    return res.status(401).json({ 
      success: false, 
      message: 'Token inválido' 
    });
  }
});

// Rota de teste
app.get('/api/health', (req: Request, res: Response) => {
  return res.status(200).json({ 
    status: 'ok', 
    message: 'API funcionando corretamente' 
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
