import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllPosts, getPostBySlug } from '../../../../lib/blog';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { ArrowLeft, Clock, User, Tag } from 'lucide-react';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
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
    new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-10 transition-colors group text-sm"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-gray-400">
                <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                {formatDate(post.date)}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-4xl">{post.excerpt}</p>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <User className="w-4 h-4" strokeWidth={1.5} />
              <span>{post.author}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              dangerouslySetInnerHTML={{ __html: contentHtml }}
              className="blog-content"
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                  <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 bg-gray-50 text-gray-600 text-sm font-medium border border-gray-100 hover:border-black hover:text-black transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-black font-semibold text-sm hover:text-gray-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
                Back to All Posts
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
