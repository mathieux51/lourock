import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'fr']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  // Check Accept-Language header for fr
  const acceptLanguage = request.headers.get('Accept-Language')
  if (acceptLanguage) {
    const languages = acceptLanguage.split(',')
    for (const lang of languages) {
      const locale = lang.split('-')[0].trim().toLowerCase()
      if (locale === 'fr') {
        return 'fr'
      }
    }
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Check if the pathname already includes a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (!pathnameHasLocale) {
    // For root path, redirect based on Accept-Language or default to /en
    const locale = pathname === '/' ? getLocale(request) : defaultLocale
    const newUrl = new URL(`/${locale}${pathname}`, request.url)
    
    // Preserve query parameters
    newUrl.search = request.nextUrl.search
    
    return NextResponse.redirect(newUrl)
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api)
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)'
  ]
}