import Link from "next/link";

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-card backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-lg font-serif font-semibold text-dusty">
              Design System
            </div>
            <div className="flex space-x-6">
              <Link
                href="/"
                className="text-muted hover:text-sage transition-colors"
              >
                ← Back to Site
              </Link>
              <a
                href="https://lourock.com"
                className="text-muted hover:text-sage transition-colors text-sm"
              >
                Lou Rock
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-serif text-foreground mb-4">
              Design System
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              The visual language and components that create the lonely prairie
              aesthetic for Mathieu Schmidt&apos;s artist website.
            </p>
          </div>

          {/* Color Palette */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif text-foreground mb-8">
              Color Palette
            </h2>
            <p className="text-muted mb-8 text-lg">
              Inspired by the muted, earthy tones of prairie landscapes and
              weathered materials.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Primary Colors */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg text-foreground">Primary</h3>
                <div className="space-y-3">
                  <div className="bg-sage rounded-lg p-4 text-bone-white">
                    <div className="font-mono text-sm">Sage Green</div>
                    <div className="font-mono text-xs opacity-80">#9CAF88</div>
                  </div>
                  <div className="bg-dusty rounded-lg p-4 text-bone-white">
                    <div className="font-mono text-sm">Dusty Brown</div>
                    <div className="font-mono text-xs opacity-80">#8B7355</div>
                  </div>
                </div>
              </div>

              {/* Neutral Colors */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg text-foreground">Neutrals</h3>
                <div className="space-y-3">
                  <div className="bg-sand rounded-lg p-4 text-charcoal">
                    <div className="font-mono text-sm">Warm Sand</div>
                    <div className="font-mono text-xs opacity-80">#D4C4A8</div>
                  </div>
                  <div className="bg-stone rounded-lg p-4 text-charcoal">
                    <div className="font-mono text-sm">Weathered Stone</div>
                    <div className="font-mono text-xs opacity-80">#A8A196</div>
                  </div>
                </div>
              </div>

              {/* Atmospheric Colors */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg text-foreground">
                  Atmospheric
                </h3>
                <div className="space-y-3">
                  <div className="bg-prairie rounded-lg p-4 text-charcoal">
                    <div className="font-mono text-sm">Prairie Sky</div>
                    <div className="font-mono text-xs opacity-80">#B8C5D1</div>
                  </div>
                  <div className="bg-twilight rounded-lg p-4 text-bone-white">
                    <div className="font-mono text-sm">Twilight Blue</div>
                    <div className="font-mono text-xs opacity-80">#6B7C8C</div>
                  </div>
                </div>
              </div>

              {/* Earth Tones */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg text-foreground">Earth</h3>
                <div className="space-y-3">
                  <div className="bg-russet rounded-lg p-4 text-bone-white">
                    <div className="font-mono text-sm">Russet Earth</div>
                    <div className="font-mono text-xs opacity-80">#A0725E</div>
                  </div>
                  <div className="bg-denim rounded-lg p-4 text-bone-white">
                    <div className="font-mono text-sm">Faded Denim</div>
                    <div className="font-mono text-xs opacity-80">#7A8BA3</div>
                  </div>
                </div>
              </div>

              {/* Base Colors */}
              <div className="space-y-4 md:col-span-2">
                <h3 className="font-serif text-lg text-foreground">Base</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="border-2 border-charcoal rounded-lg p-4 text-charcoal">
                    <div className="font-mono text-sm">Bone White</div>
                    <div className="font-mono text-xs opacity-80">#F5F3F0</div>
                  </div>
                  <div className="bg-charcoal rounded-lg p-4 text-bone-white">
                    <div className="font-mono text-sm">Charcoal</div>
                    <div className="font-mono text-xs opacity-80">#3C3835</div>
                  </div>
                  <div className="bg-deep-brown rounded-lg p-4 text-bone-white">
                    <div className="font-mono text-sm">Deep Brown</div>
                    <div className="font-mono text-xs opacity-80">#2C2621</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif text-foreground mb-8">
              Typography
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-6">
                  Crimson Text (Serif)
                </h3>
                <div className="space-y-6">
                  <div>
                    <h1 className="text-4xl font-serif">Heading 1 - Display</h1>
                    <p className="text-muted text-sm mt-2">
                      Used for main titles and hero text
                    </p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif">Heading 2 - Section</h2>
                    <p className="text-muted text-sm mt-2">
                      Section headings and important titles
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif">
                      Heading 3 - Subsection
                    </h3>
                    <p className="text-muted text-sm mt-2">
                      Subsection headers and card titles
                    </p>
                  </div>
                  <div>
                    <p className="font-serif text-lg italic text-muted">
                      &ldquo;Elegant serif for quotes and atmospheric
                      text&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-foreground mb-6">
                  Inter (Sans-serif)
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-lg">Body text - Large</p>
                    <p className="text-muted text-sm mt-2">
                      Main paragraph text for readability
                    </p>
                  </div>
                  <div>
                    <p className="text-base">Body text - Regular</p>
                    <p className="text-muted text-sm mt-2">
                      Secondary content and descriptions
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted">
                      Small text - Captions and metadata
                    </p>
                    <p className="text-muted text-xs mt-2">
                      For less important information
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sage">
                      Medium weight for buttons and links
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Buttons & Interactive Elements */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif text-foreground mb-8">
              Interactive Elements
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-xl text-foreground mb-6">
                  Buttons
                </h3>
                <div className="space-y-4">
                  <div>
                    <button className="inline-flex items-center px-8 py-3 bg-sage text-bone-white rounded-sm hover:bg-dusty transition-colors font-medium">
                      Primary Button
                    </button>
                    <p className="text-muted text-sm mt-2">
                      Main call-to-action buttons
                    </p>
                  </div>

                  <div>
                    <button className="inline-flex items-center px-8 py-3 border border-sage text-sage hover:bg-sage hover:text-bone-white transition-colors rounded-sm font-medium">
                      Secondary Button
                    </button>
                    <p className="text-muted text-sm mt-2">
                      Secondary actions and navigation
                    </p>
                  </div>

                  <div>
                    <button className="text-sage hover:text-dusty transition-colors underline underline-offset-4">
                      Text Link
                    </button>
                    <p className="text-muted text-sm mt-2">
                      Inline links and subtle actions
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl text-foreground mb-6">
                  Navigation
                </h3>
                <div className="space-y-4">
                  <div>
                    <nav className="bg-card border border-border rounded-lg p-4">
                      <div className="flex space-x-6">
                        <a href="#" className="text-sage font-medium">
                          Active
                        </a>
                        <a
                          href="#"
                          className="text-muted hover:text-sage transition-colors"
                        >
                          Inactive
                        </a>
                        <a
                          href="#"
                          className="text-muted hover:text-sage transition-colors"
                        >
                          Link
                        </a>
                      </div>
                    </nav>
                    <p className="text-muted text-sm mt-2">
                      Main navigation styling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cards & Layout Components */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif text-foreground mb-8">
              Layout Components
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Cards
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <h4 className="font-serif text-lg text-foreground mb-2">
                      Content Card
                    </h4>
                    <p className="text-muted">
                      Standard content cards with subtle background and border.
                      Used for sectioning content and creating visual hierarchy.
                    </p>
                  </div>

                  <div className="bg-sage/10 border border-sage/20 rounded-lg p-6">
                    <h4 className="font-serif text-lg text-foreground mb-2">
                      Highlighted Card
                    </h4>
                    <p className="text-muted">
                      Subtle accent cards for featured content or important
                      information. Uses the primary color with low opacity.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Dividers & Spacing
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="w-24 h-px bg-sage mx-auto"></div>
                    <p className="text-center text-muted text-sm mt-2">
                      Accent divider line
                    </p>
                  </div>

                  <div>
                    <hr className="border-border" />
                    <p className="text-center text-muted text-sm mt-2">
                      Standard section divider
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Usage Guidelines */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif text-foreground mb-8">
              Usage Guidelines
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Spacing
                </h3>
                <ul className="space-y-2 text-muted">
                  <li>• Generous white space for contemplative feel</li>
                  <li>• 24px (1.5rem) base spacing unit</li>
                  <li>• Section padding: 96px (6rem) vertical</li>
                  <li>• Content max-width: 1024px (64rem)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Aesthetic Principles
                </h3>
                <ul className="space-y-2 text-muted">
                  <li>• Minimalist and contemplative design</li>
                  <li>• Subtle transitions and hover effects</li>
                  <li>• Muted, earthy color applications</li>
                  <li>• Focus on readability and atmosphere</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Color Usage Examples */}
          <section>
            <h2 className="text-3xl font-serif text-foreground mb-8">
              Color Usage in Context
            </h2>

            <div className="grid gap-8">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-serif text-2xl text-foreground mb-4">
                  Example Section
                </h3>
                <p className="text-muted mb-4">
                  This demonstrates how the color palette works together in a
                  real section. The sage green is used sparingly for accents and
                  interactive elements.
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-2 bg-sage text-bone-white rounded-sm font-medium">
                    Primary Action
                  </button>
                  <button className="px-6 py-2 border border-sage text-sage rounded-sm font-medium">
                    Secondary
                  </button>
                </div>
              </div>

              <div className="bg-stone/10 rounded-lg p-6">
                <h4 className="font-serif text-lg text-foreground mb-2 text-dusty">
                  Atmospheric Quote
                </h4>
                <blockquote className="text-muted italic text-lg border-l-4 border-sage pl-6">
                  &ldquo;The prairie teaches patience - in its vastness,
                  there&apos;s time for every thought to settle like dust after
                  a storm.&rdquo;
                </blockquote>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-card">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted text-sm">
            Design System for Mathieu Schmidt • Part of the Lou Rock collective
          </p>
        </div>
      </footer>
    </div>
  );
}
