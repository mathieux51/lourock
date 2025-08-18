"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState(0);
  
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
      date: "2024-09-15",
      venue: "Le Rockstore",
      city: "Montpellier",
      region: "Hérault",
      status: "confirmed"
    },
    {
      date: "2024-09-28",
      venue: "L'Usine à Musique",
      city: "Toulouse",
      region: "Haute-Garonne",
      status: "confirmed"
    },
    {
      date: "2024-10-12",
      venue: "Festival Country Sud",
      city: "Nîmes",
      region: "Gard",
      status: "festival"
    },
    {
      date: "2024-10-25",
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
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-heading text-2xl text-primary">Dakota Dreamers</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#epk" className="hover:text-accent transition-colors">EPK</a>
            <a href="#tour" className="hover:text-accent transition-colors">Tour</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            <Link href="/design-system" className="hover:text-accent transition-colors">Design</Link>
          </div>
          <a 
            href="https://lourock.com" 
            className="bg-primary hover:bg-accent px-4 py-2 rounded transition-colors font-heading text-sm"
          >
            Back to LouRock
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-dusk opacity-80"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0iIzQzNDAzYyIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20"></div>
        <div className="relative z-10 text-center animate-fade-in-up">
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-cream mb-6 tracking-wider">
            DAKOTA
            <br />
            <span className="text-accent">DREAMERS</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-sand mb-8 max-w-2xl mx-auto">
            Bringing the Spirit of the American West to Southern France
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      <section id="about" className="py-20 bg-surface-medium">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl text-center mb-12 text-gold">
              About the Band
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="font-body text-lg leading-relaxed">
                  Dakota Dreamers emerged from the sun-baked streets of Montpellier with a vision as vast as the American plains. This country rock duo has mastered the art of blending authentic Western storytelling with the passionate spirit of Southern France.
                </p>
                <p className="font-body text-lg leading-relaxed">
                  Born from a shared love of wide-open spaces and timeless melodies, the band channels the raw emotion of classic country through a modern rock lens. Their music speaks to the wanderer's heart, the dreamer's soul, and the rebel's spirit.
                </p>
                <p className="font-body text-lg leading-relaxed">
                  From intimate venues in the Occitanie region to festival stages across Southern France, Dakota Dreamers delivers performances that transport audiences to dusty highways and endless horizons, proving that the American West lives in the hearts of all who dare to dream.
                </p>
              </div>
              <div className="bg-surface-light p-8 rounded-lg">
                <h3 className="font-heading text-2xl mb-6 text-primary">Band Members</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-heading text-lg text-sand">Lead Vocals & Guitar</h4>
                    <p className="text-ash">The voice that carries the stories of both continents</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-heading text-lg text-sand">Harmonies & Bass</h4>
                    <p className="text-ash">The rhythmic foundation that bridges worlds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electronic Press Kit */}
      <section id="epk" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl text-center mb-16 text-gold">
            Electronic Press Kit
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Biography */}
            <div className="bg-surface-light p-8 rounded-lg">
              <h3 className="font-heading text-2xl mb-6 text-primary">Biography</h3>
              <p className="font-body mb-4 leading-relaxed">
                Dakota Dreamers represents the convergence of two musical worlds: the authentic storytelling tradition of American country music and the passionate artistic heritage of Southern France.
              </p>
              <p className="font-body mb-4 leading-relaxed">
                Since forming in Montpellier, the duo has been crafting a unique sound that honors the cowboy spirit while embracing their Mediterranean roots. Their performances capture the essence of wide landscapes and intimate emotions.
              </p>
              <a 
                href="#" 
                className="inline-block bg-accent hover:bg-rust px-4 py-2 rounded text-sm font-heading transition-colors"
              >
                Download Full Bio
              </a>
            </div>

            {/* Music Samples */}
            <div className="bg-surface-light p-8 rounded-lg">
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
                    <p className="text-ash text-sm mb-2">{track.description}</p>
                    <p className="text-primary text-xs">{track.duration}</p>
                  </div>
                ))}
              </div>
              <a 
                href="#" 
                className="inline-block bg-accent hover:bg-rust px-4 py-2 rounded text-sm font-heading transition-colors mt-4"
              >
                Download Tracks
              </a>
            </div>

            {/* Technical & Contact */}
            <div className="space-y-8">
              <div className="bg-surface-light p-8 rounded-lg">
                <h3 className="font-heading text-2xl mb-6 text-primary">Technical Requirements</h3>
                <ul className="space-y-2 font-body text-sm">
                  <li>• 2 vocal microphones (SM58 or equivalent)</li>
                  <li>• 2 DI boxes for instruments</li>
                  <li>• Basic PA system for venues up to 500 people</li>
                  <li>• Monitor speakers (2 minimum)</li>
                  <li>• Standard power requirements</li>
                </ul>
                <a 
                  href="#" 
                  className="inline-block bg-accent hover:bg-rust px-4 py-2 rounded text-sm font-heading transition-colors mt-4"
                >
                  Tech Rider PDF
                </a>
              </div>

              <div className="bg-surface-light p-8 rounded-lg">
                <h3 className="font-heading text-2xl mb-6 text-primary">Press Photos</h3>
                <p className="font-body text-sm mb-4">
                  High-resolution promotional photos available for press and promotional use.
                </p>
                <a 
                  href="#" 
                  className="inline-block bg-accent hover:bg-rust px-4 py-2 rounded text-sm font-heading transition-colors"
                >
                  Download Photos
                </a>
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
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {tourDates.map((show, index) => (
                <div 
                  key={index}
                  className="bg-surface-light p-6 rounded-lg border-l-4 border-accent hover:bg-surface-dark transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="min-w-0">
                          <h3 className="font-heading text-xl text-sand">{show.venue}</h3>
                          <p className="text-ash">{show.city}, {show.region}</p>
                        </div>
                        <div className="text-primary font-heading">
                          {new Date(show.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className={`px-3 py-1 rounded text-xs font-heading uppercase ${
                        show.status === 'confirmed' ? 'bg-green-600 text-white' :
                        show.status === 'festival' ? 'bg-gold text-background' :
                        'bg-smoke text-white'
                      }`}>
                        {show.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="font-body text-lg mb-6">
                Book Dakota Dreamers for your venue or festival
              </p>
              <a 
                href="#contact" 
                className="bg-accent hover:bg-rust px-8 py-3 rounded font-heading transition-colors"
              >
                Contact for Booking
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl text-center mb-16 text-gold">
            Contact
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-surface-light p-8 rounded-lg text-center">
              <h3 className="font-heading text-xl mb-4 text-primary">Booking Inquiries</h3>
              <p className="font-body mb-4">For venue bookings and festival appearances</p>
              <a 
                href="mailto:booking@dakotadreamers.com" 
                className="text-accent hover:text-rust transition-colors font-heading"
              >
                booking@dakotadreamers.com
              </a>
            </div>

            <div className="bg-surface-light p-8 rounded-lg text-center">
              <h3 className="font-heading text-xl mb-4 text-primary">Press & Media</h3>
              <p className="font-body mb-4">Interviews, reviews, and media requests</p>
              <a 
                href="mailto:press@dakotadreamers.com" 
                className="text-accent hover:text-rust transition-colors font-heading"
              >
                press@dakotadreamers.com
              </a>
            </div>

            <div className="bg-surface-light p-8 rounded-lg text-center md:col-span-2 lg:col-span-1">
              <h3 className="font-heading text-xl mb-4 text-primary">General Contact</h3>
              <p className="font-body mb-4">Questions, fan mail, and general inquiries</p>
              <a 
                href="mailto:info@dakotadreamers.com" 
                className="text-accent hover:text-rust transition-colors font-heading"
              >
                info@dakotadreamers.com
              </a>
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
              <a href="#" className="text-ash hover:text-accent transition-colors">Spotify</a>
              <a href="#" className="text-ash hover:text-accent transition-colors">YouTube</a>
              <a href="#" className="text-ash hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="text-ash hover:text-accent transition-colors">Facebook</a>
            </div>
          </div>
          
          <div className="border-t border-smoke/20 mt-8 pt-8 text-center">
            <p className="text-smoke text-sm">
              © 2024 Dakota Dreamers. All rights reserved. | 
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
