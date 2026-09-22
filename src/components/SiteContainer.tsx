import { cn } from '@/lib/utils';

export default function SiteContainer({
  children,
  className,
  narrow = false,
}: {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div className={cn('site-container', className)}>
      {narrow ? <div className="mx-auto w-full max-w-2xl">{children}</div> : children}
    </div>
  );
}
