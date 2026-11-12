import Link from 'next/link';
import Logo from '@/components/layout/Logo';
import { LOCATION, NAV_LINKS, SERVICES } from '@/lib/site';
import { SITE_EMAIL, SITE_NAME } from '@/lib/seo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="site-container grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-8">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Software engineering and digital infrastructure for businesses in emerging markets — and beyond.
          </p>
        </div>

        <FooterColumn title="Company">
          {[...NAV_LINKS, { href: '/contact', label: 'Contact' }].map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-foreground">
                {link.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Services">
          {SERVICES.map((service) => (
            <li key={service.slug}>
              <Link href={`/services#${service.slug}`} className="hover:text-foreground">
                {service.title.split(' & ')[0]}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact">
          <li>
            <a href={`mailto:${SITE_EMAIL}`} className="break-all hover:text-foreground">
              {SITE_EMAIL}
            </a>
          </li>
          <li>{LOCATION}</li>
          <li>
            <a href="https://ewalepay.com" target="_blank" rel="noreferrer" className="hover:text-foreground">
              ewalepay.com
            </a>
          </li>
        </FooterColumn>
      </div>

      <div className="site-container flex flex-col gap-2 border-t py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {year} {SITE_NAME}. All rights reserved.
        </p>
        <p className="flex gap-4">
          <Link href="/feed.xml" className="hover:text-foreground">
            RSS
          </Link>
          <Link href="/sitemap.xml" className="hover:text-foreground">
            Sitemap
          </Link>
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-medium tracking-wide text-foreground">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">{children}</ul>
    </div>
  );
}
