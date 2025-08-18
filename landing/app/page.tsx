'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    band: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', band: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              LouRock
            </h1>
            <div className="flex gap-8">
              <a href="#bands" className="hover:text-purple-400 transition-colors">Bands</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              LouRock
            </h2>
            <p className="text-xl md:text-2xl mb-4 text-slate-300">
              Showcasing the vibrant music scene of Montpellier & Occitanie
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Discover local bands, book concerts, and experience the authentic sound of Southern France
            </p>
            <div className="mt-10">
              <a 
                href="#contact" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
              >
                Book a Band
              </a>
            </div>
          </div>
        </section>

        <section id="bands" className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12">Featured Artists</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="https://dakota-dreamers.lourock.com" className="group">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all transform hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-amber-900 to-amber-700 rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-6xl">🤠</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Dakota Dreamers</h4>
                  <p className="text-slate-400 mb-4">
                    Country rock duo bringing the spirit of the American West to Southern France. 
                    Authentic cowboy ballads meet modern rock energy.
                  </p>
                  <span className="text-purple-400 group-hover:text-purple-300">Visit Site →</span>
                </div>
              </Link>

              <Link href="https://the-kills.lourock.com" className="group">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all transform hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-red-900 to-pink-900 rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-6xl">🎸</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Tribute Band The Kills</h4>
                  <p className="text-slate-400 mb-4">
                    Electrifying tribute to the legendary garage rock duo. 
                    Raw energy, minimalist sound, maximum impact.
                  </p>
                  <span className="text-purple-400 group-hover:text-purple-300">Visit Site →</span>
                </div>
              </Link>

              <Link href="https://mathieu-schmidt.lourock.com" className="group">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all transform hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-stone-800 to-stone-900 rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-6xl">🎤</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Mathieu Schmidt</h4>
                  <p className="text-slate-400 mb-4">
                    Solo artist channeling the lonesome prairie spirit. 
                    Introspective folk meets atmospheric soundscapes.
                  </p>
                  <span className="text-purple-400 group-hover:text-purple-300">Visit Site →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-4xl font-bold text-center mb-12">About LouRock</h3>
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
                Whether you're organizing a corporate event, planning a festival, or booking entertainment for your venue, 
                LouRock connects you with the perfect sound for your audience.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto max-w-2xl">
            <h3 className="text-4xl font-bold text-center mb-12">Book a Performance</h3>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-10 border border-slate-700">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="band" className="block text-sm font-medium mb-2">Band of Interest</label>
                <select
                  id="band"
                  name="band"
                  value={formData.band}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="">Select a band...</option>
                  <option value="dakota-dreamers">Dakota Dreamers</option>
                  <option value="the-kills-tribute">Tribute Band The Kills</option>
                  <option value="mathieu-schmidt">Mathieu Schmidt</option>
                  <option value="multiple">Multiple Bands</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your event, venue, and performance requirements..."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="container mx-auto text-center text-slate-400">
          <p>© 2024 LouRock - Connecting Occitanie's Music Scene</p>
          <p className="mt-2">Montpellier, France</p>
        </div>
      </footer>
    </div>
  )
}