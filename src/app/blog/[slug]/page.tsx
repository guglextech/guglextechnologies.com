import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllPosts, getPostBySlug } from '../../../../lib/blog';
import { remark } from 'remark';
import html from 'remark-html';

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

  // Convert markdown to HTML
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <div className="mb-4">
              <span className="text-sm text-gray-300 font-medium">{post.category}</span>
              <span className="mx-2 text-gray-500">•</span>
              <span className="text-sm text-gray-300">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">{post.title}</h1>
            <p className="text-xl text-gray-300 mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>By {post.author}</span>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <article className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: contentHtml }}
                className="blog-content"
              />
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-700 mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-black font-semibold hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
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

