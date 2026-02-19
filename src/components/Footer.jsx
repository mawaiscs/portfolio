import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
