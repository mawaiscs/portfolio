import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FiArrowDown, FiArrowUpRight, FiMail } from "react-icons/fi";
import {
  personalInfo,
  heroContent,
  metrics,
  profileCard,
} from "../data/portfolioData";
import { btn } from "./buttons";

const EASE = [0.21, 0.47, 0.32, 0.98];
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

/* Editor-style "profile" card, written line by line like code. */
const Str = ({ children }) => (
  <span className="text-accent-text">"{children}"</span>
);
const Key = ({ children }) => <span className="text-fg">{children}</span>;
const P = ({ children }) => <span className="text-subtle">{children}</span>;

const list = (items) => (
  <>
    <P>[</P>
    {items.map((s, i) => (
      <span key={s}>
        <Str>{s}</Str>
        {i < items.length - 1 && <P>, </P>}
      </span>
    ))}
    <P>]</P>
  </>
);

const lines = [
  <>
    <span className="text-[#c084fc] dark:text-[#d8b4fe]">const</span>{" "}
    <Key>engineer</Key> <P>=</P> <P>{"{"}</P>
  </>,
  <>
    <Key>name</Key>
    <P>: </P>
    <Str>{personalInfo.name}</Str>
    <P>,</P>
  </>,
  <>
    <Key>role</Key>
    <P>: </P>
    <Str>{profileCard.role}</Str>
    <P>,</P>
  </>,
  <>
    <Key>stack</Key>
    <P>: </P>
    {list(profileCard.stack)}
    <P>,</P>
  </>,
  <>
    <Key>focus</Key>
    <P>: </P>
    {list(profileCard.focus)}
    <P>,</P>
  </>,
  <>
    <Key>domains</Key>
    <P>: </P>
    {list(profileCard.domains)}
    <P>,</P>
  </>,
  <>
    <Key>openTo</Key>
    <P>: </P>
    <Str>{personalInfo.workPreference}</Str>
    <P>,</P>
  </>,
  <P>{"};"}</P>,
];

const ProfileCard = () => {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? lines.length : 0);

  useEffect(() => {
    if (reduce || shown >= lines.length) return;
    const id = setTimeout(
      () => setShown((n) => n + 1),
      shown === 0 ? 500 : 260,
    );
    return () => clearTimeout(id);
  }, [shown, reduce]);

  return (
    <div className="relative">
      <div
        className="absolute -inset-6 rounded-[2rem] bg-accent/10 blur-3xl dark:bg-accent/[0.07]"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/90 shadow-2xl shadow-black/10 backdrop-blur dark:shadow-black/40">
        <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-subtle">
            engineer.ts
          </span>
        </div>
        <pre
          className="min-h-[300px] overflow-x-auto px-4 py-5 font-mono text-[12.5px] leading-[1.9] text-muted sm:text-[13px]"
          aria-label={`${personalInfo.name}, ${profileCard.role}. Stack: ${profileCard.stack.join(", ")}.`}
        >
          {lines.map((l, i) => {
            const nested = i > 0 && i < lines.length - 1;
            return (
              <div
                key={i}
                className={`grid grid-cols-[1.75rem_1fr] transition-all duration-300 ${
                  i < shown
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-1.5 opacity-0"
                }`}
              >
                <span className="select-none pr-3 text-right text-subtle/60">
                  {i + 1}
                </span>
                {/* Hanging indent: wrapped text lines up under the content, never under the line number. */}
                <span
                  className="whitespace-pre-wrap break-words"
                  style={{
                    paddingLeft: nested ? "4ch" : "2ch",
                    textIndent: "-2ch",
                  }}
                >
                  {l}
                  {i === Math.min(shown, lines.length) - 1 && (
                    <span
                      className="ml-0.5 inline-block h-4 w-[7px] translate-y-[3px] animate-pulse bg-accent"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </div>
            );
          })}
        </pre>
        <div className="flex items-center justify-between border-t border-line px-5 py-3 font-mono text-[11px] text-subtle">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> ready to
            ship
          </span>
          <span>TypeScript · UTF-8</span>
        </div>
      </div>
    </div>
  );
};

const Hero = () => (
  <section
    id="top"
    className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
  >
    <div
      className="bg-grid absolute inset-0 -z-10 opacity-60"
      aria-hidden="true"
    />
    <div
      className="absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px] dark:bg-accent/[0.06]"
      aria-hidden="true"
    />

    <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
      <div>
        <motion.a
          {...fadeUp(0)}
          href="#contact"
          className="group mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 py-1 pl-1 pr-3.5 text-xs text-muted backdrop-blur transition-colors hover:border-line-strong"
        >
          <span className="flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 font-medium text-accent-text">
            <span className="relative flex h-1.5 w-1.5">
              <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-accent-text" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-text" />
            </span>
            Available
          </span>
          {personalInfo.availability}
          <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </motion.a>

        <motion.p
          {...fadeUp(0.05)}
          className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-subtle"
        >
          {heroContent.eyebrow}
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-fg text-balance sm:text-6xl lg:text-[4.1rem]"
        >
          {heroContent.headlineStart}{" "}
          <span className="font-serif font-normal italic tracking-normal text-accent-text">
            {heroContent.headlineAccent}
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty"
        >
          Hi, I&apos;m{" "}
          <span className="font-medium text-fg">{personalInfo.name}</span> —{" "}
          {heroContent.sub}
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href="#services" className={btn.primary}>
            What I can do <FiArrowDown />
          </a>
          <RouterLink to="/resume" className={btn.secondary}>
            Resume <FiArrowUpRight />
          </RouterLink>
          <div className="ml-1 flex items-center gap-1">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send email"
              className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg"
            >
              <FiMail size={17} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 1.5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
        className="mx-auto w-full max-w-md lg:max-w-none"
      >
        <ProfileCard />
      </motion.div>
    </div>

    <div className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
      <motion.dl
        {...fadeUp(0.45)}
        className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4"
      >
        {metrics.map((m) => (
          <div key={m.label} className="bg-bg px-6 py-6">
            <dt className="sr-only">{m.label}</dt>
            <dd>
              <span className="block text-3xl font-semibold tracking-tight text-fg tabular-nums md:text-4xl">
                {m.value()}
              </span>
              <span className="mt-1 block text-sm leading-snug text-muted">
                {m.label}
              </span>
            </dd>
          </div>
        ))}
      </motion.dl>
    </div>
  </section>
);

export default Hero;
