'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowRight02Icon,
  Cancel01Icon,
  Search01Icon,
} from '@hugeicons/core-free-icons';
import Icon from '@/components/ui/Icon';
import { type BlogPost } from '../../../lib/blog';
import { formatBlogDate } from '@/lib/blog-ui';
import { cn } from '@/lib/utils';

export type BlogListPost = Omit<BlogPost, 'content'> & {
  readingMinutes: number;
};

const PAGE_SIZE = 12;

export default function BlogClient({ posts, categories }: { posts: BlogListPost[]; categories: string[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const query = searchQuery.trim().toLowerCase();

  const filteredPosts = useMemo(
    () =>
      posts.filter((post) => {
        if (activeCategory && post.category !== activeCategory) return false;
        if (!query) return true;
        return (
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      }),
    [posts, query, activeCategory],
  );

  const pageCount = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const start = (currentPage - 1) * PAGE_SIZE;
  const visiblePosts = filteredPosts.slice(start, start + PAGE_SIZE);

  function setCategory(next: string | null) {
    setActiveCategory(next);
    setPage(1);
  }

  function goTo(next: number) {
    setPage(next);
    document.getElementById('insights-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="-mx-1 flex flex-wrap gap-1.5">
          {['All', ...categories].map((category) => {
            const active = category === 'All' ? activeCategory === null : activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(category === 'All' ? null : category)}
                className={cn(
                  'rounded-full px-3.5 py-1.5 text-[13px] transition-colors',
                  active
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <label className="relative block w-full md:w-72">
          <span className="sr-only">Search insights</span>
          <Icon
            icon={Search01Icon}
            className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value);
              setPage(1);
            }}
            placeholder="Search insights"
            className="h-10 w-full rounded-full border bg-card pr-9 pl-10 text-sm outline-none focus:border-primary [&::-webkit-search-cancel-button]:hidden"
          />
          {searchQuery ? (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => {
                setSearchQuery('');
                setPage(1);
              }}
              className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:text-foreground"
            >
              <Icon icon={Cancel01Icon} className="size-3.5" />
            </button>
          ) : null}
        </label>
      </div>

      <p id="insights-list" className="mt-10 scroll-mt-24 text-xs text-muted-foreground tabular-nums">
        {filteredPosts.length === 0
          ? 'No articles'
          : `${start + 1}–${start + visiblePosts.length} of ${filteredPosts.length} articles`}
      </p>

      {filteredPosts.length === 0 ? (
        <div className="mt-4 rounded-2xl border px-6 py-16 text-center">
          <p className="font-medium">No matching articles</p>
          <p className="mt-1 text-sm text-muted-foreground">Try another search or category.</p>
        </div>
      ) : (
        <ul className="mt-4 border-t">
          {visiblePosts.map((post) => (
            <li key={post.slug} className="border-b">
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-2 py-7 md:grid-cols-[180px_1fr_auto] md:gap-8"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground md:block md:pt-1">
                  <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                  <span className="md:hidden">·</span>
                  <p className="md:mt-1.5">{post.category}</p>
                </div>
                <div className="max-w-2xl">
                  <h2 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                </div>
                <span className="hidden items-center gap-1.5 pt-1 text-xs whitespace-nowrap text-muted-foreground md:inline-flex">
                  {post.readingMinutes} min
                  <Icon icon={ArrowRight02Icon} className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {pageCount > 1 ? (
        <nav aria-label="Pagination" className="mt-10 flex items-center justify-between">
          <PageButton disabled={currentPage === 1} onClick={() => goTo(currentPage - 1)}>
            <Icon icon={ArrowLeft01Icon} className="size-4" />
            Previous
          </PageButton>
          <span className="text-xs text-muted-foreground tabular-nums">
            Page {currentPage} of {pageCount}
          </span>
          <PageButton disabled={currentPage === pageCount} onClick={() => goTo(currentPage + 1)}>
            Next
            <Icon icon={ArrowRight01Icon} className="size-4" />
          </PageButton>
        </nav>
      ) : null}
    </div>
  );
}

function PageButton({
  disabled,
  onClick,
  children,
}: {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="inline-flex h-10 items-center gap-1.5 rounded-full bg-muted px-4 text-sm transition-colors hover:text-primary disabled:pointer-events-none disabled:opacity-40"
    >
      {children}
    </button>
  );
}
