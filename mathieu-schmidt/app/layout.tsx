import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
    canonical: "/",
  },
  openGraph: {
    title: "Mathieu Schmidt | Artiste Folk Multi-Instrumental Montpellier",
    description:
      "Artiste folk multi-instrumental basé à Montpellier. Concerts atmosphériques mêlant traditions occidentales, orientales et méditerranéennes. Guitare, oud, bouzouki. Disponible pour concerts et festivals dans l'Hérault.",
    url: "https://mathieu-schmidt.lourock.com",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "@id": "https://mathieu-schmidt.lourock.com/#person",
        "name": "Mathieu Schmidt",
        "description": "Artiste folk multi-instrumental basé à Montpellier mêlant traditions occidentales, orientales et méditerranéennes",
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
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}