'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react';
import { type BlogPost } from '../../../lib/blog';
import { formatBlogDate } from '@/lib/blog-ui';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type BlogListPost = Omit<BlogPost, 'content'> & {
  readingMinutes: number;
};

interface BlogClientProps {
  posts: BlogListPost[];
  categories: string[];
}

const PAGE_SIZE = 10;

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
          className="h-11 rounded-xl pl-9 text-[13px]"
          aria-label="Search articles"
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
        <div className="mt-5 flex flex-wrap items-center gap-x-1 gap-y-1">
          <CategoryChip
            label="All"
            active={activeCategory === null}
            onClick={() => setCategory(null)}
          />
          {categories.map((category) => (
            <CategoryChip
              key={category}
              label={category}
              active={activeCategory === category}
              onClick={() =>
                setCategory(activeCategory === category ? null : category)
              }
            />
          ))}
        </div>
      ) : null}

      <p className="text-muted-foreground mt-6 mb-3 text-xs tabular-nums">{rangeLabel}</p>

      {filteredPosts.length === 0 ? (
        <div className="rounded-2xl border px-4 py-12">
          <p className="text-center text-sm font-medium">No matching articles</p>
          <p className="text-muted-foreground mt-1 text-center text-[13px]">
            Try another search or category.
          </p>
        </div>
      ) : (
        <div className="divide-y overflow-hidden rounded-2xl border">
          {visiblePosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block px-4 py-5 transition-colors hover:bg-muted/40"
            >
              <p className="text-muted-foreground text-[12px]">
                {post.category}
                <span className="mx-1.5">·</span>
                <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                <span className="mx-1.5">·</span>
                {post.readingMinutes} min read
              </p>
              <h2 className="mt-1.5 text-[15px] font-medium tracking-tight">
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
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            <ChevronLeft />
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
            <ChevronRight />
          </Button>
        </div>
      ) : null}
    </div>
  );
}

function CategoryChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'rounded-full px-3 py-1.5 text-[13px] transition-colors',
        active
          ? 'bg-muted font-medium text-foreground'
          : 'text-muted-foreground hover:text-foreground',
      )}
    >
      {label}
    </button>
  );
}
