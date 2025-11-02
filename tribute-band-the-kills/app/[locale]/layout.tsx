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
      url: "https://tributethekills.lourock.com",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale] || titles.fr,
      description: descriptions[locale] || descriptions.fr,
    },
    alternates: {
      languages: {
        'fr': '/fr',
        'en': '/en'
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
        "@id": "https://tributethekills.lourock.com/#musicgroup",
        "name": "Tribute Band The Kills",
        "description": locale === 'fr' 
          ? "Tribute professionnel The Kills à Montpellier - Concert garage rock minimaliste et explosif"
          : "Professional Tribute The Kills in Montpellier - Minimalist and explosive garage rock concert",
        "genre": ["Garage Rock", "Alternative Rock", "Indie Rock"],
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
        "url": "https://tributethekills.lourock.com",
        "email": "contact@lourock.com"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://tributethekills.lourock.com/#localbusiness",
        "name": "Tribute Band The Kills",
        "image": "https://tributethekills.lourock.com/icon.png",
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
