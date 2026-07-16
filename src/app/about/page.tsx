import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Zap,
  Heart,
  ArrowRight,
} from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    color: 'bg-brand-blue',
    description:
      'We operate with transparency and honesty, building trust through ethical practices in every engagement.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    color: 'bg-brand-green',
    description:
      'We embrace emerging technologies and creative thinking to solve complex challenges others shy away from.',
  },
  {
    icon: Zap,
    title: 'Excellence',
    color: 'bg-brand-yellow',
    description:
      'We hold ourselves to the highest standards — in code quality, design precision, and client communication.',
  },
  {
    icon: Heart,
    title: 'Passion',
    color: 'bg-brand-orange',
    description:
      'We genuinely love building technology that matters. That energy shows in everything we ship.',
  },
];

const leadership = [
  {
    name: 'Samuel Acquah',
    role: 'Co-Founder & CEO',
    bio: 'Leads product strategy and growth partnerships, ensuring every solution aligns with measurable business outcomes.',
  },
  {
    name: 'Ama Mensah',
    role: 'Head of Engineering',
    bio: 'Oversees platform architecture and delivery quality, with a focus on scalability, performance, and reliability.',
  },
  {
    name: 'Daniel Owusu',
    role: 'Head of Design',
    bio: 'Drives user-centered design systems that balance clarity, usability, and strong visual communication.',
  },
];

export default function About() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-28 md:py-36 bg-black text-white overflow-hidden">
          <div className="absolute top-0 left-0 right-0 brand-bar" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 text-sm font-medium tracking-wide uppercase">
                <span className="brand-dot" />
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
        <section className="py-24 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue mb-4">
                Foundation
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Mission and Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Clear principles that shape how we build, partner, and grow with
                every client.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <article className="bg-white border border-gray-200 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-brand-blue flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                    Our Mission
                  </h3>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-black mb-5 leading-tight">
                  Empowering businesses through purposeful technology.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We exist to bridge the gap between complex technological
                  challenges and practical, scalable solutions that create
                  measurable business value.
                </p>
              </article>

              <article className="bg-white border border-gray-200 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-brand-green flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                    Our Vision
                  </h3>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-black mb-5 leading-tight">
                  To be Africa&apos;s most trusted technology partner.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We envision a future where African businesses lead on the
                  global stage — powered by world-class digital infrastructure
                  and products built right here.
                </p>
              </article>
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
                  className="group bg-gray-50 p-8 border border-gray-200 hover:border-brand-blue hover:bg-white transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon
                      className={`w-6 h-6 ${value.color === 'bg-brand-yellow' ? 'text-black' : 'text-white'}`}
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

        {/* Note From Co-Founder */}
        <section className="py-24 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] w-full border border-dashed border-gray-400 bg-white flex items-center justify-center text-sm font-medium uppercase tracking-wide text-gray-500">
                Co-Founder Image Placeholder
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-4">
                  Note From Our Co-Founder
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
                  We build with intention, not just speed.
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  From day one, Guglex has focused on one principle: technology
                  should solve real problems and unlock real growth.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We are committed to building products that are reliable,
                  scalable, and genuinely useful for the people and teams who
                  rely on them every day.
                </p>
                <p className="text-black font-semibold">Samuel Acquah</p>
                <p className="text-gray-600">Co-Founder, Guglex Technologies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Meet the Leadership
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A focused team of builders and operators guiding strategy,
                execution, and long-term client success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leadership.map((leader) => (
                <article
                  key={leader.name}
                  className="border border-gray-200 bg-gray-50 p-6"
                >
                  <div className="h-44 border border-dashed border-gray-400 bg-white flex items-center justify-center text-xs font-medium uppercase tracking-wide text-gray-500 mb-5">
                    Leadership Image Placeholder
                  </div>
                  <h3 className="text-xl font-bold text-black mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                    {leader.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Careers */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border border-white/20 p-10 md:p-14">
              <div className="brand-bar mb-8 max-w-[8rem]" />
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-yellow mb-4">
                Careers
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Join us in building meaningful digital products.
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl leading-relaxed mb-8">
                We are always looking for thoughtful engineers, designers, and
                problem-solvers who care deeply about quality and impact.
              </p>
              <div className="h-40 border border-dashed border-white/40 bg-white/5 flex items-center justify-center text-xs font-medium uppercase tracking-wide text-gray-300 mb-8">
                Team Culture Image Placeholder
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold hover:bg-[#0176cc] transition-colors duration-300"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
