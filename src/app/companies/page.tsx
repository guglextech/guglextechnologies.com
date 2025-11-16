import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Companies() {
  const companies = [
    { name: 'TechCorp', industry: 'Technology', logo: '💻', description: 'Leading software solutions provider' },
    { name: 'CloudStart', industry: 'Cloud Services', logo: '☁️', description: 'Enterprise cloud infrastructure' },
    { name: 'MobileFirst', industry: 'Mobile Apps', logo: '📱', description: 'Innovative mobile solutions' },
    { name: 'DataFlow', industry: 'Analytics', logo: '📊', description: 'Big data and analytics platform' },
    { name: 'SecureNet', industry: 'Cybersecurity', logo: '🔒', description: 'Enterprise security solutions' },
    { name: 'HealthTech', industry: 'Healthcare', logo: '🏥', description: 'Digital health innovations' },
    { name: 'EduPlatform', industry: 'Education', logo: '🎓', description: 'Online learning solutions' },
    { name: 'RetailPro', industry: 'Retail', logo: '🛒', description: 'E-commerce platform provider' },
    { name: 'FinanceHub', industry: 'FinTech', logo: '💳', description: 'Financial technology services' },
    { name: 'LogiTech', industry: 'Logistics', logo: '🚚', description: 'Supply chain optimization' },
    { name: 'MediaStream', industry: 'Media', logo: '🎬', description: 'Content delivery platform' },
    { name: 'GreenEnergy', industry: 'Energy', logo: '⚡', description: 'Sustainable energy solutions' }
  ];

  const featuredPartners = [
    {
      name: 'TechCorp',
      logo: '💻',
      description: 'We helped TechCorp modernize their entire technology stack, resulting in 40% cost reduction and improved scalability.',
      project: 'Digital Transformation',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'CloudStart',
      logo: '☁️',
      description: 'Built a scalable cloud infrastructure that supports millions of users with 99.99% uptime.',
      project: 'Cloud Migration',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'MobileFirst',
      logo: '📱',
      description: 'Developed a cross-platform mobile app that reached #1 in app stores and gained 1M+ downloads.',
      project: 'Mobile App Development',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      name: 'DataFlow',
      logo: '📊',
      description: 'Created an advanced analytics platform processing billions of data points in real-time.',
      project: 'Big Data Analytics',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Companies We've Worked With</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Trusted by leading companies across industries to deliver exceptional technology solutions
            </p>
          </div>
        </section>

        {/* Featured Partners */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Partners</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Some of our most successful collaborations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPartners.map((partner, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${partner.gradient} opacity-5 rounded-full -mr-20 -mt-20 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-r ${partner.gradient} rounded-2xl flex items-center justify-center text-4xl`}>
                        {partner.logo}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{partner.name}</h3>
                        <span className="text-sm text-gray-500">{partner.project}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{partner.description}</p>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Successful Project</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Companies Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Partners</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A diverse portfolio of companies that trust us with their technology needs
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center cursor-pointer hover:scale-105 border border-gray-100"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {company.logo}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{company.name}</h3>
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Partnership Impact</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The results of our collaborative efforts
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  200+
                </div>
                <div className="text-gray-600 font-medium">Companies Served</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
                  15+
                </div>
                <div className="text-gray-600 font-medium">Industries</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Growing Network</h2>
            <p className="text-xl text-blue-100 mb-8">
              Partner with us and experience the difference that innovative technology can make
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
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

