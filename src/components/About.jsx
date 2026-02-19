import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaRocket, FaLayerGroup } from "react-icons/fa";

const stats = [
  { label: "Years Experience", value: "3+", icon: FaCode },
  { label: "Projects Delivered", value: "10+", icon: FaRocket },
  { label: "Technologies", value: "25+", icon: FaLayerGroup },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-300 leading-relaxed mb-6">
              I'm a Senior Software Engineer passionate about building products
              that make a real impact. With deep expertise across the{" "}
              <span className="text-indigo-400 font-medium">MEAN</span> and{" "}
              <span className="text-indigo-400 font-medium">MERN</span> stacks,
              I've led the development of telemedicine platforms serving
              thousands of patients and AI-powered voice systems transforming
              how businesses handle customer calls.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              From architecting scalable microservices on{" "}
              <span className="text-indigo-400 font-medium">
                AWS & Google Cloud
              </span>{" "}
              to integrating cutting-edge AI technologies like{" "}
              <span className="text-indigo-400 font-medium">
                OpenAI, Deepgram, and Twilio
              </span>
              , I thrive at the intersection of software engineering and
              innovation. I believe in clean code, robust architecture, and
              delivering software that users love.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Beyond coding, I actively invest in continuous learning — having
              completed comprehensive coursework on advanced Node.js topics
              including Docker, Kubernetes, security, payment gateways, and
              CI/CD pipelines.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-indigo-500/30 transition-all group"
              >
                <div className="p-3 rounded-lg bg-indigo-600/10 text-indigo-400 group-hover:bg-indigo-600/20 transition-colors">
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
