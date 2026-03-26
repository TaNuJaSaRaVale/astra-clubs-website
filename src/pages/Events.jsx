import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Calendar, CheckCircle2, Rocket, Timer, Zap, User, Clock, MapPin, X, Search, Tag, Image as ImageIcon, ExternalLink } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   NEURAL CANVAS
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
   ANIMATED HEADINGS & WRAPPERS
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

function SectionPill({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-widest uppercase mb-4">
      {icon}
      {label}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   HELPERS & DATA
───────────────────────────────────────────────────────── */
function getGoogleCalendarUrl(event) {
  const text = encodeURIComponent(event.title);
  const details = encodeURIComponent(event.longDesc);
  const location = encodeURIComponent(event.location);
  // Default to 2 hours duration
  const start = new Date(event.start).toISOString().replace(/-|:|\.\d\d\d/g, "");
  const end = new Date(event.start + 2 * 60 * 60 * 1000).toISOString().replace(/-|:|\.\d\d\d/g, "");
  return `https://calendar.google.com/calendar/r/eventedit?text=${text}&dates=${start}/${end}&details=${details}&location=${location}`;
}

const events = [
  {
    id: "gim-2k25",
    title: "GIM 2K25 - ASTRANOVA",
    desc: "The massive inaugural event that defined ASTRA's vision, introduced our core AI domains, and welcomed the next generation of innovators.",
    longDesc: "Kickstarting our new club's journey with an unforgettable inaugural meet! We introduced the core fundamentals of ASTRA's mission, revealed the roadmap for upcoming events, and engaged with enthusiastic members. Key speakers included our faculty advisors and senior domain leads.",
    status: "Completed",
    type: "Event",
    icon: <CheckCircle2 className="w-4 h-4" />,
    color: "#10b981", // Emerald
    bgGlow: "rgba(16,185,129,0.15)",
    date: "September 2025",
    time: "5:30 PM - 7:30 PM",
    start: new Date("2025-08-20T17:30:00").getTime(),
    location: "Tilak Hall, WCE",
    speakers: ["Dr. Vivek Waghmare", "ASTRA Core Team"],
    tags: ["#Inaugural", "#Vision", "#Networking"],
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=600&h=400&fit=crop"
    ]
  },
  {
    id: "ml-foundation",
    title: "Club Service - DECODING ML",
    desc: "An intensive two-day club service taking students from the absolute basics of Machine Learning to building a complete end-to-end ML project.",
    longDesc: "A comprehensive two-day Machine Learning bootcamp. We guided participants entirely from scratch, covering foundational theories to advanced concepts, and culminated with a hands-on session where everyone built and deployed their own end-to-end ML project.",
    status: "Completed",
    type: "Club Service",
    icon: <Timer className="w-4 h-4" />,
    color: "#f59e0b", // Amber
    bgGlow: "rgba(245,158,11,0.15)",
    date: " 2nd & 3rd FEB 2026",
    time: " 6:00 p.m. to 8:00 p.m.",
    start: Date.now() - 30 * 24 * 60 * 60 * 1000,
    location: " Classroom no.8",
    speakers: ["Main Board Members", "Associate Board Members"],
    tags: ["#MachineLearning", "#Email-Spam Classifier", "#Foundations"],
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop"
    ]
  },
];

