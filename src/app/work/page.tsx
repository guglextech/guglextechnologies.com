import type { Metadata } from 'next';
import { ArrowUpRight, Check } from 'lucide-react';
import SiteShell from '@/components/layout/SiteShell';
import CtaBand from '@/components/ui/CtaBand';
import PageHeader from '@/components/ui/PageHeader';
import { Section, SectionHeader } from '@/components/ui/Section';
import { MISSION_PILLARS, PLATFORMS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Platforms Guglex Technologies builds and operates: Ewale consumer payments on *714*22# and Gyepayment automated business collections.',
  alternates: { canonical: '/work' },
};

const DESIGN_PRINCIPLES = MISSION_PILLARS[0].points;

export default function WorkPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Work"
        title={
          <>
            Proof in production, <span className="text-gradient">every day.</span>
          </>
        }
        intro="Beyond client engagements, we build and operate our own platforms. They are where our engineering practices are tested by real users, real money, and real market conditions."
      />

      <Section>
        <div className="space-y-6">
          {PLATFORMS.map((platform, index) => (
            <article key={platform.name} className="overflow-hidden rounded-3xl border bg-card">
              <div className="grid md:grid-cols-[1fr_1fr]">
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                      {platform.category}
                    </span>
                  </div>
                  <h2 className="mt-8 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{platform.name}</h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">
                    {platform.summary}
                  </p>
                  <a
                    href={platform.href}
                    {...(platform.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary"
                  >
                    {platform.linkLabel}
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
                <div className="border-t bg-background/60 p-8 md:border-t-0 md:border-l md:p-12">
                  <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                    The challenge
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed">{platform.challenge}</p>
                  <p className="mt-10 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                    What we built
                  </p>
                  <ul className="mt-4 space-y-3">
                    {platform.built.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-neon-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-y bg-card/40">
        <SectionHeader
          eyebrow="Our standard"
          title="Everything we ship is designed to be…"
          intro="The same principles apply whether we are building our own platforms or yours."
        />
        <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-4">
          {DESIGN_PRINCIPLES.map((item) => (
            <li key={item} className="bg-background px-6 py-10 text-lg font-semibold tracking-tight md:px-8">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Want this level of engineering on your product?"
        intro="Whether you need a payment integration, a SaaS platform, or a full digital transformation, we are ready to build with you."
      />
    </SiteShell>
  );
}
