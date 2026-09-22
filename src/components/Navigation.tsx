'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandLogo from '@/components/BrandLogo';
import ThemeToggle from '@/components/ThemeToggle';
import { EWALE_DIAL_HREF } from '@/lib/blog-cta';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const pathname = usePathname();
  const onBlog = pathname === '/blog' || pathname.startsWith('/blog/');

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="site-container flex h-14 items-center gap-8">
        <BrandLogo href="/" />

        <div className="flex flex-1 items-center gap-6">
          <Link
            href="/blog"
            className={cn(
              'text-[13px] transition-colors',
              onBlog ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
            )}
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={EWALE_DIAL_HREF}
            className="text-[13px] text-muted-foreground transition-colors hover:text-brand-blue"
          >
            *714*22#
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
