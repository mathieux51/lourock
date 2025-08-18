import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mathieu Schmidt - Multi-Instrumental Folk Artist | Gloomy Cowboy-Nordic Folk",
  description:
    "Mathieu Schmidt is a multi-instrumental folk artist from Montpellier weaving gloomy melodies across cultures. Playing guitar, oud, bouzouki, singing in French, English & Occitan. Experience continuous audio journeys blending folk, Arabic, Irish, cowboy, blues, rock & Mediterranean traditions.",
  keywords: [
    "Mathieu Schmidt",
    "multi-instrumental folk",
    "gloomy folk",
    "cowboy Nordic",
    "guitar oud bouzouki",
    "French English Occitan",
    "continuous audio experience",
    "Arabic folk",
    "Irish folk",
    "Mediterranean music",
    "cowboy blues",
    "Montpellier",
    "Occitanie",
    "folk artist",
    "world fusion",
    "cultural music",
    "atmospheric folk",
    "wandering minstrel",
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
    title: "Mathieu Schmidt - Multi-Instrumental Folk Artist",
    description:
      "Weaving gloomy melodies across cultures and languages, from dusty cowboy ballads to haunting Arabic maqam. Multi-instrumental folk experiences in French, English & Occitan.",
    url: "https://mathieu-schmidt.lourock.com",
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
    title: "Mathieu Schmidt - Multi-Instrumental Folk Artist",
    description:
      "Weaving gloomy melodies across cultures - guitar, oud, bouzouki. Continuous audio experiences in French, English & Occitan.",
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
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}