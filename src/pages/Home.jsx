import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FlaskConical,
  Users,
  Wrench,
  MonitorPlay,
  BookOpen,
  Briefcase,
} from "lucide-react";

/* ═══════════════════════════════════════════════
   NEURAL CANVAS
═══════════════════════════════════════════════ */
function NeuralCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const COUNT = 55;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.4,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(148,130,255,0.75)";
        ctx.fill();
      });
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.18 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

/* ═══════════════════════════════════════════════
   TYPEWRITER
═══════════════════════════════════════════════ */
const LINES = [
  "build AI projects.",
  "run workshops.",
  "read research papers.",
  "mentor each other.",
  "explore neural networks.",
];

function Typewriter() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");
  useEffect(() => {
    const target = LINES[lineIdx];
    let timeout;
    if (!deleting && charIdx < target.length) {
      timeout = setTimeout(() => { setText(target.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, 60);
    } else if (!deleting && charIdx === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => { setText(target.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 35);
    } else if (deleting && charIdx === 0) {
      setDeleting(false); setLineIdx(l => (l + 1) % LINES.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, lineIdx]);
  return (
    <span className="text-indigo-300 font-semibold">
      We&nbsp;{text}<span className="animate-pulse text-indigo-400">|</span>
    </span>
  );
}

/* ═══════════════════════════════════════════════
   FADE-UP WRAPPER
═══════════════════════════════════════════════ */
function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   MARQUEE STRIP
═══════════════════════════════════════════════ */
const TAGS = [
  "Deep Learning","Computer Vision","NLP","Generative AI",
  "Data Science","Reinforcement Learning","Neural Networks",
  "MLOps","Research","PyTorch","Python","LLMs",
  "Transformers","Feature Engineering","RAG",
];

function Marquee() {
  const doubled = [...TAGS, ...TAGS];
  return (
    <div className="relative overflow-hidden py-4 border-y border-white/5">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#080c18] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#080c18] to-transparent pointer-events-none" />
      <motion.div className="flex gap-5 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}>
        {doubled.map((tag, i) => (
          <span key={i}
            className="text-xs font-semibold tracking-widest uppercase text-gray-500
              px-4 py-1.5 rounded-full border border-white/6 bg-white/2
              hover:border-indigo-500/30 hover:text-indigo-400
              transition-colors cursor-default flex-shrink-0">
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   ANNOUNCEMENT BANNER
═══════════════════════════════════════════════ */
function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-40 flex items-center justify-center gap-3 px-4 py-2.5"
      style={{
        background: "linear-gradient(90deg, rgba(99,102,241,0.10) 0%, rgba(139,92,246,0.14) 50%, rgba(99,102,241,0.10) 100%)",
        borderBottom: "0.5px solid rgba(99,102,241,0.2)",
      }}
    >
      <span className="relative flex h-2 w-2 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
      </span>

      <span className="text-indigo-200 font-medium text-xs sm:text-sm">
        Next up:{" "}
        <span className="text-white font-semibold">ML Club Service</span>
        <span className="hidden sm:inline text-indigo-400"> - Registrations opening soon</span>
      </span>

      <a
        href="#events"
        onClick={(e) => { e.preventDefault(); document.getElementById("events")?.scrollIntoView({ behavior: "smooth" }); }}
        className="flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full
          bg-indigo-500/15 text-indigo-300 border border-indigo-500/25
          hover:bg-indigo-500/25 hover:text-white transition-all"
      >
        Learn more →
      </a>

      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 text-gray-600 hover:text-white transition-colors text-xl leading-none"
        aria-label="Dismiss"
      >
        ×
      </button>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   SOCIAL PROOF
═══════════════════════════════════════════════ */
const AVATARS = [
  { initials: "AR", color: "#6366f1" },
  { initials: "SH", color: "#8b5cf6" },
  { initials: "PN", color: "#06b6d4" },
  { initials: "TS", color: "#10b981" },
  { initials: "NP", color: "#f59e0b" },
];

function SocialProof() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.85, duration: 0.5 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
    >
      <div className="flex items-center">
        {AVATARS.map((av, i) => (
          <div key={i}
            className="w-8 h-8 rounded-full border-2 border-[#080c18] flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
            style={{ background: av.color, marginLeft: i === 0 ? 0 : "-10px", zIndex: AVATARS.length - i }}>
            {av.initials}
          </div>
        ))}
        <div className="w-8 h-8 rounded-full border-2 border-[#080c18] flex items-center justify-center
          text-indigo-300 text-xs font-bold bg-indigo-900/60 flex-shrink-0"
          style={{ marginLeft: "-10px" }}>
          +115
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-xs text-gray-400">
          <span className="text-white font-semibold">100+ students</span> already part of ASTRA
        </span>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   FLOATING JOIN BUTTON
═══════════════════════════════════════════════ */
function FloatingJoinButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3
            text-white text-sm font-bold rounded-full"
          style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            animation: "floatPulse 2.5s ease-in-out infinite",
          }}
        >
          ✦ Join ASTRA
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════
   LEARNING PATH
═══════════════════════════════════════════════ */
const PATH_STEPS = [
  { num: "01", title: "Join",     desc: "Become a member of ASTRA at WCE",                       color: "#6366f1", glow: "rgba(99,102,241,0.25)"  },
  { num: "02", title: "Learn",    desc: "Attend workshops, club services & peer discussions",      color: "#8b5cf6", glow: "rgba(139,92,246,0.25)"  },
  { num: "03", title: "Build",    desc: "Work on real AI projects and solve real-world problems",  color: "#06b6d4", glow: "rgba(6,182,212,0.25)"   },
  { num: "04", title: "Research", desc: "Read papers, innovate, and explore new AI frontiers",    color: "#10b981", glow: "rgba(16,185,129,0.25)"  },
];

function LearningPath() {
  return (
    <div className="py-24 px-6">
      <FadeUp className="text-center mb-16 space-y-3">
        <p className="text-xs text-indigo-400 tracking-[0.3em] uppercase font-semibold">Your Journey</p>
        <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "Syne, sans-serif" }}>
          Your ASTRA Path
        </h2>
        <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
          From curious student to AI practitioner - here's how ASTRA takes you there.
        </p>
      </FadeUp>

      {/* Desktop */}
      <div className="hidden md:block max-w-5xl mx-auto">
        <div className="relative">
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4, #10b981)" }} />
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {PATH_STEPS.map((step, i) => (
              <FadeUp key={i} delay={i * 0.12}>
                <div className="flex flex-col items-center text-center group">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2 transition-all duration-500 group-hover:scale-110"
                    style={{
                      borderColor: step.color,
                      background: `radial-gradient(circle, ${step.glow} 0%, rgba(8,12,24,0.95) 70%)`,
                    }}
                  >
                    <span className="text-2xl font-black" style={{ color: step.color, fontFamily: "Syne, sans-serif" }}>
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden max-w-sm mx-auto">
        {PATH_STEPS.map((step, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div className="flex gap-4">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                  style={{ borderColor: step.color, background: `radial-gradient(circle, ${step.glow} 0%, rgba(8,12,24,0.95) 70%)` }}>
                  <span className="text-sm font-black" style={{ color: step.color }}>{step.num}</span>
                </div>
                {i < PATH_STEPS.length - 1 && (
                  <div className="w-px my-2"
                    style={{ background: `linear-gradient(to bottom, ${step.color}, ${PATH_STEPS[i + 1].color})`, minHeight: "40px" }} />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-white font-bold text-lg" style={{ fontFamily: "Syne, sans-serif" }}>{step.title}</h3>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════════════ */
const TESTIMONIALS = [
  { quote: "ASTRA completely changed how I approach AI. The peer discussions go way deeper than classroom lectures.",       name: "Rohan Deshmukh", role: "3rd Year, AIML", initials: "RD", color: "#6366f1" },
  { quote: "The ML Foundation club service helped me improve my communication skills.", name: "Tanuja Saravale", role: "2nd Year, AIML", initials: "TS", color: "#8b5cf6" },
  { quote: "Being part of ASTRA pushed me to read my first research paper. Now I read one every week.",                     name: "Aarav Mane",     role: "3rd Year, AIML", initials: "AM", color: "#06b6d4" },
];

function Testimonials() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % TESTIMONIALS.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <FadeUp className="max-w-3xl mx-auto text-center space-y-8">
      <div className="text-6xl font-black text-indigo-900 leading-none select-none">"</div>
      <div className="relative min-h-[100px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p key={active}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
            {TESTIMONIALS[active].quote}
          </motion.p>
        </AnimatePresence>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }} className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
            style={{ background: TESTIMONIALS[active].color }}>
            {TESTIMONIALS[active].initials}
          </div>
          <div className="text-left">
            <p className="text-white font-semibold text-sm">{TESTIMONIALS[active].name}</p>
            <p className="text-gray-500 text-xs">{TESTIMONIALS[active].role}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-2">
        {TESTIMONIALS.map((_, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-indigo-400" : "w-1.5 bg-white/20 hover:bg-white/40"
            }`} />
        ))}
      </div>
    </FadeUp>
  );
}

/* ═══════════════════════════════════════════════
   WHAT WE DO — lucide icons, no emojis
═══════════════════════════════════════════════ */
const CARDS = [
  {
    title: "Theoretical Foundations",
    desc:  "Strengthening mathematical reasoning and conceptual understanding behind AI & ML algorithms.",
    Icon:  FlaskConical,
  },
  {
    title: "Peer-to-Peer Learning",
    desc:  "Collaborative study groups, discussions, and mentorship driven by students for students.",
    Icon:  Users,
  },
  {
    title: "Hands-on Projects",
    desc:  "Applying AI & ML concepts to real-world problem statements through practical projects.",
    Icon:  Wrench,
  },
  {
    title: "Workshops & Sessions",
    desc:  "Technical workshops, expert talks, and guided learning sessions on emerging AI technologies.",
    Icon:  MonitorPlay,
  },
  {
    title: "Research Orientation",
    desc:  "Encouraging research mindset, paper reading, innovation, and exploration of advanced AI domains.",
    Icon:  BookOpen,
  },
  {
    title: "Industry Readiness",
    desc:  "Bridging the gap between academics and industry through skill development and exposure.",
    Icon:  Briefcase,
  },
];

/* ═══════════════════════════════════════════════
   MAIN
═══════════════════════════════════════════════ */
export default function Home() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative" style={{ background: "#080c18" }}>
      <style>{`@keyframes floatPulse{0%,100%{box-shadow:0 0 0 0 rgba(99,102,241,0.5)}50%{box-shadow:0 0 0 14px rgba(99,102,241,0)}}`}</style>

      <FloatingJoinButton />
      <AnnouncementBanner />

      {/* ── HERO ────────────────────────────── */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        <NeuralCanvas />

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #6366f1 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[90px] opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #a78bfa 0%, transparent 70%)" }} />

        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-6 pt-16">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            WCE Sangli · AIML Department
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[clamp(3.5rem,11vw,7.5rem)] font-black leading-none tracking-tight"
            style={{
              fontFamily: "Syne, sans-serif",
              background: "linear-gradient(135deg, #e0e7ff 20%, #818cf8 50%, #a78bfa 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            ASTRA
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.6 }}
            className="text-xs sm:text-sm tracking-[0.25em] uppercase text-gray-400 font-medium">
            Association of Students for Theoretical Reasoning in AI
          </motion.p>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base sm:text-lg text-gray-400 h-7">
            <Typewriter />
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button onClick={() => scrollTo("contact")}
              className="px-8 py-3.5 rounded-2xl font-semibold text-white text-sm
                transition-all duration-300 hover:scale-105 active:scale-95
                hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}>
              Join ASTRA ✦
            </button>
            <button onClick={() => scrollTo("events")}
              className="px-8 py-3.5 rounded-2xl font-semibold text-sm border border-white/15
                text-gray-300 hover:border-indigo-500/50 hover:text-white hover:bg-white/5 transition-all duration-300">
              Explore Events →
            </button>
          </motion.div>

          <SocialProof />
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-indigo-500/60 to-transparent" />
        </motion.div>
      </div>

      {/* ── MARQUEE ─────────────────────────── */}
      <Marquee />

      {/* ── WHAT WE DO ──────────────────────── */}
      <div className="py-24 px-6">
        <FadeUp className="text-center mb-16 space-y-3">
          <p className="text-xs text-indigo-400 tracking-[0.3em] uppercase font-semibold">Our Mission</p>
          <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "Syne, sans-serif" }}>
            What We Do at ASTRA
          </h2>
        </FadeUp>

        <div className="max-w-6xl mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map(({ title, desc, Icon }, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="group relative p-8 rounded-3xl border border-white/8 bg-white/[0.03]
                hover:bg-white/[0.06] hover:border-indigo-500/25
                transition-all duration-500 hover:-translate-y-1.5
                hover:shadow-[0_20px_60px_rgba(99,102,241,0.10)] overflow-hidden h-full">

                {/* Hover radial glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.07) 0%, transparent 70%)" }} />

                {/* Icon */}
                <div className="mb-5 w-11 h-11 rounded-2xl flex items-center justify-center
                  bg-indigo-500/10 border border-indigo-500/20
                  group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40
                  transition-all duration-300">
                  <Icon size={20} className="text-indigo-400 group-hover:text-indigo-300 transition-colors" strokeWidth={1.5} />
                </div>

                <h3 className="text-white font-bold text-lg mb-2 leading-snug">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>

                {/* Bottom shimmer line */}
                <div className="absolute bottom-0 left-0 right-0 h-px
                  bg-gradient-to-r from-transparent via-indigo-500/35 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* ── LEARNING PATH ───────────────────── */}
      <LearningPath />

      {/* ── TESTIMONIALS ────────────────────── */}
      <div className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ background: "radial-gradient(ellipse at 50% 100%, #8b5cf6 0%, transparent 65%)" }} />
        <FadeUp className="text-center mb-14 space-y-3">
          <p className="text-xs text-indigo-400 tracking-[0.3em] uppercase font-semibold">From Our Members</p>
          <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "Syne, sans-serif" }}>
            What They Say
          </h2>
        </FadeUp>
        <Testimonials />
      </div>

    

    </section>
  );
}
