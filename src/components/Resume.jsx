import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaPrint, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { personalInfo, experiences, skillCategories, education, coursework } from "../data/portfolioData";

const Resume = () => {
  useEffect(() => {
    document.title = "Resume – Muhammad Awais";
    return () => { document.title = "Muhammad Awais | Portfolio"; };
  }, []);

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Bar — hidden when printing */}
      <div className="print:hidden sticky top-0 z-50 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm hover:text-indigo-400 transition-colors">
            <FaArrowLeft /> Back to Portfolio
          </Link>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors"
          >
            <FaPrint /> Print / Save PDF
          </button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-8 py-10 print:px-0 print:py-0">
        {/* Header */}
        <header className="text-center mb-6 pb-4 border-b-2 border-gray-800">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{personalInfo.name}</h1>
          <p className="text-lg font-medium text-indigo-700 mt-1">{personalInfo.title}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-3 text-sm text-gray-600">
            <span className="flex items-center gap-1"><FaEnvelope className="text-xs" /> {personalInfo.email}</span>
            <span className="flex items-center gap-1"><FaPhone className="text-xs" /> {personalInfo.phone}</span>
            <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-xs" /> {personalInfo.location}</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-indigo-600 hover:underline">
              <FaLinkedin className="text-xs" /> LinkedIn
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-300 pb-1">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-gray-700">{personalInfo.description}</p>
        </section>

        {/* Experience */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-300 pb-1">Professional Experience</h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="text-base font-bold text-gray-900">{exp.role}</h3>
                <span className="text-xs text-gray-500">{exp.period}</span>
              </div>
              <p className="text-sm font-medium text-indigo-700">{exp.company} · {exp.type}</p>
              <ul className="mt-1.5 space-y-1 text-sm text-gray-700 list-disc list-outside ml-4">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="leading-snug">{h}</li>
                ))}
              </ul>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-300 pb-1">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="flex">
                <span className="font-semibold text-gray-900 w-36 shrink-0">{cat.title}:</span>
                <span className="text-gray-700">{cat.skills.map(s => s.name).join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-300 pb-1">Education</h2>
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-sm font-bold text-gray-900">{education.degree}</h3>
            <span className="text-xs text-gray-500">{education.period}</span>
          </div>
          <p className="text-sm text-gray-700">{education.institution}, {education.location}</p>
        </section>

        {/* Coursework / Certifications */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-300 pb-1">Professional Development</h2>
          {coursework.map((course, i) => (
            <div key={i} className="mb-2">
              <h3 className="text-sm font-semibold text-gray-900">{course.title}</h3>
              <p className="text-xs text-gray-600">{course.topics.join(" · ")}</p>
            </div>
          ))}
        </section>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          @page { margin: 0.5in; size: letter; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
          .print\\:px-0 { padding-left: 0; padding-right: 0; }
          .print\\:py-0 { padding-top: 0; padding-bottom: 0; }
        }
      `}</style>
    </div>
  );
};

export default Resume;
