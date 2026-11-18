import { FaGraduationCap } from "react-icons/fa";
import { education, coursework } from "../data/portfolioData";
import { Chip, Reveal, SectionHeader, SpotlightCard } from "./ui";

const Education = () => (
  <section id="education" className="py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeader
        index="06"
        label="Education & growth"
        title="Strong fundamentals, always deepening."
        intro="A computer science degree, plus hundreds of hours of hands-on study in the areas that make production systems fast, secure and scalable."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <Reveal>
          <SpotlightCard className="h-full p-6">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface-2 text-accent-text">
              <FaGraduationCap size={16} />
            </span>
            <h3 className="mt-5 text-lg font-semibold leading-snug text-fg">
              {education.degree}
            </h3>
            <p className="mt-2 text-sm text-muted">{education.institution}</p>
            <p className="mt-3 font-mono text-xs text-subtle">
              {education.location} · {education.period}
            </p>
          </SpotlightCard>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
          {coursework.map((c, i) => (
            <Reveal
              key={c.title}
              delay={(i % 2) * 0.06}
              className={
                i === coursework.length - 1 && coursework.length % 2
                  ? "sm:col-span-2"
                  : ""
              }
            >
              <SpotlightCard className="h-full p-6">
                <h3 className="font-semibold text-fg">{c.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {c.topics.map((t) => (
                    <li key={t}>
                      <Chip>{t}</Chip>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
