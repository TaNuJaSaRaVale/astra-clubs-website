import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import CustomCursor from "./components/CustomCursor";
import TerminalEasterEgg from "./components/TerminalEasterEgg";

/* ─── Branded Loading Screen ─────────────────────────────── */
function Loader() {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center z-[9999] overflow-hidden"
      style={{ background: "#080c18" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {/* Background glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Logo + bar */}
      <motion.div
        initial={{ scale: 0.82, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center gap-6"
      >
        {/* Title */}
        <h1
          className="text-6xl font-black tracking-tighter select-none"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          <span
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #a5b4fc 40%, #818cf8 70%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ASTRA
          </span>
        </h1>

        {/* Progress bar */}
        <div
          className="w-48 rounded-full overflow-hidden"
          style={{ height: "2px", background: "rgba(255,255,255,0.08)" }}
        >
          <div
            className="h-full loader-bar rounded-full"
            style={{
              background: "linear-gradient(90deg, #6366f1, #a78bfa, #60a5fa)",
            }}
          />
        </div>

        <p
          className="text-xs tracking-[0.35em] uppercase select-none"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          AI & ML Club · WCE
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ─── App ─────────────────────────────────────────────────── */
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <CustomCursor />
      <TerminalEasterEgg />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MainLayout>
              <Home />
              <About />
              <Events />
              <Team />
              <Contact />
            </MainLayout>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
