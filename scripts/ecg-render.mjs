import fs from 'node:fs';
import path from 'node:path';

export const dir = path.join(process.cwd(), 'content/blog');

export function yamlList(items) {
  return `[${items.map((item) => JSON.stringify(item)).join(', ')}]`;
}

export function isoDate(daysBefore) {
  const d = new Date(Date.UTC(2026, 8, 22));
  d.setUTCDate(d.getUTCDate() - daysBefore);
  return d.toISOString().slice(0, 10);
}

export function renderEcgPost(post) {
  const sections = post.sections
    .map((section) => `## ${section.title}\n\n${section.body}`)
    .join('\n\n');
  const faqs = post.faqs?.length
    ? `\n\n## FAQ\n\n${post.faqs.map((item) => `### ${item.q}\n\n${item.a}`).join('\n\n')}`
    : '';
  const fails = (post.fails || [])
    .map((item) => `- **${item.title}:** ${item.body}`)
    .join('\n');

  return `---
title: ${JSON.stringify(post.title)}
excerpt: ${JSON.stringify(post.excerpt)}
date: ${JSON.stringify(post.date)}
author: "Guglex Technologies"
category: "Utilities"
tags: ${yamlList(post.tags)}
---

${post.lead}

${sections}
${faqs}

## If it still fails

${fails}

${post.close}
`;
}

export function writePosts(posts, { force = false } = {}) {
  const existing = new Set(
    fs
      .readdirSync(dir)
      .filter((name) => name.endsWith('.md'))
      .map((name) => name.replace(/\.md$/, '')),
  );
  const collisions = posts.filter((post) => existing.has(post.slug));
  if (collisions.length && !force) {
    throw new Error(`Slug collision: ${collisions.map((post) => post.slug).join(', ')}`);
  }
  posts.forEach((post, index) => {
    if (!post.date) post.date = isoDate(post.offset ?? index);
    fs.writeFileSync(path.join(dir, `${post.slug}.md`), renderEcgPost(post));
  });
  return posts.length;
}