/* ─────────────────────────────────────────────────────────
   COUNTDOWN TIMER
───────────────────────────────────────────────────────── */
function CountdownTimer({ targetTime, color }) {
  const [timeLeft, setTimeLeft] = useState(targetTime - Date.now());

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(targetTime - Date.now()), 1000);
    return () => clearInterval(timer);
  }, [targetTime, timeLeft]);

  if (timeLeft <= 0) return null;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);

  const format = (num) => String(num).padStart(2, '0');

  return (
    <div className="flex items-center gap-3">
      {[{ label: "D", val: days }, { label: "H", val: hours }, { label: "M", val: minutes }].map((u, i) => (
        <div key={i} className="flex flex-col items-center">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg mb-1"
            style={{ background: `${color}15`, border: `1px solid ${color}30`, color: color }}
          >
            {format(u.val)}
          </div>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">{u.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   TIMELINE ITEM
───────────────────────────────────────────────────────── */
function TimelineItem({ event, index, onClick, onTagClick, selectedTag }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 w-full ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* ── Mobile Dot & Line ── */}
      <div className="md:hidden absolute left-6 top-8 bottom-[-40px] w-0.5 bg-gradient-to-b from-indigo-500/40 to-transparent" />
      <div className="md:hidden absolute left-[1.125rem] top-8 w-4 h-4 rounded-full border-2 border-[#080c18] z-10"
        style={{ background: event.color, boxShadow: `0 0 15px ${event.color}` }} />

      {/* ── Card ── */}
      <motion.div
        className={`w-full md:w-[calc(50%-2.5rem)] pl-16 md:pl-0 ${isLeft ? "md:pr-10" : "md:pl-10"}`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          whileHover={{ scale: 1.01, y: -4 }}
          onClick={() => onClick(event)}
          className="cursor-pointer glass-card rounded-[1.75rem] p-7 group relative overflow-hidden text-left"
          style={{
            borderColor: `${event.color}30`,
            background: "rgba(255,255,255,0.02)",
            boxShadow: `0 20px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)`
          }}
        >
          {/* Hover Glow Background */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: `radial-gradient(circle at ${isLeft ? '100%' : '0%'} 50%, ${event.bgGlow} 0%, transparent 70%)` }} />

          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

          {/* Status + type row */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border"
                style={{ color: event.color, borderColor: `${event.color}40`, backgroundColor: `${event.color}15` }}
              >
                {event.icon} {event.status}
              </span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                {event.type}
              </span>
            </div>

            {/* Live indicator if Planned */}
            {event.status === "Planned" && (
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: event.color }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: event.color }} />
              </span>
            )}
          </div>

          <h3
            className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {event.title}
          </h3>

          {/* Tags */}
          {event.tags && (
            <div className="flex flex-wrap gap-2 mb-4" onClick={(e) => e.stopPropagation()}>
              {event.tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => onTagClick(selectedTag === tag ? null : tag)}
                  className={`text-xs px-2 py-1 rounded border transition-colors ${selectedTag === tag
                    ? "text-indigo-300 border-indigo-500/50 bg-indigo-500/10"
                    : "text-gray-500 border-white/5 bg-white/5 hover:bg-white/10 hover:text-gray-300"
                    }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">{event.desc}</p>

          <div className="flex items-center justify-between mt-auto">
            {event.status === "Planned" ? (
              <div className="flex items-center gap-2 text-sm text-gray-400" style={{ color: event.color }}>
                <Clock size={16} /> Starts soon
              </div>
            ) : (
              <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden mr-4">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${event.color}40, ${event.color})` }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                />
              </div>
            )}

            <button
              onClick={(e) => { e.stopPropagation(); onClick(event); }}
              type="button"
              className="text-xs font-semibold text-white/70 group-hover:text-white flex items-center gap-1 transition-colors whitespace-nowrap ml-auto relative z-10"
            >
              Details <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Center dot (Desktop) ── */}
      <div className="relative z-10 flex-shrink-0 w-20 justify-center hidden md:flex">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.2, type: "spring", stiffness: 350, damping: 20 }}
          className="w-4 h-4 rounded-full border-2 border-[#080c18]"
          style={{
            background: event.color,
            boxShadow: `0 0 0 4px ${event.bgGlow}, 0 0 20px ${event.color}`,
          }}
        />
      </div>

      {/* ── Empty side for alternating layout ── */}
      <div className="w-[calc(50%-2.5rem)] hidden md:block" />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   EVENT MODAL
