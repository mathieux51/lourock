'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { LanguageSwitcher } from '../components/LanguageSwitcher'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <div id="app-root" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header id="main-header" className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <nav id="main-nav" className="container mx-auto px-6 py-4">
          <div id="nav-container" className="flex justify-between items-center">
            <h1 id="brand-logo" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('nav.brand')}
            </h1>
            
            {/* Desktop Menu */}
            <div id="desktop-menu" className="hidden md:flex space-x-8 items-center">
              <a href="#bands" className="hover:text-purple-400 transition-colors">{t('nav.menu.bands')}</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">{t('nav.menu.about')}</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">{t('nav.menu.contact')}</a>
              <LanguageSwitcher />
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
              aria-label={t('nav.toggleMenu')}
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
            <div id="mobile-menu" className="md:hidden mt-4 pb-4 space-y-4">
              <a 
                href="#bands" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-purple-400 transition-colors"
              >
                {t('nav.menu.bands')}
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-purple-400 transition-colors"
              >
                {t('nav.menu.about')}
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-purple-400 transition-colors"
              >
                {t('nav.menu.contact')}
              </a>
              <div className="pt-2 border-t border-slate-800">
                <LanguageSwitcher />
              </div>
            </div>
          )}
        </nav>
      </header>

      <main id="main-content">
        <section id="hero-section" className="h-screen flex items-center justify-center px-6">
          <div id="hero-content" className="text-center max-w-4xl">
            <h2 id="hero-title" className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
              {t('hero.title')}
            </h2>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 mb-8">
              {t('hero.subtitle')}
            </p>
            <p id="hero-description" className="text-lg text-slate-400 mb-12">
              {t('hero.description')}
            </p>
            <a 
              href="#bands" 
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
            >
              {t('hero.cta')}
            </a>
          </div>
        </section>

        <section id="bands" className="py-20 px-6">
          <div id="bands-container" className="container mx-auto">
            <h3 id="bands-title" className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('bands.title')}
            </h3>
            
            <div id="bands-grid" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <Link href="https://dakota-dreamers.lourock.com" className="group">
                <div id="band-dakota" className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                  <div className="h-48 bg-cover bg-center rounded-lg mb-6" style={{backgroundImage: 'url("https://dakota-dreamers.lourock.com/stage.png")'}}></div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{t('bands.dakota.name')}</h4>
                  <p className="text-slate-400 mb-4">{t('bands.dakota.genre')}</p>
                  <p className="text-sm text-slate-500">
                    {t('bands.dakota.description')}
                  </p>
                </div>
              </Link>

              <Link href="https://the-kills.lourock.com" className="group">
                <div id="band-kills" className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                  <div className="h-48 bg-cover bg-center rounded-lg mb-6" style={{backgroundImage: 'url("https://the-kills.lourock.com/stage.png")'}}></div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{t('bands.kills.name')}</h4>
                  <p className="text-slate-400 mb-4">{t('bands.kills.genre')}</p>
                  <p className="text-sm text-slate-500">
                    {t('bands.kills.description')}
                  </p>
                </div>
              </Link>

              <Link href="https://mathieu-schmidt.lourock.com" className="group">
                <div id="band-mathieu" className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                  <div className="h-48 bg-cover bg-center rounded-lg mb-6" style={{backgroundImage: 'url("https://mathieu-schmidt.lourock.com/port.png")'}}></div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{t('bands.mathieu.name')}</h4>
                  <p className="text-slate-400 mb-4">{t('bands.mathieu.genre')}</p>
                  <p className="text-sm text-slate-500">
                    {t('bands.mathieu.description')}
                  </p>
                </div>
              </Link>

              <Link href="https://les-espanters.lourock.com" className="group">
                <div id="band-espanters" className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                  <div className="h-48 bg-cover bg-center rounded-lg mb-6" style={{backgroundImage: 'url("https://les-espanters.lourock.com/laugh.png")'}}></div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{t('bands.espanters.name')}</h4>
                  <p className="text-slate-400 mb-4">{t('bands.espanters.genre')}</p>
                  <p className="text-sm text-slate-500">
                    {t('bands.espanters.description')}
                  </p>
                </div>
              </Link>
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-400">
                {t('bands.epkNote')}
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6 bg-slate-900/50">
          <div id="about-container" className="container mx-auto max-w-4xl">
            <h3 id="about-title" className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('about.title')}
            </h3>
            <div id="about-content" className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-10 border border-slate-700">
              <p className="text-lg text-slate-300 mb-6">
                {t('about.paragraph1')}
              </p>
              <p className="text-lg text-slate-300 mb-6">
                {t('about.paragraph2')}
              </p>
              <p className="text-lg text-slate-300">
                {t('about.paragraph3')}
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 bg-slate-900/50">
          <div id="contact-container" className="container mx-auto max-w-2xl">
            <h3 id="contact-title" className="text-4xl font-bold text-center mb-12">{t('contact.title')}</h3>
            <div id="contact-content" className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-10 border border-slate-700 text-center">
              <p className="text-lg text-slate-300 mb-8">
                {t('contact.description')}
              </p>
              
              <div id="available-bands" className="space-y-4 mb-8">
                <p className="text-slate-400">
                  <span className="font-semibold text-slate-200">{t('contact.availableBands')}</span>
                </p>
                <ul id="bands-list" className="text-slate-300 space-y-2">
                  <li>• {t('bands.dakota.name')} - {t('bands.dakota.genre')}</li>
                  <li>• {t('bands.kills.name')} - {t('bands.kills.genre')}</li>
                  <li>• {t('bands.mathieu.name')} - {t('bands.mathieu.genre')}</li>
                  <li>• {t('bands.espanters.name')} - {t('bands.espanters.genre')}</li>
                </ul>
              </div>

              <a
                href={`mailto:${t('contact.email')}?subject=${encodeURIComponent(t('contact.emailSubject'))}&body=${encodeURIComponent(t('contact.emailBody'))}`}
                className="inline-block w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-[1.02]"
              >
                {t('contact.cta')}
              </a>
              
              <p className="text-sm text-slate-400 mt-6">
                {t('contact.directEmail')} <span className="text-purple-400">{t('contact.email')}</span>
              </p>
            </div>
          </div>
        </section>

        {/* Request Missing Band Section */}
        <section id="request-band-section" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
          <div id="request-band-container" className="container mx-auto max-w-4xl text-center">
            <h2 id="request-band-title" className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('requestBand.title')}
            </h2>
            <p id="request-band-description" className="text-xl text-slate-300 mb-8">
              {t('requestBand.description')}
            </p>
            <a
              href={`mailto:${t('contact.email')}?subject=${encodeURIComponent(t('requestBand.emailSubject'))}&body=${encodeURIComponent(t('requestBand.emailBody'))}`}
              className="inline-block px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-[1.02]"
            >
              {t('requestBand.cta')}
            </a>
          </div>
        </section>
      </main>

      <footer id="main-footer" className="bg-slate-950 border-t border-slate-800 py-8 px-6">
        <div id="footer-container" className="container mx-auto text-center">
          <p className="text-slate-400 mb-4">
            {t('footer.copyright')}
          </p>
          <div className="flex justify-center space-x-6 text-sm text-slate-500">
            <span>{t('footer.location')}</span>
            <span>•</span>
            <span>{t('footer.platform')}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}