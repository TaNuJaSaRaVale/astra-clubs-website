import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Brain, Users, Globe, FileText, Terminal, Megaphone,
  HeartHandshake, Code, Palette, Wallet, Sparkles, X,
  Linkedin,
} from "lucide-react";

/* ─── NEURAL CANVAS (Shared Dark Theme Background) ───────── */
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
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}

/* ─── Member values (first-year board) ───────────────────── */
const memberValues = [
  { title: "Learning & Skill Development", desc: "Building strong fundamentals in AI, ML, and the mathematical concepts behind neural networks.", icon: <Brain className="w-6 h-6" />, color: "#6366f1" },
  { title: "Active Participation",         desc: "Engaging in workshops, study groups, and hands-on technical activities organized by ASTRA.",   icon: <Sparkles className="w-6 h-6" />, color: "#8b5cf6" },
  { title: "Collaborative Growth",         desc: "Sharing knowledge through peer-to-peer learning and collaborative problem-solving.",             icon: <Users className="w-6 h-6" />,   color: "#06b6d4" },
  { title: "Exploration & Exposure",       desc: "Early exposure to research papers, impactful projects, and emerging AI technologies.",           icon: <Globe className="w-6 h-6" />,   color: "#10b981" },
];

/* ─── Associate roles ─────────────────────────────────────── */
const associateRoles = [
  {
    role: "Secretary",
    desc: "Handles official documentation, communication, and departmental coordination.",
    icon: <FileText className="w-6 h-6" />,
    color: "#6366f1",
    members: [
      { name: "Arya Patil",     initials: "AP", fg: "#a78bfa" },
      { name: "Rahul Deshmukh", initials: "RD", fg: "#60a5fa" },
    ],
  },
  {
    role: "Technical Head",
    desc: "Oversees technical learning paths, workshops, and project architectures.",
    icon: <Terminal className="w-6 h-6" />,
    color: "#8b5cf6",
    members: [
      { name: "Sneha Kulkarni", initials: "SK", fg: "#4ade80" },
      { name: "Vikram Rao",     initials: "VR", fg: "#fbbf24" },
    ],
  },
  {
    role: "Public Relations Officer",
    desc: "Manages outreach, partnerships, and ASTRA's public presence.",
    icon: <Megaphone className="w-6 h-6" />,
    color: "#ec4899",
    members: [
      { name: "Priya Sharma", initials: "PS", fg: "#f472b6" },
    ],
  },
  {
    role: "Club Service Director",
    desc: "Coordinates mentorship initiatives and inclusive learning programs.",
    icon: <HeartHandshake className="w-6 h-6" />,
    color: "#10b981",
    members: [
      { name: "Ankit Joshi", initials: "AJ", fg: "#34d399" },
    ],
  },
  {
    role: "Web Developer",
    desc: "Designs and maintains ASTRA's official web platforms.",
    icon: <Code className="w-6 h-6" />,
    color: "#06b6d4",
    members: [
      { name: "Dev Bhosale", initials: "DB", fg: "#22d3ee" },
    ],
  },
  {
    role: "Art & Design Team",
    desc: "Builds ASTRA's visual branding and creative identity.",
    icon: <Palette className="w-6 h-6" />,
    color: "#f59e0b",
    members: [
      { name: "Meera Nair", initials: "MN", fg: "#fbbf24" },
    ],
  },
  {
    role: "Treasurer",
    desc: "Manages budgeting, expenses, and financial transparency.",
    icon: <Wallet className="w-6 h-6" />,
    color: "#ef4444",
    members: [
      { name: "Rohan More", initials: "RM", fg: "#f87171" },
    ],
  },
];

