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
  FaRobot,
  FaPhoneAlt,
  FaProjectDiagram,
  FaBolt,
  FaComments,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiTailwindcss,
  SiBootstrap,
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
  SiBitbucket,
  SiWhatsapp,
  SiMessenger,
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

export const personalInfo = {
  name: "Muhammad Awais",
  title: "Senior Software Engineer",
  specialty: "AI Voice Agents · Conversational AI · Full-Stack",
  tagline:
    "I build production AI voice & chat agents and the cloud-native platforms behind them.",
  get description() {
    return `Senior Software Engineer with ${yearsOfExperience()}+ years shipping production SaaS. At Callvio I build Urdu & English AI voice and chat agents — real-time telephony, speech pipelines, LLM workflows and usage-based billing. Before that I built core features of DocNow, a US post-acute care EHR, on Angular, Node.js, MongoDB and AWS.`;
  },
  get resumeSummary() {
    return `Senior Software Engineer with ${yearsOfExperience()}+ years of experience building production SaaS across conversational AI and healthcare. Currently engineering Callvio's AI communications platform — Urdu & English voice agents over real phone lines, omnichannel chat agents (WhatsApp, Instagram, Messenger, web) and stateful business workflows — with Node.js, React, Redis and Google Cloud Run. Previously built core EHR features at DocNow, improving page load time by 40% and engagement by 25%. Strong in real-time systems, LLM integration, API design and mentoring engineers in Agile teams.`;
  },
  availability: "Open to senior & lead engineering roles",
  email: "muhammadawais.cse@gmail.com",
  phone: "+92 301 8768609",
  phoneHref: "+923018768609",
  location: "Lahore, Pakistan",
  workPreference: "Remote · Hybrid",
  linkedin: "https://www.linkedin.com/in/awais-cs/",
  website: "https://portfolio-mawais.vercel.app",
  resumePdf: "/Muhammad_Awais_Resume.pdf",
};

export const about = {
  paragraphs: [
    "I'm a Senior Software Engineer who likes the hard, unglamorous parts of AI products — the parts that make a demo dependable. At Callvio I work on an AI front desk for Pakistani businesses: voice agents that answer real phone calls in Urdu, English and everything in between, chat agents on WhatsApp and social channels, and the workflows that turn a conversation into a confirmed booking or order.",
    "That means thinking about latency budgets, interruptions (barge-in), noisy telephone audio, conversation state and whether an action really completed — not just whether the model sounded good. I work across the stack: Node.js services on Google Cloud Run, Redis, React dashboards, telephony and speech providers, and LLM orchestration.",
    "Before Callvio I spent three years at DocNow building an EHR for US post-acute care providers with Angular, Node.js and MongoDB on AWS, where I also ran sprint ceremonies and mentored junior developers.",
  ],
  focus: [
    "Real-time voice AI (STT → LLM → TTS, realtime audio models)",
    "Conversational workflows & LLM tool use",
    "Scalable Node.js backends & APIs",
    "Healthcare & multi-tenant SaaS",
  ],
};

export const heroContent = {
  eyebrow: "Senior Software Engineer · Lahore, Pakistan",
  headlineStart: "I build AI voice agents that hold up on",
  headlineAccent: "real phone calls.",
  sub: "Urdu & English voice and chat agents, real-time telephony and the cloud-native Node.js / React platforms behind them — currently at Callvio.",
};

export const metrics = [
  {
    value: () => `${yearsOfExperience()}+`,
    label: "years shipping production SaaS",
  },
  { value: () => "5", label: "channels served by one Callvio agent" },
  { value: () => "40%", label: "faster page loads delivered at DocNow" },
  { value: () => "2", label: "production platforms: AI & healthcare" },
];

// Illustrative call used by the hero demo (no real customer data).
export const demoCall = [
  {
    from: "caller",
    text: "Assalam-o-alaikum, kal 8 baje do logon ke liye table mil sakti hai?",
  },
  {
    from: "agent",
    text: "Wa alaikum assalam! Ji bilkul — kal 8 PM, 2 guests. Naam kya likh doon?",
  },
  {
    from: "caller",
    text: "Awais. Actually — make it three people.",
    tag: "Barge-in",
  },
  {
    from: "agent",
    text: "No problem: 3 guests, tomorrow at 8 PM. Your table is booked ✓",
    tag: "Booking verified",
  },
];

