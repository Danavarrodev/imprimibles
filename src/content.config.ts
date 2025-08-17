// src/content.config.ts
import { defineCollection, z } from "astro:content";

const SUBJECTS = [
  "matemáticas",
  "lengua",
  "inglés",
  "ciencias naturales",
  "ciencias sociales",
  "arte",
  "música",
] as const;

const LEVELS = ["infantil", "primaria", "secundaria"] as const;

const imprimibles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().min(40).max(180),
    subject: z.enum(SUBJECTS),
    level: z.enum(LEVELS),
    tags: z.array(z.string()).default([]),
    cover: z.string(),
    pdf: z.string(),
    date: z.coerce.date(), 
  }),
});

export const collections = { imprimibles };
