import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Guglex Technologies',
  description:
    'Learn about Guglex Technologies — our mission, values, and the team behind innovative digital solutions for African businesses and beyond.',
};

export default function About() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-28 md:py-40 bg-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-white/5 text-sm font-medium text-gray-300 border border-white/10">
              <span className="w-2 h-2 bg-white" />
              <span>Since 2018</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tight leading-[1.05]">
              Building the Digital
              <span className="block mt-2">Backbone of Africa</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We are a team of engineers, designers, and strategists on a
              mission to empower businesses through technology that is
              accessible, scalable, and transformative.
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { value: '7+', label: 'Years of Experience' },
                { value: '22+', label: 'Projects Delivered' },
                { value: '16+', label: 'Happy Clients' },
                { value: '99%', label: 'Client Satisfaction' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`py-10 md:py-14 text-center ${
                    i > 0 ? 'border-l border-gray-200' : ''
                  } ${i >= 2 ? 'border-t md:border-t-0 border-gray-200' : ''}`}
                >
                  <div className="text-3xl md:text-5xl font-extrabold text-black mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4 block">
                  Our Mission
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  Bridging the gap between ambition and technology
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  At Guglex Technologies, we empower businesses through
                  innovative technology solutions. We bridge the gap between
                  complex technological challenges and practical, scalable
                  solutions that drive real business value.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe technology should be accessible, intuitive, and
                  transformative. Every project we undertake is an opportunity to
                  push boundaries, solve problems, and create lasting impact for
                  our clients.
                </p>
              </div>

              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4 block">
                  Our Vision
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  A digitally empowered Africa and beyond
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We see a future where every business, regardless of size or
                  location, has access to world-class digital infrastructure. We
                  are building the tools and partnerships to make that future a
                  reality.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From Accra to the world, our vision is to be the trusted
                  technology partner for companies ready to scale, innovate, and
                  lead in their industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4 block">
                What Drives Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600">
                The principles behind every line of code, every design decision,
                and every client relationship.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Integrity',
                  description:
                    'We operate with honesty and transparency in every interaction — building trust that lasts.',
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
                {
                  title: 'Innovation',
                  description:
                    'We embrace emerging technologies and creative approaches to solve the toughest challenges.',
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                },
                {
                  title: 'Quality',
                  description:
                    'We pursue excellence in every deliverable — from code quality to user experience to performance.',
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ),
                },
                {
                  title: 'Partnership',
                  description:
                    'Your success is our success. We invest in long-term relationships, not one-off transactions.',
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="group bg-white p-8 border border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gray-100 group-hover:bg-black flex items-center justify-center text-black group-hover:text-white mb-6 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4 block">
                  How We Work
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  Our Approach
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                  We follow a structured yet flexible process that adapts to the
                  unique needs of every project — from initial discovery to
                  long-term support.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      step: '01',
                      title: 'Discover & Define',
                      desc: 'We listen first. Deep research into your business, users, and goals shapes every decision.',
                    },
                    {
                      step: '02',
                      title: 'Design & Prototype',
                      desc: 'We craft intuitive experiences and validate ideas early before a single line of production code.',
                    },
                    {
                      step: '03',
                      title: 'Build & Iterate',
                      desc: 'Agile development with continuous feedback loops ensures we ship the right thing, fast.',
                    },
                    {
                      step: '04',
                      title: 'Launch & Scale',
                      desc: 'We deploy with confidence and provide ongoing support to help you grow.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 group-hover:bg-black flex items-center justify-center transition-colors duration-300">
                        <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors duration-300">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black text-white p-8 flex flex-col justify-between min-h-[200px]">
                    <svg className="w-8 h-8 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <div>
                      <div className="text-2xl font-bold mb-1">Clean Code</div>
                      <div className="text-gray-400 text-sm">Maintainable & tested</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-8 flex flex-col justify-between min-h-[200px]">
                    <svg className="w-8 h-8 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <div className="text-2xl font-bold text-black mb-1">Fast Delivery</div>
                      <div className="text-gray-500 text-sm">Agile & iterative</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-8 flex flex-col justify-between min-h-[200px]">
                    <svg className="w-8 h-8 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <div>
                      <div className="text-2xl font-bold text-black mb-1">Cloud-Native</div>
                      <div className="text-gray-500 text-sm">Scalable & resilient</div>
                    </div>
                  </div>
                  <div className="bg-black text-white p-8 flex flex-col justify-between min-h-[200px]">
                    <svg className="w-8 h-8 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <div>
                      <div className="text-2xl font-bold mb-1">24/7 Support</div>
                      <div className="text-gray-400 text-sm">Always available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4 block">
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
                The Story So Far
              </h2>
              <p className="text-lg text-gray-600">
                From a small team with big ambitions to a trusted technology
                partner — every milestone has shaped who we are today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  year: '2018',
                  title: 'Founded',
                  desc: 'Started with a small team in Accra, driven by a shared belief that technology could transform African businesses.',
                },
                {
                  year: '2020',
                  title: 'First Major Clients',
                  desc: 'Secured key partnerships and delivered projects that proved our approach across multiple industries.',
                },
                {
                  year: '2022',
                  title: 'Rapid Growth',
                  desc: 'Expanded our service offerings and team, growing our portfolio to serve clients across the continent.',
                },
                {
                  year: '2024+',
                  title: 'Scaling New Heights',
                  desc: 'Leading innovation with 22+ completed projects, 16+ clients, and a vision for global reach.',
                },
              ].map((milestone, i) => (
                <div key={i} className="relative">
                  <div className="bg-white border border-gray-200 p-8 h-full hover:border-black hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-extrabold text-black mb-1">
                      {milestone.year}
                    </div>
                    <div className="w-8 h-0.5 bg-black mb-4" />
                    <h3 className="text-lg font-bold text-black mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-24 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4 block">
                  Technology Stack
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  Built with the best tools
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We use modern, battle-tested technologies to deliver reliable,
                  high-performance solutions. Our stack evolves with the
                  industry so your product never falls behind.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  'React / Next.js',
                  'Node.js',
                  'TypeScript',
                  'Python',
                  'AWS / GCP',
                  'PostgreSQL',
                  'Flutter',
                  'Docker',
                  'Figma',
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 border border-gray-200 px-5 py-4 text-center text-sm font-semibold text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 bg-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to build something great?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you need a full product team or a strategic technology
              partner, we would love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-10 py-4 bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="px-10 py-4 bg-transparent text-white font-semibold text-lg border-2 border-white/30 hover:border-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
