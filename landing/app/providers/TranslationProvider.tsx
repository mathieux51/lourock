'use client'

import React, { createContext, useState, useEffect, ReactNode } from 'react'
import en from '../translations/en.json'
import { saveLanguagePreference } from '../utils/detectLanguage'

type Translations = typeof en

interface TranslationContextType {
  translations: Translations
  locale: string
  setLocale: (locale: string) => void
  supportedLocales: string[]
}

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

const loadTranslations = async (locale: string): Promise<Translations> => {
  try {
    const translations = await import(`../translations/${locale}.json`)
    return translations.default
  } catch {
    console.warn(`Translation file for locale "${locale}" not found, falling back to English`)
    return en
  }
}

export function TranslationProvider({ 
  children, 
  initialLocale = 'en' 
}: { 
  children: ReactNode
  initialLocale?: string 
}) {
  const [locale, setLocale] = useState(initialLocale)
  const [translations, setTranslations] = useState<Translations>(en)
  const supportedLocales = ['en', 'fr'] // Update this when you add new translations

  useEffect(() => {
    loadTranslations(locale).then(setTranslations)
    saveLanguagePreference(locale)
  }, [locale])

  return (
    <TranslationContext.Provider value={{ translations, locale, setLocale, supportedLocales }}>
      {children}
    </TranslationContext.Provider>
  )
}