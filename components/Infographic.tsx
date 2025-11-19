// components/Infographic.tsx
'use client';

import React from 'react';
import Card from './Card';

export default function Infographic() {
  const sections = [
    {
      icon: '💜',
      title: 'Mental Health Benefits',
      stats: [
        { label: '79% use music during difficult times', highlight: true },
        { label: 'EDM ranked #1 by healthcare professionals', highlight: false },
        { label: 'High-BPM music boosts mood & reduces stress', highlight: false },
      ],
      color: 'purple',
    },
    {
      icon: '🎵',
      title: 'Community Impact',
      stats: [
        { label: 'Boosts local economy', highlight: false },
        { label: 'Increases artist visibility', highlight: false },
        { label: 'Fosters community pride', highlight: true },
      ],
      color: 'gold',
    },
    {
      icon: '🌱',
      title: 'Sustainability Goals',
      stats: [
        { label: '60% waste reduction target', highlight: true },
        { label: 'Renewable energy powered', highlight: false },
        { label: 'Green vendor partnerships', highlight: false },
      ],
      color: 'purple',
    },
  ];

  return (
    <div className="space-y-8">
      {sections.map((section, index) => (
        <Card key={index} className="animate-fade-in" hover={false} style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Icon */}
            <div className={`w-20 h-20 rounded-2xl ${
              section.color === 'purple' ? 'bg-gradient-purple glow-purple' : 'bg-gradient-gold glow-gold'
            } flex items-center justify-center flex-shrink-0`}>
              <span className="text-4xl">{section.icon}</span>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className={`text-2xl font-bold mb-4 ${
                section.color === 'purple' ? 'gradient-text-purple' : 'gradient-text'
              }`}>
                {section.title}
              </h3>
              
              <div className="space-y-3">
                {section.stats.map((stat, statIndex) => (
                  <div 
                    key={statIndex}
                    className={`flex items-center justify-center md:justify-start space-x-2 ${
                      stat.highlight ? 'text-uw-gold-light font-semibold' : 'text-uw-gold/80'
                    }`}
                  >
                    <span className={stat.highlight ? 'text-uw-gold' : 'text-uw-gold/50'}>
                      {stat.highlight ? '★' : '•'}
                    </span>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual indicator */}
            <div className={`hidden lg:flex items-center justify-center w-24 h-24 rounded-full ${
              section.color === 'purple' ? 'bg-uw-purple/20 border-2 border-uw-purple' : 'bg-uw-gold/20 border-2 border-uw-gold'
            }`}>
              <span className={`text-4xl font-bold ${
                section.color === 'purple' ? 'text-uw-purple' : 'text-uw-gold'
              }`}>
                {index + 1}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
