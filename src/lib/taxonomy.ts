// src/lib/taxonomy.ts
export const SUBJECTS = [
    "matemáticas",
    "lengua",
    "inglés",
    "ciencias naturales",
    "ciencias sociales",
    "arte",
    "música",
] as const;

export const LEVELS = [
    "infantil",
    "primaria",
    "secundaria",
] as const;

export type Subject = typeof SUBJECTS[number];
export type Level = typeof LEVELS[number];

export const subjectSlug = (s: Subject) => s.replace(/\s+/g, "-");
export const levelSlug = (l: Level) => l;

export const subjectTitle = (s: Subject) =>
    `Imprimibles de ${s} | Imprimibles Educativos`;
export const subjectDescription = (s: Subject) =>
    `Descarga imprimibles de ${s} listos para usar en clase o en casa: fichas, actividades y recursos por niveles.`;

export const levelTitle = (l: Level) =>
    `Imprimibles para ${l} | Imprimibles Educativos`;
export const levelDescription = (l: Level) =>
    `Recopilación de imprimibles para ${l}: fichas y actividades listas para imprimir, organizadas por asignaturas y temas.`;
