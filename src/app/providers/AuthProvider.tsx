'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<User>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Usuário de demonstração para simular autenticação
const DEMO_USER = {
  id: '1',
  email: 'teste@exemplo.com',
  name: 'Usuário de Teste'
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar se há token no localStorage
    const token = localStorage.getItem('auth_token');
    if (token) {
      // Simular validação de token
      try {
        const userData = JSON.parse(localStorage.getItem('auth_user') || '');
        setUser(userData);
      } catch (error) {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_user');
      }
    }
    
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<User> => {
    // Simular uma chamada de API com um atraso
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Para fins de demonstração, aceitar apenas um usuário específico
        if (email === 'teste@exemplo.com' && password === '123456') {
          localStorage.setItem('auth_token', 'demo-token-123');
          localStorage.setItem('auth_user', JSON.stringify(DEMO_USER));
          setUser(DEMO_USER);
          resolve(DEMO_USER);
        } else {
          reject(new Error('Credenciais inválidas'));
        }
      }, 800); // Simular atraso de rede
    });
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
