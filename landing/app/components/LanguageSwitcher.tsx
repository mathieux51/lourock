'use client'

import { useTranslation } from '../hooks/useTranslation'
import { usePathname, useRouter } from 'next/navigation'

export function LanguageSwitcher() {
  const { locale, supportedLocales } = useTranslation()
  const pathname = usePathname()
  const router = useRouter()

  const handleLocaleChange = (newLocale: string) => {
    // Get the current pathname without the locale
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')
    
    router.push(newPath)
  }

  return (
    <div className="flex gap-2">
      {supportedLocales.map((lang) => (
        <button
          key={lang}
          onClick={() => handleLocaleChange(lang)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            locale === lang
              ? 'bg-purple-600 text-white'
              : 'text-gray-300 hover:bg-gray-700'
          }`}
          aria-label={`Switch to ${lang.toUpperCase()}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}