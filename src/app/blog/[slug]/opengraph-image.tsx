import { ImageResponse } from 'next/og';
import { getPostBySlug } from '../../../../lib/blog';
import { getOgFonts, ogFontFamily } from '@/lib/og-fonts';
import { SITE_NAME } from '@/lib/seo';

export const runtime = 'nodejs';
export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? SITE_NAME;
  const category = post?.category ?? 'Blog';
  const fonts = await getOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0B1220',
          color: '#F8FAFC',
          padding: '72px',
          fontFamily: ogFontFamily,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 24,
            color: '#94A3B8',
          }}
        >
          <span style={{ color: '#0194FF', fontWeight: 600, letterSpacing: 4 }}>
            {SITE_NAME.toUpperCase()}
          </span>
          <span>{category}</span>
        </div>
        <div
          style={{
            fontSize: title.length > 70 ? 48 : 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 1040,
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    },
  );
}
