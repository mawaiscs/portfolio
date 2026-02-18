import { FaHeart } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-slate-500">
            Built with <FaHeart className="text-red-500" size={12} /> using
            React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
