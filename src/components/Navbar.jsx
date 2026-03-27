import { useState, useEffect, useRef } from "react";
import logo from "../assets/astra-logo.png";
import wceLogo from "../assets/wce-logo.png";
import { Menu, X } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function MagneticButton({ children, onClick, active, id }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 200, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.4); // Magnetic pull ratio
    y.set(middleY * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: smoothX, y: smoothY }}
      className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 group cursor-none"
      animate={{
        color: active === id ? "#a5b4fc" : "rgba(209,213,219,0.8)",
        backgroundColor: active === id ? "rgba(99,102,241,0.1)" : "transparent",
      }}
      whileHover={{
        color: "#fff",
        backgroundColor: active === id ? "rgba(99,102,241,0.1)" : "rgba(255,255,255,0.05)"
      }}
    >
      {children}
      {active === id && (
        <motion.span
          layoutId="activeNavIndicator"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px rounded-full"
          style={{
            width: "60%",
            background: "linear-gradient(90deg, transparent, #818cf8, transparent)",
            boxShadow: "0 0 8px rgba(129,140,248,0.8)",
          }}
        />
      )}
    </motion.button>
  );
}

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
      setScrolled(window.scrollY > 80);
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

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-700"
      style={{
       background: scrolled
  ? "rgba(8, 12, 24, 0.85)"
  : "transparent",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(99, 102, 241, 0.15)"
          : "1px solid transparent",
        boxShadow: scrolled
          ? "0 4px 40px rgba(0, 0, 0, 0.4), 0 0 80px rgba(99,102,241,0.04)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGOS */}
        <div className="flex items-center gap-3">
          <div className="relative group">
            <img
              src={wceLogo}
              alt="WCE Logo"
              className="h-16 w-16 object-contain transition-all duration-300 group-hover:scale-105"
              style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.1))" }}
            />
          </div>

          {/* Divider */}
          <div
            className="h-7 w-px"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.4), transparent)" }}
          />

          <button
            onClick={() => scrollToSection("home")}
            aria-label="Go to home"
            className="relative group"
          >
            <img
              src={logo}
              alt="ASTRA"
              className="h-16 w-16 object-contain transition-all duration-300 group-hover:scale-105"
              style={{ filter: "drop-shadow(0 0 8px rgba(99,102,241,0.3))" }}
            />
          </button>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ id, label }) => (
            <MagneticButton
              key={id}
              id={id}
              active={active}
              onClick={() => scrollToSection(id)}
            >
              {label}
            </MagneticButton>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white transition-colors"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="px-4 pb-4 pt-2 flex flex-col gap-1"
          style={{
            background: "rgba(8,12,24,0.98)",
            borderTop: "1px solid rgba(99,102,241,0.1)",
          }}
        >
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-left py-3 px-4 rounded-xl text-base font-medium transition-all"
              style={{
                color: active === id ? "#a5b4fc" : "rgba(156,163,175,1)",
                background: active === id ? "rgba(99,102,241,0.1)" : "transparent",
                border: active === id ? "1px solid rgba(99,102,241,0.2)" : "1px solid transparent",
              }}
            >
              {label}
            </button>
          ))}

        </div>
      </div>
    </nav>
  );
}