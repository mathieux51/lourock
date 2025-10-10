'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('biography');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setlist = [
    "Doing It to Death", "Impossible Tracks", "Tape Song", "Whirling Eyes",
    "Future Starts Slow", "Black Balloon", "Heart of a Dog", "DNA",
    "Monkey 23", "U.R.A. Fever", "Pull a U", "No Wow",
    "Love Is a Deserter", "Kissy Kissy", "Wait", "Satellite"
  ];

  const technicalRequirements = [
    "2x Vocal microphones (SM58 or equivalent)",
    "2x Microphone stands",
    "PA system with adequate power for venue",
    "2x Direct inputs for guitars",
    "Direct input for drum machine/effects",
    "Basic stage lighting (red/white spots preferred)",
    "Minimum stage size: 4m x 3m"
  ];

  // const shows = [
  //   {
  //     date: "2025-03-15",
  //     venue: "Le Rockstore",
  //     city: "Montpellier",
  //     status: "confirmed"
  //   },
  //   {
  //     date: "2025-04-20",
  //     venue: "La Coopérative",
  //     city: "Toulouse",
  //     status: "confirmed"
  //   },
  //   {
  //     date: "2025-05-12",
  //     venue: "Le Bikini",
  //     city: "Toulouse",
  //     status: "pending"
  //   },
  //   {
  //     date: "2025-06-08",
  //     venue: "Théâtre de Nîmes",
  //     city: "Nîmes",
  //     status: "confirmed"
  //   }
  // ];

  return (
    <div className="min-h-screen bg-kills-black text-kills-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-kills-black/90 backdrop-blur-sm border-b border-kills-dark-gray">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="kills-heading text-xl">
              TRIBUTE BAND THE KILLS
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
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

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-kills-dark-gray rounded transition-colors"
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
                href="#about" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-kills-red transition-colors"
              >
                ABOUT
              </a>
              <a 
                href="#video" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-kills-red transition-colors"
              >
                VIDEO
              </a>
              <a 
                href="#epk" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-kills-red transition-colors"
              >
                EPK
              </a>
              <a 
                href="#shows" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-kills-red transition-colors"
              >
                SHOWS
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/stage.png" 
            alt="Stage background" 
            className="w-full h-auto object-contain object-center mt-16 md:mt-0"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-kills-black/70 via-transparent to-kills-black/70"></div>
        <div className="absolute inset-0 bg-kills-black/40"></div>
        <div className="relative text-center z-10">
          <h1 className="kills-heading text-4xl sm:text-6xl md:text-8xl lg:text-9xl mb-8 px-4">
            <span className="block text-kills-white">TRIBUTE</span>
            <span className="block text-kills-red">BAND</span>
            <span className="block text-kills-white">THE KILLS</span>
          </h1>
          <p className="kills-body text-lg sm:text-xl md:text-2xl text-kills-light-gray max-w-2xl mx-auto mb-12 px-4">
            Raw garage tribute capturing the minimalist sound and explosive energy of Alison Mosshart and Jamie Hince
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 max-w-md sm:max-w-none mx-auto">
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
                RAW GARAGE TRIBUTE
              </h3>
              <p className="kills-body text-lg mb-6 text-kills-light-gray leading-relaxed">
                We don&apos;t just play The Kills&apos; songs - we resurrect their primal energy. Every performance is a sonic assault of minimalist garage sound, where two guitars become an army and silence is as powerful as sound. We capture the danger, the tension, and the raw intensity that defines The Kills&apos; legendary live shows.
              </p>
              <p className="kills-body text-lg mb-6 text-kills-light-gray leading-relaxed">
                From the feedback-drenched chaos of their early work to the sophisticated darkness of their later albums, we deliver an authentic experience that goes beyond mere imitation. This is about channeling the spirit of garage rebellion, bringing that same confrontational intimacy that made The Kills one of the most influential acts of the 21st century.
              </p>
            </div>
            <div className="bg-kills-charcoal p-8 border-2 border-kills-dark-gray">
              <h4 className="kills-heading text-xl mb-4 text-kills-red">
                PERFORMANCE HIGHLIGHTS
              </h4>
              <ul className="kills-body space-y-3 text-kills-light-gray">
                <li>• Authentic recreation of The Kills&apos; minimalist setup</li>
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
      <section id="video" className="py-20 px-4 bg-kills-charcoal relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/fireworks.png" 
            alt="Fireworks background" 
            className="w-full h-auto object-contain object-center mt-16 md:mt-0"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-kills-black/70 via-transparent to-kills-black/70"></div>
        <div className="absolute inset-0 bg-kills-black/40"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="kills-heading text-4xl md:text-6xl mb-16">
            LIVE PERFORMANCE
          </h2>
          <div className="relative aspect-video bg-kills-black border-2 border-kills-red mb-8">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/q9bZG09xVm4"
              title="Whirling Eyes - Live at The Black Sheep"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="kills-body text-lg text-kills-light-gray">
            Watch us perform &quot;Whirling Eyes&quot; live at The Black Sheep
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
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {['biography', 'setlist', 'technical', 'photos'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`kills-mono uppercase px-3 py-2 sm:px-6 sm:py-3 border-2 transition-colors text-sm sm:text-base ${
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
          <div className="bg-kills-charcoal p-4 sm:p-8 border-2 border-kills-dark-gray">
            {activeTab === 'biography' && (
              <div>
                <h3 className="kills-heading text-2xl mb-6 text-kills-red">BAND BIOGRAPHY</h3>
                <div className="kills-body text-kills-light-gray space-y-4 leading-relaxed">
                  <p>
                    Our story began at an open mic night in Montpellier, where fate brought together three musicians with a shared passion. When Mathieu heard the raw power of Lucie and Francis performing, he knew he&apos;d found something special. That night sparked the formation of Tribute Band The Kills.
                  </p>
                  <p>
                    United by our love for The Kills&apos; minimalist garage sound and a mutual appreciation for sunglasses on stage, we channel the explosive energy and stripped-down aesthetic that made the original duo legendary. From Montpellier to venues across Occitanie, we bring that same raw, unfiltered intensity to every performance.
                  </p>
                  <p>
                    Drawing inspiration from The Kills&apos; entire discography - from the raw energy of &quot;Keep On Your Mean Side&quot; to the refined aggression of &quot;Blood Pressures&quot; - our performances capture both the musical precision and explosive stage presence that made Alison Mosshart and Jamie Hince iconic. We meticulously recreate the stripped-down aesthetic that became The Kills&apos; signature, delivering authentic recreations of their minimalist setup.
                  </p>
                  <p>
                    Available for festivals, club shows, and private events across Occitanie and beyond, Tribute Band The Kills delivers professional, high-energy performances with professional grade equipment and sound. We bring the garage revival to both intimate clubs and festival stages, celebrating one of garage music&apos;s most influential acts.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'setlist' && (
              <div>
                <h3 className="kills-heading text-2xl mb-6 text-kills-red">PERFORMANCE SETLIST</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {[0, 1].map((colIndex) => (
                    <div key={colIndex}>
                      <ul className="kills-body space-y-2 text-kills-light-gray">
                        {setlist.slice(colIndex * 8, colIndex * 8 + 8).map((song, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-kills-red mr-3 kills-mono">
                              {String(colIndex * 8 + index + 1).padStart(2, '0')}
                            </span>
                            {song}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Stage Photo */}
                  <div className="aspect-square bg-kills-dark-gray border-2 border-kills-gray overflow-hidden">
                    <img 
                      src="/stage.png" 
                      alt="Stage performance" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Placeholder Photos */}
                  {[2, 3, 4, 5, 6].map((num) => (
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
      <section id="shows" className="py-20 px-4 bg-kills-charcoal relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/shows.png" 
            alt="Shows background" 
            className="w-full h-auto object-contain object-center mt-16 md:mt-0"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-kills-black/70 via-transparent to-kills-black/70"></div>
        <div className="absolute inset-0 bg-kills-black/40"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="kills-heading text-4xl md:text-6xl mb-16 text-center">
            UPCOMING SHOWS
          </h2>
          <div className="bg-kills-black border-2 border-kills-dark-gray p-16 text-center">
            <h3 className="kills-heading text-3xl text-kills-red mb-6">COMING SOON</h3>
            <p className="kills-body text-kills-light-gray text-lg mb-8">
              New tour dates will be announced soon. Stay tuned for upcoming tribute performances.
            </p>
            <a 
              href="mailto:contact@lourock.com" 
              className="kills-mono uppercase bg-kills-red hover:bg-kills-dark-red text-kills-white px-8 py-4 transition-colors border-2 border-kills-red hover:border-kills-dark-red inline-block"
            >
              CONTACT FOR BOOKINGS
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
            <a href="mailto:contact@lourock.com" className="kills-body hover:text-kills-red transition-colors">
              contact@lourock.com
            </a>
          </div>
          <div className="kills-body text-kills-gray text-sm">
            <p>
              Professional tribute to The Kills • Occitanie, France | 
              <a href="https://lourock.com" className="text-kills-red hover:text-kills-pink ml-1">
                Powered by LouRock
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}