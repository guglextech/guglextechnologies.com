import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Target,
  Eye,
  Lightbulb,
  Users,
  ShieldCheck,
  Zap,
  Heart,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description:
      'We operate with transparency and honesty, building trust through ethical practices in every engagement.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We embrace emerging technologies and creative thinking to solve complex challenges others shy away from.',
  },
  {
    icon: Zap,
    title: 'Excellence',
    description:
      'We hold ourselves to the highest standards — in code quality, design precision, and client communication.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description:
      'We genuinely love building technology that matters. That energy shows in everything we ship.',
  },
];

const milestones = [
  {
    year: '2018',
    title: 'Founded',
    description:
      'Started with a clear mission: help African businesses compete globally through technology.',
  },
  {
    year: '2020',
    title: 'First Major Clients',
    description:
      'Delivered enterprise-grade solutions across fintech, e-commerce, and logistics sectors.',
  },
  {
    year: '2022',
    title: 'Team Expansion',
    description:
      'Grew to a cross-functional team of engineers, designers, and strategists serving clients across industries.',
  },
  {
    year: '2024',
    title: 'Today & Beyond',
    description:
      '31+ projects completed, 22+ companies served, and a growing reputation for reliable, high-quality delivery.',
  },
];

const strengths = [
  'Deep expertise in modern web and mobile technologies',
  'End-to-end delivery — from strategy to deployment',
  'Proven track record across fintech, e-commerce, and SaaS',
  'Scalable architectures that grow with your business',
  'Dedicated support and transparent communication',
  'Competitive pricing without compromising quality',
];

export default function About() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-28 md:py-36 bg-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 text-sm font-medium tracking-wide uppercase">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                About Guglex
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
                We build technology
                <span className="block text-gray-400">that builds businesses.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                Guglex Technologies is a product-focused software company helping
                businesses across Africa and beyond design, build, and scale
                digital products that drive real results.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-black flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                    Our Mission
                  </h2>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
                  Empowering businesses through purposeful technology.
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  We exist to bridge the gap between complex technological
                  challenges and practical, scalable solutions that create
                  measurable business value.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Every line of code we write, every interface we design, and
                  every system we architect is in service of one thing — helping
                  our clients succeed.
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-black flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                    Our Vision
                  </h2>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
                  To be Africa&apos;s most trusted technology partner.
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  We envision a future where African businesses lead on the
                  global stage — powered by world-class digital infrastructure
                  and products built right here.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We&apos;re building that future one project at a time, with a
                  relentless focus on quality, reliability, and long-term
                  partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Band */}
        <section className="py-16 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '7+', label: 'Years in Business' },
                { value: '31+', label: 'Projects Delivered' },
                { value: '22+', label: 'Companies Served' },
                { value: '99%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 font-medium text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Core Values
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The principles that shape our culture, guide our decisions, and
                define how we show up for every client.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group bg-gray-50 p-8 border border-gray-200 hover:border-black hover:bg-white transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon
                      className="w-6 h-6 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-24 bg-black text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                From a bold idea to a growing team delivering real impact —
                here&apos;s how we got here.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-white">
                      {milestone.year}
                    </span>
                    {index < milestones.length - 1 && (
                      <div className="hidden lg:block flex-1 h-px bg-white/20" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Guglex */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Why work with us?
                </h2>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  We don&apos;t just write code — we partner with you to
                  understand your business, identify opportunities, and deliver
                  solutions that create lasting value.
                </p>
                <div className="space-y-4">
                  {strengths.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-black mt-0.5 flex-shrink-0"
                        strokeWidth={1.5}
                      />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-8 border border-gray-200">
                  <Users
                    className="w-8 h-8 text-black mb-4"
                    strokeWidth={1.5}
                  />
                  <div className="text-2xl font-bold text-black mb-1">
                    Client-First
                  </div>
                  <p className="text-gray-600 text-sm">
                    Your goals drive every decision we make.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 border border-gray-200">
                  <Lightbulb
                    className="w-8 h-8 text-black mb-4"
                    strokeWidth={1.5}
                  />
                  <div className="text-2xl font-bold text-black mb-1">
                    Forward-Thinking
                  </div>
                  <p className="text-gray-600 text-sm">
                    We build for today and architect for tomorrow.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 border border-gray-200">
                  <ShieldCheck
                    className="w-8 h-8 text-black mb-4"
                    strokeWidth={1.5}
                  />
                  <div className="text-2xl font-bold text-black mb-1">
                    Battle-Tested
                  </div>
                  <p className="text-gray-600 text-sm">
                    Proven delivery across industries and scale.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 border border-gray-200">
                  <Zap
                    className="w-8 h-8 text-black mb-4"
                    strokeWidth={1.5}
                  />
                  <div className="text-2xl font-bold text-black mb-1">
                    Fast & Reliable
                  </div>
                  <p className="text-gray-600 text-sm">
                    We ship on time without cutting corners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white p-12 md:p-16 border border-gray-200">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Let&apos;s build something great together.
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
                Whether you&apos;re launching a new product or scaling an
                existing one, we&apos;d love to hear about your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-black text-white font-semibold text-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Start a Conversation
                  <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-semibold text-lg border-2 border-black hover:bg-gray-50 transition-all duration-300"
                >
                  Explore Services
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
