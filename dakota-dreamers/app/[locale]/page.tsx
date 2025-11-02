"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  
  const musicSamples = [
    {
      title: t('epk.music.track1.title'),
      description: t('epk.music.track1.description'),
      duration: t('epk.music.track1.duration')
    },
    {
      title: t('epk.music.track2.title'),
      description: t('epk.music.track2.description'),
      duration: t('epk.music.track2.duration')
    },
    {
      title: t('epk.music.track3.title'),
      description: t('epk.music.track3.description'),
      duration: t('epk.music.track3.duration')
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
              <a href="#home" className="hover:text-accent transition-colors">{t('nav.home')}</a>
              <a href="#about" className="hover:text-accent transition-colors">{t('nav.about')}</a>
              <a href="#epk" className="hover:text-accent transition-colors">{t('nav.epk')}</a>
              <a href="#tour" className="hover:text-accent transition-colors">{t('nav.tour')}</a>
              <a href="#contact" className="hover:text-accent transition-colors">{t('nav.contact')}</a>
              <LanguageSwitcher />
              <a 
                href="https://lourock.com" 
                className="bg-primary hover:bg-accent px-4 py-2 rounded transition-colors font-heading text-sm ml-4"
              >
                {t('nav.backToLouRock')}
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-surface-light rounded transition-colors"
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
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a 
                href="#home" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-accent transition-colors"
              >
                {t('nav.home')}
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-accent transition-colors"
              >
                {t('nav.about')}
              </a>
              <a 
                href="#epk" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-accent transition-colors"
              >
                {t('nav.epk')}
              </a>
              <a 
                href="#tour" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-accent transition-colors"
              >
                {t('nav.tour')}
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-accent transition-colors"
              >
                {t('nav.contact')}
              </a>
              <div className="pt-2 border-t border-primary/20">
                <LanguageSwitcher />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center md:items-start">
          <img 
            src="/stage.png" 
            alt="Scène concert country Dakota Dreamers Montpellier Hérault" 
            className="w-full h-auto object-contain object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent via-60% to-background/70 md:from-background/80 md:to-background/80"></div>
        <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0iIzQzNDAzYyIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-cream mb-6 tracking-wider western-text-appear">
            {t('hero.title')}
            <br />
            <span className="text-accent">{t('hero.titleAccent')}</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-sand mb-8 max-w-2xl mx-auto western-text-appear-subtitle">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center western-button-appear">
            <a 
              href="#epk" 
              className="bg-accent hover:bg-rust px-8 py-3 rounded font-heading transition-colors"
            >
              {t('hero.ctaEpk')}
            </a>
            <a 
              href="#tour" 
              className="border-2 border-primary hover:bg-primary hover:text-background px-8 py-3 rounded font-heading transition-colors"
            >
              {t('hero.ctaTour')}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center md:items-start">
          <img 
            src="/bridge.png" 
            alt="Duo country western Occitanie spectacle live" 
            className="w-full h-auto object-contain object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent via-60% to-background/70 md:from-background/80 md:to-background/80"></div>
        <div className="absolute inset-0 bg-black/55 md:bg-black/45"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl text-center mb-12 text-gold">
              {t('about.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="font-body text-lg leading-relaxed">
                  {t('about.paragraph1')}
                </p>
                <p className="font-body text-lg leading-relaxed">
                  {t('about.paragraph2')}
                </p>
                <p className="font-body text-lg leading-relaxed">
                  {t('about.paragraph3')}
                </p>
              </div>
              <div className="border-2 border-primary/30 bg-background/40 backdrop-blur-md p-8 rounded-lg">
                <h3 className="font-heading text-2xl mb-6 text-primary">{t('about.bandMembers')}</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-heading text-lg text-sand">Rob</h4>
                    <p className="text-cream font-medium">{t('about.robRole')}</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-heading text-lg text-sand">Mathieu</h4>
                    <p className="text-cream font-medium">{t('about.mathieuRole')}</p>
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
            alt="Concert country americana Montpellier groupe professionnel" 
            className="w-full h-auto object-contain object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent via-60% to-background/70 md:from-background/80 md:to-background/80"></div>
        <div className="absolute inset-0 bg-black/55 md:bg-black/45"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl text-center mb-16 text-gold">
            {t('epk.title')}
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Biography */}
            <div className="border-2 border-primary/30 p-8 rounded-lg">
              <h3 className="font-heading text-2xl mb-6 text-primary">{t('epk.biography.title')}</h3>
              <p className="font-body mb-4 leading-relaxed">
                {t('epk.biography.paragraph1')}
              </p>
              <p className="font-body mb-4 leading-relaxed">
                {t('epk.biography.paragraph2')}
              </p>
              <button 
                disabled
                className="inline-block bg-accent/50 px-4 py-2 rounded text-sm font-heading cursor-not-allowed opacity-50"
              >
                {t('epk.biography.downloadBio')}
              </button>
            </div>

            {/* Music Samples */}
            <div className="border-2 border-primary/30 bg-background/40 backdrop-blur-md p-8 rounded-lg">
              <h3 className="font-heading text-2xl mb-6 text-primary">{t('epk.music.title')}</h3>
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
                {t('epk.music.downloadTracks')}
              </button>
            </div>

            {/* Technical & Contact */}
            <div className="space-y-8">
              <div className="border-2 border-primary/30 p-8 rounded-lg">
                <h3 className="font-heading text-2xl mb-6 text-primary">{t('epk.technical.title')}</h3>
                <ul className="space-y-2 font-body text-sm">
                  <li>• {t('epk.technical.requirements.0')}</li>
                  <li>• {t('epk.technical.requirements.1')}</li>
                  <li>• {t('epk.technical.requirements.2')}</li>
                  <li>• {t('epk.technical.requirements.3')}</li>
                  <li>• {t('epk.technical.requirements.4')}</li>
                </ul>
                <button 
                  disabled
                  className="inline-block bg-accent/50 px-4 py-2 rounded text-sm font-heading cursor-not-allowed opacity-50 mt-4"
                >
                  {t('epk.technical.downloadRider')}
                </button>
              </div>

              <div className="border-2 border-primary/30 p-8 rounded-lg">
                <h3 className="font-heading text-2xl mb-6 text-primary">{t('epk.photos.title')}</h3>
                <p className="font-body text-sm mb-4">
                  {t('epk.photos.description')}
                </p>
                <button 
                  disabled
                  className="inline-block bg-accent/50 px-4 py-2 rounded text-sm font-heading cursor-not-allowed opacity-50"
                >
                  {t('epk.photos.downloadPhotos')}
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
            {t('tour.title')}
          </h2>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-surface-light p-16 rounded-lg border-2 border-accent/30">
              <h3 className="font-heading text-4xl text-gold mb-6">{t('tour.comingSoon')}</h3>
              <p className="font-body text-lg text-sand mb-8">
                {t('tour.comingSoonText')}
              </p>
              <a 
                href={`mailto:contact@lourock.com?subject=${encodeURIComponent(t('tour.emailSubject'))}&body=${encodeURIComponent(t('tour.emailBody'))}`}
                className="bg-accent hover:bg-rust px-4 sm:px-8 py-3 rounded font-heading transition-colors inline-block"
              >
                <span className="whitespace-normal sm:whitespace-nowrap">{t('tour.contactBooking')}</span>
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
            alt="Réserver groupe country Montpellier Hérault événement mariage festival" 
            className="w-full h-auto object-contain object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent via-60% to-background/70 md:from-background/80 md:to-background/80"></div>
        <div className="absolute inset-0 bg-black/55 md:bg-black/45"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl text-center mb-16 text-gold">
            {t('contact.title')}
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="border-2 border-primary/30 p-12 rounded-lg text-center">
              <h3 className="font-heading text-2xl mb-6 text-primary">{t('contact.getInTouch')}</h3>
              <p className="font-body text-lg mb-8">
                {t('contact.description')}
              </p>
              <button 
                onClick={() => {
                  const email = 'contact' + '@' + 'lourock.com';
                  const subject = encodeURIComponent(t('contact.emailSubject'));
                  const body = encodeURIComponent(t('contact.emailBody'));
                  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
                }}
                className="text-accent hover:text-rust transition-colors font-heading text-xl"
              >
                {t('contact.emailLink')}
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="font-body text-lg mb-4">{t('contact.basedIn')}</p>
            <p className="font-body text-ash">{t('contact.performing')}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-dark py-12 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-heading text-2xl text-primary mb-2">Dakota Dreamers</h3>
              <p className="text-ash">{t('footer.tagline')}</p>
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
              {t('footer.copyright')} | 
              <a href="https://lourock.com" className="text-primary hover:text-accent ml-1">
                {t('footer.poweredBy')}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
