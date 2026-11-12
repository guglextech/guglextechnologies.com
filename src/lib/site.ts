import type { LucideIcon } from 'lucide-react';
import {
  Building2,
  Cloud,
  Compass,
  Fingerprint,
  Gauge,
  Globe,
  HeartHandshake,
  Landmark,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  Users,
  Wallet,
  Workflow,
  Zap,
} from 'lucide-react';

export const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Insights' },
] as const;

export const PHILOSOPHY =
  'Technology should simplify lives, unlock opportunities, and accelerate growth — not create complexity.';

export const VISION =
  'To build transformative technology that empowers individuals and businesses, enhances productivity, and accelerates digital growth across emerging and developed markets.';

export const VISION_DETAIL =
  'We envision a world where every business — regardless of size or location — has access to tools that make operations faster, smarter, and more reliable. Guglex aims to be the backbone of the next wave of digital transformation: infrastructure and products that enable efficiency, financial inclusion, and sustainable growth.';

export const PRODUCT_QUALITIES = [
  'Scalable',
  'Secure',
  'User-focused',
  'Reliable',
  'Globally accessible',
] as const;

export const FOCUS_AREAS = [
  'Payments',
  'Financial operations',
  'Business automation',
  'Identity systems',
  'SaaS platforms',
  'Cloud infrastructure',
] as const;

export type Service = {
  slug: string;
  shortTitle: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    slug: 'fintech',
    shortTitle: 'Fintech & payments',
    title: 'Fintech & payments engineering',
    summary: 'Payment rails, wallets, collections, and lending systems built for real money movement.',
    description:
      'We design and build the financial core of your product — mobile money, card and bank integrations, USSD channels, recurring collections, ledgers, and reconciliation — with security and auditability by default.',
    deliverables: [
      'Mobile money, card & bank integrations',
      'USSD and SMS payment channels',
      'Wallets, ledgers & reconciliation',
      'Recurring collections & lending flows',
    ],
    icon: Wallet,
  },
  {
    slug: 'saas',
    shortTitle: 'SaaS platforms',
    title: 'SaaS & product engineering',
    summary: 'Customer-facing platforms, dashboards, and APIs — from first release to scale.',
    description:
      'Our engineers take products from idea to production: architecture, web and mobile apps, admin tooling, and developer-friendly APIs, built on modern frameworks with performance and user experience at the centre.',
    deliverables: [
      'Web & mobile applications',
      'Multi-tenant SaaS platforms',
      'API-driven architectures',
      'Internal tools & dashboards',
    ],
    icon: Layers,
  },
  {
    slug: 'automation',
    shortTitle: 'Automation & AI',
    title: 'Business automation & AI',
    summary: 'Remove manual work from operations with workflows, integrations, and intelligence.',
    description:
      'We map the processes that slow your team down, then replace them with automation systems, integrations, and data-driven decision tools — including applied AI and machine learning where it earns its place.',
    deliverables: [
      'Workflow & process automation',
      'System integrations',
      'Applied AI & machine learning',
      'Data intelligence & reporting',
    ],
    icon: Workflow,
  },
  {
    slug: 'cloud',
    shortTitle: 'Cloud infrastructure',
    title: 'Cloud & digital infrastructure',
    summary: 'Resilient, observable infrastructure designed for growth and high availability.',
    description:
      'We architect and operate cloud environments that stay up under load: infrastructure as code, CI/CD, monitoring, and cost-aware scaling — so your platform grows without re-platforming.',
    deliverables: [
      'Cloud architecture & migration',
      'CI/CD & DevOps',
      'Observability & reliability',
      'Cost & performance optimisation',
    ],
    icon: Cloud,
  },
  {
    slug: 'identity',
    shortTitle: 'Security & identity',
    title: 'Identity, security & compliance',
    summary: 'Trust built into every layer — identity, access, data protection, and resilience.',
    description:
      'We help you protect users and financial operations with identity systems, secure authentication, data protection practices, and architectures designed to satisfy regulators and enterprise buyers.',
    deliverables: [
      'Identity & KYC flows',
      'Authentication & access control',
      'Security reviews & hardening',
      'Compliance-ready architecture',
    ],
    icon: Fingerprint,
  },
  {
    slug: 'advisory',
    shortTitle: 'Technology strategy',
    title: 'Technology strategy & modernisation',
    summary: 'Clear technical direction for transformation programmes and legacy systems.',
    description:
      'For leadership teams modernising legacy systems or planning a new platform, we provide architecture reviews, roadmaps, build-vs-buy guidance, and hands-on delivery leadership.',
    deliverables: [
      'Architecture & code reviews',
      'Digital transformation roadmaps',
      'Legacy system modernisation',
      'Fractional technical leadership',
    ],
    icon: Compass,
  },
];

