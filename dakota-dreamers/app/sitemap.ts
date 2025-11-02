import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dakota-dreamers.lourock.com'
  const locales = ['fr', 'en']

  const urls = locales.map((locale, index) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: locale === 'fr' ? 1 : 0.8,
    alternates: {
      languages: {
        'fr': `${baseUrl}/fr`,
        'en': `${baseUrl}/en`
      }
    }
  }))

  return urls
}
