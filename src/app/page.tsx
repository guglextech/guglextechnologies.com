import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const capabilities = [
  {
    title: 'Web & Product Engineering',
    description:
      'Custom platforms, dashboards, and customer-facing products built for reliability and scale.',
  },
  {
    title: 'Payments & Digital Infrastructure',
    description:
      'Mobile money, USSD, and payment systems designed for African markets and real-world usage.',
  },
  {
    title: 'Mobile Experiences',
    description:
      'Native and cross-platform apps that feel fast, clear, and easy to use from day one.',
  },
  {
    title: 'Strategy & Delivery',
    description:
      'From discovery to launch — architecture, design, and engineering aligned to business outcomes.',
  },
];

const products = [
  {
    name: 'Ewale',
    description: 'Consumer payments for airtime, data, ECG prepaid, and WASSCE results.',
    href: 'https://ewalepay.com',
  },
  {
    name: 'Gyepayments',
    description: 'Business payment collection with mobile money, bank transfer, and cards.',
    href: 'https://gyepayments.guglextechnologies.com',
  },
];

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-black text-white">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(1,148,255,0.18),_transparent_55%)]" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-32 md:pb-28 md:pt-40">
            <p className="home-fade-up text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue mb-6">
              Guglex Technologies
            </p>
            <h1 className="home-fade-up home-fade-up-delay-1 max-w-4xl text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              Technology that builds businesses.
            </h1>
            <p className="home-fade-up home-fade-up-delay-2 max-w-xl text-lg md:text-xl text-white/70 leading-relaxed mb-10">
              We design and ship digital products, payments, and infrastructure
              for companies across Africa and beyond.
            </p>
            <div className="home-fade-up home-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold hover:bg-[#0176cc] transition-colors"
              >
                Start a project
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/25 text-white font-semibold hover:border-white hover:bg-white/5 transition-colors"
              >
                Explore services
              </Link>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { value: '7+', label: 'Years building' },
                { value: '31+', label: 'Projects delivered' },
                { value: '22+', label: 'Companies served' },
                { value: '99%', label: 'Client satisfaction' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-10 md:py-12 ${
                    i > 0 ? 'md:border-l md:border-gray-200 md:pl-8' : ''
                  } ${i % 2 === 1 ? 'pl-6 md:pl-8' : ''} ${
                    i >= 2 ? 'border-t border-gray-200 md:border-t-0' : ''
                  }`}
                >
                  <div className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-24 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16 md:mb-20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue mb-4">
                What we do
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-5">
                Capabilities built for real business outcomes.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                End-to-end product delivery — from strategy and design through
                engineering, launch, and ongoing support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 border-t border-gray-200">
              {capabilities.map((item, index) => (
                <div
                  key={item.title}
                  className="group border-b border-gray-200 py-8 md:py-10"
                >
                  <div className="flex items-start gap-5">
                    <span className="text-sm font-semibold text-brand-blue tabular-nums pt-1">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 group-hover:text-brand-blue transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all"
              >
                View all services
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-24 md:py-28 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green mb-4">
                  Our products
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-5">
                  Platforms we build and operate.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Beyond client work, we run products that move money and connect
                  people to essential services every day.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4">
                {products.map((product) => (
                  <a
                    key={product.name}
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-6 bg-white border border-gray-200 px-6 py-7 md:px-8 hover:border-brand-blue transition-colors"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 group-hover:text-brand-blue transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed max-w-lg">
                        {product.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="w-5 h-5 text-gray-300 flex-shrink-0 mt-1 transition-all group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-24 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange mb-4">
                How we work
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-5">
                Clear process. Reliable delivery.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A focused engagement model that keeps scope clear, quality high,
                and timelines honest.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {[
                {
                  step: '01',
                  title: 'Discover',
                  description:
                    'We clarify goals, constraints, and success metrics before a single line of code.',
                },
                {
                  step: '02',
                  title: 'Build',
                  description:
                    'Design and engineering move together in short cycles with transparent progress.',
                },
                {
                  step: '03',
                  title: 'Launch & support',
                  description:
                    'We ship to production, monitor, and stay available as your product grows.',
                },
              ].map((item) => (
                <div key={item.step}>
                  <div className="text-sm font-semibold text-brand-blue mb-4">
                    {item.step}
                  </div>
                  <div className="h-px w-12 bg-brand-blue mb-6" />
                  <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
                Let&apos;s build what&apos;s next.
              </h2>
              <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-xl">
                Tell us about your product, payment flow, or platform challenge.
                We&apos;ll respond with a clear next step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold hover:bg-[#0176cc] transition-colors"
                >
                  Talk to us
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </Link>
                <Link
                  href="/use-cases"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/25 text-white font-semibold hover:border-white hover:bg-white/5 transition-colors"
                >
                  See our work
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
