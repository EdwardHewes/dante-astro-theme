import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const work = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
    schema: z.object({
        title: z.string().optional().default(''),
        publication: z.string().optional().default(''),
        type: z.enum(['editorial', 'commercial']).optional(),
        date: z.coerce.date().optional(),
        url: z.string().optional(),
        excerpt: z.string().optional().default(''),
        draft: z.boolean().default(false),
    }),
});

const photography = defineCollection({
    loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/photography' }),
    schema: z.object({
        src: z.string(),
        caption: z.string(),
        alt: z.string(),
    }),
});

export const collections = { work, photography };
