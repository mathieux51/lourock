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
            url: "/hero.png",
            width: 1290,
            height: 1720,
            alt: "Mathieu Schmidt - Multi-Instrumental Folk Artist",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Mathieu Schmidt | Folk Multi-Instrumental Montpellier",
        description:
          "Artiste folk basé à Montpellier - Guitare, oud, bouzouki. Concerts atmosphériques mêlant traditions occidentales et orientales.",
        images: ["/hero.png"],
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
          url: "/hero.png",
          width: 1290,
          height: 1720,
          alt: "Mathieu Schmidt - Multi-Instrumental Folk Artist",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Mathieu Schmidt | Multi-Instrumental Folk Montpellier",
      description:
        "Folk artist based in Montpellier - Guitar, oud, bouzouki. Atmospheric concerts blending Western and Eastern traditions.",
      images: ["/hero.png"],
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
          ? "Mathieu Schmidt est un artiste folk multi-instrumental basé à Montpellier, France. Il joue de la guitare, de l'oud, du bouzouki et de la lapsteel. Il chante en français, anglais et occitan. Sa musique mélange folk atmosphérique, traditions occidentales, orientales et méditerranéennes. Disponible pour concerts et festivals en Hérault et Occitanie."
          : "Mathieu Schmidt is a multi-instrumental folk artist based in Montpellier, France. He plays guitar, oud, bouzouki and lapsteel. He sings in French, English and Occitan. His music blends atmospheric folk, Western, Eastern and Mediterranean traditions. Available for concerts and festivals in Hérault and Occitanie.",
        "genre": ["Folk", "World Music", "Americana", "Mediterranean", "Western", "Atmospheric Folk"],
        "foundingLocation": {
          "@type": "Place",
          "name": "Montpellier, France"
        },
        "member": [
          {
            "@type": "OrganizationRole",
            "member": {
              "@type": "Person",
              "name": "Mathieu Schmidt"
            },
            "roleName": ["Vocals", "Guitar", "Oud", "Bouzouki", "Lapsteel"]
          }
        ],
        "instrument": ["Guitar", "Oud", "Bouzouki", "Lapsteel"],
        "numberOfMembers": 1,
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
          { "@type": "AdministrativeArea", "name": "Occitanie" },
          { "@type": "AdministrativeArea", "name": "Hérault" }
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": locale === "fr" ? "Concert folk solo" : "Solo folk concert",
              "description": locale === "fr"
                ? "Concert solo atmosphérique de 45 à 90 minutes. Guitare, oud, bouzouki, lapsteel et chant en français, anglais et occitan."
                : "45 to 90 minute atmospheric solo concert. Guitar, oud, bouzouki, lapsteel and vocals in French, English and Occitan."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": locale === "fr" ? "Musique pour événements" : "Music for events",
              "description": locale === "fr"
                ? "Musique folk atmosphérique pour festivals, événements privés et mariages en Occitanie"
                : "Atmospheric folk music for festivals, private events and weddings in Occitanie"
            }
          }
        ],
        "url": "https://mathieu-schmidt.lourock.com",
        "email": "contact@lourock.com"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://mathieu-schmidt.lourock.com/#localbusiness",
        "name": "Mathieu Schmidt",
        "description": locale === "fr"
          ? "Artiste folk multi-instrumental disponible pour concerts à Montpellier et en Occitanie. Guitare, oud, bouzouki, lapsteel. Chant en français, anglais et occitan."
          : "Multi-instrumental folk artist available for concerts in Montpellier and Occitanie. Guitar, oud, bouzouki, lapsteel. Vocals in French, English and Occitan.",
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
      },
      {
        "@type": "FAQPage",
        "@id": "https://mathieu-schmidt.lourock.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === "fr" ? "Quels instruments joue Mathieu Schmidt ?" : "What instruments does Mathieu Schmidt play?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === "fr"
                ? "Mathieu Schmidt joue de la guitare acoustique et électrique, de l'oud (instrument à cordes oriental), du bouzouki et de la lapsteel. Il chante en français, anglais et occitan."
                : "Mathieu Schmidt plays acoustic and electric guitar, oud (oriental string instrument), bouzouki and lapsteel. He sings in French, English and Occitan."
            }
          },
          {
            "@type": "Question",
            "name": locale === "fr" ? "Quel style de musique joue Mathieu Schmidt ?" : "What style of music does Mathieu Schmidt play?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === "fr"
                ? "Mathieu Schmidt joue du folk atmosphérique mêlant traditions occidentales, orientales et méditerranéennes. Son style incorpore des influences americana, western desert, world music et chanson occitane."
                : "Mathieu Schmidt plays atmospheric folk blending Western, Eastern and Mediterranean traditions. His style incorporates americana, western desert, world music and Occitan song influences."
            }
          },
          {
            "@type": "Question",
            "name": locale === "fr" ? "Où est basé Mathieu Schmidt ?" : "Where is Mathieu Schmidt based?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === "fr"
                ? "Mathieu Schmidt est basé à Montpellier dans l'Hérault. Il se produit dans toute l'Occitanie : Montpellier, Nîmes, Toulouse, Béziers, Sète et au-delà."
                : "Mathieu Schmidt is based in Montpellier in Hérault. He performs across Occitanie: Montpellier, Nîmes, Toulouse, Béziers, Sète and beyond."
            }
          },
          {
            "@type": "Question",
            "name": locale === "fr" ? "En quelles langues chante Mathieu Schmidt ?" : "What languages does Mathieu Schmidt sing in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === "fr"
                ? "Mathieu Schmidt chante en français, anglais et occitan. Cette diversité linguistique reflète son ancrage dans les traditions méditerranéennes et sa portée internationale."
                : "Mathieu Schmidt sings in French, English and Occitan. This linguistic diversity reflects his roots in Mediterranean traditions and his international reach."
            }
          }
        ]
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
