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
  // Verificar se o método é GET
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    // Obter o token do cabeçalho de autorização
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Token não fornecido' });
    }
    
    // Extrair o token do cabeçalho
    const token = authHeader.substring(7);
    
    // Validar o token usando o serviço compartilhado
    const user = await authService.validateToken(token);
    
    // Retornar os dados do usuário
    res.status(200).json({ user });
  } catch (error) {
    // Tratar erros
    res.status(401).json({ 
      message: error instanceof Error ? error.message : 'Token inválido' 
    });
  }
}
