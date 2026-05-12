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
      url: `https://les-espanters.lourock.com/${locale}`,
      siteName: "Les Espanters",
      images: [
        {
          url: "/favicon.png",
          width: 512,
          height: 512,
          alt: "Les Espanters. Mediterranean instrumental duo Montpellier",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: translations.meta.ogTitle,
      description: translations.meta.ogDescription,
      images: ["/favicon.png"],
    },
    alternates: {
      canonical: `https://les-espanters.lourock.com/${locale}`,
      languages: {
        'fr': 'https://les-espanters.lourock.com/fr',
        'en': 'https://les-espanters.lourock.com/en',
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
        "@id": "https://les-espanters.lourock.com/#musicgroup",
        "name": "Les Espanters",
        "description": "Les Espanters est un duo instrumental world music basé à Montpellier, France. Le duo joue de l'oud, de la guitare électrique et de la lapsteel. Leur musique mélange des sonorités méditerranéennes, orientales, folk et blues. Ils sont disponibles pour des concerts, festivals, mariages et événements privés en Occitanie.",
        "genre": ["World Music", "Mediterranean", "Folk", "Oriental", "Instrumental", "Blues"],
        "foundingLocation": {
          "@type": "Place",
          "name": "Montpellier, France"
        },
        "member": [
          {
            "@type": "OrganizationRole",
            "member": {
              "@type": "Person",
              "name": "Membre 1"
            },
            "roleName": ["Oud", "Guitare électrique"]
          },
          {
            "@type": "OrganizationRole",
            "member": {
              "@type": "Person",
              "name": "Membre 2"
            },
            "roleName": ["Lapsteel", "Guitare électrique"]
          }
        ],
        "instrument": ["Oud", "Lapsteel", "Guitare électrique"],
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
          { "@type": "City", "name": "Sète" },
          { "@type": "City", "name": "Perpignan" },
          { "@type": "AdministrativeArea", "name": "Occitanie" },
          { "@type": "AdministrativeArea", "name": "Hérault" }
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Concert live world music",
              "description": "Concert instrumental de 45 à 90 minutes, compositions originales mêlant oud, lapsteel et guitare électrique"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Musique pour mariage",
              "description": "Animation musicale live pour mariages et cérémonies en Hérault et Occitanie"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Musique événement privé",
              "description": "Duo musical pour événements d'entreprise, restaurants et soirées privées à Montpellier"
            }
          }
        ],
        "url": "https://les-espanters.lourock.com",
        "sameAs": [
          "https://www.instagram.com/lesespanters/"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://les-espanters.lourock.com/#localbusiness",
        "name": "Les Espanters",
        "description": "Duo world music disponible pour concerts et événements à Montpellier et en Occitanie. Instruments : oud, lapsteel, guitare électrique.",
        "image": "https://les-espanters.lourock.com/favicon.png",
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
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "priceRange": "€€",
        "areaServed": "Occitanie"
      },
      {
        "@type": "FAQPage",
        "@id": "https://les-espanters.lourock.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quels instruments jouent Les Espanters ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Les Espanters jouent de l'oud (instrument à cordes oriental), de la lapsteel et de la guitare électrique. Ce mélange crée un son unique entre musique méditerranéenne, orientale, folk et blues."
            }
          },
          {
            "@type": "Question",
            "name": "Où sont basés Les Espanters ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Les Espanters sont basés à Montpellier dans l'Hérault. Ils jouent dans toute l'Occitanie : Montpellier, Nîmes, Béziers, Sète, Toulouse, Perpignan et au-delà."
            }
          },
          {
            "@type": "Question",
            "name": "Pour quels événements peut-on réserver Les Espanters ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Les Espanters jouent lors de festivals, concerts privés, mariages, événements d'entreprise et dans des restaurants. Leur set dure entre 45 et 90 minutes de compositions originales."
            }
          },
          {
            "@type": "Question",
            "name": "Quel style de musique jouent Les Espanters ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Les Espanters jouent de la world music instrumentale mélangeant sonorités méditerranéennes, orientales, folk, western et blues. C'est un duo sans chant, uniquement instrumental."
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
      <body className="antialiased">
        <TranslationProvider initialLocale={locale}>
          <LanguageSwitcher />
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
