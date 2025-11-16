import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllPosts, type BlogPost } from '../../../lib/blog';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Our Blog</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Insights, tutorials, and updates from the world of technology
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">No blog posts yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: BlogPost) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white border border-gray-200 hover:border-black hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="p-8">
                      {post.featured && (
                        <div className="inline-block mb-4 px-3 py-1 bg-black text-white text-xs font-semibold">
                          Featured
                        </div>
                      )}
                      <div className="mb-4">
                        <span className="text-sm text-gray-500 font-medium">{post.category}</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag: string, index: number) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-black font-semibold text-sm group-hover:gap-3 transition-all">
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

