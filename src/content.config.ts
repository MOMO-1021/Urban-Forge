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

export const collections = {
  'portfolio': portfolioCollection,
};
