import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';
import SiteContainer from '@/components/SiteContainer';
import {
  estimateReadingMinutes,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from '../../../../lib/blog';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { ArrowLeft } from 'lucide-react';

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

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
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
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(post.content);
  const contentHtml = processedContent.toString();
  const readingMinutes = estimateReadingMinutes(post.content);
  const related = getRelatedPosts(post.slug, 3);

  return (
    <SiteShell>
      <article className="bg-background">
        <SiteContainer className="py-12 md:py-16" narrow>
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Blog
          </Link>

          <p className="text-muted-foreground mb-3 text-[12px] tracking-wide">
            {post.category}
            <span className="mx-1.5">·</span>
            {formatDate(post.date)}
            <span className="mx-1.5">·</span>
            {readingMinutes} min read
          </p>

          <h1 className="mb-3 text-[1.65rem] font-medium tracking-tight text-foreground md:text-3xl md:leading-snug">
            {post.title}
          </h1>
          <p className="text-muted-foreground text-[15px] leading-relaxed">{post.excerpt}</p>

          <div className="mt-8">
            <div
              dangerouslySetInnerHTML={{ __html: contentHtml }}
              className="blog-content"
            />

            {post.tags.length > 0 ? (
              <p className="text-muted-foreground mt-10 border-t pt-6 text-[12px] tracking-wide">
                {post.tags.join('  ·  ')}
              </p>
            ) : null}

            {related.length > 0 ? (
              <aside className="mt-12">
                <p className="mb-3 text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
                  Related
                </p>
                <div className="divide-y border-t">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}`}
                      className="block py-4 transition-colors hover:bg-muted/30"
                    >
                      <p className="text-muted-foreground text-[12px]">
                        {item.category}
                        <span className="mx-1.5">·</span>
                        {formatDate(item.date)}
                      </p>
                      <h2 className="mt-1 text-[15px] font-medium tracking-tight">{item.title}</h2>
                    </Link>
                  ))}
                </div>
              </aside>
            ) : null}
          </div>
        </SiteContainer>
      </article>
    </SiteShell>
  );
}
