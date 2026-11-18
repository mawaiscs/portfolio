import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiMail,
  FiPhoneCall,
} from "react-icons/fi";
import {
  personalInfo,
  heroContent,
  metrics,
  demoCall,
} from "../data/portfolioData";
import { VoiceWave } from "./ui";
import { btn } from "./buttons";

const EASE = [0.21, 0.47, 0.32, 0.98];
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

/** Illustrative live-call card: shows the problems Callvio's agents solve. */
const CallDemo = () => {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? demoCall.length : 0);
  const [seconds, setSeconds] = useState(37);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setShown((n) => (n >= demoCall.length + 2 ? 0 : n + 1));
    }, 1900);
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => {
      clearInterval(id);
      clearInterval(t);
    };
  }, [reduce]);

  const speaking =
    shown > 0 && shown <= demoCall.length ? demoCall[shown - 1].from : null;
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="relative">
      <div
        className="absolute -inset-6 rounded-[2rem] bg-accent/10 blur-3xl dark:bg-accent/[0.07]"
        aria-hidden="true"
      />
      <div className="relative rounded-3xl border border-line bg-surface/90 backdrop-blur shadow-2xl shadow-black/10 dark:shadow-black/40 overflow-hidden">
        {/* Call header */}
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="relative grid h-9 w-9 place-items-center rounded-full bg-accent text-accent-ink">
              <span
                className="pulse-ring absolute inset-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              <FiPhoneCall size={15} className="relative" />
            </span>
            <div>
              <p className="text-sm font-medium text-fg">
                Restaurant front desk
              </p>
              <p className="font-mono text-[11px] text-subtle">
                AI voice agent · Urdu / English
              </p>
            </div>
          </div>
          <span className="font-mono text-xs text-muted tabular-nums">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-red-500 align-middle" />
            {mm}:{ss}
          </span>
        </div>

        {/* Transcript */}
        <div
          className="flex h-[330px] flex-col justify-end gap-3 overflow-hidden px-5 py-5"
          aria-live="polite"
        >
          <AnimatePresence initial={false}>
            {demoCall.slice(0, Math.min(shown, demoCall.length)).map((m, i) => (
              <motion.div
                key={`${i}-${m.text}`}
                layout
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className={`flex flex-col ${m.from === "agent" ? "items-end" : "items-start"}`}
              >
                <span className="mb-1 font-mono text-[10px] uppercase tracking-wider text-subtle">
                  {m.from === "agent" ? "Callvio agent" : "Caller"}
                </span>
                <p
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug ${
                    m.from === "agent"
                      ? "rounded-br-md bg-fg text-bg"
                      : "rounded-bl-md bg-surface-2 text-fg border border-line"
                  }`}
                >
                  {m.text}
                </p>
                {m.tag && (
                  <span className="mt-1.5 rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[10px] text-accent-text">
                    ✓ {m.tag}
                  </span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Waveform footer */}
        <div className="flex items-center justify-between gap-4 border-t border-line px-5 py-3.5">
          <VoiceWave bars={30} active={!!speaking} className="h-6 flex-1" />
          <span className="shrink-0 font-mono text-[11px] text-subtle w-24 text-right">
            {speaking === "agent"
              ? "agent speaking"
              : speaking === "caller"
                ? "listening…"
                : "connected"}
          </span>
        </div>
      </div>
      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-wider text-subtle">
        Illustrative conversation
      </p>
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
          href="#experience"
          className="group mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 py-1 pl-1 pr-3.5 text-xs text-muted backdrop-blur hover:border-line-strong transition-colors"
        >
          <span className="flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 font-medium text-accent-text">
            <span className="relative flex h-1.5 w-1.5">
              <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-accent-text" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-text" />
            </span>
            Now
          </span>
          Building AI voice agents at Callvio
          <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.a>

        <motion.p
          {...fadeUp(0.05)}
          className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-subtle"
        >
          {heroContent.eyebrow}
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem] font-semibold tracking-[-0.035em] text-fg text-balance"
        >
          {heroContent.headlineStart}{" "}
          <span className="font-serif italic font-normal tracking-normal text-accent-text">
            {heroContent.headlineAccent}
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty"
        >
          Hi, I'm{" "}
          <span className="text-fg font-medium">{personalInfo.name}</span> —{" "}
          {heroContent.sub}
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className={btn.primary}>
            See my work <FiArrowDown />
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
              className="grid h-10 w-10 place-items-center rounded-full text-muted hover:text-fg hover:bg-surface-2 transition-colors"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send email"
              className="grid h-10 w-10 place-items-center rounded-full text-muted hover:text-fg hover:bg-surface-2 transition-colors"
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
        <CallDemo />
      </motion.div>
    </div>

    {/* Metrics strip */}
    <div className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
      <motion.dl
        {...fadeUp(0.45)}
        className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4"
      >
        {metrics.map((m) => (
          <div key={m.label} className="bg-bg px-6 py-6">
            <dt className="sr-only">{m.label}</dt>
            <dd>
              <span className="block text-3xl md:text-4xl font-semibold tracking-tight text-fg tabular-nums">
                {m.value()}
              </span>
              <span className="mt-1 block text-sm text-muted leading-snug">
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
