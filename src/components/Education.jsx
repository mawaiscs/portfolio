import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";
import { education, coursework } from "../data/portfolioData";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-slate-900/30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Education & Learning
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-8">
          {/* Degree */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-indigo-500/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-indigo-600/10 text-indigo-400">
                <FaGraduationCap size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Formal Education
              </h3>
            </div>
            <div className="ml-1">
              <h4 className="text-white font-medium mb-1">
                {education.degree}
              </h4>
              <p className="text-indigo-400 text-sm mb-1">
                {education.institution}
              </p>
              <p className="text-slate-400 text-sm">
                {education.location} • {education.period}
              </p>
            </div>
          </motion.div>

          {/* Coursework */}
          {coursework.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-indigo-500/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-violet-600/10 text-violet-400">
                  <FaBookOpen size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {course.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {course.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700/50"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
