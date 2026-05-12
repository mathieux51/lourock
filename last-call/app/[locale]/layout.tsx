import { Metadata } from 'next'
import { Viewport } from 'next'
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  
  const titles: Record<string, string> = {
    en: 'Last Call | Country Duo Montpellier - Western & Americana Concerts Hérault',
    fr: 'Last Call | Duo Country Montpellier - Concerts Western & Americana Hérault'
  }

  const descriptions: Record<string, string> = {
    en: 'Last Call, authentic country duo based in Montpellier. American West spirit meets Southern France. Book country concerts for festivals, private events and weddings in Hérault and Occitanie.',
    fr: 'Last Call, duo country authentique basé à Montpellier. L\'esprit de l\'Ouest américain dans le Sud de la France. Réservez vos concerts country pour festivals, événements privés et mariages dans l\'Hérault et Occitanie.'
  }

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: ["concert country Montpellier", "duo country Hérault", "groupe country Occitanie", "musique western Montpellier", "concert americana Hérault", "mariage country Montpellier", "événement privé country", "festival country Occitanie", "cowboy music France", "live country music Montpellier", "réserver groupe country Hérault", "Last Call"],
    authors: [{ name: "Last Call" }],
    robots: "index, follow",
    icons: {
      icon: "/favicon.png",
    },
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      type: "website",
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      url: `https://last-call.lourock.com/${locale}`,
      siteName: "Last Call",
      images: [
        {
          url: "/favicon.png",
          width: 512,
          height: 512,
          alt: "Last Call. Country duo Montpellier",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      images: ["/favicon.png"],
    },
    alternates: {
      canonical: `https://last-call.lourock.com/${locale}`,
      languages: {
        'en': 'https://last-call.lourock.com/en',
        'fr': 'https://last-call.lourock.com/fr'
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
        "@id": "https://last-call.lourock.com/#musicgroup",
        "name": "Last Call",
        "description": locale === 'fr' 
          ? "Last Call est un duo country basé à Montpellier, France. Ils jouent de la guitare acoustique, du piano, du bouzouki et de la guitare lead. Leur musique mélange country américaine, western et americana avec un héritage méditerranéen. Disponibles pour concerts, festivals, mariages et événements privés en Occitanie."
          : "Last Call is a country duo based in Montpellier, France. They play acoustic guitar, piano, bouzouki and lead guitar. Their music blends American country, western and americana with Mediterranean heritage. Available for concerts, festivals, weddings and private events in Occitanie.",
        "genre": ["Country", "Western", "Americana", "Folk"],
        "foundingLocation": {
          "@type": "Place",
          "name": "Montpellier, France"
        },
        "member": [
          {
            "@type": "OrganizationRole",
            "member": {
              "@type": "Person",
              "name": "Rob"
            },
            "roleName": ["Lead vocals", "Acoustic guitar", "Piano"]
          },
          {
            "@type": "OrganizationRole",
            "member": {
              "@type": "Person",
              "name": "Mathieu"
            },
            "roleName": ["Side vocals", "Lead guitar", "Bouzouki", "Banjo"]
          }
        ],
        "instrument": ["Acoustic guitar", "Piano", "Lead guitar", "Bouzouki", "Banjo"],
        "numberOfMembers": 2,
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
          { "@type": "City", "name": "Montpellier" },
          { "@type": "City", "name": "Nîmes" },
          { "@type": "City", "name": "Toulouse" },
          { "@type": "City", "name": "Béziers" },
          { "@type": "City", "name": "Perpignan" },
          { "@type": "AdministrativeArea", "name": "Occitanie" },
          { "@type": "AdministrativeArea", "name": "Hérault" }
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": locale === 'fr' ? "Concert country live" : "Live country concert",
              "description": locale === 'fr' 
                ? "Concert country acoustique de 45 à 90 minutes, reprises et compositions originales"
                : "45 to 90 minute acoustic country concert, covers and original compositions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": locale === 'fr' ? "Musique country pour mariage" : "Country music for weddings",
              "description": locale === 'fr'
                ? "Animation musicale country pour mariages et cérémonies en Hérault et Occitanie"
                : "Country music entertainment for weddings and ceremonies in Hérault and Occitanie"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": locale === 'fr' ? "Événement privé country" : "Private country event",
              "description": locale === 'fr'
                ? "Duo country pour événements d'entreprise, restaurants et soirées privées à Montpellier"
                : "Country duo for corporate events, restaurants and private parties in Montpellier"
            }
          }
        ],
        "url": "https://last-call.lourock.com",
        "email": "contact@lourock.com"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://last-call.lourock.com/#localbusiness",
        "name": "Last Call",
        "description": locale === 'fr'
          ? "Duo country disponible pour concerts et événements à Montpellier et en Occitanie. Country, western, americana."
          : "Country duo available for concerts and events in Montpellier and Occitanie. Country, western, americana.",
        "image": "https://last-call.lourock.com/favicon.png",
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
      },
      {
        "@type": "FAQPage",
        "@id": "https://last-call.lourock.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'fr' ? "Quel style de musique joue Last Call ?" : "What style of music does Last Call play?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'fr'
                ? "Last Call joue de la musique country, western et americana. Le duo mélange la tradition du storytelling américain avec un héritage méditerranéen, pour un son country authentique ancré dans le Sud de la France."
                : "Last Call plays country, western and americana music. The duo blends American storytelling tradition with Mediterranean heritage, creating an authentic country sound rooted in Southern France."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'fr' ? "Où est basé Last Call ?" : "Where is Last Call based?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'fr'
                ? "Last Call est basé à Montpellier dans l'Hérault. Le duo se produit dans toute l'Occitanie : Montpellier, Nîmes, Toulouse, Béziers, Perpignan et au-delà."
                : "Last Call is based in Montpellier in Hérault. The duo performs across Occitanie: Montpellier, Nîmes, Toulouse, Béziers, Perpignan and beyond."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'fr' ? "Quels instruments joue Last Call ?" : "What instruments does Last Call play?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'fr'
                ? "Last Call joue de la guitare acoustique, du piano, de la guitare lead, du bouzouki et du banjo. Le duo propose aussi du chant en anglais."
                : "Last Call plays acoustic guitar, piano, lead guitar, bouzouki and banjo. The duo also offers vocals in English."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'fr' ? "Pour quels événements peut-on réserver Last Call ?" : "What events can you book Last Call for?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'fr'
                ? "Last Call est disponible pour des festivals, concerts privés, mariages, événements d'entreprise et soirées dans des bars ou restaurants. Le set dure entre 45 et 90 minutes."
                : "Last Call is available for festivals, private concerts, weddings, corporate events and bar/restaurant gigs. Sets last between 45 and 90 minutes."
            }
          }
        ]
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