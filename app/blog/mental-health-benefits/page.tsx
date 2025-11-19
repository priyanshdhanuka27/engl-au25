// app/blog/mental-health-benefits/page.tsx
import React from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import GradientButton from '@/components/GradientButton';

export default function MentalHealthBenefitsPost() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Article Header */}
        <article className="space-y-8 animate-fade-in">
          {/* Category Badge */}
          <div className="flex items-center space-x-3">
            <span className="px-4 py-2 rounded-full bg-uw-purple/30 text-uw-purple text-sm font-semibold border border-uw-purple">
              Mental Health
            </span>
            <span className="text-uw-gold/60">•</span>
            <span className="text-uw-gold/60">{currentDate}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight">
            Why High-Energy Music Festivals Matter for Student Mental Health
          </h1>

          {/* Author & Meta */}
          <div className="flex items-center space-x-4 pb-8 border-b border-white/10">
            <div className="w-12 h-12 rounded-full bg-gradient-purple glow-purple flex items-center justify-center">
              <span className="text-xl">🎵</span>
            </div>
            <div>
              <p className="text-uw-gold-light font-semibold">NightPulse Research Team</p>
              <p className="text-uw-gold/60 text-sm">5 min read</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-uw-gold-light/90 text-lg leading-relaxed">
              In an era where student mental health challenges are at an all-time high, music festivals 
              offer more than just entertainment—they provide a unique therapeutic environment combining 
              community, rhythm, and shared experience. NightPulse Seattle aims to harness these benefits 
              while creating a safe, inclusive space for students to connect and heal through music.
            </p>
          </div>

          {/* Section 1: The Science */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold gradient-text-purple">
              The Science Behind High-BPM Music
            </h2>
            
            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              Research consistently shows that high-BPM music—particularly electronic dance music (EDM)—
              has profound effects on mental wellbeing. A landmark study published in the Journal of Positive 
              Psychology found that <span className="text-uw-gold font-semibold">79% of people use music as a 
              coping mechanism during difficult times</span>, with dance and electronic genres ranking highest 
              for mood enhancement.
            </p>

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              The neurological impact is clear: high-BPM music activates the brain's reward centers, triggering 
              dopamine release similar to other pleasurable activities. Healthcare professionals surveyed in a 
              2023 study <span className="text-uw-gold font-semibold">ranked EDM as the #1 music genre</span> for 
              supporting mental health interventions, citing its ability to regulate mood, reduce anxiety, and 
              promote physical activity through dance.
            </p>

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              Beyond individual benefits, the rhythmic synchronization that occurs when groups move to the same 
              beat creates what researchers call "collective effervescence"—a powerful sense of unity and 
              belonging that combats the isolation many students feel. This synchronized movement releases 
              endorphins and oxytocin, the body's natural stress-relief chemicals.
            </p>
          </section>

          {/* Section 2: Community Connection */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold gradient-text">
              Community Connection on the Dancefloor
            </h2>

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              Music festivals create unique social environments where traditional barriers dissolve. Students 
              from different backgrounds, majors, and social circles come together in shared appreciation of 
              music and movement. This cross-pollination of social groups helps combat the increasingly siloed 
              nature of modern university life.
            </p>

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              The festival environment encourages what psychologists call "weak tie" connections—brief but 
              meaningful interactions with strangers that research shows are crucial for mental health and 
              overall life satisfaction. These micro-connections create a sense of community belonging without 
              the pressure of long-term social obligations, making them particularly valuable for students 
              struggling with social anxiety.
            </p>

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              NightPulse Seattle will amplify these benefits through intentional design: wellness zones for those 
              who need breaks, sober spaces for students in recovery, and trained peer support staff available 
              throughout the night. We're creating not just a party, but a healing community experience.
            </p>
          </section>

          {/* Section 3: Economic & Cultural Impact */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold gradient-text-purple">
              Economic and Cultural Impact
            </h2>

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              Beyond individual mental health benefits, music festivals generate significant positive impacts 
              for local communities. Economic studies show that festivals <span className="text-uw-gold font-semibold">
              boost local economies</span> through vendor partnerships, venue rentals, and increased visibility 
              for the host city's cultural scene.
            </p>

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              For Seattle's vibrant music scene, NightPulse represents an opportunity to showcase emerging 
              local artists alongside established acts. By dedicating stage time to up-and-coming Seattle talent, 
              we'll <span className="text-uw-gold font-semibold">increase artist visibility</span> and provide 
              crucial career development opportunities. This investment in local culture strengthens community 
              identity and pride.
            </p>

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              Furthermore, our commitment to sustainability—targeting 60% waste reduction through composting and 
              recycling, utilizing renewable energy sources, and partnering with green vendors—aligns with 
              Seattle's environmental values. This demonstrates that large-scale events can be both impactful 
              and environmentally responsible, setting a new standard for festival culture in the Pacific Northwest.
            </p>
          </section>

          {/* Infographic Placeholder */}
          <Card className="my-12 bg-gradient-to-br from-uw-purple/20 to-uw-gold/10 border-2 border-uw-gold/30">
            <div className="text-center space-y-6 py-8">
              <div className="text-6xl">📊</div>
              <h3 className="text-2xl font-bold gradient-text">
                Festival Impact Infographic
              </h3>
              <p className="text-uw-gold-light/80 max-w-2xl mx-auto">
                Visual breakdown of mental health statistics, community benefits, and sustainability goals
              </p>
              <GradientButton href="/infographic">
                View Full Infographic
              </GradientButton>
            </div>
          </Card>

          {/* Conclusion */}
          <section className="space-y-4 pt-8">
            <h2 className="text-3xl font-bold gradient-text">
              Moving Forward Together
            </h2>

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              The evidence is clear: high-energy music festivals aren't just entertainment—they're a vital 
              wellness resource for students navigating the challenges of university life. NightPulse Seattle 
              represents an opportunity to create a transformative experience that supports mental health, 
              builds community, and demonstrates environmental responsibility.
            </p>

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              As we await grant approval, we're committed to building this vision thoughtfully and inclusively. 
              We invite you to join us in creating a new model for student wellness events—one that recognizes 
              the healing power of music, the strength of community, and our responsibility to the planet.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
          <Link 
            href="/blog" 
            className="inline-flex items-center space-x-2 text-uw-gold hover:text-uw-gold-light transition-colors duration-300 group"
          >
            <span className="transform group-hover:-translate-x-2 transition-transform duration-300">←</span>
            <span>Back to Blog</span>
          </Link>

          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-uw-gold hover:text-uw-gold-light transition-colors duration-300"
          >
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
