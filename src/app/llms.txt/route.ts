import { getAllPosts } from '../../../lib/blog';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/seo';

export async function GET() {
  const posts = getAllPosts();
  const listing = posts
    .map((post) => `- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)}): ${post.excerpt}`)
    .join('\n');

  const body = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

This site is a blog, not a place to make payments. The consumer product is Ewale.

Blog: ${SITE_URL}/blog
Product: https://ewalepay.com
USSD: *714*22#

## Articles

${listing}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
