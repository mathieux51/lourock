"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const musicSamples = [
    {
      title: "Dust & Dreams",
      description: "Our signature blend of country soul and rock energy",
      duration: "3:45"
    },
    {
      title: "Occitanie Sunset",
      description: "A tribute to our Southern French homeland",
      duration: "4:12"
    },
    {
      title: "Highway to Montpellier",
      description: "Where American highways meet French countryside",
      duration: "3:58"
    }
  ];

  const tourDates = [
    {
      date: "2025-09-15",
      venue: "Le Rockstore",
      city: "Montpellier",
      region: "Hérault",
      status: "confirmed"
    },
    {
      date: "2025-09-28",
      venue: "L'Usine à Musique",
      city: "Toulouse",
      region: "Haute-Garonne",
      status: "confirmed"
    },
    {
      date: "2025-10-12",
      venue: "Festival Country Sud",
      city: "Nîmes",
      region: "Gard",
      status: "festival"
    },
    {
      date: "2025-10-25",
      venue: "Le Corum",
      city: "Montpellier",
      region: "Hérault",
      status: "upcoming"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-surface-dark/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="font-heading text-2xl text-primary">Dakota Dreamers</h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-accent transition-colors">Home</a>
              <a href="#about" className="hover:text-accent transition-colors">About</a>
              <a href="#epk" className="hover:text-accent transition-colors">EPK</a>
              <a href="#tour" className="hover:text-accent transition-colors">Tour</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
              <a 
                href="https://lourock.com" 
                className="bg-primary hover:bg-accent px-4 py-2 rounded transition-colors font-heading text-sm ml-4"
              >
                Back to LouRock
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-surface-light rounded transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a 
                href="#home" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-accent transition-colors"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-accent transition-colors"
              >
                About
              </a>
              <a 
                href="#epk" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-accent transition-colors"
              >
                EPK
              </a>
              <a 
                href="#tour" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-accent transition-colors"
              >
                Tour
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-accent transition-colors"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center md:items-start">
          <img 
            src="/stage.png" 
            alt="Stage background" 
            className="w-full h-auto object-contain object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent via-60% to-background/70 md:from-background/80 md:to-background/80"></div>
        <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0iIzQzNDAzYyIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-cream mb-6 tracking-wider western-text-appear">
            DAKOTA
            <br />
            <span className="text-accent">DREAMERS</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-sand mb-8 max-w-2xl mx-auto western-text-appear-subtitle">
            Bringing the Spirit of the American West to Southern France
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center western-button-appear">
            <a 
              href="#epk" 
              className="bg-accent hover:bg-rust px-8 py-3 rounded font-heading transition-colors"
            >
              Electronic Press Kit
            </a>
            <a 
              href="#tour" 
              className="border-2 border-primary hover:bg-primary hover:text-background px-8 py-3 rounded font-heading transition-colors"
            >
              Tour Dates
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center md:items-start">
          <img 
            src="/bridge.png" 
            alt="Bridge background" 
            className="w-full h-auto object-contain object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent via-60% to-background/70 md:from-background/80 md:to-background/80"></div>
        <div className="absolute inset-0 bg-black/55 md:bg-black/45"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl text-center mb-12 text-gold">
              About the Band
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="font-body text-lg leading-relaxed">
                  Dakota Dreamers emerged from a deep friendship and shared passion for country rock music, nature, and the traditional culture of Southern France. This duo discovered their musical chemistry through their mutual appreciation for the breathtaking beauty found in the Occitanie region.
                </p>
                <p className="font-body text-lg leading-relaxed">
                  Born from this connection to both the land and each other, the band channels authentic Western storytelling through the lens of their Mediterranean heritage. Their music speaks to those who find inspiration in wide-open spaces, timeless melodies, and the natural wonders of Southern France.
                </p>
                <p className="font-body text-lg leading-relaxed">
                  From intimate venues in the Occitanie region to festival stages across Southern France, Dakota Dreamers delivers performances that transport audiences to dusty highways and endless horizons, proving that the American West lives in the hearts of all who dare to dream.
                </p>
              </div>
              <div className="border-2 border-primary/30 bg-background/40 backdrop-blur-md p-8 rounded-lg">
                <h3 className="font-heading text-2xl mb-6 text-primary">Band Members</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-heading text-lg text-sand">Rob</h4>
                    <p className="text-cream font-medium">Lead vocals, acoustic guitar and piano</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-heading text-lg text-sand">Mathieu</h4>
                    <p className="text-cream font-medium">Side vocals, lead guitar, bouzouki and banjo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electronic Press Kit */}
      <section id="epk" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center md:items-start">
          <img 
            src="/horse.png" 
            alt="Horse background" 
            className="w-full h-auto object-contain object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent via-60% to-background/70 md:from-background/80 md:to-background/80"></div>
        <div className="absolute inset-0 bg-black/55 md:bg-black/45"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl text-center mb-16 text-gold">
            Electronic Press Kit
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Biography */}
            <div className="border-2 border-primary/30 p-8 rounded-lg">
              <h3 className="font-heading text-2xl mb-6 text-primary">Biography</h3>
              <p className="font-body mb-4 leading-relaxed">
                Dakota Dreamers represents the convergence of two musical worlds: the authentic storytelling tradition of American country music and the passionate artistic heritage of Southern France.
              </p>
              <p className="font-body mb-4 leading-relaxed">
                Since forming in Montpellier, the duo has been crafting a unique sound that honors the cowboy spirit while embracing their Mediterranean roots. Their performances capture the essence of wide landscapes and intimate emotions.
              </p>
              <button 
                disabled
                className="inline-block bg-accent/50 px-4 py-2 rounded text-sm font-heading cursor-not-allowed opacity-50"
              >
                Download Full Bio
              </button>
            </div>

            {/* Music Samples */}
            <div className="border-2 border-primary/30 bg-background/40 backdrop-blur-md p-8 rounded-lg">
              <h3 className="font-heading text-2xl mb-6 text-primary">Music Samples</h3>
              <div className="space-y-4">
                {musicSamples.map((track, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded cursor-pointer transition-colors ${
                      currentTrack === index ? 'bg-primary/20 border border-primary' : 'bg-surface-dark hover:bg-surface-medium'
                    }`}
                    onClick={() => setCurrentTrack(index)}
                  >
                    <h4 className="font-heading text-lg text-sand">{track.title}</h4>
                    <p className="text-cream text-sm mb-2 font-medium">{track.description}</p>
                    <p className="text-primary text-xs">{track.duration}</p>
                  </div>
                ))}
              </div>
              <button 
                disabled
                className="inline-block bg-accent/50 px-4 py-2 rounded text-sm font-heading cursor-not-allowed opacity-50 mt-4"
              >
                Download Tracks
              </button>
            </div>

            {/* Technical & Contact */}
            <div className="space-y-8">
              <div className="border-2 border-primary/30 p-8 rounded-lg">
                <h3 className="font-heading text-2xl mb-6 text-primary">Technical Requirements</h3>
                <ul className="space-y-2 font-body text-sm">
                  <li>• 2 vocal microphones (SM58 or equivalent)</li>
                  <li>• 2 DI boxes for instruments</li>
                  <li>• Basic PA system for venues up to 500 people</li>
                  <li>• Monitor speakers (2 minimum)</li>
                  <li>• Standard power requirements</li>
                </ul>
                <button 
                  disabled
                  className="inline-block bg-accent/50 px-4 py-2 rounded text-sm font-heading cursor-not-allowed opacity-50 mt-4"
                >
                  Tech Rider PDF
                </button>
              </div>

              <div className="border-2 border-primary/30 p-8 rounded-lg">
                <h3 className="font-heading text-2xl mb-6 text-primary">Press Photos</h3>
                <p className="font-body text-sm mb-4">
                  High-resolution promotional photos available for press and promotional use.
                </p>
                <button 
                  disabled
                  className="inline-block bg-accent/50 px-4 py-2 rounded text-sm font-heading cursor-not-allowed opacity-50"
                >
                  Download Photos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Dates */}
      <section id="tour" className="py-20 bg-surface-medium">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl text-center mb-16 text-gold">
            Tour Dates
          </h2>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-surface-light p-16 rounded-lg border-2 border-accent/30">
              <h3 className="font-heading text-4xl text-gold mb-6">Coming Soon</h3>
              <p className="font-body text-lg text-sand mb-8">
                New tour dates will be announced soon. Stay tuned for upcoming performances across Southern France.
              </p>
              <a 
                href="mailto:contact@lourock.com?subject=Booking%20Inquiry%20for%20Dakota%20Dreamers&body=Howdy%20partner!%0D%0A%0D%0AI%20reckon%20Dakota%20Dreamers%20would%20be%20perfect%20for%20our%20event.%20I'd%20be%20mighty%20obliged%20if%20you%20could%20share%20some%20details%20about%20availability%20and%20pricing.%0D%0A%0D%0AOur%20event%20details:%0D%0A-%20Date:%20%0D%0A-%20Venue:%20%0D%0A-%20Expected%20attendance:%20%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20y'all!%0D%0A%0D%0AMuch%20obliged,%0D%0A[Your%20Name]" 
                className="bg-accent hover:bg-rust px-4 sm:px-8 py-3 rounded font-heading transition-colors inline-block"
              >
                <span className="whitespace-normal sm:whitespace-nowrap">Contact for Booking</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/contact.png" 
            alt="Contact background" 
            className="w-full h-auto object-contain object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent via-60% to-background/70 md:from-background/80 md:to-background/80"></div>
        <div className="absolute inset-0 bg-black/55 md:bg-black/45"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl text-center mb-16 text-gold">
            Contact
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="border-2 border-primary/30 p-12 rounded-lg text-center">
              <h3 className="font-heading text-2xl mb-6 text-primary">Get in Touch</h3>
              <p className="font-body text-lg mb-8">
                For bookings, press inquiries, and all other matters, reach out to us at:
              </p>
              <button 
                onClick={() => {
                  const email = 'contact' + '@' + 'lourock.com';
                  const subject = encodeURIComponent('Inquiry for Dakota Dreamers');
                  const body = encodeURIComponent(`Howdy partners!

I'm reaching out about Dakota Dreamers. I'd be much obliged if y'all could help me with some information.

[Your message here]

Happy trails,
[Your Name]`);
                  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
                }}
                className="text-accent hover:text-rust transition-colors font-heading text-xl"
              >
                contact at lourock dot com
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="font-body text-lg mb-4">Based in Montpellier, Occitanie</p>
            <p className="font-body text-ash">Performing across Southern France and beyond</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-dark py-12 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-heading text-2xl text-primary mb-2">Dakota Dreamers</h3>
              <p className="text-ash">Country Rock Duo • Montpellier, France</p>
            </div>
            
            <div className="flex space-x-6">
              <span className="text-ash/50 cursor-not-allowed">Spotify</span>
              <span className="text-ash/50 cursor-not-allowed">YouTube</span>
              <span className="text-ash/50 cursor-not-allowed">Instagram</span>
              <span className="text-ash/50 cursor-not-allowed">Facebook</span>
            </div>
          </div>
          
          <div className="border-t border-smoke/20 mt-8 pt-8 text-center">
            <p className="text-smoke text-sm">
              © 2025 Dakota Dreamers. All rights reserved. | 
              <a href="https://lourock.com" className="text-primary hover:text-accent ml-1">
                Powered by LouRock
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
