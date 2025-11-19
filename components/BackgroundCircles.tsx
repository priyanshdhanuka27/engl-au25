// components/BackgroundCircles.tsx
'use client';

import React from 'react';

interface BackgroundCirclesProps {
  variant?: 'purple' | 'gold';
  className?: string;
}

export default function BackgroundCircles({ 
  variant = 'purple',
  className = '' 
}: BackgroundCirclesProps) {
  const colors = variant === 'purple' 
    ? {
        circle1: 'border-uw-purple/60',
        circle2: 'border-uw-purple-dark/50',
        circle3: 'border-uw-purple/30',
        gradient: 'from-uw-purple/30',
        glow: 'bg-uw-purple/10',
      }
    : {
        circle1: 'border-uw-gold/60',
        circle2: 'border-uw-gold-light/50',
        circle3: 'border-uw-gold/30',
        gradient: 'from-uw-gold/30',
        glow: 'bg-uw-gold/10',
      };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="h-full w-full animate-gradient-shift"
          style={{
            backgroundImage: 'repeating-linear-gradient(100deg, #4b2e83 0%, #4b2e83 1px, transparent 1px, transparent 4%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      {/* Rotating Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[480px] w-[480px]">
        {/* Circle 1 - Outermost */}
        <div 
          className={`absolute inset-0 rounded-full border-2 bg-gradient-to-br to-transparent ${colors.circle1} ${colors.gradient}`}
          style={{
            animation: 'spin 20s linear infinite, pulse 5s ease-in-out infinite',
          }}
        >
          <div className={`absolute inset-0 rounded-full mix-blend-screen ${colors.glow} blur-xl`} />
        </div>

        {/* Circle 2 - Middle */}
        <div 
          className={`absolute inset-0 rounded-full border-2 bg-gradient-to-br to-transparent ${colors.circle2} ${colors.gradient}`}
          style={{
            animation: 'spin 15s linear infinite reverse, pulse 5s ease-in-out infinite 0.5s',
          }}
        >
          <div className={`absolute inset-0 rounded-full mix-blend-screen ${colors.glow} blur-xl`} />
        </div>

        {/* Circle 3 - Innermost */}
        <div 
          className={`absolute inset-0 rounded-full border-2 bg-gradient-to-br to-transparent ${colors.circle3} ${colors.gradient}`}
          style={{
            animation: 'spin 10s linear infinite, pulse 5s ease-in-out infinite 1s',
          }}
        >
          <div className={`absolute inset-0 rounded-full mix-blend-screen ${colors.glow} blur-xl`} />
        </div>
      </div>

      {/* Radial Glow Effects */}
      <div className="absolute inset-0 opacity-50" style={{
        maskImage: 'radial-gradient(90% 60% at 50% 50%, #000 40%, transparent)',
      }}>
        <div className={`absolute inset-0 ${variant === 'purple' ? 'bg-uw-purple/20' : 'bg-uw-gold/20'} blur-[120px]`} />
        <div className={`absolute inset-0 ${variant === 'purple' ? 'bg-uw-purple/10' : 'bg-uw-gold/10'} blur-[80px]`} />
      </div>
    </div>
  );
}
