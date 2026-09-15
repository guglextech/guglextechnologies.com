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
  const categories = getCategories().sort((a, b) => a.localeCompare(b));

  return (
    <SiteShell>
      <JsonLd data={blogJsonLd(allPosts)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/blog' },
          { name: 'Blog', path: '/blog' },
        ])}
      />
      <section className="bg-background">
        <SiteContainer className="py-12 md:py-16" narrow>
          <p className="mb-2 text-center text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Blog
          </p>
          <h1 className="text-center text-2xl font-medium tracking-tight text-foreground md:text-[1.75rem]">
            Guides for everyday payments
          </h1>
          <p className="text-muted-foreground mx-auto mt-2 max-w-sm text-center text-sm leading-relaxed">
            Result checkers, airtime, data, and bills in Ghana — plus how to pay on *714*22#.
          </p>

          <div className="mt-8">
            <BlogClient posts={posts} categories={categories} />
          </div>
        </SiteContainer>
      </section>
    </SiteShell>
  );
}
