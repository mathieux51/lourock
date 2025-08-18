'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('biography');

  const setlist = [
    "Midnight Boom", "DNA", "U.R.A. Fever", "Fried My Little Brains",
    "Future Starts Slow", "Black Balloon", "Heart of a Dog", "Doing It to Death",
    "Monkey 23", "Tape Song", "Pull a U", "No Wow",
    "Love Is a Deserter", "Kissy Kissy", "Wait", "Satellite"
  ];

  const technicalRequirements = [
    "2x Vocal microphones (SM58 or equivalent)",
    "Guitar amplifier (minimum 50W tube amp preferred)",
    "Drum kit with full monitoring",
    "Direct input for guitar effects/drum machine",
    "Basic stage lighting (red/white spots preferred)",
    "Minimum stage size: 4m x 3m"
  ];

  const shows = [
    {
      date: "2024-03-15",
      venue: "Le Rockstore",
      city: "Montpellier",
      status: "confirmed"
    },
    {
      date: "2024-04-20",
      venue: "La Coopérative",
      city: "Toulouse",
      status: "confirmed"
    },
    {
      date: "2024-05-12",
      venue: "Le Bikini",
      city: "Toulouse",
      status: "pending"
    },
    {
      date: "2024-06-08",
      venue: "Théâtre de Nîmes",
      city: "Nîmes",
      status: "confirmed"
    }
  ];

  return (
    <div className="min-h-screen bg-kills-black text-kills-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-kills-black/90 backdrop-blur-sm border-b border-kills-dark-gray">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="kills-heading text-xl">
              TRIBUTE BAND THE KILLS
            </div>
            <div className="flex space-x-6">
              <a href="#about" className="hover:text-kills-red transition-colors">ABOUT</a>
              <a href="#video" className="hover:text-kills-red transition-colors">VIDEO</a>
              <a href="#epk" className="hover:text-kills-red transition-colors">EPK</a>
              <a href="#shows" className="hover:text-kills-red transition-colors">SHOWS</a>
              <a 
                href="https://lourock.com" 
                className="text-kills-red hover:text-kills-pink transition-colors"
              >
                ← LOUROCK.COM
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-kills-black via-kills-charcoal to-kills-black opacity-80"></div>
        <div className="relative text-center z-10">
          <h1 className="kills-heading text-6xl md:text-8xl lg:text-9xl mb-8">
            <span className="block text-kills-white">TRIBUTE</span>
            <span className="block text-kills-red">BAND</span>
            <span className="block text-kills-white">THE KILLS</span>
          </h1>
          <p className="kills-body text-xl md:text-2xl text-kills-light-gray max-w-2xl mx-auto mb-12 px-4">
            Raw garage rock tribute capturing the minimalist sound and explosive energy of Alison Mosshart and Jamie Hince
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a 
              href="#about" 
              className="kills-mono uppercase bg-kills-red hover:bg-kills-dark-red text-kills-white px-8 py-4 transition-colors border-2 border-kills-red hover:border-kills-dark-red"
            >
              Discover
            </a>
            <a 
              href="#shows" 
              className="kills-mono uppercase border-2 border-kills-white hover:border-kills-red hover:text-kills-red text-kills-white px-8 py-4 transition-colors"
            >
              Book Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="kills-heading text-4xl md:text-6xl mb-16 text-center">
            ABOUT THE TRIBUTE
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="kills-heading text-2xl mb-6 text-kills-red">
                RAW GARAGE ROCK AUTHENTICITY
              </h3>
              <p className="kills-body text-lg mb-6 text-kills-light-gray leading-relaxed">
                We are Tribute Band The Kills, a professional duo dedicated to recreating the raw, minimalist garage rock sound that made The Kills legendary. Based in Occitanie, we bring the explosive energy of Alison Mosshart's vocals and Jamie Hince's distinctive guitar work to venues across the region.
              </p>
              <p className="kills-body text-lg mb-6 text-kills-light-gray leading-relaxed">
                Our performances capture the essence of The Kills' stripped-down aesthetic - two people, maximum impact. From the haunting melodies of "Future Starts Slow" to the driving rhythm of "DNA," we deliver an authentic tribute experience that honors the original while bringing our own raw energy to the stage.
              </p>
            </div>
            <div className="bg-kills-charcoal p-8 border-2 border-kills-dark-gray">
              <h4 className="kills-heading text-xl mb-4 text-kills-red">
                PERFORMANCE HIGHLIGHTS
              </h4>
              <ul className="kills-body space-y-3 text-kills-light-gray">
                <li>• Authentic recreation of The Kills' minimalist setup</li>
                <li>• Full repertoire spanning all major albums</li>
                <li>• Professional grade equipment and sound</li>
                <li>• High-energy performances across Occitanie</li>
                <li>• Available for festivals, clubs, and private events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-20 px-4 bg-kills-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="kills-heading text-4xl md:text-6xl mb-16">
            LIVE PERFORMANCE
          </h2>
          <div className="relative aspect-video bg-kills-black border-2 border-kills-red mb-8">
            <video 
              className="w-full h-full object-cover"
              controls
              poster="/video-poster.jpg"
            >
              <source src="/whirling-eyes.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="kills-body text-lg text-kills-light-gray">
            Watch us perform "Future Starts Slow" live at Le Rockstore, Montpellier
          </p>
        </div>
      </section>

      {/* Electronic Press Kit */}
      <section id="epk" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="kills-heading text-4xl md:text-6xl mb-16 text-center">
            ELECTRONIC PRESS KIT
          </h2>
          
          {/* EPK Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['biography', 'setlist', 'technical', 'photos'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`kills-mono uppercase px-6 py-3 border-2 transition-colors ${
                  activeTab === tab 
                    ? 'bg-kills-red border-kills-red text-kills-white' 
                    : 'border-kills-white hover:border-kills-red hover:text-kills-red text-kills-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* EPK Content */}
          <div className="bg-kills-charcoal p-8 border-2 border-kills-dark-gray">
            {activeTab === 'biography' && (
              <div>
                <h3 className="kills-heading text-2xl mb-6 text-kills-red">BAND BIOGRAPHY</h3>
                <div className="kills-body text-kills-light-gray space-y-4 leading-relaxed">
                  <p>
                    Tribute Band The Kills emerged from the vibrant music scene of Occitanie with a singular mission: to honor and recreate the raw, minimalist garage rock sound that defined The Kills' legendary career. Formed by two passionate musicians who share a deep appreciation for Alison Mosshart and Jamie Hince's groundbreaking work, the duo has quickly established themselves as the definitive Kills tribute act in Southern France.
                  </p>
                  <p>
                    Drawing inspiration from The Kills' entire discography - from the raw energy of "Keep On Your Mean Side" to the refined aggression of "Blood Pressures" - our performances capture both the musical precision and explosive stage presence that made the original duo iconic. We meticulously recreate the stripped-down aesthetic that became The Kills' signature: two people, maximum impact.
                  </p>
                  <p>
                    Since our formation, we have performed across Occitanie's most respected venues, bringing the garage rock revival to both intimate clubs and festival stages. Our commitment to authenticity extends beyond just the music - we embody the visual aesthetic, the raw energy, and the uncompromising artistic vision that made The Kills pioneers of modern garage rock.
                  </p>
                  <p>
                    Available for festivals, club shows, and private events, Tribute Band The Kills delivers a professional, high-energy performance that celebrates one of garage rock's most influential acts while bringing our own passionate interpretation to every show.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'setlist' && (
              <div>
                <h3 className="kills-heading text-2xl mb-6 text-kills-red">PERFORMANCE SETLIST</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="kills-mono text-lg mb-4 text-kills-white">MAIN SET</h4>
                    <ul className="kills-body space-y-2 text-kills-light-gray">
                      {setlist.slice(0, 8).map((song, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-kills-red mr-3 kills-mono">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          {song}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="kills-mono text-lg mb-4 text-kills-white">ENCORE</h4>
                    <ul className="kills-body space-y-2 text-kills-light-gray">
                      {setlist.slice(8).map((song, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-kills-red mr-3 kills-mono">
                            {String(index + 9).padStart(2, '0')}
                          </span>
                          {song}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="kills-body text-sm text-kills-gray mt-8">
                  * Setlist can be customized for specific venues and event requirements
                </p>
              </div>
            )}

            {activeTab === 'technical' && (
              <div>
                <h3 className="kills-heading text-2xl mb-6 text-kills-red">TECHNICAL REQUIREMENTS</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="kills-mono text-lg mb-4 text-kills-white">SOUND REQUIREMENTS</h4>
                    <ul className="kills-body space-y-2 text-kills-light-gray">
                      {technicalRequirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-kills-red mr-3">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-kills-dark-gray">
                    <div>
                      <h4 className="kills-mono text-lg mb-4 text-kills-white">SETUP TIME</h4>
                      <p className="kills-body text-kills-light-gray">60 minutes soundcheck + setup</p>
                      <p className="kills-body text-kills-light-gray">30 minutes breakdown</p>
                    </div>
                    <div>
                      <h4 className="kills-mono text-lg mb-4 text-kills-white">PERFORMANCE</h4>
                      <p className="kills-body text-kills-light-gray">75-minute main set</p>
                      <p className="kills-body text-kills-light-gray">15-minute encore (optional)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'photos' && (
              <div>
                <h3 className="kills-heading text-2xl mb-6 text-kills-red">PRESS PHOTOS</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div key={num} className="aspect-square bg-kills-dark-gray border-2 border-kills-gray flex items-center justify-center">
                      <span className="kills-mono text-kills-gray">PHOTO {num}</span>
                    </div>
                  ))}
                </div>
                <p className="kills-body text-sm text-kills-gray mt-6">
                  High-resolution press photos available for download. Contact us for media kit access.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Shows Section */}
      <section id="shows" className="py-20 px-4 bg-kills-charcoal">
        <div className="max-w-4xl mx-auto">
          <h2 className="kills-heading text-4xl md:text-6xl mb-16 text-center">
            UPCOMING SHOWS
          </h2>
          <div className="space-y-6">
            {shows.map((show, index) => (
              <div key={index} className="bg-kills-black border-2 border-kills-dark-gray p-6 hover:border-kills-red transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <span className="kills-mono text-kills-red text-lg">
                        {new Date(show.date).toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="kills-body text-xl text-kills-white">{show.venue}</span>
                      <span className="kills-body text-kills-light-gray">{show.city}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className={`kills-mono text-sm px-3 py-1 border ${
                      show.status === 'confirmed' 
                        ? 'text-kills-white border-kills-red' 
                        : 'text-kills-gray border-kills-gray'
                    }`}>
                      {show.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="mailto:booking@tributebandthekills.com" 
              className="kills-mono uppercase bg-kills-red hover:bg-kills-dark-red text-kills-white px-8 py-4 transition-colors border-2 border-kills-red hover:border-kills-dark-red inline-block"
            >
              Book Performance
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-kills-dark-gray">
        <div className="max-w-4xl mx-auto text-center">
          <div className="kills-heading text-2xl mb-6">
            TRIBUTE BAND THE KILLS
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
            <a href="mailto:booking@tributebandthekills.com" className="kills-body hover:text-kills-red transition-colors">
              booking@tributebandthekills.com
            </a>
            <a href="tel:+33123456789" className="kills-body hover:text-kills-red transition-colors">
              +33 1 23 45 67 89
            </a>
          </div>
          <div className="kills-body text-kills-gray text-sm">
            <p>Professional tribute to The Kills • Occitanie, France</p>
            <p className="mt-2">
              <a href="https://lourock.com" className="hover:text-kills-red transition-colors">
                Part of the LOUROCK network
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}