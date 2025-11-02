import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Les Espanters | Duo World Music Montpellier - Oud, Guitare & Banjo | Concerts Hérault",
  description: "Les Espanters, duo instrumental basé à Montpellier. Musique méditerranéenne et orientale pour concerts, festivals, mariages et événements privés dans l'Hérault et Occitanie. Oud, guitare électrique, banjo.",
  keywords: "concert Montpellier, duo musical Hérault, groupe live Occitanie, musicien événement Montpellier, world music Montpellier, oud Montpellier, musique orientale Hérault, concert privé Montpellier, mariage musique live Hérault, festival Montpellier, groupe méditerranéen, musique instrumentale événement",
  authors: [{ name: "Les Espanters" }],
  viewport: "width=device-width, initial-scale=1",
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
    title: "Les Espanters | Duo World Music Montpellier",
    description: "Duo instrumental basé à Montpellier - Concerts, festivals et événements privés dans l'Hérault et Occitanie. Oud, guitare électrique, banjo. Musique méditerranéenne et orientale.",
    type: "website",
    locale: "fr_FR",
    url: "https://lesespanters.lourock.com",
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
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
