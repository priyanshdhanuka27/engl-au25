// components/Button.tsx
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95";
  
  const variantStyles = {
    primary: "bg-gradient-purple text-white glow-purple hover:glow-gold",
    secondary: "glass-effect text-uw-gold hover:bg-white/10 border-2 border-uw-gold/30 hover:border-uw-gold"
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
