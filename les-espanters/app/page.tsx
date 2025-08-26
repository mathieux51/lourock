"use client";

import { motion } from "framer-motion";
import { Music, Guitar, Disc3, Mail, Download, Zap, Star, Heart } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null);

  return (
    <div className="min-h-screen p-4 md:p-8 relative overflow-hidden">
      {/* Animated background dots */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-black rounded-full opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Title Header - Full Width */}
      <motion.header 
        initial={{ rotate: -5, scale: 0, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className="mb-8 relative z-10"
      >
        <div className="comic-panel comic-border-thick max-w-5xl mx-auto relative overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, #e6ac76 0%, #dbb675 25%, #78abb0 50%, #eddaba 75%, #d7dbc1 100%)',
               filter: 'drop-shadow(0 0 20px #CA7625)',
             }}>
          {/* Comic filter overlay */}
          <div className="absolute inset-0" 
               style={{
                 background: `
                   radial-gradient(circle at 20% 30%, rgba(255, 0, 255, 0.3) 0%, transparent 50%),
                   radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.3) 0%, transparent 50%),
                   radial-gradient(circle at 60% 80%, rgba(255, 255, 0, 0.3) 0%, transparent 50%),
                   linear-gradient(45deg, rgba(255, 0, 0, 0.1) 0%, rgba(0, 255, 0, 0.1) 100%)
                 `,
                 mixBlendMode: 'screen'
               }}>
          </div>
          
          {/* Halftone effect overlay */}
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `
                   radial-gradient(circle at 25% 25%, #FF00FF 2px, transparent 2px),
                   radial-gradient(circle at 75% 75%, #00FFFF 2px, transparent 2px),
                   radial-gradient(circle at 25% 75%, #FFFF00 1px, transparent 1px),
                   radial-gradient(circle at 75% 25%, #FF0000 1px, transparent 1px)
                 `,
                 backgroundSize: '20px 20px, 25px 25px, 15px 15px, 18px 18px',
                 opacity: 0.4,
                 mixBlendMode: 'multiply'
               }}>
          </div>
          
          {/* Animated comic burst effects */}
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: `
                conic-gradient(from 0deg at 50% 50%, 
                  transparent 0deg, rgba(255, 255, 255, 0.1) 45deg, transparent 90deg,
                  transparent 180deg, rgba(255, 255, 255, 0.1) 225deg, transparent 270deg,
                  transparent 360deg)
              `,
              backgroundSize: '200px 200px',
              mixBlendMode: 'overlay'
            }}>
          </motion.div>
          
          <div className="absolute inset-0 speed-lines opacity-60"></div>
          
          {/* Pulsing color overlay */}
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle, rgba(255,0,255,0.2) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(0,255,255,0.2) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(255,255,0,0.2) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(255,0,255,0.2) 0%, transparent 70%)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              mixBlendMode: 'color-dodge'
            }}>
          </motion.div>
          
          {/* Explosion effects */}
          <div className="absolute -top-8 -left-8 comic-text text-6xl transform rotate-12" style={{color: '#CA7625', textShadow: '3px 3px 0px #3F2E10'}}>
            💥
          </div>
          <div className="absolute -top-8 -right-8 comic-text text-6xl transform -rotate-12" style={{color: '#795B1A', textShadow: '3px 3px 0px #0D0E08'}}>
            ⚡
          </div>
          
          <div className="relative z-10 text-center py-12">
            <motion.h1 
              className="comic-action text-7xl md:text-9xl mb-4" 
              style={{
                color: 'white', 
                textShadow: '4px 4px 0px #795B1A, 8px 8px 0px #3F2E10, 12px 12px 0px #0D0E08',
                transform: 'skew(-5deg, -2deg)'
              }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              LES ESPANTERS
            </motion.h1>
            <motion.div 
              className="comic-text text-2xl md:text-4xl" 
              style={{color: '#0D0E08', textShadow: '2px 2px 0px #FFFFFF, 4px 4px 0px #CA7625, 6px 6px 0px #0D0E08'}}
              animate={{
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              ⚡ EXPLOSIVE MEDITERRANEAN MADNESS ⚡
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Comic Book Grid Layout */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Row 1: Large text + Small action */}
        <div className="grid grid-cols-4 gap-1 mb-1 h-32">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="col-span-3 comic-panel cursor-pointer p-2 relative overflow-hidden"
            style={{
              background: `
                radial-gradient(circle at 50% 50%, #FFD93D 0%, #FF6B6B 20%, #4ECDC4 40%, #CA7625 60%, #795B1A 80%, #385C5F 100%),
                conic-gradient(from 0deg at 50% 50%, 
                  #FFD93D 0deg, #FF6B6B 60deg, #4ECDC4 120deg, 
                  #95E1D3 180deg, #A8E6CF 240deg, #FFD93D 360deg)
              `,
              backgroundBlendMode: 'multiply'
            }}
            onMouseEnter={() => setHoveredPanel('intro')}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            {/* Explosion burst lines */}
            <div className="absolute inset-0" 
                 style={{
                   backgroundImage: `
                     linear-gradient(0deg, transparent 48%, yellow 49%, yellow 51%, transparent 52%),
                     linear-gradient(45deg, transparent 48%, orange 49%, orange 51%, transparent 52%),
                     linear-gradient(90deg, transparent 48%, red 49%, red 51%, transparent 52%),
                     linear-gradient(135deg, transparent 48%, magenta 49%, magenta 51%, transparent 52%),
                     linear-gradient(-45deg, transparent 48%, cyan 49%, cyan 51%, transparent 52%),
                     linear-gradient(-90deg, transparent 48%, lime 49%, lime 51%, transparent 52%),
                     linear-gradient(-135deg, transparent 48%, purple 49%, purple 51%, transparent 52%)
                   `,
                   opacity: 0.6
                 }}>
            </div>
            
            {/* Animated starburst */}
            <motion.div 
              className="absolute inset-0"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundImage: `
                  conic-gradient(from 0deg at 50% 50%, 
                    transparent 0deg, rgba(255,255,0,0.3) 10deg, transparent 20deg,
                    transparent 40deg, rgba(255,0,255,0.3) 50deg, transparent 60deg,
                    transparent 80deg, rgba(0,255,255,0.3) 90deg, transparent 100deg,
                    transparent 120deg, rgba(255,0,0,0.3) 130deg, transparent 140deg,
                    transparent 160deg, rgba(0,255,0,0.3) 170deg, transparent 180deg,
                    transparent 200deg, rgba(255,128,0,0.3) 210deg, transparent 220deg,
                    transparent 240deg, rgba(128,0,255,0.3) 250deg, transparent 260deg,
                    transparent 280deg, rgba(255,255,0,0.3) 290deg, transparent 300deg,
                    transparent 320deg, rgba(255,0,128,0.3) 330deg, transparent 340deg,
                    transparent 360deg)
                `,
              }}>
            </motion.div>
            
            <div className="h-full flex items-center justify-center relative z-10">
              <motion.p 
                className="comic-action text-5xl md:text-7xl text-center"
                style={{
                  background: 'linear-gradient(45deg, #FF00FF 0%, #00FFFF 25%, #FFFF00 50%, #FF00FF 75%, #00FFFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'none',
                  filter: 'drop-shadow(4px 4px 0px #000) drop-shadow(8px 8px 0px rgba(255,0,255,0.5)) drop-shadow(12px 12px 0px rgba(0,255,255,0.3))',
                  transform: 'rotate(-5deg) skew(-5deg)',
                  letterSpacing: '0.15em',
                  margin: 0
                }}
                animate={hoveredPanel === 'intro' ? { scale: 1.15, rotate: -3 } : { scale: 1, rotate: -5 }}
              >
