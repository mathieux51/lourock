"use client";

import Link from "next/link";

export default function DesignSystem() {
  const colors = [
    { name: "Primary", value: "#d2691e", description: "Saddle Brown - Main brand color" },
    { name: "Secondary", value: "#cd853f", description: "Peru - Supporting color" },
    { name: "Accent", value: "#ff6347", description: "Sunset Orange - Call-to-action" },
    { name: "Rust", value: "#b7410e", description: "Rust - Hover states" },
    { name: "Cream", value: "#f5f5dc", description: "Beige - Light text" },
    { name: "Sand", value: "#f4a460", description: "Sandy Brown - Secondary text" },
    { name: "Leather", value: "#8b4513", description: "Leather Brown - Accents" },
    { name: "Gold", value: "#daa520", description: "Goldenrod - Headers" },
    { name: "Charcoal", value: "#2f2f2f", description: "Charcoal - Dark neutral" },
    { name: "Smoke", value: "#696969", description: "Smoke - Medium neutral" },
    { name: "Ash", value: "#a9a9a9", description: "Ash - Light neutral" },
  ];

  const surfaces = [
    { name: "Background", value: "#1a1611", description: "Main background" },
    { name: "Foreground", value: "#f7f1e8", description: "Main text color" },
    { name: "Surface Dark", value: "#0f0d0a", description: "Darkest surface" },
    { name: "Surface Medium", value: "#1f1c17", description: "Medium surface" },
    { name: "Surface Light", value: "#2a251f", description: "Lightest surface" },
  ];

  const fontSizes = [
    { name: "text-xs", size: "12px", example: "Small text and captions" },
    { name: "text-sm", size: "14px", example: "Secondary information" },
    { name: "text-base", size: "16px", example: "Body text and paragraphs" },
    { name: "text-lg", size: "18px", example: "Larger body text" },
    { name: "text-xl", size: "20px", example: "Subheadings" },
    { name: "text-2xl", size: "24px", example: "Section headers" },
    { name: "text-3xl", size: "30px", example: "Page titles" },
    { name: "text-4xl", size: "36px", example: "Large headings" },
    { name: "text-5xl", size: "48px", example: "Hero headings" },
  ];

  const gradients = [
    { 
      name: "Sunset", 
      class: "gradient-sunset", 
      description: "Orange to rust gradient for hero sections" 
    },
    { 
      name: "Desert", 
      class: "gradient-desert", 
      description: "Sand to brown gradient for backgrounds" 
    },
    { 
      name: "Dusk", 
      class: "gradient-dusk", 
      description: "Dark gradient for overlays" 
    },
  ];

  const components = [
    {
      name: "Primary Button",
      code: `<button className="bg-accent hover:bg-rust px-8 py-3 rounded font-heading transition-colors">
  Primary Action
</button>`,
    },
    {
      name: "Secondary Button",
      code: `<button className="border-2 border-primary hover:bg-primary hover:text-background px-8 py-3 rounded font-heading transition-colors">
  Secondary Action
</button>`,
    },
    {
      name: "Disabled Button",
      code: `<button disabled className="bg-accent/50 px-8 py-3 rounded font-heading cursor-not-allowed opacity-50">
  Disabled Action
</button>`,
    },
    {
      name: "Background Card",
      code: `<div className="bg-surface-light p-8 rounded-lg">
  <h3 className="font-heading text-2xl mb-6 text-primary">Card Title</h3>
  <p className="font-body">Card content with background...</p>
</div>`,
    },
    {
      name: "Bordered Card",
      code: `<div className="border-2 border-primary/30 p-8 rounded-lg">
  <h3 className="font-heading text-2xl mb-6 text-primary">Card Title</h3>
  <p className="font-body">Card content with transparent background...</p>
</div>`,
    },
    {
      name: "Coming Soon",
      code: `<div className="bg-surface-light p-16 rounded-lg border-2 border-accent/30 text-center">
  <h3 className="font-heading text-4xl text-gold mb-6">Coming Soon</h3>
  <p className="font-body text-lg text-sand mb-8">Content will be available soon...</p>
  <button className="bg-accent hover:bg-rust px-8 py-3 rounded font-heading transition-colors">Contact Us</button>
</div>`,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-surface-dark border-b border-primary/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-heading text-4xl text-gold mb-2">Design System</h1>
              <p className="text-sand">Dakota Dreamers Brand Guidelines</p>
            </div>
            <Link 
              href="/" 
              className="bg-primary hover:bg-accent px-6 py-3 rounded font-heading transition-colors"
            >
              Back to Site
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl text-gold mb-8">Typography</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface-light p-8 rounded-lg">
              <h3 className="font-heading text-2xl text-primary mb-6">Fonts</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-heading text-lg text-sand">Oswald - Headings</h4>
                  <p className="font-heading text-2xl">THE QUICK BROWN FOX</p>
                  <p className="text-ash text-sm">Used for headings, buttons, and emphasis</p>
                </div>
                <div>
                  <h4 className="font-heading text-lg text-sand">Merriweather - Body</h4>
                  <p className="font-body text-lg">The quick brown fox jumps over the lazy dog</p>
                  <p className="text-ash text-sm">Used for body text and descriptions</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-light p-8 rounded-lg">
              <h3 className="font-heading text-2xl text-primary mb-6">Font Sizes</h3>
              <div className="space-y-3">
                {fontSizes.map((font, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-heading text-sand">{font.name}</span>
                    <span className="text-ash text-sm">{font.size}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette Section */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl text-gold mb-8">Color Palette</h2>
          
          <div className="mb-8">
            <h3 className="font-heading text-2xl text-primary mb-6">Brand Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {colors.map((color, index) => (
                <div key={index} className="bg-surface-light p-4 rounded-lg">
                  <div 
                    className="w-full h-16 rounded mb-3"
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <h4 className="font-heading text-sand text-sm">{color.name}</h4>
                  <p className="text-ash text-xs">{color.value}</p>
                  <p className="text-ash text-xs mt-1">{color.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-heading text-2xl text-primary mb-6">Surface Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {surfaces.map((surface, index) => (
                <div key={index} className="bg-surface-light p-4 rounded-lg">
                  <div 
                    className="w-full h-16 rounded mb-3 border border-smoke/20"
                    style={{ backgroundColor: surface.value }}
                  ></div>
                  <h4 className="font-heading text-sand text-sm">{surface.name}</h4>
                  <p className="text-ash text-xs">{surface.value}</p>
                  <p className="text-ash text-xs mt-1">{surface.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-2xl text-primary mb-6">Gradients</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {gradients.map((gradient, index) => (
                <div key={index} className="bg-surface-light p-4 rounded-lg">
                  <div className={`w-full h-16 rounded mb-3 ${gradient.class}`}></div>
                  <h4 className="font-heading text-sand text-sm">{gradient.name}</h4>
                  <p className="text-ash text-xs">{gradient.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl text-gold mb-8">Components</h2>
          
          <div className="space-y-8">
            {components.map((component, index) => (
              <div key={index} className="bg-surface-light p-8 rounded-lg">
                <h3 className="font-heading text-2xl text-primary mb-6">{component.name}</h3>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-heading text-lg text-sand mb-4">Preview</h4>
                    <div className="bg-surface-dark p-6 rounded">
                      {component.name === "Primary Button" && (
                        <button className="bg-accent hover:bg-rust px-8 py-3 rounded font-heading transition-colors">
                          Primary Action
                        </button>
                      )}
                      {component.name === "Secondary Button" && (
                        <button className="border-2 border-primary hover:bg-primary hover:text-background px-8 py-3 rounded font-heading transition-colors">
                          Secondary Action
                        </button>
                      )}
                      {component.name === "Disabled Button" && (
                        <button disabled className="bg-accent/50 px-8 py-3 rounded font-heading cursor-not-allowed opacity-50">
                          Disabled Action
                        </button>
                      )}
                      {component.name === "Background Card" && (
                        <div className="bg-surface-light p-8 rounded-lg max-w-md">
                          <h3 className="font-heading text-2xl mb-6 text-primary">Card Title</h3>
                          <p className="font-body">Card content with background...</p>
                        </div>
                      )}
                      {component.name === "Bordered Card" && (
                        <div className="border-2 border-primary/30 p-8 rounded-lg max-w-md">
                          <h3 className="font-heading text-2xl mb-6 text-primary">Card Title</h3>
                          <p className="font-body">Card content with transparent background...</p>
                        </div>
                      )}
                      {component.name === "Coming Soon" && (
                        <div className="bg-surface-light p-12 rounded-lg border-2 border-accent/30 text-center max-w-md">
                          <h3 className="font-heading text-3xl text-gold mb-4">Coming Soon</h3>
                          <p className="font-body text-sand mb-6">Content will be available soon...</p>
                          <button className="bg-accent hover:bg-rust px-6 py-2 rounded font-heading transition-colors text-sm">Contact Us</button>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-heading text-lg text-sand mb-4">Code</h4>
                    <pre className="bg-surface-dark p-4 rounded text-sm overflow-x-auto">
                      <code className="text-cream">{component.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Background Overlays */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl text-gold mb-8">Background Overlays</h2>
          
          <div className="bg-surface-light p-8 rounded-lg">
            <h3 className="font-heading text-2xl text-primary mb-6">Overlay Guidelines</h3>
            <div className="space-y-4 font-body">
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-heading text-lg text-sand">Standard Overlay</h4>
                <p className="text-ash">bg-black/65 + bg-background/45 for optimal text readability</p>
                <code className="text-cream text-sm">Used in: About, EPK, Contact sections</code>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-heading text-lg text-sand">Bordered Components</h4>
                <p className="text-ash">border-2 border-primary/30 for transparent backgrounds</p>
                <code className="text-cream text-sm">Used in: Band Members, Get in Touch, EPK subsections</code>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Guidelines */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl text-gold mb-8">Brand Guidelines</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-primary/30 p-8 rounded-lg">
              <h3 className="font-heading text-2xl text-primary mb-6">Visual Identity</h3>
              <ul className="space-y-3 font-body">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Western/Country aesthetic with authentic storytelling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Warm color palette inspired by sunsets and landscapes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Typography that balances ruggedness with readability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Clean, modern layouts with country soul</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-primary/30 p-8 rounded-lg">
              <h3 className="font-heading text-2xl text-primary mb-6">Usage Principles</h3>
              <ul className="space-y-3 font-body">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Maintain sufficient contrast for accessibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Use headings font for emphasis and navigation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Primary colors for key actions and branding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Consistent spacing and rounded corners</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Responsive Design */}
        <section>
          <h2 className="font-heading text-3xl text-gold mb-8">Responsive Design</h2>
          
          <div className="border-2 border-primary/30 p-8 rounded-lg">
            <h3 className="font-heading text-2xl text-primary mb-6">Breakpoints</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-heading text-lg text-sand mb-2">Mobile</h4>
                <p className="text-ash text-sm">Up to 768px</p>
                <p className="font-body text-sm mt-2">Single column layouts, larger touch targets</p>
              </div>
              <div>
                <h4 className="font-heading text-lg text-sand mb-2">Tablet</h4>
                <p className="text-ash text-sm">768px - 1024px</p>
                <p className="font-body text-sm mt-2">Two column layouts, medium spacing</p>
              </div>
              <div>
                <h4 className="font-heading text-lg text-sand mb-2">Desktop</h4>
                <p className="text-ash text-sm">1024px+</p>
                <p className="font-body text-sm mt-2">Multi-column layouts, optimized spacing</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-surface-dark py-8 border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-ash">
            Dakota Dreamers Design System • 
            <Link href="/" className="text-primary hover:text-accent ml-1">
              Back to Main Site
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}