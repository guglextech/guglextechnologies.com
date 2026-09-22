import { ImageResponse } from 'next/og';
import { getOgFonts, ogFontFamily } from '@/lib/og-fonts';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/seo';

export const runtime = 'nodejs';
export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
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
            fontSize: 28,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: '#0194FF',
            fontWeight: 600,
          }}
        >
          {SITE_NAME}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: 980 }}>
            {SITE_TAGLINE}
          </div>
          <div style={{ fontSize: 28, color: '#94A3B8' }}>
            Blog · payments · Ghana · *714*22#
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    },
  );
}
