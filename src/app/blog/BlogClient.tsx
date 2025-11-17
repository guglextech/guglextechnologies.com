'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { type BlogPost } from '../../../lib/blog';

interface BlogClientProps {
  posts: BlogPost[];
}

export default function BlogClient({ posts: allPosts }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const posts = useMemo(() => {
    if (!searchQuery.trim()) {
      return allPosts;
    }

    const query = searchQuery.toLowerCase();
    return allPosts.filter((post: BlogPost) => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    });
  }, [searchQuery, allPosts]);

  return (
    <>
      {/* Search Bar */}
      <div className="mb-8 max-w-md">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg 
              className="h-4 w-4 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2 bg-white border-2 border-gray-200 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-all duration-200 text-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-black transition-colors"
              aria-label="Clear search"
            >
              <svg 
                className="h-4 w-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-600">
            {searchQuery ? 'No articles found matching your search.' : 'No blog posts yet. Check back soon!'}
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 text-black font-semibold hover:text-gray-600 transition-colors underline"
            >
              Clear search
            </button>
          )}
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
    </>
  );
}

