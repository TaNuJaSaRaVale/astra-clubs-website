import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap, Users, Target, Lightbulb,
  Rocket, ShieldCheck, Globe,
} from "lucide-react";
import hodPhoto from "../assets/hod-vivek-waghmare.jpg";

/* ─── Animated wrappers ───────────────────────────────────── */
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

function ScaleIn({ children, delay = 0, className = "" }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Objectives data ─────────────────────────────────────── */
const objectives = [
  { text: "Build strong theoretical foundations in AI & ML",      icon: <ShieldCheck className="w-5 h-5" /> },
  { text: "Promote peer-to-peer and collaborative learning",       icon: <Users       className="w-5 h-5" /> },
  { text: "Encourage research mindset and paper discussions",      icon: <Lightbulb   className="w-5 h-5" /> },
  { text: "Develop industry-ready skills through projects",        icon: <Rocket      className="w-5 h-5" /> },
  { text: "Enable ethical, responsible AI thinking",              icon: <Target      className="w-5 h-5" /> },
  { text: "Foster leadership and community engagement",            icon: <Globe       className="w-5 h-5" /> },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#f8faff] text-slate-800 overflow-hidden font-sans"
    >
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 blur-[130px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-400/8 blur-[130px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-28 space-y-32 relative z-10">

        {/* ── PAGE INTRO ───────────────────────────────────── */}
        <FadeUp className="text-center space-y-4">
          <h1
            className="text-6xl md:text-7xl font-black tracking-tighter text-slate-900"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            About Us
          </h1>
          <p className="max-w-3xl mx-auto text-indigo-600 font-bold tracking-widest uppercase text-sm">
            Walchand College of Engineering · ASTRA
          </p>
        </FadeUp>

        {/* ── WCE ──────────────────────────────────────────── */}
        <FadeUp>
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-100 bg-white shadow-sm text-indigo-600 text-xs font-bold uppercase tracking-widest">
              <GraduationCap size={15} />
              Legacy
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-slate-900"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Walchand College of Engineering, Sangli
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Established in <strong>1947</strong>, Walchand College of Engineering (WCE), Sangli,
              is a premier autonomous institution known for academic rigor, strong research culture,
              and a vibrant campus ecosystem.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              With NBA & NAAC accreditation, advanced laboratories, and a robust placement ecosystem,
              WCE provides an ideal environment for innovation-driven learning and professional growth.
            </p>
          </div>
        </FadeUp>

        {/* ── ASTRA + HOD ──────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp delay={0}>
            <div className="space-y-6">
              <h2
                className="text-5xl font-black text-slate-900 tracking-tight"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                ASTRA
              </h2>
              <p className="text-xl text-indigo-600 font-bold">
                Association of Students for Theoretical Reasoning in AI
              </p>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                ASTRA is the official departmental club of the Artificial Intelligence & Machine
                Learning department at WCE. The club serves as a collaborative platform where
                students strengthen theoretical foundations, explore advanced AI concepts, and
                translate ideas into impactful applications.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Through peer-to-peer learning, workshops, discussions, and club services, ASTRA
                nurtures analytical thinking, research mindset, and industry readiness among students.
              </p>
            </div>
          </FadeUp>

          {/* HOD card */}
          <ScaleIn delay={0.15}>
            <div
              className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] p-10 md:p-12"
              style={{ boxShadow: "0 30px 70px rgba(99,102,241,0.12)" }}
            >
              <div className="flex flex-col items-center text-center gap-6">
                <div className="relative">
                  <img
                    src={hodPhoto}
                    alt="Dr. Vivek Nivrutirao Waghmare"
                    className="h-52 w-68 rounded-3xl object-cover border-4 border-white shadow-lg"
                  />
                  {/* Subtle glow ring */}
                  <div
                    className="absolute -inset-1 rounded-3xl -z-10"
                    style={{ background: "linear-gradient(135deg, #6366f130, #a78bfa20)", filter: "blur(8px)" }}
                  />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-slate-900"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    Dr. Vivek Nivrutirao Waghmare
                  </h3>
                  <p className="text-indigo-600 font-bold uppercase text-sm tracking-widest mt-1">
                    Professor & Head, AIML Department
                  </p>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium text-sm">
                  With over 15 years of teaching and research experience, Dr. Waghmare provides
                  academic leadership and strategic direction for the department and ASTRA club
                  initiatives.
                </p>
              </div>
            </div>
          </ScaleIn>
        </div>

        {/* ── OBJECTIVES ───────────────────────────────────── */}
        <div className="space-y-14">
          <FadeUp className="text-center">
            <h2
              className="text-4xl font-bold text-slate-900"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Club's Objectives
            </h2>
          </FadeUp>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {objectives.map((obj, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div
                  className="p-8 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-white hover:-translate-y-2 transition-all duration-400 group"
                  style={{ boxShadow: "0 20px 50px rgba(99,102,241,0.07)" }}
                >
                  <div className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest group-hover:bg-indigo-100 transition-colors">
                    {obj.icon}
                  </div>
                  <p className="text-lg font-bold text-slate-900">{obj.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* ── VISION ───────────────────────────────────────── */}
        <FadeUp>
          <div className="max-w-5xl mx-auto text-center space-y-8 border-t border-slate-200 pt-24">
            <h2
              className="text-4xl md:text-5xl font-extrabold text-slate-900"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Our Vision
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 font-medium">
              To nurture a community of intellectually curious and ethically grounded learners who
              explore{" "}
              <span className="text-indigo-600 font-semibold">Artificial Intelligence</span> with
              depth, responsibility, and purpose.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 font-medium">
              We aim to empower students to{" "}
              <span className="font-semibold text-slate-800">think critically</span>,{" "}
              <span className="font-semibold text-slate-800">learn collaboratively</span>, and apply
              AI knowledge to create{" "}
              <span className="text-indigo-600 font-semibold">meaningful real-world impact</span> —
              locally, globally, and sustainably.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
