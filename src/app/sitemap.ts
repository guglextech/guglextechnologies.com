import type { MetadataRoute } from 'next';
import { getAllPosts } from '../../lib/blog';
import { SITE_URL } from '@/lib/seo';

const PAGES = [
  { path: '', priority: 1, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/work', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'daily' },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const now = new Date();

  return [
    ...PAGES.map((page) => ({
      url: `${SITE_URL}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
