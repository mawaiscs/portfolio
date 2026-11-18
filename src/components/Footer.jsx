import { Link as RouterLink } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FiArrowUp, FiMail } from "react-icons/fi";
import { navLinks, personalInfo } from "../data/portfolioData";

const linkCls = "text-muted hover:text-fg transition-colors";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
      <div>
        <div className="flex items-center gap-2.5">
          <img
            src="/favicon.svg"
            alt=""
            width="32"
            height="32"
            className="h-8 w-8 rounded-lg"
          />
          <span className="font-medium text-fg">{personalInfo.name}</span>
        </div>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
          {personalInfo.title}. {personalInfo.specialty}.
        </p>
        <div className="mt-5 flex gap-2">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted hover:text-fg hover:border-line-strong transition-colors"
          >
            <FaLinkedinIn size={14} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted hover:text-fg hover:border-line-strong transition-colors"
          >
            <FiMail size={15} />
          </a>
        </div>
      </div>
      <nav aria-label="Footer">
        <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
          Sections
        </p>
        <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
          {navLinks.map((l) => (
            <li key={l.to}>
              <a href={`#${l.to}`} className={linkCls}>
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
          Elsewhere
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <RouterLink to="/resume" className={linkCls}>
              Resume
            </RouterLink>
          </li>
          <li>
            <a href={personalInfo.resumePdf} download className={linkCls}>
              Resume (PDF)
            </a>
          </li>
          <li>
            <a
              href="https://callvio.co/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Callvio
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-subtle sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {personalInfo.name} ·{" "}
          {personalInfo.location}
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 hover:text-fg transition-colors"
        >
          Back to top <FiArrowUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
