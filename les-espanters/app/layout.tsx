import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Les Espanters",
  description: "Mathieu & Manu vous apportent des sons méditerranéens explosifs avec Oud, Guitare, Banjo et riffs électriques",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
