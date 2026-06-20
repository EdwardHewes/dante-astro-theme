import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const work = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
    schema: z.object({
        title: z.string(),
        publication: z.string(),
        type: z.enum(['editorial', 'commercial']),
        date: z.coerce.date(),
        url: z.string().optional(),
        excerpt: z.string(),
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
