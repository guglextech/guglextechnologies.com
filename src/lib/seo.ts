export const SITE_URL = 'https://www.guglextechnologies.com';
export const SITE_NAME = 'Guglex Technologies';
export const SITE_TAGLINE = 'The Guglex Technologies blog';
export const SITE_DESCRIPTION =
  'Guides for everyday Ewale payments in Ghana: airtime, data, DSTV, GOtv, StarTimes, ECG, Ghana Water, result checkers, and *714*22#.';
export const SITE_KEYWORDS = [
  'Guglex Technologies blog',
  'Ewale',
  'Ewalepay',
  '*714*22#',
  'buy airtime Ghana',
  'buy data bundle Ghana',
  'pay DSTV Ghana USSD',
  'pay GOtv Ghana',
  'pay StarTimes Ghana',
  'how to buy ECG prepaid token',
  'how to pay Ghana Water bill',
  'WASSCE result checker',
  'BECE result checker',
  'mobile money Ghana',
  'ECG token Ghana',
  'ecg power app',
  'ecg power app Ghana',
  'airtime Ghana',
  'data bundle Ghana',
  'pay DSTV Ghana',
  'pay GOtv Ghana',
  'pay StarTimes Ghana',
  'how to buy ECG prepaid token',
  'how to pay Ghana Water bill',
  'WASSCE result checker',
  'BECE result checker',
  'mobile money Ghana',
  'ECG token Ghana',
];
export const SITE_EMAIL = 'business@guglextechnologies.com';
export const SITE_LOCALE = 'en_GH';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;
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
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        email: SITE_EMAIL,
        logo: {
          '@type': 'ImageObject',
          url: DEFAULT_OG_IMAGE,
        },
        sameAs: [EWALE_URL],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${SITE_NAME} Blog`,
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
    name: `${SITE_NAME} Blog`,
    description: SITE_DESCRIPTION,
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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'en-GH',
    articleSection: post.category,
    keywords: post.tags.join(', '),
    wordCount: post.wordCount,
    author: {
      '@type': 'Organization',
      name: post.author || SITE_NAME,
      url: SITE_URL,
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
    image: [DEFAULT_OG_IMAGE, absoluteUrl(`/blog/${post.slug}/opengraph-image`)],
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
