import React from 'react';
import { Award, BookOpen, Target, ShieldCheck, GraduationCap, Lightbulb, Users, Zap } from 'lucide-react';
import hodPhoto from "../assets/hod-vivek-waghmare.jpg";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen bg-[#f8faff] text-slate-800 overflow-hidden font-sans">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-blue-400/10 blur-[130px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-indigo-400/10 blur-[130px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32 relative z-10">

        {/* PAGE INTRO */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-slate-900">
            About<span className="text-blue-600">_</span>
          </h1>
          <p className="max-w-3xl mx-auto text-blue-600 font-bold tracking-widest uppercase text-lg">
            Walchand College of Engineering • Dept. of AI & ML • ASTRA Club
          </p>
        </div>

        {/* ABOUT WCE */}
        <div className="space-y-12">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-blue-100 bg-white shadow-sm text-blue-600 text-xs font-bold uppercase tracking-widest">
            <GraduationCap size={16} />
            <span>The Legacy</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Walchand College of Engineering, Sangli
          </h2>

          <div className="grid gap-12 md:grid-cols-2 items-start">
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              Established in <span className="text-slate-900 font-bold">1947</span>, Walchand College of Engineering (WCE), Sangli,
              stands as a beacon of excellence in engineering education.
            </p>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              With a strong focus on academic rigor and cutting-edge research,
              WCE empowers students to contribute meaningfully to a rapidly evolving global landscape.
            </p>
          </div>

          {/* WCE HIGHLIGHTS */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "75+ Years of Excellence",
              "Autonomous Status",
              "NBA & NAAC Accredited",
              "Advanced Research Labs",
              "Robust Placement Ecosystem",
              "Vibrant Campus Life"
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 rounded-3xl bg-blue-400/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 p-6 rounded-3xl bg-white border border-slate-200 shadow-[0_10px_25px_rgba(15,23,42,0.08)] transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    <p className="font-bold text-slate-800">{item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HOD SECTION */}
        <div className="relative group">
          <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-[0_30px_70px_rgba(59,130,246,0.12)]">
            <div className="shrink-0 relative">
              <div className="absolute -inset-2 bg-linear-to-tr from-blue-500 to-indigo-400 rounded-4xl blur opacity-10 group-hover:opacity-20 transition duration-500" />
              <img
                src={hodPhoto}
                alt="Dr. Vivek Nivrutirao Waghmare"
                className="relative h-60 w-80 md:h-64 md:w-96 rounded-3xl object-cover border-4 border-white shadow-lg"
              />
            </div>

            <div className="space-y-6 text-center md:text-left">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-1">
                  Dr. Vivek Nivrutirao Waghmare
                </h3>
                <p className="text-blue-600 font-bold uppercase text-sm tracking-widest">
                  Professor & Head, AIML Department
                </p>
              </div>

              <p className="text-slate-500 leading-relaxed text-lg max-w-2xl font-medium">
                "With over 15 years of teaching and research experience, Dr. Waghmare provides 
                the academic leadership required to bridge the gap between classroom theory and 
                frontier AI research."
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <span className="px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-700 font-bold">
                  15+ Years Exp.
                </span>
                <span className="px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-700 font-bold">
                  Patent Holder
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DEPARTMENT OBJECTIVES (EVENTS STYLE) ================= */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-center text-slate-900">
            Department Objectives
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              { text: "Industry-Relevant Education", icon: <ShieldCheck className="w-5 h-5" /> },
              { text: "Research & Innovation", icon: <Lightbulb className="w-5 h-5" /> },
              { text: "Lifelong Learning", icon: <BookOpen className="w-5 h-5" /> },
              { text: "Global Competence", icon: <Target className="w-5 h-5" /> },
              { text: "Ethical AI Solutions", icon: <Award className="w-5 h-5" /> },
              { text: "Mentorship & Engagement", icon: <Users className="w-5 h-5" /> },
              { text: "Entrepreneurship", icon: <Zap className="w-5 h-5" /> },
              { text: "Academic Excellence", icon: <GraduationCap className="w-5 h-5" /> },
            ].map((obj, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-[2.25rem] bg-white/70 backdrop-blur-xl border border-white
                transition-all duration-500 hover:-translate-y-2
                shadow-[0_20px_50px_rgba(59,130,246,0.08)]
                hover:shadow-[0_30px_60px_rgba(59,130,246,0.15)]
                flex flex-col justify-between"
              >
                {/* Icon badge (like status badge) */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-white/50 text-blue-600 text-xs font-bold uppercase tracking-widest">
                    {obj.icon}
                    Objective
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {obj.text}
                </h3>

                {/* Bottom decorative line */}
                <div className="mt-8 w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full transition-all duration-700 bg-linear-to-r from-transparent via-blue-500 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ASTRA SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center border-t border-slate-200 pt-32">
          <div className="space-y-8">
            <h2 className="text-6xl font-black text-slate-900 tracking-tighter uppercase">ASTRA</h2>
            <p className="text-2xl text-blue-600 font-bold italic">
              “Think Deep. Learn Together. Build Intelligent Futures.”
            </p>
          </div>

          <div className="p-10 bg-blue-600 text-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(37,99,235,0.2)]">
            <h4 className="text-xl font-bold uppercase tracking-widest">Our Vision</h4>
            <p className="text-blue-50 text-lg italic leading-relaxed">
              "To be a center of excellence in Artificial Intelligence and Machine Learning education, research, and innovation."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
