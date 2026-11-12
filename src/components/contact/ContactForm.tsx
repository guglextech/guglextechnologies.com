'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { ENGAGEMENT_OPTIONS } from '@/lib/site';
import { cn } from '@/lib/utils';

const fieldClass =
  'w-full rounded-xl border bg-background px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary';

export default function ContactForm({ email }: { email: string }) {
  const [topic, setTopic] = useState<string>(ENGAGEMENT_OPTIONS[0]);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '');
    const from = String(data.get('email') ?? '');
    const company = String(data.get('company') ?? '');
    const message = String(data.get('message') ?? '');

    const subject = `${topic} — ${company || name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${from}`,
      company ? `Company: ${company}` : null,
      `Topic: ${topic}`,
      '',
      message,
    ]
      .filter((line) => line !== null)
      .join('\n');

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border bg-card p-6 md:p-10">
      <fieldset>
        <legend className="text-sm font-medium">What can we help with?</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {ENGAGEMENT_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={topic === option}
              onClick={() => setTopic(option)}
              className={cn(
                'rounded-full px-3.5 py-1.5 text-[13px] transition-colors',
                topic === option
                  ? 'bg-foreground text-background'
                  : 'bg-muted text-muted-foreground hover:text-foreground',
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Name</span>
          <input name="name" required autoComplete="name" className={cn(fieldClass, 'mt-2')} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Work email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={cn(fieldClass, 'mt-2')}
            placeholder="you@company.com"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium">
            Company <span className="font-normal text-muted-foreground">(optional)</span>
          </span>
          <input name="company" autoComplete="organization" className={cn(fieldClass, 'mt-2')} placeholder="Company name" />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium">Project details</span>
          <textarea
            name="message"
            required
            rows={5}
            className={cn(fieldClass, 'mt-2 resize-y')}
            placeholder="Goals, timeline, current systems, and anything else we should know."
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          {sent ? (
            <span className="inline-flex items-center gap-1.5 text-foreground">
              <Check className="size-3.5 text-neon-green" />
              Your email app should open with the details filled in.
            </span>
          ) : (
            <>Opens your email app, addressed to {email}.</>
          )}
        </p>
        <button
          type="submit"
          className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          Send enquiry
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </form>
  );
}
