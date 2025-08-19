'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              LouRock
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#bands" className="hover:text-purple-400 transition-colors">Our Bands</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
              LouRock
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              The Sound of Southern France
            </p>
            <p className="text-lg text-slate-400 mb-12">
              Connecting talented bands from Montpellier & Occitanie with venues across the region
            </p>
            <a 
              href="#bands" 
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
            >
              Discover Our Artists
            </a>
          </div>
        </section>

        <section id="bands" className="py-20 px-6">
          <div className="container mx-auto">
            <h3 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Featured Bands
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Link href="https://dakota-dreamers.lourock.com" className="group">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                  <div className="h-48 bg-cover bg-center rounded-lg mb-6" style={{backgroundImage: 'url("https://dakota-dreamers.lourock.com/stage.png")'}}></div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">Dakota Dreamers</h4>
                  <p className="text-slate-400 mb-4">Country Rock Duo</p>
                  <p className="text-sm text-slate-500">
                    Bringing the spirit of the American West to Southern France with authentic country rock performances.
                  </p>
                </div>
              </Link>

              <Link href="https://the-kills.lourock.com" className="group">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                  <div className="h-48 bg-cover bg-center rounded-lg mb-6" style={{backgroundImage: 'url("https://the-kills.lourock.com/stage.png")'}}></div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">Tribute Band The Kills</h4>
                  <p className="text-slate-400 mb-4">Rock Tribute</p>
                  <p className="text-sm text-slate-500">
                    A powerful tribute to one of indie rock&apos;s most iconic duos, capturing their raw energy and signature sound.
                  </p>
                </div>
              </Link>

              <Link href="https://mathieu-schmidt.lourock.com" className="group">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                  <div className="h-48 bg-cover bg-center rounded-lg mb-6" style={{backgroundImage: 'url("https://mathieu-schmidt.lourock.com/port.png")'}}></div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">Mathieu Schmidt</h4>
                  <p className="text-slate-400 mb-4">Solo Artist</p>
                  <p className="text-sm text-slate-500">
                    Intimate performances blending folk, indie, and Mediterranean influences into a unique musical journey.
                  </p>
                </div>
              </Link>
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-400">
                Each band provides a complete Electronic Press Kit for professional booking
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About LouRock
            </h3>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-10 border border-slate-700">
              <p className="text-lg text-slate-300 mb-6">
                LouRock is the premier platform connecting talented local bands from Montpellier and the Occitanie region 
                with venues and event organizers across Southern France. We specialize in curating authentic musical 
                experiences that capture the unique cultural blend of our region.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                From intimate café concerts to festival performances, our artists bring professional quality and 
                passionate performances to every stage. Each band in our roster offers a complete Electronic Press Kit, 
                making booking seamless and professional.
              </p>
              <p className="text-lg text-slate-300">
                Whether you&apos;re organizing a corporate event, planning a festival, or booking entertainment for your venue, 
                LouRock connects you with the perfect sound for your audience.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto max-w-2xl">
            <h3 className="text-4xl font-bold text-center mb-12">Book a Performance</h3>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-10 border border-slate-700 text-center">
              <p className="text-lg text-slate-300 mb-8">
                Ready to bring exceptional live music to your venue or event? 
                Get in touch with us to discuss your requirements and find the perfect band for your audience.
              </p>
              
              <div className="space-y-4 mb-8">
                <p className="text-slate-400">
                  <span className="font-semibold text-slate-200">Available Bands:</span>
                </p>
                <ul className="text-slate-300 space-y-2">
                  <li>• Dakota Dreamers - Country Rock Duo</li>
                  <li>• Tribute Band The Kills - Rock Tribute</li>
                  <li>• Mathieu Schmidt - Solo Artist</li>
                </ul>
              </div>

              <a
                href={`mailto:contact@lourock.com?subject=${encodeURIComponent('Booking Inquiry - LouRock')}&body=${encodeURIComponent(`Hello LouRock Team,

I am interested in booking one of your bands for an upcoming event.

Event Details:
- Date: 
- Venue/Location: 
- Type of Event: 
- Expected Audience Size: 
- Band(s) of Interest: 

Additional Information:


Best regards,
[Your Name]
[Your Phone Number]`)}`}
                className="inline-block w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-[1.02]"
              >
                Contact Us for Booking
              </a>
              
              <p className="text-sm text-slate-400 mt-6">
                Or email us directly at: <span className="text-purple-400">contact@lourock.com</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 border-t border-slate-800 py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-slate-400 mb-4">
            © 2025 LouRock. Bringing the best of Montpellier&apos;s music scene to your venue.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-slate-500">
            <span>Based in Montpellier, Occitanie</span>
            <span>•</span>
            <span>Professional Music Booking Platform</span>
          </div>
        </div>
      </footer>
    </div>
  )
}