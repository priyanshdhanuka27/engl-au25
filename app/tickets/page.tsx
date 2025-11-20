// app/tickets/page.tsx
import React from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import GradientButton from '@/components/GradientButton';
import BackgroundCircles from '@/components/BackgroundCircles';

export default function TicketsPage() {
  const phases = [
    {
      number: 1,
      title: 'Proposal Review',
      status: 'Current',
      description: 'Grant committee is evaluating the proposal',
      active: true,
    },
    {
      number: 2,
      title: 'Approval and Planning',
      status: 'TBD',
      description: 'Funding confirmation and event logistics',
      active: false,
    },
    {
      number: 3,
      title: 'Ticket Launch',
      status: 'TBD',
      description: 'Public ticket sales begin',
      active: false,
    },
  ];

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <BackgroundCircles variant="purple" className="opacity-40" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full border border-uw-gold/30">
            <span className="text-uw-gold">🎫</span>
            <span className="text-uw-gold font-medium">Ticket Information</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            Tickets Coming Soon
          </h1>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center gradient-text mb-8">
            Expected Timeline
          </h2>

          <div className="space-y-6">
            {phases.map((phase, index) => (
              <Card
                key={phase.number}
                className={`animate-slide-up ${phase.active ? 'ring-2 ring-uw-purple glow-purple' : ''}`}
              >
                <div style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                        phase.active
                          ? 'bg-gradient-purple glow-purple'
                          : 'bg-white/5 border-2 border-white/20'
                      }`}
                    >
                      <span
                        className={`text-2xl font-bold ${
                          phase.active ? 'text-white' : 'text-uw-gold/50'
                        }`}
                      >
                        {phase.number}
                      </span>
                    </div>

                    <div className="flex-1 pt-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-uw-gold-light">
                          Phase {phase.number}: {phase.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            phase.active
                              ? 'bg-uw-purple/30 text-uw-purple border border-uw-purple'
                              : 'bg-white/5 text-uw-gold/50 border border-white/10'
                          }`}
                        >
                          {phase.status}
                        </span>
                      </div>
                      <p className="text-uw-gold-light/70 text-lg">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-uw-gold hover:text-uw-gold-light transition-colors duration-300 group"
          >
            <span className="transform group-hover:-translate-x-2 transition-transform duration-300">←</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}