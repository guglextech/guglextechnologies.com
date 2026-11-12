import { Mail01Icon } from '@hugeicons/core-free-icons';
import Icon from '@/components/ui/Icon';
import ButtonLink from '@/components/ui/ButtonLink';
import { SITE_EMAIL } from '@/lib/seo';

export default function CtaBand({
  title = 'Have a system to build or modernise?',
  intro = 'Tell us what you are working on. We will reply with clear next steps within two business days.',
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="pt-4 pb-20 md:pb-28">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-3xl bg-inverse px-6 py-14 text-inverse-foreground sm:px-12 md:py-20">
          <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-balance md:text-[2.75rem] md:leading-[1.08]">
                {title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed opacity-70 md:text-base">{intro}</p>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="mt-6 inline-flex items-center gap-2 text-sm opacity-80 transition-opacity hover:opacity-100"
              >
                <Icon icon={Mail01Icon} className="size-4" />
                {SITE_EMAIL}
              </a>
            </div>
            <ButtonLink href="/contact" className="bg-inverse-foreground text-inverse">
              Start a project
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
