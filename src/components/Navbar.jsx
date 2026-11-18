import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { FiSun, FiMoon, FiArrowUpRight } from "react-icons/fi";
import { navLinks, personalInfo } from "../data/portfolioData";
import { useTheme } from "./useTheme";

const useActiveSection = (ids) => {
  const [active, setActive] = useState("");
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);
  return active;
};

const ids = navLinks.map((l) => l.to);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);
  const { dark, toggle } = useTheme();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="absolute left-0 top-0 h-[2px] w-full origin-left bg-accent"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <div
        className={`transition-all duration-300 ${
          scrolled || open
            ? "bg-bg/75 backdrop-blur-xl border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        >
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label="Back to top"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-fg text-bg font-mono text-xs font-medium transition-transform group-hover:-rotate-6">
              MA
            </span>
            <span className="hidden sm:block text-sm font-medium text-fg">
              {personalInfo.name}
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1 rounded-full border border-line bg-surface/60 px-1.5 py-1 backdrop-blur">
            {navLinks.map((l) => (
              <li key={l.to} className="relative">
                <a
                  href={`#${l.to}`}
                  className={`relative z-10 block rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                    active === l.to ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {l.name}
                </a>
                {active === l.to && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-surface-2 border border-line"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label={
                dark ? "Switch to light theme" : "Switch to dark theme"
              }
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted hover:text-fg hover:bg-surface-2 transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={dark ? "sun" : "moon"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {dark ? <FiSun size={15} /> : <FiMoon size={15} />}
                </motion.span>
              </AnimatePresence>
            </button>
            <RouterLink
              to="/resume"
              className="hidden sm:inline-flex items-center gap-1 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg hover:opacity-90 transition-opacity"
            >
              Resume <FiArrowUpRight size={14} />
            </RouterLink>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-line text-fg"
            >
              {open ? <HiX size={18} /> : <HiMenuAlt4 size={18} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-bg/95 backdrop-blur-xl px-5 py-8"
          >
            <ul className="space-y-1">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={`#${l.to}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-line py-4 text-2xl font-medium text-fg"
                  >
                    <span className="font-mono text-xs text-subtle">
                      0{i + 1}
                    </span>
                    {l.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <RouterLink
              to="/resume"
              onClick={() => setOpen(false)}
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-accent py-3 font-medium text-accent-ink"
            >
              View resume <FiArrowUpRight />
            </RouterLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
