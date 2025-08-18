import type { Metadata } from "next";
import { Merriweather, Oswald } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dakota Dreamers - Country Rock Duo from Montpellier",
  description: "Dakota Dreamers brings the spirit of the American West to Southern France. A country rock duo performing across the Occitanie region with authentic cowboy soul and modern rock energy.",
  keywords: ["country music", "rock duo", "Montpellier", "Occitanie", "American West", "cowboy", "live music", "Southern France"],
  authors: [{ name: "Dakota Dreamers" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Dakota Dreamers - Country Rock Duo",
    description: "Authentic American West spirit meets Southern France. Country rock duo bringing cowboy soul to the Occitanie region.",
    type: "website",
    locale: "en_US",
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
        className={`${merriweather.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
