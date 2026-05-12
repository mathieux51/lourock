import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { TranslationProvider } from '../providers/TranslationProvider'
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export async function generateStaticParams() {
  return [
    { locale: 'fr' },
    { locale: 'en' }
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  
  const titles: Record<string, string> = {
    fr: 'Tribute The Kills Montpellier | Concert Garage Rock Authentique Hérault & Occitanie',
    en: 'Tribute The Kills Montpellier | Authentic Garage Rock Concerts Hérault & Occitanie'
  }

  const descriptions: Record<string, string> = {
    fr: 'Tribute professionnel The Kills basé à Montpellier. Garage rock minimaliste et explosif pour festivals, clubs et événements privés. Réservez votre concert dans l\'Hérault et Occitanie.',
    en: 'Professional Tribute The Kills based in Montpellier. Minimalist and explosive garage rock for festivals, clubs and private events. Book your concert in Hérault and Occitanie.'
  }

  return {
    title: titles[locale] || titles.fr,
    description: descriptions[locale] || descriptions.fr,
    keywords: "tribute band Montpellier, concert The Kills France, garage rock Montpellier, groupe rock Hérault, live music Montpellier, événement rock Hérault, tribute The Kills France, concert garage Occitanie, Alison Mosshart tribute, indie rock Montpellier, réserver concert rock Hérault",
    authors: [{ name: "Tribute Band The Kills" }],
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow",
    icons: {
      icon: [
        { url: "/icon.png", sizes: "any", type: "image/png" },
        { url: "/favicon.ico", sizes: "any", type: "image/x-icon" }
      ],
      shortcut: "/favicon.ico",
      apple: "/icon.png",
    },
    openGraph: {
      title: titles[locale] || titles.fr,
      description: descriptions[locale] || descriptions.fr,
      type: "website",
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      url: `https://the-kills.lourock.com/${locale}`,
      siteName: "Tribute Band The Kills",
      images: [
        {
          url: "/icon.png",
          alt: "Tribute Band The Kills",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: titles[locale] || titles.fr,
      description: descriptions[locale] || descriptions.fr,
      images: ["/icon.png"],
    },
    alternates: {
      canonical: `https://the-kills.lourock.com/${locale}`,
      languages: {
        'fr': 'https://the-kills.lourock.com/fr',
        'en': 'https://the-kills.lourock.com/en'
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
        "@id": "https://the-kills.lourock.com/#musicgroup",
        "name": "Tribute Band The Kills",
        "description": locale === 'fr' 
          ? "Tribute Band The Kills est un duo basé à Montpellier, France, rendant hommage au groupe The Kills. Garage rock minimaliste et explosif avec guitare et chant. Disponible pour concerts, festivals, clubs et événements privés en Hérault et Occitanie."
          : "Tribute Band The Kills is a duo based in Montpellier, France, paying tribute to The Kills. Minimalist and explosive garage rock with guitar and vocals. Available for concerts, festivals, clubs and private events in Hérault and Occitanie.",
        "genre": ["Garage Rock", "Alternative Rock", "Indie Rock", "Post-Punk"],
        "foundingLocation": {
          "@type": "Place",
          "name": "Montpellier, France"
        },
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
              "name": locale === 'fr' ? "Concert tribute The Kills" : "The Kills tribute concert",
              "description": locale === 'fr'
                ? "Concert garage rock de 60 à 90 minutes reprenant le répertoire de The Kills avec l'énergie brute du duo original"
                : "60 to 90 minute garage rock concert covering The Kills repertoire with the raw energy of the original duo"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": locale === 'fr' ? "Concert rock pour événement" : "Rock concert for events",
              "description": locale === 'fr'
                ? "Garage rock explosif pour festivals, clubs, bars et événements privés à Montpellier et Occitanie"
                : "Explosive garage rock for festivals, clubs, bars and private events in Montpellier and Occitanie"
            }
          }
        ],
        "url": "https://the-kills.lourock.com",
        "email": "contact@lourock.com"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://the-kills.lourock.com/#localbusiness",
        "name": "Tribute Band The Kills",
        "description": locale === 'fr'
          ? "Tribute The Kills disponible pour concerts à Montpellier et en Occitanie. Garage rock minimaliste et explosif."
          : "The Kills tribute band available for concerts in Montpellier and Occitanie. Minimalist and explosive garage rock.",
        "image": "https://the-kills.lourock.com/icon.png",
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
        "@id": "https://the-kills.lourock.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'fr' ? "Qu'est-ce que Tribute Band The Kills ?" : "What is Tribute Band The Kills?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'fr'
                ? "Tribute Band The Kills est un duo basé à Montpellier qui rend hommage au groupe indie rock The Kills (Alison Mosshart et Jamie Hince). Ils reproduisent l'énergie brute et le son garage rock minimaliste du duo original."
                : "Tribute Band The Kills is a duo based in Montpellier that pays tribute to the indie rock band The Kills (Alison Mosshart and Jamie Hince). They reproduce the raw energy and minimalist garage rock sound of the original duo."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'fr' ? "Où peut-on voir Tribute Band The Kills en concert ?" : "Where can you see Tribute Band The Kills live?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'fr'
                ? "Tribute Band The Kills se produit à Montpellier et dans toute l'Occitanie : Nîmes, Toulouse, Béziers, Perpignan. Ils jouent dans des clubs, bars, festivals et événements privés."
                : "Tribute Band The Kills performs in Montpellier and across Occitanie: Nîmes, Toulouse, Béziers, Perpignan. They play at clubs, bars, festivals and private events."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'fr' ? "Quel style de musique joue Tribute Band The Kills ?" : "What style of music does Tribute Band The Kills play?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'fr'
                ? "Le duo joue du garage rock, rock alternatif et indie rock dans le style de The Kills. Minimaliste, brut et explosif sur scène."
                : "The duo plays garage rock, alternative rock and indie rock in the style of The Kills. Minimalist, raw and explosive on stage."
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
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <TranslationProvider initialLocale={locale}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
