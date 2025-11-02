import type { Metadata } from "next";
import "../globals.css";
import { TranslationProvider } from "../providers/TranslationProvider";

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

type Params = Promise<{
  locale: string;
}>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "fr") {
    return {
      title: "Mathieu Schmidt | Artiste Folk Multi-Instrumental Montpellier - Oud, Guitare, Bouzouki",
      description:
        "Mathieu Schmidt, artiste folk multi-instrumental basé à Montpellier. Concerts folk atmosphériques mêlant traditions occidentales, orientales et méditerranéennes. Guitare, oud, bouzouki. Chant en français, anglais et occitan. Disponible pour concerts et festivals dans l'Hérault et Occitanie.",
      icons: {
        icon: '/favicon.png',
      },
      keywords: [
        "concert folk Montpellier",
        "artiste folk Hérault",
        "musicien multi-instrumental Montpellier",
        "oud Montpellier",
        "bouzouki France",
        "musique folk Occitanie",
        "concert acoustique Montpellier",
        "musique méditerranéenne Hérault",
        "folk atmosphérique Montpellier",
        "western desert music",
        "chanson occitan",
        "festival folk Occitanie",
        "Mathieu Schmidt",
        "concert fusion culturelle Montpellier",
        "événement folk Hérault",
        "world music Montpellier",
      ],
      authors: [{ name: "Mathieu Schmidt" }],
      creator: "Mathieu Schmidt",
      publisher: "Lou Rock Collective",
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      metadataBase: new URL("https://mathieu-schmidt.lourock.com"),
      alternates: {
        canonical: "/fr",
        languages: {
          fr: "/fr",
          en: "/en",
        },
      },
      openGraph: {
        title: "Mathieu Schmidt | Artiste Folk Multi-Instrumental Montpellier",
        description:
          "Artiste folk multi-instrumental basé à Montpellier. Concerts atmosphériques mêlant traditions occidentales, orientales et méditerranéennes. Guitare, oud, bouzouki. Disponible pour concerts et festivals dans l'Hérault.",
        url: "https://mathieu-schmidt.lourock.com/fr",
        siteName: "Mathieu Schmidt",
        locale: "fr_FR",
        type: "website",
        images: [
          {
            url: "/og-mathieu-schmidt.jpg",
            width: 1200,
            height: 630,
            alt: "Mathieu Schmidt - Multi-Instrumental Folk Artist",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Mathieu Schmidt | Folk Multi-Instrumental Montpellier",
        description:
          "Artiste folk basé à Montpellier - Guitare, oud, bouzouki. Concerts atmosphériques mêlant traditions occidentales et orientales.",
        images: ["/og-mathieu-schmidt.jpg"],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      other: {
        "theme-color": "#87a96b",
        "color-scheme": "dark",
      },
    };
  }

  // English metadata
  return {
    title: "Mathieu Schmidt | Multi-Instrumental Folk Artist Montpellier - Oud, Guitar, Bouzouki",
    description:
      "Mathieu Schmidt, multi-instrumental folk artist based in Montpellier. Atmospheric folk concerts blending Western, Eastern and Mediterranean traditions. Guitar, oud, bouzouki. Singing in French, English and Occitan. Available for concerts and festivals in Hérault and Occitanie.",
    icons: {
      icon: '/favicon.png',
    },
    keywords: [
      "folk concert Montpellier",
      "folk artist Hérault",
      "multi-instrumental musician Montpellier",
      "oud Montpellier",
      "bouzouki France",
      "folk music Occitanie",
      "acoustic concert Montpellier",
      "Mediterranean music Hérault",
      "atmospheric folk Montpellier",
      "western desert music",
      "occitan song",
      "folk festival Occitanie",
      "Mathieu Schmidt",
      "cultural fusion concert Montpellier",
      "folk event Hérault",
      "world music Montpellier",
    ],
    authors: [{ name: "Mathieu Schmidt" }],
    creator: "Mathieu Schmidt",
    publisher: "Lou Rock Collective",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://mathieu-schmidt.lourock.com"),
    alternates: {
      canonical: "/en",
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
    openGraph: {
      title: "Mathieu Schmidt | Multi-Instrumental Folk Artist Montpellier",
      description:
        "Multi-instrumental folk artist based in Montpellier. Atmospheric concerts blending Western, Eastern and Mediterranean traditions. Guitar, oud, bouzouki. Available for concerts and festivals in Hérault.",
      url: "https://mathieu-schmidt.lourock.com/en",
      siteName: "Mathieu Schmidt",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/og-mathieu-schmidt.jpg",
          width: 1200,
          height: 630,
          alt: "Mathieu Schmidt - Multi-Instrumental Folk Artist",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Mathieu Schmidt | Multi-Instrumental Folk Montpellier",
      description:
        "Folk artist based in Montpellier - Guitar, oud, bouzouki. Atmospheric concerts blending Western and Eastern traditions.",
      images: ["/og-mathieu-schmidt.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "theme-color": "#87a96b",
      "color-scheme": "dark",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  const { locale } = await params;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "@id": "https://mathieu-schmidt.lourock.com/#person",
        "name": "Mathieu Schmidt",
        "description": locale === "fr" 
          ? "Artiste folk multi-instrumental basé à Montpellier mêlant traditions occidentales, orientales et méditerranéennes"
          : "Multi-instrumental folk artist based in Montpellier blending Western, Eastern and Mediterranean traditions",
        "genre": ["Folk", "World Music", "Americana", "Mediterranean", "Western"],
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
        "url": "https://mathieu-schmidt.lourock.com",
        "email": "contact@lourock.com"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://mathieu-schmidt.lourock.com/#localbusiness",
        "name": "Mathieu Schmidt",
        "image": "https://mathieu-schmidt.lourock.com/favicon.png",
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
    <html lang={locale} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <TranslationProvider initialLocale={locale}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
