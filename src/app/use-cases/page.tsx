import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    name: 'Ewale',
    category: 'Consumer payments',
    summary:
      'A consumer platform for purchasing airtime, data bundles, ECG prepaid, and WASSCE results across major networks — built for speed, clarity, and everyday reliability.',
    outcomes: [
      'Multi-network airtime & data',
      'ECG prepaid top-ups',
      'WASSCE results purchases',
      'Simple, mobile-first checkout',
    ],
    href: 'https://ewalepay.com',
  },
  {
    name: 'Jolee Bakery',
    category: 'Ecommerce & payments',
    summary:
      'An ecommerce storefront for bakery orders with integrated checkout — Hubtel for local mobile money and Stripe for card payments, so customers can pay the way that works for them.',
    outcomes: [
      'Ecommerce storefront',
      'Hubtel payment integration',
      'Stripe card payments',
      'Order & checkout flow',
    ],
  },
  {
    name: 'Victory Entertainment Empire',
    category: 'Entertainment platform',
    summary:
      'A digital platform for Victory Entertainment Empire supporting events, promotions, and audience engagement with a clean experience built for fans and organizers.',
    outcomes: [
      'Brand & event presence',
      'Audience-facing experience',
      'Content & promotions',
      'Mobile-ready delivery',
    ],
  },
  {
    name: 'Public Sector Workers Union',
    category: 'Membership platform',
    summary:
      'A digital presence and member-facing experience for the Public Sector Workers Union — built to communicate programs, updates, and services clearly to members.',
    outcomes: [
      'Union information hub',
      'Member-focused content',
      'Clear service navigation',
      'Reliable public access',
    ],
  },
  {
    name: 'Wotiriye Lottery',
    category: 'Lottery & digital services',
    summary:
      'A lottery platform experience designed for secure participation, clear draws, and trustworthy digital workflows for players and operators.',
    outcomes: [
      'Lottery participation flow',
      'Secure transaction handling',
      'Clear draw experience',
      'Operator-ready workflows',
    ],
  },
  {
    name: 'DV Publication',
    category: 'Publishing platform',
    summary:
      'A publishing-focused digital platform for DV Publication — helping content reach readers with a structured, professional presentation online.',
    outcomes: [
      'Publication presence',
      'Content presentation',
      'Reader-friendly layout',
      'Scalable content structure',
    ],
  },
  {
    name: 'Hubtel Integration',
    category: 'Payment integration',
    summary:
      'End-to-end Hubtel payment integration for businesses that need mobile money and card collection with reliable callbacks, reconciliation, and production-ready error handling.',
    outcomes: [
      'Mobile money collection',
      'Secure checkout flows',
      'Webhook & status sync',
      'Settlement-ready reporting',
    ],
  },
  {
    name: 'Paystack Integration',
    category: 'Payment integration',
    summary:
      'Paystack integration for products that need card and local payment methods — implemented with clean APIs, verified webhooks, and a checkout experience that converts.',
    outcomes: [
      'Card & local payments',
      'Verified webhook handling',
      'Retry-safe transactions',
      'Developer-friendly setup',
    ],
  },
];

export default function UseCases() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative bg-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(1,148,255,0.16),_transparent_55%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue mb-6">
              Research
            </p>
            <h1 className="max-w-3xl text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              Selected work in products and payments.
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-white/65 leading-relaxed">
              Real platforms and integrations we&apos;ve designed, built, and
              shipped for African markets.
            </p>
          </div>
        </section>

        {/* Case studies */}
        <section className="py-24 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16 md:mb-20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue mb-4">
                Case studies
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-5">
                Projects that moved money and served users.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Selected client work across ecommerce, payments, publishing, and
                membership platforms — built to work in production.
              </p>
            </div>

            <div className="border-t border-gray-200">
              {caseStudies.map((study, index) => (
                <article
                  key={study.name}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 border-b border-gray-200 py-10 md:py-14"
                >
                  <div className="lg:col-span-1">
                    <span className="text-sm font-semibold text-brand-blue tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="lg:col-span-4">
                    <p className="text-sm font-medium text-gray-500 mb-2">
                      {study.category}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold text-black tracking-tight group-hover:text-brand-blue transition-colors">
                      {study.name}
                    </h3>
                    {study.href && (
                      <a
                        href={study.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-all"
                      >
                        Visit product
                        <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                      </a>
                    )}
                  </div>

                  <div className="lg:col-span-4">
                    <p className="text-gray-600 leading-relaxed">
                      {study.summary}
                    </p>
                  </div>

                  <div className="lg:col-span-3">
                    <ul className="space-y-2.5">
                      {study.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="text-sm text-gray-500 flex items-start gap-2"
                        >
                          <span className="mt-2 h-1 w-1 rounded-full bg-brand-blue flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Focus areas */}
        <section className="py-24 md:py-28 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green mb-4">
                Focus
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-5">
                Where we deliver the most value.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {[
                {
                  title: 'Consumer payment products',
                  description:
                    'Everyday services like airtime, utilities, and digital purchases — designed for speed and trust.',
                },
                {
                  title: 'Gateway integrations',
                  description:
                    'Hubtel, Paystack, and similar providers wired cleanly into your product with reliable callbacks.',
                },
                {
                  title: 'Production readiness',
                  description:
                    'Error handling, reconciliation, and monitoring so payments stay dependable after launch.',
                },
              ].map((item) => (
                <div key={item.title}>
                  <div className="h-px w-12 bg-brand-blue mb-6" />
                  <h3 className="text-xl font-bold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-black text-white overflow-hidden">
          <div className="brand-bar" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(1,148,255,0.15),_transparent_50%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                Need a payment product or integration?
              </h2>
              <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-xl">
                Tell us what you&apos;re building. We&apos;ll help you scope the
                right approach for Hubtel, Paystack, or a custom payments flow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold hover:bg-[#0176cc] transition-colors"
                >
                  Start a conversation
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/25 text-white font-semibold hover:border-white hover:bg-white/5 transition-colors"
                >
                  View services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
