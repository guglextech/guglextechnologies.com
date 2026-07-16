'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Search, X } from 'lucide-react';
import { type BlogPost } from '../../../lib/blog';

interface BlogClientProps {
  posts: BlogPost[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const query = searchQuery.trim().toLowerCase();
  const isSearching = query.length > 0;

  const filteredPosts = useMemo(() => {
    if (!isSearching) return posts;
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [posts, query, isSearching]);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

  return (
    <div>
      <div className="mb-12 flex flex-col gap-6 border-b border-gray-200 pb-8 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Articles
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
            {isSearching ? 'Search results' : 'All posts'}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            {isSearching
              ? `${filteredPosts.length} result${filteredPosts.length !== 1 ? 's' : ''}`
              : `${posts.length} published`}
          </p>
        </div>

        <div className="relative w-full md:max-w-xs">
          <Search
            className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            strokeWidth={2}
          />
          <input
            type="search"
            placeholder="Search posts"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border-0 border-b border-gray-300 bg-transparent py-2.5 pl-7 pr-8 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-blue focus:outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-700"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </button>
          )}
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="py-20">
          <p className="text-gray-600">
            {isSearching ? 'No posts match your search.' : 'No blog posts yet.'}
          </p>
          {isSearching && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-4 text-sm font-medium text-brand-blue hover:underline"
            >
              Clear search
            </button>
          )}
        </div>
      ) : (
        <div className="border-t border-gray-200">
          {filteredPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group grid grid-cols-1 gap-3 border-b border-gray-200 py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <div className="md:col-span-1">
                <span className="text-sm font-semibold tabular-nums text-brand-blue">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="md:col-span-2">
                <p className="text-sm text-gray-500">{formatDate(post.date)}</p>
                <p className="mt-1 text-sm text-gray-400">{post.category}</p>
              </div>

              <div className="md:col-span-6">
                <h3 className="text-lg font-semibold tracking-tight text-black transition-colors group-hover:text-brand-blue md:text-xl">
                  {post.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between md:col-span-3 md:justify-end md:gap-6">
                <p className="text-sm text-gray-500">{post.author}</p>
                <ArrowUpRight
                  className="h-4 w-4 text-gray-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue"
                  strokeWidth={2}
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
