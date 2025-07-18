'use client';

import { Button } from '@monorepo/shared-ui';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ComponentesPage() {
  const router = useRouter();

  const handleVoltar = () => {
    router.push('/');
  };

  const handleAlerta = () => {
    alert('Botão clicado!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 flex flex-col">
      {/* Header */}
      <header className="w-full bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">App<span className="text-green-600">One</span></h2>
          <nav>
            <ul className="flex gap-6">
              <li><Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">Início</Link></li>
              <li><Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">Login</Link></li>
              <li><Link href="/components" className="text-blue-600 hover:text-blue-800 font-medium">Componentes</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Componentes Reutilizáveis</h1>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              Botões Compartilhados
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
              <p className="text-gray-700">
                Estes botões são importados do pacote compartilhado <code className="bg-gray-100 px-1 py-0.5 rounded text-blue-700">@monorepo/shared-ui</code> e podem ser
                utilizados em qualquer aplicativo do monorepo.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Variações de Botões</h3>
              <div className="flex flex-wrap gap-3 mb-6 p-4 bg-gray-50 rounded-lg">
                <Button variant="primary" onClick={handleAlerta}>
                  Botão Primário
                </Button>
                
                <Button variant="secondary" onClick={handleAlerta}>
                  Botão Secundário
                </Button>
                
                <Button variant="outline" onClick={handleAlerta}>
                  Botão Outline
                </Button>
              </div>
              
              <h3 className="text-lg font-medium text-gray-700 mb-3">Tamanhos</h3>
              <div className="flex flex-wrap items-center gap-3 mb-6 p-4 bg-gray-50 rounded-lg">
                <Button variant="primary" size="small" onClick={handleAlerta}>
                  Botão Pequeno
                </Button>
                
                <Button variant="primary" onClick={handleAlerta}>
                  Botão Médio
                </Button>
                
                <Button variant="primary" size="large" onClick={handleAlerta}>
                  Botão Grande
                </Button>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Largura Total</h3>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Button variant="primary" fullWidth onClick={handleAlerta}>
                  Botão Largura Total
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar para página inicial
            </Link>
            
            <Link 
              href="/login" 
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
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
      <footer className="bg-white border-t border-gray-200 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AppOne - Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}
