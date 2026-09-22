import Link from 'next/link';
import { Phone } from 'lucide-react';
import { EWALE_DIAL_HREF, getArticleCta } from '@/lib/blog-cta';
import { EWALE_URL } from '@/lib/seo';

export function ArticleCtaStrip({
  category,
  title,
}: {
  category: string;
  title: string;
}) {
  const cta = getArticleCta(category, title);

  return (
    <div className="bg-muted/60 mt-8 flex items-center gap-3 rounded-2xl px-4 py-3.5">
      <span className="bg-background text-muted-foreground flex size-10 shrink-0 items-center justify-center rounded-xl">
        <Phone className="size-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-medium tracking-tight">{cta.title}</p>
        <p className="text-muted-foreground mt-0.5 text-[12px] leading-snug">{cta.short}</p>
      </div>
      <a
        href={EWALE_DIAL_HREF}
        className="bg-foreground text-background inline-flex shrink-0 items-center rounded-full px-3 py-1.5 text-[12px] font-medium"
      >
        *714*22#
      </a>
    </div>
  );
}

export function ArticleCtaCard({
  category,
  title,
}: {
  category: string;
  title: string;
}) {
  const cta = getArticleCta(category, title);

  return (
    <div className="bg-muted/60 mt-10 rounded-2xl px-6 py-8 text-center">
      <p className="text-muted-foreground text-[11px] font-medium tracking-[0.18em] uppercase">
        {cta.kicker}
      </p>
      <h2 className="mx-auto mt-3 max-w-sm text-[1.35rem] font-medium tracking-tight">
        {cta.title}
      </h2>
      <p className="text-muted-foreground mx-auto mt-3 max-w-md text-[13px] leading-relaxed">
        {cta.description}
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        <a
          href={EWALE_DIAL_HREF}
          className="bg-foreground text-background inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium"
        >
          <Phone className="size-3.5" />
          *714*22#
        </a>
        <Link
          href={EWALE_URL}
          className="bg-background inline-flex items-center rounded-full border px-4 py-2 text-[13px] font-medium transition-colors hover:bg-muted"
        >
          {cta.onlineLabel} →
        </Link>
      </div>
      <p className="text-muted-foreground mt-5 text-[11px]">
        Mobile Money · No app needed · Works on any phone
      </p>
    </div>
  );
}
