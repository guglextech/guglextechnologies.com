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
