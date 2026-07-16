import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const values = [
  {
    title: 'Integrity',
    description:
      'We operate with transparency and honesty, building trust through clear communication and ethical delivery in every engagement.',
  },
  {
    title: 'Innovation',
    description:
      'We apply emerging technology thoughtfully — solving real constraints with practical systems, not novelty for its own sake.',
  },
  {
    title: 'Excellence',
    description:
      'We hold a high bar for code quality, design clarity, and client communication from discovery through launch and support.',
  },
  {
    title: 'Passion',
    description:
      'We care about shipping technology that people rely on. That focus shows in the products and platforms we build.',
  },
];

export default function About() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(1,148,255,0.16),_transparent_55%)]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">
              About us
            </p>
            <h1 className="mb-6 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              We build technology that builds businesses.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/65 md:text-xl">
              Guglex Technologies is a product-focused software company helping
              businesses across Africa and beyond design, build, and scale
              digital products that drive real results.
            </p>
          </div>
        </section>

        {/* Who we are */}
        <section className="border-b border-gray-200 bg-white py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
            <div className="lg:col-span-4">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
                Who we are
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
                A focused product and payments company.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-gray-600 lg:col-span-7 lg:col-start-6">
              <p>
                We design and ship digital products, payment systems, and
                platforms for companies that need reliable technology — not
                slide decks. From consumer payments to business integrations,
                our work is built for production use.
              </p>
              <p>
                Alongside client delivery, we operate our own products, including{' '}
                <a
                  href="https://ewalepay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-blue hover:underline"
                >
                  Ewale
                </a>
                , so we stay close to the same challenges our partners face:
                clarity, speed, trust, and systems that hold up after launch.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 max-w-2xl md:mb-16">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
                Foundation
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl">
                Mission and vision
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Clear principles that shape how we build, partner, and grow with
                every client.
              </p>
            </div>

            <div className="border-t border-gray-200">
              <article className="grid grid-cols-1 gap-4 border-b border-gray-200 py-10 md:grid-cols-12 md:gap-10 md:py-14">
                <div className="md:col-span-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
                    Mission
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="mb-4 text-xl font-bold tracking-tight text-black md:text-2xl">
                    Empower businesses through purposeful technology.
                  </h3>
                  <p className="max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
                    We bridge complex technical challenges and practical,
                    scalable solutions that create measurable business value —
                    from first prototype to production systems.
                  </p>
                </div>
              </article>

              <article className="grid grid-cols-1 gap-4 border-b border-gray-200 py-10 md:grid-cols-12 md:gap-10 md:py-14">
                <div className="md:col-span-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
                    Vision
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="mb-4 text-xl font-bold tracking-tight text-black md:text-2xl">
                    Become Africa&apos;s most trusted technology partner.
                  </h3>
                  <p className="max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
                    We want African businesses to compete globally on the
                    strength of world-class digital infrastructure and products
                    built with local context and global standards.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-y border-gray-200 bg-gray-50 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 max-w-2xl md:mb-16">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
                Values
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl">
                How we work.
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                The standards that guide our decisions and how we show up for
                every engagement.
              </p>
            </div>

            <div className="border-t border-gray-200">
              {values.map((value, index) => (
                <article
                  key={value.title}
                  className="grid grid-cols-1 gap-3 border-b border-gray-200 py-8 md:grid-cols-12 md:gap-8 md:py-10"
                >
                  <div className="md:col-span-1">
                    <span className="text-sm font-semibold tabular-nums text-brand-blue">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-lg font-semibold tracking-tight text-black">
                      {value.title}
                    </h3>
                  </div>
                  <div className="md:col-span-8">
                    <p className="max-w-2xl text-base leading-relaxed text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-black text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(1,148,255,0.15),_transparent_50%)]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl">
                Let&apos;s build what&apos;s next.
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-white/65">
                Tell us about your product, payment flow, or platform challenge.
                We&apos;ll respond with a clear next step.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand-blue px-8 py-4 font-semibold text-white transition-colors hover:bg-[#0176cc]"
                >
                  Start a conversation
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <Link
                  href="/use-cases"
                  className="inline-flex items-center justify-center border border-white/25 px-8 py-4 font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
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
