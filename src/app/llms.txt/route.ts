import { getAllPosts } from '../../../lib/blog';
import { SERVICES } from '@/lib/site';
import { SITE_DESCRIPTION, SITE_EMAIL, SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/seo';

export async function GET() {
  const services = SERVICES.map((service) => `- ${service.title}: ${service.summary}`).join('\n');
  const articles = getAllPosts()
    .map((post) => `- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)}): ${post.excerpt}`)
    .join('\n');

  const body = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

Contact: ${SITE_EMAIL}
Location: Accra, Ghana

## Pages

- [Services](${SITE_URL}/services)
- [Work](${SITE_URL}/work)
- [About](${SITE_URL}/about)
- [Contact](${SITE_URL}/contact)
- [Insights](${SITE_URL}/blog)

## Services

${services}

## Platforms

- Ewale (https://ewalepay.com): consumer payments on USSD *714*22# and the web. This site does not process payments.
- Gyepayment: automated recurring collections from mobile money, bank accounts, and cards.

## Articles

${articles}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
