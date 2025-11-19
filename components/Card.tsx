// components/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div 
      className={`
        glass-effect rounded-2xl p-8 
        ${hover ? 'transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:glow-purple' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
