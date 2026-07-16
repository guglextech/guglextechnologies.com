import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Use cases', href: '/use-cases' },
  { label: 'Companies', href: '/companies' },
];

const productLinks = [
  { label: 'Ewale', href: 'https://ewalepay.com' },
  {
    label: 'Gyepayments',
    href: 'https://gyepayment.guglextechnologies.com',
  },
];

const resourceLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid grid-cols-2 gap-x-10 gap-y-14 md:grid-cols-12 md:gap-x-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-5">
              <BrandLogo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">
              Product-focused software for payments, utilities, and digital
              services across Africa.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6 lg:col-start-7">
            <h4 className="text-xs font-medium uppercase tracking-wider text-white/40">
              Company
            </h4>
            <ul className="mt-5 space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-medium uppercase tracking-wider text-white/40">
              Products
            </h4>
            <ul className="mt-5 space-y-3.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-wider text-white/40">
              Resources
            </h4>
            <ul className="mt-5 space-y-3.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-2 text-sm text-white/50">
              <p>guglex.technologies@gmail.com</p>
              <p>+233 550 982 043</p>
              <p>Accra, Ghana</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/40 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:pt-10">
          <p>&copy; {new Date().getFullYear()} Guglex Technologies</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
