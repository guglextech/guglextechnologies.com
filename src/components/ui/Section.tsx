import { cn } from '@/lib/utils';

export function Section({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={cn('py-20 md:py-28', className)}>
      <div className="site-container">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase',
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = 'left',
  className,
  action,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  action?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-6 md:flex-row md:items-end md:justify-between',
        align === 'center' && 'items-center text-center md:flex-col md:items-center',
        className,
      )}
    >
      <div className={cn('max-w-2xl', align === 'center' && 'mx-auto')}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-balance md:text-[2.5rem] md:leading-[1.1]">
          {title}
        </h2>
        {intro ? <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">{intro}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
