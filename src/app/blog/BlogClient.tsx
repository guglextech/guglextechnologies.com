'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';
import { type BlogPost } from '../../../lib/blog';

const categoryColors: Record<string, string> = {
  Business: 'bg-orange-50 text-brand-orange border-orange-200',
  Technology: 'bg-sky-50 text-brand-blue border-sky-200',
  Development: 'bg-emerald-50 text-brand-green border-emerald-200',
  Design: 'bg-amber-50 text-amber-700 border-amber-200',
  Marketing: 'bg-orange-50 text-brand-orange border-orange-200',
  General: 'bg-gray-100 text-gray-700 border-gray-200',
};

function getCategoryColor(category: string) {
  return categoryColors[category] ?? categoryColors.General;
}

// Temporary Unsplash fallbacks until posts ship with their own images.
const categoryImages: Record<string, string> = {
  Business:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  Technology:
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  Development:
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
  Design:
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
  Marketing:
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
  General:
    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
};

function getPostImage(post: BlogPost) {
  return post.image ?? categoryImages[post.category] ?? categoryImages.General;
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

interface BlogClientProps {
  posts: BlogPost[];
  featuredPost: BlogPost | undefined;
  remainingPosts: BlogPost[];
}

export default function BlogClient({
  posts: allPosts,
  featuredPost,
  remainingPosts: allRemaining,
}: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const isSearching = searchQuery.trim().length > 0;

  const filteredPosts = useMemo(() => {
    if (!isSearching) return allPosts;
    const query = searchQuery.toLowerCase();
    return allPosts.filter(
      (post: BlogPost) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [searchQuery, allPosts, isSearching]);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

  return (
    <div className="space-y-12">
      {/* Toolbar */}
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {isSearching ? `Results for “${searchQuery}”` : 'Latest articles'}
          </h2>
          <p className="mt-1.5 text-sm text-gray-500">
            {isSearching
              ? `${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} found`
              : `${allPosts.length} article${allPosts.length !== 1 ? 's' : ''} published`}
          </p>
        </div>
        <div className="relative w-full sm:max-w-xs">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            strokeWidth={2}
          />
          <input
            type="search"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-gray-200 bg-white py-2.5 pl-10 pr-10 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </button>
          )}
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="border border-dashed border-gray-300 bg-white px-6 py-24 text-center">
          <Search className="mx-auto mb-4 h-10 w-10 text-gray-300" strokeWidth={1.5} />
          <p className="text-gray-600">
            {isSearching ? 'No articles match your search.' : 'No blog posts yet.'}
          </p>
          {isSearching && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-4 text-sm font-medium text-gray-900 hover:underline"
            >
              Clear search
            </button>
          )}
        </div>
      ) : isSearching ? (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} formatDate={formatDate} />
          ))}
        </div>
      ) : (
        <div className="space-y-16">
          {featuredPost && (
            <FeaturedCard post={featuredPost} formatDate={formatDate} />
          )}
          {allRemaining.length > 0 && (
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                  More articles
                </h3>
                <span className="h-px flex-1 bg-gray-200" />
              </div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {allRemaining.map((post) => (
                  <ArticleCard key={post.slug} post={post} formatDate={formatDate} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FeaturedCard({
  post,
  formatDate,
}: {
  post: BlogPost;
  formatDate: (d: string) => string;
}) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 lg:col-span-7 lg:aspect-[16/11]">
          <Image
            src={getPostImage(post)}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 58vw"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Featured
            </span>
            <CategoryBadge category={post.category} />
          </div>

          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-gray-900 transition-colors group-hover:text-gray-600 sm:text-4xl">
            {post.title}
          </h2>
          <p className="mb-8 line-clamp-3 text-lg leading-relaxed text-gray-600">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between gap-4 border-t border-gray-200 pt-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-sm font-semibold text-white">
                {getInitials(post.author)}
              </span>
              <div className="leading-tight">
                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Clock className="h-3 w-3" strokeWidth={2} />
                  {formatDate(post.date)}
                </span>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
              Read article
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2}
              />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ArticleCard({
  post,
  formatDate,
}: {
  post: BlogPost;
  formatDate: (d: string) => string;
}) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
      <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={getPostImage(post)}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute left-3 top-3">
          <CategoryBadge category={post.category} solid />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-snug tracking-tight text-gray-900 transition-colors group-hover:text-gray-600">
          {post.title}
        </h3>
        <p className="mb-5 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-600">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-semibold text-brand-blue">
              {getInitials(post.author)}
            </span>
            <div className="leading-tight">
              <p className="text-xs font-medium text-gray-900">{post.author}</p>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="h-3 w-3" strokeWidth={2} />
                {formatDate(post.date)}
              </span>
            </div>
          </div>
          <ArrowUpRight
            className="h-5 w-5 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gray-900"
            strokeWidth={2}
          />
        </div>
      </div>
    </Link>
  );
}

function CategoryBadge({
  category,
  solid = false,
}: {
  category: string;
  solid?: boolean;
}) {
  if (solid) {
    return (
      <span className="inline-flex rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm backdrop-blur">
        {category}
      </span>
    );
  }
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getCategoryColor(category)}`}
    >
      {category}
    </span>
  );
}
