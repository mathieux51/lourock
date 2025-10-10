import { Metadata } from 'next'
import { Merriweather, Oswald } from 'next/font/google'
import { TranslationProvider } from '../providers/TranslationProvider'
import '../globals.css'

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
})

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
})

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fr' }
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  
  const titles: Record<string, string> = {
    en: 'Dakota Dreamers - Country Duo from Montpellier',
    fr: 'Dakota Dreamers - Duo Country de Montpellier'
  }

  const descriptions: Record<string, string> = {
    en: 'Dakota Dreamers brings the spirit of the American West to Southern France. A country duo performing across the Occitanie region with authentic cowboy soul and modern energy.',
    fr: 'Dakota Dreamers apporte l\'esprit de l\'Ouest américain dans le Sud de la France. Un duo country se produisant à travers la région Occitanie avec une âme cowboy authentique et une énergie moderne.'
  }

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: ["country music", "duo", "Montpellier", "Occitanie", "American West", "cowboy", "live music", "Southern France"],
    authors: [{ name: "Dakota Dreamers" }],
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow",
    icons: {
      icon: "/favicon.png",
    },
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      type: "website",
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
    },
    alternates: {
      languages: {
        'en': '/en',
        'fr': '/fr'
      }
    }
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  return (
    <html lang={locale}>
      <body className={`${merriweather.variable} ${oswald.variable} antialiased`}>
        <TranslationProvider initialLocale={locale}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  )
}