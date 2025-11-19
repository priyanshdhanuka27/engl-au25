// components/Footer.tsx
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-effect border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-purple flex items-center justify-center">
              <span className="text-xl">🎵</span>
            </div>
            <span className="text-xl font-bold gradient-text">NightPulse Seattle</span>
          </div>
          
          <p className="text-uw-gold/70 text-center text-sm">
            Priyansh Dhanuka's grant proposal for ENGL 131
          </p>
          
          <p className="text-uw-gold/50 text-sm">
            © {currentYear} NightPulse Seattle.
          </p>
        </div>
      </div>
    </footer>
  );
}
