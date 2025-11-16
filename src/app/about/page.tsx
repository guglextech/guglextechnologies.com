import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">About Us</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of technology with innovation, expertise, and passion.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  At Guglex Technologies, we are committed to empowering businesses through innovative technology solutions. 
                  Our mission is to bridge the gap between complex technological challenges and practical, scalable solutions 
                  that drive real business value.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  We believe that technology should be accessible, intuitive, and transformative. Every project we undertake 
                  is an opportunity to push boundaries, solve problems, and create lasting impact for our clients.
                </p>
                <p className="text-lg text-gray-600">
                  With a team of passionate engineers, designers, and strategists, we combine technical excellence with 
                  creative thinking to deliver solutions that exceed expectations.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gray-200 transform rotate-6"></div>
                <div className="relative bg-white p-8 border border-gray-200">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-black mb-1">Innovation First</h3>
                        <p className="text-gray-600">We stay ahead of technology trends to deliver cutting-edge solutions.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-black mb-1">Client-Centric</h3>
                        <p className="text-gray-600">Your success is our success. We're committed to your growth.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-black mb-1">Excellence Driven</h3>
                        <p className="text-gray-600">We maintain the highest standards in everything we do.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We conduct business with honesty, transparency, and ethical practices in all our interactions.
                </p>
              </div>

              <div className="bg-white p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We embrace new technologies and creative approaches to solve complex challenges.
                </p>
              </div>

              <div className="bg-white p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Quality</h3>
                <p className="text-gray-600">
                  We deliver excellence in every project, ensuring the highest standards of quality and performance.
                </p>
              </div>

              <div className="bg-white p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Passion</h3>
                <p className="text-gray-600">
                  We love what we do, and that passion drives us to exceed expectations every single day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Story</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Founded with a vision to revolutionize how businesses leverage technology, Guglex Technologies has grown 
                from a small startup to a trusted partner for companies worldwide. Our journey has been marked by continuous 
                learning, innovation, and an unwavering commitment to client success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-black mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">2022</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Founded</h3>
                <p className="text-gray-600">
                  Started with a small team and big dreams to transform businesses through technology.
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-black mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">2018</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Expansion</h3>
                <p className="text-gray-600">
                  Expanded our services and team to serve clients across multiple industries globally.
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-black mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">2024</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Today</h3>
                <p className="text-gray-600">
                  Leading innovation in technology solutions with a team of 50+ experts and 22 successful projects.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

