import BrandLogo from '@/components/BrandLogo';
import SiteContainer from '@/components/SiteContainer';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <SiteContainer className="py-12 md:py-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <BrandLogo href="/blog" />
            <p className="text-muted-foreground mt-4 max-w-xs text-sm leading-relaxed">
              Guides for everyday payments in Ghana.
            </p>
          </div>
          <a
            href="mailto:guglex.technologies@gmail.com"
            className="text-muted-foreground text-sm transition-colors hover:text-foreground"
          >
            guglex.technologies@gmail.com
          </a>
        </div>

        <Separator className="mt-10" />

        <div className="text-muted-foreground flex flex-col gap-2 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Guglex Technologies</p>
          <p>All rights reserved</p>
        </div>
      </SiteContainer>
    </footer>
  );
}
