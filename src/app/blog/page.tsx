import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllPosts } from '../../../lib/blog';
import BlogClient from './BlogClient';

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
            <BlogClient posts={posts} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

