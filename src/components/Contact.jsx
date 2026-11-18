import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiCheck, FiCopy, FiMail } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";
import { Reveal } from "./ui";
import { btn } from "./buttons";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-12 md:py-24">
            <div
              className="bg-grid absolute inset-0 opacity-50"
              aria-hidden="true"
            />
            <div
              className="absolute left-1/2 top-0 h-64 w-[640px] -translate-x-1/2 rounded-full bg-accent/15 blur-[100px] dark:bg-accent/10"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
                07 — Contact
              </p>
              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-fg text-balance sm:text-5xl md:text-6xl">
                Have a product to build?{" "}
                <span className="font-serif font-normal italic text-accent-text">
                  Let&apos;s talk.
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">
                {personalInfo.availability}. I&apos;m happy to chat about
                full-stack, backend or front-end roles, contracts and
                interesting problems — remote, hybrid or in Lahore.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className={btn.primary}
                >
                  <FiMail /> Email me
                </a>
                <button
                  onClick={copy}
                  className={btn.secondary}
                  aria-live="polite"
                >
                  {copied ? (
                    <FiCheck className="text-accent-text" />
                  ) : (
                    <FiCopy />
                  )}
                  {copied ? "Copied!" : personalInfo.email}
                </button>
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btn.ghost}
                >
                  <FaLinkedinIn /> LinkedIn <FiArrowUpRight />
                </a>
                <RouterLink to="/resume" className={btn.ghost}>
                  Resume <FiArrowUpRight />
                </RouterLink>
                <a href={`tel:${personalInfo.phoneHref}`} className={btn.ghost}>
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
