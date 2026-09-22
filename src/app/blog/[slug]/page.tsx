import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';
import SiteContainer from '@/components/SiteContainer';
import JsonLd from '@/components/JsonLd';
import { ArticleCtaCard, ArticleCtaStrip } from '@/components/blog/ArticleCta';
import ReadingProgress from '@/components/blog/ReadingProgress';
import ShareRow from '@/components/blog/ShareRow';
import {
  estimateReadingMinutes,
  getAllPosts,
  escapeUssdShortcode,
  getPostBySlug,
  getRelatedPosts,
} from '../../../../lib/blog';
import { articleJsonLd, breadcrumbJsonLd, SITE_NAME, absoluteUrl } from '@/lib/seo';
import { formatBlogDate } from '@/lib/blog-ui';
import { getDialNowCopy } from '@/lib/blog-cta';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Article' };
  }

  const url = absoluteUrl(`/blog/${post.slug}`);

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, ...post.tags, SITE_NAME, 'Ewale', '*714*22#', 'Ghana'],
    authors: [{ name: post.author, url: absoluteUrl('/blog') }],
    category: post.category,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
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
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify, { allowDangerousText: true } as never)
    .process(escapeUssdShortcode(post.content));
  const contentHtml = processedContent.toString();
  const readingMinutes = estimateReadingMinutes(post.content);
  const related = getRelatedPosts(post.slug, 3);
  const wordCount = post.content.trim().split(/\s+/).filter(Boolean).length;
  const url = absoluteUrl(`/blog/${post.slug}`);
  const authorInitial = (post.author || SITE_NAME).charAt(0).toUpperCase();

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
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <article id="blog-article" className="bg-background">
        <SiteContainer className="py-10 md:py-14" narrow>
          <nav className="text-muted-foreground mb-8 text-[13px]">
            <Link href="/blog" className="hover:text-foreground">
              Blog
            </Link>
            <span className="mx-1.5">›</span>
            <span className="text-foreground/80">{post.title}</span>
          </nav>

          <header>
            <span className="bg-brand-blue/10 text-brand-blue inline-flex rounded-full px-2.5 py-0.5 text-[12px] font-medium">
              {post.category}
            </span>
            <h1 className="mt-4 text-[1.55rem] font-medium tracking-tight text-foreground md:text-[1.85rem] md:leading-snug">
              {post.title}
            </h1>
            <p className="text-muted-foreground mt-3 text-[14px] leading-relaxed">
              {post.excerpt}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="bg-muted flex size-8 items-center justify-center rounded-full text-[12px] font-medium">
                {authorInitial}
              </span>
              <div>
                <p className="text-[13px] font-medium">{post.author}</p>
                <p className="text-muted-foreground text-[12px]">
                  <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                  <span className="mx-1.5">·</span>
                  {readingMinutes} min read
                </p>
              </div>
            </div>

            <ArticleCtaStrip category={post.category} title={post.title} />
          </header>

          <div
            id="article-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
            className="blog-content mt-10"
          />

          <section className="mt-10">
            <h2 className="text-[1.05rem] font-medium tracking-tight">Dial Ewale now</h2>
            <p className="text-muted-foreground mt-2 text-[14px] leading-relaxed">
              Keep{' '}
              <span className="bg-muted text-foreground mx-0.5 inline-flex rounded-full px-1.5 py-0.5 align-middle text-[12px] font-medium">
                *714*22#
              </span>{' '}
              saved. {getDialNowCopy(post.category)}
            </p>
          </section>

          {post.tags.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-muted-foreground rounded-full border px-2.5 py-1 text-[12px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <ShareRow url={url} title={post.title} />
          <ArticleCtaCard category={post.category} title={post.title} />

          {related.length > 0 ? (
            <aside className="mt-12">
              <p className="text-muted-foreground mb-3 text-[13px]">Related</p>
              <div className="divide-y overflow-hidden rounded-2xl border">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="block px-4 py-4 transition-colors hover:bg-muted/40"
                  >
                    <p className="text-muted-foreground text-[12px]">
                      {item.category}
                      <span className="mx-1.5">·</span>
                      {formatBlogDate(item.date)}
                    </p>
                    <h2 className="mt-1 text-[14px] font-medium tracking-tight">{item.title}</h2>
                  </Link>
                ))}
              </div>
            </aside>
          ) : null}
        </SiteContainer>
      </article>
    </SiteShell>
  );
}
