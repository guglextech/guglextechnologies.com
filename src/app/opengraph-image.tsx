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
          background: '#08090C',
          backgroundImage:
            'radial-gradient(circle at 85% 15%, rgba(46,164,255,0.35), transparent 45%), radial-gradient(circle at 70% 90%, rgba(43,217,154,0.22), transparent 45%)',
          color: '#F3F4F6',
          padding: '72px',
          fontFamily: ogFontFamily,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 4,
              background: 'linear-gradient(90deg, #2EA4FF, #22D3EE, #2BD99A)',
            }}
          />
          <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: 2 }}>{SITE_NAME.toUpperCase()}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.04, maxWidth: 980, letterSpacing: -2 }}>
            We engineer the systems modern businesses run on.
          </div>
          <div style={{ fontSize: 28, color: '#9AA1AD' }}>
            Fintech · SaaS · Automation · Cloud infrastructure
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
