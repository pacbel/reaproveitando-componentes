import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{ 
        background: 'linear-gradient(to right, #2563eb, #10b981)', 
        padding: '1rem', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <div style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>AppOne</div>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Início</Link>
            <Link href="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
            <Link href="/components" style={{ color: 'white', textDecoration: 'none' }}>Componentes</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(to bottom, #3b82f6, #10b981)', 
        padding: '5rem 0', 
        color: 'white', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Aplicativo 1 - Monorepo</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '36rem', margin: '0 auto 2rem' }}>
            Exemplo de aplicativo utilizando a técnica de Monorepo com Workspaces para reutilização de componentes entre projetos.
          </p>
          <button style={{ 
            background: 'white', 
            color: '#2563eb', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '0.5rem', 
            fontWeight: 'bold', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: 'none',
            cursor: 'pointer'
          }}>
            Começar agora
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 0', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#1f2937' }}>Recursos do Monorepo</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            {/* Feature 1 */}
            <div style={{ 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '0.75rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                width: '3rem', 
                height: '3rem', 
                background: '#dbeafe', 
                borderRadius: '9999px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '1rem' 
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{color: '#2563eb'}}>
                  <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>Componentes Compartilhados</h3>
              <p style={{ color: '#4b5563' }}>Reutilize componentes como formulários de login e botões entre diferentes aplicativos.</p>
            </div>
            
            {/* Feature 2 */}
            <div style={{ 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '0.75rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                width: '3rem', 
                height: '3rem', 
                background: '#d1fae5', 
                borderRadius: '9999px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '1rem' 
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{color: '#16a34a'}}>
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>Serviços de Autenticação</h3>
              <p style={{ color: '#4b5563' }}>Utilize o mesmo serviço de autenticação em todos os aplicativos do monorepo.</p>
            </div>
            
            {/* Feature 3 */}
            <div style={{ 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '0.75rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                width: '3rem', 
                height: '3rem', 
                background: '#dbeafe', 
                borderRadius: '9999px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '1rem' 
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{color: '#2563eb'}}>
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>Instalação Simplificada</h3>
              <p style={{ color: '#4b5563' }}>Execute npm install uma única vez na raiz para instalar todas as dependências do workspace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1f2937' }}>Pronto para explorar?</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#4b5563', maxWidth: '36rem', margin: '0 auto 2rem' }}>
            Acesse as páginas de demonstração para ver os componentes compartilhados em ação.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '24rem', margin: '0 auto' }}>
            <Link 
              href="/login" 
              style={{ 
                background: 'white', 
                color: '#15803d', 
                padding: '0.75rem 1.5rem', 
                borderRadius: '0.5rem', 
                fontWeight: 'bold', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                flex: 1
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{color: '#15803d'}}>
                <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Acessar Login
            </Link>
            
            <Link 
              href="/components" 
              style={{ 
                background: '#14532d', 
                color: 'white', 
                padding: '0.75rem 1.5rem', 
                borderRadius: '0.5rem', 
                fontWeight: 'bold', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                border: '1px solid #16a34a',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                flex: 1
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{color: 'white'}}>
                <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Ver Componentes
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        marginTop: 'auto', 
        background: 'white', 
        borderTop: '1px solid #e5e7eb', 
        padding: '2rem 0' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            alignItems: 'center'
          }}>
            <div style={{ color: '#2563eb', fontWeight: 'bold', marginBottom: '1rem' }}>AppOne</div>
            <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>
              Exemplo de monorepo com Next.js
            </div>
            <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>
              &copy; {new Date().getFullYear()} AppOne - Todos os direitos reservados
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
