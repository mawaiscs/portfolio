// Writes Muhammad_Awais_Resume.md from src/data/portfolioData.js (single source of truth).
import { writeFileSync } from "node:fs";
import { personalInfo as p, experiences, resumeSkills, education, coursework } from "../src/data/portfolioData.js";

const strip = (u) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const lines = [
  `# ${p.name}`,
  `**${p.title} | ${p.specialty.replace(/ · /g, " | ")}**`,
  "",
  `${p.location} · ${p.phone} · ${p.email} · [${strip(p.linkedin)}](${p.linkedin}) · [${strip(p.website)}](${p.website})`,
  "",
  "## Summary",
  p.resumeSummary,
  "",
  "## Experience",
];
for (const e of experiences) {
  lines.push("", `### ${e.role}, ${e.company}`, `${e.period} · ${e.location} · [${strip(e.website)}](${e.website})`, "", `_${e.description}_`, "");
  e.highlights.forEach((h) => lines.push(`- ${h}`));
  lines.push("", `**Tech:** ${e.tech.join(", ")}`);
}
lines.push("", "## Skills");
resumeSkills.forEach((s) => lines.push(`- **${s.label}:** ${s.value}`));
lines.push("", "## Areas of Deep Study");
coursework.forEach((c) => lines.push(`- **${c.title}:** ${c.topics.join(", ")}`));
lines.push("", "## Education", `**${education.degree}** — ${education.institution}, ${education.location} (${education.period})`, "");
writeFileSync("Muhammad_Awais_Resume.md", lines.join("\n"));
console.log("Muhammad_Awais_Resume.md written");
