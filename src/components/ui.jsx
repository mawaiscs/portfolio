import { motion } from "framer-motion";
import { useCallback } from "react";

const EASE = [0.21, 0.47, 0.32, 0.98];

/** Fade/slide content in once it scrolls into view. */
export const Reveal = ({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
}) => {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

/** Numbered section header: "01 / About" + title + optional intro. */
export const SectionHeader = ({ index, label, title, intro }) => (
  <Reveal className="mb-12 md:mb-16 max-w-3xl">
    <p className="font-mono text-xs uppercase tracking-[0.18em] text-subtle mb-4 flex items-center gap-3">
      <span className="text-accent-text">{index}</span>
      <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
      {label}
    </p>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-fg text-balance leading-[1.08]">
      {title}
    </h2>
    {intro && (
      <p className="mt-5 text-lg text-muted leading-relaxed text-pretty">
        {intro}
      </p>
    )}
  </Reveal>
);

/** Card with a soft light that follows the cursor. */
export const SpotlightCard = ({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}) => {
  const onMove = useCallback((e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  }, []);
  return (
    <Tag
      onMouseMove={onMove}
      className={`spotlight rounded-2xl border border-line bg-surface transition-[border-color,transform,box-shadow] duration-300 hover:border-line-strong ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const Chip = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted ${className}`}
  >
    {children}
  </span>
);

/** Animated voice waveform. */
export const VoiceWave = ({ bars = 28, className = "", active = true }) => (
  <div
    className={`flex items-center gap-[3px] h-8 ${className}`}
    aria-hidden="true"
  >
    {Array.from({ length: bars }).map((_, i) => (
      <span
        key={i}
        className={`w-[3px] h-full rounded-full bg-accent ${active ? "wave-bar" : ""}`}
        style={{
          animationDelay: `${((i * 137) % 1000) / 1000}s`,
          animationDuration: `${0.8 + ((i * 53) % 60) / 100}s`,
          opacity: 0.45 + ((i * 29) % 55) / 100,
          transform: active ? undefined : "scaleY(0.25)",
        }}
      />
    ))}
  </div>
);
