import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import SiteShell from '@/components/layout/SiteShell';
import JsonLd from '@/components/JsonLd';
import ReadingProgress from '@/components/blog/ReadingProgress';
import ShareLinks from '@/components/blog/ShareLinks';
import CtaBand from '@/components/ui/CtaBand';
import {
  estimateReadingMinutes,
  escapeUssdShortcode,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from '../../../../lib/blog';
import { formatBlogDate } from '@/lib/blog-ui';
import { EWALE_URL, SITE_NAME, absoluteUrl, articleJsonLd, breadcrumbJsonLd } from '@/lib/seo';

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Article' };

  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, ...post.tags, SITE_NAME, 'Ewale', '*714*22#', 'Ghana'],
    authors: [{ name: post.author, url: absoluteUrl('/blog') }],
    category: post.category,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      section: post.category,
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(escapeUssdShortcode(post.content));

  const contentHtml = processed.toString();
  const readingMinutes = estimateReadingMinutes(post.content);
  const related = getRelatedPosts(post.slug, 3);
  const wordCount = post.content.trim().split(/\s+/).filter(Boolean).length;
  const url = absoluteUrl(`/blog/${post.slug}`);

  return (
    <SiteShell>
      <ReadingProgress />
      <JsonLd
        data={articleJsonLd({
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          date: post.date,
          author: post.author,
          category: post.category,
          tags: post.tags,
          wordCount,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <article>
        <header className="relative overflow-hidden border-b">
          <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-0" />
          <div className="site-container relative pt-12 pb-12 md:pt-16 md:pb-14">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" />
              Insights
            </Link>
            <p className="mt-8 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
              {post.category}
            </p>
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-balance md:text-5xl md:leading-[1.08]">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {post.excerpt}
            </p>
            <p className="mt-8 text-sm text-muted-foreground">
              <span className="text-foreground">{post.author}</span>
              <span className="mx-2">·</span>
              <time dateTime={post.date}>{formatBlogDate(post.date, 'long')}</time>
              <span className="mx-2">·</span>
              {readingMinutes} min read
            </p>
          </div>
        </header>

        <div className="site-container grid gap-12 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <div className="min-w-0 max-w-[720px]">
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />

            {post.tags.length > 0 ? (
              <ul className="mt-12 flex flex-wrap gap-2 border-t pt-8">
                {post.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border bg-card p-6">
              <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">Share</p>
              <div className="mt-4">
                <ShareLinks url={url} title={post.title} />
              </div>
            </div>

            <div className="rounded-2xl border bg-card p-6">
              <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">Pay with Ewale</p>
              <p className="mt-3 text-sm leading-relaxed">
                Dial <span className="font-semibold">*714*22#</span> on any phone, or pay online. Built and operated by
                Guglex.
              </p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
                <a href="tel:*714*22%23" className="hover:text-primary">
                  Dial *714*22#
                </a>
                <a
                  href={EWALE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-primary"
                >
                  ewalepay.com
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-inverse p-6 text-inverse-foreground">
              <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-neon" />
              <p className="text-base font-semibold tracking-tight">Building a payments product?</p>
              <p className="mt-2 text-sm leading-relaxed opacity-70">
                We engineer fintech systems, integrations, and collections platforms.
              </p>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium">
                Talk to Guglex
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="border-t py-16 md:py-20">
          <div className="site-container">
            <h2 className="text-xl font-semibold tracking-tight">Related reading</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="group flex h-full flex-col rounded-2xl border bg-card p-6 transition-colors hover:border-foreground/20"
                  >
                    <p className="text-xs text-muted-foreground">
                      {item.category} · {formatBlogDate(item.date)}
                    </p>
                    <h3 className="mt-3 text-[15px] leading-snug font-semibold tracking-tight group-hover:text-primary">
                      {item.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CtaBand />
    </SiteShell>
  );
}
