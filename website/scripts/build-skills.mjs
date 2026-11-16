// Generate src/data/skills.json from the repository README.md so the website
// always lists exactly the skills in the README. Runs automatically before
// `npm run build` and `npm run dev`; the JSON is also committed so a build
// still works if README.md is not reachable.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const readmePath = resolve(here, "../../README.md");
const outPath = resolve(here, "../src/data/skills.json");

if (!existsSync(readmePath)) {
  console.warn(`build-skills: ${readmePath} not found, keeping existing skills.json`);
  process.exit(0);
}

const readme = readFileSync(readmePath, "utf8");
const start = readme.indexOf("## Official Skill Directories");
const end = readme.indexOf("## Skill Quality Standards");
if (start < 0 || end < 0) throw new Error("build-skills: directory section markers not found in README.md");

const TAB = {
  "AI Platforms & Models": "ai",
  "Cloud & Infrastructure": "infra",
  "Developer Tools & Frameworks": "devtools",
  "Google Ecosystem": "devtools",
  "Business, Productivity & Marketing": "business",
  "Security & Web Intelligence": "security",
};

const entry = /^\s*- \[([^\]]+)\]\((https?:\/\/[^)\s]+)\)\s+[-–—]\s+(.+)$/;
const row = /^\|\s*\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)\s*\|\s*([^|]+?)\s*\|/;
const clean = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[`*]/g, "").trim();

let tab = "ai";
let group = "";
const seen = new Set();
const skills = [];
for (const line of readme.slice(start, end).split("\n")) {
  let m;
  if ((m = line.match(/^## (.+)$/))) {
    if (m[1] === "Community Skills") tab = "community";
    continue;
  }
  if ((m = line.match(/^### (.+)$/))) {
    if (TAB[m[1]]) tab = TAB[m[1]];
    group = "";
    continue;
  }
  if ((m = line.match(/^#### (.+)$/)) || (m = line.match(/<summary><strong>(.+)<\/strong><\/summary>/))) {
    group = m[1].replace(/^Skills? by /, "").replace(/ Skills by /, " · ");
    continue;
  }
  m = line.match(entry) || line.match(row);
  if (!m) continue;
  const [, name, url, description] = m;
  if (seen.has(url)) continue;
  seen.add(url);
  skills.push({ name, url, description: clean(description), tab, group });
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify(skills, null, 1) + "\n");
const counts = skills.reduce((a, s) => ((a[s.tab] = (a[s.tab] || 0) + 1), a), {});
console.log(`build-skills: ${skills.length} skills`, counts);
