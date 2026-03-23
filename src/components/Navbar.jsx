import { useState, useEffect } from "react";
import logo from "../assets/astra-logo.png";
import wceLogo from "../assets/wce-logo.png";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "home",    label: "Home" },
  { id: "about",   label: "About" },
  { id: "events",  label: "Events" },
  { id: "team",    label: "Team" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active,   setActive]   = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) setActive(id);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = scrolled
    ? "bg-[#0b0f19]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
    : "bg-transparent border-b border-transparent";

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGOS */}
        <div className="flex items-center gap-3">
          {/* WCE Logo */}
          <img
            src={wceLogo}
            alt="WCE Logo"
            className="h-15 w-15 object-contain"
          />

          {/* Divider */}
          <div className="h-8 w-px bg-gray-500/50" />

          {/* ASTRA Logo */}
          <button onClick={() => scrollToSection("home")} aria-label="Go to home">
            <img
              src={logo}
              alt="ASTRA"
              className="h-15 w-15 object-contain transition-all hover:opacity-80"
            />
          </button>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`relative text-sm font-medium transition-all duration-200 group ${
                active === id
                  ? "text-indigo-400"
                  : scrolled
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-200 hover:text-white"
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 h-px w-full rounded-full bg-indigo-400 transition-all duration-300 ${
                  active === id ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
              />
              <span className="absolute -bottom-1 left-0 h-px w-full rounded-full bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1 bg-[#0b0f19]/95 backdrop-blur-xl">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-left py-3 px-3 rounded-xl text-base font-medium transition-all ${
                active === id
                  ? "text-indigo-400 bg-indigo-500/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}