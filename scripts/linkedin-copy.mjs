// Builds LinkedIn copy from the portfolio data so both always match.
import { writeFileSync } from "node:fs";
import { experiences, yearsOfExperience, personalInfo } from "../src/data/portfolioData.js";

const headline =
  "Senior Full-Stack Software Engineer | Node.js · TypeScript · React · Next.js · Angular | Scalable Web Apps, APIs, Real-time & AI (RAG) | AWS · Google Cloud";

const about = `I design, build and ship reliable web products — from the database and APIs to the interface and the cloud.

Senior Full-Stack Software Engineer with ${yearsOfExperience()}+ years building production SaaS with Node.js, TypeScript, React, Next.js and Angular, across healthcare and communications platforms.

How I can help:
→ Full-stack product development: data model, API, UI, tests and deployment
→ Backend & API engineering: Node.js/Express, REST, auth & RBAC, MongoDB/Redis, scaled with clustering and worker threads
→ Front-end architecture & performance: React, Next.js, Angular, SSR, state management, faster load times
→ Real-time features: chat, live updates and notifications with WebSockets/Socket.IO
→ Third-party integrations: Stripe, Razorpay, Twilio, Zoom, WhatsApp and other APIs
→ AI features: LLM APIs, prompt design, RAG pipelines, embeddings and vector search (Qdrant)
→ Cloud & delivery: Docker, CI/CD, AWS (EC2, S3, Lambda), Google Cloud Run, Vercel, observability
→ Team leadership: sprint planning, code reviews and mentoring

Highlights:
• Cut page load time by 40% and raised user engagement by 25% on a US healthcare EHR platform
• Built real-time services, a multi-channel messaging layer and usage-based billing for a SaaS communications platform

Strong foundations: Node.js internals (event loop, streams, worker threads), type-level TypeScript, computer networking (TCP/IP, DNS, HTTP) and web security.

Core stack: TypeScript · Node.js · Express · React · Next.js · Angular · Redux Toolkit · MongoDB · Redis · Socket.IO · OpenAI · Qdrant · AWS · Google Cloud · Docker

📬 Open to senior full-stack and backend roles (remote, hybrid or Lahore): ${personalInfo.email}
🌐 Portfolio & resume: ${personalInfo.website}`;

const role = (e) =>
  `${e.description.replace(/\.$/, "")} (${e.website.replace(/\/$/, "")}).\n\n${e.highlights
    .map((h) => `→ ${h}.`)
    .join("\n")}\n\nTech: ${e.tech.join(" · ")}`;

const out = { headline, about, callvio: role(experiences[0]), docnow: role(experiences[1]) };
writeFileSync(process.argv[2] ?? "linkedin-copy.json", JSON.stringify(out, null, 2));
for (const [k, v] of Object.entries(out)) console.log(k, v.length);
