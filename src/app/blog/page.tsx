import type { Metadata } from 'next';
import SiteShell from '@/components/SiteShell';
import SiteContainer from '@/components/SiteContainer';
import { estimateReadingMinutes, getAllPosts, getCategories } from '../../../lib/blog';
import BlogClient, { type BlogListPost } from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Guides for everyday payments — result checkers, airtime, data, and bills in Ghana, plus how to pay on *714*22#.',
};

export default function Blog() {
  const posts: BlogListPost[] = getAllPosts().map(({ content, ...post }) => ({
    ...post,
    readingMinutes: estimateReadingMinutes(content),
  }));
  const categories = getCategories().sort((a, b) => a.localeCompare(b));

  return (
    <SiteShell>
      <section className="bg-background">
        <SiteContainer className="site-section" narrow>
          <p className="mb-3 text-center text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Blog
          </p>
          <h1 className="text-center text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Guides for everyday payments
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-md text-center leading-relaxed">
            Result checkers, airtime, data, and bills in Ghana — plus how to pay on *714*22#.
          </p>

          <div className="mt-10 md:mt-12">
            <BlogClient posts={posts} categories={categories} />
          </div>
        </SiteContainer>
      </section>
    </SiteShell>
  );
}
