'use client';

import { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

export default function Home() {
  const { t } = useTranslation();
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
              {t('nav.title')}
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#about" className="hover:text-kills-red transition-colors">{t('nav.about')}</a>
              <a href="#video" className="hover:text-kills-red transition-colors">{t('nav.video')}</a>
              <a href="#epk" className="hover:text-kills-red transition-colors">{t('nav.epk')}</a>
              <a href="#shows" className="hover:text-kills-red transition-colors">{t('nav.shows')}</a>
              <LanguageSwitcher />
              <a 
                href="https://lourock.com" 
                className="text-kills-red hover:text-kills-pink transition-colors"
              >
                {t('nav.backToLourock')}
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
                {t('nav.about')}
              </a>
              <a 
                href="#video" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-kills-red transition-colors"
              >
                {t('nav.video')}
              </a>
              <a 
                href="#epk" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-kills-red transition-colors"
              >
                {t('nav.epk')}
              </a>
              <a 
                href="#shows" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-kills-red transition-colors"
              >
                {t('nav.shows')}
              </a>
              <div className="py-2">
                <LanguageSwitcher />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/stage.png" 
            alt="Tribute The Kills concert live Montpellier garage rock Hérault Occitanie" 
            className="w-full h-auto object-contain object-center mt-16 md:mt-0"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-kills-black/70 via-transparent to-kills-black/70"></div>
        <div className="absolute inset-0 bg-kills-black/40"></div>
        <div className="relative text-center z-10">
          <h1 className="kills-heading text-4xl sm:text-6xl md:text-8xl lg:text-9xl mb-8 px-4">
            <span className="block text-kills-white">{t('hero.title1')}</span>
            <span className="block text-kills-red">{t('hero.title2')}</span>
            <span className="block text-kills-white">{t('hero.title3')}</span>
          </h1>
          <p className="kills-body text-lg sm:text-xl md:text-2xl text-kills-light-gray max-w-2xl mx-auto mb-12 px-4">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 max-w-md sm:max-w-none mx-auto">
            <a 
              href="#about" 
              className="kills-mono uppercase bg-kills-red hover:bg-kills-dark-red text-kills-white px-8 py-4 transition-colors border-2 border-kills-red hover:border-kills-dark-red"
            >
              {t('hero.discoverBtn')}
            </a>
            <a 
              href="#shows" 
              className="kills-mono uppercase border-2 border-kills-white hover:border-kills-red hover:text-kills-red text-kills-white px-8 py-4 transition-colors"
            >
              {t('hero.bookBtn')}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="kills-heading text-4xl md:text-6xl mb-16 text-center">
            {t('about.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="kills-heading text-2xl mb-6 text-kills-red">
                {t('about.subtitle')}
              </h3>
              <p className="kills-body text-lg mb-6 text-kills-light-gray leading-relaxed">
                {t('about.description1')}
              </p>
              <p className="kills-body text-lg mb-6 text-kills-light-gray leading-relaxed">
                {t('about.description2')}
              </p>
            </div>
            <div className="bg-kills-charcoal p-8 border-2 border-kills-dark-gray">
              <h4 className="kills-heading text-xl mb-4 text-kills-red">
                {t('about.highlightsTitle')}
              </h4>
              <ul className="kills-body space-y-3 text-kills-light-gray">
                <li>• {t('about.highlight1')}</li>
                <li>• {t('about.highlight2')}</li>
                <li>• {t('about.highlight3')}</li>
                <li>• {t('about.highlight4')}</li>
                <li>• {t('about.highlight5')}</li>
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
            alt="Concert garage rock Montpellier tribute band live performance" 
            className="w-full h-auto object-contain object-center mt-16 md:mt-0"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-kills-black/70 via-transparent to-kills-black/70"></div>
        <div className="absolute inset-0 bg-kills-black/40"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="kills-heading text-4xl md:text-6xl mb-16">
            {t('video.title')}
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
            {t('video.caption')}
          </p>
        </div>
      </section>

      {/* Electronic Press Kit */}
      <section id="epk" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="kills-heading text-4xl md:text-6xl mb-16 text-center">
            {t('epk.title')}
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
                {t(`epk.tabs.${tab}`)}
              </button>
            ))}
          </div>

          {/* EPK Content */}
          <div className="bg-kills-charcoal p-4 sm:p-8 border-2 border-kills-dark-gray">
            {activeTab === 'biography' && (
              <div>
                <h3 className="kills-heading text-2xl mb-6 text-kills-red">{t('epk.biography.title')}</h3>
                <div className="kills-body text-kills-light-gray space-y-4 leading-relaxed">
                  <p>{t('epk.biography.paragraph1')}</p>
                  <p>{t('epk.biography.paragraph2')}</p>
                  <p>{t('epk.biography.paragraph3')}</p>
                  <p>{t('epk.biography.paragraph4')}</p>
                </div>
              </div>
            )}

            {activeTab === 'setlist' && (
              <div>
                <h3 className="kills-heading text-2xl mb-6 text-kills-red">{t('epk.setlist.title')}</h3>
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
                  {t('epk.setlist.note')}
                </p>
              </div>
            )}

            {activeTab === 'technical' && (
              <div>
                <h3 className="kills-heading text-2xl mb-6 text-kills-red">{t('epk.technical.title')}</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="kills-mono text-lg mb-4 text-kills-white">{t('epk.technical.soundTitle')}</h4>
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
                      <h4 className="kills-mono text-lg mb-4 text-kills-white">{t('epk.technical.setupTitle')}</h4>
                      <p className="kills-body text-kills-light-gray">{t('epk.technical.setupTime1')}</p>
                      <p className="kills-body text-kills-light-gray">{t('epk.technical.setupTime2')}</p>
                    </div>
                    <div>
                      <h4 className="kills-mono text-lg mb-4 text-kills-white">{t('epk.technical.performanceTitle')}</h4>
                      <p className="kills-body text-kills-light-gray">{t('epk.technical.performanceTime1')}</p>
                      <p className="kills-body text-kills-light-gray">{t('epk.technical.performanceTime2')}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'photos' && (
              <div>
                <h3 className="kills-heading text-2xl mb-6 text-kills-red">{t('epk.photos.title')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="aspect-square bg-kills-dark-gray border-2 border-kills-gray overflow-hidden">
                    <img 
                      src="/stage.png" 
                      alt="Tribute The Kills scène live Montpellier concert rock" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {[2, 3, 4, 5, 6].map((num) => (
                    <div key={num} className="aspect-square bg-kills-dark-gray border-2 border-kills-gray flex items-center justify-center">
                      <span className="kills-mono text-kills-gray">PHOTO {num}</span>
                    </div>
                  ))}
                </div>
                <p className="kills-body text-sm text-kills-gray mt-6">
                  {t('epk.photos.note')}
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
            alt="Réserver concert tribute The Kills Montpellier Occitanie festival club" 
            className="w-full h-auto object-contain object-center mt-16 md:mt-0"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-kills-black/70 via-transparent to-kills-black/70"></div>
        <div className="absolute inset-0 bg-kills-black/40"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="kills-heading text-4xl md:text-6xl mb-16 text-center">
            {t('shows.title')}
          </h2>
          <div className="bg-kills-black border-2 border-kills-dark-gray p-16 text-center">
            <h3 className="kills-heading text-3xl text-kills-red mb-6">{t('shows.comingSoonTitle')}</h3>
            <p className="kills-body text-kills-light-gray text-lg mb-8">
              {t('shows.comingSoonText')}
            </p>
            <a 
              href="mailto:contact@lourock.com" 
              className="kills-mono uppercase bg-kills-red hover:bg-kills-dark-red text-kills-white px-8 py-4 transition-colors border-2 border-kills-red hover:border-kills-dark-red inline-block"
            >
              {t('shows.contactBtn')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-kills-dark-gray">
        <div className="max-w-4xl mx-auto text-center">
          <div className="kills-heading text-2xl mb-6">
            {t('footer.title')}
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
            <a href="mailto:contact@lourock.com" className="kills-body hover:text-kills-red transition-colors">
              {t('footer.email')}
            </a>
          </div>
          <div className="kills-body text-kills-gray text-sm">
            <p>
              {t('footer.description')}
              <a href="https://lourock.com" className="text-kills-red hover:text-kills-pink ml-1">
                {t('footer.poweredBy')}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}