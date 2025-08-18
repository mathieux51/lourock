'use client'

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          LouRock Design System
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
              <div className="text-sm text-slate-400 mb-2">Primary Dark</div>
              <div className="font-mono">slate-950</div>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
              <div className="text-sm text-slate-400 mb-2">Secondary Dark</div>
              <div className="font-mono">slate-900</div>
            </div>
            <div className="bg-purple-600 p-4 rounded-lg">
              <div className="text-sm mb-2">Purple Accent</div>
              <div className="font-mono">purple-600</div>
            </div>
            <div className="bg-pink-600 p-4 rounded-lg">
              <div className="text-sm mb-2">Pink Accent</div>
              <div className="font-mono">pink-600</div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Typography</h2>
          <div className="space-y-4">
            <div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Heading 1
              </h1>
              <p className="text-slate-400 mt-2">text-6xl font-bold with gradient</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">Heading 2</h2>
              <p className="text-slate-400 mt-2">text-4xl font-bold</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Heading 3</h3>
              <p className="text-slate-400 mt-2">text-2xl font-bold</p>
            </div>
            <div>
              <p className="text-lg text-slate-300">Body Large</p>
              <p className="text-slate-400 mt-2">text-lg text-slate-300</p>
            </div>
            <div>
              <p className="text-base text-slate-400">Body Regular</p>
              <p className="text-slate-400 mt-2">text-base text-slate-400</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Buttons</h2>
          <div className="space-y-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
              Primary Button
            </button>
            <br />
            <button className="px-6 py-3 border border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-all">
              Secondary Button
            </button>
            <br />
            <button className="text-purple-400 hover:text-purple-300 underline underline-offset-4">
              Text Link
            </button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Cards</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold mb-3">Standard Card</h3>
              <p className="text-slate-400">
                This is a standard card component with gradient background and border.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3">Interactive Card</h3>
              <p className="text-slate-400">
                This card has hover effects including border color change and scale.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Form Elements</h2>
          <div className="max-w-md space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Input Field</label>
              <input
                type="text"
                placeholder="Enter text..."
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Select Field</label>
              <select className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Textarea</label>
              <textarea
                rows={3}
                placeholder="Enter message..."
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Gradients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg"></div>
            <div className="h-32 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-lg"></div>
            <div className="h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg"></div>
          </div>
        </section>
      </div>
    </div>
  )
}