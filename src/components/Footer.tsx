import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';
import { SITE_EMAIL } from '@/lib/seo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="site-container flex flex-col items-start gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
        <BrandLogo href="/" />
        <p className="text-muted-foreground text-xs">
          <span>&copy; {year} Guglex Technologies</span>
          <span className="mx-2">·</span>
          <Link href="/blog" className="hover:text-foreground">
            Blog
          </Link>
          <span className="mx-2">·</span>
          <a href={`mailto:${SITE_EMAIL}`} className="hover:text-foreground">
            {SITE_EMAIL}
          </a>
        </p>
      </div>
    </footer>
  );
}
