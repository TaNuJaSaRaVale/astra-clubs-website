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
import AstraChatbot from "./components/AstraChatbot";

/* ─── Matrix Decryption Preloader ─────────────────────────────── */
const TARGET_WORD = "ASTRA";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$*&%";

function Loader() {
  const [text, setText] = useState("");

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setText(TARGET_WORD.split("").map((letter, index) => {
        if(index < iterations) {
          return TARGET_WORD[index];
        }
        return CHARS[Math.floor(Math.random() * CHARS.length)]
      }).join(""))
      
      if(iterations >= TARGET_WORD.length){
        clearInterval(interval);
      }
      iterations += 1 / 4; // Slows down decryption phase
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center z-[9999] overflow-hidden"
      style={{ background: "#080c18" }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Subtle Background glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 60%)",
          filter: "blur(50px)",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative flex flex-col items-center gap-6"
      >
        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-black tracking-[0.15em] font-mono select-none transition-all duration-300"
          style={{ 
            color: text === TARGET_WORD ? "#ffffff" : "rgba(165, 180, 252, 0.7)",
            textShadow: text === TARGET_WORD ? "0 0 40px rgba(99,102,241,0.6)" : "none",
          }}
        >
          {text}
        </h1>

        {/* Status Line */}
        <div className="h-4 flex items-center justify-center overflow-hidden">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: text === TARGET_WORD ? 0 : 20, opacity: text === TARGET_WORD ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-indigo-400 font-semibold"
          >
            System Initialized
          </motion.p>
        </div>
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
      <AstraChatbot />

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
