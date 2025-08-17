import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "src/content/imprimibles");

const REQUIRED_FIELDS = ["title", "description", "cover", "pdf", "subject", "level", "date", "tags"];

const SUBJECTS = ["matemáticas", "lengua", "inglés", "ciencias naturales", "ciencias sociales", "arte", "música"];
const LEVELS = ["infantil", "primaria", "secundaria"];

for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".md")) continue;

    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(raw);

    console.log(`\n📄 ${file}`);

    for (const field of REQUIRED_FIELDS) {
        if (!(field in data)) {
            console.log(` ❌ Falta campo: ${field}`);
        }
    }

    if (data.subject && !SUBJECTS.includes(data.subject)) {
        console.log(` ⚠️ Subject inválido: ${data.subject}`);
    }

    if (data.level && !LEVELS.includes(data.level)) {
        console.log(` ⚠️ Level inválido: ${data.level}`);
    }

    if (Array.isArray(data.tags) && data.tags.length < 2) {
        console.log(" ⚠️ Muy pocas tags (mínimo 2 recomendado)");
    }

    console.log(" ✔️ Revisión completa");
}
