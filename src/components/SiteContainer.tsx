import { cn } from '@/lib/utils';

export default function SiteContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn('site-container', className)}>{children}</div>;
}
