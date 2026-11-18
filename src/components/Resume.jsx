import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaDownload, FaPrint } from "react-icons/fa";
import {
  personalInfo,
  experiences,
  resumeSkills,
  education,
  coursework,
} from "../data/portfolioData";

const FILE_NAME = "Muhammad_Awais_Resume";
const SITE_TITLE =
  "Muhammad Awais | Senior Full-Stack Software Engineer (Node.js, React, Angular)";

const stripProtocol = (url) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

/*
 * ATS-friendly resume:
 *  - single column, real text (no icons/graphics inside the content)
 *  - standard section headings recruiters' parsers recognise
 *  - links written out in full so they survive copy/paste and printing
 */
const Section = ({ title, children }) => (
  <section className="mb-4 resume-section">
    <h2 className="text-[13px] font-bold uppercase tracking-[0.14em] text-gray-900 border-b border-gray-400 pb-0.5 mb-2">
      {title}
    </h2>
    {children}
  </section>
);

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = FILE_NAME;
    return () => {
      document.title = SITE_TITLE;
    };
  }, []);

  const contact = [
    personalInfo.location,
    personalInfo.phone,
    { label: personalInfo.email, href: `mailto:${personalInfo.email}` },
    {
      label: stripProtocol(personalInfo.linkedin),
      href: personalInfo.linkedin,
    },
    { label: stripProtocol(personalInfo.website), href: personalInfo.website },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 [color-scheme:light]">
      {/* Top Bar — hidden when printing */}
      <div className="no-print sticky top-0 z-50 bg-[#09090a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm hover:text-[#c6f24e] transition-colors"
          >
            <FaArrowLeft />{" "}
            <span className="hidden xs:inline">Back to Portfolio</span>
            <span className="xs:hidden">Back</span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border border-slate-600 hover:border-slate-400 transition-colors"
            >
              <FaPrint /> Print
            </button>
            <a
              href={personalInfo.resumePdf}
              download="Muhammad_Awais_Resume.pdf"
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 text-sm font-medium rounded-lg bg-[#c6f24e] text-[#0a0a0b] hover:brightness-95 transition-colors"
            >
              <FaDownload /> <span className="hidden sm:inline">Download</span>{" "}
              PDF
            </a>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <main
        className="resume-content max-w-[52rem] mx-auto px-5 sm:px-8 py-6 sm:py-10 text-[13.5px] leading-snug"
        style={{ fontFamily: "Geist, Arial, sans-serif" }}
      >
        {/* Header */}
        <header className="text-center mb-4">
          <h1 className="text-[28px] font-bold tracking-tight text-gray-900 leading-tight">
            {personalInfo.name}
          </h1>
          <p className="text-[15px] font-semibold text-indigo-800 mt-0.5">
            {personalInfo.title} |{" "}
            {personalInfo.specialty.replace(/ · /g, " | ")}
          </p>
          <p className="mt-1.5 text-[12.5px] text-gray-700 flex flex-wrap justify-center gap-x-2 gap-y-0.5">
            {contact.map((c, i) => (
              <span key={i} className="whitespace-nowrap">
                {i > 0 && <span className="text-gray-400 mr-2">|</span>}
                {typeof c === "string" ? (
                  c
                ) : (
                  <a href={c.href} className="text-indigo-800 hover:underline">
                    {c.label}
                  </a>
                )}
              </span>
            ))}
          </p>
        </header>

        <Section title="Summary">
          <p className="text-gray-800">{personalInfo.resumeSummary}</p>
        </Section>

        <Section title="Experience">
          {experiences.map((exp, idx) => (
            <article
              key={exp.id}
              className={`resume-job ${idx > 0 ? "mt-3" : ""}`}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
                <h3 className="font-bold text-gray-900 text-[14.5px]">
                  {exp.role}, {exp.company}
                </h3>
                <span className="text-[12.5px] text-gray-700 whitespace-nowrap font-medium">
                  {exp.period}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between text-[12.5px] text-gray-600">
                <span>
                  <a
                    href={exp.website}
                    className="text-indigo-800 hover:underline"
                  >
                    {stripProtocol(exp.website)}
                  </a>
                </span>
                <span>{exp.location}</span>
              </div>
              <p className="text-gray-700 italic mt-1">{exp.description}</p>
              <ul className="mt-1 space-y-0.5 text-gray-800 list-disc list-outside ml-4">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <p className="mt-1 text-[12.5px] text-gray-700">
                <span className="font-semibold text-gray-900">Tech: </span>
                {exp.tech.join(", ")}
              </p>
            </article>
          ))}
        </Section>

        <Section title="Skills">
          <dl className="space-y-0.5">
            {resumeSkills.map((s) => (
              <div key={s.label} className="flex flex-col sm:flex-row">
                <dt className="font-semibold text-gray-900 sm:w-52 shrink-0 sm:pr-3">
                  {s.label}:
                </dt>
                <dd className="text-gray-800">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Areas of Deep Study">
          <dl className="space-y-0.5">
            {coursework.map((c) => (
              <div key={c.title} className="flex flex-col sm:flex-row">
                <dt className="font-semibold text-gray-900 sm:w-52 shrink-0 sm:pr-3">
                  {c.title}:
                </dt>
                <dd className="text-gray-800">{c.topics.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Education">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
            <h3 className="font-bold text-gray-900">{education.degree}</h3>
            <span className="text-[12.5px] text-gray-700 font-medium">
              {education.period}
            </span>
          </div>
          <p className="text-gray-800">
            {education.institution}, {education.location}
          </p>
        </Section>
      </main>
    </div>
  );
};

export default Resume;
