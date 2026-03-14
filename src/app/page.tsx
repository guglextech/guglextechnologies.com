import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-gray-50 text-sm font-medium text-gray-700 border border-gray-200">
              <span className="w-2 h-2 bg-black" />
              <span>Trusted, Proven and Reliable</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.05] text-black tracking-tight">
              Leverage, Build
              <span className="block mt-2">Scale</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed font-light">
              Empowering the next frontier of African businesses with digital
              infrastructure.
            </p>
            <p className="text-base sm:text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              From concept to deployment, we&apos;re with you every step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/services"
                className="w-full sm:w-auto px-10 py-4 bg-black text-white font-semibold text-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 text-center"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-4 bg-white text-black font-semibold text-lg border-2 border-black hover:bg-gray-50 hover:shadow-xl transition-all duration-300 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { value: '22+', label: 'Projects Completed' },
                { value: '16+', label: 'Happy Clients' },
                { value: '7+', label: 'Years Experience' },
                { value: '24/7', label: 'Support Available' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`py-10 md:py-14 text-center ${
                    i > 0 ? 'border-l border-white/10' : ''
                  } ${i >= 2 ? 'border-t md:border-t-0 border-white/10' : ''}`}
                >
                  <div className="text-3xl md:text-5xl font-extrabold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4 block">
                  What We Do
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                  Our Services
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-black font-semibold hover:text-gray-600 transition-colors"
              >
                View All
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Web Development',
                  description:
                    'Modern, responsive websites and web applications built with cutting-edge technologies.',
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  ),
                },
                {
                  title: 'Mobile Apps',
                  description:
                    'Native and cross-platform mobile applications for iOS and Android platforms.',
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  title: 'Cloud Solutions',
                  description:
                    'Scalable cloud infrastructure and migration services for modern businesses.',
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  ),
                },
                {
                  title: 'AI & Machine Learning',
                  description:
                    'Intelligent solutions powered by AI to automate and optimize your processes.',
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                },
                {
                  title: 'UI/UX Design',
                  description:
                    'Beautiful, intuitive interfaces that engage users and drive conversions.',
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  ),
                },
                {
                  title: 'Consulting',
                  description:
                    'Expert technology consulting to align your strategy with business goals.',
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="group bg-gray-50 hover:bg-black p-8 border border-gray-200 hover:border-black transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-white group-hover:bg-white/10 flex items-center justify-center text-black group-hover:text-white mb-6 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-white mb-3 transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-400 leading-relaxed text-[15px] transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4 block">
                  Why Guglex
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  Built different, delivered better
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                  We combine technical expertise with creative innovation to
                  deliver solutions that not only meet but exceed your
                  expectations.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      title: 'Expert Team',
                      desc: 'Skilled professionals with deep expertise across modern tech stacks.',
                    },
                    {
                      title: 'Proven Track Record',
                      desc: '22+ successful projects delivered across multiple industries.',
                    },
                    {
                      title: 'Cutting-Edge Technology',
                      desc: 'Latest tools and frameworks for optimal, future-proof results.',
                    },
                    {
                      title: '24/7 Support',
                      desc: 'Round-the-clock assistance whenever you need it.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group">
                      <div className="flex-shrink-0 w-10 h-10 bg-black group-hover:scale-110 flex items-center justify-center transition-transform duration-300">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
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

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black text-white p-8 flex flex-col justify-between min-h-[180px]">
                  <div className="text-4xl md:text-5xl font-extrabold mb-auto">
                    99%
                  </div>
                  <div className="text-sm text-gray-400 font-medium uppercase tracking-wider mt-4">
                    Client Satisfaction
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-8 flex flex-col justify-between min-h-[180px]">
                  <div className="text-4xl md:text-5xl font-extrabold text-black mb-auto">
                    24/7
                  </div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider mt-4">
                    Support Available
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-8 flex flex-col justify-between min-h-[180px]">
                  <div className="text-4xl md:text-5xl font-extrabold text-black mb-auto">
                    22+
                  </div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider mt-4">
                    Projects Delivered
                  </div>
                </div>
                <div className="bg-black text-white p-8 flex flex-col justify-between min-h-[180px]">
                  <div className="text-4xl md:text-5xl font-extrabold mb-auto">
                    7+
                  </div>
                  <div className="text-sm text-gray-400 font-medium uppercase tracking-wider mt-4">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 bg-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how we can help you achieve your goals with
              innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-10 py-4 bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                href="/use-cases"
                className="px-10 py-4 bg-transparent text-white font-semibold text-lg border-2 border-white/30 hover:border-white transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
