import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react';

export type { IconSvgElement };

export default function Icon({
  icon,
  className,
  strokeWidth = 1.5,
}: {
  icon: IconSvgElement;
  className?: string;
  strokeWidth?: number;
}) {
  return <HugeiconsIcon icon={icon} strokeWidth={strokeWidth} className={className} aria-hidden />;
}