🎸 ROCK ON! 🎸               </motion.p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="comic-panel flex items-center justify-center"
            style={{backgroundColor: '#795B1A'}}
          >
            <motion.div 
              className="comic-text text-4xl"
              style={{color: 'white', textShadow: '2px 2px 0px #000'}}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              💥
            </motion.div>
          </motion.div>
        </div>

        {/* Row 2: Image + Text panels staggered */}
        <div className="grid grid-cols-5 gap-4 mb-4 h-48">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="col-span-2 comic-panel overflow-hidden"
            style={{backgroundColor: '#385C5F'}}
          >
            <img 
              src="/running.png" 
              alt="Running Action" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="col-span-3 comic-panel flex flex-col justify-center p-6"
            style={{backgroundColor: '#f7e3d1'}}
          >
            <h2 className="comic-text text-4xl mb-3" 
                style={{color: '#CA7625', textShadow: '3px 3px 0px #795B1A, 5px 5px 0px #0D0E08'}}>
              MATHIEU
            </h2>
            <p className="text-lg leading-relaxed" style={{fontFamily: 'Comic Neue'}}>
              Master of the ancient Oud, bringing mystical Mediterranean melodies! 
              When he switches to guitar, expect explosive riffs!             </p>
            <motion.div 
              className="inline-block comic-text text-xl px-3 py-1 mt-3 transform -rotate-2" 
              style={{backgroundColor: '#CA7625', color: 'white', textShadow: '1px 1px 0px #0D0E08', width: 'fit-content'}}
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              OUD & GUITAR WIZARD!             </motion.div>
          </motion.div>
        </div>

        {/* Row 3: Action words strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-5 gap-2 mb-4 h-16"
        >
          {['POW!', 'BOOM!', 'ZAP!', 'BANG!', 'WOW!'].map((word, index) => (
            <motion.div
              key={word}
              className="comic-panel flex items-center justify-center cursor-pointer"
              style={{backgroundColor: ['#CA7625', '#795B1A', '#385C5F', '#3F2E10', '#0D0E08'][index]}}
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.1
              }}
            >
              <span className="comic-text text-2xl" 
                    style={{color: 'white', textShadow: '2px 2px 0px #000'}}>
                {word}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Row 4: Text + Image staggered (reverse) */}
        <div className="grid grid-cols-5 gap-4 mb-4 h-48">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="col-span-3 comic-panel flex flex-col justify-center p-6"
            style={{backgroundColor: '#d2e3e5'}}
          >
            <h2 className="comic-text text-4xl mb-3" 
                style={{color: '#385C5F', textShadow: '3px 3px 0px #CA7625, 5px 5px 0px #0D0E08'}}>
              MANU
            </h2>
            <p className="text-lg leading-relaxed" style={{fontFamily: 'Comic Neue'}}>
              Electric wizard with fingers of lightning! From face-melting guitar solos 
              to hypnotic banjo rhythms, brings the thunder! ⚡
            </p>
            <motion.div 
              className="inline-block comic-text text-xl px-3 py-1 mt-3 transform rotate-2" 
              style={{backgroundColor: '#3F2E10', color: 'white', textShadow: '1px 1px 0px #0D0E08', width: 'fit-content'}}
              animate={{ rotate: [2, -2, 2] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ELECTRIC FURY! ⚡
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="col-span-2 comic-panel overflow-hidden"
            style={{backgroundColor: '#795B1A'}}
          >
            <img 
              src="/laugh.png" 
              alt="Laughing" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Row 5: Full width EPK title */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-4 h-24"
        >
          <div className="comic-panel h-full flex items-center justify-center"
               style={{
                 background: 'linear-gradient(90deg, #CA7625 0%, #795B1A 50%, #385C5F 100%)'
               }}>
            <h2 className="comic-text text-5xl md:text-6xl text-center" 
                style={{
                  color: 'white', 
                  textShadow: '4px 4px 0px #CA7625, 8px 8px 0px #0D0E08'
                }}>
              ⚡ ELECTRONIC PRESS KIT ⚡
            </h2>
          </div>
        </motion.div>

        {/* Row 6: Story panel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-4 h-40"
        >
          <div className="comic-panel h-full flex flex-col justify-center p-8 bg-white relative">
            <Star className="absolute -top-3 -right-3 w-8 h-8 text-yellow-400" />
            <h3 className="comic-text text-3xl mb-4 flex items-center gap-3"
                style={{color: '#CA7625', textShadow: '2px 2px 0px #0D0E08'}}>
              <Music className="w-8 h-8" />
              THE EXPLOSIVE STORY
            </h3>
            <p className="text-lg leading-relaxed" style={{fontFamily: 'Comic Neue'}}>
              💥 Les Espanters emerged from the cosmic collision of two musical forces! 
              When Mathieu's ancient Oud met Manu's electric fury, a sonic explosion 
              rocked the Mediterranean coast!             </p>
          </div>
        </motion.div>

        {/* Row 7: Technical specs grid */}
        <div className="grid grid-cols-3 gap-4 mb-4 h-48">
          <motion.div 
            className="comic-panel p-4 flex flex-col justify-center" 
            style={{backgroundColor: '#CA7625'}}
            initial={{ rotate: -5, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <Zap className="w-8 h-8 mb-2 text-red-500 mx-auto" />
            <h3 className="comic-text text-2xl mb-3 text-center" style={{color: '#FF00FF'}}>
              STAGE SETUP
            </h3>
            <ul className="space-y-1 text-center" style={{fontFamily: 'Comic Neue'}}>
              <li>💥 2 DI boxes</li>
              <li>💥 2 microphones</li>
              <li>💥 2 monitors</li>
              <li>💥 4m x 3m stage</li>
            </ul>
          </motion.div>

          <motion.div 
            className="comic-panel overflow-hidden"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 }}
            style={{backgroundColor: '#795B1A'}}
          >
            <img 
              src="/high-five.png" 
              alt="High Five" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            className="comic-panel p-4 flex flex-col justify-center" 
            style={{backgroundColor: '#385C5F'}}
            initial={{ rotate: 5, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 1.3 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            <Heart className="w-8 h-8 mb-2 text-red-500 mx-auto" />
            <h3 className="comic-text text-2xl mb-3 text-center" style={{color: '#FF00FF'}}>
              PERFORMANCE
            </h3>
            <ul className="space-y-1 text-center" style={{fontFamily: 'Comic Neue'}}>
              <li>💥 45-90 minutes</li>
              <li>🎵 Original songs</li>
              <li>⚡ High-energy</li>
              <li>🤘 Crowd interaction</li>
            </ul>
          </motion.div>
        </div>

        {/* Row 8: Images showcase */}
        <div className="grid grid-cols-4 gap-4 mb-4 h-32">
          {[
            { src: '/cards.png', bg: '#385C5F' },
            { src: '/oysters.png', bg: '#3F2E10' },
            { src: '/beer.png', bg: '#CA7625' },
            { src: '/petanque.png', bg: '#795B1A' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="comic-panel overflow-hidden"
              style={{backgroundColor: item.bg}}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <img 
                src={item.src}
                alt={`Comic image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Row 9: Contact buttons */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="grid grid-cols-2 gap-6 mb-8 h-24"
        >
          <motion.button 
            className="comic-button flex items-center justify-center gap-3 text-2xl h-full"
            style={{
              backgroundColor: '#CA7625',
              color: 'white',
            }}
            whileHover={{ scale: 1.05, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-6 h-6" />
            CONTACT US NOW!
          </motion.button>
          
          <motion.button 
            className="comic-button flex items-center justify-center gap-3 text-2xl h-full"
            style={{
              backgroundColor: '#795B1A',
              color: 'white',
            }}
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-6 h-6" />
            DOWNLOAD EPK!
          </motion.button>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 relative z-10">
        <motion.div 
          className="inline-block"
          animate={{ rotate: [-1, 1, -1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="comic-border px-8 py-4"
               style={{
                 backgroundColor: '#CA7625',
                 boxShadow: '5px 5px 0px #3F2E10'
               }}>
            <p className="font-bold text-lg" style={{fontFamily: 'Comic Neue'}}>
              © 2024 LES ESPANTERS - UNLEASH THE MEDITERRANEAN MADNESS! 🎸⚡            </p>
          </div>
        </motion.div>
      </footer>

      {/* Floating action words */}
      <div className="fixed top-20 right-10 comic-text text-4xl transform rotate-12 pointer-events-none hidden lg:block z-20" 
           style={{color: '#CA7625', textShadow: '3px 3px 0px #795B1A, 5px 5px 0px #0D0E08'}}>
        BANG!       </div>
      <div className="fixed bottom-20 left-10 comic-text text-3xl transform -rotate-6 pointer-events-none hidden lg:block z-20" 
           style={{color: '#385C5F', textShadow: '3px 3px 0px #CA7625, 5px 5px 0px #0D0E08'}}>
        WOW!       </div>
    </div>
  );
}