export const TECHNOLOGIES = [
  'Cloud computing',
  'Artificial intelligence',
  'Machine learning',
  'Automation systems',
  'API-driven architecture',
  'Data intelligence',
] as const;

export const PROCESS = [
  {
    step: '01',
    title: 'Discover',
    description: 'We clarify goals, constraints, users, and success metrics before any code is written.',
  },
  {
    step: '02',
    title: 'Architect',
    description: 'We design the system — data, security, integrations, and scale — and agree the plan with you.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Design and engineering move together in short cycles, with working software every step.',
  },
  {
    step: '04',
    title: 'Launch & scale',
    description: 'We ship to production, monitor, and stay on to optimise as your product grows.',
  },
] as const;

export const ENGAGEMENTS = [
  {
    title: 'Advisory sprint',
    duration: '2–4 weeks',
    description: 'Architecture review, technical due diligence, or a roadmap your team can execute.',
  },
  {
    title: 'Product build',
    duration: 'Fixed scope',
    description: 'We own delivery of a defined product or platform from design to production.',
  },
  {
    title: 'Dedicated team',
    duration: 'Ongoing',
    description: 'A cross-functional Guglex squad embedded with your team, scaling as you need.',
  },
  {
    title: 'Platform partnership',
    duration: 'Long-term',
    description: 'Build on our payments infrastructure and APIs, with integration support from our engineers.',
  },
] as const;

export type Market = {
  title: string;
  description: string;
  needs: string[];
  icon: LucideIcon;
};

export const MARKETS: Market[] = [
  {
    title: 'Small & medium businesses',
    description: 'Affordable digital tools that improve how the business runs and gets paid.',
    needs: ['Operations', 'Payments', 'Customer management', 'Automation'],
    icon: Store,
  },
  {
    title: 'Financial institutions',
    description: 'Microfinance, savings & loans, digital lenders, cooperatives, and fintech startups.',
    needs: ['Lending systems', 'Collections', 'Digital channels', 'Reconciliation'],
    icon: Landmark,
  },
  {
    title: 'Startups & digital businesses',
    description: 'Technology-driven teams that need to ship fast on infrastructure that scales.',
    needs: ['Scalable infrastructure', 'APIs', 'Custom platforms', 'Product engineering'],
    icon: Rocket,
  },
  {
    title: 'Enterprises',
    description: 'Organisations modernising legacy systems and running digital transformation.',
    needs: ['Modernisation', 'Integration', 'Cloud migration', 'Process automation'],
    icon: Building2,
  },
];

export const ADVANTAGES = [
  {
    title: 'Deep emerging-market understanding',
    description: 'We build with local realities in mind while holding to global engineering standards.',
    icon: Globe,
  },
  {
    title: 'Engineering-first culture',
    description: 'Our foundation is technical excellence — not marketing-driven software.',
    icon: Target,
  },
  {
    title: 'Flexibility & speed',
    description: 'We move faster than large enterprise vendors while staying highly adaptable.',
    icon: Zap,
  },
  {
    title: 'Cost-efficient innovation',
    description: 'Enterprise-grade technology delivered at accessible pricing.',
    icon: Gauge,
  },
  {
    title: 'Scalable infrastructure',
    description: 'Systems designed for high growth and long-term expansion from day one.',
    icon: Layers,
  },
  {
    title: 'Developer ecosystem vision',
    description: 'We build platforms other businesses and developers can build on top of.',
    icon: Sparkles,
  },
] as const;

