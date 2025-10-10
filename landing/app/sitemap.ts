import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lourock.com'
  const locales = ['en', 'fr', 'es']
  const routes = ['', '/#bands', '/#about', '/#contact']

  const urls = locales.flatMap(locale => 
    routes.map(route => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: locales.reduce((acc, l) => ({
          ...acc,
          [l]: `${baseUrl}/${l}${route}`
        }), {})
      }
    }))
  )

  return urls
}