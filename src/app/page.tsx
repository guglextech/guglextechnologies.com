import type { Metadata } from 'next';
import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';
import ThemeToggle from '@/components/ThemeToggle';
import { PROJECTS, TEAM, personInitials } from '@/lib/company';
import { SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: { absolute: SITE_NAME },
  description: 'Guglex Technologies — Ewale, Gyepayment, and the people who build them.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SITE_NAME,
    description: 'Guglex Technologies — Ewale, Gyepayment, and the people who build them.',
    url: '/',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="flex h-svh flex-col overflow-y-auto bg-background">
      <header className="shrink-0">
        <nav className="site-container flex h-14 items-center justify-between md:h-16">
          <BrandLogo href="/" />
          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="site-container flex flex-1 flex-col justify-center gap-10 pb-8 md:gap-14 md:pb-12">
        <section>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Guglex Technologies
          </h1>
        </section>

        <section>
          <h2 className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Projects
          </h2>
          <ul className="grid max-w-xl gap-6 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <li key={project.name}>
                <a
                  href={project.href}
                  {...(project.href.startsWith('http')
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                  className="group block"
                >
                  <p className="font-medium tracking-tight group-hover:text-[var(--brand-blue)]">
                    {project.name}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            People
          </h2>
          <ul className="flex flex-wrap gap-8">
            {TEAM.map((person) => (
              <li key={person.name} className="flex flex-col items-start gap-2.5">
                {person.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={person.image}
                    alt={person.name}
                    className="size-16 rounded-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="flex size-16 items-center justify-center rounded-full bg-[color-mix(in_oklch,var(--brand-blue)_14%,transparent)] text-sm font-medium text-[var(--brand-blue)]"
                  >
                    {personInitials(person.name)}
                  </span>
                )}
                <div>
                  <p className="text-sm font-medium tracking-tight">{person.name}</p>
                  <p className="text-sm text-muted-foreground">{person.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
