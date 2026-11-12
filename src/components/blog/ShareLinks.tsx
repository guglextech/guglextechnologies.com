'use client';

import { useState } from 'react';
import { Link01Icon, Tick02Icon } from '@hugeicons/core-free-icons';
import Icon from '@/components/ui/Icon';

function shareUrl(network: 'x' | 'linkedin' | 'whatsapp', url: string, title: string) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  if (network === 'x') return `https://twitter.com/intent/tweet?url=${u}&text=${t}`;
  if (network === 'linkedin') return `https://www.linkedin.com/sharing/share-offsite/?url=${u}`;
  return `https://wa.me/?text=${t}%20${u}`;
}

const linkClass =
  'inline-flex h-8 items-center gap-1.5 rounded-full bg-muted px-3 text-xs text-muted-foreground transition-colors hover:text-foreground';

export default function ShareLinks({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {(['x', 'linkedin', 'whatsapp'] as const).map((network) => (
        <a
          key={network}
          href={shareUrl(network, url, title)}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {network === 'x' ? 'X' : network === 'linkedin' ? 'LinkedIn' : 'WhatsApp'}
        </a>
      ))}
      <button type="button" onClick={copy} className={linkClass}>
        {copied ? (
          <Icon icon={Tick02Icon} className="size-3.5 text-primary" />
        ) : (
          <Icon icon={Link01Icon} className="size-3.5" />
        )}
        {copied ? 'Copied' : 'Copy link'}
      </button>
    </div>
  );
}
