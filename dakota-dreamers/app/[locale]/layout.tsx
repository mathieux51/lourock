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
    en: 'Dakota Dreamers | Country Duo Montpellier - Western & Americana Concerts Hérault',
    fr: 'Dakota Dreamers | Duo Country Montpellier - Concerts Western & Americana Hérault'
  }

  const descriptions: Record<string, string> = {
    en: 'Dakota Dreamers, authentic country duo based in Montpellier. American West spirit meets Southern France. Book country concerts for festivals, private events and weddings in Hérault and Occitanie.',
    fr: 'Dakota Dreamers, duo country authentique basé à Montpellier. L\'esprit de l\'Ouest américain dans le Sud de la France. Réservez vos concerts country pour festivals, événements privés et mariages dans l\'Hérault et Occitanie.'
  }

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: ["concert country Montpellier", "duo country Hérault", "groupe country Occitanie", "musique western Montpellier", "concert americana Hérault", "mariage country Montpellier", "événement privé country", "festival country Occitanie", "cowboy music France", "live country music Montpellier", "réserver groupe country Hérault", "Dakota Dreamers"],
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
      url: "https://dakotadreamers.lourock.com",
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
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "@id": "https://dakotadreamers.lourock.com/#musicgroup",
        "name": "Dakota Dreamers",
        "description": locale === 'fr' 
          ? "Duo country de Montpellier apportant l'esprit de l'Ouest américain en Occitanie"
          : "Country duo from Montpellier bringing American West spirit to Southern France",
        "genre": ["Country", "Western", "Americana", "Folk"],
        "memberOf": {
          "@type": "Organization",
          "name": "LouRock"
        },
        "location": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Montpellier",
            "addressRegion": "Hérault",
            "addressCountry": "FR",
            "postalCode": "34000"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 43.6108,
            "longitude": 3.8767
          }
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Montpellier"
          },
          {
            "@type": "City",
            "name": "Nîmes"
          },
          {
            "@type": "City",
            "name": "Toulouse"
          }
        ],
        "url": "https://dakotadreamers.lourock.com",
        "email": "contact@lourock.com"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://dakotadreamers.lourock.com/#localbusiness",
        "name": "Dakota Dreamers",
        "image": "https://dakotadreamers.lourock.com/favicon.png",
        "email": "contact@lourock.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Montpellier",
          "addressRegion": "Hérault",
          "addressCountry": "FR",
          "postalCode": "34000"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 43.6108,
          "longitude": 3.8767
        },
        "priceRange": "€€",
        "areaServed": "Occitanie"
      }
    ]
  };
  
  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${merriweather.variable} ${oswald.variable} antialiased`}>
        <TranslationProvider initialLocale={locale}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  )
}