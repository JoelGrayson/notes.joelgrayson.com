import fs from "fs";
import path from "path";

const NOTES_DIR = path.join(__dirname, "../src/do-not-edit/notes-copied-from-obsidian");
const MEDIA_DIR = path.join(__dirname, "../public/media");

const EMBED_REGEX = /!\[\[([^\]|]+?)(?:\|\d+)?\]\]/g;
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".bmp", ".pdf"]);

const mediaFiles = new Set(fs.readdirSync(MEDIA_DIR));

const noteFiles = fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith(".md"));

const missing: { file: string; ref: string }[] = [];

for (const noteFile of noteFiles) {
    const content = fs.readFileSync(path.join(NOTES_DIR, noteFile), "utf-8");
    let match;
    while ((match = EMBED_REGEX.exec(content)) !== null) {
        const filename = match[1].trim();
        const ext = path.extname(filename).toLowerCase();
        if (!IMAGE_EXTENSIONS.has(ext)) continue;
        if (!mediaFiles.has(filename)) {
            missing.push({ file: noteFile, ref: filename });
        }
    }
}

if (missing.length === 0) {
    console.log("All referenced media files exist in public/media/.");
} else {
    console.log(`Found ${missing.length} missing media file(s):\n`);
    for (const { file, ref } of missing) {
        console.log(`  ${file}  →  ${ref}`);
    }
    process.exit(1);
}
