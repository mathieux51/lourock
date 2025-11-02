import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://the-kills.lourock.com/fr',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://the-kills.lourock.com/en',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    }
  ]
}
