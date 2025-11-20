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
              <span className="text-uw-gold font-medium">
                Priyansh&apos;s NightPulse Grant Proposal
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="gradient-text text-shadow-lg animated-gradient">
                NightPulse UW Seattle
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-uw-gold-light/90 max-w-4xl mx-auto leading-relaxed">
              A student led, all night music festival proposal centered on community wellness,
              high energy music, and sustainable practices in Seattle.
            </p>

            <p className="text-uw-gold/70 text-lg italic">
              Read the full blog and explore the infographic that summarize the research behind this festival.
            </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
  <GradientButton href="/blog">
    Read Blog
  </GradientButton>

<GradientButton href="/infographic.pdf" external variant="gold">
  View Infographic
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
                  High BPM music can lift mood, ease stress, and create emotional connection
                  through rhythm, movement, and a shared space, as recent EDM and mental health studies suggest.
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
                  NightPulse brings students, local artists, and neighbors together in one
                  place, turning shared musical moments into stronger Seattle pride, similar to how small town festivals strengthen local identity.
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
                  The festival design prioritizes waste reduction, renewable energy options,
                  and environmentally conscious vendors to reflect Seattle&apos;s values.
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
              Evidence based benefits for mental health, local communities, and the environment.
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
                  High BPM music supports mood, stress relief, and emotional connection.
                  <span className="text-uw-gold font-semibold">
                    {' '}Seventy nine percent of people say they turn to music during difficult times,
                  </span>
                  {' '}and EDM is frequently identified by healthcare professionals as a genre that helps with motivation and coping.
                  {' '}
                  <a
                    href="https://www.tebra.com/theintake/healthcare-reports/mental-health-practices/top-music-for-mental-health"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-uw-gold-light hover:text-uw-gold"
                  >
                    Source
                  </a>
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
                  Festivals
                  <span className="text-uw-gold font-semibold"> boost local spending, raise artist visibility, and create shared memories </span>
                  that connect students with the wider Seattle community. NightPulse is designed to highlight emerging talent from the region, following patterns seen in small community festivals.
                  {' '}
                  <a
                    href="https://mainstreetcrossing.com/the-benefits-of-music-festivals-in-small-communities/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-uw-gold-light hover:text-uw-gold"
                  >
                    Source
                  </a>
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
      Green operations with
      <span className="text-uw-gold font-semibold">
        {' '}planned waste reduction, compost and recycle stations, and renewable energy goals
      </span>.
      The proposal targets a sixty percent cut in landfill waste by using reusables and clear on site education, 
      following best practices from green festival guides.
      {' '}
      <a
        href="https://greenfestivals.ca"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-uw-gold-light hover:text-uw-gold"
      >
        Source
      </a>
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
          </div>

          <div className="space-y-8">

            {/* Step 01 */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 text-9xl font-bold text-uw-purple/10">01</div>
              <div className="relative space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-5xl font-bold gradient-text-purple">01</span>
                  <h3 className="text-3xl font-bold text-uw-gold-light">High Energy Music</h3>
                </div>
                <p className="text-uw-gold-light/80 text-lg leading-relaxed pl-20">
                  EDM, dance, and other high BPM genres that support flow states and positive emotion,
                  featuring a mix of headliners and student connected acts from the Seattle scene, supported by recent EDM and mental health research.
                  {' '}
                  <a
                    href="https://sweetnsourmagazine.com/study-reveals-edms-growing-role-in-supporting-mental-health/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-uw-gold-light hover:text-uw-gold"
                  >
                    Source
                  </a>
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
                  Designated quiet areas, hydration points, mental health resource tables, and friendly
                  spaces give attendees room to reset while staying part of the festival.
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
                  A lineup that centers Seattle based artists and student performers so that funding
                  supports the local creative ecosystem and builds long term community relationships, similar to how small festivals elevate regional musicians.
                  {' '}
                  <a
                    href="https://mainstreetcrossing.com/the-benefits-of-music-festivals-in-small-communities/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-uw-gold-light hover:text-uw-gold"
                  >
                    Source
                  </a>
                </p>
              </div>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
