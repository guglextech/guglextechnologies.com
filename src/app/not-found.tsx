import SiteShell from '@/components/layout/SiteShell';
import ButtonLink from '@/components/ui/ButtonLink';

export default function NotFound() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="site-container relative flex min-h-[60svh] flex-col items-start justify-center py-24">
          <p className="text-sm font-medium text-gradient">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">This page doesn’t exist.</h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            The link may be broken or the page may have moved.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <ButtonLink href="/">Back to home</ButtonLink>
            <ButtonLink href="/blog" variant="ghost">
              Browse insights
            </ButtonLink>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
