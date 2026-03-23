import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Brain, Users, Globe, FileText, Terminal, Megaphone,
  HeartHandshake, Code, Palette, Wallet, Sparkles, X,
  Linkedin,
} from "lucide-react";

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
      { name: "Arya Patil",     initials: "AP", bg: "#ede9fe", fg: "#5b21b6" },
      { name: "Rahul Deshmukh", initials: "RD", bg: "#dbeafe", fg: "#1d4ed8" },
    ],
  },
  {
    role: "Technical Head",
    desc: "Oversees technical learning paths, workshops, and project architectures.",
    icon: <Terminal className="w-6 h-6" />,
    color: "#8b5cf6",
    members: [
      { name: "Sneha Kulkarni", initials: "SK", bg: "#f0fdf4", fg: "#15803d" },
      { name: "Vikram Rao",     initials: "VR", bg: "#fef3c7", fg: "#b45309" },
    ],
  },
  {
    role: "Public Relations Officer",
    desc: "Manages outreach, partnerships, and ASTRA's public presence.",
    icon: <Megaphone className="w-6 h-6" />,
    color: "#ec4899",
    members: [
      { name: "Priya Sharma", initials: "PS", bg: "#fdf2f8", fg: "#9d174d" },
    ],
  },
  {
    role: "Club Service Director",
    desc: "Coordinates mentorship initiatives and inclusive learning programs.",
    icon: <HeartHandshake className="w-6 h-6" />,
    color: "#10b981",
    members: [
      { name: "Ankit Joshi", initials: "AJ", bg: "#ecfdf5", fg: "#065f46" },
    ],
  },
  {
    role: "Web Developer",
    desc: "Designs and maintains ASTRA's official web platforms.",
    icon: <Code className="w-6 h-6" />,
    color: "#06b6d4",
    members: [
      { name: "Dev Bhosale", initials: "DB", bg: "#ecfeff", fg: "#155e75" },
    ],
  },
  {
    role: "Art & Design Team",
    desc: "Builds ASTRA's visual branding and creative identity.",
    icon: <Palette className="w-6 h-6" />,
    color: "#f59e0b",
    members: [
      { name: "Meera Nair", initials: "MN", bg: "#fffbeb", fg: "#92400e" },
    ],
  },
  {
    role: "Treasurer",
    desc: "Manages budgeting, expenses, and financial transparency.",
    icon: <Wallet className="w-6 h-6" />,
    color: "#ef4444",
    members: [
      { name: "Rohan More", initials: "RM", bg: "#fef2f2", fg: "#991b1b" },
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
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
      >
        {items.map((item, i) => (
          <div key={i} className="snap-center flex-shrink-0">
            {renderCard(item, i)}
          </div>
        ))}
      </div>
      {/* Dot indicator */}
      <div className="flex justify-center gap-1.5 mt-5">
        {items.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width:      i === active ? 20 : 6,
              height:     6,
              background: i === active ? "#6366f1" : "#cbd5e1",
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
    <div className="flip-card w-[340px] h-[300px]">
      <div className="flip-card-inner w-full h-full">
        {/* Front */}
        <div
          className="flip-card-front w-full h-full bg-white/70 backdrop-blur-xl border border-white
            rounded-[2rem] p-9 flex flex-col justify-between"
          style={{ boxShadow: "0 20px 50px rgba(99,102,241,0.08)" }}
        >
          <div>
            <div
              className="mb-5 p-4 w-fit rounded-2xl"
              style={{ background: `${role.color}15`, border: `1px solid ${role.color}25` }}
            >
              <span style={{ color: role.color }}>{role.icon}</span>
            </div>
            <h3
              className="text-xl font-bold text-slate-900 mb-3"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {role.role}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">{role.desc}</p>
          </div>
          <p className="text-xs text-slate-300 font-medium mt-2">Hover to see team →</p>
        </div>

        {/* Back */}
        <div
          className="flip-card-back w-full h-full bg-white/80 backdrop-blur-xl border border-white
            rounded-[2rem] p-9 flex flex-col justify-center items-center gap-6"
          style={{ boxShadow: "0 20px 50px rgba(99,102,241,0.12)" }}
        >
          <h3
            className="text-lg font-bold text-slate-900"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {role.role}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {role.members.map((m, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-base font-bold shadow-sm"
                  style={{ background: m.bg, color: m.fg, border: `2px solid ${m.fg}20` }}
                >
                  {m.initials}
                </div>
                <p className="text-sm font-semibold text-slate-800">{m.name}</p>
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
      className="relative min-h-screen bg-[#f8faff] text-slate-800 py-32 overflow-hidden font-sans"
    >
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-blue-400/8 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-400/8 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-24">

        {/* ── Page header ── */}
        <FadeUp className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-100 bg-white shadow-sm text-indigo-600 text-xs font-bold uppercase tracking-widest">
            Our People
          </div>
          <h1
            className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            The Team
          </h1>
          <p className="max-w-3xl mx-auto text-center text-lg text-slate-500 font-medium leading-relaxed">
            ASTRA is powered by a dedicated collective of students at{" "}
            <span className="text-slate-900 font-bold">Walchand College of Engineering</span>,
            united to push the boundaries of{" "}
            <span className="text-indigo-600 font-semibold">Artificial Intelligence</span>.
          </p>
        </FadeUp>

        {/* ── Member Board ── */}
        <FadeUp>
          <div className="space-y-8">
            <h2
              className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight text-center"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Member Board{" "}
              <span className="text-slate-400 font-light text-3xl">(First Year)</span>
            </h2>
            <p className="text-center text-slate-400 text-sm">Swipe to explore →</p>

            <SwipeSection
              items={memberValues}
              renderCard={(item) => (
                <div
                  className="w-[360px] h-[300px] bg-white/70 backdrop-blur-xl border border-white
                    rounded-[2rem] p-9 flex flex-col justify-between group
                    hover:-translate-y-2 transition-all duration-400"
                  style={{ boxShadow: "0 20px 50px rgba(99,102,241,0.08)" }}
                >
                  <div>
                    <div
                      className="mb-5 p-4 w-fit rounded-2xl transition-colors"
                      style={{ background: `${item.color}12`, border: `1px solid ${item.color}22` }}
                    >
                      <span style={{ color: item.color }}>{item.icon}</span>
                    </div>
                    <h3
                      className="text-xl font-bold text-slate-900 mb-3"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  {/* Bottom progress bar */}
                  <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full w-0 group-hover:w-full transition-all duration-700 rounded-full"
                      style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                    />
                  </div>
                </div>
              )}
            />
          </div>
        </FadeUp>

        {/* ── Associate Board ── */}
        <FadeUp>
          <div className="space-y-8">
            <h2
              className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight text-center"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Associate Board
            </h2>
            <p className="text-center text-slate-400 text-sm">Hover each card to meet the team · Swipe to explore →</p>

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
