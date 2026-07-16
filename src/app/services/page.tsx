import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Web & Product Engineering',
    description:
      'Custom web applications and digital products built with modern frameworks — from marketing sites to complex enterprise platforms.',
    details: ['Next.js & modern stacks', 'Responsive & accessible', 'SEO & performance', 'Scalable architecture'],
  },
  {
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications for iOS and Android, designed for clarity, speed, and everyday reliability.',
    details: ['iOS & Android', 'Cross-platform delivery', 'Store-ready releases', 'Ongoing iteration'],
  },
  {
    title: 'Payments & Digital Infrastructure',
    description:
      'Payment systems, USSD, and integrations built for African markets — mobile money, bank transfer, and card collection.',
    details: ['Mobile money', 'USSD flows', 'Gateway integration', 'Settlement & reporting'],
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Cloud infrastructure, migration, and operations that keep products stable, observable, and cost-efficient as they grow.',
    details: ['AWS & Azure', 'CI/CD pipelines', 'Monitoring & uptime', 'Cost optimization'],
  },
  {
    title: 'UI/UX Design',
    description:
      'User-centered interfaces and design systems that make products clear, usable, and consistent across every screen.',
    details: ['Product design', 'Design systems', 'Prototyping', 'Accessibility'],
  },
  {
    title: 'Consulting & Strategy',
    description:
      'Technical direction for teams that need clarity — audits, architecture planning, and roadmaps aligned to business goals.',
    details: ['Technology audit', 'Architecture planning', 'Digital transformation', 'Delivery advisory'],
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We define goals, constraints, and success metrics before committing to a build plan.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Scope, architecture, and milestones are set so delivery stays clear and accountable.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Design and engineering move in short cycles with transparent progress and reviews.',
  },
  {
    step: '04',
    title: 'Launch & support',
    description: 'We ship to production, monitor quality, and stay available as the product evolves.',
  },
];

export default function Services() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative bg-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(1,148,255,0.16),_transparent_55%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue mb-6">
              Services
            </p>
            <h1 className="max-w-3xl text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              Capabilities for products that need to ship and scale.
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-white/65 leading-relaxed">
              End-to-end design, engineering, and infrastructure — tailored to
              how your business actually operates.
            </p>
          </div>
        </section>

        {/* Services list */}
        <section className="py-24 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16 md:mb-20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue mb-4">
                What we offer
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-5">
                A focused set of services.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Each engagement is scoped around outcomes — not a menu of
                disconnected deliverables.
              </p>
            </div>

            <div className="border-t border-gray-200">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 border-b border-gray-200 py-10 md:py-12"
                >
                  <div className="lg:col-span-1">
                    <span className="text-sm font-semibold text-brand-blue tabular-nums">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-2xl font-bold text-black tracking-tight group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:col-span-3">
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="text-sm text-gray-500 flex items-start gap-2"
                        >
                          <span className="mt-2 h-1 w-1 rounded-full bg-brand-blue flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 md:py-28 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green mb-4">
                How we work
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-5">
                A clear path from brief to launch.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Simple stages, honest timelines, and delivery you can track.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
              {process.map((item) => (
                <div key={item.step}>
                  <div className="text-sm font-semibold text-brand-blue mb-4">
                    {item.step}
                  </div>
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
                Ready to scope your next build?
              </h2>
              <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-xl">
                Share your product goals or technical challenges. We&apos;ll
                respond with a clear recommendation and next step.
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
