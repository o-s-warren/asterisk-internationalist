import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date(),
    excerpt: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  articles: articlesCollection,
};