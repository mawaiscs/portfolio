import {
  FiArrowUpRight,
  FiMessageCircle,
  FiCpu,
  FiServer,
  FiMonitor,
  FiCreditCard,
  FiZap,
  FiDatabase,
  FiCheckCircle,
} from "react-icons/fi";
import { projects } from "../data/portfolioData";
import { Chip, Reveal, SectionHeader, SpotlightCard } from "./ui";

/* ---------- Callvio: real-time pipeline diagram ---------- */
const Node = ({ icon: Icon, title, sub, accent }) => (
  <div
    className={`relative flex min-w-0 flex-1 flex-col items-center rounded-xl border px-2 py-3 text-center ${
      accent ? "border-accent/60 bg-accent-soft" : "border-line bg-surface"
    }`}
  >
    <Icon className={accent ? "text-accent-text" : "text-muted"} size={16} />
    <p className="mt-1.5 text-[12px] font-medium leading-tight text-fg">
      {title}
    </p>
    <p className="mt-0.5 font-mono text-[9.5px] leading-tight text-subtle">
      {sub}
    </p>
  </div>
);

const Connector = () => (
  <svg
    className="hidden h-3 w-5 shrink-0 self-center text-line-strong sm:block"
    viewBox="0 0 20 12"
    aria-hidden="true"
  >
    <line
      x1="0"
      y1="6"
      x2="20"
      y2="6"
      stroke="currentColor"
      strokeWidth="2"
      className="flow-line"
    />
  </svg>
);

const SystemDiagram = () => (
  <figure className="rounded-2xl border border-line bg-bg/60 p-4 sm:p-5">
    <figcaption className="mb-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-subtle">
      <span>System architecture</span>
      <span className="text-accent-text">real-time</span>
    </figcaption>
    <div className="flex items-stretch gap-1.5 sm:gap-1">
      <Node icon={FiMessageCircle} title="Channels" sub="voice · chat · web" />
      <Connector />
      <Node
        icon={FiServer}
        title="Node.js APIs"
        sub="WebSockets · REST"
        accent
      />
      <Connector />
      <Node icon={FiCpu} title="Workflows" sub="rules · AI · jobs" />
      <Connector />
      <Node icon={FiMonitor} title="Dashboard" sub="React · analytics" />
    </div>
    <div className="mt-3 grid grid-cols-2 gap-2">
      <div className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2.5">
        <FiDatabase className="shrink-0 text-muted" size={14} />
        <p className="text-[11.5px] leading-tight text-muted">
          <span className="font-medium text-fg">Redis + Firebase</span> for
          state, sessions and history
        </p>
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2.5">
        <FiCreditCard className="shrink-0 text-muted" size={14} />
        <p className="text-[11.5px] leading-tight text-muted">
          <span className="font-medium text-fg">Usage metering</span> and tiered
          billing
        </p>
      </div>
    </div>
    <div className="mt-3 flex flex-wrap gap-1.5">
      {["Low latency", "Multi-channel", "Third-party APIs", "Auto-scaling"].map(
        (t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1 rounded-full bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-muted"
          >
            <FiZap size={9} className="text-accent-text" />
            {t}
          </span>
        ),
      )}
    </div>
  </figure>
);

/* ---------- DocNow: impact panel ---------- */
const ImpactPanel = () => (
  <figure className="rounded-2xl border border-line bg-bg/60 p-4 sm:p-5">
    <figcaption className="mb-4 font-mono text-[11px] uppercase tracking-wider text-subtle">
      Measured impact
    </figcaption>
    <div className="grid grid-cols-2 gap-3">
      {[
        { v: "40%", l: "faster page loads", w: 40 },
        { v: "25%", l: "higher user engagement", w: 25 },
      ].map((m) => (
        <div key={m.l} className="rounded-xl border border-line bg-surface p-4">
          <p className="text-3xl font-semibold tracking-tight text-fg">{m.v}</p>
          <p className="mt-1 text-xs text-muted">{m.l}</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: `${m.w * 2}%` }}
            />
          </div>
        </div>
      ))}
    </div>
    <ul className="mt-3 grid gap-1.5">
      {[
        "Lazy loading + AOT builds",
        "CDN delivery & bundle splitting",
        "Indexed MongoDB aggregations",
      ].map((t) => (
        <li
          key={t}
          className="flex items-center gap-2 text-[12.5px] text-muted"
        >
          <FiCheckCircle className="text-accent-text" size={13} /> {t}
        </li>
      ))}
    </ul>
  </figure>
);

const visuals = { 1: SystemDiagram, 2: ImpactPanel };

const Projects = () => (
  <section id="projects" className="py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeader
        index="04"
        label="Selected work"
        title="Selected projects"
        intro="Two production platforms in very different domains — the problem, what I owned and what I built."
      />

      <div className="space-y-8">
        {projects.map((p, i) => {
          const Visual = visuals[p.id];
          return (
            <Reveal key={p.id} delay={i * 0.05}>
              <SpotlightCard as="article" className="overflow-hidden">
                <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs text-subtle">
                        0{i + 1}
                      </span>
                      <span className="h-px flex-1 bg-line" />
                      <div className="flex gap-2">
                        {Object.entries(p.links).map(([label, url]) => (
                          <a
                            key={label}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1 rounded-full border border-line px-3 py-1 text-xs capitalize text-muted hover:border-line-strong hover:text-fg transition-colors"
                          >
                            {label === "live" ? "Website" : "App"}
                            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        ))}
                      </div>
                    </div>

                    <p className="mt-6 font-mono text-xs uppercase tracking-wider text-accent-text">
                      {p.company}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-fg text-balance sm:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted text-pretty">
                      {p.summary}
                    </p>

                    <dl className="mt-7 space-y-5">
                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                          The problem
                        </dt>
                        <dd className="mt-1.5 text-[15px] leading-relaxed text-fg text-pretty">
                          {p.problem}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                          My role
                        </dt>
                        <dd className="mt-1.5 text-[15px] leading-relaxed text-fg">
                          {p.role}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-col gap-6">
                    {Visual && <Visual />}
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-subtle mb-3">
                        What I built
                      </p>
                      <ul className="space-y-2">
                        {p.features.map((f) => (
                          <li
                            key={f}
                            className="flex gap-2.5 text-sm leading-relaxed text-muted"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-text" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 border-t border-line bg-surface-2/40 px-6 py-4 sm:px-10">
                  {p.tech.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Projects;
