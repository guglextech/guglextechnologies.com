export const BLOG_CATEGORIES = [
  'Telco',
  'Education',
  'Utilities',
  'Services',
  'TV Bills',
  'Tips',
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export function formatBlogDate(dateStr: string, style: 'short' | 'long' = 'short') {
  return new Date(dateStr).toLocaleDateString('en-US',
    style === 'long'
      ? { year: 'numeric', month: 'long', day: 'numeric' }
      : { month: 'short', day: 'numeric', year: 'numeric' },
  );
}
