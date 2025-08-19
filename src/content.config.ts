import { defineCollection, z } from "astro:content";

const SUBJECTS = [
  "matemáticas","lengua","inglés","ciencias naturales","ciencias sociales","arte","música","otros",
] as const;

const LEVELS = [
  "infantil","primaria","primaria-1ciclo","primaria-2ciclo","primaria-3ciclo","secundaria",
] as const;

const RECURSOS_CATEGORIES = [
  "organización","hogar","fiestas","ocio","salud","negocio",
] as const;

const imprimibles = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().min(40).max(180),
      subject: z.enum(SUBJECTS),
      level: z.enum(LEVELS),
      tags: z.array(z.string().transform(t => t.toLowerCase())).default([]),
      cover: image().optional(),
      pdf: z.string(),                 // aquí sí es obligatorio
      date: z.coerce.date(),
      draft: z.boolean().default(false),
    }),
});

const recursos = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string().min(3),
    description: z.string().min(40).max(180),
    category: z.enum(RECURSOS_CATEGORIES),
    tags: z.array(z.string().transform(t => t.toLowerCase())).default([]),
    cover: image().optional(),
    pdf: z.string().optional(),        // ahora opcional
    url: z.string().url().optional(),  // alternativa a pdf
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  })
  // al menos uno de pdf o url
  .refine((v) => Boolean(v.pdf || v.url), {
    message: "Debe existir 'pdf' o 'url' en recursos.",
    path: ["pdf"],
  }),
});

export const collections = { imprimibles, recursos };
