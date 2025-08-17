
<details>
<summary>1. Estructura base</summary>

- [x] Proyecto Astro creado en `D:\Imprimibles\radiant-radiation`
- [x] Configuración con **Tailwind v4** y `@tailwindcss/postcss`
- [x] Hosting en **Vercel** con despliegue automático desde GitHub
- [x] Layout principal: `BaseLayout.astro` con metas SEO, canonical, OG dinámico, footer
- [x] Componentes: `CardImprimible.astro`, `SiteFooter.astro`
</details>

<details>
<summary>2. Contenido & Colecciones</summary>

- [x] Colección `imprimibles` en `src/content/imprimibles/`
- [x] Schema definido en `src/content.config.ts`
- [x] Cada `.md` con: `title`, `description`, `tags`, `pdf`, `subject`, `level`, `cover`, `date`
</details>

<details>
<summary>3. Páginas principales</summary>

- [x] `/` → Home con hero, accesos rápidos, últimos imprimibles
- [x] `/sobre-mi`, `/contacto`
- [x] `/imprimibles/` → listado con filtros en cliente (subject, level, búsqueda)
- [x] `/imprimibles/[slug].astro` → detalle con JSON-LD, CTA descarga, relacionados
- [x] `/imprimibles/asignatura/[subject].astro` → categoría con listado + SEO dinámico
- [ ] `/imprimibles/nivel/[level].astro` → pendiente crear (similar a subject)
- [ ] Página `404.astro` personalizada
</details>

<details>
<summary>4. SEO & Metadatos</summary>

- [x] `astro.config.mjs` con `site` y `@astrojs/sitemap`
- [x] `robots.txt` enlazado a sitemap
- [x] OG tags dinámicos (slug + categorías)
- [x] JSON-LD en slug: `LearningResource`, `WebPage`, `BreadcrumbList`, `ItemList` relacionados
- [x] JSON-LD en categorías: `CollectionPage`, `ItemList`
- [ ] Revisar canonical sin `/` final en categorías
</details>

<details>
<summary>5. Estilos & UX</summary>

- [x] Tailwind aplicado a todo
- [x] Portadas con `aspect-[4/3]`
- [x] Filtros sticky en index
- [x] Chips rápidos (subject/level)
- [x] CTA de descarga visible
- [x] Relacionados con prefetch y hover
</details>

<details>
<summary>6. Pendientes / Mejoras</summary>

- [ ] Implementar `/imprimibles/nivel/[level].astro`
- [ ] Página 404 con diseño consistente
- [ ] Añadir logo en JSON-LD de organización
- [ ] Revisión de performance (imágenes optimizadas, preload tipografía)
- [ ] Ampliar descripción en categorías para SEO long-tail
</details>
