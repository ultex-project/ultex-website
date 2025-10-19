import { promises as fs } from "fs";
import path from "path";

const root = path.resolve(process.argv[2] ?? "src");
const filePattern = /\.(tsx)$/;
const ignoreDirs = new Set(["locales", "node_modules", ".next"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (ignoreDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else if (filePattern.test(entry.name)) {
      await analyzeFile(fullPath);
    }
  }
}

const textRegex = />[^<]*[\p{L}][^<]*(?=<)/gu;

async function analyzeFile(filePath) {
  const content = await fs.readFile(filePath, "utf8");
  const matches = [...content.matchAll(textRegex)];
  if (!matches.length) {
    return;
  }

  const relPath = path.relative(process.cwd(), filePath);
  const suggestions = matches
    .map((match) => match[0]
      .replace(/^>/, "")
      .replace(/</g, "")
      .trim())
    .filter(Boolean)
    .filter((text) =>
      text.length > 1 &&
      !/^\{/u.test(text) &&
      !text.includes("{"));

  if (suggestions.length) {
    console.log(`\n# ${relPath}`);
    suggestions.forEach((text, idx) => {
      const key = text
        .toLowerCase()
        .replace(/[^\p{L}0-9\s-]/gu, "")
        .trim()
        .split(/\s+/)
        .slice(0, 4)
        .join("-");
      console.log(`- "${text}" -> ${key || "text"}-${idx}`);
    });
  }
}

walk(root).catch((err) => {
  console.error(err);
  process.exit(1);
});
