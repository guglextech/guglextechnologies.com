import type { Metadata } from 'next';
import { Tick02Icon } from '@hugeicons/core-free-icons';
import Icon from '@/components/ui/Icon';
import SiteShell from '@/components/layout/SiteShell';
import CtaBand from '@/components/ui/CtaBand';
import PageHeader from '@/components/ui/PageHeader';
import { Eyebrow, Section, SectionHeader } from '@/components/ui/Section';
import { COMMITMENTS, LOCATION, MISSION_PILLARS, PHILOSOPHY, TEAM, VALUES, VISION, VISION_DETAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Guglex Technologies is a modern software engineering and digital infrastructure company. Our vision, mission, values, and the team behind them.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="About Guglex"
        title={<>A catalyst for digital transformation.</>}
        intro="Guglex Technologies is a software engineering and digital infrastructure company, founded by young, highly skilled engineers with deep experience in financial systems, software architecture, cloud infrastructure, and product development."
      />

      {/* Vision */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <Eyebrow>Our vision</Eyebrow>
            <p className="mt-6 text-sm text-muted-foreground">{LOCATION} · Building for the world</p>
          </div>
          <div>
            <p className="text-2xl font-medium tracking-[-0.025em] text-balance md:text-[2rem] md:leading-[1.3]">
              {VISION}
            </p>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground md:text-base">{VISION_DETAIL}</p>
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section className="border-y bg-card/40">
        <SectionHeader
          eyebrow="Our mission"
          title="Anchored on three pillars."
          intro="We exist to solve meaningful business and societal problems through technology."
        />
        <ol className="mt-14 grid gap-4 lg:grid-cols-3">
          {MISSION_PILLARS.map((pillar) => (
            <li key={pillar.index} className="flex flex-col rounded-2xl border bg-background p-7 md:p-8">
              <span className="text-sm font-medium text-muted-foreground tabular-nums">{pillar.index}</span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
              <ul className="mt-auto grid grid-cols-2 gap-2 pt-8">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-1.5 text-[13px]">
                    <Icon icon={Tick02Icon} className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader eyebrow="What we stand for" title="Our core values." />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((value) => {
            return (
              <li key={value.title} className="bg-background p-7">
                <Icon icon={value.icon} className="size-5 text-primary" />
                <h3 className="mt-8 text-base font-semibold tracking-tight">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Philosophy + commitments */}
      <section className="relative overflow-hidden bg-inverse py-20 text-inverse-foreground md:py-28">
        <div className="site-container relative grid gap-14 md:grid-cols-2 md:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase opacity-60">
              Philosophy
            </p>
            <p className="mt-6 text-2xl font-medium tracking-[-0.025em] text-balance md:text-[2rem] md:leading-[1.3]">
              “{PHILOSOPHY}”
            </p>
          </div>
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase opacity-60">
              Our commitment
            </p>
            <ul className="mt-6 divide-y divide-current/15 border-y border-current/15">
              {COMMITMENTS.map((item) => (
                <li key={item} className="flex items-start gap-3 py-4 text-[15px]">
                  <Icon icon={Tick02Icon} className="mt-1 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <Section>
        <SectionHeader
          eyebrow="People"
          title="Small team. High ownership."
          intro="Engineers and operators across product, infrastructure, and growth."
        />
        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {TEAM.map((person) => (
            <li key={person.role} className="rounded-2xl border bg-card p-6">
              <span
                aria-hidden
                className="relative flex size-16 items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground"
              >
                XX
              </span>
              <p className="mt-6 text-[15px] font-semibold tracking-tight">{person.name}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{person.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Building the future — one scalable, intelligent solution at a time."
        intro="If our mission resonates with your goals, let’s talk about what we can build together."
      />
    </SiteShell>
  );
}
