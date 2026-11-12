import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import SiteShell from '@/components/layout/SiteShell';
import ButtonLink from '@/components/ui/ButtonLink';
import CtaBand from '@/components/ui/CtaBand';
import PageHeader from '@/components/ui/PageHeader';
import { Section, SectionHeader } from '@/components/ui/Section';
import { ENGAGEMENTS, PROCESS, SERVICES, TECHNOLOGIES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Fintech and payments engineering, SaaS and product engineering, business automation and AI, cloud infrastructure, identity and security, and technology strategy.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Engineering capability across the <span className="text-gradient">full stack</span> of your business.
          </>
        }
        intro="We combine technical excellence with strategic thinking — taking you from a clear plan to a secure, scalable system in production."
      >
        <nav aria-label="Services" className="flex flex-wrap gap-2">
          {SERVICES.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="rounded-full bg-muted px-3.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {service.title}
            </a>
          ))}
        </nav>
      </PageHeader>

      <Section>
        <div className="divide-y border-y">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-24 gap-8 py-14 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-16"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl border bg-card">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-sm text-muted-foreground tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold tracking-[-0.025em] md:text-3xl">{service.title}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{service.summary}</p>
                </div>
                <div>
                  <p className="text-[15px] leading-relaxed md:text-base">{service.description}</p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 rounded-xl border bg-card px-4 py-3 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-neon-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section className="border-y bg-card/40">
        <SectionHeader
          eyebrow="Technology"
          title="Modern tools, chosen for the job."
          intro="We leverage modern frameworks and cloud-native architecture — prioritising performance, reliability, security, and developer flexibility."
        />
        <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-3">
          {TECHNOLOGIES.map((tech) => (
            <li key={tech} className="bg-background px-6 py-8 text-[15px] font-medium tracking-tight md:px-8">
              {tech}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Engagement models"
          title="Work with us the way that fits."
          intro="Start small with an advisory sprint, or bring us in to own delivery end to end."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ENGAGEMENTS.map((item) => (
            <li key={item.title} className="flex flex-col rounded-2xl border bg-card p-6">
              <span className="text-xs text-muted-foreground">{item.duration}</span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t">
        <SectionHeader
          eyebrow="Process"
          title="From discovery to scale."
          action={<ButtonLink href="/contact">Book a discovery call</ButtonLink>}
        />
        <ol className="mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
          {PROCESS.map((item) => (
            <li key={item.step}>
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

      <CtaBand />
    </SiteShell>
  );
}
