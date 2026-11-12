import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import SiteShell from '@/components/layout/SiteShell';
import NetworkMesh from '@/components/visual/NetworkMesh';
import ButtonLink from '@/components/ui/ButtonLink';
import CtaBand from '@/components/ui/CtaBand';
import { Eyebrow, Section, SectionHeader } from '@/components/ui/Section';
import {
  ADVANTAGES,
  FOCUS_AREAS,
  MARKETS,
  PHILOSOPHY,
  PLATFORMS,
  PROCESS,
  PRODUCT_QUALITIES,
  SERVICES,
} from '@/lib/site';
import { formatBlogDate } from '@/lib/blog-ui';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/seo';
import { estimateReadingMinutes, getAllPosts } from '../../lib/blog';

export const metadata: Metadata = {
  title: { absolute: `${SITE_NAME} — ${SITE_TAGLINE}` },
  alternates: { canonical: '/' },
};

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative -mt-16 overflow-hidden pt-16">
        <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-0" />
        <div aria-hidden className="glow pointer-events-none absolute -top-24 left-1/2 h-[30rem] w-[56rem] -translate-x-1/2 opacity-70" />

        <div className="site-container relative grid items-center gap-14 pt-14 pb-20 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-28">
          <div>
            <Eyebrow className="rise">Software engineering &amp; digital infrastructure</Eyebrow>
            <h1 className="rise mt-6 text-[2.6rem] leading-[1.04] font-semibold tracking-[-0.04em] text-balance sm:text-6xl lg:text-[4.25rem]">
              We engineer the systems <span className="text-gradient">modern businesses</span> run on.
            </h1>
            <p className="rise mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Guglex partners with startups, SMEs, financial institutions, and enterprises to design, build,
              and scale fintech systems, SaaS platforms, and automation — built for emerging markets,
              engineered to global standards.
            </p>
            <div className="rise mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ButtonLink href="/contact">Start a project</ButtonLink>
              <ButtonLink href="/services" variant="ghost">
                Explore services
              </ButtonLink>
            </div>
            <ul className="rise mt-12 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted-foreground">
              {PRODUCT_QUALITIES.map((quality) => (
                <li key={quality} className="inline-flex items-center gap-1.5">
                  <Check className="size-3.5 text-neon-green" />
                  {quality}
                </li>
              ))}
            </ul>
          </div>

          <NetworkMesh className="rise mx-auto max-w-[520px]" />
        </div>

        <div className="border-y bg-card/40">
          <div className="site-container flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
              What we build
            </p>
            <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium tracking-tight">
              {FOCUS_AREAS.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <Section className="pb-0 md:pb-0">
        <figure className="mx-auto max-w-4xl text-center">
          <blockquote className="text-2xl font-medium tracking-[-0.025em] text-balance md:text-[2.25rem] md:leading-[1.25]">
            “{PHILOSOPHY}”
          </blockquote>
          <figcaption className="mt-6 text-sm text-muted-foreground">Our philosophy</figcaption>
        </figure>
      </Section>

      {/* Services */}
      <Section id="services">
        <SectionHeader
          eyebrow="Services"
          title="End-to-end engineering for the systems that matter most."
          intro="From strategy and architecture to production and scale — one accountable team across the whole lifecycle."
          action={
            <ButtonLink href="/services" variant="ghost">
              All services
            </ButtonLink>
          }
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <li key={service.slug} className="bg-background">
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex h-full flex-col p-7 transition-colors hover:bg-card md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl border bg-card text-foreground">
                      <Icon className="size-[18px]" />
                    </span>
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[13px] font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    Learn more
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Process */}
      <Section className="border-y bg-card/40">
        <SectionHeader
          eyebrow="How we work"
          title="Clear process. Reliable delivery."
          intro="A focused engagement model that keeps scope clear, quality high, and timelines honest."
        />
        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {PROCESS.map((item) => (
            <li key={item.step} className="relative">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gradient tabular-nums">{item.step}</span>
                <span className="h-px flex-1 bg-border" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Markets */}
      <Section>
        <SectionHeader
          eyebrow="Who we serve"
          title="Built for the businesses driving digital growth."
          intro="We work with organisations of every size — from a ten-person lender to an enterprise modernising decades of systems."
        />
        <ul className="mt-14 grid gap-4 md:grid-cols-2">
          {MARKETS.map((market) => {
            const Icon = market.icon;
            return (
              <li key={market.title} className="rounded-2xl border bg-card p-7 md:p-8">
                <Icon className="size-5 text-primary" />
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{market.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{market.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {market.needs.map((need) => (
                    <li key={need} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                      {need}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Advantages */}
      <section className="relative overflow-hidden bg-inverse py-20 text-inverse-foreground md:py-28">
        <div aria-hidden className="glow pointer-events-none absolute -top-40 -left-20 h-[28rem] w-[44rem] opacity-80" />
        <div className="site-container relative">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase opacity-60">
              <span className="h-px w-5 bg-gradient-neon" aria-hidden />
              Why Guglex
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-balance md:text-[2.5rem] md:leading-[1.1]">
              Global engineering standards. Local market depth.
            </h2>
          </div>
          <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="border-t border-current/15 pt-6">
                  <Icon className="size-5 text-neon-cyan" />
                  <h3 className="mt-5 text-base font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-65">{item.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Platforms */}
      <Section>
        <SectionHeader
          eyebrow="Platforms we operate"
          title="We don’t just advise. We run production systems."
          intro="Our own products move money for households and businesses every day — the same engineering we bring to client work."
          action={
            <ButtonLink href="/work" variant="ghost">
              See our work
            </ButtonLink>
          }
        />
        <ul className="mt-14 grid gap-4 lg:grid-cols-2">
          {PLATFORMS.map((platform) => (
            <li key={platform.name} className="flex flex-col rounded-2xl border bg-card p-7 md:p-9">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  {platform.category}
                </span>
                <a
                  href={platform.href}
                  {...(platform.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"
                >
                  {platform.linkLabel}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight">{platform.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{platform.summary}</p>
              <ul className="mt-8 grid gap-2.5 border-t pt-6 sm:grid-cols-2">
                {platform.built.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-neon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      {/* Insights */}
      {posts.length > 0 ? (
        <Section className="border-t pt-20">
          <SectionHeader
            eyebrow="Insights"
            title="Latest from the team."
            action={
              <ButtonLink href="/blog" variant="ghost">
                All insights
              </ButtonLink>
            }
          />
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border bg-card p-6 transition-colors hover:border-foreground/20"
                >
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {post.category} · {formatBlogDate(post.date)}
                    </p>
                    <h3 className="mt-3 text-[15px] leading-snug font-semibold tracking-tight">{post.title}</h3>
                  </div>
                  <p className="mt-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-foreground">
                    {estimateReadingMinutes(post.content)} min read
                    <ArrowRight className="size-3.5" />
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <CtaBand />
    </SiteShell>
  );
}
