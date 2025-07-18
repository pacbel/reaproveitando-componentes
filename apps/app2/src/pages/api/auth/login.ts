import { NextApiRequest, NextApiResponse } from 'next';
import { AuthService } from '@monorepo/auth-service';

// Inicializar o serviço de autenticação
const authService = new AuthService({
  jwtSecret: process.env.JWT_SECRET || 'sua_chave_secreta_temporaria',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Verificar se o método é POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    const { email, password } = req.body;
    
    // Validar dados de entrada
    if (!email || !password) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios' });
    }
    
    // Tentar realizar o login usando o serviço compartilhado
    const result = await authService.login(email, password);
    
    // Retornar o resultado
    res.status(200).json(result);
  } catch (error) {
    // Tratar erros
    res.status(401).json({ 
      message: error instanceof Error ? error.message : 'Erro no login' 
    });
  }
}
