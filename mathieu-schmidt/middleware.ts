import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['fr', 'en']
const defaultLocale = 'fr'

function getLocale(request: NextRequest): string {
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
  
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (!pathnameHasLocale) {
    const locale = pathname === '/' ? getLocale(request) : defaultLocale
    const newUrl = new URL(`/${locale}${pathname}`, request.url)
    
    newUrl.search = request.nextUrl.search
    
    return NextResponse.redirect(newUrl)
  }
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|icon.png|robots.txt|sitemap.xml|.*\\..*).*)'
  ]
}
