'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search, X, Clock, ArrowUpRight,
  Briefcase, Code, Lightbulb, Globe, Layers, BookOpen,
} from 'lucide-react';
import { type BlogPost } from '../../../lib/blog';

const categoryStyles: Record<string, { gradient: string; Icon: typeof Briefcase }> = {
  Business:      { gradient: 'from-amber-900 to-stone-900', Icon: Briefcase },
  Technology:    { gradient: 'from-blue-900 to-slate-900', Icon: Code },
  Development:   { gradient: 'from-emerald-900 to-slate-900', Icon: Layers },
  Design:        { gradient: 'from-rose-900 to-stone-900', Icon: Lightbulb },
  Marketing:     { gradient: 'from-violet-900 to-slate-900', Icon: Globe },
  General:       { gradient: 'from-gray-800 to-gray-900', Icon: BookOpen },
};

function getCategoryStyle(category: string) {
  return categoryStyles[category] || categoryStyles.General;
}

interface BlogClientProps {
  posts: BlogPost[];
  featuredPost: BlogPost | undefined;
  remainingPosts: BlogPost[];
}

export default function BlogClient({ posts: allPosts, featuredPost, remainingPosts: allRemaining }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const isSearching = searchQuery.trim().length > 0;

  const filteredPosts = useMemo(() => {
    if (!isSearching) return allPosts;
    const query = searchQuery.toLowerCase();
    return allPosts.filter((post: BlogPost) =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }, [searchQuery, allPosts, isSearching]);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <>
      {/* Search Header */}
      <div className="mb-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-black">
            {isSearching ? `Results for "${searchQuery}"` : 'Latest Articles'}
          </h2>
          <p className="text-gray-500 mt-1 text-sm">
            {isSearching
              ? `${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} found`
              : `${allPosts.length} articles published`}
          </p>
        </div>
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-all duration-300 text-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-black transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" strokeWidth={1.5} />
            </button>
          )}
        </div>
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-24 border border-dashed border-gray-200">
          <Search className="w-10 h-10 text-gray-300 mx-auto mb-4" strokeWidth={1.5} />
          <p className="text-lg text-gray-500 mb-2">
            {isSearching ? 'No articles match your search.' : 'No blog posts yet.'}
          </p>
          {isSearching && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-black font-medium text-sm hover:text-gray-600 transition-colors underline underline-offset-4"
            >
              Clear search
            </button>
          )}
        </div>
      ) : isSearching ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} formatDate={formatDate} />
          ))}
        </div>
      ) : (
        <>
          {/* Featured Post */}
          {featuredPost && <FeaturedCard post={featuredPost} formatDate={formatDate} />}

          {/* Posts Grid */}
          {allRemaining.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allRemaining.map((post) => (
                <ArticleCard key={post.slug} post={post} formatDate={formatDate} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}

/* ─── Featured Card ─── */
function FeaturedCard({ post, formatDate }: { post: BlogPost; formatDate: (d: string) => string }) {
  const { gradient, Icon } = getCategoryStyle(post.category);

  return (
    <Link href={`/blog/${post.slug}`} className="group block mb-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-black">
        {/* Image / Gradient Side */}
        <div className={`relative h-64 lg:h-auto min-h-[320px] bg-gradient-to-br ${gradient} overflow-hidden`}>
          {post.image ? (
            <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className="w-20 h-20 text-white/10" strokeWidth={1} />
            </div>
          )}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
          {post.featured && (
            <span className="absolute top-6 left-6 px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider">
              Featured
            </span>
          )}
        </div>

        {/* Content Side */}
        <div className="p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">{post.category}</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
              <span className="flex items-center gap-1.5 text-xs text-gray-500">
                <Clock className="w-3 h-3" strokeWidth={1.5} />
                {formatDate(post.date)}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-gray-200 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-400 leading-relaxed line-clamp-3">{post.excerpt}</p>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <span className="text-sm text-gray-500">By {post.author}</span>
            <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
              <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors duration-500" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─── Article Card ─── */
function ArticleCard({ post, formatDate }: { post: BlogPost; formatDate: (d: string) => string }) {
  const { gradient, Icon } = getCategoryStyle(post.category);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden bg-white border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-500"
    >
      {/* Image Area */}
      <div className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden`}>
        {post.image ? (
          <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-14 h-14 text-white/10" strokeWidth={1} />
          </div>
        )}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        <span className="absolute bottom-4 left-4 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-black text-[11px] font-semibold uppercase tracking-wider">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-black mb-2 leading-snug group-hover:text-gray-700 transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow line-clamp-2">
          {post.excerpt}
        </p>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {post.tags.slice(0, 2).map((tag, i) => (
              <span key={i} className="px-2 py-0.5 bg-gray-50 text-[11px] text-gray-500 font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <Clock className="w-3 h-3" strokeWidth={1.5} />
            {formatDate(post.date)}
          </span>
          <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors duration-300" strokeWidth={1.5} />
        </div>
      </div>
    </Link>
  );
}
