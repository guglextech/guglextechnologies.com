import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Monitor, Cloud, Smartphone, BarChart3, ArrowUpRight } from 'lucide-react';

export default function Companies() {
  const companies = [
    { 
      name: 'PSWU (Public Service Worker Union)', 
      industry: 'Technology', 
      logo: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ), 
      description: 'Leading software solutions provider' 
    },
    { 
      name: 'Directorate of DV Publication and LGM', 
      industry: 'Cloud Services', 
      logo: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ), 
      description: 'Enterprise cloud infrastructure' 
    },
    { 
      name: 'Victory Entertainment Empire', 
      industry: 'Energy', 
      logo: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ), 
      description: 'Sustainable energy solutions' 
    },
    {
      name: 'Hubtel',
      industry: 'Technology',
      logo: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Integration for payment gateway and ussd development.'
    }
  ];

  const featuredPartners = [
    {
      name: 'Hubtel',
      Icon: Monitor,
      description: 'Integration for payment gateway and ussd development.',
      project: 'Digital Transformation',
    },
    {
      name: 'LGM',
      Icon: Cloud,
      description: 'Built a scalable cloud infrastructure that supports millions of users on subscription model of payment.',
      project: 'Cloud Migration',
    },
    {
      name: 'Wotiriye',
      Icon: Smartphone,
      description: 'Play interactive games with your friends and family. Subscription model of payment',
      project: 'Mobile App Development',
    },
    {
      name: 'E-Wale',
      Icon: BarChart3,
      description: 'Purchase WASSCE,ECG Prepaid , Airtime and Data  Bundle with ease. For all networks',
      project: 'Big Data Analytics',
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Companies We've Worked With</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Trusted by leading companies across industries to deliver exceptional technology solutions
            </p>
          </div>
        </section>

        {/* Featured Partners */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
              <div>
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-400 mb-3">Collaborations</p>
                <h2 className="text-4xl md:text-5xl font-bold text-black">Featured Partners</h2>
              </div>
              <p className="text-gray-500 max-w-sm md:text-right">
                Some of our most successful collaborations that drove real impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPartners.map((partner, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-50 hover:bg-black p-8 md:p-10 transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 bg-white group-hover:bg-white/10 flex items-center justify-center transition-colors duration-500">
                      <partner.Icon className="w-6 h-6 text-black group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500" />
                  </div>

                  <span className="inline-block text-xs font-medium tracking-widest uppercase text-gray-400 group-hover:text-gray-400 mb-3 transition-colors duration-500">
                    {partner.project}
                  </span>
                  <h3 className="text-2xl font-bold text-black group-hover:text-white mb-3 transition-colors duration-500">
                    {partner.name}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors duration-500">
                    {partner.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-700 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Companies Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Partners</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A diverse portfolio of companies that trust us with their technology needs
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="group bg-white p-6 border border-gray-200 hover:border-black hover:shadow-xl transition-all duration-300 text-center cursor-pointer hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gray-50 flex items-center justify-center mb-4 text-black group-hover:scale-110 transition-transform mx-auto">
                    {company.logo}
                  </div>
                  <h3 className="font-bold text-black mb-2">{company.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{company.industry}</p>
                  <p className="text-xs text-gray-400">{company.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Partnership Impact</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The results of our collaborative efforts
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                  20+
                </div>
                <div className="text-gray-600 font-medium">Companies Served</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                  22
                </div>
                <div className="text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                  98%
                </div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                  15+
                </div>
                <div className="text-gray-600 font-medium">Industries</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Growing Network</h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with us and experience the difference that innovative technology can make
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Become a Partner
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

