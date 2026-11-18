// Shared button class strings.
const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 active:scale-[0.98]";

export const btn = {
  primary: `${base} bg-accent text-accent-ink hover:brightness-95 hover:shadow-[0_8px_30px_-8px_var(--accent)]`,
  secondary: `${base} border border-line-strong text-fg hover:bg-surface-2`,
  ghost: `${base} text-muted hover:text-fg`,
};
