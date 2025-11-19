// components/NewsletterForm.tsx
'use client';

import React, { useState } from 'react';
import Button from './Button';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset status
    setStatus('idle');
    setErrorMessage('');

    // Validate email
    if (!email) {
      setErrorMessage('Please enter your email address');
      setStatus('error');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }

    // Simulate success (client-side only)
    console.log('Newsletter signup:', email);
    setStatus('success');
    setEmail('');

    // Reset success message after 5 seconds
    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-xl glass-effect border-2 border-uw-gold/30 focus:border-uw-gold focus:outline-none text-uw-gold-light placeholder:text-uw-gold/50 transition-all duration-300"
            aria-label="Email address"
          />
          <Button type="submit" variant="primary">
            Notify Me
          </Button>
        </div>

        {status === 'success' && (
          <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/50 animate-fade-in">
            <p className="text-green-300 text-center font-medium">
              ✓ Thanks! We'll notify you when tickets are available.
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 animate-fade-in">
            <p className="text-red-300 text-center font-medium">
              {errorMessage}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
