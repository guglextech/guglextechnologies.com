'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { type BlogPost } from '../../../lib/blog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export type BlogListPost = Omit<BlogPost, 'content'> & {
  readingMinutes: number;
};

interface BlogClientProps {
  posts: BlogListPost[];
  categories: string[];
}

const PAGE_SIZE = 10;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogClient({ posts, categories }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const query = searchQuery.trim().toLowerCase();
  const isSearching = query.length > 0;

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      if (activeCategory && post.category !== activeCategory) return false;
      if (!isSearching) return true;
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }, [posts, query, isSearching, activeCategory]);

  const pageCount = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const start = (currentPage - 1) * PAGE_SIZE;
  const visiblePosts = filteredPosts.slice(start, start + PAGE_SIZE);

  const rangeLabel =
    filteredPosts.length === 0
      ? '0 articles'
      : `${start + 1}–${start + visiblePosts.length} of ${filteredPosts.length}`;

  function setCategory(next: string | null) {
    setActiveCategory(next);
    setPage(1);
  }

  return (
    <div>
      <div className="relative">
        <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2" />
        <Input
          type="search"
          placeholder="Search articles"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPage(1);
          }}
          className="h-9 rounded-lg pl-9 text-sm"
        />
        {searchQuery ? (
          <Button
            type="button"
            variant="ghost"
            size="icon-xs"
            onClick={() => {
              setSearchQuery('');
              setPage(1);
            }}
            className="absolute top-1/2 right-1.5 -translate-y-1/2"
            aria-label="Clear search"
          >
            <X />
          </Button>
        ) : null}
      </div>

      {categories.length > 0 ? (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-0.5">
          <button
            type="button"
            onClick={() => setCategory(null)}
            className={`rounded-full px-2.5 py-1 text-[13px] transition-colors ${
              activeCategory === null
                ? 'bg-muted font-medium text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() =>
                setCategory(activeCategory === category ? null : category)
              }
              className={`rounded-full px-2.5 py-1 text-[13px] transition-colors ${
                activeCategory === category
                  ? 'bg-muted font-medium text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <p className="text-muted-foreground mt-6 mb-2 text-center text-xs">{rangeLabel}</p>

      {filteredPosts.length === 0 ? (
        <div className="rounded-lg border px-4 py-10">
          <p className="text-muted-foreground text-center text-sm">
            No articles match those filters.
          </p>
        </div>
      ) : (
        <div className="divide-y border-t">
          {visiblePosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block py-4 transition-colors hover:bg-muted/30"
            >
              <p className="text-muted-foreground text-[12px] tracking-wide">
                {post.category}
                <span className="mx-1.5">·</span>
                {formatDate(post.date)}
                <span className="mx-1.5">·</span>
                {post.readingMinutes} min
              </p>
              <h2 className="mt-1 text-[15px] font-medium tracking-tight text-foreground">
                {post.title}
              </h2>
              <p className="text-muted-foreground mt-1 line-clamp-2 text-[13px] leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      )}

      {pageCount > 1 ? (
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Previous
          </Button>
          <span className="text-muted-foreground text-xs tabular-nums">
            {currentPage} / {pageCount}
          </span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={currentPage === pageCount}
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
          >
            Next
          </Button>
        </div>
      ) : null}
    </div>
  );
}