/* ─── Horizontal scroll row with dot indicator ────────────── */
function SwipeSection({ items, renderCard }) {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  const onScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const progress = scrollLeft / (scrollWidth - clientWidth);
    setActive(Math.round(progress * (items.length - 1)));
  };

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pt-4 custom-scrollbar"
      >
        {items.map((item, i) => (
          <div key={i} className="snap-center flex-shrink-0">
            {renderCard(item, i)}
          </div>
        ))}
      </div>
      {/* Dot indicator */}
      <div className="flex justify-center gap-2 mt-2">
        {items.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width:      i === active ? 24 : 8,
              height:     8,
              background: i === active ? "#6366f1" : "rgba(255,255,255,0.2)",
              boxShadow:  i === active ? "0 0 10px rgba(99,102,241,0.5)" : "none"
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Flip card for associate roles ──────────────────────── */
function FlipCard({ role }) {
  return (
    <div className="flip-card w-[340px] h-[320px] group perspective-[1000px]">
      <div className="flip-card-inner w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front */}
        <div
          className="flip-card-front absolute inset-0 w-full h-full bg-white/5 backdrop-blur-xl border border-white/10
            rounded-[2rem] p-9 flex flex-col justify-between [backface-visibility:hidden]"
          style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}
        >
          <div className="absolute inset-0 rounded-[2rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: `radial-gradient(circle at 50% 0%, ${role.color}15, transparent 70%)` }} />
            
          <div className="relative z-10">
            <div
              className="mb-6 p-4 w-fit rounded-2xl transition-colors"
              style={{ background: `${role.color}15`, border: `1px solid ${role.color}30` }}
            >
              <span style={{ color: role.color }}>{role.icon}</span>
            </div>
            <h3
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {role.role}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{role.desc}</p>
          </div>
          <p className="text-xs text-indigo-300/70 font-medium mt-4 relative z-10">Hover to meet team →</p>
        </div>

        {/* Back */}
        <div
          className="flip-card-back absolute inset-0 w-full h-full bg-[#0d1224]/80 backdrop-blur-xl border border-white/10
            rounded-[2rem] p-9 flex flex-col justify-center items-center gap-8 [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{ boxShadow: `0 0 30px ${role.color}20` }}
        >
          <h3
            className="text-xl font-bold text-white text-center"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {role.role}
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {role.members.map((m, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold relative group/avatar"
                  style={{ background: `${m.fg}15`, color: m.fg, border: `2px solid ${m.fg}40` }}
                >
                  {m.initials}
                  <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: m.fg }} />
                </div>
                <p className="text-sm font-semibold text-gray-200">{m.name}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}

/* ─── Fade-up wrapper ─────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Team page ───────────────────────────────────────────── */
export default function Team() {
  return (
    <section
      id="team"
      className="relative min-h-screen bg-[#080c18] text-white py-32 overflow-hidden font-sans"
    >
      {/* Background Effects */}
      <NeuralCanvas />
      
      {/* Glow Orbs */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-32">

        {/* ── Page header ── */}
        <FadeUp className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            Our People
          </div>
          <h1
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            The ASTRA Core
          </h1>
          <p className="max-w-3xl mx-auto text-center text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
            ASTRA is powered by a dedicated collective of students at{" "}
            <span className="text-white font-bold">Walchand College of Engineering</span>,
            united to push the boundaries of{" "}
            <span className="text-indigo-400 font-semibold drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">Artificial Intelligence</span>.
          </p>
        </FadeUp>

        {/* ── Member Board ── */}
        <FadeUp delay={0.1}>
          <div className="space-y-10">
            <div className="text-center">
              <h2
                className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Member Board
              </h2>
              <span className="text-indigo-300/80 font-medium text-lg tracking-widest uppercase text-center block">
                First Year Values
              </span>
            </div>

            <SwipeSection
              items={memberValues}
              renderCard={(item) => (
                <div
                  className="w-[360px] h-[320px] bg-white/5 backdrop-blur-xl border border-white/10
                    rounded-[2rem] p-9 flex flex-col justify-between group relative overflow-hidden
                    hover:-translate-y-2 transition-all duration-400 cursor-pointer"
                  style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 100% 100%, ${item.color}15, transparent 70%)` }} />
                    
                  <div>
                    <div
                      className="mb-6 p-4 w-fit rounded-2xl transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                    >
                      <span style={{ color: item.color }}>{item.icon}</span>
                    </div>
                    <h3
                      className="text-2xl font-bold text-white mb-3"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  {/* Bottom progress bar */}
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-4">
                    <div
                      className="h-full w-0 group-hover:w-full transition-all duration-700 ease-out rounded-full"
                      style={{ background: `linear-gradient(90deg, ${item.color}40, ${item.color})`, boxShadow: `0 0 10px ${item.color}` }}
                    />
                  </div>
                </div>
              )}
            />
          </div>
        </FadeUp>

        {/* ── Associate Board ── */}
        <FadeUp delay={0.2}>
          <div className="space-y-10">
            <div className="text-center">
              <h2
                className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Associate Board
              </h2>
              <span className="text-indigo-300/80 font-medium text-lg tracking-widest uppercase text-center block">
                Core Operations
              </span>
            </div>

            <SwipeSection
              items={associateRoles}
              renderCard={(role) => <FlipCard role={role} />}
            />
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
