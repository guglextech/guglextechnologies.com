'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandLogo from '@/components/BrandLogo';
import ThemeToggle from '@/components/ThemeToggle';
import { EWALE_DIAL_HREF } from '@/lib/blog-cta';
import { cn } from '@/lib/utils';

const links = [{ href: '/blog', label: 'Blog' }] as const;

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav className="site-container flex h-14 items-center gap-6">
        <BrandLogo href="/" />

        <div className="flex flex-1 items-center gap-5">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-[13px] transition-colors',
                  active
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={EWALE_DIAL_HREF}
            className="rounded-full bg-brand-blue/10 px-2.5 py-1 text-[12px] font-medium tracking-tight text-brand-blue transition-colors hover:bg-brand-blue/15"
          >
            *714*22#
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
