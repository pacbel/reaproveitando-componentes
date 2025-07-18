'use client';

import { LoginForm } from '@monorepo/shared-ui';
import { useAuth } from '../providers/AuthProvider';
import { Button } from '@monorepo/shared-ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AutenticacaoPage() {
  const router = useRouter();
  const { login, user, logout } = useAuth();
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleLoginSuccess = (user: any) => {
    setMensagem('Login realizado com sucesso!');
    setTimeout(() => {
      router.push('/');
    }, 1500);
  };

  const handleLoginError = (error: string) => {
    setMensagem('Erro ao fazer login. Tente com email: teste@exemplo.com e senha: 123456');
  };

  const handleLogout = () => {
    logout();
    setMensagem('Logout realizado com sucesso!');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ 
        maxWidth: '550px', 
        width: '100%',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}>
        <div style={{
          backgroundColor: '#2563eb',
          padding: '1.5rem',
          color: 'white',
          textAlign: 'center',
          borderBottom: '4px solid #1d4ed8'
        }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>
            Autenticação - Aplicação Raiz
          </h1>
        </div>
        
        <div style={{ 
          padding: '2.5rem', 
          background: 'linear-gradient(to bottom, #ffffff, #f9fafb)'
        }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '600', 
            marginBottom: '1rem', 
            color: '#1e40af', 
            textAlign: 'center',
            position: 'relative',
            paddingBottom: '0.75rem'
          }}>
            Formulário de Login Compartilhado
            <span style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '50px',
              height: '3px',
              backgroundColor: '#3b82f6',
              borderRadius: '3px'
            }}></span>
          </h2>
          <p style={{ 
            marginBottom: '2rem', 
            color: '#6b7280', 
            fontSize: '0.95rem',
            textAlign: 'center',
            lineHeight: '1.6',
            maxWidth: '400px',
            margin: '0 auto 2rem'
          }}>
            Este formulário é importado do pacote compartilhado <strong style={{ color: '#2563eb' }}>@monorepo/shared-ui</strong> e pode ser
            utilizado em qualquer aplicativo do monorepo.
          </p>
          
          {user ? (
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                padding: '1.5rem',
                backgroundColor: '#f0f9ff',
                borderRadius: '10px',
                marginBottom: '2rem',
                border: '1px solid #bae6fd',
                boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '5px',
                  height: '100%',
                  backgroundColor: '#0ea5e9'
                }}></div>
                
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  backgroundColor: '#e0f2fe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  border: '3px solid #bae6fd'
                }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0284c7' }}>
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                
                <p style={{ marginBottom: '0.75rem', fontWeight: '600', color: '#0369a1', fontSize: '1.1rem' }}>
                  Usuário logado com sucesso!
                </p>
                <p style={{ color: '#0c4a6e', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  <strong>{user.name}</strong>
                </p>
                <p style={{ color: '#0c4a6e', fontSize: '0.9rem', opacity: 0.8 }}>
                  {user.email}
                </p>
              </div>
              <Button variant="primary" onClick={handleLogout}>
                Fazer Logout
              </Button>
            </div>
          ) : (
            <div style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box', padding: '0 0.5rem' }}>
              <LoginForm 
                onSuccess={handleLoginSuccess} 
                onError={handleLoginError} 
                className=""
                theme="light" 
                title="Acesse sua conta"
              />
            </div>
          )}
          
          {mensagem && (
            <div style={{ 
              marginTop: '2rem', 
              padding: '1rem 1.25rem', 
              backgroundColor: mensagem.includes('Erro') ? '#fee2e2' : '#dcfce7',
              color: mensagem.includes('Erro') ? '#b91c1c' : '#166534',
              borderRadius: '0.75rem',
              textAlign: 'center',
              fontSize: '0.95rem',
              position: 'relative',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              border: mensagem.includes('Erro') ? '1px solid #fecaca' : '1px solid #bbf7d0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {mensagem.includes('Erro') ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem', flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem', flexShrink: 0 }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              )}
              <span style={{ fontWeight: '500' }}>{mensagem}</span>
            </div>
          )}
          
          <div style={{ 
            marginTop: '2.5rem',
            textAlign: 'center',
            borderTop: '1px solid #e5e7eb',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button variant="secondary">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  Voltar para página inicial
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
