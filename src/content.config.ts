import { z, defineCollection } from "astro:content";

const imprimibles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().min(10),
    tags: z.array(z.string()).default([]),
    pdf: z.string().startsWith("/"),
    subject: z.string().default("general"),
    level: z.string().default("primaria"),
    cover: z.string().optional(),
    date: z.date().default(new Date()),
  }),
});

export const collections = { imprimibles };
