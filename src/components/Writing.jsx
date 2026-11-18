import { FiArrowUpRight } from "react-icons/fi";
import { writing } from "../data/portfolioData";
import { Reveal, SectionHeader, SpotlightCard } from "./ui";

const Writing = () => (
  <section id="writing" className="py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeader
        index="05"
        label="From the build"
        title="Engineering notes from Callvio"
        intro="Posts on the Callvio blog about the problems my day-to-day work tackles."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {writing.map((w, i) => (
          <Reveal key={w.href} delay={i * 0.06}>
            <SpotlightCard
              as="a"
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col p-6 hover:-translate-y-1"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent-text">
                {w.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-fg text-balance">
                {w.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {w.blurb}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-fg">
                Read on callvio.co
                <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Writing;
