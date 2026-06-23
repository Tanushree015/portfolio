import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const Home       = lazy(() => import("./pages/Home.jsx"));
const About      = lazy(() => import("./pages/About.jsx"));
const Skills     = lazy(() => import("./pages/Skills.jsx"));
const Experience = lazy(() => import("./pages/Experience.jsx"));
const Projects   = lazy(() => import("./pages/Projects.jsx"));
const Contact    = lazy(() => import("./pages/Contact.jsx"));

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-primary" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg font-body text-ink">
      <div className="pointer-events-none fixed inset-0 bg-hero-glow" />
      <ScrollToTop />
      <Navbar />
      <main className="relative z-10">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/about"      element={<About />} />
            <Route path="/skills"     element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects"   element={<Projects />} />
            <Route path="/contact"    element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
