import { education, coursework } from "../data/portfolioData";
import { Reveal } from "./ui";

const Education = () => (
  <section id="education" className="pb-24 md:pb-32">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="grid gap-10 border-t border-line pt-14 lg:grid-cols-[220px_1fr] lg:gap-12">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
            Education
          </p>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <h3 className="text-xl font-semibold tracking-tight text-fg">
              {education.degree}
            </h3>
            <p className="mt-2 text-muted">{education.institution}</p>
            <p className="mt-1 font-mono text-xs text-subtle">
              {education.location} · {education.period}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="text-sm font-medium text-fg">Continued learning</h3>
            <ul className="mt-3 space-y-4">
              {coursework.map((c) => (
                <li key={c.title}>
                  <p className="text-sm text-muted">{c.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-subtle">
                    {c.topics.join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
