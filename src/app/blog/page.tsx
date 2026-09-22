import type { Metadata } from 'next';
import SiteShell from '@/components/SiteShell';
import SiteContainer from '@/components/SiteContainer';
import JsonLd from '@/components/JsonLd';
import { estimateReadingMinutes, getAllPosts, getCategories } from '../../../lib/blog';
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  absoluteUrl,
  blogJsonLd,
  breadcrumbJsonLd,
} from '@/lib/seo';
import BlogClient, { type BlogListPost } from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog',
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: `${SITE_NAME} Blog`,
    description: SITE_DESCRIPTION,
    url: absoluteUrl('/blog'),
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} Blog`,
    description: SITE_DESCRIPTION,
  },
};

export default function Blog() {
  const allPosts = getAllPosts();
  const posts: BlogListPost[] = allPosts.map(({ content, ...post }) => ({
    ...post,
    readingMinutes: estimateReadingMinutes(content),
  }));
  const categories = getCategories();

  return (
    <SiteShell>
      <JsonLd data={blogJsonLd(allPosts)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />
      <section className="bg-background">
        <SiteContainer className="py-10 md:py-14" narrow>
          <h1 className="sr-only">Blog</h1>
          <BlogClient posts={posts} categories={categories} />
        </SiteContainer>
      </section>
    </SiteShell>
  );
}
