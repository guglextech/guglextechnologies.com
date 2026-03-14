import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllPosts } from '../../../lib/blog';
import BlogClient from './BlogClient';
import { PenLine } from 'lucide-react';

export default function Blog() {
  const posts = getAllPosts();
  const featuredPost = posts.find(p => p.featured) || posts[0];
  const remainingPosts = posts.filter(p => p.slug !== featuredPost?.slug);

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                    <PenLine className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-400">Blog</p>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white">Insights &<br />Ideas</h1>
              </div>
              <p className="text-gray-400 max-w-md md:text-right text-lg">
                Tutorials, case studies, and perspectives from our engineering team.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogClient posts={posts} featuredPost={featuredPost} remainingPosts={remainingPosts} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
