import Link from 'next/link';
import { cn } from '@/lib/utils';

/* eslint-disable @next/next/no-img-element */
export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Guglex Technologies home"
      className={cn('inline-flex shrink-0 items-center transition-opacity hover:opacity-80', className)}
    >
      <img src="/logo-dark.svg" alt="Guglex" className="h-6 w-auto dark:hidden" />
      <img src="/logo.svg" alt="Guglex" className="hidden h-6 w-auto dark:block" />
    </Link>
  );
}
