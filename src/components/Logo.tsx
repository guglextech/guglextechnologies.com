import Link from 'next/link';

type LogoProps = {
  href?: string;
  className?: string;
  /** Show full wordmark (default) or mark only */
  variant?: 'full' | 'mark';
};

export default function Logo({
  href = '/',
  className = '',
  variant = 'full',
}: LogoProps) {
  const isMark = variant === 'mark';

  // eslint-disable-next-line @next/next/no-img-element
  const image = (
    <img
      src={isMark ? '/logo-mark.svg' : '/logo.svg'}
      alt="Guglex"
      className={isMark ? 'h-6 w-6' : 'h-6 w-auto'}
      decoding="async"
    />
  );

  if (!href) {
    return <span className={`inline-flex items-center ${className}`}>{image}</span>;
  }

  return (
    <Link
      href={href}
      className={`inline-flex items-center transition-opacity hover:opacity-90 ${className}`}
      aria-label="Guglex Technologies home"
    >
      {image}
    </Link>
  );
}
