'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, Clock, ArrowRight } from 'lucide-react';
import { type BlogPost } from '../../../lib/blog';

const categoryColors: Record<string, string> = {
  Business: 'bg-amber-50 text-amber-800 border-amber-200',
  Technology: 'bg-blue-50 text-blue-800 border-blue-200',
  Development: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  Design: 'bg-rose-50 text-rose-800 border-rose-200',
  Marketing: 'bg-violet-50 text-violet-800 border-violet-200',
  General: 'bg-gray-100 text-gray-700 border-gray-200',
};

function getCategoryColor(category: string) {
  return categoryColors[category] ?? categoryColors.General;
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
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {isSearching ? `Results for “${searchQuery}”` : 'All articles'}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            {isSearching
              ? `${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} found`
              : `${allPosts.length} published`}
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
            className="w-full border border-gray-200 bg-white py-2.5 pl-10 pr-10 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </button>
          )}
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="border border-dashed border-gray-200 bg-white px-6 py-20 text-center">
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} formatDate={formatDate} />
          ))}
        </div>
      ) : (
        <>
          {featuredPost && (
            <FeaturedCard post={featuredPost} formatDate={formatDate} />
          )}
          {allRemaining.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {allRemaining.map((post) => (
                <ArticleCard key={post.slug} post={post} formatDate={formatDate} />
              ))}
            </div>
          )}
        </>
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
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden border border-gray-200 bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="relative aspect-[16/10] lg:col-span-2 lg:aspect-auto lg:min-h-[280px] bg-gray-100">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
          )}
        </div>
        <div className="flex flex-col justify-center p-8 lg:col-span-3 lg:p-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {post.featured && (
              <span className="bg-gray-900 px-2.5 py-0.5 text-xs font-medium text-white">
                Featured
              </span>
            )}
            <CategoryBadge category={post.category} />
            <span className="flex items-center gap-1.5 text-sm text-gray-500">
              <Clock className="h-3.5 w-3.5" strokeWidth={2} />
              {formatDate(post.date)}
            </span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-gray-700 sm:text-3xl">
            {post.title}
          </h2>
          <p className="mb-6 line-clamp-3 text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-gray-500">By {post.author}</span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900">
              Read article
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
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
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden border border-gray-200 bg-white"
    >
      <div className="relative aspect-[16/10] bg-gray-100">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
        )}
        <div className="absolute left-4 top-4">
          <CategoryBadge category={post.category} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900 group-hover:text-gray-700">
          {post.title}
        </h3>
        <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-600">
          {post.excerpt}
        </p>

        {post.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="bg-gray-50 px-2 py-0.5 text-xs text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" strokeWidth={2} />
            {formatDate(post.date)}
          </span>
          <ArrowRight
            className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-gray-900"
            strokeWidth={2}
          />
        </div>
      </div>
    </Link>
  );
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span
      className={`inline-flex px-2.5 py-0.5 text-xs font-medium border ${getCategoryColor(category)}`}
    >
      {category}
    </span>
  );
}
