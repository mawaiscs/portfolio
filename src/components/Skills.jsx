import { skillCategories } from "../data/portfolioData";
import { Reveal, SectionHeader, SpotlightCard } from "./ui";

const Skills = () => (
  <section
    id="skills"
    className="py-24 md:py-32 bg-surface-2/40 border-y border-line"
  >
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeader
        index="05"
        label="Toolkit"
        title="Skills & stack"
        intro="The tools I use day to day, from the interface down to deployment."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <Reveal
            key={cat.title}
            delay={(i % 3) * 0.06}
            className={
              i === 0 || i === skillCategories.length - 1 ? "lg:col-span-2" : ""
            }
          >
            <SpotlightCard className="h-full p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface-2 text-accent-text">
                  <cat.icon size={16} />
                </span>
                <h3 className="font-semibold text-fg">{cat.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <li
                    key={s.name}
                    className="group inline-flex items-center gap-2 rounded-lg border border-line bg-bg px-3 py-1.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg"
                  >
                    <s.icon
                      className="shrink-0 text-subtle transition-colors group-hover:text-accent-text"
                      size={13}
                    />
                    {s.name}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
