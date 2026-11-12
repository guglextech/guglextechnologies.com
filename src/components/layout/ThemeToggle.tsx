'use client';

import { Moon02Icon, Sun03Icon } from '@hugeicons/core-free-icons';
import Icon from '@/components/ui/Icon';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export default function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground',
        className,
      )}
    >
      <Icon icon={Sun03Icon} className="hidden size-4 dark:block" />
      <Icon icon={Moon02Icon} className="size-4 dark:hidden" />
    </button>
  );
}
