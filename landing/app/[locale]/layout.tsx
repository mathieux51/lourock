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

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const titles: Record<string, string> = {
    en: 'LouRock - The Sound of Southern France',
    fr: 'LouRock - Le Son du Sud de la France',
    es: 'LouRock - El Sonido del Sur de Francia'
  }

  const descriptions: Record<string, string> = {
    en: 'Connecting talented bands from Montpellier & Occitanie with venues across the region',
    fr: 'Connecter les groupes talentueux de Montpellier et Occitanie avec les salles de la région',
    es: 'Conectando bandas talentosas de Montpellier y Occitania con locales en toda la región'
  }

  return {
    title: titles[params.locale] || titles.en,
    description: descriptions[params.locale] || descriptions.en,
    alternates: {
      languages: {
        'en': '/en',
        'fr': '/fr',
        'es': '/es'
      }
    }
  }
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <TranslationProvider initialLocale={params.locale}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  )
}