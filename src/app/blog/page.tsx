import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllPosts } from '../../../lib/blog';
import BlogClient from './BlogClient';

export default function Blog() {
  const posts = getAllPosts();
  const featuredPost = posts.find(p => p.featured) || posts[0];
  const remainingPosts = posts.filter(p => p.slug !== featuredPost?.slug);

  return (
    <>
      <Navigation />
      <main className="pt-16 min-h-screen bg-gray-50/80">
        <section className="border-b border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <p className="text-sm font-medium text-brand-blue mb-3">Blog</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Insights & ideas
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Tutorials, case studies, and perspectives from our team on building
              digital products in Africa and beyond.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogClient
              posts={posts}
              featuredPost={featuredPost}
              remainingPosts={remainingPosts}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