───────────────────────────────────────────────────────── */
function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      >
        <div className="absolute inset-0 bg-[#080c18]/80 backdrop-blur-sm" onClick={onClose} />

        <motion.div
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
          className="relative w-full max-w-2xl glass-card rounded-[2rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          style={{ borderColor: `${event.color}30`, background: "rgba(15,20,35,0.95)" }}
        >
          {/* Top highlight bar */}
          <div className="h-1 w-full flex-shrink-0" style={{ background: `linear-gradient(90deg, ${event.color}, transparent)` }} />

          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors z-10"
          >
            <X size={18} />
          </button>

          <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar flex-1 relative">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border"
                style={{ color: event.color, borderColor: `${event.color}40`, backgroundColor: `${event.color}15` }}
              >
                {event.icon} {event.status}
              </span>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
                {event.type}
              </span>
            </div>

            <h2 className="text-3xl md:text-3xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "Syne, sans-serif" }}>
              {event.title}
            </h2>

            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Calendar className="w-4 h-4 text-white/50" /> {event.date}
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-white/50" /> {event.time}
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm border-l border-white/10 pl-4">
                <MapPin className="w-4 h-4 text-white/50" /> {event.location}
              </div>
            </div>

            {/* Tags in modal */}
            {event.tags && (
              <div className="flex gap-2 flex-wrap mb-8 pb-8 border-b border-white/10">
                {event.tags.map(tag => (
                  <span key={tag} className="text-xs text-gray-500 flex items-center gap-1">
                    <Tag size={10} /> {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="space-y-8">
              {/* Event Description */}
              <div>
                <h4 className="text-white font-semibold mb-3">About the Event</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{event.longDesc}</p>
              </div>

              {/* Planned Event Extras */}
              {event.status === "Planned" && (
                <div className="flex flex-wrap md:flex-nowrap gap-6 items-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div>
                    <h4 className="text-white font-semibold mb-3 text-sm tracking-wide">STARTS IN</h4>
                    <CountdownTimer targetTime={event.start} color={event.color} />
                  </div>
                  <div className="hidden md:block w-px h-16 bg-white/10 mx-2" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 mb-3">Save the date so you don't miss out on the action.</p>
                    <a
                      href={getGoogleCalendarUrl(event)}
                      target="_blank" rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-bold transition-colors"
                      style={{ border: `1px solid ${event.color}40`, color: event.color, background: `${event.color}10` }}
                    >
                      <Calendar size={16} /> Add to Google Calendar
                    </a>
                  </div>
                </div>
              )}

              {/* Speakers */}
              {event.speakers && event.speakers.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-3">Mentors & Speakers</h4>
                  <div className="flex flex-wrap gap-3">
                    {event.speakers.map((speaker, i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300">
                        <User className="w-3.5 h-3.5" /> {speaker}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Completed Event Gallery */}
              {event.status === "Completed" && event.gallery && event.gallery.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <ImageIcon size={16} className="text-indigo-400" /> Event Highlights
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {event.gallery.map((img, i) => (
                      <div key={i} className="aspect-video rounded-xl overflow-hidden glass-card border-white/10 group cursor-pointer relative">
                        <div className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                          <ExternalLink size={16} className="text-white" />
                        </div>
                        <img src={img} alt="Highlight" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────────────────
   EVENTS PAGE
───────────────────────────────────────────────────────── */
export default function Events() {
  const [filter, setFilter] = useState("All");
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Ref for the timeline container to drive the animation
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Transform scroll progress into height percentage
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const filteredEvents = events.filter(e => {
    if (filter !== "All" && e.status !== filter) return false;
    if (selectedTag && (!e.tags || !e.tags.includes(selectedTag))) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = e.title.toLowerCase().includes(q);
      const matchDesc = e.desc.toLowerCase().includes(q);
      const matchTags = e.tags && e.tags.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchTags) return false;
    }
    return true;
  });

  return (
    <section id="events" className="relative min-h-screen pt-32 pb-24 overflow-hidden" style={{ background: "#080c18" }}>
      <style>{`
        .shimmer-text {
          background: linear-gradient(90deg, #e0e7ff 0%, #a78bfa 30%, #818cf8 50%, #a78bfa 70%, #e0e7ff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        .timeline-line { background: linear-gradient(to bottom, #6366f1, #06b6d4, #10b981); }
        .glass-card {
           backdrop-filter: blur(20px);
           border-width: 1px;
           border-style: solid;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* Background Layer */}
      <NeuralCanvas />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #6366f1 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #06b6d4 0%, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <FadeUp className="text-center mb-16">
          <SectionPill icon={<Calendar size={13} />} label="Timeline" />
          <h1
            className="text-[clamp(3rem,8vw,5.5rem)] font-black leading-none tracking-tight shimmer-text"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Our Events
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 leading-relaxed mt-6">
            Explore the milestones that define the ASTRA experience. Track past highlights and catch upcoming sessions.
          </p>
        </FadeUp>

        {/* ── Search & Filter Bar ── */}
        <FadeUp delay={0.1} className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 glass-card p-4 rounded-3xl" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.08)" }}>

          {/* Status Filters */}
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto custom-scrollbar pb-2 md:pb-0">
            {["All", "Planned", "Completed"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === f
                  ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                  : "text-gray-400 border border-transparent hover:text-white"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Active Tag indicator */}
            <AnimatePresence>
              {selectedTag && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold"
                >
                  {selectedTag}
                  <button onClick={() => setSelectedTag(null)} className="hover:text-white ml-1"><X size={12} /></button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Search Input */}
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
              />
            </div>
          </div>
        </FadeUp>

        {/* ── Timeline ── */}
        <div className="relative" ref={containerRef}>
          {/* Base transparent line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 rounded-full bg-white/5 hidden md:block" />

          {/* Animated Scroll Progress Line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 w-0.5 timeline-line rounded-full shadow-[0_0_15px_rgba(99,102,241,0.7)] hidden md:block origin-top z-10"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 md:space-y-16 flex flex-col items-center">
            <AnimatePresence mode="popLayout">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, i) => (
                  <motion.div
                    key={event.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.4 }}
                    className="w-full relative z-20"
                  >
                    <TimelineItem event={event} index={i} onClick={setSelectedEvent} onTagClick={setSelectedTag} selectedTag={selectedTag} />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="py-20 text-center flex flex-col items-center text-gray-500"
                >
                  <Search size={40} className="mb-4 text-white/10" />
                  <p className="text-lg font-semibold text-gray-400">No events found</p>
                  <p className="text-sm">Try adjusting your search or filters.</p>

                  <button
                    onClick={() => { setSearchQuery(""); setSelectedTag(null); setFilter("All"); }}
                    className="mt-6 px-4 py-2 rounded-full text-xs font-semibold bg-white/5 border border-white/10 hover:bg-white/10"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── CTA ── */}
        <FadeUp delay={0.3} className="mt-20 mb-10 text-center relative z-20">
          <div
            className="p-8 md:p-10 rounded-[2rem] glass-card max-w-4xl mx-auto relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-left"
            style={{ borderColor: "rgba(99,102,241,0.15)", background: "rgba(255,255,255,0.01)" }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 0% 50%, rgba(99,102,241,0.08) 0%, transparent 60%)" }} />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10 w-full">
              <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex-shrink-0">
                <Zap className="text-indigo-400" size={28} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2
                  className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Have an event idea?
                </h2>
                <p className="text-gray-400 text-sm md:text-base max-w-sm mx-auto md:mx-0">
                  We are constantly seeking new areas to explore along with our community.
                </p>
              </div>
              <div className="flex-shrink-0 mt-2 md:mt-0 md:self-center">
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-block px-8 py-3.5 font-bold text-sm text-white rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
                  style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 0 30px rgba(99,102,241,0.3)" }}
                >
                  Propose an Event
                </button>
              </div>
            </div>
          </div>
        </FadeUp>

      </div>

      {/* Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  );
}
