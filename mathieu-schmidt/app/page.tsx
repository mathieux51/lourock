"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [activeSection, setActiveSection] = useState("biography");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const instruments = [
    { name: "Guitar", description: "Fingerpicking & strumming techniques" },
    { name: "Oud", description: "Traditional Arabic lute" },
    { name: "Bouzouki", description: "Greek & Irish folk traditions" },
    { name: "Voice", description: "French, English & Occitan" },
  ];

  const genres = [
    "Folk", "Arabic", "Irish", "Cowboy", "Blues", "Rock", "Mediterranean"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="hidden md:grid md:grid-cols-3 items-center w-full">
            <div className="text-xl font-serif font-light text-foreground">
              Mathieu Schmidt
            </div>
            
            <div className="flex justify-center space-x-10">
              <a
                href="https://mathieu-schmidt.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-sage transition-colors font-sans text-sm uppercase tracking-wider"
              >
                Music
              </a>
              <a
                href="#contact"
                className="text-muted hover:text-sage transition-colors font-sans text-sm uppercase tracking-wider"
              >
                Contact
              </a>
            </div>
            
            <div className="flex justify-end">
              <a
                href="https://lourock.com"
                className="text-muted hover:text-sage transition-colors font-sans text-sm uppercase tracking-wider"
                aria-label="Return to Lou Rock collective"
              >
                Lou Rock
              </a>
            </div>
          </div>
          
          {/* Mobile layout */}
          <div className="flex md:hidden items-center justify-between w-full">
            <div className="text-xl font-serif font-light text-foreground">
              Mathieu Schmidt
            </div>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-muted hover:text-sage transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-lg">
              <div className="px-6 py-6 space-y-4">
                <a
                  href="#home"
                  className="block text-muted hover:text-sage transition-colors py-2 font-sans text-sm uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block text-muted hover:text-sage transition-colors py-2 font-sans text-sm uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#music"
                  className="block text-muted hover:text-sage transition-colors py-2 font-sans text-sm uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Music
                </a>
                <a
                  href="#instruments"
                  className="block text-muted hover:text-sage transition-colors py-2 font-sans text-sm uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Instruments
                </a>
                <a
                  href="#press"
                  className="block text-muted hover:text-sage transition-colors py-2 font-sans text-sm uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Press
                </a>
                <div className="pt-3 border-t border-border/30">
                  <a
                    href="https://lourock.com"
                    className="block text-muted hover:text-sage transition-colors py-2 font-sans text-sm uppercase tracking-wider"
                  >
                    Lou Rock
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-24"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-serif font-normal mb-8 text-foreground tracking-tight">
              Mathieu Schmidt
            </h1>
            <div className="w-24 h-px bg-sage mx-auto mb-12"></div>
            <p className="text-xl md:text-2xl text-dusty font-serif mb-12 font-light">
              Multi-Instrumental Folk Artist
            </p>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-16">
              Weaving gloomy melodies across cultures and languages, from the dusty trails of cowboy ballads to the haunting scales of Arabic maqam.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-3xl mx-auto">
            {genres.map((genre) => (
              <span
                key={genre}
                className="text-muted text-sm uppercase tracking-wider font-sans font-light hover:text-sage transition-colors cursor-default"
              >
                {genre}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://mathieu-schmidt.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-sage text-background font-sans font-medium text-sm uppercase tracking-wider hover:bg-dusty transition-all duration-300"
            >
              Listen on Bandcamp
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-sage text-sage hover:bg-sage hover:text-background transition-all duration-300 font-sans font-medium text-sm uppercase tracking-wider"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-16 font-light">
            The Wandering Minstrel
          </h2>
          <div className="space-y-8 text-center max-w-3xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-muted">
              In the shadowy crossroads where Nordic melancholy meets the warmth of Mediterranean sun, Mathieu Schmidt crafts music that transcends borders. His sound carries the weight of ancient traditions while embracing the gloomy beauty of modern folk.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted">
              From the haunting microtones of Arabic maqam to the driving rhythms of Irish reels, from the lonesome cry of cowboy ballads to the raw power of electric blues, Mathieu weaves a tapestry of musical cultures.
            </p>
            <div className="pt-12">
              <div className="w-24 h-px bg-sage mx-auto mb-8"></div>
              <blockquote className="text-xl md:text-2xl font-serif font-light text-dusty italic leading-relaxed">
                &ldquo;Music is a bridge between worlds. Each instrument carries the soul of its culture, and when they meet, they create something new yet eternal.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Instruments Section */}
      <section id="instruments" className="py-32 px-6 bg-card/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8 font-light">
              Instruments & Voices
            </h2>
            <div className="w-24 h-px bg-sage mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {instruments.map((instrument) => (
              <div
                key={instrument.name}
                className="text-center"
              >
                <h3 className="text-2xl font-serif text-sage mb-4 font-light">
                  {instrument.name}
                </h3>
                <p className="text-muted leading-relaxed">
                  {instrument.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-serif text-russet mb-12 font-light">
              Languages
            </h3>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <h4 className="text-xl font-serif text-prairie mb-4 font-light">Français</h4>
                <p className="text-muted text-sm leading-relaxed">
                  The language of poetry and passion
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-serif text-prairie mb-4 font-light">English</h4>
                <p className="text-muted text-sm leading-relaxed">
                  Folk storytelling and blues expression
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-serif text-prairie mb-4 font-light">Occitan</h4>
                <p className="text-muted text-sm leading-relaxed">
                  The ancient language of troubadours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-16 font-light">
            Music
          </h2>
          
          <div className="mb-20">
            <p className="text-lg md:text-xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
              Continuous soundscapes where songs flow seamlessly into one another, creating uninterrupted emotional journeys through familiar and foreign landscapes.
            </p>
            <a
              href="https://mathieu-schmidt.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 bg-sage text-background font-sans font-medium text-sm uppercase tracking-wider hover:bg-dusty transition-all duration-300"
            >
              Listen Now
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-serif text-dusty mb-6 font-light">
                Live Performances
              </h3>
              <p className="text-muted leading-relaxed">
                Intimate concerts that transform venues into sacred spaces for musical exploration and cultural dialogue.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-serif text-prairie mb-6 font-light">
                Studio Recordings
              </h3>
              <p className="text-muted leading-relaxed">
                Carefully crafted recordings that capture the nuanced interplay between different musical traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Press Kit Section */}
      <section id="press" className="py-32 px-6 bg-card/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8 font-light">
              Press Kit
            </h2>
            <div className="w-24 h-px bg-sage mx-auto"></div>
          </div>

          <div className="border-b border-border/30 mb-12">
            <nav className="flex space-x-12 justify-center">
              {["biography", "technical", "media"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`py-4 font-sans text-sm uppercase tracking-wider transition-colors ${
                    activeSection === section
                      ? "text-sage border-b-2 border-sage"
                      : "text-muted hover:text-sage"
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>

          <div className="max-w-3xl mx-auto">
            {activeSection === "biography" && (
              <div className="text-center">
                <h3 className="text-2xl font-serif text-foreground mb-8 font-light">
                  Artist Biography
                </h3>
                <div className="text-muted space-y-6 leading-relaxed text-left">
                  <p>
                    <strong className="text-foreground">Mathieu Schmidt</strong> is a multi-instrumental folk artist who creates immersive musical experiences that transcend cultural and linguistic boundaries. Based in Montpellier, France, he masterfully blends diverse musical traditions including folk, Arabic, Irish, cowboy, blues, rock, and Mediterranean styles into cohesive artistic statements.
                  </p>
                  <p>
                    His instrumental palette includes classical guitar, Arabic oud, Greek and Irish bouzouki, complemented by vocals in French, English, and Occitan. Schmidt&apos;s approach to live performance emphasizes continuous audio experiences, where songs seamlessly flow into one another, creating uninterrupted emotional journeys.
                  </p>
                  <p>
                    Drawing inspiration from the gloomy beauty of Nordic aesthetics and the warmth of cowboy traditions, his music carries a distinctive atmospheric quality that speaks to both ancient wisdom and contemporary longing. His work can be found on Bandcamp, where he shares both intimate solo recordings and expansive collaborative pieces.
                  </p>
                  <p>
                    Schmidt represents a new generation of folk artists who honor traditional forms while fearlessly exploring the spaces between cultures, creating music that is both deeply rooted and daringly experimental.
                  </p>
                </div>
              </div>
            )}

            {activeSection === "technical" && (
              <div className="text-center">
                <h3 className="text-2xl font-serif text-foreground mb-8 font-light">
                  Technical Requirements
                </h3>
                <div className="space-y-12 text-left">
                  <div>
                    <h4 className="text-lg font-serif text-sage mb-6 font-light text-center">
                      Audio Setup
                    </h4>
                    <ul className="text-muted space-y-3 leading-relaxed">
                      <li>2-4 XLR microphone inputs for vocals and acoustic instruments</li>
                      <li>2-4 DI boxes for electric instruments and electronics</li>
                      <li>Quality monitor system for accurate sound feedback</li>
                      <li>Ambient reverb and delay effects preferred</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-sage mb-6 font-light text-center">
                      Stage Requirements
                    </h4>
                    <ul className="text-muted space-y-3 leading-relaxed">
                      <li>Minimum 3m x 3m performance area</li>
                      <li>Warm, atmospheric lighting (amber/red preferred)</li>
                      <li>Quiet, intimate venue atmosphere ideal</li>
                      <li>Seated audience configuration preferred for continuous sets</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-sage mb-6 font-light text-center">
                      Performance Details
                    </h4>
                    <ul className="text-muted space-y-3 leading-relaxed">
                      <li>Set lengths: 45-90 minutes continuous experience</li>
                      <li>Minimal interruptions between songs</li>
                      <li>Multi-lingual performance capabilities</li>
                      <li>Flexible repertoire adapted to venue and audience</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "media" && (
              <div className="text-center">
                <h3 className="text-2xl font-serif text-foreground mb-8 font-light">
                  Media & Contact
                </h3>
                <div className="space-y-12">
                  <div>
                    <h4 className="text-lg font-serif text-sage mb-6 font-light">
                      Music & Recordings
                    </h4>
                    <p className="text-muted mb-6 leading-relaxed">
                      Complete discography and exclusive recordings
                    </p>
                    <a
                      href="https://mathieu-schmidt.bandcamp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 border border-sage text-sage hover:bg-sage hover:text-background transition-all duration-300 font-sans font-medium text-sm uppercase tracking-wider"
                    >
                      Bandcamp
                    </a>
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-sage mb-6 font-light">
                      Booking & Inquiries
                    </h4>
                    <p className="text-muted mb-6 leading-relaxed">
                      For booking requests, press inquiries, and collaboration opportunities
                    </p>
                    <a
                      href="https://lourock.com"
                      className="px-8 py-3 border border-sage text-sage hover:bg-sage hover:text-background transition-all duration-300 font-sans font-medium text-sm uppercase tracking-wider"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-serif text-foreground mb-4 font-light">
            Mathieu Schmidt
          </h3>
          <p className="text-muted mb-12 font-light">
            Multi-Instrumental Folk Artist • Montpellier, Occitanie
          </p>

          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="https://mathieu-schmidt.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-sage transition-colors font-sans text-sm uppercase tracking-wider"
            >
              Bandcamp
            </a>
            <a
              href="https://lourock.com"
              className="text-muted hover:text-sage transition-colors font-sans text-sm uppercase tracking-wider"
            >
              Lou Rock
            </a>
            <Link
              href="/design-system"
              className="text-muted hover:text-sage transition-colors font-sans text-sm uppercase tracking-wider"
            >
              Design System
            </Link>
          </div>

          <div className="w-24 h-px bg-sage mx-auto mb-8"></div>
          <p className="text-muted text-sm font-light">
            © 2024 Mathieu Schmidt. Part of the Lou Rock collective.
          </p>
        </div>
      </footer>
    </div>
  );
}