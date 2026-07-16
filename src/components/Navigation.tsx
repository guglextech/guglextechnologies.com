'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

const products = [
  {
    name: 'Ewale',
    description:
      'Buy WASSCE results, ECG prepaid, airtime, and data bundles in one place. Fast, simple, and available on all networks.',
    href: 'https://ewalepay.com',
  },
  {
    name: 'Gyepayments',
    description:
      'Collect and manage payments for your business with mobile money, bank transfer, and card support built for African markets.',
    href: 'https://gyepayments.guglextechnologies.com',
  },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Research', href: '/use-cases' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMobile = () => {
    setIsOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-none">
      <div className="brand-bar" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <BrandLogo />

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-white/80 transition-colors hover:text-brand-blue"
            >
              Home
            </Link>

            <div ref={productsRef} className="relative">
              <button
                type="button"
                onClick={() => setProductsOpen((open) => !open)}
                className="inline-flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-brand-blue"
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Products
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`}
                  strokeWidth={2}
                />
              </button>

              {productsOpen && (
                <div className="absolute left-0 top-full z-50 mt-3 w-[22rem] border border-white/10 bg-[#111111]">
                  <div className="divide-y divide-white/10">
                    {products.map((product) => (
                      <div key={product.name} className="p-5">
                        <p className="text-sm font-semibold text-white">{product.name}</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">
                          {product.description}
                        </p>
                        <a
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-blue hover:text-brand-green"
                        >
                          Learn more
                          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-brand-blue"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <div className="space-y-1 px-4 py-3">
            <Link
              href="/"
              className="block px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
              onClick={closeMobile}
            >
              Home
            </Link>

            <button
              type="button"
              onClick={() => setMobileProductsOpen((open) => !open)}
              className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
              aria-expanded={mobileProductsOpen}
            >
              Products
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}
                strokeWidth={2}
              />
            </button>

            {mobileProductsOpen && (
              <div className="ml-3 border-l border-white/20 pl-3">
                {products.map((product) => (
                  <div key={product.name} className="border-b border-white/10 px-3 py-4 last:border-b-0">
                    <p className="text-sm font-semibold text-white">{product.name}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                      {product.description}
                    </p>
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-white"
                      onClick={closeMobile}
                    >
                      Learn more
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                    </a>
                  </div>
                ))}
              </div>
            )}

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
