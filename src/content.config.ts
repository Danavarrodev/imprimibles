import { defineCollection, z } from "astro:content";

const SUBJECTS = [
  "matemáticas",
  "lengua",
  "inglés",
  "ciencias naturales",
  "ciencias sociales",
  "arte",
  "música",
  "otros",
] as const;

const LEVELS = [
  "infantil",
  "primaria",
  "primaria-1ciclo",
  "primaria-2ciclo",
  "primaria-3ciclo",
  "secundaria",
] as const;

const RECURSOS_CATEGORIES = [
  "organización",
  "hogar",
  "fiestas",
  "ocio",
  "salud",
  "negocio",
] as const;

const imprimibles = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().min(40).max(180),
      subject: z.enum(SUBJECTS),
      level: z.enum(LEVELS),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      pdf: z.string(),
      date: z.coerce.date(),
    }),
});

const recursos = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(3),
      description: z.string().min(40).max(180),
      category: z.enum(RECURSOS_CATEGORIES),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),   
      pdf: z.string(),             
      date: z.coerce.date(),       
    }),
});

export const collections = { imprimibles, recursos };
