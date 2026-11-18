import { approach, services } from "../data/portfolioData";
import { Reveal, SectionHeader, SpotlightCard } from "./ui";

const Services = () => (
  <section
    id="services"
    className="py-24 md:py-32 bg-surface-2/40 border-y border-line"
  >
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeader
        index="02"
        label="What I do"
        title={
          <>
            How I can help your{" "}
            <span className="font-serif italic font-normal text-accent-text">
              team
            </span>
            .
          </>
        }
        intro="Whether you're building a new product or scaling an existing one, these are the areas where I add the most value."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 4) * 0.05}>
            <SpotlightCard className="group h-full p-6 hover:-translate-y-1">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface-2 text-accent-text transition-colors group-hover:bg-accent group-hover:text-accent-ink">
                <s.icon size={16} />
              </span>
              <h3 className="mt-5 font-semibold leading-snug text-fg">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.text}
              </p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      {/* How I work */}
      <div className="mt-20 grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-12">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
            How I work
          </p>
        </Reveal>
        <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {approach.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06} as="li">
              <div className="flex gap-4">
                <span className="font-mono text-sm text-accent-text">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-fg">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {a.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Services;
