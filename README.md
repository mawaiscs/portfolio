# Muhammad Awais — Portfolio

Personal portfolio website showcasing experience, skills, projects, and resume.

**Live:** [portfolio-mawais.vercel.app](https://portfolio-mawais.vercel.app)

## Tech Stack

- **React 19** + **Vite** — Fast SPA with HMR
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Scroll-triggered animations
- **React Router** — Client-side routing (`/` and `/resume`)
- **Vercel** — Deployment & hosting

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run resume:pdf  # Rebuild the downloadable resume PDF + Markdown from the /resume page
```

## Updating content

All content lives in `src/data/portfolioData.js` — the website, the `/resume` page, the
downloadable PDF and `Muhammad_Awais_Resume.md` are all generated from it. After editing,
run `npm run resume:pdf` so the PDF matches. "Years of experience" and role durations are
calculated automatically from the dates.

## SEO

`index.html` carries Open Graph / Twitter tags and `Person` JSON-LD; `public/robots.txt`,
`public/sitemap.xml` and `public/og-image.png` (rendered from `scripts/og-image.html`).

## Project Structure

```
src/
├── App.jsx              # Router & layout
├── main.jsx             # Entry point
├── index.css            # Global styles & Tailwind
├── components/
│   ├── Navbar.jsx       # Navigation bar
│   ├── Hero.jsx         # Hero section
│   ├── About.jsx        # About & stats
│   ├── Experience.jsx   # Work experience
│   ├── Skills.jsx       # Technical skills
│   ├── Projects.jsx     # Projects showcase
│   ├── Education.jsx    # Education
│   ├── Contact.jsx      # Contact form
│   ├── Footer.jsx       # Footer
│   └── Resume.jsx       # ATS-friendly resume page (source of the PDF)
└── data/
    └── portfolioData.js # Centralized content data
```

## Deployment

Push to `main` branch — Vercel auto-deploys.
