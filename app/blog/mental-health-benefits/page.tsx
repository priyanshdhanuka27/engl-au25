// app/blog/mental-health-benefits/page.tsx
import React from 'react';
import Link from 'next/link';
import Card from '@/components/Card';

export default function MentalHealthBenefitsPost() {
  // Fixed date for the assignment
  const currentDate = 'November 15, 2025';

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
            Why High Energy Music Festivals Matter for Student Mental Health
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
              In an era where student mental health challenges are at an all time high, music festivals
              offer more than just entertainment, because they provide a unique therapeutic environment that combines
              community, rhythm, and shared experience. NightPulse Seattle aims to harness these benefits
              while creating a safe, inclusive space for students to connect and heal through music.
            </p>
          </div>

          {/* Section 1: The Science */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold gradient-text-purple">
              The Science Behind High BPM Music
            </h2>

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              Research consistently shows that high BPM music, particularly electronic dance music (EDM),
              has profound effects on mental wellbeing. A large report on music and mental health found that
              <span className="text-uw-gold font-semibold">
                {' '}79% of people use music as a coping mechanism during difficult times
              </span>
              , and dance and electronic genres rank among the top choices for mood enhancement.
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

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              The neurological impact is clear. High BPM music activates the brain&apos;s reward centers,
              which triggers dopamine release in a way that is similar to other pleasurable activities. In the same survey,
              healthcare professionals
              <span className="text-uw-gold font-semibold">
                {' '}ranked EDM as the number one genre
              </span>
              for supporting mental health interventions, because they highlighted its ability to regulate mood, reduce anxiety,
              and promote physical activity through dance.
              {' '}
              <a
                href="https://www.edmtunes.com/2024/09/study-edm-lifeline-mental-health/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-uw-gold-light hover:text-uw-gold"
              >
                Source
              </a>
            </p>

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              <span className="font-semibold">Clinical research</span> also shows that structured music engagement can lower stress hormones and
              support immune function, especially when listeners feel actively involved rather than passive.
              {' '}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8566759/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-uw-gold-light hover:text-uw-gold"
              >
                Source
              </a>
              {' '}
              Beyond individual benefits, the rhythmic synchronization that occurs when groups move to the same
              beat creates what researchers call "collective effervescence," a powerful sense of unity and
              belonging that counters the isolation many students feel.
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
              music and movement. This cross pollination of social groups helps counter the increasingly siloed
              nature of modern university life.
            </p>

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              Studies that explore the psychological impacts of attending music festivals report gains in
              life satisfaction, social connectedness, and sense of community after events, especially for
              young people.
              {' '}
              <a
                href="https://musicscience.net/wp-content/uploads/2020/10/hampshire-topping-burbano-cifuentes-aubry.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-uw-gold-light hover:text-uw-gold"
              >
                Source
              </a>
              {' '}
              Another study on festival attendance among youth found that these gatherings support personal
              growth and identity formation in ways that more formal settings often do not.
              {' '}
              <a
                href="https://espace.library.uq.edu.au/view/UQ:221685/UQ221685_postprint.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-uw-gold-light hover:text-uw-gold"
              >
                Source
              </a>
            </p>

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              The festival environment also encourages what psychologists call "weak tie" connections, which are brief but
              meaningful interactions with strangers that research links to higher overall wellbeing and life
              satisfaction. NightPulse Seattle will amplify these benefits through intentional design. There will be wellness
              zones for students who need breaks, sober spaces for students in recovery, and trained peer support
              staff available throughout the night, so the social energy remains supportive rather than overwhelming.
            </p>
          </section>

          {/* Section 3: Economic & Cultural Impact */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold gradient-text-purple">
              Economic and Cultural Impact
            </h2>

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              Beyond individual mental health benefits, music festivals create significant positive impacts
              for local communities. Case studies of regional festivals show that events
              <span className="text-uw-gold font-semibold"> boost local economies</span>
              through vendor partnerships, venue rentals, and increased visibility for the host city or town.
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

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              For Seattle&apos;s vibrant music scene, NightPulse represents an opportunity to showcase emerging
              local artists alongside established acts. Studies on young people at festivals highlight how
              performing and attending in their own region strengthens place attachment and cultural identity.
              {' '}
              <a
                href="https://remix.berklee.edu/mhi-citations/1162/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-uw-gold-light hover:text-uw-gold"
              >
                Source
              </a>
              {' '}
              By dedicating stage time to up and coming Seattle talent, the festival increases artist visibility
              and builds lasting pride in the campus and the city.
            </p>

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              Our commitment to sustainability, which includes a target of 60% waste reduction through composting and recycling,
              the use of renewable energy wherever possible, and partnerships with green vendors, aligns with current
              research on more sustainable festival models that dramatically cut landfill waste and emissions.
              {' '}
              <a
                href="https://recordingarts.com/sustainable-sounds-6-green-music-festivals-making-a-global-impact/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-uw-gold-light hover:text-uw-gold"
              >
                Source
              </a>
              {' '}
              <a
                href="https://dice.fm/blog/sustainable-music-festivals?lng=en-US"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-uw-gold-light hover:text-uw-gold ml-1"
              >
                Source
              </a>
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
                Visual breakdown of mental health statistics, community benefits, and sustainability goals.
              </p>
              <a
                href="/infographic.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-xl bg-gradient-gold text-uw-purple-dark font-bold text-lg hover:scale-105 transition-all duration-300 glow-gold"
              >
                View Full Infographic
              </a>
            </div>
          </Card>

          {/* Conclusion */}
          <section className="space-y-4 pt-8">
            <h2 className="text-3xl font-bold gradient-text">
              Moving Forward Together
            </h2>

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              The evidence is clear. High energy music festivals are not just entertainment; they are a meaningful
              wellness resource for students who are navigating the challenges of university life. NightPulse Seattle
              represents an opportunity to create a transformative experience that supports mental health,
              builds community, and demonstrates environmental responsibility.
            </p>

            <p className="text-uw-gold-light/80 text-lg leading-relaxed">
              As we await grant approval, we are committed to building this vision thoughtfully and inclusively.
              We invite campus leaders, community partners, and students to help shape a new model for student
              wellness events, one that recognizes the healing power of music, the strength of community, and our
              shared responsibility to the planet.
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