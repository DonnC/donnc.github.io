import type { APIRoute } from 'astro';
import { publishedPosts } from '../../lib/content';
const escape = (text: string) => text.replace(/[<>&"']/g, char => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[char]!));
export const GET: APIRoute = async ({ site }) => {
  const posts = await publishedPosts();
  const items = posts.map(post => {
    const link = new URL(`/writing/${post.id}/`, site).href;
    return `<item><title>${escape(post.data.title)}</title><link>${link}</link><guid>${link}</guid><description>${escape(post.data.description)}</description><pubDate>${post.data.published.toUTCString()}</pubDate></item>`;
  }).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Donald Chinhuru — Engineering notes</title><link>${site}</link><description>Practical notes on building software.</description><language>en</language>${items}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
