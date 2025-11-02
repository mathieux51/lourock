import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Tribute The Kills Montpellier | Concert Garage Rock Authentique Hérault & Occitanie",
  description: "Tribute professionnel The Kills basé à Montpellier. Garage rock minimaliste et explosif pour festivals, clubs et événements privés. Réservez votre concert dans l'Hérault et Occitanie.",
  keywords: "tribute band Montpellier, concert The Kills France, garage rock Montpellier, groupe rock Hérault, live music Montpellier, événement rock Hérault, tribute The Kills France, concert garage Occitanie, Alison Mosshart tribute, indie rock Montpellier, réserver concert rock Hérault",
  authors: [{ name: "Tribute Band The Kills" }],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" }
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Tribute The Kills Montpellier | Concert Garage Rock Authentique",
    description: "Tribute professionnel The Kills basé à Montpellier. Garage rock minimaliste et explosif pour festivals, clubs et événements dans l'Hérault et Occitanie.",
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    url: "https://tributethekills.lourock.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tribute The Kills Montpellier | Garage Rock",
    description: "Tribute professionnel The Kills basé à Montpellier. Concerts garage rock dans l'Hérault et Occitanie.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
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
        "@id": "https://tributethekills.lourock.com/#musicgroup",
        "name": "Tribute Band The Kills",
        "description": "Tribute professionnel The Kills à Montpellier - Concert garage rock minimaliste et explosif",
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
    <html lang="fr">
      <head>
        <link rel="alternate" hrefLang="en" href="/en" />
        <link rel="alternate" hrefLang="fr" href="/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
