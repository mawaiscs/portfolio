import { jsPDF } from "jspdf";

// ── Colours (RGB arrays) ────────────────────────────────
const INDIGO = [79, 70, 229]; // indigo-600
const DARK = [17, 24, 39]; // gray-900
const MID = [55, 65, 81]; // gray-700
const LIGHT = [107, 114, 128]; // gray-500
const DIVIDER = [209, 213, 219]; // gray-300
const DIVIDER_DARK = [31, 41, 55]; // gray-800
const TAG_BG = [238, 242, 255]; // indigo-50
const TAG_TEXT = [67, 56, 202]; // indigo-700

// ── Page layout (mm, US Letter) ─────────────────────────
const PW = 215.9;
const PH = 279.4;
const ML = 14;
const MR = 14;
const MT = 13;
const MB = 13;
const CW = PW - ML - MR;

export default function generateResumePDF({
  personalInfo,
  experiences,
  skillCategories,
  education,
}) {
  const doc = new jsPDF({ unit: "mm", format: "letter" });
  let y = MT;

  const font = (style, size) => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
  };
  const color = (c) => doc.setTextColor(c[0], c[1], c[2]);
  const line = (x1, yy, x2, c, w = 0.3) => {
    doc.setDrawColor(c[0], c[1], c[2]);
    doc.setLineWidth(w);
    doc.line(x1, yy, x2, yy);
  };

  const pageBreak = (need) => {
    if (y + need > PH - MB) {
      doc.addPage();
      y = MT;
    }
  };

  const sectionTitle = (title) => {
    pageBreak(12);
    font("bold", 8.5);
    color(LIGHT);
    doc.text(title.toUpperCase(), ML, y);
    y += 1.5;
    line(ML, y, ML + CW, DIVIDER);
    y += 3.5;
  };

  // ───────────── HEADER ─────────────────────────────────
  font("bold", 22);
  color(DARK);
  doc.text(personalInfo.name, PW / 2, y, { align: "center" });
  y += 7;

  font("normal", 12);
  color(INDIGO);
  doc.text(personalInfo.title, PW / 2, y, { align: "center" });
  y += 6;

  // Contact row
  const parts = [
    { t: personalInfo.location },
    { t: personalInfo.phone },
    { t: personalInfo.email, url: `mailto:${personalInfo.email}` },
    { t: "LinkedIn", url: personalInfo.linkedin },
    { t: "Portfolio", url: "https://portfolio-mawais.vercel.app" },
  ];
  const sep = "  |  ";
  font("normal", 8);
  const full = parts.map((p) => p.t).join(sep);
  let cx = (PW - doc.getTextWidth(full)) / 2;

  parts.forEach((p, i) => {
    color(p.url ? INDIGO : LIGHT);
    doc.text(p.t, cx, y);
    if (p.url) {
      const w = doc.getTextWidth(p.t);
      doc.link(cx, y - 3, w, 4, { url: p.url });
    }
    cx += doc.getTextWidth(p.t);
    if (i < parts.length - 1) {
      color(LIGHT);
      doc.text(sep, cx, y);
      cx += doc.getTextWidth(sep);
    }
  });

  y += 3;
  line(ML, y, ML + CW, DIVIDER_DARK, 0.5);
  y += 5;

  // ───────────── PROFESSIONAL SUMMARY ───────────────────
  sectionTitle("Professional Summary");
  font("normal", 9);
  color(MID);
  const sumLines = doc.splitTextToSize(personalInfo.description, CW);
  doc.text(sumLines, ML, y);
  y += sumLines.length * 4 + 3;

  // ───────────── TECHNICAL SKILLS ───────────────────────
  sectionTitle("Technical Skills");
  const colW = CW / 2;
  const labelW = 40;
  let startY = y;

  skillCategories.forEach((cat, i) => {
    const col = i % 2;
    if (col === 0 && i > 0) {
      y = startY;
    }
    const bx = ML + col * colW;

    pageBreak(6);
    font("bold", 8.5);
    color(DARK);
    doc.text(cat.title + ":", bx, y);

    font("normal", 8.5);
    color(MID);
    const names = cat.skills.map((s) => s.name).join(", ");
    const sLines = doc.splitTextToSize(names, colW - labelW - 1);
    doc.text(sLines, bx + labelW, y);

    const rowH = Math.max(sLines.length * 3.6, 4.2) + 0.8;
    if (col === 1) {
      startY += rowH;
      y = startY;
    } else {
      y += rowH;
      startY = y;
    }
  });
  // If odd number of categories, advance properly
  if (skillCategories.length % 2 !== 0) {
    y = startY;
  }
  y += 2;

  // ───────────── PROFESSIONAL EXPERIENCE ────────────────
  sectionTitle("Professional Experience");

  experiences.forEach((exp, idx) => {
    if (idx > 0) {
      pageBreak(28);
      line(ML, y, ML + CW, DIVIDER);
      y += 4;
    }

    pageBreak(20);

    // Role — Company  |  Period
    font("bold", 10);
    color(DARK);
    doc.text(`${exp.role} — ${exp.company}`, ML, y);
    font("normal", 8);
    color(LIGHT);
    const pw = doc.getTextWidth(exp.period);
    doc.text(exp.period, ML + CW - pw, y);
    y += 4;

    // Type + links
    font("normal", 8.5);
    color(LIGHT);
    let lx = ML;
    doc.text(exp.type, lx, y);
    lx += doc.getTextWidth(exp.type) + 4;
    if (exp.website) {
      color(INDIGO);
      font("normal", 8);
      doc.text("Website", lx, y);
      const ww = doc.getTextWidth("Website");
      doc.link(lx, y - 3, ww, 4, { url: exp.website });
      lx += ww + 4;
    }
    if (exp.dashboard) {
      color(INDIGO);
      font("normal", 8);
      doc.text("Dashboard", lx, y);
      const dw = doc.getTextWidth("Dashboard");
      doc.link(lx, y - 3, dw, 4, { url: exp.dashboard });
    }
    y += 4;

    // Description
    font("italic", 8.5);
    color(LIGHT);
    const descLines = doc.splitTextToSize(exp.description, CW);
    doc.text(descLines, ML, y);
    y += descLines.length * 3.6 + 2;

    // Bullets
    font("normal", 8.5);
    color(MID);
    exp.highlights.forEach((h) => {
      pageBreak(7);
      const bLines = doc.splitTextToSize(h, CW - 6);
      doc.text("•", ML + 1, y);
      doc.text(bLines, ML + 5.5, y);
      y += bLines.length * 3.6 + 0.8;
    });

    // Tech tags
    y += 1;
    pageBreak(7);
    font("normal", 7);
    let tx = ML;
    const tagH = 4;
    const pad = 2;

    exp.tech.forEach((t) => {
      const tw = doc.getTextWidth(t) + pad * 2;
      if (tx + tw > ML + CW) {
        tx = ML;
        y += tagH + 1.5;
        pageBreak(7);
      }
      doc.setFillColor(TAG_BG[0], TAG_BG[1], TAG_BG[2]);
      doc.roundedRect(tx, y - 3, tw, tagH, 1, 1, "F");
      color(TAG_TEXT);
      doc.text(t, tx + pad, y);
      tx += tw + 2;
    });
    y += tagH + 3;
  });

  // ───────────── EDUCATION ──────────────────────────────
  y += 1;
  sectionTitle("Education");
  pageBreak(10);

  font("bold", 9.5);
  color(DARK);
  doc.text(education.degree, ML, y);
  font("normal", 8);
  color(LIGHT);
  const epw = doc.getTextWidth(education.period);
  doc.text(education.period, ML + CW - epw, y);
  y += 4;

  font("normal", 9);
  color(MID);
  doc.text(`${education.institution}, ${education.location}`, ML, y);

  // ── Save ──────────────────────────────────────────────
  doc.save("Muhammad_Awais_Resume.pdf");
}
