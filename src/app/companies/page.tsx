import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Monitor, Cloud, Smartphone, BarChart3, ArrowUpRight } from 'lucide-react';

export default function Companies() {
  const companies = [
    { 
      name: 'PSWU (Public Service Worker Union)', 
      industry: 'Technology', 
      initials: 'PS',
      description: 'Leading software solutions provider' 
    },
    { 
      name: 'Directorate of DV Publication and LGM', 
      industry: 'Cloud Services', 
      initials: 'LG',
      description: 'Enterprise cloud infrastructure' 
    },
    { 
      name: 'Victory Entertainment Empire', 
      industry: 'Entertainment', 
      initials: 'VE',
      description: 'Sustainable entertainment solutions' 
    },
    {
      name: 'Hubtel',
      industry: 'Technology',
      initials: 'Hu',
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
          <div className="absolute top-0 left-0 right-0 brand-bar" />
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
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-blue mb-3">Collaborations</p>
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

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 brand-gradient transition-all duration-700 group-hover:w-full" />
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
                  className="group bg-white p-6 border border-gray-200 hover:border-brand-blue transition-all duration-300 text-center cursor-pointer hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gray-100 group-hover:bg-brand-blue flex items-center justify-center mb-4 transition-all duration-300 mx-auto">
                    <span className="text-xl font-bold text-black group-hover:text-white transition-colors duration-300">
                      {company.initials}
                    </span>
                  </div>
                  <h3 className="font-bold text-black mb-2">{company.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{company.industry}</p>
                  <p className="text-xs text-gray-400">{company.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="bg-black text-white">
          <div className="brand-bar" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Growing Network</h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with us and experience the difference that innovative technology can make
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-brand-blue text-white font-semibold hover:bg-[#0176cc] transition-all duration-300"
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

