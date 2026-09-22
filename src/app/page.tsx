import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowUpRight,
  CreditCard,
  Landmark,
  Phone,
  Repeat,
  Smartphone,
  Zap,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import { PROJECTS, TEAM } from '@/lib/company';
import { SITE_EMAIL, SITE_NAME } from '@/lib/seo';

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

const PROJECT_ICONS: Record<(typeof PROJECTS)[number]['icon'], LucideIcon> = {
  phone: Smartphone,
  repeat: Repeat,
};

const VITALS = [
  { label: '*714*22#', icon: Phone },
  { label: 'Mobile money', icon: CreditCard },
  { label: 'Utilities', icon: Zap },
  { label: 'Collections', icon: Landmark },
] as const;

export default function Home() {
  return (
    <div className="flex h-svh flex-col overflow-hidden bg-background">
      <Navigation />

      <main className="site-container flex flex-1 flex-col justify-center overflow-y-auto py-5">
        <div className="flex w-full flex-col gap-7 md:gap-8">
          <section>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              <span className="text-[var(--brand-blue)]">Guglex</span>{' '}
              <span className="text-[var(--brand-green)]">Technologies</span>
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex rounded-full bg-[color-mix(in_oklch,var(--brand-blue)_12%,transparent)] px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-[var(--brand-blue)]">
                Payments
              </span>
              <span className="inline-flex rounded-full bg-[color-mix(in_oklch,var(--brand-green)_12%,transparent)] px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-[var(--brand-green)]">
                Accra
              </span>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                Empowering the next frontier of African business with digital infrastructure.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {VITALS.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-[11px] text-muted-foreground"
                  >
                    <Icon className="size-3" />
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Projects
            </h2>
            <ul className="grid grid-cols-2 gap-3 md:gap-4">
              {PROJECTS.map((project) => {
                const Icon = PROJECT_ICONS[project.icon];
                return (
                  <li key={project.name}>
                    <a
                      href={project.href}
                      {...(project.href.startsWith('http')
                        ? { target: '_blank', rel: 'noreferrer' }
                        : {})}
                      className="group flex h-full flex-col rounded-xl border bg-card p-3.5 shadow-sm transition-colors hover:bg-muted/30 md:p-4"
                      style={{
                        ['--project' as string]: project.color,
                        borderColor: `color-mix(in oklch, ${project.color} 28%, var(--border))`,
                      }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span
                          className="flex size-9 items-center justify-center rounded-lg"
                          style={{
                            color: project.color,
                            backgroundColor: `color-mix(in oklch, ${project.color} 14%, transparent)`,
                          }}
                        >
                          <Icon className="size-4" />
                        </span>
                        <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-[var(--project)]" />
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <p className="font-medium tracking-tight">{project.name}</p>
                        <span
                          className="rounded-full px-1.5 py-px text-[10px] font-medium"
                          style={{
                            color: project.color,
                            backgroundColor: `color-mix(in oklch, ${project.color} 12%, transparent)`,
                          }}
                        >
                          {project.tag}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
                        {project.summary}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {project.highlights.map((item) => (
                          <li
                            key={item}
                            className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground md:text-[11px]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              People
            </h2>
            <ul className="grid grid-cols-4 gap-3">
              {TEAM.map((person) => (
                <li key={person.role} className="flex flex-col items-start gap-2">
                  <span
                    aria-hidden
                    className="flex size-12 items-center justify-center rounded-full text-xs font-medium md:size-14 md:text-sm"
                    style={{
                      color: person.color,
                      backgroundColor: `color-mix(in oklch, ${person.color} 16%, transparent)`,
                    }}
                  >
                    XX
                  </span>
                  <div>
                    <p
                      className="text-xs font-medium tracking-tight md:text-sm"
                      style={{ color: person.color }}
                    >
                      {person.name}
                    </p>
                    <p className="text-[11px] leading-snug text-muted-foreground md:text-xs">
                      {person.role}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Contact
            </h2>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="text-sm text-foreground transition-colors hover:text-brand-blue"
            >
              {SITE_EMAIL}
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}
