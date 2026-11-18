import { FiCheck } from "react-icons/fi";
import { about, personalInfo } from "../data/portfolioData";
import { Reveal, SectionHeader } from "./ui";

const About = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeader
        index="01"
        label="About"
        title={
          <>
            Engineer who owns the whole feature —{" "}
            <span className="font-serif font-normal italic text-accent-text">
              end to end
            </span>
            .
          </>
        }
      />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <div className="space-y-6">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p
                className={`text-pretty leading-relaxed ${
                  i === 0 ? "text-xl text-fg" : "text-lg text-muted"
                }`}
              >
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="lg:pt-2">
          <div className="rounded-2xl border border-line bg-surface p-7">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle mb-5">
              What I focus on
            </h3>
            <ul className="space-y-3.5">
              {about.focus.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-[15px] text-fg"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-text">
                    <FiCheck size={12} strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-7 grid grid-cols-2 gap-4 border-t border-line pt-6 text-sm">
              <div>
                <p className="text-subtle">Based in</p>
                <p className="text-fg font-medium">{personalInfo.location}</p>
              </div>
              <div>
                <p className="text-subtle">Works</p>
                <p className="text-fg font-medium">
                  {personalInfo.workPreference}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
