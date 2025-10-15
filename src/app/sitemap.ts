import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://memozy.ai',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Add other static pages here if they exist, e.g.:
    {
      url: 'https://www.memozy.ai/how-to-use-memozy.html',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://memozy.ai/privacy-policy.html',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.memozy.ai/memozy_second_brain.html',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}
