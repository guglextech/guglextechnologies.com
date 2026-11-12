'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from '@/components/layout/Logo';
import ThemeToggle from '@/components/layout/ThemeToggle';
import { NAV_LINKS } from '@/lib/site';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [openOn, setOpenOn] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = openOn === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-[background-color,border-color] duration-300',
        scrolled || open
          ? 'border-b border-border/70 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="site-container flex h-16 items-center justify-between gap-6">
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={cn(
                  'rounded-full px-3.5 py-2 text-[13.5px] transition-colors',
                  isActive(link.href)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden h-9 items-center gap-1.5 rounded-full bg-foreground px-4 text-[13px] font-medium text-background transition-opacity hover:opacity-85 md:inline-flex"
          >
            Start a project
            <ArrowRight className="size-3.5" />
          </Link>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full text-foreground md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpenOn(open ? null : pathname)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100svh-4rem)] overflow-y-auto border-t border-border/70 bg-background md:hidden"
      >
        <ul className="site-container flex flex-col py-4">
          {[{ href: '/', label: 'Home' }, ...NAV_LINKS, { href: '/contact', label: 'Contact' }].map(
            (link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center justify-between border-b border-border/60 py-4 text-lg tracking-tight',
                    (link.href === '/' ? pathname === '/' : isActive(link.href))
                      ? 'text-foreground'
                      : 'text-muted-foreground',
                  )}
                >
                  {link.label}
                  <ArrowRight className="size-4 opacity-50" />
                </Link>
              </li>
            ),
          )}
        </ul>
        <div className="site-container pb-10">
          <Link
            href="/contact"
            className="mt-2 flex h-12 items-center justify-center gap-2 rounded-full bg-foreground text-sm font-medium text-background"
          >
            Start a project
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
