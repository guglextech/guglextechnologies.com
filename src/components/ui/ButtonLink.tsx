import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ghost';

export default function ButtonLink({
  href,
  children,
  variant = 'primary',
  external = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  const classes = cn(
    'group inline-flex h-11 items-center gap-2 rounded-full text-sm font-medium transition-all',
    variant === 'primary' && 'bg-foreground px-5 text-background hover:opacity-85',
    variant === 'ghost' && 'px-1 text-foreground hover:text-primary',
    className,
  );
  const content = (
    <>
      {children}
      <Icon className="size-4 transition-transform group-hover:translate-x-0.5" />
    </>
  );

  const isExternal = external || href.startsWith('http') || href.startsWith('mailto:');

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
