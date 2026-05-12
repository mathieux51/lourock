import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { TranslationProvider } from '../providers/TranslationProvider'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fr' }
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  
  const titles: Record<string, string> = {
    en: 'LouRock | Music Booking Platform Montpellier - Live Bands Hérault & Occitanie',
    fr: 'LouRock | Plateforme Réservation Musicale Montpellier - Groupes Live Hérault & Occitanie'
  }

  const descriptions: Record<string, string> = {
    en: 'LouRock connects talented live bands from Montpellier and Occitanie with venues and events. Book country, world music, garage rock and folk artists for festivals, weddings and private events in Hérault.',
    fr: 'LouRock connecte les groupes live talentueux de Montpellier et Occitanie avec les salles et événements. Réservez des artistes country, world music, garage rock et folk pour festivals, mariages et événements privés dans l\'Hérault.'
  }

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: locale === 'fr' 
      ? "réserver groupe Montpellier, plateforme musicale Occitanie, groupe live Hérault, musicien mariage Montpellier, concert privé Occitanie, festival Montpellier, booking groupe Hérault, LouRock"
      : "book band Montpellier, music platform Occitanie, live band Hérault, wedding musician Montpellier, private concert Occitanie, festival Montpellier, band booking Hérault, LouRock",
    alternates: {
      canonical: `https://lourock.com/${locale}`,
      languages: {
        'en': 'https://lourock.com/en',
        'fr': 'https://lourock.com/fr'
      }
    },
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      type: "website",
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      url: `https://lourock.com/${locale}`,
      siteName: "LouRock",
    },
    robots: "index, follow",
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
        "@type": "Organization",
        "@id": "https://lourock.com/#organization",
        "name": "LouRock",
        "description": locale === 'fr'
          ? "LouRock est une plateforme de réservation musicale basée à Montpellier. Elle connecte des groupes live professionnels (country, world music, garage rock, folk) avec des salles, festivals et organisateurs d'événements en Occitanie."
          : "LouRock is a music booking platform based in Montpellier. It connects professional live bands (country, world music, garage rock, folk) with venues, festivals and event organizers in Occitanie.",
        "url": "https://lourock.com",
        "email": "contact@lourock.com",
        "location": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Montpellier",
            "addressRegion": "Hérault",
            "addressCountry": "FR",
            "postalCode": "34000"
          }
        },
        "areaServed": [
          { "@type": "City", "name": "Montpellier" },
          { "@type": "City", "name": "Nîmes" },
          { "@type": "City", "name": "Toulouse" },
          { "@type": "City", "name": "Béziers" },
          { "@type": "City", "name": "Sète" },
          { "@type": "City", "name": "Perpignan" },
          { "@type": "AdministrativeArea", "name": "Occitanie" },
          { "@type": "AdministrativeArea", "name": "Hérault" }
        ],
        "member": [
          { "@type": "MusicGroup", "name": "Last Call", "genre": "Country", "url": "https://last-call.lourock.com" },
          { "@type": "MusicGroup", "name": "Les Espanters", "genre": "World Music", "url": "https://les-espanters.lourock.com" },
          { "@type": "MusicGroup", "name": "Tribute Band The Kills", "genre": "Garage Rock", "url": "https://the-kills.lourock.com" },
          { "@type": "MusicGroup", "name": "Mathieu Schmidt", "genre": "Folk", "url": "https://mathieu-schmidt.lourock.com" }
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": locale === 'fr' ? "Réservation de groupes live" : "Live band booking",
              "description": locale === 'fr'
                ? "Réservation de groupes professionnels pour festivals, mariages, événements d'entreprise et concerts privés à Montpellier et en Occitanie"
                : "Professional band booking for festivals, weddings, corporate events and private concerts in Montpellier and Occitanie"
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://lourock.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'fr' ? "Quels groupes sont disponibles sur LouRock ?" : "What bands are available on LouRock?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'fr'
                ? "LouRock propose Last Call (duo country), Les Espanters (world music, oud et lapsteel), Tribute Band The Kills (garage rock) et Mathieu Schmidt (folk multi-instrumental). Tous sont basés à Montpellier."
                : "LouRock features Last Call (country duo), Les Espanters (world music, oud and lapsteel), Tribute Band The Kills (garage rock) and Mathieu Schmidt (multi-instrumental folk). All are based in Montpellier."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'fr' ? "Comment réserver un groupe sur LouRock ?" : "How do you book a band on LouRock?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'fr'
                ? "Contactez LouRock par email à contact@lourock.com avec les détails de votre événement (date, lieu, type d'événement, taille du public). Chaque groupe fournit un dossier de presse électronique complet."
                : "Contact LouRock by email at contact@lourock.com with your event details (date, venue, event type, audience size). Each band provides a complete electronic press kit."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'fr' ? "Dans quelle région joue LouRock ?" : "What region does LouRock cover?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'fr'
                ? "Les groupes LouRock sont basés à Montpellier et se produisent dans toute l'Occitanie : Hérault, Gard, Haute-Garonne. Villes : Montpellier, Nîmes, Toulouse, Béziers, Sète, Perpignan."
                : "LouRock bands are based in Montpellier and perform across Occitanie: Hérault, Gard, Haute-Garonne. Cities: Montpellier, Nîmes, Toulouse, Béziers, Sète, Perpignan."
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
      <body className={inter.className}>
        <TranslationProvider initialLocale={locale}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  )
}