'use client';

import { Button } from '@monorepo/shared-ui';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ComponentesPage() {
  const router = useRouter();

  const handleVoltar = () => {
    router.push('/');
  };

  const handleAlerta = (mensagem: string) => {
    alert(`Ação: ${mensagem}`);
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Componentes Reutilizáveis - App 2</h1>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8 border-t-4 border-purple-500">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              Demonstração de Botões
            </h2>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6 rounded">
              <p className="text-gray-700">
                Estes são os mesmos botões utilizados no Aplicativo 1, importados do pacote compartilhado 
                <code className="bg-gray-100 px-1 py-0.5 rounded text-indigo-700 mx-1">@monorepo/shared-ui</code>, mas com estilos adaptados ao tema deste aplicativo.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Ações Comuns
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6 p-4 bg-gray-50 rounded-lg">
                <Button 
                  variant="primary" 
                  onClick={() => handleAlerta('Salvar dados')}
                >
                  Salvar
                </Button>
                
                <Button 
                  variant="secondary" 
                  onClick={() => handleAlerta('Cancelar operação')}
                >
                  Cancelar
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => handleAlerta('Editar item')}
                >
                  Editar
                </Button>
                
                <Button 
                  variant="primary" 
                  size="small" 
                  onClick={() => handleAlerta('Adicionar item')}
                >
                  Adicionar
                </Button>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
                </svg>
                Formulário Completo
              </h3>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Nome Completo</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Digite seu nome" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="seu@email.com" />
                </div>
                <Button 
                  variant="primary" 
                  fullWidth 
                  onClick={() => handleAlerta('Enviar formulário')}
                >
                  Enviar Formulário
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar para página inicial
            </Link>
            
            <Link 
              href="/login" 
              className="inline-flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Ir para Login
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} AppTwo - Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}
