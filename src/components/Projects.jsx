import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import { projects } from "../data/portfolioData";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group rounded-2xl overflow-hidden bg-slate-900/40 border border-slate-800/50 hover:border-indigo-500/30 transition-all duration-300"
            >
              {/* Project header with gradient */}
              <div
                className="relative p-8 sm:p-10"
                style={{
                  background: `linear-gradient(to bottom right, ${project.gradientFrom}26, ${project.gradientTo}26)`,
                }}
              >
                <div className="absolute inset-0 bg-slate-950/60" />
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{project.image}</span>
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      {Object.entries(project.links).map(([label, url]) => (
                        <a
                          key={label}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-colors capitalize"
                        >
                          <FaExternalLinkAlt size={10} /> {label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-200 leading-relaxed max-w-3xl">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Features & Tech */}
              <div className="p-8 sm:p-10">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((f, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <FaCheckCircle
                            className="text-indigo-500 mt-0.5 shrink-0"
                            size={14}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700/50 hover:border-indigo-500/30 hover:text-indigo-300 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
