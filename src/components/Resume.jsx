import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGlobe,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  personalInfo,
  experiences,
  skillCategories,
  education,
} from "../data/portfolioData";

const FILE_NAME = "Muhammad_Awais_Resume";
const SITE_TITLE = "Muhammad Awais | Senior Software Engineer";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = FILE_NAME;
    return () => {
      document.title = SITE_TITLE;
    };
  }, []);

  const handleDownload = (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/resume-download", true);
    xhr.responseType = "blob";
    xhr.onload = () => {
      if (xhr.status === 200 && xhr.response?.size > 0) {
        const blob = new Blob([xhr.response], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Muhammad_Awais_Resume.pdf";
        link.click();
        setTimeout(() => window.URL.revokeObjectURL(url), 5000);
      }
    };
    xhr.send();
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Bar — hidden when printing */}
      <div className="no-print sticky top-0 z-50 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm hover:text-indigo-400 transition-colors"
          >
            <FaArrowLeft />{" "}
            <span className="hidden xs:inline">Back to Portfolio</span>
            <span className="xs:hidden">Back</span>
          </Link>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 text-sm font-medium rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors"
          >
            <FaDownload /> <span className="hidden sm:inline">Download</span>{" "}
            PDF
          </button>
        </div>
      </div>

      {/* Resume Content */}
      <div
        className="resume-content max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-10"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {/* Header */}
        <header className="text-center mb-6 pb-4 border-b-2 border-gray-800">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            {personalInfo.name}
          </h1>
          <p className="text-base sm:text-lg font-medium text-indigo-700 mt-1">
            {personalInfo.title}
          </p>
          <div className="flex items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1 mt-3 text-xs sm:text-sm text-gray-600 flex-wrap">
            <span className="inline-flex items-center gap-1 whitespace-nowrap">
              <FaMapMarkerAlt className="text-xs shrink-0" />
              <span>{personalInfo.location}</span>
            </span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-1 whitespace-nowrap">
              <FaPhone className="text-xs shrink-0" />
              <span>{personalInfo.phone}</span>
            </span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1 whitespace-nowrap text-indigo-600 hover:underline"
            >
              <FaEnvelope className="text-xs shrink-0" />
              <span>{personalInfo.email}</span>
            </a>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 whitespace-nowrap text-indigo-600 hover:underline"
            >
              <FaLinkedin className="text-xs shrink-0" />
              <span>LinkedIn</span>
            </a>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <a
              href="https://portfolio-mawais.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 whitespace-nowrap text-indigo-600 hover:underline"
            >
              <FaGlobe className="text-xs shrink-0" />
              <span>Portfolio</span>
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-300 pb-1">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            {personalInfo.description}
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-300 pb-1">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-900 sm:w-36 shrink-0">
                  {cat.title}:
                </span>
                <span className="text-gray-700">
                  {cat.skills.map((s) => s.name).join(", ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-300 pb-1">
            Professional Experience
          </h2>
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={idx > 0 ? "mt-5 pt-4 border-t border-gray-200" : ""}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
                <h3 className="text-sm sm:text-base font-bold text-gray-900">
                  {exp.role} — {exp.company}
                </h3>
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-0.5 flex-wrap">
                <span className="text-sm text-gray-500">{exp.type}</span>
                {exp.website && (
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:underline"
                  >
                    <FaExternalLinkAlt className="text-[10px]" /> Website
                  </a>
                )}
                {exp.dashboard && (
                  <a
                    href={exp.dashboard}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:underline"
                  >
                    <FaExternalLinkAlt className="text-[10px]" /> Dashboard
                  </a>
                )}
              </div>
              <p className="text-sm italic text-gray-500 mt-1">
                {exp.description}
              </p>
              <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc list-outside ml-4">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="leading-snug">
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-300 pb-1">
            Education
          </h2>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
            <h3 className="text-sm font-bold text-gray-900">
              {education.degree}
            </h3>
            <span className="text-xs text-gray-500">{education.period}</span>
          </div>
          <p className="text-sm text-gray-700">
            {education.institution}, {education.location}
          </p>
        </section>
      </div>
    </div>
  );
};

export default Resume;
