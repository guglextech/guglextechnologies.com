import type { Metadata } from 'next';
import SiteShell from '@/components/layout/SiteShell';
import JsonLd from '@/components/JsonLd';
import PageHeader from '@/components/ui/PageHeader';
import { estimateReadingMinutes, getAllPosts, getCategories } from '../../../lib/blog';
import { BLOG_DESCRIPTION, SITE_NAME, absoluteUrl, blogJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import BlogClient, { type BlogListPost } from './BlogClient';

export const metadata: Metadata = {
  title: 'Insights',
  description: BLOG_DESCRIPTION,
  alternates: { canonical: '/blog' },
  openGraph: {
    title: `${SITE_NAME} Insights`,
    description: BLOG_DESCRIPTION,
    url: absoluteUrl('/blog'),
    type: 'website',
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const posts: BlogListPost[] = allPosts.map(({ content, ...post }) => ({
    ...post,
    readingMinutes: estimateReadingMinutes(content),
  }));

  return (
    <SiteShell>
      <JsonLd data={blogJsonLd(allPosts)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/blog' },
        ])}
      />
      <PageHeader
        eyebrow="Insights"
        title="Field guides and notes from the team."
        intro="Practical, detailed guides on everyday payments in Ghana — from the people who build and run Ewale."
      />
      <section className="py-12 md:py-16">
        <div className="site-container">
          <BlogClient posts={posts} categories={getCategories()} />
        </div>
      </section>
    </SiteShell>
  );
}
