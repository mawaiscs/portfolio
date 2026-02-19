import { jsPDF } from "jspdf";

// ── Colour palette ──────────────────────────────────────
const INDIGO = [67, 56, 202]; // #4338ca
const DARK = [17, 24, 39]; // gray-900
const MID = [75, 85, 99]; // gray-600
const LIGHT = [107, 114, 128]; // gray-500
const LINK = [79, 70, 229]; // indigo-600
const DIVIDER = [209, 213, 219]; // gray-300

// ── Layout constants ────────────────────────────────────
const PAGE_W = 215.9; // letter mm
const PAGE_H = 279.4;
const ML = 15; // margin‑left
const MR = 15;
const MT = 14;
const MB = 14;
const CW = PAGE_W - ML - MR; // content width

/**
 * Generates a professional Resume PDF and triggers download.
 */
export default function generateResumePDF({
  personalInfo,
  experiences,
  skillCategories,
  education,
}) {
  const doc = new jsPDF({ unit: "mm", format: "letter" });
  let y = MT;

  // ── helpers ──────────────────────────────────────────
  const setFont = (style = "normal", size = 10) => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
  };

  const setColor = (rgb) => doc.setTextColor(...rgb);

  const checkPage = (need = 12) => {
    if (y + need > PAGE_H - MB) {
      doc.addPage();
      y = MT;
    }
  };

  const drawSectionHeading = (title) => {
    checkPage(14);
    setFont("bold", 9);
    setColor(LIGHT);
    doc.text(title.toUpperCase(), ML, y);
    y += 1.5;
    doc.setDrawColor(...DIVIDER);
    doc.setLineWidth(0.3);
    doc.line(ML, y, ML + CW, y);
    y += 4;
  };

  const wrapText = (text, maxWidth, fontSize = 9.5) => {
    setFont("normal", fontSize);
    return doc.splitTextToSize(text, maxWidth);
  };

  // ── HEADER ───────────────────────────────────────────
  // Name
  setFont("bold", 22);
  setColor(DARK);
  doc.text(personalInfo.name, PAGE_W / 2, y, { align: "center" });
  y += 7;

  // Title
  setFont("normal", 13);
  setColor(INDIGO);
  doc.text(personalInfo.title, PAGE_W / 2, y, { align: "center" });
  y += 6;

  // Contact line
  const contactParts = [
    { text: personalInfo.location },
    { text: personalInfo.phone },
    { text: personalInfo.email, link: `mailto:${personalInfo.email}` },
    { text: "LinkedIn", link: personalInfo.linkedin },
    { text: "Portfolio", link: "https://portfolio-mawais.vercel.app" },
  ];

  setFont("normal", 8.5);
  const sep = "  |  ";
  const fullContact = contactParts.map((p) => p.text).join(sep);
  const totalW = doc.getTextWidth(fullContact);
  let cx = (PAGE_W - totalW) / 2;

  contactParts.forEach((part, i) => {
    const isLink = !!part.link;
    setColor(isLink ? LINK : MID);
    doc.text(part.text, cx, y);
    if (isLink) {
      const tw = doc.getTextWidth(part.text);
      doc.link(cx, y - 3, tw, 4, { url: part.link });
    }
    cx += doc.getTextWidth(part.text);
    if (i < contactParts.length - 1) {
      setColor(LIGHT);
      doc.text(sep, cx, y);
      cx += doc.getTextWidth(sep);
    }
  });

  y += 3;
  doc.setDrawColor(...DARK);
  doc.setLineWidth(0.5);
  doc.line(ML, y, ML + CW, y);
  y += 6;

  // ── PROFESSIONAL SUMMARY ─────────────────────────────
  drawSectionHeading("Professional Summary");
  setFont("normal", 9.5);
  setColor(MID);
  const summaryLines = wrapText(personalInfo.description, CW);
  doc.text(summaryLines, ML, y);
  y += summaryLines.length * 4.2 + 4;

  // ── TECHNICAL SKILLS ─────────────────────────────────
  drawSectionHeading("Technical Skills");
  const colW = CW / 2;
  const labelW = 42;

  skillCategories.forEach((cat, i) => {
    checkPage(7);
    const col = i % 2;
    const baseX = ML + col * colW;

    setFont("bold", 9);
    setColor(DARK);
    doc.text(`${cat.title}:`, baseX, y);

    setFont("normal", 9);
    setColor(MID);
    const skillsText = cat.skills.map((s) => s.name).join(", ");
    const skillLines = doc.splitTextToSize(skillsText, colW - labelW - 2);
    doc.text(skillLines, baseX + labelW, y);

    if (col === 1 || i === skillCategories.length - 1) {
      y += Math.max(skillLines.length * 3.8, 4.5) + 1;
    }
  });
  y += 2;

  // ── PROFESSIONAL EXPERIENCE ──────────────────────────
  drawSectionHeading("Professional Experience");

  experiences.forEach((exp, idx) => {
    if (idx > 0) {
      checkPage(30);
      doc.setDrawColor(...DIVIDER);
      doc.setLineWidth(0.2);
      doc.line(ML, y, ML + CW, y);
      y += 4;
    }

    // Role — Company   +   Period
    checkPage(20);
    setFont("bold", 10.5);
    setColor(DARK);
    doc.text(`${exp.role} — ${exp.company}`, ML, y);

    setFont("normal", 8.5);
    setColor(LIGHT);
    const periodW = doc.getTextWidth(exp.period);
    doc.text(exp.period, ML + CW - periodW, y);
    y += 4;

    // Type + links
    setFont("normal", 9);
    setColor(LIGHT);
    let lx = ML;
    doc.text(exp.type, lx, y);
    lx += doc.getTextWidth(exp.type) + 4;

    if (exp.website) {
      setFont("normal", 8);
      setColor(LINK);
      const wt = "Website";
      doc.text(wt, lx, y);
      const ww = doc.getTextWidth(wt);
      doc.link(lx, y - 3, ww, 4, { url: exp.website });
      lx += ww + 4;
    }
    if (exp.dashboard) {
      setFont("normal", 8);
      setColor(LINK);
      const dt = "Dashboard";
      doc.text(dt, lx, y);
      const dw = doc.getTextWidth(dt);
      doc.link(lx, y - 3, dw, 4, { url: exp.dashboard });
    }
    y += 4;

    // Description (italic)
    setFont("italic", 9);
    setColor(LIGHT);
    const descLines = wrapText(exp.description, CW, 9);
    doc.text(descLines, ML, y);
    y += descLines.length * 3.8 + 2;

    // Bullet points
    setFont("normal", 9);
    setColor(MID);
    exp.highlights.forEach((h) => {
      checkPage(8);
      const bulletLines = doc.splitTextToSize(h, CW - 7);
      doc.text("•", ML + 1, y);
      doc.text(bulletLines, ML + 6, y);
      y += bulletLines.length * 3.8 + 1;
    });

    // Tech tags
    y += 1;
    checkPage(8);
    setFont("normal", 7.5);
    let tx = ML;
    const tagH = 4.5;
    const tagPad = 2.5;

    exp.tech.forEach((t) => {
      const tw = doc.getTextWidth(t) + tagPad * 2;
      if (tx + tw > ML + CW) {
        tx = ML;
        y += tagH + 1.5;
        checkPage(8);
      }
      // Tag background
      doc.setFillColor(238, 242, 255); // indigo-50
      doc.roundedRect(tx, y - 3.2, tw, tagH, 1, 1, "F");
      setColor(INDIGO);
      doc.text(t, tx + tagPad, y);
      tx += tw + 2;
    });
    y += tagH + 3;
  });

  // ── EDUCATION ────────────────────────────────────────
  y += 2;
  drawSectionHeading("Education");

  checkPage(12);
  setFont("bold", 10);
  setColor(DARK);
  doc.text(education.degree, ML, y);

  setFont("normal", 8.5);
  setColor(LIGHT);
  const epW = doc.getTextWidth(education.period);
  doc.text(education.period, ML + CW - epW, y);
  y += 4;

  setFont("normal", 9.5);
  setColor(MID);
  doc.text(`${education.institution}, ${education.location}`, ML, y);

  // ── Save ─────────────────────────────────────────────
  doc.save("Muhammad_Awais_Resume.pdf");
}
