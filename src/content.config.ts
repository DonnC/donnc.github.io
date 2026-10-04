import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const external = z.url({ protocol: /^https$/ });
const optionalExternal = z.preprocess(value => typeof value === 'string' && !value.trim() ? undefined : value, external.optional());
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(), description: z.string(), category: z.enum(['Payments', 'Platforms', 'Mobile', 'Tools', 'Creative']),
    role: z.string(), status: z.string(), lastWorked: z.coerce.date(), order: z.number(),
    stack: z.array(z.string()), proof: z.array(z.string()), diagram: z.string(),
    featured: z.boolean().default(false), repository: optionalExternal, liveUrl: optionalExternal,
    storeUrl: optionalExternal, draft: z.boolean().default(false),
  }),
});
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({ title: z.string(), description: z.string(), published: z.coerce.date(),
    topic: z.string(), canonical: optionalExternal, draft: z.boolean().default(false) }),
});
export const collections = { projects, posts };
