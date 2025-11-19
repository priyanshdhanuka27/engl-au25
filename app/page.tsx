'use client';

import React from 'react';
import Button from '@/components/Button';
import GradientButton from '@/components/GradientButton';
import Card from '@/components/Card';
import BackgroundCircles from '@/components/BackgroundCircles';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 min-h-[80vh] flex items-center">
        <BackgroundCircles variant="purple" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full border border-uw-gold/30">
              <span className="text-uw-gold font-medium">Priyansh's Grant Proposal</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="gradient-text text-shadow-lg animated-gradient">
                NightPulse Seattle
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-uw-gold-light/90 max-w-4xl mx-auto leading-relaxed">
              A student-led, all-night music festival proposal focused on community wellness,
              high-energy music, and sustainability in Seattle.
            </p>

            <p className="text-uw-gold/70 text-lg italic">
              Blog coming soon
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <GradientButton href="/tickets">
                Get Tickets
              </GradientButton>

              <GradientButton 
                variant="gold"
                onClick={() => {
                  document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </GradientButton>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-gradient-to-b from-transparent via-uw-purple-dark/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">

            {/* Mental Health */}
            <Card className="animate-slide-up">
              <div style={{ animationDelay: '0.1s' }} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-purple glow-purple flex items-center justify-center">
                  <span className="text-3xl">💜</span>
                </div>
                <h3 className="text-2xl font-bold gradient-text-purple">Mental Health</h3>
                <p className="text-uw-gold-light/80 leading-relaxed">
                  High-BPM music supports mood enhancement, stress relief, and emotional connection 
                  through rhythm and community.
                </p>
              </div>
            </Card>

            {/* Community */}
            <Card className="animate-slide-up">
              <div style={{ animationDelay: '0.2s' }} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-gold glow-gold flex items-center justify-center">
                  <span className="text-3xl">🎵</span>
                </div>
                <h3 className="text-2xl font-bold gradient-text">Community</h3>
                <p className="text-uw-gold-light/80 leading-relaxed">
                  Bringing people together through shared musical experiences, supporting local artists, 
                  and building Seattle pride.
                </p>
              </div>
            </Card>

            {/* Sustainability */}
            <Card className="animate-slide-up">
              <div style={{ animationDelay: '0.3s' }} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-purple glow-purple flex items-center justify-center">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-2xl font-bold gradient-text-purple">Sustainability</h3>
                <p className="text-uw-gold-light/80 leading-relaxed">
                  Committed to green operations with waste reduction, renewable energy, 
                  and environmentally conscious practices.
                </p>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              The Impact
            </h2>
            <p className="text-xl text-uw-gold-light/80 max-w-3xl mx-auto">
              Evidence-based benefits for mental health, community, and the environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Mental Wellness */}
            <Card>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-purple glow-purple flex items-center justify-center">
                    <span className="text-2xl">💜</span>
                  </div>
                  <h3 className="text-2xl font-bold text-uw-gold-light">Mental Wellness</h3>
                </div>
                <p className="text-uw-gold-light/80 leading-relaxed">
                  High-BPM music supports mood, stress relief, and emotional connection.
                  <span className="text-uw-gold font-semibold"> 79 percent of people use music during difficult times</span>,
                  with EDM ranked as the top genre by healthcare professionals for mental wellness.
                </p>
              </div>
            </Card>

            {/* Community Impact */}
            <Card>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-gold glow-gold flex items-center justify-center">
                    <span className="text-2xl">🎵</span>
                  </div>
                  <h3 className="text-2xl font-bold text-uw-gold-light">Community Impact</h3>
                </div>
                <p className="text-uw-gold-light/80 leading-relaxed">
                  Festivals <span className="text-uw-gold font-semibold">boost local economy</span>,
                  increase artist visibility, and foster shared experience and pride.
                  NightPulse Seattle will spotlight emerging local talent.
                </p>
              </div>
            </Card>

            {/* Sustainability */}
            <Card>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-purple glow-purple flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-2xl font-bold text-uw-gold-light">Sustainability</h3>
                </div>
                <p className="text-uw-gold-light/80 leading-relaxed">
                  Green operations with <span className="text-uw-gold font-semibold">waste reduction and renewable energy</span>.
                  Targeting 60 percent waste reduction through composting and reusable materials.
                </p>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-uw-purple-dark/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              The Program
            </h2>
            <p className="text-xl text-uw-gold-light/80 max-w-3xl mx-auto">
              A carefully designed experience balancing energy, wellness, and community
            </p>
          </div>

          <div className="space-y-8">

            {/* Step 01 */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 text-9xl font-bold text-uw-purple/10">01</div>
              <div className="relative space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-5xl font-bold gradient-text-purple">01</span>
                  <h3 className="text-3xl font-bold text-uw-gold-light">High-Energy Music</h3>
                </div>
                <p className="text-uw-gold-light/80 text-lg leading-relaxed pl-20">
                  EDM, dance, and high-BPM genres proven to boost mood and cognitive engagement.
                  Featuring established headliners and emerging Seattle talent.
                </p>
              </div>
            </Card>

            {/* Step 02 */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 text-9xl font-bold text-uw-gold/10">02</div>
              <div className="relative space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-5xl font-bold gradient-text">02</span>
                  <h3 className="text-3xl font-bold text-uw-gold-light">Wellness Zones</h3>
                </div>
                <p className="text-uw-gold-light/80 text-lg leading-relaxed pl-20">
                  Quiet spaces, hydration stations, mental health resources, and sober zones available all night.
                  Professional support staff on-site for wellbeing.
                </p>
              </div>
            </Card>

            {/* Step 03 */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 text-9xl font-bold text-uw-purple/10">03</div>
              <div className="relative space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-5xl font-bold gradient-text-purple">03</span>
                  <h3 className="text-3xl font-bold text-uw-gold-light">Local Artists</h3>
                </div>
                <p className="text-uw-gold-light/80 text-lg leading-relaxed pl-20">
                  Emerging Seattle artists featured alongside established acts to grow visibility
                  and build community pride.
                </p>
              </div>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
