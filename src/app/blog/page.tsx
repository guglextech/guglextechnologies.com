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
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">No blog posts yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post: BlogPost) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-2xl flex flex-col"
                  >
                    {/* Featured Badge */}
                    {post.featured && (
                      <div className="relative">
                        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black text-white text-xs font-bold">
                          Featured
                        </div>
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Category and Date */}
                      <div className="mb-4 flex items-center gap-2 text-xs text-gray-500 font-medium">
                        <span className="uppercase tracking-wide">{post.category}</span>
                        <span className="text-gray-300">•</span>
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors leading-tight">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-5 text-sm leading-relaxed flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-5">
                          {post.tags.slice(0, 3).map((tag: string, index: number) => (
                            <span
                              key={index}
                              className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Read More Link */}
                      <div className="mt-auto pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className="text-black font-semibold text-sm group-hover:text-gray-600 transition-colors">
                            Read Article
                          </span>
                          <svg 
                            className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
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

