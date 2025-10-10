import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { TranslationProvider } from '../providers/TranslationProvider'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fr' }
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  
  const titles: Record<string, string> = {
    en: 'LouRock - The Sound of Southern France',
    fr: 'LouRock - Le Son du Sud de la France'
  }

  const descriptions: Record<string, string> = {
    en: 'Connecting talented bands from Montpellier & Occitanie with venues across the region',
    fr: 'Connecter les groupes talentueux de Montpellier et Occitanie avec les salles de la région'
  }

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      languages: {
        'en': '/en',
        'fr': '/fr'
      }
    }
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <TranslationProvider initialLocale={locale}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  )
}