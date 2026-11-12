export const SITE_URL = 'https://www.guglextechnologies.com';
export const SITE_NAME = 'Guglex Technologies';
export const SITE_TAGLINE = 'Software engineering & digital infrastructure';
export const SITE_DESCRIPTION =
  'Guglex Technologies is a software engineering and digital infrastructure consultancy. We design, build, and scale fintech systems, SaaS platforms, automation, and cloud infrastructure for SMEs, financial institutions, startups, and enterprises.';
export const BLOG_DESCRIPTION =
  'Practical guides for everyday payments in Ghana — airtime, data, ECG, Ghana Water, TV bills, WASSCE and BECE result checkers, and *714*22#.';
export const SITE_KEYWORDS = [
  'Guglex Technologies',
  'software engineering consultancy Ghana',
  'fintech development company Africa',
  'payments integration Ghana',
  'mobile money integration',
  'USSD development Ghana',
  'SaaS development',
  'business automation',
  'cloud infrastructure consulting',
  'digital transformation Ghana',
  'software development Accra',
  'Ewale',
  'Gyepayment',
];
export const SITE_EMAIL = 'business@guglextechnologies.com';
export const SITE_LOCALE = 'en_GH';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image`;
export const LOGO_URL = `${SITE_URL}/logo.png`;
export const EWALE_URL = 'https://ewalepay.com';

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        email: SITE_EMAIL,
        description: SITE_DESCRIPTION,
        logo: { '@type': 'ImageObject', url: LOGO_URL },
        image: DEFAULT_OG_IMAGE,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Accra',
          addressRegion: 'Greater Accra',
          addressCountry: 'GH',
        },
        areaServed: ['GH', 'Africa', 'Worldwide'],
        knowsAbout: [
          'Fintech engineering',
          'Payments',
          'Mobile money',
          'USSD',
          'SaaS',
          'Business automation',
          'Cloud infrastructure',
          'Identity systems',
        ],
        sameAs: [EWALE_URL],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: 'en-GH',
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };
}

export function blogJsonLd(
  posts: Array<{ slug: string; title: string; excerpt: string; date: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/blog/#blog`,
    url: absoluteUrl('/blog'),
    name: `${SITE_NAME} Insights`,
    description: BLOG_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
    blogPost: posts.slice(0, 20).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: absoluteUrl(`/blog/${post.slug}`),
    })),
  };
}

export function articleJsonLd(post: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  wordCount: number;
}) {
  const url = absoluteUrl(`/blog/${post.slug}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'en-GH',
    articleSection: post.category,
    keywords: post.tags.join(', '),
    wordCount: post.wordCount,
    author: { '@type': 'Organization', name: post.author || SITE_NAME, url: SITE_URL },
    publisher: { '@id': `${SITE_URL}/#organization` },
    image: [absoluteUrl(`/blog/${post.slug}/opengraph-image`)],
    url,
    isPartOf: { '@id': `${SITE_URL}/blog/#blog` },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
