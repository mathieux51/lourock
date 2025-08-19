"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-16 font-light">
            Contact
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg text-muted leading-relaxed">
              For booking requests, press inquiries, and collaboration opportunities
            </p>
            
            <div className="pt-8">
              <a
                href="https://lourock.com"
                className="px-12 py-4 border border-sage text-sage hover:bg-sage hover:text-background transition-all duration-300 font-sans font-medium text-sm uppercase tracking-wider"
              >
                Get In Touch
              </a>
            </div>
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
            © 2025 Mathieu Schmidt. Part of the Lou Rock collective.
          </p>
        </div>
      </footer>
    </div>
  );
}