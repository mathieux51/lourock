export function detectLanguage(): string {
  // 1. Check URL parameters (e.g., ?lang=fr)
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    const langParam = params.get('lang')
    if (langParam && isSupported(langParam)) {
      return langParam
    }
  }

  // 2. Check localStorage for saved preference
  if (typeof window !== 'undefined') {
    const savedLang = localStorage.getItem('preferredLanguage')
    if (savedLang && isSupported(savedLang)) {
      return savedLang
    }
  }

  // 3. Check browser language
  if (typeof navigator !== 'undefined') {
    // navigator.language returns something like 'en-US' or 'fr-FR'
    const browserLang = navigator.language.split('-')[0]
    if (isSupported(browserLang)) {
      return browserLang
    }

    // Check all languages in navigator.languages array
    for (const lang of navigator.languages) {
      const shortLang = lang.split('-')[0]
      if (isSupported(shortLang)) {
        return shortLang
      }
    }
  }

  // 4. Default to English
  return 'en'
}

// Helper function to check if a language is supported
function isSupported(lang: string): boolean {
  const supportedLanguages = ['en', 'fr', 'es'] // Add your supported languages here
  return supportedLanguages.includes(lang)
}

// Save language preference
export function saveLanguagePreference(lang: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferredLanguage', lang)
  }
}