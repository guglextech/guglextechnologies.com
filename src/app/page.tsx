import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
          <div className="absolute inset-0 bg-grid-pattern"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center animate-fade-in">
              <div className="inline-block mb-6 px-4 py-2 bg-gray-100 text-sm font-medium text-gray-700 border border-gray-200">
                <span className="w-2 h-2 inline-block bg-black mr-2"></span>
                Trusted by 22+ Companies Worldwide
              </div>
              
              <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight text-black">
                 Leverage,Build 
                <span className="block mt-2"> Scale</span>
          </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Empowering the next frontier of African businesses with digital infrastructure.
                <span className="block mt-2 text-lg text-gray-500">From concept to deployment, we're with you every step.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link
                  href="/services"
                  className="px-10 py-4 bg-black text-white font-semibold text-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                </Link>
                <Link
                  href="/about"
                  className="px-10 py-4 bg-white text-black font-semibold text-lg border-2 border-black hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>500+ Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>7+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 relative bg-gray-50">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Web Development',
                  description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )
                },
                {
                  title: 'Mobile Apps',
                  description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: 'Cloud Solutions',
                  description: 'Scalable cloud infrastructure and migration services for modern businesses.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  )
                },
                {
                  title: 'AI & Machine Learning',
                  description: 'Intelligent solutions powered by AI to automate and optimize your processes.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: 'UI/UX Design',
                  description: 'Beautiful, intuitive interfaces that engage users and drive conversions.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  )
                },
                {
                  title: 'Consulting',
                  description: 'Expert technology consulting to align your strategy with business goals.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white p-8 border border-gray-200 hover:border-black hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-black flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-black font-semibold hover:text-gray-600 transition-colors"
              >
                View All Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 relative overflow-hidden bg-black text-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '22', label: 'Projects Completed', delay: '0s' },
                { number: '200+', label: 'Happy Clients', delay: '0.2s' },
                { number: '50+', label: 'Team Members', delay: '0.4s' },
                { number: '7', label: 'Years Experience', delay: '0.6s' }
              ].map((stat, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: stat.delay }}>
                  <div className="text-6xl md:text-7xl font-extrabold text-white mb-3">{stat.number}</div>
                  <div className="text-gray-300 text-lg font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
                  Why Choose Guglex?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We combine technical expertise with creative innovation to deliver solutions that not only meet but exceed your expectations.
                </p>
                <div className="space-y-6">
                  {[
                    { title: 'Expert Team', desc: '50+ skilled professionals with years of experience' },
                    { title: 'Proven Track Record', desc: '500+ successful projects across industries' },
                    { title: 'Cutting-Edge Technology', desc: 'Latest tools and frameworks for optimal results' },
                    { title: '24/7 Support', desc: 'Round-the-clock assistance when you need it' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-black flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-black mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-8 border border-gray-200">
                    <div className="text-4xl font-bold text-black mb-2">99%</div>
                    <div className="text-gray-700 font-medium">Client Satisfaction</div>
                  </div>
                  <div className="bg-gray-100 p-8 border border-gray-200">
                    <div className="text-4xl font-bold text-black mb-2">24/7</div>
                    <div className="text-gray-700 font-medium">Support Available</div>
                  </div>
                  <div className="bg-gray-100 p-8 border border-gray-200">
                    <div className="text-4xl font-bold text-black mb-2">500+</div>
                    <div className="text-gray-700 font-medium">Projects Delivered</div>
                  </div>
                  <div className="bg-gray-100 p-8 border border-gray-200">
                    <div className="text-4xl font-bold text-black mb-2">10+</div>
                    <div className="text-gray-700 font-medium">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative bg-gray-50">
          <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white p-12 border border-gray-200">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your goals with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-black text-white font-semibold text-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/use-cases"
                  className="px-10 py-4 bg-white text-black font-semibold text-lg border-2 border-black hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
                >
                  View Case Studies
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
