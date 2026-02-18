import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { experiences } from "../data/portfolioData";

const ExperienceCard = ({ exp, index, isInView }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleHighlights = expanded
    ? exp.highlights
    : exp.highlights.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="hidden md:block absolute -left-[41px] top-8 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 z-10" />

      <div className="group p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:border-indigo-500/30 transition-all duration-300">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-3xl">{exp.logo}</span>
              <div>
                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                <p className="text-sm text-slate-400">{exp.period}</p>
              </div>
            </div>
            <p className="text-indigo-400 font-medium">
              {exp.role}{" "}
              <span className="text-slate-500 font-normal">• {exp.type}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={exp.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-indigo-600/10 text-indigo-400 hover:bg-indigo-600/20 transition-colors"
            >
              <FaExternalLinkAlt size={10} /> Website
            </a>
            {exp.dashboard && (
              <a
                href={exp.dashboard}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-violet-600/10 text-violet-400 hover:bg-violet-600/20 transition-colors"
              >
                <FaExternalLinkAlt size={10} /> Dashboard
              </a>
            )}
            {exp.dashboards &&
              exp.dashboards.map((d, i) => (
                <a
                  key={d}
                  href={d}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-violet-600/10 text-violet-400 hover:bg-violet-600/20 transition-colors"
                >
                  <FaExternalLinkAlt size={10} /> Dashboard {i + 1}
                </a>
              ))}
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {exp.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-4">
          {visibleHighlights.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-slate-300"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {exp.highlights.length > 4 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors mb-4"
          >
            {expanded ? (
              <>
                Show less <FaChevronUp size={10} />
              </>
            ) : (
              <>
                Show {exp.highlights.length - 4} more{" "}
                <FaChevronDown size={10} />
              </>
            )}
          </button>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/50"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative md:ml-8">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-slate-700 to-transparent -translate-x-[33px]" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
