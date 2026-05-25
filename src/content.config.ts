import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolioCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    clientType: z.string().optional(),
    location: z.string().optional(),
    completionYear: z.number().optional(),
    featuredImage: z.string(),
    materialsUsed: z.array(z.string()).optional(),
    hasCadDownload: z.boolean().default(false),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    author: z.string(),
    category: z.string(),
    featuredImage: z.string(),
  }),
});

export const collections = {
  'portfolio': portfolioCollection,
  'blog': blogCollection,
};
