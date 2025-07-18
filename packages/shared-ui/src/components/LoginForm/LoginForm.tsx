import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import './LoginForm.css';

export interface LoginFormProps {
  onSuccess?: (user: any) => void;
  onError?: (error: string) => void;
  className?: string;
  theme?: 'light' | 'dark';
  title?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSuccess,
  onError,
  className = '',
  theme = 'light',
  title = 'Login'
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const user = await login(email, password);
      onSuccess?.(user);
    } catch (error) {
      onError?.(error instanceof Error ? error.message : 'Erro no login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`login-container ${theme} ${className}`}>
      <h2 className="login-title">{title}</h2>
      <form 
        onSubmit={handleSubmit}
        className="login-form"
      >
        <div className="form-group">
          <label htmlFor="email" className="input-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Email
          </label>
          <div className="input-wrapper">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
              placeholder="Digite seu email"
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="input-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Senha
          </label>
          <div className="input-wrapper">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
              placeholder="Digite sua senha"
            />
          </div>
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="login-button"
        >
          {loading ? (
            <>
              <svg className="spinner" viewBox="0 0 50 50">
                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
              </svg>
              Entrando...
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
              Entrar
            </>
          )}
        </button>
      </form>
    </div>
  );
};
