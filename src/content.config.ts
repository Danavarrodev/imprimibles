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

const LEVELS = [
  "infantil",
  "primaria",
  "primaria-1ciclo",
  "primaria-2ciclo",
  "primaria-3ciclo",
  "secundaria",
] as const;

const imprimibles = defineCollection({
  type: "content",
  // ⬇️ aquí recibes `image` sin importarlo
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().min(40).max(180),
      subject: z.enum(SUBJECTS),
      level: z.enum(LEVELS),
      tags: z.array(z.string()).default([]),
      // ✅ obliga a portada tipo astro:assets (ej: "./portada.webp")
      cover: image().optional(),
      pdf: z.string(),
      date: z.coerce.date(),
    }),
});

export const collections = { imprimibles };
