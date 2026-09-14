import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="site-container flex flex-col items-center gap-3 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <BrandLogo href="/blog" />
        <p className="text-muted-foreground text-xs">
          <span>&copy; {year} Guglex Technologies</span>
          <span className="mx-2">·</span>
          <Link href="/blog" className="hover:text-foreground">
            Blog
          </Link>
          <span className="mx-2">·</span>
          <a
            href="mailto:guglex.technologies@gmail.com"
            className="hover:text-foreground"
          >
            Contact
          </a>
        </p>
      </div>
    </footer>
  );
}
