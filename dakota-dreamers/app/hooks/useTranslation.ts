import { useContext } from 'react'
import { TranslationContext } from '../providers/TranslationProvider'

export function useTranslation() {
  const context = useContext(TranslationContext)
  
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  
  const { translations, locale, setLocale } = context
  
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: unknown = translations
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        console.warn(`Translation key "${key}" not found`)
        return key
      }
    }
    
    return typeof value === 'string' ? value : key
  }
  
  return { t, locale, setLocale }
}