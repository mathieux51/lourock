"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen vintage-poster overflow-x-hidden">
      {/* Main Rodeo Poster */}
      <section className="min-h-screen relative flex items-center justify-center p-4 md:p-8">
        {/* Vintage Border Frame */}
        <div className="vintage-border max-w-5xl w-full p-8 md:p-12 lg:p-16">
          
          {/* Top Banner */}
          <div className="text-center mb-6">
            <div className="text-poster-brown text-xs md:text-sm rodeo-heading tracking-[0.5em] mb-2">
              ═══ LIVE MUSIC ═══
            </div>
            <h2 className="western-name text-2xl md:text-3xl text-rodeo-orange mb-2">
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
            <div className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl text-poster-brown">◆</div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl text-poster-brown">◆</div>
          </div>

          {/* Hero Image with ornate frame */}
          <div className="relative mx-auto mb-8 w-56 h-56 md:w-72 md:h-72">
            <div className="absolute inset-0 border-8 border-poster-dark rounded-full"></div>
            <div className="absolute inset-2 border-4 border-rodeo-orange rounded-full"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-poster-cream">
              <Image
                src="/head.png"
                alt="Mathieu Schmidt"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Corner ornaments */}
            <div className="absolute -top-4 -left-4 text-3xl text-vintage-yellow">✦</div>
            <div className="absolute -top-4 -right-4 text-3xl text-vintage-yellow">✦</div>
            <div className="absolute -bottom-4 -left-4 text-3xl text-vintage-yellow">✦</div>
            <div className="absolute -bottom-4 -right-4 text-3xl text-vintage-yellow">✦</div>
          </div>

          {/* Show Details */}
          <div className="text-center space-y-4 mb-8">
            <div className="bg-rodeo-red py-2 px-6 inline-block -rotate-2 shadow-lg">
              <p className="poster-title text-xl md:text-2xl text-poster-cream">
                Howdy folks!
              </p>
            </div>
            
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
                href="mailto:contact@lourock.com?subject=Booking%20Inquiry%20for%20Mathieu%20Schmidt&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about%20booking%20Mathieu%20Schmidt%20for%20an%20event.%0D%0A%0D%0APlease%20provide%20more%20information%20about%20availability%20and%20pricing.%0D%0A%0D%0AThank%20you!"
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
          <div className="text-center border-t-4 border-poster-dark pt-4">
            <p className="rodeo-heading text-poster-brown text-xs md:text-sm tracking-[0.3em]">
              MONTPELLIER ◆ OCCITANIE ◆ FRANCE
            </p>
          </div>
        </div>
      </section>

      {/* Additional Show Information */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="vintage-border p-8 md:p-12">
            <h2 className="western-name text-4xl md:text-6xl text-center text-rodeo-red mb-8">
              THE JOURNEY
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Performance Card */}
              <div className="border-4 border-poster-dark p-6 bg-poster-cream">
                <div className="border-b-2 border-poster-brown pb-4 mb-4">
                  <h3 className="impact-text text-2xl text-rodeo-orange text-center">
                    COWBOY BALLADS
                  </h3>
                </div>
                <div className="relative aspect-[2/3] mb-4 rounded overflow-hidden border-2 border-poster-dark">
                  <Image
                    src="/painting-cowboy.png"
                    alt="Cowboy Performance"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center font-serif" style={{ color: 'var(--poster-dark)' }}>
                  Heartfelt melodies inspired by the lonesome prairie and western landscapes
                </p>
                <div className="text-center mt-4">
                  <span className="text-vintage-yellow text-2xl">★★★★★</span>
                </div>
              </div>

              {/* Right Performance Card */}
              <div className="border-4 border-poster-dark p-6 bg-poster-cream">
                <div className="border-b-2 border-poster-brown pb-4 mb-4">
                  <h3 className="impact-text text-2xl text-rodeo-orange text-center">
                    DESERT MELODIES
                  </h3>
                </div>
                <div className="relative aspect-[2/3] mb-4 rounded overflow-hidden border-2 border-poster-dark">
                  <Image
                    src="/oud1.png"
                    alt="Desert Performance"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center font-serif" style={{ color: 'var(--poster-dark)' }}>
                  Where desert winds whisper timeless secrets through strings of silk and sand
                </p>
                <div className="text-center mt-4">
                  <span className="text-vintage-yellow text-2xl">★★★★★</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="western-name text-4xl md:text-6xl text-poster-dark drop-shadow-[2px_2px_0_var(--rodeo-orange)]">
              GLIMPSES & ECHOES
            </h2>
            <div className="text-poster-brown text-xs md:text-sm rodeo-heading tracking-[0.5em] mt-4">
              ═══ LIVE MUSIC ═══
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/audience.png", title: "TRAIN FOR RAIN", bg: "bg-poster-cream" },
              { src: "/camargue.png", title: "CAMARGUE", bg: "bg-gradient-to-br from-rodeo-orange via-sunset-glow to-rodeo-red" },
              { src: "/range.png", title: "THEM WORDS", bg: "bg-poster-cream" },
              { src: "/painting.png", title: "TIME ROLLS ON", bg: "bg-gradient-to-br from-vintage-yellow via-poster-gold to-rodeo-orange" },
              { src: "/oud1.png", title: "MORNING", bg: "bg-gradient-to-br from-saddle-brown via-poster-rust to-rodeo-sienna" },
              { src: "/mathieu.png", title: "ANXIETY RIVERS", bg: "bg-poster-cream" }
            ].map((item, index) => (
              <div key={index} className="border-4 border-poster-dark bg-poster-cream p-2">
                <div className={`relative aspect-square overflow-hidden ${item.bg}`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-poster-dark/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-0 right-0 text-center">
                    <p className="impact-text text-poster-cream text-lg">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="vintage-border p-8 md:p-12 text-center">
            <h2 className="western-name text-4xl md:text-5xl text-rodeo-red mb-6">
              HOWDY PARTNER!
            </h2>
            

            <div className="space-y-4">
              <a
                href="https://mathieu-schmidt.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-rodeo-red text-poster-cream impact-text text-xl border-4 border-poster-dark hover:bg-rodeo-orange transition-colors shadow-lg"
              >
                <span>LISTEN ON BANDCAMP<br /><span className="text-sm">(OLD)</span></span>
              </a>
              
              <div>
                <a
                  href="https://lourock.com"
                  className="inline-block px-8 py-4 bg-poster-cream text-rodeo-red border-4 border-rodeo-red hover:bg-vintage-yellow transition-colors rodeo-heading text-lg"
                >
                  CONTACT FOR BOOKING
                </a>
              </div>
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