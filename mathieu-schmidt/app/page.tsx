'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [activeEPKSection, setActiveEPKSection] = useState('biography');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-card backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-lg font-serif font-semibold text-dusty">Mathieu Schmidt</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-muted hover:text-sage transition-colors">Home</a>
              <a href="#about" className="text-muted hover:text-sage transition-colors">About</a>
              <a href="#music" className="text-muted hover:text-sage transition-colors">Music</a>
              <a href="#epk" className="text-muted hover:text-sage transition-colors">Press Kit</a>
              <a href="#shows" className="text-muted hover:text-sage transition-colors">Shows</a>
            </div>
            <a 
              href="https://lourock.com" 
              className="text-muted hover:text-sage transition-colors text-sm"
              aria-label="Return to Lou Rock main site"
            >
              ← Lou Rock
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-serif font-light text-foreground mb-4">
              Mathieu Schmidt
            </h1>
            <p className="text-xl md:text-2xl text-muted font-light tracking-wide">
              Solo Folk Artist
            </p>
            <div className="w-24 h-px bg-sage mx-auto mt-6"></div>
          </div>
          
          <div className="mb-12">
            <p className="text-lg text-muted italic max-w-2xl mx-auto leading-relaxed">
&ldquo;Channeling the lonesome prairie spirit through introspective folk and atmospheric soundscapes&rdquo;
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://mathieu-schmidt.bandcamp.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-sage text-bone-white rounded-sm hover:bg-dusty transition-colors font-medium"
              >
                Listen on Bandcamp
              </a>
              <a 
                href="#about" 
                className="inline-flex items-center px-8 py-3 border border-sage text-sage hover:bg-sage hover:text-bone-white transition-colors rounded-sm font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif text-foreground mb-6">The Lonesome Road</h2>
              <div className="prose prose-lg text-muted space-y-4">
                <p>
                  From the sun-bleached plains of imagination to the intimate venues of Occitanie, 
                  Mathieu Schmidt crafts songs that echo with the vast emptiness and profound beauty 
                  of the prairie landscape. His music speaks to those who find solace in solitude 
                  and meaning in the spaces between words.
                </p>
                <p>
                  Based in Montpellier but spiritually rooted in the American frontier mythos, 
                  Schmidt&apos;s compositions blend traditional folk storytelling with contemporary 
                  introspection. Each song is a weathered postcard from the edge of nowhere, 
                  capturing moments of clarity found in life&apos;s quieter passages.
                </p>
                <p>
                  His performances are contemplative journeys that invite listeners to slow down, 
                  breathe deep, and connect with the melancholic beauty that exists in everyday moments. 
                  Whether alone with his guitar in a dimly lit venue or sharing stories between songs, 
                  Schmidt creates an atmosphere of intimate reflection that resonates long after 
                  the final note fades.
                </p>
              </div>
            </div>
            <div className="bg-stone/20 aspect-square rounded-sm flex items-center justify-center">
              <div className="text-center text-muted">
                <div className="text-6xl mb-4">🎸</div>
                <p className="text-sm italic">Portrait coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-foreground mb-6">Music</h2>
          <p className="text-lg text-muted mb-12 max-w-2xl mx-auto">
            Explore the contemplative soundscapes and introspective narratives that define 
            the Mathieu Schmidt experience. Each release is a chapter in an ongoing conversation 
            with solitude and the search for meaning.
          </p>
          
          <div className="bg-card rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-serif text-foreground mb-4">Latest Releases</h3>
            <p className="text-muted mb-6">
              Listen to the complete discography and discover new releases on Bandcamp, 
              where you can support the music directly and access high-quality downloads.
            </p>
            <a 
              href="https://mathieu-schmidt.bandcamp.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-sage text-bone-white rounded-sm hover:bg-dusty transition-colors font-medium"
            >
              Visit Bandcamp →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-card rounded-lg p-6">
              <h4 className="font-serif text-xl text-foreground mb-2">Folk Ballads</h4>
              <p className="text-muted text-sm">Traditional storytelling meets contemporary introspection</p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <h4 className="font-serif text-xl text-foreground mb-2">Atmospheric Pieces</h4>
              <p className="text-muted text-sm">Soundscapes that evoke wide open spaces and quiet contemplation</p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <h4 className="font-serif text-xl text-foreground mb-2">Intimate Sessions</h4>
              <p className="text-muted text-sm">Raw, unvarnished recordings captured in moments of solitude</p>
            </div>
          </div>
        </div>
      </section>

      {/* Electronic Press Kit */}
      <section id="epk" className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-foreground mb-12 text-center">Electronic Press Kit</h2>
          
          <div className="border-b border-border mb-8">
            <nav className="flex space-x-8">
              {['biography', 'discography', 'technical', 'press'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveEPKSection(section)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm uppercase tracking-wide transition-colors ${
                    activeEPKSection === section
                      ? 'border-sage text-sage'
                      : 'border-transparent text-muted hover:text-sage'
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>

          <div className="prose prose-lg max-w-none">
            {activeEPKSection === 'biography' && (
              <div>
                <h3 className="text-2xl font-serif text-foreground mb-6">Artist Biography</h3>
                <div className="text-muted space-y-4">
                  <p>
                    <strong>Mathieu Schmidt</strong> is a solo folk artist whose music embodies the contemplative 
                    spirit of the lonesome prairie. Based in Montpellier, France, but drawing inspiration from 
                    the vast landscapes and introspective traditions of American folk music, Schmidt creates 
                    atmospheric soundscapes that speak to the soul&apos;s quieter moments.
                  </p>
                  <p>
                    His artistic journey began with a deep appreciation for the storytelling tradition of folk music, 
                    particularly drawn to artists who could convey profound emotion through simplicity and space. 
                    Schmidt&apos;s approach to songwriting is meditative and deliberate, crafting each piece as a reflection 
                    on themes of solitude, longing, and the search for meaning in an increasingly complex world.
                  </p>
                  <p>
                    Performing across Occitanie, Schmidt has developed a reputation for creating intimate, contemplative 
                    concert experiences. His live performances are characterized by their atmospheric quality and the 
                    artist&apos;s ability to create a sense of shared solitude with his audience. Each show becomes a 
                    communal meditation on the beauty found in life&apos;s quieter passages.
                  </p>
                  <p>
                    Schmidt&apos;s music is influenced by the minimalist folk traditions, the vastness of prairie landscapes, 
                    and the introspective quality of late-night contemplation. His sound has been described as 
                    &ldquo;weathered postcards from the edge of nowhere&rdquo; and &ldquo;the musical equivalent of a solitary 
                    walk at twilight.&rdquo;
                  </p>
                </div>
              </div>
            )}

            {activeEPKSection === 'discography' && (
              <div>
                <h3 className="text-2xl font-serif text-foreground mb-6">Discography</h3>
                <div className="text-muted space-y-6">
                  <div>
                    <h4 className="text-xl font-serif text-foreground mb-2">Upcoming Releases</h4>
                    <p>
                      Schmidt is currently working on his debut album, a collection of introspective folk songs 
                      that explore themes of solitude, belonging, and the search for meaning in modern life. 
                      The album will be available on Bandcamp and select streaming platforms.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-foreground mb-2">Singles & EPs</h4>
                    <p>
                      Several intimate recordings and atmospheric pieces are available exclusively on 
                      <a href="https://mathieu-schmidt.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="text-sage hover:underline ml-1">
                        Bandcamp
                      </a>, 
                      showcasing Schmidt&apos;s evolving sound and artistic vision.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-foreground mb-2">Collaborations</h4>
                    <p>
                      Open to collaborations with like-minded artists, Schmidt is interested in projects 
                      that explore the intersection of folk traditions and contemporary introspection.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeEPKSection === 'technical' && (
              <div>
                <h3 className="text-2xl font-serif text-foreground mb-6">Technical Requirements</h3>
                <div className="text-muted space-y-6">
                  <div>
                    <h4 className="text-xl font-serif text-foreground mb-2">Stage Setup</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Minimal stage setup preferred - solo acoustic performance</li>
                      <li>Single spotlight or warm, dim lighting</li>
                      <li>Intimate venue atmosphere ideal (50-300 capacity)</li>
                      <li>Seated audience preferred for contemplative listening experience</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-foreground mb-2">Audio Requirements</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>High-quality acoustic guitar microphone or pickup system</li>
                      <li>Vocal microphone with warm, natural tone</li>
                      <li>Minimal reverb/effects - natural room sound preferred</li>
                      <li>Monitor speaker for artist feedback</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-foreground mb-2">Performance Details</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Set length: 45-90 minutes depending on event</li>
                      <li>Includes brief storytelling between songs</li>
                      <li>No backing tracks or additional musicians required</li>
                      <li>Flexible setlist adapted to venue and audience</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeEPKSection === 'press' && (
              <div>
                <h3 className="text-2xl font-serif text-foreground mb-6">Press & Media</h3>
                <div className="text-muted space-y-6">
                  <div>
                    <h4 className="text-xl font-serif text-foreground mb-2">Press Photos</h4>
                    <p>High-resolution press photos available upon request. Images capture the contemplative, 
                    atmospheric nature of Schmidt&apos;s artistry with natural lighting and prairie-inspired settings.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-foreground mb-2">Media Kit</h4>
                    <p>Complete media kit including biography, technical rider, and promotional materials 
                    available for venues, festivals, and media outlets.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-foreground mb-2">Contact Information</h4>
                    <p>For booking inquiries, press requests, or collaboration opportunities, 
                    please reach out through the Lou Rock collective.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-foreground mb-2">Reviews & Quotes</h4>
                    <blockquote className="border-l-4 border-sage pl-6 italic">
                      &ldquo;Schmidt&apos;s music captures the essence of solitude without the sadness - 
                      it&apos;s contemplative folk for the modern soul seeking quiet in a noisy world.&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Shows Section */}
      <section id="shows" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-foreground mb-12 text-center">Shows & Events</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-serif text-foreground mb-4">Upcoming Performances</h3>
              <div className="bg-card rounded-lg p-6">
                <p className="text-muted mb-4">
                  Currently scheduling intimate performances across Occitanie for 2024. 
                  Each show is crafted as a contemplative experience, perfect for venues 
                  that appreciate atmospheric, introspective music.
                </p>
                <p className="text-sm text-muted">
                  Check back regularly for updated tour dates and venue announcements.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif text-foreground mb-4">Booking Information</h3>
              <div className="bg-card rounded-lg p-6">
                <p className="text-muted mb-4">
                  Available for intimate venues, house concerts, festivals, and special events 
                  throughout the Occitanie region and beyond.
                </p>
                <ul className="text-sm text-muted space-y-2">
                  <li>• Intimate acoustic performances</li>
                  <li>• House concerts and private events</li>
                  <li>• Festival appearances</li>
                  <li>• Collaborative shows with like-minded artists</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-card rounded-lg p-8">
              <h3 className="text-2xl font-serif text-foreground mb-4">Experience the Music Live</h3>
              <p className="text-lg text-muted mb-6 max-w-2xl mx-auto">
                Mathieu Schmidt&apos;s live performances create a shared space for reflection and connection. 
                Each show is an invitation to slow down and find beauty in the quiet moments.
              </p>
              <a 
                href="https://lourock.com" 
                className="inline-flex items-center px-8 py-3 border border-sage text-sage hover:bg-sage hover:text-bone-white transition-colors rounded-sm font-medium"
              >
                Contact for Booking →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-serif text-foreground mb-2">Mathieu Schmidt</h3>
              <p className="text-muted text-sm">Solo Folk Artist • Montpellier, Occitanie</p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://mathieu-schmidt.bandcamp.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-sage transition-colors"
              >
                Bandcamp
              </a>
              <a 
                href="https://lourock.com" 
                className="text-muted hover:text-sage transition-colors"
              >
                Lou Rock
              </a>
              <Link 
                href="/design-system" 
                className="text-muted hover:text-sage transition-colors text-sm"
              >
                Design System
              </Link>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-muted text-sm">
              © 2024 Mathieu Schmidt. All rights reserved. | Part of the Lou Rock collective.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
