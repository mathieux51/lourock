import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dakota-dreamers.lourock.com'
  const locales = ['en', 'fr']

  const urls = locales.map(locale => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
    alternates: {
      languages: {
        'en': `${baseUrl}/en`,
        'fr': `${baseUrl}/fr`
      }
    }
  }))

  return urls
}
