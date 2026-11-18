import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Writing from "./components/Writing";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Resume = lazy(() => import("./components/Resume"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Writing />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <ScrollToTop />
        <Suspense
          fallback={
            <div className="grid min-h-screen place-items-center bg-bg">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent border-t-transparent" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Suspense>
      </Router>
    </MotionConfig>
  );
}

export default App;
