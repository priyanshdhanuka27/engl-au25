// components/GradientButton.tsx
'use client';

import React from 'react';
import Link from 'next/link';

interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'default' | 'gold';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function GradientButton({ 
  children, 
  href, 
  onClick, 
  variant = 'default', 
  className = '',
  type = 'button',
  disabled = false
}: GradientButtonProps) {
  const baseStyles = `
    relative inline-flex items-center justify-center
    rounded-xl min-w-[132px] px-9 py-4
    text-base font-bold text-white
    transition-all duration-300
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-uw-gold
    disabled:pointer-events-none disabled:opacity-50
    overflow-hidden group
  `;

  const variantStyles = variant === 'default'
    ? `
        bg-gradient-to-r from-uw-purple via-uw-purple-dark to-uw-purple
        hover:shadow-[0_0_30px_rgba(75,46,131,0.5)]
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-uw-gold before:to-uw-purple
        before:opacity-0 before:transition-opacity before:duration-300
        hover:before:opacity-100
      `
    : `
        bg-gradient-to-r from-uw-gold via-uw-gold-light to-uw-gold
        hover:shadow-[0_0_30px_rgba(183,165,122,0.5)]
        text-uw-purple-dark
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-uw-purple before:to-uw-purple-dark
        before:opacity-0 before:transition-opacity before:duration-300
        hover:before:opacity-100
      `;

  const combinedStyles = `${baseStyles} ${variantStyles} ${className}`;

  const content = (
    <>
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
      {/* Animated shine effect */}
      <span 
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
          animation: 'shine 2s infinite',
        }}
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className={combinedStyles}
    >
      {content}
    </button>
  );
}
