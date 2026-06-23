import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/10 bg-bg/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 md:px-10">
        <NavLink
          to="/"
          className="truncate font-display text-sm font-semibold tracking-tight sm:text-base md:text-lg"
        >
          Tanushree Shahapurmath
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 font-display text-sm font-medium transition-colors duration-200 ${
                    isActive ? "bg-white/10 text-ink" : "text-slate-400 hover:text-ink"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink md:hidden"
        >
          {open ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </nav>

      {/* Mobile menu — pure CSS transition */}
      <div className={`mobile-menu border-t border-white/10 bg-bg/95 md:hidden ${open ? "open" : ""}`}>
        <ul className="flex flex-col gap-1 px-4 py-3">
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 font-display text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/10 text-ink"
                      : "text-slate-400 hover:bg-white/5 hover:text-ink"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
