'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@monorepo/shared-ui';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar autenticação
    if (!isAuthenticated && !loading) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, loading, router]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard - Aplicativo 2</h1>
          <button
            onClick={handleLogout}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            Sair
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Bem-vindo, {user?.name || 'Usuário'}!</h2>
          <p className="mb-2">
            Esta é uma página protegida do Aplicativo 2 que só pode ser acessada após o login.
          </p>
          <p>
            Observe que este aplicativo possui um tema visual diferente do Aplicativo 1,
            mas utiliza os mesmos componentes de login e serviços de autenticação.
          </p>
        </div>
      </div>
    </div>
  );
}
