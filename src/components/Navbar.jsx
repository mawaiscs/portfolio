import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../data/portfolioData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-950/80 backdrop-blur-xl border-b border-dark-800/50 shadow-lg shadow-dark-950/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="hero"
            spy
            smooth
            offset={-80}
            duration={500}
            className="cursor-pointer"
          >
            <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              MA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy
                smooth
                offset={-80}
                duration={500}
                activeClass="!text-primary-400"
                className="px-3 py-2 text-sm text-dark-300 hover:text-primary-400 transition-colors cursor-pointer rounded-lg hover:bg-dark-800/50"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/Muhammad_Awais_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-1.5 text-sm font-medium rounded-lg bg-primary-600 hover:bg-primary-500 text-white transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-dark-300 hover:text-white transition-colors"
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-900/95 backdrop-blur-xl border-b border-dark-800"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy
                  smooth
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-dark-300 hover:text-primary-400 hover:bg-dark-800/50 rounded-lg transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
