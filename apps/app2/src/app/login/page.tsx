'use client';

import { LoginForm } from '@monorepo/shared-ui';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();

  const handleLoginSuccess = (user: any) => {
    // Redirecionar para o dashboard após login bem-sucedido
    router.push('/dashboard');
  };

  const handleLoginError = (error: string) => {
    // Exibir mensagem de erro
    console.error('Erro de login:', error);
    // O alerta será mostrado pelo próprio componente LoginForm
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 flex flex-col">
      {/* Header */}
      <header className="w-full bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-indigo-700">App<span className="text-purple-600">Two</span></h2>
          <nav>
            <ul className="flex gap-6">
              <li><Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">Início</Link></li>
              <li><Link href="/login" className="text-indigo-600 hover:text-indigo-800 font-medium">Login</Link></li>
              <li><Link href="/components" className="text-indigo-600 hover:text-indigo-800 font-medium">Componentes</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* Login Container */}
      <div className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-md border-t-4 border-purple-500">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Bem-vindo ao AppTwo</h1>
            <p className="text-gray-600 mt-1">Faça login para acessar sua conta</p>
          </div>
          
          <LoginForm
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
            theme="dark"
            title=""
            className="app2-login-form"
          />
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-4">Ainda não tem uma conta? <a href="#" className="text-purple-600 hover:underline font-medium">Registre-se</a></p>
            
            <Link 
              href="/"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar para página inicial
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} AppTwo - Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}
