import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mathieu Schmidt - Solo Folk Artist | Introspective Prairie Music",
  description: "Mathieu Schmidt is a solo folk artist from Montpellier channeling the lonesome prairie spirit through introspective folk and atmospheric soundscapes. Performing across Occitanie.",
  keywords: [
    "Mathieu Schmidt",
    "folk artist",
    "solo musician",
    "prairie music",
    "atmospheric folk",
    "introspective music",
    "Montpellier",
    "Occitanie",
    "indie folk",
    "contemplative music",
    "acoustic",
    "singer-songwriter"
  ],
  authors: [{ name: "Mathieu Schmidt" }],
  creator: "Mathieu Schmidt",
  publisher: "Mathieu Schmidt",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mathieu-schmidt.lourock.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Mathieu Schmidt - Solo Folk Artist",
    description: "Channeling the lonesome prairie spirit through introspective folk and atmospheric soundscapes.",
    url: 'https://mathieu-schmidt.lourock.com',
    siteName: 'Mathieu Schmidt',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mathieu Schmidt - Solo Folk Artist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mathieu Schmidt - Solo Folk Artist',
    description: 'Channeling the lonesome prairie spirit through introspective folk and atmospheric soundscapes.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
