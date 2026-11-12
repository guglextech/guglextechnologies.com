import type { Metadata } from 'next';
import { Location01Icon, Mail01Icon } from '@hugeicons/core-free-icons';
import Icon from '@/components/ui/Icon';
import SiteShell from '@/components/layout/SiteShell';
import ContactForm from '@/components/contact/ContactForm';
import PageHeader from '@/components/ui/PageHeader';
import { LOCATION } from '@/lib/site';
import { SITE_EMAIL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Start a project with Guglex Technologies. Email ${SITE_EMAIL} or send us your project details.`,
  alternates: { canonical: '/contact' },
};

const NEXT_STEPS = [
  {
    title: 'We reply within two business days',
    description: 'With questions or a time for a discovery call.',
  },
  {
    title: 'Discovery call',
    description: 'We learn your goals, constraints, and current systems.',
  },
  {
    title: 'Proposal',
    description: 'A clear scope, approach, team, and timeline — no surprises.',
  },
] as const;

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Contact"
        title={<>Let’s build what’s next.</>}
        intro="Tell us about your product, payment flow, or platform challenge. We will respond with a clear next step."
      />

      <section className="py-16 md:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <ul className="space-y-6">
              <li>
                <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">Email</p>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="mt-2 inline-flex items-center gap-2 text-lg font-medium tracking-tight break-all hover:text-primary"
                >
                  <Icon icon={Mail01Icon} className="size-4 shrink-0 text-primary" />
                  {SITE_EMAIL}
                </a>
              </li>
              <li>
                <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">Office</p>
                <p className="mt-2 inline-flex items-center gap-2 text-lg font-medium tracking-tight">
                  <Icon icon={Location01Icon} className="size-4 text-primary" />
                  {LOCATION}
                </p>
              </li>
            </ul>

            <div className="mt-12 border-t pt-10">
              <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">What happens next</p>
              <ol className="mt-6 space-y-6">
                {NEXT_STEPS.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-[15px] font-medium tracking-tight">{step.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <ContactForm email={SITE_EMAIL} />
        </div>
      </section>
    </SiteShell>
  );
}
