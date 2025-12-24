import React from "react";
import {
  GraduationCap,
  Users,
  Target,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Globe,
} from "lucide-react";
import hodPhoto from "../assets/hod-vivek-waghmare.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#f8faff] text-slate-800 overflow-hidden font-sans"
    >
      {/* Soft Background */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-blue-400/10 blur-[130px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-indigo-400/10 blur-[130px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32 relative z-10">

        {/* ================= PAGE INTRO ================= */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-slate-900">
            About Us
          </h1>
          <p className="max-w-3xl mx-auto text-blue-600 font-bold tracking-widest uppercase text-lg">
            Walchand College of Engineering • ASTRA 
          </p>
        </div>

        {/* ================= WCE (MINI INFO) ================= */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-100 bg-white shadow-sm text-blue-600 text-xs font-bold uppercase tracking-widest">
            <GraduationCap size={16} />
            <span>
Legacy</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Walchand College of Engineering, Sangli
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed font-medium">
            Established in <strong>1947</strong>, Walchand College of Engineering
            (WCE), Sangli, is a premier autonomous institution known for academic
            rigor, strong research culture, and a vibrant campus ecosystem.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed font-medium">
            With NBA & NAAC accreditation, advanced laboratories, and a robust
            placement ecosystem, WCE provides an ideal environment for
            innovation-driven learning and professional growth.
          </p>
        </div>

        {/* ================= ASTRA CLUB ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">
              ASTRA
            </h2>

            <p className="text-xl text-blue-600 font-bold">
              Association of Students for Theoretical Reasoning in AI
            </p>

            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              ASTRA is the official departmental club of the Artificial
              Intelligence & Machine Learning department at WCE. The club serves
              as a collaborative platform where students strengthen theoretical
              foundations, explore advanced AI concepts, and translate ideas
              into impactful applications.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Through peer-to-peer learning, workshops, discussions, and club
              services, ASTRA nurtures analytical thinking, research mindset,
              and industry readiness among students.
            </p>
          </div>

          {/* HOD CARD */}
          <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] p-8 md:p-12 shadow-[0_30px_70px_rgba(59,130,246,0.12)]">
            <div className="flex flex-col items-center text-center gap-6">
              <img
                src={hodPhoto}
                alt="Dr. Vivek Nivrutirao Waghmare"
                className="h-56 w-72 rounded-3xl object-cover border-4 border-white shadow-lg"
              />

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Dr. Vivek Nivrutirao Waghmare
                </h3>
                <p className="text-blue-600 font-bold uppercase text-sm tracking-widest">
                  Professor & Head, AIML Department
                </p>
              </div>

              <p className="text-slate-600 leading-relaxed font-medium">
                With over 15 years of teaching and research experience, Dr.
                Waghmare provides academic leadership and strategic direction
                for the department and ASTRA club initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* ================= ASTRA OBJECTIVES ================= */}
        <div className="space-y-14">
          <h2 className="text-4xl font-bold text-center text-slate-900">
             Club's Objectives
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                text: "Build strong theoretical foundations in AI & ML",
                icon: <ShieldCheck className="w-5 h-5" />,
              },
              {
                text: "Promote peer-to-peer and collaborative learning",
                icon: <Users className="w-5 h-5" />,
              },
              {
                text: "Encourage research mindset and paper discussions",
                icon: <Lightbulb className="w-5 h-5" />,
              },
              {
                text: "Develop industry-ready skills through projects",
                icon: <Rocket className="w-5 h-5" />,
              },
              {
                text: "Enable ethical, responsible AI thinking",
                icon: <Target className="w-5 h-5" />,
              },
              {
                text: "Foster leadership and community engagement",
                icon: <Globe className="w-5 h-5" />,
              },
            ].map((obj, i) => (
              <div
                key={i}
                className="p-8 rounded-[2.25rem] bg-white/70 backdrop-blur-xl border border-white
                shadow-[0_20px_50px_rgba(59,130,246,0.08)]
                hover:-translate-y-2 transition-all"
              >
                <div className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest">
                  {obj.icon}
                </div>
                <p className="text-lg font-bold text-slate-900">
                  {obj.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= VISION ================= */}
      <div className="max-w-5xl mx-auto text-center space-y-8 border-t border-slate-200 pt-24">
  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
    Our Vision
  </h2>

  <p className="text-lg md:text-xl leading-relaxed text-slate-600 font-medium">
    To nurture a community of intellectually curious and ethically grounded learners
    who explore <span className="text-blue-600 font-semibold">Artificial Intelligence</span> with depth, responsibility, and purpose.
  </p>

  <p className="text-lg md:text-xl leading-relaxed text-slate-600 font-medium">
    We aim to empower students to <span className="font-semibold text-slate-800">think critically</span>,
    <span className="font-semibold text-slate-800"> learn collaboratively</span>, and apply AI knowledge
    to create <span className="text-indigo-600 font-semibold">meaningful real-world impact</span>
    — locally, globally, and sustainably.
  </p>
</div>


      </div>
    </section>
  );
}
