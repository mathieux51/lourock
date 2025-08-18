import Link from 'next/link';

export default function DesignSystem() {
  const colors = [
    { name: 'Kills Black', var: '--kills-black', value: '#000000', class: 'bg-kills-black' },
    { name: 'Kills Deep Black', var: '--kills-deep-black', value: '#0a0a0a', class: 'bg-kills-deep-black' },
    { name: 'Kills Charcoal', var: '--kills-charcoal', value: '#1a1a1a', class: 'bg-kills-charcoal' },
    { name: 'Kills Dark Gray', var: '--kills-dark-gray', value: '#2a2a2a', class: 'bg-kills-dark-gray' },
    { name: 'Kills Gray', var: '--kills-gray', value: '#666666', class: 'bg-kills-gray' },
    { name: 'Kills Light Gray', var: '--kills-light-gray', value: '#999999', class: 'bg-kills-light-gray' },
    { name: 'Kills White', var: '--kills-white', value: '#ffffff', class: 'bg-kills-white' },
    { name: 'Kills Off White', var: '--kills-off-white', value: '#f5f5f5', class: 'bg-kills-off-white' },
    { name: 'Kills Red', var: '--kills-red', value: '#cc0000', class: 'bg-kills-red' },
    { name: 'Kills Dark Red', var: '--kills-dark-red', value: '#990000', class: 'bg-kills-dark-red' },
    { name: 'Kills Pink', var: '--kills-pink', value: '#ff6b9d', class: 'bg-kills-pink' },
    { name: 'Kills Hot Pink', var: '--kills-hot-pink', value: '#ff1744', class: 'bg-kills-hot-pink' },
  ];

  return (
    <div className="min-h-screen bg-kills-black text-kills-white p-8">
      {/* Navigation */}
      <nav className="mb-12">
        <Link 
          href="/" 
          className="kills-mono uppercase text-kills-red hover:text-kills-pink transition-colors"
        >
          ← Back to Site
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-16">
        <h1 className="kills-heading text-4xl md:text-6xl mb-4">
          DESIGN SYSTEM
        </h1>
        <p className="kills-body text-xl text-kills-light-gray max-w-3xl">
          The visual identity for Tribute Band The Kills is inspired by the raw, minimalist aesthetic of The Kills. 
          This design system captures the garage rock ethos with a dark, gritty color palette and strong typography.
        </p>
      </header>

      {/* Color Palette */}
      <section className="mb-16">
        <h2 className="kills-heading text-3xl mb-8 text-kills-red">
          COLOR PALETTE
        </h2>
        <p className="kills-body text-kills-light-gray mb-8">
          Inspired by The Kills' visual identity - predominantly black and white with strategic use of red and pink accents.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {colors.map((color) => (
            <div key={color.name} className="bg-kills-charcoal border border-kills-dark-gray p-4">
              <div 
                className={`${color.class} h-16 mb-4 border border-kills-gray`}
                style={{ backgroundColor: color.value }}
              ></div>
              <h3 className="kills-body font-medium text-kills-white mb-1">
                {color.name}
              </h3>
              <p className="kills-mono text-xs text-kills-light-gray mb-1">
                {color.value}
              </p>
              <p className="kills-mono text-xs text-kills-gray">
                {color.var}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="mb-16">
        <h2 className="kills-heading text-3xl mb-8 text-kills-red">
          TYPOGRAPHY
        </h2>
        <p className="kills-body text-kills-light-gray mb-8">
          Strong, bold typography that reflects the raw energy of garage rock. Inter for headings and body text, JetBrains Mono for monospace elements.
        </p>

        <div className="space-y-8">
          {/* Headings */}
          <div className="bg-kills-charcoal border border-kills-dark-gray p-6">
            <h3 className="kills-body text-kills-red mb-4 font-medium">
              HEADINGS (.kills-heading)
            </h3>
            <div className="space-y-4">
              <h1 className="kills-heading text-4xl">
                MAIN HEADING H1
              </h1>
              <h2 className="kills-heading text-3xl">
                SECTION HEADING H2
              </h2>
              <h3 className="kills-heading text-2xl">
                SUBSECTION HEADING H3
              </h3>
              <h4 className="kills-heading text-xl">
                COMPONENT HEADING H4
              </h4>
            </div>
            <div className="mt-6 p-4 bg-kills-black border border-kills-gray">
              <code className="kills-mono text-sm text-kills-light-gray">
                font-family: Inter, sans-serif;<br/>
                font-weight: 900;<br/>
                letter-spacing: -0.02em;<br/>
                line-height: 0.9;<br/>
                text-transform: uppercase;
              </code>
            </div>
          </div>

          {/* Body Text */}
          <div className="bg-kills-charcoal border border-kills-dark-gray p-6">
            <h3 className="kills-body text-kills-red mb-4 font-medium">
              BODY TEXT (.kills-body)
            </h3>
            <div className="space-y-4">
              <p className="kills-body text-lg">
                Large body text for important descriptions and lead paragraphs.
              </p>
              <p className="kills-body">
                Regular body text for general content. This is the standard text size used throughout the site for readability and consistency.
              </p>
              <p className="kills-body text-sm">
                Small body text for captions, footnotes, and secondary information.
              </p>
            </div>
            <div className="mt-6 p-4 bg-kills-black border border-kills-gray">
              <code className="kills-mono text-sm text-kills-light-gray">
                font-family: Inter, sans-serif;<br/>
                font-weight: 400;<br/>
                letter-spacing: 0.01em;
              </code>
            </div>
          </div>

          {/* Monospace */}
          <div className="bg-kills-charcoal border border-kills-dark-gray p-6">
            <h3 className="kills-body text-kills-red mb-4 font-medium">
              MONOSPACE (.kills-mono)
            </h3>
            <div className="space-y-4">
              <p className="kills-mono text-lg">
                LARGE MONOSPACE TEXT
              </p>
              <p className="kills-mono">
                Regular monospace text for technical elements
              </p>
              <p className="kills-mono text-sm">
                Small monospace for codes and labels
              </p>
            </div>
            <div className="mt-6 p-4 bg-kills-black border border-kills-gray">
              <code className="kills-mono text-sm text-kills-light-gray">
                font-family: JetBrains Mono, monospace;<br/>
                font-weight: 400;<br/>
                letter-spacing: 0.02em;
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="mb-16">
        <h2 className="kills-heading text-3xl mb-8 text-kills-red">
          COMPONENTS
        </h2>
        
        <div className="space-y-8">
          {/* Buttons */}
          <div className="bg-kills-charcoal border border-kills-dark-gray p-6">
            <h3 className="kills-body text-kills-red mb-6 font-medium">
              BUTTONS
            </h3>
            <div className="flex flex-wrap gap-4">
              <button className="kills-mono uppercase bg-kills-red hover:bg-kills-dark-red text-kills-white px-8 py-4 transition-colors border-2 border-kills-red hover:border-kills-dark-red">
                Primary Button
              </button>
              <button className="kills-mono uppercase border-2 border-kills-white hover:border-kills-red hover:text-kills-red text-kills-white px-8 py-4 transition-colors">
                Secondary Button
              </button>
              <button className="kills-mono uppercase text-kills-red hover:text-kills-pink px-4 py-2 transition-colors">
                Text Button
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="bg-kills-charcoal border border-kills-dark-gray p-6">
            <h3 className="kills-body text-kills-red mb-6 font-medium">
              CARDS
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-kills-black border-2 border-kills-dark-gray p-6 hover:border-kills-red transition-colors">
                <h4 className="kills-heading text-xl mb-4 text-kills-red">
                  Standard Card
                </h4>
                <p className="kills-body text-kills-light-gray">
                  Basic card component with hover effect and red accent border.
                </p>
              </div>
              <div className="bg-kills-charcoal p-8 border-2 border-kills-dark-gray">
                <h4 className="kills-heading text-xl mb-4 text-kills-red">
                  Content Card
                </h4>
                <p className="kills-body text-kills-light-gray">
                  Alternative card style for content sections and information blocks.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-kills-charcoal border border-kills-dark-gray p-6">
            <h3 className="kills-body text-kills-red mb-6 font-medium">
              NAVIGATION
            </h3>
            <div className="bg-kills-black/90 backdrop-blur-sm border-b border-kills-dark-gray p-4">
              <div className="flex justify-between items-center">
                <div className="kills-heading text-xl">
                  TRIBUTE BAND THE KILLS
                </div>
                <div className="flex space-x-6">
                  <a href="#" className="hover:text-kills-red transition-colors">ABOUT</a>
                  <a href="#" className="hover:text-kills-red transition-colors">VIDEO</a>
                  <a href="#" className="hover:text-kills-red transition-colors">EPK</a>
                  <a href="#" className="hover:text-kills-red transition-colors">SHOWS</a>
                  <a href="#" className="text-kills-red hover:text-kills-pink transition-colors">
                    ← LOUROCK.COM
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Forms */}
          <div className="bg-kills-charcoal border border-kills-dark-gray p-6">
            <h3 className="kills-body text-kills-red mb-6 font-medium">
              FORM ELEMENTS
            </h3>
            <div className="space-y-4 max-w-md">
              <input 
                type="text" 
                placeholder="Text Input"
                className="w-full bg-kills-black border-2 border-kills-dark-gray focus:border-kills-red text-kills-white px-4 py-3 kills-body"
              />
              <textarea 
                placeholder="Textarea"
                rows={3}
                className="w-full bg-kills-black border-2 border-kills-dark-gray focus:border-kills-red text-kills-white px-4 py-3 kills-body resize-none"
              ></textarea>
              <select className="w-full bg-kills-black border-2 border-kills-dark-gray focus:border-kills-red text-kills-white px-4 py-3 kills-body">
                <option>Select Option</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Utility Classes */}
      <section className="mb-16">
        <h2 className="kills-heading text-3xl mb-8 text-kills-red">
          UTILITY CLASSES
        </h2>
        
        <div className="space-y-6">
          <div className="bg-kills-charcoal border border-kills-dark-gray p-6">
            <h3 className="kills-body text-kills-red mb-4 font-medium">
              TEXT EFFECTS
            </h3>
            <div className="space-y-4">
              <p className="kills-heading text-2xl text-shadow-red">
                TEXT WITH RED SHADOW (.text-shadow-red)
              </p>
              <div className="inline-block p-4 glow-red bg-kills-black">
                <span className="kills-body">ELEMENT WITH RED GLOW (.glow-red)</span>
              </div>
              <div className="inline-block p-4 border-gradient-red">
                <span className="kills-body">GRADIENT BORDER (.border-gradient-red)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="mb-16">
        <h2 className="kills-heading text-3xl mb-8 text-kills-red">
          USAGE GUIDELINES
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-kills-charcoal border border-kills-dark-gray p-6">
            <h3 className="kills-heading text-xl mb-4 text-kills-red">
              DO'S
            </h3>
            <ul className="kills-body space-y-2 text-kills-light-gray">
              <li>• Use high contrast between text and backgrounds</li>
              <li>• Maintain consistent spacing and alignment</li>
              <li>• Use red sparingly as an accent color</li>
              <li>• Keep typography bold and impactful</li>
              <li>• Embrace the minimalist aesthetic</li>
              <li>• Ensure mobile responsiveness</li>
            </ul>
          </div>
          
          <div className="bg-kills-charcoal border border-kills-dark-gray p-6">
            <h3 className="kills-heading text-xl mb-4 text-kills-red">
              DON'TS
            </h3>
            <ul className="kills-body space-y-2 text-kills-light-gray">
              <li>• Don't use too many colors</li>
              <li>• Avoid light backgrounds with light text</li>
              <li>• Don't overcomplicate the layout</li>
              <li>• Avoid using gradients excessively</li>
              <li>• Don't ignore accessibility guidelines</li>
              <li>• Avoid cluttered compositions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-kills-dark-gray pt-8">
        <div className="text-center">
          <p className="kills-body text-kills-gray">
            Design System for Tribute Band The Kills
          </p>
          <p className="kills-mono text-sm text-kills-light-gray mt-2">
            Part of the LOUROCK network
          </p>
        </div>
      </footer>
    </div>
  );
}