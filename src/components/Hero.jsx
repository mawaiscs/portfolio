import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";
import { personalInfo } from "../data/portfolioData";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-800/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary-500/30 bg-primary-950/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-primary-300">
              Available for opportunities
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-dark-300 mb-3 font-light"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base text-dark-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {personalInfo.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="experience"
            spy
            smooth
            offset={-80}
            duration={500}
            className="group px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-primary-600/25 transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
          >
            View My Work
          </Link>
          <Link
            to="contact"
            spy
            smooth
            offset={-80}
            duration={500}
            className="px-8 py-3 border border-dark-700 rounded-xl text-dark-300 hover:text-white hover:border-primary-500/50 hover:bg-dark-800/50 transition-all duration-300 cursor-pointer"
          >
            Get in Touch
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-dark-800/50 text-dark-400 hover:text-primary-400 hover:bg-dark-700/50 transition-all"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-xl bg-dark-800/50 text-dark-400 hover:text-primary-400 hover:bg-dark-700/50 transition-all"
          >
            <FaEnvelope size={20} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          to="about"
          spy
          smooth
          offset={-80}
          duration={500}
          className="cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-dark-500 hover:text-primary-400 transition-colors"
          >
            <FaChevronDown size={20} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
