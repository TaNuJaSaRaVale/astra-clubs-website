import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Neural Network Canvas ───────────────────────────────── */
function NeuralCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const N = 65;
    const CONN = 140;
    const pts = Array.from({ length: N }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r:  Math.random() * 1.6 + 0.4,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx   = pts[i].x - pts[j].x;
          const dy   = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONN) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.22 * (1 - dist / CONN)})`;
            ctx.lineWidth   = 0.6;
            ctx.stroke();
          }
        }
      }

      // Nodes
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(165,180,252,0.65)";
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.55 }}
    />
  );
}

/* ─── Typewriter ──────────────────────────────────────────── */
function Typewriter({ words, speed = 75, pause = 1600 }) {
  const [display,    setDisplay]    = useState("");
  const [wordIdx,    setWordIdx]    = useState(0);
  const [charIdx,    setCharIdx]    = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!isDeleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!isDeleting && charIdx === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 1.8);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      }, 0);
    }

    setDisplay(current.substring(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, wordIdx, words, speed, pause]);

  return (
    <>
      {display}
      <span className="caret" style={{ color: "#818cf8" }}>|</span>
    </>
  );
}

/* ─── Scroll-triggered fade-up wrapper ───────────────────── */
function FadeUp({ children, delay = 0, className = "" }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Feature cards data ──────────────────────────────────── */
const features = [
  { title: "Theoretical Foundations", desc: "Strengthening mathematical reasoning and conceptual understanding behind AI & ML algorithms.", dot: "#6366f1" },
  { title: "Peer-to-Peer Learning",   desc: "Collaborative study groups, discussions, and mentorship driven by students for students.",   dot: "#8b5cf6" },
  { title: "Hands-on Projects",       desc: "Applying AI & ML concepts to real-world problem statements through practical projects.",       dot: "#06b6d4" },
  { title: "Workshops & Sessions",    desc: "Technical workshops, expert talks, and guided learning sessions on emerging AI technologies.", dot: "#10b981" },
  { title: "Research Orientation",    desc: "Encouraging research mindset, paper reading, innovation, and exploration of advanced AI domains.", dot: "#f59e0b" },
  { title: "Industry Readiness",      desc: "Bridging the gap between academics and industry expectations through skill development.",       dot: "#ec4899" },
];

/* ─── Home ────────────────────────────────────────────────── */
export default function Home() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.35 } },
  };
  const item = {
    hidden:  { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="home">

      {/* ════════════ DARK HERO ════════════ */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
           style={{ background: "#080c18" }}>

        {/* Gradient orbs */}
        <div className="absolute pointer-events-none"
          style={{ top: "20%", left: "15%", width: 520, height: 520,
            background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
            filter: "blur(60px)" }} />
        <div className="absolute pointer-events-none"
          style={{ bottom: "20%", right: "10%", width: 400, height: 400,
            background: "radial-gradient(circle, rgba(167,139,250,0.14) 0%, transparent 70%)",
            filter: "blur(60px)" }} />
        <div className="absolute pointer-events-none"
          style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700,
            background: "radial-gradient(circle, rgba(30,58,138,0.12) 0%, transparent 70%)",
            filter: "blur(80px)" }} />

        {/* Neural canvas */}
        <NeuralCanvas />

        {/* Top edge line */}
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)" }} />

        {/* Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          {/* Pill badge */}
          <motion.div variants={item}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium tracking-widest uppercase mb-10"
            style={{ borderColor: "rgba(99,102,241,0.35)", background: "rgba(99,102,241,0.1)", color: "#a5b4fc" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#818cf8" }} />
            AIML Department · WCE Sangli
          </motion.div>

          {/* Giant title */}
          <motion.h1
            variants={item}
            className="font-black leading-none tracking-tighter mb-6 select-none"
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(5.5rem, 18vw, 14rem)",
              background: "linear-gradient(135deg, #ffffff 0%, #c7d2fe 30%, #818cf8 65%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ASTRA
          </motion.h1>

          {/* Full form */}
          <motion.p
            variants={item}
            className="font-medium tracking-[0.22em] uppercase mb-8"
            style={{ fontSize: "clamp(0.65rem, 1.5vw, 0.875rem)", color: "rgba(165,180,252,0.75)" }}
          >
            Association of Students for Theoretical Reasoning in AI
          </motion.p>

          {/* Typewriter */}
          <motion.p
            variants={item}
            className="font-light mb-12"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "rgba(203,213,225,0.9)", minHeight: "2.2rem" }}
          >
            We{" "}
            <span style={{ color: "#fff", fontWeight: 500 }}>
              <Typewriter words={[
                "build AI projects.",
                "run workshops.",
                "read research papers.",
                "learn together.",
                "shape the future.",
              ]} />
            </span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("contact")}
              className="px-9 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "#6366f1",
                boxShadow: "0 0 0 0 rgba(99,102,241,0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 30px rgba(99,102,241,0.5)"; e.currentTarget.style.background = "#5558e8"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 0 0 rgba(99,102,241,0.4)"; e.currentTarget.style.background = "#6366f1"; }}
            >
              Join ASTRA
            </button>
            <button
              onClick={() => scrollTo("events")}
              className="px-9 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{ border: "1px solid rgba(148,163,184,0.3)", color: "rgba(203,213,225,0.9)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.7)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(148,163,184,0.3)"; e.currentTarget.style.color = "rgba(203,213,225,0.9)"; }}
            >
              Explore Events
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>Scroll</p>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-10 rounded-full"
            style={{ background: "linear-gradient(to bottom, #6366f1, transparent)" }}
          />
        </motion.div>
      </div>

      {/* ════════════ WHAT WE DO ════════════ */}
      <div className="bg-[#f8faff] py-36 px-6">
        <div className="max-w-6xl mx-auto space-y-20">

          <FadeUp className="text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-100 bg-white shadow-sm text-indigo-600 text-xs font-bold uppercase tracking-widest">
              What We Do
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
              Everything at ASTRA
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">
              From deep theory to real-world applications — we cover the full spectrum of AI & ML learning.
            </p>
          </FadeUp>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div className="glass-card rounded-2xl p-7 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-400 group">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${item.dot}15`, border: `1px solid ${item.dot}30` }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.dot }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════ CTA BANNER ════════════ */}
      <FadeUp className="px-6 pb-32">
        <div className="relative rounded-3xl overflow-hidden" style={{ background: "#080c18" }}>
          {/* Gradient overlay */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.25) 0%, transparent 65%)" }} />
          {/* Top line */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent 10%, rgba(99,102,241,0.5) 50%, transparent 90%)" }} />

          <div className="relative z-10 py-24 px-6 text-center">
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Be a Part of ASTRA
            </h2>
            <p className="max-w-xl mx-auto text-lg mb-10" style={{ color: "rgba(148,163,184,0.9)" }}>
              Join a community that believes in deep thinking, collaborative learning, and building intelligent solutions for the future.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                onClick={() => scrollTo("contact")}
                className="px-9 py-4 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{ background: "#6366f1" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 28px rgba(99,102,241,0.5)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
              >
                Join Now
              </button>
              <button
                onClick={() => scrollTo("events")}
                className="px-9 py-4 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.6)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
              >
                Explore Events
              </button>
            </div>
          </div>
        </div>
      </FadeUp>

    </section>
  );
}
