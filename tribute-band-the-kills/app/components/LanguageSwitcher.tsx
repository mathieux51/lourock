'use client'

import { useTranslation } from '../hooks/useTranslation'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

export function LanguageSwitcher() {
  const { locale } = useTranslation()
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' }
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLocaleChange = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')
    router.push(newPath)
    setIsOpen(false)
  }

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm kills-mono transition-colors hover:text-kills-red"
        aria-label="Select language"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 16 16" 
          style={{ display: 'block', height: '16px', width: '16px', fill: 'currentColor' }} 
          aria-hidden="true" 
          role="presentation" 
          focusable="false"
        >
          <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
        </svg>
        <span>{currentLanguage.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-kills-charcoal border border-kills-dark-gray rounded-lg shadow-lg overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLocaleChange(lang.code)}
              className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                locale === lang.code
                  ? 'bg-kills-red text-kills-white'
                  : 'text-kills-light-gray hover:bg-kills-dark-gray'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
