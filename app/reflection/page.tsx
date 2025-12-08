// app/reflection/page.tsx
import React from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import BackgroundCircles from '@/components/BackgroundCircles';

export default function ReflectionPage() {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <BackgroundCircles variant="gold" className="opacity-40" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full border border-uw-gold/30">
            <span className="text-uw-gold"></span>
            <span className="text-uw-gold font-medium">Priyansh's Reflection</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            Creator&apos;s Reflection: NightPulse Seattle Grant Proposal
          </h1>
        </div>

        <Card className="animate-slide-up mb-12">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-6 text-uw-gold-light/90 leading-relaxed">
              <p>
                For this grant request project, I created an interactive website proposing NightPulse Seattle, 
                a student-led, all-night music festival centered on community wellness, high-energy music, and 
                sustainable practices. This multimodal text combines written content, visual design elements, 
                and digital interactivity to persuade potential funders which can potentially include university 
                administration, local cultural foundations, and crowdfunding backers, in order to support a 
                festival that serves both student mental health and Seattle&apos;s creative community.
              </p>

              <p>
                My choice to use a website as the primary genre stemmed from practical and rhetorical considerations. 
                Websites allow me to reach diverse stakeholders simultaneously: administrators value data-driven 
                arguments, students respond to visual appeal, and community funders appreciate demonstrations of 
                planning and professionalism. The digital format also models the contemporary, tech-savvy approach 
                that a student-led initiative would take, establishing credibility through execution. By including 
                hyperlinked citations throughout, I could maintain academic rigor while keeping the reading experience 
                fluid and accessible.
              </p>

              <p>
                The website employs strategic sections that mirror a traditional grant structure while feeling less 
                institutional. &quot;The Impact&quot; section frontloads evidence-based benefits, addressing the most immediate 
                question funders ask: why does this matter? I drew on research connecting high-BPM music to mental 
                wellness, data on festivals&apos; economic impact, and sustainability metrics that align with UW&apos;s 
                environmental commitments. Each claim links directly to its source, following digital citation 
                conventions. This transforms dry statistics into a compelling case by focusing on outcomes that 
                matter to different stakeholders: mental health for student services, economic benefits for city 
                partners, and environmental responsibility for sustainability-minded donors.
              </p>

              <p>
                &quot;The Program&quot; section shifts from why to how, detailing the festival&apos;s structure around high-energy 
                music, wellness zones, and local artist partnerships. I emphasized Seattle-based artists and student 
                performers to demonstrate that funding would circulate within the community. The wellness zones 
                respond to legitimate concerns about all-night events and student safety, showing that the proposal 
                anticipates challenges rather than ignoring them, addressing the assignment&apos;s requirement to 
                acknowledge potential obstacles.
              </p>

              <p>
                My visual and design choices reinforced the festival&apos;s identity while maintaining professionalism. 
                The color palette draws from UW branding to signal institutional alignment, while the layout and 
                typography evoke the energy of electronic music culture. This balance was crucial: too corporate 
                and the proposal loses its student-driven authenticity; too casual and it fails to inspire funder 
                confidence.
              </p>

              <p>
                The research underpinning this proposal extends beyond what&apos;s visible on the surface. I investigated 
                similar festivals, studied mental health interventions in university settings, examined sustainability 
                practices at major music events, and explored Seattle&apos;s music scene infrastructure. This background 
                work allowed me to make informed claims about feasibility, budget considerations, and community impact.
              </p>

              <p>
                Ultimately, this project taught me that effective grant writing requires strategic thinking about 
                audience, evidence-based argumentation, and genre choices that enhance rather than obscure your 
                message. The website format functions simultaneously as a proposal, a proof of concept, and a vision 
                statement, demonstrating that student initiatives can operate at a professional level while maintaining 
                the creativity and community focus that make them worthwhile.
              </p>

              <div className="text-right mt-8 text-uw-gold/70 italic">
                Word Count: 493
              </div>
            </div>
          </div>
        </Card>

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