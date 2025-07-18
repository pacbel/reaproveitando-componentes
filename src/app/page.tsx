'use client';

import Link from "next/link";
import { Button } from "@monorepo/shared-ui";
import { useAuth } from "./providers/AuthProvider";

// Componente de card para features
function FeatureCard({ title, description }: { title: string, description: string }) {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '2rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e3a8a' }}>{title}</h3>
      <p style={{ color: '#4b5563', lineHeight: '1.6' }}>{description}</p>
    </div>
  );
}

// Componente de card para apps
function AppCard({ 
  title, 
  description, 
  path, 
  external = false 
}: { 
  title: string, 
  description: string, 
  path: string,
  external?: boolean 
}) {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '2rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e3a8a' }}>{title}</h3>
      <p style={{ color: '#4b5563', lineHeight: '1.6', flex: 1 }}>{description}</p>
      
      {external ? (
        <a 
          href={path} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button variant="secondary">
            Abrir em nova aba
          </Button>
        </a>
      ) : (
        <Link href={path} style={{ textDecoration: 'none' }}>
          <Button variant="secondary">
            Acessar
          </Button>
        </Link>
      )}
    </div>
  );
}

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)',
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Cabeçalho */}
      <header style={{
        width: '100%',
        backgroundColor: '#2563eb',
        color: 'white',
        padding: '1rem 2rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Monorepo Next.js</div>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.9rem' }}>Olá, {user.name}</span>
              <Button variant="secondary" onClick={logout}>
                Sair
              </Button>
            </div>
          ) : (
            <Link href="/autenticacao" style={{ textDecoration: 'none' }}>
              <Button variant="secondary">
                Entrar
              </Button>
            </Link>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        width: '100%',
        maxWidth: '1200px',
        padding: '4rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '2rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#1e3a8a',
          marginBottom: '1rem'
        }}>
          Monorepo com Next.js e Tailwind CSS
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          color: '#4b5563',
          maxWidth: '800px',
          lineHeight: '1.7',
          marginBottom: '2rem'
        }}>
          Exemplo de monorepo com múltiplos aplicativos Next.js compartilhando componentes, 
          estilos e lógica de autenticação. Uma solução elegante para projetos escaláveis.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/componentes" style={{ textDecoration: 'none' }}>
            <Button variant="primary">
              Ver Componentes Compartilhados
            </Button>
          </Link>
          
          <Link href="/autenticacao" style={{ textDecoration: 'none' }}>
            <Button variant="secondary">
              Testar Autenticação
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        width: '100%',
        backgroundColor: 'white',
        padding: '4rem 2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            color: '#1e3a8a', 
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Recursos do Monorepo
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem'
          }}>
            <FeatureCard 
              title="Componentes Compartilhados" 
              description="Reutilize componentes UI em todos os aplicativos do monorepo, mantendo consistência visual e reduzindo duplicação de código."
            />
            
            <FeatureCard 
              title="Autenticação Unificada" 
              description="Sistema de autenticação compartilhado entre todos os aplicativos, com hooks personalizados e formulários reutilizáveis."
            />
            
            <FeatureCard 
              title="Tailwind CSS v4" 
              description="Estilização consistente usando Tailwind CSS versão 4 com configuração compartilhada entre todos os projetos."
            />
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section style={{
        width: '100%',
        padding: '4rem 2rem',
        background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            color: '#1e3a8a', 
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Aplicativos no Monorepo
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem'
          }}>
            <AppCard 
              title="Aplicativo Raiz" 
              description="O aplicativo principal que você está visualizando agora."
              path="/"
            />
            
            <AppCard 
              title="App 1" 
              description="Primeiro aplicativo que utiliza os componentes compartilhados."
              path="http://localhost:3000"
              external
            />
            
            <AppCard 
              title="App 2" 
              description="Segundo aplicativo que também utiliza os componentes compartilhados."
              path="http://localhost:3001"
              external
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        width: '100%',
        backgroundColor: '#1e3a8a',
        color: 'white',
        padding: '2rem',
        marginTop: 'auto'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Monorepo Next.js</h3>
            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Exemplo de arquitetura escalável para projetos Next.js</p>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/componentes" style={{ color: 'white', textDecoration: 'none', opacity: 0.8, fontSize: '0.9rem' }}>
              Componentes
            </Link>
            <Link href="/autenticacao" style={{ color: 'white', textDecoration: 'none', opacity: 0.8, fontSize: '0.9rem' }}>
              Autenticação
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
