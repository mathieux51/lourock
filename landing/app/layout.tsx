import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LouRock - Montpellier & Occitanie Music Scene",
  description: "Discover and book local bands from Montpellier and the Occitanie region. Professional musicians for concerts, events, and festivals across Southern France.",
  keywords: "bands Montpellier, musicians Occitanie, concert booking, live music France, Dakota Dreamers, The Kills tribute, Mathieu Schmidt",
  icons: {
    icon: "/lourock-icon.svg",
    shortcut: "/lourock-icon.svg",
    apple: "/lourock-icon.svg",
  },
  openGraph: {
    title: "LouRock - Montpellier & Occitanie Music Scene",
    description: "Book professional local bands for your events in Southern France",
    url: "https://lourock.com",
    siteName: "LouRock",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/lourock-icon.svg",
        width: 200,
        height: 200,
        alt: "LouRock - Rock meets Occitanie",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
