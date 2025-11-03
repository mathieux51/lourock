import type { Metadata } from "next";
import type { Viewport } from "next";
import "../globals.css";
import { TranslationProvider } from '../providers/TranslationProvider'
import { LanguageSwitcher } from '../components/LanguageSwitcher'
import frTranslations from '../translations/fr.json'
import enTranslations from '../translations/en.json'

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }]
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const translations = locale === 'fr' ? frTranslations : enTranslations

  return {
    title: translations.meta.title,
    description: translations.meta.description,
    keywords: translations.meta.keywords,
    authors: [{ name: "Les Espanters" }],
    robots: "index, follow",
    icons: {
      icon: [
        {
          url: '/favicon.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          url: '/favicon.png',
          sizes: '16x16',
          type: 'image/png',
        }
      ],
      shortcut: '/favicon.png',
      apple: '/favicon.png',
    },
    openGraph: {
      title: translations.meta.ogTitle,
      description: translations.meta.ogDescription,
      type: "website",
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      url: `https://lesespanters.lourock.com/${locale}`,
    },
    alternates: {
      canonical: `https://lesespanters.lourock.com/${locale}`,
      languages: {
        'fr': 'https://lesespanters.lourock.com/fr',
        'en': 'https://lesespanters.lourock.com/en',
      },
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "@id": "https://lesespanters.lourock.com/#musicgroup",
        "name": "Les Espanters",
        "description": "Duo instrumental Montpellier - Oud, guitare électrique, banjo et world music",
        "genre": ["World Music", "Mediterranean", "Folk", "Oriental", "Instrumental"],
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
          },
          {
            "@type": "City",
            "name": "Béziers"
          },
          {
            "@type": "City",
            "name": "Sète"
          }
        ],
        "url": "https://lesespanters.lourock.com",
        "sameAs": [
          "https://www.instagram.com/lesespanters/"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://lesespanters.lourock.com/#localbusiness",
        "name": "Les Espanters",
        "image": "https://lesespanters.lourock.com/favicon.png",
        "telephone": "+33-contact-via-website",
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
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "priceRange": "€€",
        "servesCuisine": "Entertainment",
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
      <body className="antialiased">
        <TranslationProvider initialLocale={locale}>
          <LanguageSwitcher />
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
