import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: personalInfo.linkedin,
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Let's connect
            </h3>
            <div className="space-y-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href || "#"}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href?.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-indigo-500/30 transition-all group ${
                    item.href ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div className="p-3 rounded-lg bg-indigo-600/10 text-indigo-400 group-hover:bg-indigo-600/20 transition-colors">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-slate-200 text-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-slate-400 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-indigo-600/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaPaperPlane size={14} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
