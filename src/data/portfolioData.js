import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaPython,
  FaServer,
  FaCloud,
  FaDatabase,
  FaShieldAlt,
  FaPlug,
  FaUsers,
  FaLayerGroup,
  FaTachometerAlt,
  FaBolt,
  FaCode,
  FaBrain,
  FaRobot,
  FaSearch,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiTailwindcss,
  SiMui,
  SiRedux,
  SiExpress,
  SiNginx,
  SiVercel,
  SiGooglecloud,
  SiSocketdotio,
  SiJest,
  SiPostman,
  SiKubernetes,
  SiJira,
  SiStripe,
  SiZoom,
  SiWhatsapp,
  SiGithubactions,
  SiNextdotjs,
  SiZod,
  SiLinux,
  SiOpentelemetry,
  SiQdrant,
  SiCloudflare,
} from "react-icons/si";
import { TbBrandOpenai, TbBrandTwilio } from "react-icons/tb";

/* ------------------------------------------------------------------ */
/*  Helpers — keep durations and "years of experience" always current  */
/* ------------------------------------------------------------------ */

// First full-time engineering role (DocNow) — drives "X+ years" everywhere.
export const CAREER_START = new Date(2022, 4, 1); // May 2022

export const yearsOfExperience = () => {
  const now = new Date();
  let years = now.getFullYear() - CAREER_START.getFullYear();
  if (now.getMonth() < CAREER_START.getMonth()) years -= 1;
  return years;
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const parseYm = (ym) => {
  const [y, m] = ym.split("-").map(Number);
  return new Date(y, m - 1, 1);
};

export const formatPeriod = (start, end) => {
  const s = parseYm(start);
  const e = end ? parseYm(end) : null;
  const fmt = (d) => `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  return `${fmt(s)} – ${e ? fmt(e) : "Present"}`;
};

export const formatDuration = (start, end) => {
  const s = parseYm(start);
  const e = end ? parseYm(end) : new Date();
  // LinkedIn-style: inclusive of the start month
  const months =
    (e.getFullYear() - s.getFullYear()) * 12 +
    (e.getMonth() - s.getMonth()) +
    1;
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && `${y} yr${y > 1 ? "s" : ""}`, m && `${m} mo${m > 1 ? "s" : ""}`]
    .filter(Boolean)
    .join(" ");
};

/* ------------------------------------------------------------------ */
/*  Identity                                                           */
/* ------------------------------------------------------------------ */

export const personalInfo = {
  name: "Muhammad Awais",
  title: "Senior Software Engineer",
  specialty: "Full-Stack · Node.js · React · Next.js · Angular · Cloud",
  tagline:
    "I design, build and ship reliable web products — from database to interface.",
  get description() {
    return `Senior full-stack software engineer with ${yearsOfExperience()}+ years building production SaaS with Node.js, React, Angular and TypeScript. I own features end to end — APIs, data models, front-end architecture, real-time features, third-party integrations and cloud deployment — across healthcare and AI products.`;
  },
  get resumeSummary() {
    return `Senior Full-Stack Software Engineer with ${yearsOfExperience()}+ years of experience designing, building and scaling production web applications with Node.js, TypeScript, React, Next.js and Angular. Owns features end to end: REST APIs and data models (MongoDB, Redis), front-end architecture and performance, real-time features (WebSockets), third-party integrations (payments, telephony, video), AI features (LLM APIs, RAG with embeddings and vector databases) and cloud deployment on AWS and Google Cloud. Strong grounding in Node.js internals (streams, clustering, worker threads), type-level TypeScript and computer networking. Delivered a 40% faster page load and 25% higher engagement on a US healthcare SaaS, and built core services for a multi-channel AI communications platform. Comfortable leading sprints, reviewing code and mentoring engineers.`;
  },
  availability: "Open to senior full-stack & backend roles",
  email: "muhammadawais.cse@gmail.com",
  phone: "+92 301 8768609",
  phoneHref: "+923018768609",
  location: "Lahore, Pakistan",
  workPreference: "Remote · Hybrid · On-site",
  timezone: "PKT (UTC+5)",
  linkedin: "https://www.linkedin.com/in/awais-cs/",
  website: "https://portfolio-mawais.vercel.app",
  resumePdf: "/Muhammad_Awais_Resume.pdf",
};

export const heroContent = {
  eyebrow: "Senior Full-Stack Software Engineer · Lahore, Pakistan",
  headlineStart: "I build web products that are",
  headlineAccent: "fast, reliable and easy to grow.",
  sub: "Node.js, React, Angular and TypeScript engineer with experience across healthcare SaaS and AI platforms — owning features from the database and APIs to the interface and the cloud.",
};

// Shown in the hero "profile" card.
export const profileCard = {
  role: "Senior Full-Stack Engineer",
  stack: [
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "Angular",
    "MongoDB",
    "AWS / GCP",
  ],
  focus: [
    "APIs & data modelling",
    "Front-end architecture",
    "Real-time systems",
    "AI features & RAG",
    "Integrations & cloud",
  ],
  domains: ["Healthcare SaaS", "AI / communications", "B2B dashboards"],
};

export const metrics = [
  {
    value: () => `${yearsOfExperience()}+`,
    label: "years shipping production software",
  },
  {
    value: () => "40%",
    label: "faster page loads delivered on a healthcare SaaS",
  },
  { value: () => "25+", label: "technologies used in production" },
  { value: () => "2", label: "production SaaS platforms, end to end" },
];

export const about = {
  paragraphs: [
    "I'm a senior full-stack engineer who likes owning a feature from the first schema to the last pixel. I've spent my career building production SaaS — a clinical EHR platform for US healthcare providers and a multi-channel communications platform — with Node.js, TypeScript, React and Angular.",
    "Most of my work sits where products get hard: data models that stay fast as they grow, APIs other teams can rely on, front ends that load quickly on any device, real-time features, and integrations with payments, telephony, video and AI services — including LLM-powered features and retrieval-augmented generation (RAG) over a product's own data. I care about clean architecture, sensible testing and shipping in small, safe steps.",
    "I also enjoy the team side of engineering — running sprint ceremonies, reviewing code and mentoring junior developers so the whole team ships better.",
  ],
  focus: [
    "Full-stack web apps (Node.js · React · Angular)",
    "API design, data modelling & performance",
    "Real-time features & third-party integrations",
    "AI features: LLM APIs, RAG & vector search",
    "Cloud deployment, CI/CD & code quality",
  ],
};

// "How I can help" — generic, outcome-focused capabilities.
export const services = [
  {
    icon: FaLayerGroup,
    title: "Full-stack product development",
    text: "Turn requirements into shipped features — data model, API, UI, tests and deployment — with clear trade-offs along the way.",
  },
  {
    icon: FaServer,
    title: "Backend & API engineering",
    text: "Scalable Node.js/Express services, REST APIs, auth and role-based access, background jobs and well-indexed MongoDB/Redis data layers, scaled with clustering and worker threads.",
  },
  {
    icon: FaTachometerAlt,
    title: "Front-end architecture & performance",
    text: "Maintainable React, Next.js and Angular apps with solid state management, accessible UI and measurable speed gains (SSR, lazy loading, caching).",
  },
  {
    icon: FaBolt,
    title: "Real-time features & integrations",
    text: "Chat, live updates and notifications with WebSockets/Socket.IO, plus payments, SMS/voice, video and messaging APIs (Stripe, Razorpay, Twilio, Zoom, WhatsApp) wired in safely.",
  },
  {
    icon: FaBrain,
    title: "AI features & RAG",
    text: "Practical AI inside your product: LLM APIs, prompt design, embeddings and RAG pipelines (chunking, vector search with Qdrant, retrieval) grounded in your own data.",
  },
  {
    icon: FaCloud,
    title: "Cloud, DevOps & delivery",
    text: "Docker, CI/CD pipelines and deployments on AWS (incl. Lambda and S3), Google Cloud Run and Vercel — plus the logs, metrics and traces that keep production calm.",
  },
  {
    icon: FaUsers,
    title: "Team leadership & mentoring",
    text: "Sprint planning, code reviews, technical documentation and mentoring juniors — keeping quality high while the team moves fast.",
  },
  {
    icon: FaShieldAlt,
    title: "Security & reliability",
    text: "JWT/refresh-token auth, RBAC, rate limiting, XSS/CSRF/CSP protection, input validation and HTTPS — built for sensitive data such as patient records.",
  },
];

// "How I work" principles.
export const approach = [
  {
    title: "Understand the problem first",
    text: "I start from the user and the business goal, then pick the simplest design that solves it — and write down the trade-offs.",
  },
  {
    title: "Ship small, safe increments",
    text: "Feature flags, focused pull requests, automated tests and CI/CD so changes reach production often and without drama.",
  },
  {
    title: "Measure, then optimise",
    text: "Performance and reliability work is driven by numbers — load times, query plans, error rates — not guesses.",
  },
  {
    title: "Leave things better",
    text: "Readable code, useful docs and reviews that teach. The next engineer (often me) should move faster, not slower.",
  },
];

export const navLinks = [
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" },
];

/* ------------------------------------------------------------------ */
/*  Experience                                                         */
/* ------------------------------------------------------------------ */

export const experiences = [
  {
    id: 1,
    company: "Callvio",
    role: "Senior Software Engineer",
    type: "Full-time",
    location: "Lahore, Pakistan · Hybrid",
    start: "2025-05",
    end: null,
    website: "https://callvio.co/",
    dashboard: "https://dashboard.callvio.co/",
    description:
      "SaaS communications platform (voice, WhatsApp and web chat with AI assistance) for small and mid-sized businesses. Full-stack role across backend services, real-time integrations, billing and the customer dashboard.",
    highlights: [
      "Designed and built Node.js services for real-time voice and chat conversations, integrating Twilio, Infobip and SIP telephony, speech-to-text/text-to-speech and OpenAI LLM APIs",
      "Built the customer dashboard in React with Redux Toolkit and RTK Query — onboarding, configuration, conversation history and analytics",
      "Implemented a multi-channel messaging layer (WhatsApp, Instagram, Messenger, web chat) sharing one conversation model and business knowledge base",
      "Engineered stateful business workflows — bookings, orders with staff approval and edits, CRM/calendar sync — with verification before confirming results to customers",
      "Designed usage-based billing: a services pricing catalogue, per-minute and per-message metering, volume tiers and an admin pricing estimator",
      "Reduced response latency with streaming, early responses, interruption handling and guards against stale replies",
      "Run services on Google Cloud Run with Redis for sessions and caching, Firebase, automated tests and CI/CD",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "React",
      "Redux Toolkit",
      "RTK Query",
      "Redis",
      "Firebase",
      "WebSockets",
      "Twilio",
      "Infobip",
      "WhatsApp API",
      "OpenAI",
      "Google Cloud Run",
      "CI/CD",
    ],
  },
  {
    id: 2,
    company: "DocNow EHR (Binary Tech)",
    role: "Senior Software Engineer",
    type: "Full-time",
    location: "Lahore, Pakistan · Hybrid",
    start: "2022-05",
    end: "2025-04",
    website: "https://docnow.ai/",
    dashboard: "https://live.doctornow.io/login",
    description:
      "Electronic health record (EHR) SaaS for US post-acute care providers (formerly DoctorNow). Full-stack role across the Angular front end, Node.js APIs and MongoDB data layer on AWS.",
    highlights: [
      "Reduced page load time by 40% and increased user engagement by 25% through lazy loading, AOT builds, bundle optimisation, CDN delivery and a UI revamp",
      "Led front-end architecture in Angular for desktop and mobile clinical workflows — charting, digital prescriptions, scheduling and patient history",
      "Built scalable Node.js/Express APIs with modular middleware, validation and consistent error handling",
      "Designed and optimised MongoDB schemas, indexes and aggregation pipelines for large volumes of patient data",
      "Built real-time doctor–patient chat with Socket.IO and integrated Twilio (SMS/voice), Zoom SDK video consultations and payment gateways",
      "Secured the platform with JWT + refresh tokens, HTTPS enforcement, rate limiting and input sanitisation",
      "Ran Agile ceremonies, code reviews and CI/CD; mentored junior developers",
    ],
    tech: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Twilio",
      "Zoom SDK",
      "AWS",
      "Docker",
      "Jest",
      "CI/CD",
    ],
  },
];

// Pre-computed, human-readable period for each role (always current).
experiences.forEach((exp) => {
  exp.period = formatPeriod(exp.start, exp.end);
  Object.defineProperty(exp, "duration", {
    get: () => formatDuration(exp.start, exp.end),
    enumerable: true,
  });
});

/* ------------------------------------------------------------------ */
/*  Skills                                                             */
/* ------------------------------------------------------------------ */

export const skillCategories = [
  {
    title: "Frontend",
    icon: FaReact,
    skills: [
      { name: "React", icon: FaReact },
      {
        name: "Next.js (App Router, SSR/ISR, Server Actions)",
        icon: SiNextdotjs,
      },
      { name: "Angular", icon: FaAngular },
      { name: "TypeScript (generics, type-level, Zod)", icon: SiTypescript },
      { name: "JavaScript (ES2023+, async, OOP)", icon: SiJavascript },
      { name: "Redux Toolkit / RTK Query", icon: SiRedux },
      { name: "Tailwind CSS / MUI", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    skills: [
      { name: "Node.js (event loop, streams, buffers)", icon: FaNodeJs },
      { name: "Express.js & REST API design", icon: SiExpress },
      { name: "Auth: JWT, OAuth, sessions, RBAC", icon: FaShieldAlt },
      { name: "Clustering, worker threads, child processes", icon: FaBolt },
      { name: "Runtime validation (Zod)", icon: SiZod },
      { name: "Python", icon: FaPython },
    ],
  },
  {
    title: "Data",
    icon: FaDatabase,
    skills: [
      { name: "MongoDB & Mongoose (MVC)", icon: SiMongodb },
      { name: "MongoDB indexing, aggregation & scaling", icon: SiMongodb },
      { name: "Redis (caching, sessions, rate limits)", icon: SiRedis },
      { name: "Firebase / Firestore", icon: SiFirebase },
    ],
  },
  {
    title: "Real-time & Integrations",
    icon: FaPlug,
    skills: [
      { name: "WebSockets / Socket.IO", icon: SiSocketdotio },
      { name: "Payments: Stripe & Razorpay", icon: SiStripe },
      { name: "Twilio (SMS, voice)", icon: TbBrandTwilio },
      { name: "Zoom Video SDK", icon: SiZoom },
      { name: "WhatsApp Business API", icon: SiWhatsapp },
    ],
  },
  {
    title: "AI Engineering",
    icon: FaBrain,
    skills: [
      { name: "OpenAI / LLM APIs & tool calling", icon: TbBrandOpenai },
      { name: "RAG pipelines (chunking, retrieval)", icon: FaSearch },
      { name: "Embeddings & vector databases (Qdrant)", icon: SiQdrant },
      { name: "Prompt & context engineering", icon: FaRobot },
      {
        name: "AI-assisted dev workflow (PRDs, design docs, agents)",
        icon: FaCode,
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    skills: [
      { name: "AWS: EC2, S3, CloudFront, Lambda", icon: FaAws },
      { name: "Google Cloud Run", icon: SiGooglecloud },
      { name: "Docker & Kubernetes", icon: FaDocker },
      { name: "CI/CD (GitHub Actions)", icon: SiGithubactions },
      { name: "Nginx, PM2, Vercel & Cloudflare R2", icon: SiCloudflare },
      { name: "Observability: logs, metrics, traces", icon: SiOpentelemetry },
    ],
  },
  {
    title: "Foundations & Practices",
    icon: FaCode,
    skills: [
      { name: "Networking: TCP/IP, DNS, HTTP", icon: FaCloud },
      { name: "Linux, terminal & OS basics", icon: SiLinux },
      { name: "Security: XSS, CSRF, CSP, crypto", icon: FaShieldAlt },
      { name: "Regular expressions", icon: FaCode },
      { name: "Testing (Jest) & code review", icon: SiJest },
      { name: "Git, Jira, Agile / Scrum", icon: FaGitAlt },
    ],
  },
];

// Flat, ATS-friendly skill lines for the resume.
export const resumeSkills = [
  { label: "Languages", value: "TypeScript, JavaScript, Python" },
  {
    label: "Frontend",
    value:
      "React, Next.js (App Router, SSR/ISR, Server Actions), Angular, Redux Toolkit, RTK Query, Tailwind CSS, MUI",
  },
  {
    label: "Backend",
    value:
      "Node.js (event loop, streams, clustering, worker threads), Express.js, REST APIs, JWT/OAuth/RBAC, Zod",
  },
  {
    label: "Data",
    value:
      "MongoDB (indexing, aggregation, scaling), Mongoose, Redis, Firebase / Firestore",
  },
  {
    label: "Real-time & Integrations",
    value:
      "WebSockets, Socket.IO, Stripe, Razorpay, Twilio, Zoom SDK, WhatsApp Business API",
  },
  {
    label: "AI Engineering",
    value:
      "OpenAI / LLM APIs, RAG pipelines (chunking, embeddings, retrieval), vector databases (Qdrant), prompt & context engineering, AI-assisted development",
  },
  {
    label: "Cloud & DevOps",
    value:
      "AWS (EC2, S3, CloudFront, Lambda), Google Cloud Run, Docker, Kubernetes, Nginx, PM2, Vercel, CI/CD, observability",
  },
  {
    label: "Foundations",
    value:
      "Computer networking (TCP/IP, DNS, HTTP), Linux, web security (XSS, CSRF, CSP), cryptography, RegEx",
  },
  {
    label: "Practices",
    value: "Jest, Git, Postman, Jira, Agile/Scrum, code review, mentoring",
  },
];

/* ------------------------------------------------------------------ */
/*  Projects (case studies)                                            */
/* ------------------------------------------------------------------ */

export const projects = [
  {
    id: 1,
    title: "Multi-channel communications platform",
    company: "Callvio",
    summary:
      "A SaaS platform where businesses handle phone calls, WhatsApp and web chat in one place — with AI assistance, automated workflows and usage-based billing.",
    links: {
      live: "https://callvio.co/",
      dashboard: "https://dashboard.callvio.co/",
    },
    problem:
      "Conversations arrive on several channels at once and must stay in sync, respond in real time, trigger business actions (bookings, orders) and be billed accurately per use.",
    role: "Senior Software Engineer — backend services, real-time integrations, billing and the React dashboard.",
    features: [
      "Real-time voice & chat services over telephony and messaging APIs",
      "One conversation model shared across 5 channels",
      "Stateful workflows with verification before confirming results",
      "Usage metering, pricing catalogue and volume tiers",
      "React dashboard for setup, history and analytics",
    ],
    tech: [
      "Node.js",
      "React",
      "Redux Toolkit",
      "Redis",
      "Firebase",
      "WebSockets",
      "Twilio",
      "OpenAI",
      "Cloud Run",
    ],
  },
  {
    id: 2,
    title: "Healthcare EHR platform",
    company: "DocNow",
    summary:
      "An electronic health record platform for US post-acute care providers: charting, e-prescribing, scheduling, patient history and analytics.",
    links: {
      live: "https://docnow.ai/",
      dashboard: "https://live.doctornow.io/login",
    },
    problem:
      "Clinicians spend hours a day on documentation. The app had to be fast on any device, secure with patient data and dependable at scale.",
    role: "Senior Software Engineer — Angular front-end architecture, Node.js APIs and MongoDB data modelling.",
    features: [
      "40% faster page loads and 25% higher engagement",
      "Charting, digital prescriptions, scheduling and patient history",
      "Real-time chat (Socket.IO) and Zoom SDK video consultations",
      "Optimised MongoDB schemas and aggregation pipelines",
      "JWT + refresh tokens, rate limiting and input sanitisation",
    ],
    tech: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Twilio",
      "Zoom SDK",
      "AWS",
      "Docker",
    ],
  },
];

// Areas of deep, hands-on study (presented as abilities, not course names).
export const coursework = [
  {
    title: "AI engineering & RAG",
    topics: [
      "How LLMs work (tokens, embeddings, transformers)",
      "RAG architecture",
      "Chunking strategies",
      "Embeddings & vector databases",
      "Qdrant vector search",
      "Query pipelines",
      "AI-native dev workflow",
      "AI media pipelines",
    ],
  },
  {
    title: "Node.js internals & scaling",
    topics: [
      "Event loop & libuv",
      "Streams & buffers",
      "EventEmitter patterns",
      "Child processes",
      "Clustering",
      "Worker threads",
      "Compression",
      "Cryptography",
    ],
  },
  {
    title: "Production backends",
    topics: [
      "MVC with Mongoose",
      "Auth & RBAC",
      "Redis",
      "Security hardening",
      "AWS S3 storage",
      "Stripe & Razorpay",
      "AWS Lambda (serverless)",
      "CI/CD & deployment",
      "Observability",
    ],
  },
  {
    title: "TypeScript at depth",
    topics: [
      "Generics",
      "Type-level programming",
      "Utility types",
      "Narrowing",
      "Declaration files",
      "Zod runtime validation",
      "Decorators & OOP",
      "Production TS setup",
    ],
  },
  {
    title: "Web platform & networking",
    topics: [
      "TCP/IP & OSI",
      "DNS",
      "HTTP under the hood",
      "IP addressing & ports",
      "AWS networking",
      "Next.js rendering & Server Actions",
      "Modern JavaScript",
      "Regular expressions",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "Punjab University College of Information Technology (PUCIT)",
  location: "Lahore, Pakistan",
  period: "2018 – 2022",
};
