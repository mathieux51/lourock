"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import AudioWaveform from "./components/AudioWaveform";

export default function Home() {
  const [showHowdy, setShowHowdy] = useState(false);
  const [activeAudio, setActiveAudio] = useState<string | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [loadingAudio, setLoadingAudio] = useState<string | null>(null);
  const galleryRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initAudio = () => {
      if (!audioEnabled && window.AudioContext) {
        const AudioCtx = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          const context = new AudioCtx();
          context.resume().then(() => {
            setAudioEnabled(true);
            context.close();
          });
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !audioEnabled) {
            initAudio();
          }
        });
      },
      { threshold: 0.1 }
    );

    const galleryElement = galleryRef.current;
    if (galleryElement) {
      observer.observe(galleryElement);
    }

    return () => {
      if (galleryElement) {
        observer.unobserve(galleryElement);
      }
    };
  }, [audioEnabled]);

  return (
    <div className="min-h-screen vintage-poster overflow-x-hidden">
      {/* Main Rodeo Poster */}
      <section className="min-h-screen relative flex items-center justify-center p-4 md:p-8">
        {/* Vintage Border Frame */}
        <div className="vintage-border max-w-5xl w-full p-8 md:p-12 lg:p-16">
          
          {/* Top Banner */}
          <div className="text-center mb-6">
            <h2 className="western-name text-2xl md:text-3xl text-rodeo-orange">
              DESERT TROUBADOUR
            </h2>
          </div>

          {/* Main Title */}
          <div className="relative mb-8">
            <div className="text-center">
              <h1 className="western-name text-5xl md:text-7xl lg:text-8xl text-poster-dark mb-2 drop-shadow-[3px_3px_0_var(--rodeo-orange)]">
                MATHIEU
              </h1>
              <h1 className="western-name text-5xl md:text-7xl lg:text-8xl text-rodeo-red -mt-4 drop-shadow-[3px_3px_0_var(--poster-dark)]">
                SCHMIDT
              </h1>
            </div>
            
            {/* Side decorations */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl text-poster-brown hidden md:block">◆</div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl text-poster-brown hidden md:block">◆</div>
          </div>

          {/* Hero Image with ornate frame */}
          <div className="relative mx-auto mb-8 w-56 h-56 md:w-72 md:h-72">
            <div className="absolute inset-0 border-2 border-poster-dark rounded-full"></div>
            <div className="absolute inset-0.5 border border-rodeo-orange rounded-full"></div>
            <div 
              className="absolute inset-[3px] rounded-full overflow-hidden"
              onMouseEnter={() => setShowHowdy(true)}
              onMouseLeave={() => setShowHowdy(false)}
              onTouchStart={() => setShowHowdy(true)}
              onTouchEnd={() => setTimeout(() => setShowHowdy(false), 2000)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-orange-300 via-orange-400 to-red-500"></div>
              <Image
                src="/hero-no-bg.png"
                alt="Mathieu Schmidt artiste folk multi-instrumental Montpellier oud guitare bouzouki"
                fill
                className="object-cover relative z-10"
                style={{ objectPosition: '0px -60px' }}
              />
            </div>
            {/* Chat bubble */}
            {showHowdy && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="bg-poster-cream border-2 border-poster-dark rounded-lg px-3 py-1 shadow-lg relative">
                  <span className="impact-text text-rodeo-red text-sm">HOWDY FOLKS!</span>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-poster-cream"></div>
                  <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-poster-dark"></div>
                </div>
              </div>
            )}
            {/* Corner ornaments */}
            <div className="absolute -top-4 -left-4 text-3xl text-vintage-yellow">✦</div>
            <div className="absolute -top-4 -right-4 text-3xl text-vintage-yellow">✦</div>
            <div className="absolute -bottom-4 -left-4 text-3xl text-vintage-yellow">✦</div>
            <div className="absolute -bottom-4 -right-4 text-3xl text-vintage-yellow">✦</div>
          </div>

          {/* Show Details */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-4 text-poster-brown">
              <span className="text-2xl">★</span>
              <span className="rodeo-heading text-sm md:text-base tracking-widest">LIVE MUSIC</span>
              <span className="text-2xl">★</span>
            </div>
          </div>

          {/* Contact Button */}
          <div className="border-y-4 border-double border-poster-dark py-6 mb-6">
            <div className="text-center">
              <a
                href="mailto:contact@lourock.com?subject=Booking%20Inquiry%20for%20Mathieu%20Schmidt&body=Howdy!%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about%20booking%20Mathieu%20Schmidt%20for%20an%20event.%0D%0A%0D%0APlease%20provide%20more%20information%20about%20availability%20and%20pricing.%0D%0A%0D%0AThank%20you!"
                className="inline-block px-8 py-4 bg-rodeo-red text-poster-cream impact-text text-xl md:text-2xl border-4 border-poster-dark hover:bg-rodeo-orange transition-colors shadow-lg transform hover:scale-105"
              >
                <span className="drop-shadow-[1px_1px_0_var(--rodeo-orange)]">BOOK THE SHOW</span>
              </a>
              <div className="mt-6 text-center font-serif">
                <p className="text-base md:text-lg leading-relaxed max-w-lg mx-auto font-semibold" style={{ color: 'var(--poster-brown)' }}>
                  Experience the unique fusion of desert melodies and cowboy ballads. 
                  From the dusty trails of the Old West to the ancient rhythms of the Sahara, 
                  Mathieu Schmidt brings you a musical journey like no other.
                </p>
              </div>
            </div>
          </div>


          {/* Bottom Text */}
          <div className="text-center pt-4">
            <p className="rodeo-heading text-poster-brown text-xs md:text-sm tracking-[0.3em] mb-3">
              ARTISTE BASÉ À MONTPELLIER
            </p>
            <p className="font-serif text-sm text-poster-dark leading-relaxed">
              Concerts folk acoustiques dans l&apos;Hérault et Occitanie
              <br />
              Montpellier • Nîmes • Toulouse • Festivals régionaux
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="western-name text-4xl md:text-6xl text-poster-dark drop-shadow-[2px_2px_0_var(--rodeo-orange)] fade-in">
              GLIMPSES & ECHOES
            </h2>
            <p className="rodeo-heading text-[10px] md:text-xs mt-4 tracking-wider" style={{ color: 'var(--poster-dark)' }}>
              <span className="hidden md:inline">(click to play)</span>
              <span className="md:hidden">(tap to play)</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/camargue.png", title: "CAMARGUE", bg: "bg-gradient-to-br from-rodeo-orange via-sunset-glow to-rodeo-red" },
              { src: "/blues.png", title: "THEM WORDS", bg: "bg-poster-cream", hasAudio: true, audioUrl: "/them-words-blues.mp3" },
              { src: "/oud3.png", title: "MORNING", bg: "bg-gradient-to-br from-saddle-brown via-poster-rust to-rodeo-sienna" },
              { src: "/electric.png", title: "TRAIN FOR RAIN", bg: "bg-poster-cream", hasAudio: true, audioUrl: "/train-for-rain.mp3" },
              { src: "/painting.png", title: "TIME ROLLS ON", bg: "bg-gradient-to-br from-vintage-yellow via-poster-gold to-rodeo-orange", hasAudio: true, audioUrl: "/time-rolls-on.mp3" },
              { src: "/berlin.png", title: "ANXIETY RIVERS", bg: "bg-poster-cream", hasAudio: true, audioUrl: "/anxiety-rivers.mp3" }
            ].map((item, index) => (
              <div key={index} className="border-4 border-poster-dark bg-poster-cream p-2">
                <div 
                  className={`relative aspect-square overflow-hidden ${item.bg} ${item.hasAudio ? 'cursor-pointer' : ''}`}
                  onClick={() => {
                    if (item.hasAudio) {
                      // Initialize audio context on first interaction if needed
                      if (!audioEnabled && window.AudioContext) {
                        const context = new (window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)();
                        context.resume().then(() => {
                          setAudioEnabled(true);
                          context.close();
                        });
                      }
                      if (activeAudio === item.title) {
                        setActiveAudio(null);
                        setLoadingAudio(null);
                      } else {
                        setLoadingAudio(item.title);
                        setActiveAudio(item.title);
                      }
                    }
                  }}
                >
                  <Image
                    src={item.src}
                    alt={`Mathieu Schmidt ${item.title.toLowerCase()} concert folk Montpellier musique méditerranéenne`}
                    fill
                    className={`object-cover ${item.src === "/oud3.png" ? "object-center" : "object-top"} ${item.hasAudio && activeAudio === item.title ? "ken-burns-effect" : ""}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-poster-dark/80 via-poster-dark/20 to-transparent"></div>
                  {item.hasAudio && activeAudio === item.title && item.audioUrl && (
                    <AudioWaveform 
                      audioUrl={item.audioUrl}
                      onClose={() => {
                        setActiveAudio(null);
                        setLoadingAudio(null);
                      }}
                      onLoaded={() => setLoadingAudio(null)}
                    />
                  )}
                  {/* Bottom section with play button and title */}
                  <div className="absolute bottom-0 left-0 right-0 z-50 flex flex-col items-center pb-4">
                    {/* Play/Loading/Playing Icon */}
                    {item.hasAudio && (
                      <div className="flex flex-col items-center">
                        {loadingAudio === item.title ? (
                          // Loading spinner
                          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ 
                            border: '3px solid rgba(232, 93, 37, 0.9)',
                            backgroundColor: 'transparent' 
                          }}>
                            <svg className="animate-spin h-8 w-8" style={{ color: 'rgba(232, 93, 37, 0.9)' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          </div>
                        ) : activeAudio === item.title ? (
                          // Pause icon when playing
                          <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{ 
                            border: '3px solid rgba(204, 51, 17, 0.9)',
                            backgroundColor: 'transparent' 
                          }}>
                            <svg className="w-8 h-8" style={{ color: 'rgba(204, 51, 17, 0.9)' }} fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                            </svg>
                          </div>
                        ) : (
                          // Play icon
                          <div 
                            className="w-16 h-16 rounded-full flex items-center justify-center transition-all hover:shadow-lg" 
                            style={{ 
                              border: '3px solid rgba(232, 93, 37, 0.9)',
                              backgroundColor: 'transparent',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = 'rgba(204, 51, 17, 0.9)';
                              const svg = e.currentTarget.querySelector('svg');
                              if (svg) svg.style.color = 'rgba(204, 51, 17, 0.9)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = 'rgba(232, 93, 37, 0.9)';
                              const svg = e.currentTarget.querySelector('svg');
                              if (svg) svg.style.color = 'rgba(232, 93, 37, 0.9)';
                            }}
                          >
                            <svg className="w-8 h-8" style={{ color: 'rgba(232, 93, 37, 0.9)' }} fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        )}
                      </div>
                    )}
                    <p className="impact-text text-poster-cream text-2xl md:text-3xl drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)] mt-2">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Show Information */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="vintage-border p-4 md:p-12">
            <h2 className="western-name text-4xl md:text-6xl text-center text-rodeo-red mb-8 fade-in">
              THE JOURNEY
            </h2>
            
            <div className="space-y-16">
              {/* First paragraph with floating image */}
              <div className="text-justify">
                <div className="w-40 h-40 md:w-48 md:h-48 border-2 border-poster-dark rounded overflow-hidden bg-poster-cream float-left mr-6 mb-4 shape-outside-[circle(50%)]">
                  <Image
                    src="/painting-cowboy.png"
                    alt="Mathieu Schmidt concert folk country Montpellier artiste live"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="font-serif text-lg leading-[1.8]" style={{ color: 'var(--poster-dark)' }}>
                  <span className="western-name text-6xl float-left mr-3 mt-0 leading-[0.8] text-rodeo-red">I</span>n the dusty crossroads where ancient desert winds meet the lonesome prairie, Mathieu Schmidt weaves tales that transcend borders and time. Born from the sun-baked streets of Montpellier in the heart of Occitanie, his music carries the weight of wandering souls and the whispers of forgotten lands. 
                  <br /><br />
                  Each melody is a bridge between worlds - the haunting call of the oud echoing across Saharan dunes, the plaintive cry of steel strings under starlit Western skies. With weathered hands that know both the comfort of home and the call of distant horizons, he crafts songs that speak to the universal human experience of longing and belonging.
                </p>
              </div>

              {/* Decorative separator */}
              <div className="border-t-4 border-poster-dark my-6"></div>

              {/* Second paragraph with floating image */}
              <div className="text-justify">
                <div className="w-40 h-40 md:w-48 md:h-48 border-2 border-poster-dark rounded overflow-hidden bg-poster-cream float-right ml-6 mb-4 shape-outside-[circle(50%)]">
                  <Image
                    src="/oud1.png"
                    alt="Musicien oud Montpellier musique orientale méditerranéenne concert"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="font-serif text-lg leading-[1.8]" style={{ color: 'var(--poster-dark)' }}>
                  <span className="western-name text-6xl float-left mr-3 mt-0 leading-[0.8] text-rodeo-red">H</span>is fingers dance across the fretboard of guitar, oud, and bouzouki with the grace of a desert nomad and the grit of a prairie drifter. Languages flow through his songs like rivers converging - French melodies carrying the elegance of troubadour tradition, English verses painted with cowboy blues, and Occitan words breathing life into the ancient tongue of his homeland.
                  <br /><br />
                  This is music for the restless heart, for those who find solace in the space between cultures, between the familiar and the foreign. Each performance becomes a pilgrimage through sound, connecting audiences to something both ancient and eternal.
                </p>
              </div>

              <div className="pt-8">
                <p className="font-serif text-lg leading-relaxed text-center italic" style={{ color: 'var(--poster-brown)' }}>
                  &ldquo;Every song is a journey, every performance a pilgrimage through the landscapes of memory and dream. From the Mediterranean shores to the endless horizon of the American frontier, music becomes the universal language that speaks to the wanderer in all of us.&rdquo;
                </p>
              </div>

              <div className="text-center mt-8">
                <span className="text-vintage-yellow text-3xl">★ ★ ★ ★ ★</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="vintage-border p-8 md:p-12 text-center">
            <h2 className="western-name text-4xl md:text-5xl text-rodeo-red mb-6">
              HOLLER AT ME!
            </h2>
            

            <div className="space-y-4">
              <div>
                <a
                  href="https://lourock.com"
                  className="inline-block px-10 py-5 bg-rodeo-red text-poster-cream border-4 border-poster-dark hover:bg-rodeo-orange transition-colors impact-text text-2xl md:text-3xl shadow-lg transform hover:scale-105"
                >
                  CONTACT FOR BOOKING
                </a>
              </div>
              
              <a
                href="https://mathieu-schmidt.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-poster-cream text-rodeo-red impact-text text-base border-2 border-rodeo-red hover:bg-vintage-yellow transition-colors"
              >
                <span>LISTEN ON BANDCAMP<br /><span className="text-xs">(OLD)</span></span>
              </a>
            </div>

            <div className="mt-8">
              <p className="text-sm" style={{ color: 'var(--rodeo-red)' }}>
                ◆ NO HORSES WERE HARMED IN THE MAKING OF THIS MUSIC ◆
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t-8 border-double border-poster-dark bg-poster-cream relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="western-name text-3xl text-poster-dark mb-4">
            MATHIEU SCHMIDT
          </h3>
          <p className="rodeo-heading text-poster-brown tracking-widest mb-6">
            <span className="text-rodeo-orange text-xl align-middle">★</span>
            <span className="mx-2">MONTPELLIER ◆ OCCITANIE</span>
            <span className="text-rodeo-orange text-xl align-middle">★</span>
          </p>

          <div className="flex justify-center gap-8 mb-8">
            <a
              href="https://mathieu-schmidt.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="impact-text text-rodeo-red hover:text-rodeo-orange transition-colors"
            >
              BANDCAMP
            </a>
            <span className="text-poster-brown">◆</span>
            <a
              href="https://lourock.com"
              className="impact-text text-rodeo-red hover:text-rodeo-orange transition-colors"
            >
              LOU ROCK
            </a>
          </div>

          <div className="pt-6 border-t-2 border-poster-brown">
            <p className="text-poster-brown text-sm rodeo-heading">
              © 2025 ◆ PART OF THE LOU ROCK COLLECTIVE
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}