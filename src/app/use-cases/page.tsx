import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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
      gradient: 'bg-black',
      icon: '🛒'
    },
    {
      title: 'Healthcare Management System',
      industry: 'Healthcare',
      description: 'Developed a comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine capabilities. HIPAA compliant and secure.',
      results: [
        '40% improvement in patient satisfaction',
        'Streamlined appointment booking',
        'Secure data management'
      ],
      gradient: 'bg-black',
      icon: '🏥'
    },
    {
      title: 'FinTech Mobile App',
      industry: 'Finance',
      description: 'Created a mobile banking application with real-time transactions, biometric security, and investment tracking. Available on iOS and Android.',
      results: [
        '500K+ active users',
        '4.8/5 app store rating',
        'Zero security breaches'
      ],
      gradient: 'bg-black',
      icon: '💳'
    },
    {
      title: 'SaaS Analytics Platform',
      industry: 'Technology',
      description: 'Built a powerful analytics platform that processes billions of data points. Real-time dashboards, custom reports, and predictive analytics.',
      results: [
        '10x faster data processing',
        '90% reduction in report generation time',
        '22 enterprise customers'
      ],
      gradient: 'bg-black',
      icon: '📊'
    },
    // {
    //   title: 'Education Learning Platform',
    //   industry: 'Education',
    //   description: 'Developed an interactive learning management system with video courses, quizzes, progress tracking, and AI-powered personalized learning paths.',
    //   results: [
    //     '200K+ students enrolled',
    //     '95% course completion rate',
    //     'Interactive learning experience'
    //   ],
    //   gradient: 'bg-black',
    //   icon: '🎓'
    // },
    // {
    //   title: 'IoT Fleet Management',
    //   industry: 'Logistics',
    //   description: 'Created an IoT-based fleet management system with real-time GPS tracking, route optimization, fuel monitoring, and predictive maintenance alerts.',
    //   results: [
    //     '25% reduction in fuel costs',
    //     '30% improvement in delivery times',
    //     'Real-time visibility'
    //   ],
    //   gradient: 'bg-black',
    //   icon: '🚚'
    // }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Use Cases</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Real-world solutions that drive business success across industries
            </p>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group relative bg-white p-8 border border-gray-200 hover:border-black hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${useCase.gradient} opacity-5 -mr-16 -mt-16 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 ${useCase.gradient} flex items-center justify-center text-white text-3xl`}>
                        {useCase.icon}
                      </div>
                      <span className="px-4 py-1 bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200">
                        {useCase.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-black mb-4">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6">{useCase.description}</p>
                    
                    <div className="border-t border-gray-100 pt-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Key Results</h4>
                      <div className="space-y-3">
                        {useCase.results.map((result, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className={`w-2 h-2 ${useCase.gradient} mr-3`}></div>
                            <span className="text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our solutions span across multiple industries, delivering value wherever technology meets business
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                'Retail', 'Healthcare', 'Finance', 'Education', 'Logistics', 'Manufacturing',
                'Real Estate', 'Entertainment', 'Food & Beverage', 'Travel', 'Energy', 'Government'
              ].map((industry, index) => (
                <div
                  key={index}
                  className="bg-white p-6 text-center shadow-md hover:shadow-xl transition-shadow hover:scale-105 cursor-pointer"
                >
                  <div className="text-3xl mb-3">🏢</div>
                  <h3 className="font-semibold text-black">{industry}</h3>
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
                  quote: 'Guglex Technologies transformed our entire digital infrastructure. The results exceeded our expectations.',
                  author: 'Sarah Johnson',
                  role: 'CTO, TechCorp',
                  gradient: 'bg-black'
                },
                {
                  quote: 'Their expertise in cloud solutions helped us scale seamlessly. Highly recommend their services.',
                  author: 'Michael Chen',
                  role: 'VP Engineering, CloudStart',
                  gradient: 'bg-black'
                },
                {
                  quote: 'The mobile app they built for us has been a game-changer. Our user engagement increased dramatically.',
                  author: 'Emily Rodriguez',
                  role: 'Product Manager, MobileFirst',
                  gradient: 'bg-black'
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
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
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
        <section className="py-20 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help solve your business challenges
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
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

