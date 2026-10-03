import { getCollection } from 'astro:content';
export async function recentProjects() {
  const cutoff = new Date();
  cutoff.setUTCFullYear(cutoff.getUTCFullYear() - 3);
  cutoff.setUTCHours(0, 0, 0, 0);
  return (await getCollection('projects', ({ data }) => !data.draft && data.lastWorked >= cutoff))
    .sort((a, b) => a.data.order - b.data.order);
}
export async function publishedPosts() {
  return (await getCollection('posts', ({ data }) => !data.draft))
    .sort((a, b) => b.data.published.getTime() - a.data.published.getTime());
}
// Optional outbound URLs never block a case study. An omitted URL resolves to the portfolio home.
export const optionalUrl = (url?: string) => url?.trim() || '/';
export const formatDate = (date: Date) => date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
