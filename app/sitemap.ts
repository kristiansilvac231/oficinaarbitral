import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { getAllPostSlugs } from '@/lib/blog'

const staticRoutes: Array<{
  url: string
  lastModified: Date
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}> = [
  { url: '/', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
  {
    url: '/que-es-un-juicio-arbitral',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  { url: '/servicios', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  {
    url: '/para-jueces-arbitros',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: '/para-comuneros-herederos',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  { url: '/planes', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  {
    url: '/preguntas-frecuentes',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  { url: '/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  { url: '/nosotros', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  { url: '/contacto', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSlugs = getAllPostSlugs()
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticRoutes.map((route) => ({
      ...route,
      url: `${SITE_URL}${route.url}`,
    })),
    ...blogRoutes,
  ]
}
