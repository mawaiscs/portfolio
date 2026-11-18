// Generates public/Muhammad_Awais_Resume.pdf from the /resume page so the
// downloadable PDF always matches the website. Text-based & ATS-parseable.
//
// Usage: npm run resume:pdf   (builds the site, previews it, prints with Chrome)
import { spawn, execFileSync } from "node:child_process";
import { existsSync, copyFileSync, statSync } from "node:fs";
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

try {
  await wait(`http://localhost:${PORT}/`);
  execFileSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      "--virtual-time-budget=5000",
      `--print-to-pdf=${OUT}`,
      `http://localhost:${PORT}/resume`,
    ],
    { stdio: "ignore" },
  );
  copyFileSync(OUT, resolve("Muhammad_Awais_Resume.pdf"));
  console.log(`Resume PDF written: ${OUT} (${Math.round(statSync(OUT).size / 1024)} KB)`);
} finally {
  if (process.platform === "win32") {
    try {
      execFileSync("taskkill", ["/pid", String(preview.pid), "/T", "/F"], { stdio: "ignore" });
    } catch {
      /* already exited */
    }
  } else preview.kill();
}
