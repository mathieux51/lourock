# LouRock - Montpellier & Occitanie Music Scene

A multi-site platform showcasing local bands and artists from Montpellier and the Occitanie region in Southern France.

## 🎸 Featured Artists

### [LouRock Main Site](https://lourock.com)
The main landing page featuring all artists, booking information, and contact forms for event organizers and venues.

### [Last Call](https://last-call.lourock.com)
Country rock duo bringing the spirit of the American West to Southern France. Authentic cowboy ballads meet modern rock energy.

### [Tribute Band The Kills](https://the-kills.lourock.com)
Electrifying tribute to the legendary garage rock duo. Raw energy, minimalist sound, maximum impact.

### [Mathieu Schmidt](https://mathieu-schmidt.lourock.com)
Solo artist channeling the lonesome prairie spirit. Introspective folk meets atmospheric soundscapes.

## 🚀 Project Structure

```
lourock/
├── landing/                    # Main website (lourock.com)
├── last-call/            # Last Call band site
├── tribute-band-the-kills/     # The Kills tribute band site
├── mathieu-schmidt/            # Mathieu Schmidt artist site
├── vercel.json                 # Root Vercel configuration
└── DEPLOYMENT.md               # Deployment instructions
```

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Features**: 
  - Server-side rendering for SEO
  - Mobile-responsive design
  - Contact forms
  - Electronic Press Kits (EPK)
  - Design system pages

## 📱 Key Features

- **Professional Design**: Each site has a unique aesthetic matching the artist's style
- **Mobile Friendly**: Fully responsive on all devices
- **SEO Optimized**: Complete metadata and structured data
- **Electronic Press Kits**: Professional booking materials for venues
- **Design Systems**: Each site has a `/design-system` page documenting its visual language
- **Interconnected**: Easy navigation between all sites

## 🏃‍♂️ Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/mathieux51/lourock.git
cd lourock
```

2. Install dependencies for each site:
```bash
cd landing && npm install
cd ../last-call && npm install
cd ../tribute-band-the-kills && npm install
cd ../mathieu-schmidt && npm install
```

3. Run any site locally:
```bash
cd [site-folder]
npm run dev
```

### Important Note for The Kills Site
The Tribute Band The Kills site expects a video file at `tribute-band-the-kills/public/whirling-eyes.mp4`. Add this file before deployment for the video section to work properly.

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to Vercel.

## 🎨 Design Systems

Each site has its own design system accessible at:
- https://lourock.com/design-system
- https://last-call.lourock.com/design-system
- https://the-kills.lourock.com/design-system
- https://mathieu-schmidt.lourock.com/design-system

## 📧 Contact

For booking inquiries, visit the main site at [lourock.com](https://lourock.com) and use the contact form.

## 📄 License

© 2025 LouRock - All rights reserved