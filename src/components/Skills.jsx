import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "../data/portfolioData";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-slate-900/30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-indigo-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <cat.icon className={`text-xl ${cat.color}`} />
                <h3 className="text-lg font-semibold text-white">
                  {cat.title}
                </h3>
              </div>
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                  >
                    <skill.icon className="text-slate-500 group-hover:text-indigo-500/60 transition-colors shrink-0" />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
