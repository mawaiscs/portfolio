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
```

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
│   └── Resume.jsx       # Resume page + PDF download
└── data/
    └── portfolioData.js # Centralized content data
```

## Deployment

Push to `main` branch — Vercel auto-deploys.
