"use client";

import { motion } from "framer-motion";
import { Music, Mail, Download, Zap, Heart } from "lucide-react";
import Image from "next/image";
import { useTranslation } from '../hooks/useTranslation'

export default function Home() {
  const { t } = useTranslation()
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
        id="header"
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
          
          <div className="relative z-10 text-center py-6">
            <motion.h1 
              id="band-name"
              className="comic-action text-7xl md:text-9xl mb-2" 
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
              {t('hero.bandName')}
            </motion.h1>
            <div 
              id="tagline"
              className="comic-text text-2xl md:text-4xl -mt-2 mb-4" 
              style={{color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', paddingBottom: '1rem'}}
            >
              {t('hero.tagline')}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Comic Book Grid Layout */}
      <div id="comic-grid" className="max-w-7xl mx-auto relative z-10">
        
        {/* Row 1 removed - was the ROCK ON section */}

        {/* Row 2: French action words strip */}
        <motion.div
          id="french-action-words"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-5 gap-2 mb-4 h-16"
        >
          {['BOUM!', 'PATATRAS!', 'PLOUF!', 'VLAN!', 'CRAC!'].map((word, index) => (
            <motion.div
              key={word}
              className="comic-panel flex items-center justify-center cursor-pointer"
              style={{backgroundColor: ['#385C5F', '#0D0E08', '#795B1A', '#CA7625', '#3F2E10'][index]}}
              whileHover={{ scale: 1.1, rotate: -5 }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.15
              }}
            >
              <span className="comic-text text-2xl" 
                    style={{color: 'white', textShadow: '2px 2px 0px #000'}}>
                {word}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Row 3: Image + Text panels staggered */}
        <div id="band-member-mathieu" className="grid grid-cols-5 gap-4 mb-4 h-48">
          <motion.div
            id="music-image"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="col-span-2 comic-panel overflow-hidden"
            style={{backgroundColor: '#385C5F'}}
          >
            <Image 
              src="/running.png" 
              alt={t('music.imageAlt')}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            id="music-description"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="col-span-3 comic-panel flex flex-col justify-center p-4"
            style={{backgroundColor: '#CA7625', padding: '1rem'}}
          >
            <h2 className="comic-text text-4xl mb-3" 
                style={{color: 'white', textShadow: '2px 2px 0px #CA7625, 4px 4px 0px #0D0E08'}}>
              {t('music.title')}
            </h2>
            <p className="text-lg leading-relaxed" style={{fontFamily: 'Comic Neue', color: 'white'}}>
              {t('music.description')}
            </p>
            <motion.div 
              className="inline-block comic-text text-xl px-3 py-1 mt-3 transform -rotate-2" 
              style={{backgroundColor: '#CA7625', color: 'white', textShadow: '1px 1px 0px #0D0E08', width: 'fit-content'}}
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {t('music.tags')}
            </motion.div>
          </motion.div>
        </div>

        {/* Row 4: Action words strip */}
        <motion.div
          id="action-words"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.65 }}
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

        {/* Row 5: Text + Image staggered (reverse) */}
        <div id="booking-info" className="grid grid-cols-5 gap-4 mb-4 h-48">
          <motion.div
            id="booking-text"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="col-span-3 comic-panel flex flex-col justify-center p-4"
            style={{backgroundColor: '#385C5F', padding: '1rem'}}
          >
            <h2 className="comic-text text-4xl mb-3" 
                style={{color: 'white', textShadow: '2px 2px 0px #385C5F, 4px 4px 0px #0D0E08'}}>
              {t('booking.title')}
            </h2>
            <p className="text-lg leading-relaxed" style={{fontFamily: 'Comic Neue', color: 'white'}}>
              {t('booking.description')}
            </p>
            <motion.div 
              className="inline-block comic-text text-xl px-3 py-1 mt-3 transform rotate-2" 
              style={{backgroundColor: '#3F2E10', color: 'white', textShadow: '1px 1px 0px #0D0E08', width: 'fit-content'}}
              animate={{ rotate: [2, -2, 2] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {t('booking.tags')}
            </motion.div>
          </motion.div>
          
          <motion.div
            id="booking-image"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="col-span-2 comic-panel overflow-hidden"
            style={{backgroundColor: '#795B1A'}}
          >
            <Image 
              src="/laugh.png" 
              alt={t('booking.imageAlt')}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Row 5b: Spanish action words strip */}
        <motion.div
          id="spanish-action-words"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.85 }}
          className="grid grid-cols-5 gap-2 mb-4 h-16"
        >
          {['¡PUM!', '¡ZAS!', '¡CATAPLUM!', '¡PAF!', '¡BUM!'].map((word, index) => (
            <motion.div
              key={word}
              className="comic-panel flex items-center justify-center cursor-pointer"
              style={{backgroundColor: ['#795B1A', '#3F2E10', '#CA7625', '#0D0E08', '#385C5F'][index]}}
              whileHover={{ scale: 1.1, rotate: 7 }}
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: index * 0.12
              }}
            >
              <span className="comic-text text-2xl" 
                    style={{color: 'white', textShadow: '2px 2px 0px #000'}}>
                {word}
              </span>
            </motion.div>
          ))}
        </motion.div>



        {/* Row 7: Story panel */}
        <motion.div
          id="band-story"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-4 h-40"
        >
          <div className="comic-panel h-full flex flex-col justify-center p-4 relative" style={{backgroundColor: '#3F2E10', padding: '1rem'}}>
            <h3 className="comic-text text-3xl mb-4 flex items-center gap-3"
                style={{color: 'white', textShadow: '2px 2px 0px #CA7625'}}>
              <Music className="w-8 h-8" />
              {t('story.title')}
            </h3>
            <p className="text-lg leading-relaxed mb-3" style={{fontFamily: 'Comic Neue', color: 'white'}}>
              {t('story.locationText')}
            </p>
            <p className="text-lg leading-relaxed" style={{fontFamily: 'Comic Neue', color: 'white'}}>
              {t('story.storyText')}
            </p>
          </div>
        </motion.div>

        {/* Row 8: Listen to Music section */}
        <motion.div
          id="listen-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.05 }}
          className="mb-4 h-32"
        >
          <div className="comic-panel h-full flex items-center justify-center p-4" style={{backgroundColor: '#795B1A', padding: '1rem'}}>
            <div className="text-center">
              <h3 className="comic-text text-3xl mb-3" style={{color: 'white'}}>
                {t('listen.title')}
              </h3>
              <motion.a
                href="https://www.instagram.com/lesespanters/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block comic-text text-xl px-6 py-2"
                style={{
                  backgroundColor: 'white',
                  color: '#795B1A',
                  border: '2px solid black',
                  boxShadow: '3px 3px 0px #000',
                  textDecoration: 'none'
                }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('listen.link')}
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Row 10: Technical specs grid */}
        <div id="technical-specs" className="grid grid-cols-3 gap-4 mb-4 h-48">
          <motion.div 
            id="stage-setup"
            className="comic-panel p-4 flex flex-col justify-center" 
            style={{backgroundColor: '#CA7625'}}
            initial={{ rotate: -5, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <Zap id="stage-icon" className="w-8 h-8 mb-2 text-white mx-auto fill-white" stroke="white" />
            <h3 id="stage-title" className="comic-text text-2xl mb-3 text-center" style={{color: 'white'}}>
              {t('technical.stage.title')}
            </h3>
            <ul id="stage-list" className="space-y-1 text-left" style={{fontFamily: 'Comic Neue', color: 'white'}}>
              <li>{t('technical.stage.items.0')}</li>
              <li>{t('technical.stage.items.1')}</li>
              <li>{t('technical.stage.items.2')}</li>
              <li>{t('technical.stage.items.3')}</li>
            </ul>
          </motion.div>

          <motion.div 
            id="tech-image"
            className="comic-panel overflow-hidden"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 }}
            style={{backgroundColor: '#795B1A'}}
          >
            <Image 
              id="tech-img-element"
              src="/high-five.png" 
              alt={t('technical.stage.imageAlt')}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            id="performance-info"
            className="comic-panel p-4 flex flex-col justify-center" 
            style={{backgroundColor: '#385C5F'}}
            initial={{ rotate: 5, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 1.3 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            <Heart id="performance-icon" className="w-8 h-8 mb-2 text-white mx-auto" stroke="white" />
            <h3 id="performance-title" className="comic-text text-2xl mb-3 text-center" style={{color: 'white'}}>
              {t('technical.performance.title')}
            </h3>
            <ul id="performance-list" className="space-y-1 text-left" style={{fontFamily: 'Comic Neue', color: 'white'}}>
              <li>{t('technical.performance.items.0')}</li>
              <li>{t('technical.performance.items.1')}</li>
              <li>{t('technical.performance.items.2')}</li>
              <li>{t('technical.performance.items.3')}</li>
            </ul>
          </motion.div>
        </div>

        {/* Row 9: Contact buttons */}
        <motion.div
          id="contact-buttons"
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
            {t('contact.email')}
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
            {t('contact.epk')}
          </motion.button>
        </motion.div>

        {/* Row 10: Images showcase */}
        <div id="images-showcase" className="grid grid-cols-4 gap-4 mb-4 h-32">
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
              transition={{ delay: 2.0 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Image 
                src={item.src}
                alt={`${t('gallery.alt')} ${index + 1}`}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer id="footer" className="text-center py-8 relative z-10">
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
            <p className="font-bold text-lg" style={{fontFamily: 'Comic Neue', color: 'white'}}>
              {t('footer.copyright')}
            </p>
          </div>
        </motion.div>
      </footer>

      {/* Floating action words */}
      <div id="floating-bang" className="fixed top-20 right-10 comic-text text-4xl transform rotate-12 pointer-events-none hidden lg:block z-20" 
           style={{color: '#CA7625', textShadow: '3px 3px 0px #795B1A, 5px 5px 0px #0D0E08'}}>
        {t('floatingWords.bang')}
      </div>
      <div id="floating-wow" className="fixed bottom-20 left-10 comic-text text-3xl transform -rotate-6 pointer-events-none hidden lg:block z-20" 
           style={{color: '#385C5F', textShadow: '3px 3px 0px #CA7625, 5px 5px 0px #0D0E08'}}>
        {t('floatingWords.wow')}
      </div>
    </div>
  );
}