// Generates public/Muhammad_Awais_Resume.pdf from the /resume page so the
// downloadable PDF always matches the website. Text-based & ATS-parseable.
//
// Usage: npm run resume:pdf   (builds the site, previews it, prints with Chrome)
import { spawn, execFileSync } from "node:child_process";
import { existsSync, copyFileSync, statSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { resolve } from "node:path";

const PORT = 4179;
const OUT = resolve("public/Muhammad_Awais_Resume.pdf");

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const chrome = candidates.find((p) => existsSync(p));
if (!chrome) throw new Error("Chrome/Edge not found — set CHROME_PATH");

const preview = spawn("npx", ["vite", "preview", "--port", String(PORT), "--strictPort"], {
  shell: true,
  stdio: "ignore",
});

const wait = async (url, tries = 40) => {
  for (let i = 0; i < tries; i++) {
    try {
      if ((await fetch(url)).ok) return;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Preview server did not start on ${url}`);
};

const profileDir = mkdtempSync(join(tmpdir(), "resume-pdf-"));
// Print to a temp file first: if the target PDF is open in a viewer, Chrome
// can't overwrite it in place, but a copy still works.
const tmpPdf = join(profileDir, "resume.pdf");

try {
  await wait(`http://localhost:${PORT}/`);
  execFileSync(
    chrome,
    [
      "--headless=new",
      // Fresh profile each run so a cached old build is never printed.
      `--user-data-dir=${profileDir}`,
      "--disable-gpu",
      "--no-pdf-header-footer",
      "--virtual-time-budget=5000",
      `--print-to-pdf=${tmpPdf}`,
      `http://localhost:${PORT}/resume`,
    ],
    { stdio: "ignore" },
  );
  if (!existsSync(tmpPdf) || statSync(tmpPdf).size < 10_000) {
    throw new Error("Chrome did not produce the resume PDF");
  }
  copyFileSync(tmpPdf, OUT);
  copyFileSync(tmpPdf, resolve("Muhammad_Awais_Resume.pdf"));
  console.log(`Resume PDF written: ${OUT} (${Math.round(statSync(OUT).size / 1024)} KB)`);
} finally {
  rmSync(profileDir, { recursive: true, force: true });
  if (process.platform === "win32") {
    try {
      execFileSync("taskkill", ["/pid", String(preview.pid), "/T", "/F"], { stdio: "ignore" });
    } catch {
      /* already exited */
    }
  } else preview.kill();
}
