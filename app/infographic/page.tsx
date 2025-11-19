// app/infographic/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import Infographic from '@/components/Infographic';
import GradientButton from '@/components/GradientButton';

export default function InfographicPage() {
  const [showMessage, setShowMessage] = useState(false);

  const handleDownload = () => {
    setShowMessage(true);
    console.log('PDF download requested (feature coming soon)');
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleShare = (platform: string) => {
    console.log(`Share to ${platform} clicked (feature coming soon)`);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full border border-uw-gold/30">
            <span className="text-uw-gold">📊</span>
            <span className="text-uw-gold font-medium">Impact Visualization</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            Festival Impact at a Glance
          </h1>

          <p className="text-xl text-uw-gold-light/80 max-w-2xl mx-auto leading-relaxed">
            Data-driven insights into mental health, community, and sustainability
          </p>
        </div>

        {/* Main Infographic */}
        <div className="mb-12">
          <Infographic />
        </div>

        {/* Action Buttons */}
        <Card className="space-y-6">
          <h2 className="text-2xl font-bold text-center gradient-text">
            Share This Data
          </h2>

          {/* Download Button */}
          <div className="text-center">
            <GradientButton onClick={handleDownload}>
              📥 Download as PDF
            </GradientButton>
          </div>

          {/* Share Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleShare('Twitter')}
              className="px-6 py-3 rounded-xl glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-105 text-uw-gold-light font-medium border border-uw-gold/30 hover:border-uw-gold"
            >
              🐦 Twitter
            </button>
            <button
              onClick={() => handleShare('Facebook')}
              className="px-6 py-3 rounded-xl glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-105 text-uw-gold-light font-medium border border-uw-gold/30 hover:border-uw-gold"
            >
              📘 Facebook
            </button>
            <button
              onClick={() => handleShare('LinkedIn')}
              className="px-6 py-3 rounded-xl glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-105 text-uw-gold-light font-medium border border-uw-gold/30 hover:border-uw-gold"
            >
              💼 LinkedIn
            </button>
            <button
              onClick={() => handleShare('Instagram')}
              className="px-6 py-3 rounded-xl glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-105 text-uw-gold-light font-medium border border-uw-gold/30 hover:border-uw-gold"
            >
              📷 Instagram
            </button>
          </div>

          {/* Status Message */}
          {showMessage && (
            <div className="p-4 rounded-xl bg-uw-purple/20 border border-uw-purple text-center animate-fade-in">
              <p className="text-uw-gold-light font-medium">
                ✨ Feature coming soon! Check back after proposal approval.
              </p>
            </div>
          )}
        </Card>

        {/* Additional Context */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-purple glow-purple flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-uw-gold-light">Data Sources</h3>
              </div>
              <p className="text-uw-gold-light/80 leading-relaxed">
                All statistics are sourced from peer-reviewed research, industry reports, 
                and healthcare professional surveys. Our commitment to evidence-based planning 
                ensures NightPulse Seattle delivers real, measurable benefits.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold glow-gold flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-uw-gold-light">Our Goals</h3>
              </div>
              <p className="text-uw-gold-light/80 leading-relaxed">
                These metrics represent our targets for the first NightPulse Seattle event. 
                We're committed to tracking outcomes and continuously improving to maximize 
                positive impact on students, community, and environment.
              </p>
            </div>
          </Card>
        </div>

        {/* Learn More CTA */}
        <div className="mt-12">
          <Card className="bg-gradient-purple/20 glow-purple text-center space-y-4">
            <h3 className="text-2xl font-bold text-uw-gold-light">
              Dive Deeper
            </h3>
            <p className="text-uw-gold-light/80 max-w-xl mx-auto">
              Read our full blog post exploring the research behind these statistics 
              and the science of music festivals for mental health.
            </p>
            <GradientButton href="/blog/mental-health-benefits" variant="gold">
              Read the Research
            </GradientButton>
          </Card>
        </div>

        {/* Back Link */}
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
