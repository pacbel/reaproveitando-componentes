import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  className = '',
}) => {
  // Usando estilos inline para garantir que as cores sejam aplicadas corretamente
  const baseStyle = {
    borderRadius: '6px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    display: 'inline-block',
    textAlign: 'center' as const,
    border: '2px solid transparent'
  };
  
  const variantStyles = {
    primary: {
      backgroundColor: '#3B82F6',
      color: '#FFFFFF',
      border: '2px solid #3B82F6'
    },
    secondary: {
      backgroundColor: '#E5E7EB',
      color: '#1F2937',
      border: '2px solid #E5E7EB'
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#4B5563',
      border: '2px solid #D1D5DB'
    }
  };
  
  const sizeStyles = {
    small: {
      padding: '4px 12px',
      fontSize: '0.875rem'
    },
    medium: {
      padding: '8px 16px',
      fontSize: '1rem'
    },
    large: {
      padding: '12px 24px',
      fontSize: '1.125rem'
    }
  };
  
  const widthStyle = fullWidth ? { width: '100%' } : {};
  
  const style = {
    ...baseStyle,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...widthStyle
  };
  
  // Mantemos a classe para compatibilidade, mas os estilos principais vêm do style
  const classes = className;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={style}
    >
      {children}
    </button>
  );
};
