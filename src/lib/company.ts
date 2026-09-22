export const PROJECTS = [
  {
    name: 'Ewale',
    href: 'https://ewalepay.com',
    summary: 'Everyday payments on *714*22# — airtime, data, bills, and checkers.',
  },
  {
    name: 'Gyepayment',
    href: 'mailto:guglex.technologies@gmail.com',
    summary: 'Recurring collections for businesses — MoMo, bank, and cards.',
  },
] as const;

export const TEAM = [
  {
    name: 'Samuel Acquah',
    role: 'Founder',
    image: undefined as string | undefined,
  },
] as const;

export function personInitials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}
