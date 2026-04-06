import type { MetadataRoute } from 'next';
import { getAllSlugs } from '@/src/lib/contentful';

const BASE_URL = 'https://www.velocitydetailingmt.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/car-detailing-bozeman-mt`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/ceramic-coating-bozeman-mt`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/boat-detailing-bozeman-mt`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/fleet-detailing-bozeman-mt`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.8 },
  ];

  const slugs = await getAllSlugs();
  const blogPages: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
