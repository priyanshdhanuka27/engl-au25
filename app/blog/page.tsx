// app/blog/page.tsx
import React from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import BackgroundCircles from '@/components/BackgroundCircles';

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: 'Why High-Energy Music Festivals Matter for Student Mental Health',
    excerpt: 'Research shows that EDM and high-BPM music provide measurable mental health benefits, from mood enhancement to stress relief. Discover why music festivals are more than just entertainment—they\'re a vital wellness resource for students.',
    category: 'Mental Health',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    readTime: '5 min read',
    icon: '💜',
    link: '/blog/mental-health-benefits',
  };

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <BackgroundCircles variant="gold" className="opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full border border-uw-gold/30">
            <span className="text-uw-gold">📝</span>
            <span className="text-uw-gold font-medium">NightPulse Blog</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            Festival Insights
          </h1>

          <p className="text-xl text-uw-gold-light/80 max-w-2xl mx-auto leading-relaxed">
            Exploring the intersection of music, mental health, and community
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="animate-slide-up overflow-hidden">
            <div className="md:flex md:space-x-8">
              {/* Icon Section */}
              <div className="md:w-1/3 flex items-center justify-center p-8 bg-gradient-to-br from-uw-purple/20 to-transparent">
                <div className="w-32 h-32 rounded-3xl bg-gradient-purple glow-purple flex items-center justify-center">
                  <span className="text-6xl">{featuredPost.icon}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="px-4 py-1.5 rounded-full bg-uw-purple/30 text-uw-purple text-sm font-semibold border border-uw-purple">
                    Featured
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-white/5 text-uw-gold-light text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-uw-gold-light leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-uw-gold-light/80 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center space-x-4 text-uw-gold/60 text-sm">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link 
                    href={featuredPost.link}
                    className="px-6 py-2.5 rounded-xl bg-gradient-gold text-uw-purple-dark font-semibold hover:scale-105 transition-transform duration-300 glow-gold"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
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