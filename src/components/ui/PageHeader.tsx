import { Eyebrow } from '@/components/ui/Section';

export default function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="site-container relative pt-16 pb-16 md:pt-24 md:pb-20">
        <Eyebrow className="rise">{eyebrow}</Eyebrow>
        <h1 className="rise mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-balance md:text-[3.5rem] md:leading-[1.05]">
          {title}
        </h1>
        {intro ? (
          <p className="rise mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>
        ) : null}
        {children ? <div className="rise mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