export const MISSION_PILLARS = [
  {
    index: '01',
    title: 'Solve real problems at scale',
    description:
      'Technology for practical challenges in payments, financial operations, business automation, and identity — simple, efficient, and affordable enough that even the smallest business can access world-class tools.',
    points: ['Simple to use', 'Cost-effective', 'Highly scalable', 'Secure by default'],
  },
  {
    index: '02',
    title: 'Empower growth through innovation',
    description:
      'We push engineering forward with cloud, AI, machine learning, automation, and API-driven, data-informed systems — with performance, security, and user experience at the centre.',
    points: ['High performance', 'Reliability', 'Seamless experiences', 'Developer flexibility'],
  },
  {
    index: '03',
    title: 'Build for emerging markets — and beyond',
    description:
      'Our roots are in Africa; our ambition is global. We design infrastructure flexible enough for diverse markets, regulations, and user behaviour, and work to bridge the digital gap.',
    points: ['Secure financial systems', 'Scalable SaaS tools', 'Intelligent automation', 'Reliable platforms'],
  },
] as const;

export const VALUES = [
  {
    title: 'Engineering excellence',
    description: 'Modern, robust practices that deliver reliability, performance, and high availability.',
    icon: Target,
  },
  {
    title: 'User-centred design',
    description: 'Guided by empathy, usability, and simplicity. Technology should adapt to people.',
    icon: Users,
  },
  {
    title: 'Trust & security',
    description: 'Data protection, compliance, and resilient architecture that safeguard users and money.',
    icon: ShieldCheck,
  },
  {
    title: 'Collaboration',
    description: 'We build ecosystems — through APIs, integrations, and partnerships.',
    icon: HeartHandshake,
  },
  {
    title: 'Impact',
    description: 'We measure value by the positive, lasting change our work creates.',
    icon: Sparkles,
  },
] as const;

export const COMMITMENTS = [
  'Delivering world-class fintech and SaaS products',
  'Strengthening digital infrastructure for modern businesses',
  'Supporting entrepreneurs and enterprises with cost-effective tools',
  'Contributing to a future where technology is accessible to everyone',
  'Building a global brand that stands for trust, innovation, and excellence',
] as const;

export const PLATFORMS = [
  {
    name: 'Ewale',
    category: 'Consumer payments',
    href: 'https://ewalepay.com',
    linkLabel: 'ewalepay.com',
    summary:
      'Everyday payments on any phone through USSD *714*22# and the web — airtime, data, electricity, water, TV, and exam result checkers.',
    challenge:
      'Millions of people pay bills on feature phones, without data, often late at night. Apps and OTPs fail exactly when they are needed.',
    built: [
      'USSD and web checkout on one shortcode',
      'Biller verification before payment',
      'Mobile money settlement with SMS delivery',
      'Telco, utility, TV & education integrations',
    ],
  },
  {
    name: 'Gyepayment',
    category: 'Business collections',
    href: 'mailto:business@guglextechnologies.com?subject=Gyepayment',
    linkLabel: 'Request access',
    summary:
      'Automated recurring and installment collections from mobile money, bank accounts, and cards — for lenders, BNPL providers, and subscription businesses.',
    challenge:
      'Businesses lose time and revenue chasing payments manually. Collections are inconsistent, unpredictable, and hard to reconcile.',
    built: [
      'Customer-authorised payment mandates',
      'Scheduling and intelligent retries',
      'Financial records & reconciliation',
      'Collection, disbursement, USSD & SMS',
    ],
  },
] as const;

export const TEAM = [
  { name: 'XXXX', role: 'Founder' },
  { name: 'XXXX', role: 'CTO' },
  { name: 'XXXX', role: 'Business Development' },
  { name: 'XXXX', role: 'Mobile Engineer' },
] as const;

export const ENGAGEMENT_OPTIONS = [
  'New product build',
  'Fintech / payments integration',
  'Automation & AI',
  'Cloud & infrastructure',
  'Advisory / architecture review',
  'Dedicated team',
  'Partnership',
  'Something else',
] as const;

export const LOCATION = 'Accra, Ghana';
