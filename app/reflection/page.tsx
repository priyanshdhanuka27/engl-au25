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
            <span className="text-uw-gold">✍️</span>
            <span className="text-uw-gold font-medium">Writer's Reflection</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            Writer&apos;s Reflection: NightPulse Seattle Grant Proposal
          </h1>
        </div>

        <Card className="animate-slide-up mb-12">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-6 text-uw-gold-light/90 leading-relaxed">
              <p>
                For this grant request project, I created an interactive website proposing NightPulse Seattle, 
                a student-led, all-night music festival at UW. The assignment required me to persuade potential 
                funders to support a university project, so I needed to think strategically about who would 
                actually read this proposal and what would convince them.
              </p>

              <p>
                My choice to use a website as the primary genre stemmed from practical considerations. Traditional 
                grant proposals are dense PDF documents that administrative committees review, but I wanted to reach 
                multiple stakeholders simultaneously. University administrators need data-driven arguments about 
                institutional benefits. Students respond to visual appeal and authentic student voice. Local 
                foundations want to see community impact and professional planning. A website lets me address all 
                these audiences in one place while demonstrating the kind of tech-savvy, contemporary approach that 
                a student-led initiative would actually take.
              </p>

              <p>
                The structure mirrors traditional grant formats but feels less institutional. &quot;The Impact&quot; section 
                frontloads the evidence-based benefits because that&apos;s the first question any funder asks: why does 
                this matter? I included research connecting high-BPM music to mental wellness, data on festivals&apos; 
                economic impact, and sustainability metrics that align with UW&apos;s environmental commitments. Each 
                claim links directly to its source, maintaining academic rigor while keeping the reading experience 
                fluid. This approach transforms dry statistics into a compelling case by focusing on outcomes that 
                matter to different stakeholders: mental health for student services, economic benefits for city 
                partners, environmental responsibility for sustainability-minded donors.
              </p>

              <p>
                &quot;The Program&quot; section shifts from why to how, detailing the festival&apos;s structure around high-energy 
                music, wellness zones, and local artist partnerships. I emphasized Seattle-based artists and student 
                performers to show that funding would circulate within the community rather than going to outside 
                contractors. The wellness zones respond to legitimate concerns about all-night events and student 
                safety, demonstrating that the proposal anticipates challenges instead of ignoring them.
              </p>

              <p>
                My visual and design choices reinforced the festival&apos;s identity while maintaining professionalism. 
                The color palette draws from UW branding to signal institutional alignment, but the layout and 
                typography evoke the energy of electronic music culture. This balance was crucial. Too corporate 
                and the proposal loses its student-driven authenticity. Too casual and it fails to inspire funder 
                confidence.
              </p>

              <p>
                The research process proved more extensive than what appears on the surface. I investigated similar 
                festivals at other universities, studied mental health interventions in university settings, examined 
                sustainability practices at major music events, and explored Seattle&apos;s music scene infrastructure. 
                This background work allowed me to make informed claims about feasibility, budget considerations, 
                and community impact rather than just presenting an idealistic vision.
              </p>

              <p>
                The biggest challenge was condensing complex arguments into digestible web sections. Traditional 
                grant proposals can sprawl across twenty pages with detailed appendices, but website visitors won&apos;t 
                read that much. I had to distill each major point into 2-3 paragraphs while maintaining persuasive 
                depth. This required multiple revisions to identify which details actually mattered for the argument 
                and which were just filler.
              </p>

              <p>
                Ultimately, the website format functions simultaneously as a proposal, a proof of concept, and a 
                vision statement. By building an actual professional website rather than just describing one, I 
                demonstrated that student initiatives can operate at a professional level while maintaining the 
                creativity and community focus that make them worthwhile. The genre choice itself becomes part of 
                the argument: this is what student-led cultural programming looks like in 2025.
              </p>

              <div className="text-right mt-8 text-uw-gold/70 italic">
                Word Count: 560
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