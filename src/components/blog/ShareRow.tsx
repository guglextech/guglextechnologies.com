'use client';

import { Check, Facebook, Link2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

function shareUrl(network: 'x' | 'facebook' | 'whatsapp', url: string, title: string) {
  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(title);

  if (network === 'x') {
    return `https://twitter.com/intent/tweet?url=${encoded}&text=${text}`;
  }
  if (network === 'facebook') {
    return `https://www.facebook.com/sharer/sharer.php?u=${encoded}`;
  }
  return `https://wa.me/?text=${text}%20${encoded}`;
}

export default function ShareRow({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success('Link copied');
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Could not copy link');
    }
  }

  return (
    <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
      <p className="text-muted-foreground text-[13px]">Share</p>
      <div className="flex flex-wrap items-center gap-2">
        <Button
          nativeButton={false}
          variant="outline"
          size="sm"
          className="h-8 rounded-full px-3"
          render={<a href={shareUrl('x', url, title)} target="_blank" rel="noopener noreferrer" />}
        >
          X
        </Button>
        <Button
          nativeButton={false}
          variant="outline"
          size="sm"
          className="h-8 rounded-full px-3"
          render={<a href={shareUrl('facebook', url, title)} target="_blank" rel="noopener noreferrer" />}
        >
          <Facebook className="size-3.5" />
          Facebook
        </Button>
        <Button
          nativeButton={false}
          variant="outline"
          size="sm"
          className="h-8 rounded-full px-3"
          render={<a href={shareUrl('whatsapp', url, title)} target="_blank" rel="noopener noreferrer" />}
        >
          WhatsApp
        </Button>
        <Button type="button" variant="outline" size="sm" className="h-8 rounded-full px-3" onClick={copy}>
          {copied ? <Check className="size-3.5" /> : <Link2 className="size-3.5" />}
          {copied ? 'Copied' : 'Copy link'}
        </Button>
      </div>
    </div>
  );
}
