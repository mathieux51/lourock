import { MetadataRoute } from 'next'

const baseUrl = 'https://mathieu-schmidt.lourock.com'
const locales = ['fr', 'en'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = []

  locales.forEach((locale) => {
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: locale === 'fr' ? 1.0 : 0.8,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr`,
          en: `${baseUrl}/en`,
        },
      },
    })
  })

  return routes
}
