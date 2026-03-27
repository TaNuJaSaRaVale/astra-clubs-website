import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  GraduationCap, Users, Target, Lightbulb,
  Rocket, ShieldCheck, Globe, Award, BookOpen,
  FlaskConical, Brain, ChevronDown, Quote,
} from "lucide-react";
import hodPhoto from "../assets/hod-vivek-waghmare.jpg";

/* ─────────────────────────────────────────────────────────
   SPOTLIGHT TEXT REVEAL COMPONENT
───────────────────────────────────────────────────────── */
function SpotlightTextReveal({ children }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-full cursor-none"
    >
      {/* Base Layer (Incredibly Dim) */}
      <div className="text-white/10 font-bold tracking-wide">
        {children}
      </div>

      {/* Spotlight Mask Layer (Bright White & Glowing) */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 pointer-events-none text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] font-bold tracking-wide"
        style={{
          WebkitMaskImage: `radial-gradient(120px circle at ${position.x}px ${position.y}px, black 20%, transparent 100%)`,
          maskImage: `radial-gradient(120px circle at ${position.x}px ${position.y}px, black 20%, transparent 100%)`,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   NEURAL CANVAS  (reused from Home)
───────────────────────────────────────────────────────── */
function NeuralCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const COUNT = 45;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.4,
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
        ctx.fillStyle = "rgba(148,130,255,0.65)";
        ctx.fill();
      });
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.18 * (1 - dist / 120)})`;
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

/* ─────────────────────────────────────────────────────────
   ANIMATED WRAPPERS
───────────────────────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

function ScaleIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

function SlideIn({ children, delay = 0, direction = "left", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   WORD-BY-WORD HERO HEADING
───────────────────────────────────────────────────────── */
function AnimatedHeading({ text, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const words = text.split(" ");
  return (
    <h1 ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span key={i}
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "inline-block", marginRight: "0.3em" }}>
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

/* ─────────────────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────────────────── */
function CountUp({ to, suffix = "", duration = 2000 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─────────────────────────────────────────────────────────
   STATS DATA
───────────────────────────────────────────────────────── */
const STATS = [
  { value: 100, suffix: "+", label: "Active Members", icon: <Users className="w-5 h-5" /> },
  { value: 2025, suffix: "",  label: "ASTRA Founded",   icon: <GraduationCap className="w-5 h-5" /> },
  { value: 15,   suffix: "+", label: "Years of Faculty Excellence", icon: <Award className="w-5 h-5" /> },
  { value: 6,    suffix: "",  label: "Core Objectives", icon: <Target className="w-5 h-5" /> },
];

/* ─────────────────────────────────────────────────────────
   TIMELINE DATA
───────────────────────────────────────────────────────── */
const TIMELINE = [
  {
    year: "1947",
    title: "WCE Founded",
    desc: "Walchand College of Engineering, Sangli established as one of Maharashtra's first engineering institutions.",
    color: "#6366f1",
    glow: "rgba(99,102,241,0.3)",
  },
  {
    year: "2024",
    title: "AIML Department",
    desc: "The Artificial Intelligence & Machine Learning department introduced, shaping the next generation of AI practitioners.",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.3)",
  },
  {
    year: "2025",
    title: "ASTRA Established",
    desc: "Association of Students for Theoretical Reasoning in AI born — a platform for peer learning, research & collaboration.",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.3)",
  },
  {
    year: "Today",
    title: "Growing & Thriving",
    desc: "100+ members, workshops, club services, research discussions — ASTRA continues to push boundaries.",
    color: "#10b981",
    glow: "rgba(16,185,129,0.3)",
  },
];

/* ─────────────────────────────────────────────────────────
   PILLAR TABS DATA
───────────────────────────────────────────────────────── */
const PILLARS = [
  {
    label: "Learn",
    icon: <BookOpen className="w-4 h-4" />,
    color: "#6366f1",
    title: "Deep Theoretical Learning",
    desc: "ASTRA members dive into the mathematical and conceptual foundations of AI & ML - from linear algebra and probability to neural network theory and algorithm design. Peer-led study sessions make complex ideas accessible.",
    bullets: ["Weekly conceptual deep-dives", "Mathematics for ML workshops", "Paper reading circles", "Foundation club services"],
  },
  {
    label: "Build",
    icon: <Rocket className="w-4 h-4" />,
    color: "#8b5cf6",
    title: "Real Project Experience",
    desc: "Theory meets practice through hands-on AI projects. Members collaborate on real-world problem statements, developing portfolio-worthy solutions that translate classroom knowledge into engineering impact.",
    bullets: ["End-to-end project development", "Cross-year collaboration", "Industry problem statements", "Hackathon participation"],
  },
  {
    label: "Research",
    icon: <FlaskConical className="w-4 h-4" />,
    color: "#06b6d4",
    title: "Research Mindset & Innovation",
    desc: "ASTRA cultivates a culture of curiosity and scientific thinking. Members are encouraged to read and dissect research papers, explore emerging domains, and contribute original ideas that push the frontier of AI understanding.",
    bullets: ["Paper discussion sessions", "Research methodology workshops", "Faculty-guided exploration", "Conference awareness"],
  },
  {
    label: "Ethics",
    icon: <ShieldCheck className="w-4 h-4" />,
    color: "#10b981",
    title: "Responsible & Ethical AI",
    desc: "Building powerful AI is not enough - ASTRA ensures members think critically about the societal impact of their work. Sessions on AI bias, fairness, transparency, and sustainable development prepare students to build ethically-grounded systems.",
    bullets: ["Bias & fairness discussions", "AI policy awareness", "Sustainable AI principles", "Ethical case studies"],
  },
];

/* ─────────────────────────────────────────────────────────
   OBJECTIVES DATA
───────────────────────────────────────────────────────── */
const OBJECTIVES = [
  { text: "Build strong theoretical foundations in AI & ML",  icon: <ShieldCheck className="w-5 h-5" />, color: "#6366f1" },
  { text: "Promote peer-to-peer and collaborative learning",   icon: <Users       className="w-5 h-5" />, color: "#8b5cf6" },
  { text: "Encourage research mindset and paper discussions",  icon: <Lightbulb   className="w-5 h-5" />, color: "#06b6d4" },
  { text: "Develop industry-ready skills through projects",    icon: <Rocket      className="w-5 h-5" />, color: "#10b981" },
  { text: "Enable ethical, responsible AI thinking",          icon: <Target      className="w-5 h-5" />, color: "#f59e0b" },
  { text: "Foster leadership and community engagement",        icon: <Globe       className="w-5 h-5" />, color: "#ec4899" },
];

/* ─────────────────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────────────────── */
const FAQS = [
  { q: "Who can join ASTRA?", a: "Any student enrolled in the AIML department at WCE, Sangli can join ASTRA. We welcome members from all years — from first-year freshers to final-year students." },
  { q: "What kind of events does ASTRA run?", a: "ASTRA hosts workshops, peer-led club services (such as the ML Foundation service), paper reading sessions, project showcases, and guest talks from industry practitioners and researchers." },
  { q: "Can I join if I'm a beginner in AI/ML?", a: "Absolutely. ASTRA is designed for learners at all levels. The Foundation club service is specifically tailored for those who are new to AI and ML concepts." },
  { q: "How does ASTRA differ from a regular study group?", a: "ASTRA has a structured curriculum of activities, formal club services with dedicated student mentors, institutional backing from the AIML department, and a community of 100+ engaged members." },
];

/* ─────────────────────────────────────────────────────────
   FAQ ACCORDION ITEM
───────────────────────────────────────────────────────── */
function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b border-white/8 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group">
        <span className="text-white/90 font-semibold text-sm sm:text-base group-hover:text-white transition-colors">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-indigo-500/40 group-hover:text-indigo-400 transition-all">
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}>
            <p className="pb-5 text-gray-400 text-sm leading-relaxed pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   SECTION LABEL PILL
───────────────────────────────────────────────────────── */
function SectionPill({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-widest uppercase">
      {icon}
      {label}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────── */
export default function About() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="about" className="relative" style={{ background: "#080c18" }}>
      <style>{`
        @keyframes floatPulse { 0%,100%{box-shadow:0 0 0 0 rgba(99,102,241,0.5)} 50%{box-shadow:0 0 0 14px rgba(99,102,241,0)} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        .shimmer-text {
          background: linear-gradient(90deg, #e0e7ff 0%, #a78bfa 30%, #818cf8 50%, #a78bfa 70%, #e0e7ff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
        .timeline-line { background: linear-gradient(to bottom, #6366f1, #8b5cf6, #06b6d4, #10b981); }
        .glass-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(20px);
        }
      `}</style>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <div className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-16">
        <NeuralCanvas />
        {/* Ambient glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[120px] opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #6366f1 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full blur-[100px] opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #a78bfa 0%, transparent 70%)" }} />

        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            WCE Sangli · AIML Department
          </motion.div>

          <AnimatedHeading
            text="About ASTRA"
            className="text-[clamp(3rem,10vw,7rem)] font-black leading-none tracking-tight shimmer-text"
            style={{ fontFamily: "Syne, sans-serif" }}
          />

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}
            className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            The story of an idea, a department, and a community of curious minds - powering India's next wave of AI thinkers.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
            className="flex flex-col items-center gap-2 pt-6">
            <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll to explore</span>
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.4, repeat: Infinity }}
              className="w-px h-8 bg-gradient-to-b from-indigo-500/60 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* ── STATS STRIP ───────────────────────────────────────────── */}
      <div className="border-y border-white/5 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <FadeUp key={i} delay={i * 0.1} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  {s.icon}
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white" style={{ fontFamily: "Syne, sans-serif" }}>
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-gray-500 text-xs tracking-widest uppercase mt-1 font-medium">{s.label}</div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* ── WCE SECTION ───────────────────────────────────────────── */}
      <div className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[130px] opacity-8 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #6366f1 0%, transparent 70%)" }} />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
            <div className="space-y-6">
              <SectionPill icon={<GraduationCap className="w-3 h-3" />} label="Our Institution" />
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "Syne, sans-serif" }}>
                Walchand College of<br />
                <span style={{ background: "linear-gradient(135deg, #818cf8, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Engineering, Sangli
                </span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                Established in <strong className="text-white">1947</strong>, Walchand College of Engineering (WCE), Sangli,
                is a premier autonomous institution known for academic rigor, strong research culture,
                and a vibrant campus ecosystem that has produced leaders across technology and engineering.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                With advanced research laboratories, a robust placement ecosystem, and faculty of distinction,
                WCE provides an ideal environment for innovation-driven learning.
              </p>

              {/* Accreditation Badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { label: "NBA Accredited", color: "#6366f1" },
                  { label: "NAAC A Grade",   color: "#8b5cf6" },
                  { label: "Autonomous",      color: "#06b6d4" },
                  { label: "Est. 1947",       color: "#10b981" },
                ].map((badge, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{
                      border: `1px solid ${badge.color}40`,
                      background: `${badge.color}15`,
                      color: badge.color,
                    }}>
                    <Award className="w-3 h-3" />
                    {badge.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </SlideIn>

          {/* Timeline */}
          <SlideIn direction="right" delay={0.15}>
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-3 top-3 bottom-3 w-0.5 timeline-line rounded-full" />

              {TIMELINE.map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex gap-5 ${i < TIMELINE.length - 1 ? "mb-10" : ""}`}>
                  {/* Dot */}
                  <div className="absolute -left-[1.15rem] flex-shrink-0 w-5 h-5 rounded-full border-2 z-10"
                    style={{ borderColor: item.color, background: "#080c18", boxShadow: `0 0 12px ${item.glow}` }} />
                  <div className="pl-2">
                    <div className="text-xs font-black tracking-widest mb-1" style={{ color: item.color }}>{item.year}</div>
                    <h3 className="text-white font-bold text-base mb-1" style={{ fontFamily: "Syne, sans-serif" }}>{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SlideIn>
        </div>
      </div>

      {/* ── ASTRA SECTION + PILLAR TABS ────────────────────────────── */}
      <div className="py-24 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[130px] opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #8b5cf6 0%, transparent 70%)" }} />

        <div className="max-w-6xl mx-auto space-y-16">
          <FadeUp className="text-center space-y-4">
            <SectionPill icon={<Brain className="w-3 h-3" />} label="About ASTRA" />
            <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "Syne, sans-serif" }}>
              Association of Students for<br />
              <span style={{ background: "linear-gradient(135deg, #818cf8, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Theoretical Reasoning in AI
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              ASTRA is the official departmental club of the AIML department at WCE - a collaborative platform where students strengthen theoretical foundations, explore advanced AI concepts, and translate ideas into impactful applications.
            </p>
          </FadeUp>

          {/* Pillar Tabs */}
          <FadeUp delay={0.1}>
            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {PILLARS.map((p, i) => (
                <button key={i} onClick={() => setActivePillar(i)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                  style={
                    activePillar === i
                      ? { background: `${p.color}20`, border: `1px solid ${p.color}60`, color: p.color, boxShadow: `0 0 20px ${p.color}25` }
                      : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#6b7280" }
                  }>
                  {p.icon}
                  {p.label}
                </button>
              ))}
            </div>

            {/* Tab Panel */}
            <AnimatePresence mode="wait">
              <motion.div key={activePillar}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-3xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center"
                style={{ borderColor: `${PILLARS[activePillar].color}25` }}>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `${PILLARS[activePillar].color}20`, border: `1px solid ${PILLARS[activePillar].color}40` }}>
                    <span style={{ color: PILLARS[activePillar].color }}>{PILLARS[activePillar].icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>
                    {PILLARS[activePillar].title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{PILLARS[activePillar].desc}</p>
                </div>
                <ul className="space-y-3">
                  {PILLARS[activePillar].bullets.map((b, i) => (
                    <motion.li key={i}
                      initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: PILLARS[activePillar].color }} />
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </FadeUp>
        </div>
      </div>

      {/* ── HOD QUOTE CARD ─────────────────────────────────────────── */}
      <div className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-8"
          style={{ background: "radial-gradient(ellipse at 50% 50%, #6366f1 0%, transparent 65%)" }} />

        <div className="max-w-5xl mx-auto">
          <ScaleIn>
            <div className="glass-card rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
              {/* Background shimmer */}
              <div className="absolute inset-0 rounded-[3rem] pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(139,92,246,0.04) 50%, rgba(6,182,212,0.06) 100%)" }} />

              <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                {/* Photo */}
                <div className="flex-shrink-0 text-center">
                  <div className="relative inline-block">
                    <div className="absolute -inset-2 rounded-3xl blur-md opacity-60"
                      style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa)" }} />
                    <img src={hodPhoto} alt="Dr. Vivek Nivrutirao Waghmare"
                      className="relative h-50 w-60 rounded-3xl object-cover border-2 border-white/10"
                      style={{ boxShadow: "0 20px 60px rgba(99,102,241,0.25)" }} />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-white font-bold text-lg" style={{ fontFamily: "Syne, sans-serif" }}>
                      Dr. Vivek Nivrutirao Waghmare
                    </h3>
                    <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mt-1">
                      Professor & Head, AIML Dept
                    </p>
                    <p className="text-gray-600 text-xs mt-0.5">WCE, Sangli</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="flex-1 space-y-6">
                  <Quote className="w-10 h-10 text-indigo-500/40" />
                  <blockquote className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed italic">
                    "ASTRA represents the spirit of intellectual curiosity that defines the AIML department at WCE.
                    It is a platform where students don't just learn AI - they{" "}
                    <span className="text-indigo-300 font-semibold not-italic">think, build, and grow</span>{" "}
                    as future-ready technologists and thinkers."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/40 to-transparent" />
                    <span className="text-gray-600 text-xs tracking-widest uppercase"></span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>15+ years of teaching & research experience</span>
                  </div>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>

      {/* ── OBJECTIVES GRID ───────────────────────────────────────── */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-14">
          <FadeUp className="text-center space-y-3">
            <SectionPill icon={<Target className="w-3 h-3" />} label="Our Goals" />
            <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "Syne, sans-serif" }}>
              Club Objectives
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Six guiding principles that shape every workshop, project, and conversation in ASTRA.
            </p>
          </FadeUp>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OBJECTIVES.map((obj, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card rounded-3xl p-8 group cursor-default relative overflow-hidden"
                  style={{ borderColor: `${obj.color}20` }}>
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${obj.color}12 0%, transparent 70%)` }} />
                  {/* Bottom shimmer */}
                  <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${obj.color}60, transparent)` }} />

                  <div className="mb-4 w-11 h-11 rounded-2xl flex items-center justify-center"
                    style={{ background: `${obj.color}15`, border: `1px solid ${obj.color}30`, color: obj.color }}>
                    {obj.icon}
                  </div>
                  <p className="text-white font-bold text-base leading-snug">{obj.text}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ACCORDION ─────────────────────────────────────────── */}
      <div className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5"
          style={{ background: "radial-gradient(ellipse at 50% 100%, #6366f1 0%, transparent 65%)" }} />

        <div className="max-w-3xl mx-auto space-y-12">
          <FadeUp className="text-center space-y-3">
            <SectionPill icon={<Lightbulb className="w-3 h-3" />} label="FAQ" />
            <h2 className="text-4xl font-black text-white" style={{ fontFamily: "Syne, sans-serif" }}>
              Common Questions
            </h2>
            <p className="text-gray-500 text-sm">Everything you need to know before joining ASTRA.</p>
          </FadeUp>

          <div className="glass-card rounded-3xl px-6 md:px-10 py-4">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── VISION ────────────────────────────────────────────────── */}
      <div className="py-12 px-6 relative z-10 font-sans">
        <FadeUp>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="max-w-5xl mx-auto glass-card rounded-[2rem] p-8 md:p-10 border border-indigo-500/30 relative overflow-hidden group shadow-[0_0_40px_rgba(99,102,241,0.15)]"
          >
            {/* Animated Laser Glow */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            
            {/* Background Glow */}
            <div className="absolute -inset-20 opacity-30 pointer-events-none transition-opacity duration-700 group-hover:opacity-70"
              style={{ background: "radial-gradient(circle at 100% 0%, rgba(139,92,246,0.2) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(99,102,241,0.2) 0%, transparent 50%)" }} />
            
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12 relative z-10">
              
              {/* Left Column: Heading */}
              <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/10 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-6 w-fit mx-auto md:mx-0 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                  <Globe className="w-3 h-3" /> Our Vision
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight group-hover:scale-105 origin-center md:origin-left transition-transform duration-500" style={{ fontFamily: "Syne, sans-serif" }}>
                  <span style={{
                    background: "linear-gradient(135deg, #fff 20%, #a78bfa 100%)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>
                    Building the minds<br />that build AI.
                  </span>
                </h2>
              </div>

              {/* Right Column: Content */}
              <div className="flex-[1.2] relative flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-inner transition-all duration-500 group-hover:bg-white/10 group-hover:border-indigo-500/40">
                  <SpotlightTextReveal>
                    <p className="text-sm md:text-base leading-relaxed mb-4">
                      To nurture a community of intellectually curious and ethically grounded learners who explore{" "}
                      Artificial Intelligence{" "}
                      with depth, responsibility, and purpose.
                    </p>
                    <p className="text-sm leading-relaxed">
                      We aim to empower students to think critically, learn collaboratively, and apply AI knowledge to create meaningful real-world impact - locally, globally, and sustainably.
                    </p>
                  </SpotlightTextReveal>
                </div>
              </div>
              
            </div>
          </motion.div>
        </FadeUp>
      </div>

    </section>
  );
}
