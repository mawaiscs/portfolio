import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiPlus, FiMinus } from "react-icons/fi";
import { experiences } from "../data/portfolioData";
import { Chip, Reveal, SectionHeader } from "./ui";

const VISIBLE = 4;

const Role = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(false);
  const extra = exp.highlights.slice(VISIBLE);

  return (
    <Reveal delay={index * 0.05}>
      <article className="grid gap-6 border-t border-line py-10 md:grid-cols-[220px_1fr] md:gap-12">
        {/* Meta column */}
        <div className="md:sticky md:top-24 md:self-start">
          <p className="font-mono text-xs uppercase tracking-wider text-subtle">
            {exp.period}
          </p>
          <p className="mt-1 text-sm text-muted">{exp.duration}</p>
          <p className="mt-1 text-sm text-subtle">{exp.location}</p>
          {!exp.end && (
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-accent-text">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-text" />{" "}
              Current
            </span>
          )}
        </div>

        {/* Content column */}
        <div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-fg">
                {exp.role}
              </h3>
              <p className="mt-1 text-lg text-muted">{exp.company}</p>
            </div>
            <div className="flex gap-2">
              {exp.website && (
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-xs text-muted hover:text-fg hover:border-line-strong transition-colors"
                >
                  Website
                  <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
              {exp.dashboard && (
                <a
                  href={exp.dashboard}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-xs text-muted hover:text-fg hover:border-line-strong transition-colors"
                >
                  App
                  <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </div>

          <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted text-pretty">
            {exp.description}
          </p>

          <ul className="mt-6 space-y-3">
            {exp.highlights.slice(0, VISIBLE).map((h) => (
              <li
                key={h}
                className="flex gap-3 text-[15px] leading-relaxed text-fg"
              >
                <span className="mt-[0.6rem] h-1 w-3 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3 overflow-hidden pt-3"
              >
                {extra.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-[15px] leading-relaxed text-fg"
                  >
                    <span className="mt-[0.6rem] h-1 w-3 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          {extra.length > 0 && (
            <button
              onClick={() => setExpanded((e) => !e)}
              aria-expanded={expanded}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-text hover:underline underline-offset-4"
            >
              {expanded ? <FiMinus /> : <FiPlus />}
              {expanded ? "Show less" : `${extra.length} more highlights`}
            </button>
          )}

          <div className="mt-6 flex flex-wrap gap-1.5">
            {exp.tech.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
};

const Experience = () => (
  <section id="experience" className="py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeader
        index="03"
        label="Experience"
        title="Where I've shipped production software."
        intro="Full-stack ownership across a US healthcare SaaS and a real-time communications platform."
      />
      <div className="border-b border-line">
        {experiences.map((exp, i) => (
          <Role key={exp.id} exp={exp} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
