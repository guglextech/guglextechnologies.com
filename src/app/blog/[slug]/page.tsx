import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllPosts, getPostBySlug } from '../../../../lib/blog';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { ArrowLeft, Clock, Tag } from 'lucide-react';

// Temporary Unsplash fallbacks until posts ship with their own images.
const categoryImages: Record<string, string> = {
  Business:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
  Technology:
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
  Development:
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80',
  Design:
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=80',
  Marketing:
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
  General:
    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80',
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
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

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <>
      <Navigation />
      <main className="pt-16 min-h-screen bg-gray-50/80">
        <article>
          <header className="border-b border-gray-200 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
              <Link
                href="/blog"
                className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-brand-blue"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                Back to blog
              </Link>

              <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                <span className="bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-brand-blue border border-sky-200">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                  {formatDate(post.date)}
                </span>
                <span>·</span>
                <span>{post.author}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                {post.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">{post.excerpt}</p>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-14">
              <div className="relative aspect-[2/1] overflow-hidden border border-gray-200 bg-gray-100">
                <Image
                  src={post.image ?? categoryImages[post.category] ?? categoryImages.General}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1152px) 100vw, 1152px"
                  priority
                />
              </div>
            </div>
          </header>

          <div className="py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                dangerouslySetInnerHTML={{ __html: contentHtml }}
                className="blog-content border border-gray-200 bg-white p-8 md:p-10"
              />

              {post.tags.length > 0 && (
                <div className="mt-10 border border-gray-200 bg-white p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-700">
                    <Tag className="h-4 w-4 text-gray-400" strokeWidth={2} />
                    Tags
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="bg-gray-50 px-3 py-1 text-sm text-gray-600 border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-10 pt-6">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue hover:text-[#0176cc]"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                  All articles
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