export const writing = [
  {
    title: "Building AI Voice Agents for Pakistan Is Harder Than It Looks",
    blurb:
      "Code-switched Urdu & English, SIP telephony, latency budgets and barge-in on real calls.",
    href: "https://callvio.co/blog/building-ai-voice-agents-pakistan-engineering",
    tag: "Engineering",
  },
  {
    title: "Product Journal: What We Shipped — November 2026",
    blurb:
      "Restaurant workflows, editable pending orders, early reply audio and stale-reply protection.",
    href: "https://callvio.co/blog/callvio-product-journal-november-2026",
    tag: "Product updates",
  },
  {
    title: "What Deploying AI for Pakistani Businesses Has Taught Us",
    blurb:
      "Designing around how businesses actually operate, not how software assumes they do.",
    href: "https://callvio.co/blog/deploying-ai-pakistani-businesses-lessons",
    tag: "Lessons",
  },
];

export const navLinks = [
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Writing", to: "writing" },
  { name: "Contact", to: "contact" },
];

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
    logo: "🤖",
    description:
      "Callvio is an AI communications platform for Pakistani businesses: Urdu & English AI voice agents, AI chat agents on WhatsApp and social channels, and connected workflows, billed per minute / per AI reply in PKR. Work spans the whole platform — telephony and real-time speech, LLM orchestration, workflows, billing and the customer dashboard.",
    highlights: [
      "Architected and shipped the AI voice agent that answers live business calls in Urdu, English and code-switched speech — handling FAQs, bookings, orders and human handover",
      "Built the real-time voice pipeline (SIP/telephony → streaming STT → LLM → TTS) across Twilio, Infobip and Jazz with Deepgram and Google speech, and benchmarked cascaded pipelines against realtime audio models on real phone calls",
      "Reduced perceived response latency with early reply audio, barge-in (interruption) handling and stale-reply protection so the agent never answers a question the caller has already corrected",
      "Extended the platform from voice to omnichannel chat — one agent serving WhatsApp, Instagram, Facebook Messenger and website chat with shared business knowledge and conversation state",
      "Engineered stateful industry workflows — restaurant ordering and reservations with staff acceptance, edits to pending orders, and appointment booking — that sync with calendars/CRMs and verify outcomes before confirming to the customer",
      "Designed the usage-based billing foundation: a services-based pricing catalogue, per-minute voice and per-AI-reply metering, volume tiers and an admin pricing estimator",
      "Built the React dashboard (Redux Toolkit, RTK Query) for agent setup, business knowledge, conversation history and analytics",
      "Run Node.js services on Google Cloud Run with Redis for session state and caching, Firebase, automated tests and CI/CD",
    ],
    tech: [
      "Node.js",
      "React",
      "Redux Toolkit",
      "RTK Query",
      "OpenAI",
      "Deepgram",
      "Google STT/TTS",
      "Twilio",
      "Infobip",
      "SIP",
      "WebSockets",
      "WhatsApp API",
      "Redis",
      "Firebase",
      "Google Cloud Run",
      "Vercel",
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
    logo: "🏥",
    description:
      "DocNow (formerly DoctorNow) is an EHR built for US post-acute care providers — specialty charting templates, PointClickCare & MatrixCare integration, e-prescribing, MIPS and analytics. Built core product features across the Angular front end, Node.js APIs and MongoDB data layer on AWS.",
    highlights: [
      "Reduced page load time by 40% and increased user engagement by 25% through lazy loading, AOT builds, bundle optimisation, CDN delivery and a UI revamp",
      "Led front-end architecture in Angular for desktop and mobile clinical workflows — charting, digital prescriptions, scheduling and patient history",
      "Built scalable Node.js/Express APIs with modular middleware pipelines and consistent error handling for clinical and administrative workflows",
      "Designed and optimised MongoDB schemas, indexes and aggregation pipelines for large volumes of patient data",
      "Built real-time doctor–patient chat with Socket.IO and integrated Twilio (SMS/voice), Zoom SDK video consultations and payment gateways",
      "Secured the platform with JWT + refresh tokens, HTTPS enforcement, rate limiting and input validation/sanitisation",
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

export const skillCategories = [
  {
    title: "AI & Voice",
    icon: FaRobot,
    color: "text-purple-400",
    skills: [
      { name: "LLM integration & tool calling (OpenAI)", icon: TbBrandOpenai },
      { name: "Real-time voice pipelines (STT → LLM → TTS)", icon: FaBolt },
      { name: "Deepgram & Google STT/TTS", icon: SiGooglecloud },
      { name: "Barge-in, turn-taking & latency tuning", icon: FaRobot },
      { name: "Prompt & conversation design", icon: FaComments },
    ],
  },
  {
    title: "Telephony & Messaging",
    icon: FaPhoneAlt,
    color: "text-pink-400",
    skills: [
      { name: "Twilio (Voice, SMS)", icon: TbBrandTwilio },
      { name: "Infobip & SIP trunking", icon: FaPhoneAlt },
      { name: "WhatsApp Business API", icon: SiWhatsapp },
      { name: "Instagram & Messenger APIs", icon: SiMessenger },
      { name: "WebSockets & Socket.IO", icon: SiSocketdotio },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    color: "text-green-400",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST API design", icon: FaServer },
      { name: "Event-driven & workflow systems", icon: FaProjectDiagram },
      { name: "Python", icon: FaPython },
    ],
  },
  {
    title: "Frontend",
    icon: FaReact,
    color: "text-cyan-400",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Redux Toolkit / RTK Query", icon: SiRedux },
      { name: "Angular", icon: FaAngular },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript (ES2023+)", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "MUI / Bootstrap", icon: SiMui },
    ],
  },
  {
    title: "Data",
    icon: FaDatabase,
    color: "text-yellow-400",
    skills: [
      { name: "MongoDB (indexing, aggregation)", icon: SiMongodb },
      { name: "Redis (caching, sessions)", icon: SiRedis },
      { name: "Firebase / Firestore", icon: SiFirebase },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    color: "text-orange-400",
    skills: [
      { name: "Google Cloud Run", icon: SiGooglecloud },
      { name: "AWS (EC2, S3, CloudFront)", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Nginx", icon: SiNginx },
      { name: "Vercel", icon: SiVercel },
      { name: "CI/CD pipelines", icon: FaCloud },
    ],
  },
  {
    title: "Practices & Tools",
    icon: FaShieldAlt,
    color: "text-red-400",
    skills: [
      { name: "Auth & API security (JWT, rate limiting)", icon: FaShieldAlt },
      { name: "Testing (Jest)", icon: SiJest },
      { name: "Git / Bitbucket", icon: FaGitAlt },
      { name: "Postman", icon: SiPostman },
      { name: "Jira · Agile / Scrum", icon: SiJira },
      { name: "Code review & mentoring", icon: SiBitbucket },
    ],
  },
];

// Flat, ATS-friendly skill lines for the resume.
export const resumeSkills = [
  { label: "Languages", value: "JavaScript, TypeScript, Python" },
  {
    label: "AI & Voice",
    value:
      "LLM integration & tool calling (OpenAI), real-time voice agents, STT/TTS (Deepgram, Google), barge-in & latency optimisation, prompt engineering",
  },
  {
    label: "Telephony & Messaging",
    value:
      "Twilio, Infobip, SIP, WhatsApp Business API, Instagram & Messenger APIs, WebSockets, Socket.IO",
  },
  {
    label: "Backend",
    value:
      "Node.js, Express.js, REST APIs, event-driven workflows, microservices",
  },
  {
    label: "Frontend",
    value:
      "React, Redux Toolkit, RTK Query, Angular, Tailwind CSS, MUI, Bootstrap",
  },
  { label: "Data", value: "MongoDB, Redis, Firebase / Firestore" },
  {
    label: "Cloud & DevOps",
    value:
      "Google Cloud Run, AWS (EC2, S3, CloudFront), Docker, Kubernetes, Nginx, Vercel, CI/CD",
  },
  {
    label: "Practices",
    value:
      "Jest, Git, Bitbucket, Postman, Jira, Agile/Scrum, code review, mentoring",
  },
];

export const projects = [
  {
    id: 1,
    title: "Callvio — AI Front Desk for Pakistani Businesses",
    summary:
      "Urdu & English AI voice and chat agents that answer calls and messages, check business information and complete the task — bookings, orders, follow-ups and human handover.",
    image: "🤖",
    gradientFrom: "#7c3aed",
    gradientTo: "#7e22ce",
    links: {
      live: "https://callvio.co/",
      dashboard: "https://dashboard.callvio.co/",
    },
    problem:
      "Pakistani businesses run on phone calls and WhatsApp, and customers switch between Urdu and English mid-sentence over noisy phone lines. Off-the-shelf voice bots sound good in a demo but break on real calls.",
    role: "Senior Software Engineer — voice pipeline, conversational workflows, billing and dashboard.",
    features: [
      "Urdu, English and code-switched voice conversations on real phone numbers (SIP / Twilio / Infobip / Jazz)",
      "Low-latency speech pipeline with early reply audio, barge-in and stale-reply protection",
      "One agent across voice, WhatsApp, Instagram, Messenger and web chat",
      "Restaurant ordering, reservations and appointment workflows with staff acceptance",
      "Usage metering & PKR pricing catalogue (per minute / per AI reply, volume tiers)",
      "Dashboard for agent setup, knowledge, conversations and analytics",
    ],
    tech: [
      "Node.js",
      "React",
      "Redux Toolkit",
      "OpenAI",
      "Deepgram",
      "Google STT/TTS",
      "Twilio",
      "Infobip",
      "WhatsApp API",
      "Redis",
      "Firebase",
      "Cloud Run",
    ],
  },
  {
    id: 2,
    title: "DocNow — EHR for Post-Acute Care",
    summary:
      "An EHR built for US post-acute care providers: specialty charting templates, facility EMR integration, e-prescribing, reporting and analytics.",
    image: "🏥",
    gradientFrom: "#2563eb",
    gradientTo: "#0891b2",
    links: {
      live: "https://docnow.ai/",
      dashboard: "https://live.doctornow.io/login",
    },
    problem:
      "Clinicians in post-acute care spend hours a day on documentation. The platform had to be fast on any device, secure with patient data, and work alongside facility systems.",
    role: "Senior Software Engineer — Angular front-end architecture, Node.js APIs and MongoDB data modelling.",
    features: [
      "40% faster page loads and 25% higher engagement after a performance and UI overhaul",
      "Charting, digital prescriptions, scheduling and patient history",
      "Real-time doctor–patient chat (Socket.IO) and Zoom SDK video consultations",
      "Optimised MongoDB schemas and aggregation pipelines for large patient datasets",
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

export const coursework = [
  {
    title: "Advanced Backend with Node.js",
    topics: [
      "Child Processes & Clustering",
      "MongoDB Scaling & Optimization",
      "Docker & Kubernetes",
      "WebSockets & Real-Time Communication",
      "Cryptography & Security",
      "Multithreading with Worker Threads",
      "Compression Algorithms",
    ],
  },
  {
    title: "Backend with Node.js (Comprehensive)",
    topics: [
      "Node.js Internals & Event Loop",
      "Streams, Buffers & Binary Data",
      "Computer Networking & TCP/UDP",
      "Express.js & RESTful APIs",
      "MongoDB & Mongoose (MVC)",
      "Authentication (JWT, OAuth, Google Login)",
      "RBAC & Redis Integration",
      "Security (XSS, CSRF, CSP, Rate Limiting)",
      "AWS S3 & CloudFront",
      "Payment Gateways (Stripe, Razorpay)",
      "CI/CD & Deployment (Nginx, PM2, GitHub Actions)",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "Punjab University College of Information Technology (PUCIT)",
  location: "Lahore, Pakistan",
  period: "2018 – 2022",
};
