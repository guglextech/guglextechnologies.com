export const PROJECTS = [
  {
    name: 'Ewale',
    href: 'https://ewalepay.com',
    tag: 'Consumer',
    summary: 'Airtime, data, ECG, water, TV, and result checkers on any phone.',
    color: 'var(--brand-blue)',
    icon: 'phone',
    highlights: ['*714*22#', 'Airtime', 'ECG', 'Checkers'],
  },
  {
    name: 'Gyepayment',
    href: 'mailto:business@guglextechnologies.com',
    tag: 'Business',
    summary: 'Recurring collections for loans, BNPL, and subscriptions.',
    color: 'var(--brand-green)',
    icon: 'repeat',
    highlights: ['MoMo debit', 'Bank', 'Cards', 'Reconcile'],
  },
] as const;

export const TEAM = [
  { name: 'XXXX', role: 'Founder', color: 'var(--brand-blue)' },
  { name: 'XXXX', role: 'CTO', color: 'var(--brand-green)' },
  { name: 'XXXX', role: 'Business Development', color: 'var(--brand-orange)' },
  { name: 'XXXX', role: 'Mobile Engineer', color: 'var(--brand-yellow)' },
] as const;
