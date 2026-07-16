import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  ShoppingBag, HeartPulse, TrendingUp, GraduationCap,
  Truck, Factory, Building2, Clapperboard,
  UtensilsCrossed, Plane, Zap, Landmark,
  ShoppingCart, Smartphone, CreditCard, type LucideIcon,
} from 'lucide-react';

export default function UseCases() {
  const useCases = [
    {
      title: 'E-Commerce Platform',
      industry: 'Retail',
      description: 'Built a scalable e-commerce platform that handles millions of transactions daily. Integrated payment gateways, inventory management, and AI-powered recommendations.',
      results: [
        '300% increase in online sales',
        '50% reduction in page load time',
        '99.9% uptime achieved'
      ],
      gradient: 'bg-brand-blue',
      Icon: ShoppingCart,
    },
    {
      title: 'USSD Development and Integration',
      industry: 'Technology',
      description: 'Built a USSD application that allows users to interact with the application via USSD. The application allows users to perform transactions, check balance, and view account information.',
      results: [
        '100% uptime',
        '99.9% availability',
        '24/7 support'
      ],
      gradient: 'bg-brand-green',
      Icon: Smartphone,
    },
    {
      title: 'Payment Gateway Integration',
      industry: 'Finance',
      description: 'Integrated payment gateways into the e-commerce platform. The payment gateways allow users to perform transactions using their credit cards, debit cards, and mobile money.',
      results: [
        '100% uptime',
        '99.9% availability',
        '24/7 support'
      ],
      gradient: 'bg-brand-yellow',
      Icon: CreditCard,
    },
    {
      title: 'Payment Gateway Integration',
      industry: 'Finance',
      description: 'Integrated payment gateways into the e-commerce platform. The payment gateways allow users to perform transactions using their credit cards, debit cards, and mobile money.',
      results: [
        '100% uptime',
        '99.9% availability',
        '24/7 support'
      ],
      gradient: 'bg-brand-orange',
      Icon: CreditCard,
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Use Cases</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Real-world solutions that drive business success across industries
            </p>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-brand-blue mb-4 block">
                  Our Work
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                  Featured Projects
                </h2>
              </div>
              <p className="text-gray-500 max-w-sm md:text-right">
                Real solutions we&apos;ve built that drove measurable business impact.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {useCases.map((useCase, i) => (
                <div
                  key={i}
                  className="group bg-gray-50 hover:bg-black border border-gray-200 hover:border-black transition-all duration-500"
                >
                  <div className="p-8 md:p-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 ${useCase.gradient} flex items-center justify-center transition-colors duration-500`}>
                        <useCase.Icon className={`w-6 h-6 ${useCase.gradient === 'bg-brand-yellow' ? 'text-black' : 'text-white'}`} strokeWidth={1.5} />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 group-hover:text-gray-500 transition-colors duration-500">
                        {useCase.industry}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-black group-hover:text-white mb-3 transition-colors duration-500">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-400 leading-relaxed text-[15px] mb-8 transition-colors duration-500">
                      {useCase.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {useCase.results.map((result, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-white group-hover:bg-white/10 border border-gray-200 group-hover:border-white/10 text-xs font-medium text-gray-700 group-hover:text-gray-300 transition-all duration-500"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="bg-black text-white overflow-hidden">
          <div className="brand-bar" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
              <div>
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-yellow mb-3">Expertise</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white">Industries We Serve</h2>
              </div>
              <p className="text-gray-400 max-w-md md:text-right">
                Delivering tailored technology solutions across sectors that drive measurable impact.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-gray-800/50">
              {[
                { name: 'Retail', Icon: ShoppingBag },
                { name: 'Healthcare', Icon: HeartPulse },
                { name: 'Finance', Icon: TrendingUp },
                { name: 'Education', Icon: GraduationCap },
                { name: 'Logistics', Icon: Truck },
                { name: 'Manufacturing', Icon: Factory },
                { name: 'Real Estate', Icon: Building2 },
                { name: 'Entertainment', Icon: Clapperboard },
                { name: 'Food & Beverage', Icon: UtensilsCrossed },
                { name: 'Travel', Icon: Plane },
                { name: 'Energy', Icon: Zap },
                { name: 'Government', Icon: Landmark },
              ].map((industry, index) => (
                <div
                  key={index}
                  className="group relative bg-black p-8 flex flex-col items-start gap-4 cursor-pointer transition-colors duration-300 hover:bg-gray-900"
                >
                  <industry.Icon className="w-7 h-7 text-gray-400 transition-all duration-300 group-hover:text-brand-blue group-hover:scale-110" strokeWidth={1.5} />
                  <h3 className="text-base font-semibold text-white tracking-wide">{industry.name}</h3>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 brand-gradient transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Client Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hear from companies that transformed their business with our solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: 'The Union needed a way to collect membership dues from our members. We needed a way to collect payments and rewards for our players.',
                  author: 'Samuel Osei',
                  role: 'PSWU (Public Service Worker Union)',
                  gradient: 'bg-brand-blue'
                },
                {
                  quote: 'We run live games on shortcodes and players buy tickets to participate. We are able to collect payments and rewards for our players.',
                  author: 'Kwame Kankam',
                  role: 'Director, Directorate of DV Publication and LGM',
                  gradient: 'bg-brand-green'
                },
                {
                  quote: 'Guglex built and develop USSD and payment gateway integration for us. We run a reality show and we needed a way to collect votes from our viewers.',
                  author: 'Kwame Adu',
                  role: 'Founder, Victory Entertainment Empire',
                  gradient: 'bg-brand-orange'
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 border border-gray-200 hover:shadow-xl transition-shadow"
                >
                  <div className={`w-12 h-12 ${testimonial.gradient} flex items-center justify-center mb-6`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-3.313.91-5.435 3.988-5.435 7.242h4v10h-8.544zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-3.313.91-5.435 3.988-5.435 7.242h3.969v10h-10.525z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-black">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white">
          <div className="brand-bar" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help solve your business challenges
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-brand-blue text-white font-semibold hover:bg-[#0176cc] transition-all duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

