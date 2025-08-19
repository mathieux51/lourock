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
  title: "Tribute Band The Kills | Raw Garage Rock Tribute | Occitanie",
  description: "Professional tribute to The Kills performing raw garage rock hits across Occitanie. Experience the minimalist sound and raw energy of Alison Mosshart and Jamie Hince recreated live.",
  keywords: "The Kills tribute band, garage rock, Occitanie, live music, Alison Mosshart, Jamie Hince, VV, Hotel, tribute concert",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Tribute Band The Kills",
    description: "Raw garage rock tribute to The Kills performing across Occitanie",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tribute Band The Kills",
    description: "Raw garage rock tribute to The Kills performing across Occitanie",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
