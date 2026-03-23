import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, CheckCircle2, Rocket, Timer, Zap } from "lucide-react";

const events = [
  {
    title:      "GIM 2K25 – General Interest Meet",
    desc:       "The massive inaugural event that defined ASTRA's vision, introduced our core AI domains, and welcomed the next generation of innovators.",
    status:     "Completed",
    type:       "Event",
    icon:       <CheckCircle2 className="w-4 h-4" />,
    statusColor:"text-emerald-700",
    statusBg:   "bg-emerald-50",
    dotColor:   "#10b981",
    dotShadow:  "rgba(16,185,129,0.45)",
    accent:     "#10b981",
  },
  {
    title:      "Club Service – ML Foundation",
    desc:       "A structured club service initiative focused on strengthening core Machine Learning foundations through guided sessions, conceptual clarity, and collaborative learning for all members.",
    status:     "Planned",
    type:       "Club Service",
    icon:       <Timer className="w-4 h-4" />,
    statusColor:"text-amber-700",
    statusBg:   "bg-amber-50",
    dotColor:   "#f59e0b",
    dotShadow:  "rgba(245,158,11,0.45)",
    accent:     "#f59e0b",
  },
  {
    title:      "ASTRA ML Services & Learning",
    desc:       "An open initiative providing cross-departmental ML mentorship, helping students from all branches integrate AI into their specific fields.",
    status:     "Planned",
    type:       "Initiative",
    icon:       <Rocket className="w-4 h-4" />,
    statusColor:"text-indigo-700",
    statusBg:   "bg-indigo-50",
    dotColor:   "#6366f1",
    dotShadow:  "rgba(99,102,241,0.45)",
    accent:     "#6366f1",
  },
];

/* ─── Single timeline item ────────────────────────────────── */
function TimelineItem({ event, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-0 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* ── Card ── */}
      <motion.div
        className={`w-[calc(50%-2.5rem)] ${isLeft ? "pr-10 text-right" : "pl-10 text-left"}`}
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="bg-white/80 backdrop-blur-xl border border-white rounded-[1.75rem] p-7 group
            hover:-translate-y-1.5 transition-all duration-500"
          style={{ boxShadow: "0 20px 50px rgba(99,102,241,0.08)" }}
        >
          {/* Status + type row */}
          <div className={`flex items-center gap-3 mb-4 ${isLeft ? "flex-row-reverse justify-end" : "flex-row"}`}>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${event.statusBg} ${event.statusColor}`}
            >
              {event.icon} {event.status}
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] italic">
              {event.type}
            </span>
          </div>

          <h3
            className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {event.title}
          </h3>

          <p className="text-slate-500 text-sm leading-relaxed">{event.desc}</p>

          {/* Progress bar */}
          <div className="mt-6 h-1 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${event.accent}99, ${event.accent})` }}
              initial={{ width: 0 }}
              animate={inView ? { width: event.status === "Completed" ? "100%" : "35%" } : {}}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* ── Center dot ── */}
      <div className="relative z-10 flex-shrink-0 w-20 flex justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.2, type: "spring", stiffness: 350, damping: 20 }}
          className="w-5 h-5 rounded-full border-4 border-white"
          style={{
            background:  event.dotColor,
            boxShadow:   `0 0 0 4px ${event.dotShadow}, 0 0 24px ${event.dotShadow}`,
          }}
        />
      </div>

      {/* ── Empty side ── */}
      <div className="w-[calc(50%-2.5rem)]" />
    </div>
  );
}

/* ─── Events page ─────────────────────────────────────────── */
export default function Events() {
  const headerRef    = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const ctaRef       = useRef(null);
  const ctaInView    = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <section
      id="events"
      className="relative min-h-screen bg-[#f8faff] text-slate-800 py-32 overflow-hidden font-sans"
    >
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/10 blur-[150px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-28"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-100 bg-white shadow-sm text-indigo-600 text-xs font-bold uppercase tracking-[0.2em]">
            <Calendar size={13} /> Timeline
          </div>
          <h1
            className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Events
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 font-medium leading-relaxed">
            From technical deep-dives to collaborative research sprints, explore the milestones
            that define the ASTRA experience.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Center vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px timeline-line"
          />

          <div className="space-y-14">
            {events.map((event, i) => (
              <TimelineItem key={i} event={event} index={i} />
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 40 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-28 text-center"
        >
          <div
            className="p-16 rounded-[3rem] bg-white/80 backdrop-blur-xl border border-white max-w-3xl mx-auto"
            style={{ boxShadow: "0 30px 60px rgba(99,102,241,0.10)" }}
          >
            <div className="p-4 bg-indigo-50 w-fit mx-auto rounded-2xl mb-8">
              <Zap className="text-indigo-600" size={36} style={{ fill: "rgba(99,102,241,0.2)" }} />
            </div>
            <h2
              className="text-3xl font-bold text-slate-900 mb-4 tracking-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Have an event idea?
            </h2>
            <p className="text-slate-500 mb-10 max-w-md mx-auto text-base font-medium">
              We are always looking for new domains to explore. Pitch your workshop or session to
              the core team.
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-4 bg-slate-900 text-white font-semibold rounded-2xl
                hover:bg-indigo-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              Propose an Event
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
