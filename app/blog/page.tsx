// app/blog/page.tsx
import React from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import GradientButton from '@/components/GradientButton';

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full border border-uw-gold/30">
            <span className="text-uw-gold">📝</span>
            <span className="text-uw-gold font-medium">NightPulse Blog</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            Festival Blog
          </h1>

          <p className="text-xl text-uw-gold-light/80 max-w-2xl mx-auto leading-relaxed">
            Insights on music, mental health, and community building
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-uw-gold mb-6">Featured Post</h2>
          
          <Card className="animate-slide-up">
            <div className="space-y-6">
              {/* Post Header */}
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-purple glow-purple flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">💜</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-uw-purple/30 text-uw-purple text-sm font-semibold border border-uw-purple">
                      Mental Health
                    </span>
                    <span className="text-uw-gold/60 text-sm">
                      Featured Article
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-uw-gold-light mb-3">
                    Why High-Energy Music Festivals Matter for Student Mental Health
                  </h3>
                  <p className="text-uw-gold-light/80 text-lg leading-relaxed">
                    Research shows that EDM and high-BPM music provide measurable mental health benefits, 
                    from mood enhancement to stress relief. Discover why music festivals are more than 
                    just entertainment—they're a vital wellness resource for students.
                  </p>
                </div>
              </div>

              {/* Post Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center space-x-4 text-uw-gold/60 text-sm">
                  <span>By NightPulse Research Team</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
                <GradientButton href="/blog/mental-health-benefits">
                  Read More
                </GradientButton>
              </div>
            </div>
          </Card>
        </div>

        {/* Coming Soon Notice */}
        <Card className="text-center space-y-4 bg-white/5 border-2 border-dashed border-uw-gold/30" hover={false}>
          <div className="text-5xl">✨</div>
          <h3 className="text-2xl font-bold text-uw-gold-light">
            More Posts Coming Soon
          </h3>
          <p className="text-uw-gold-light/70 max-w-md mx-auto">
            We're working on more articles about festival culture, sustainability practices, 
            and community impact. Check back after proposal approval!
          </p>
        </Card>

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
