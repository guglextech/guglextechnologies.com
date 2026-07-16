import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const faqs = [
  {
    question: 'What does Guglex Technologies do?',
    answer:
      'We design and build software products and digital infrastructure for businesses across Africa, including payment platforms, web applications, and automation tools.',
  },
  {
    question: 'What is Ewale?',
    answer:
      'Ewale is our consumer platform for purchasing WASSCE results, ECG prepaid, airtime, and data bundles across all major networks. Visit ewalepay.com to get started.',
  },
  {
    question: 'What is Gyepayments?',
    answer:
      'Gyepayments is our business payment platform for collecting mobile money, bank transfers, and card payments. Learn more at gyepayments.guglextechnologies.com.',
  },
  {
    question: 'Do you build custom software?',
    answer:
      'Yes. We work with startups and enterprises to scope, build, and maintain custom software—from MVPs to production systems with integrations and ongoing support.',
  },
  {
    question: 'How can I get in touch?',
    answer:
      'Use our Contact page to send a message, or reach out through the channels listed there. We typically respond within one business day.',
  },
];

export default function FAQ() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50/80 pt-16">
        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="mb-3 text-sm font-medium text-brand-blue">FAQ</p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Frequently asked questions
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Quick answers about our company and products.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl space-y-4 px-4 sm:px-6 lg:px-8">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border border-gray-200 border-l-4 border-l-brand-blue bg-white p-6"
              >
                <h2 className="text-base font-semibold text-gray-900">{faq.question}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
