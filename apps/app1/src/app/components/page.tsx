'use client';

import { Button } from '@monorepo/shared-ui';
import Link from 'next/link';

export default function ComponentesPage() {
  const handleAlerta = (mensagem: string = 'Botão clicado!') => {
    alert(mensagem);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Componentes Reutilizáveis - Aplicação Raiz</h1>
        
        <div style={{ 
          backgroundColor: 'white', 
          padding: '1.5rem', 
          borderRadius: '0.5rem', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
          marginBottom: '2rem' 
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Botões Compartilhados</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Estes botões são importados do pacote compartilhado @monorepo/shared-ui e podem ser
            utilizados em qualquer aplicativo do monorepo, incluindo o aplicativo raiz.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <Button variant="primary" onClick={() => handleAlerta('Botão primário clicado!')}>
              Botão Primário
            </Button>
            
            <Button variant="secondary" onClick={() => handleAlerta('Botão secundário clicado!')}>
              Botão Secundário
            </Button>
            
            <Button variant="outline" onClick={() => handleAlerta('Botão outline clicado!')}>
              Botão Outline
            </Button>
            
            <Button variant="primary" size="small" onClick={() => handleAlerta('Botão pequeno clicado!')}>
              Botão Pequeno
            </Button>
            
            <Button variant="primary" size="large" onClick={() => handleAlerta('Botão grande clicado!')}>
              Botão Grande
            </Button>
          </div>
          
          <div style={{ marginTop: '1.5rem' }}>
            <Button variant="primary" fullWidth onClick={() => handleAlerta('Botão de largura total clicado!')}>
              Botão Largura Total
            </Button>
          </div>
        </div>
        
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Button variant="secondary">
            Voltar para página inicial
          </Button>
        </Link>
      </div>
    </div>
  );
}
