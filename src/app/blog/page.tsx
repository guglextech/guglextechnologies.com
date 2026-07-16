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
        <section className="relative bg-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(1,148,255,0.16),_transparent_55%)]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">
              Blog
            </p>
            <h1 className="mb-6 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Insights from building products.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/65 md:text-xl">
              Notes on payments, software, and digital products for businesses
              across Africa and beyond.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlogClient posts={posts} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
