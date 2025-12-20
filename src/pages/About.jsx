import React from 'react';
import { Award, BookOpen, Target, ShieldCheck, GraduationCap, Lightbulb, Users, Zap } from 'lucide-react';
import hodPhoto from "../assets/hod-vivek-waghmare.jpg";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen bg-[#020617] text-slate-300 overflow-hidden font-sans">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32 relative z-10">

        {/* ================= PAGE INTRO ================= */}
        <div className="text-center space-y-6">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-white">
            About<span className="text-indigo-500">_</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-indigo-400 font-medium tracking-wide uppercase text-sm">
            Walchand College of Engineering • Dept. of AI & ML • ASTRA Club
          </p>
        </div>

        {/* ================= ABOUT WCE ================= */}
        <div className="space-y-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-indigo-400 text-xs font-bold uppercase tracking-widest">
             <GraduationCap size={16} />
             <span>The Legacy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Walchand College of Engineering, Sangli
          </h2>

          <div className="grid gap-12 md:grid-cols-2 items-start">
            <p className="text-slate-400 text-lg leading-relaxed">
              Established in <span className="text-white font-semibold">1947</span>, Walchand College of Engineering (WCE), Sangli,
              stands as a beacon of excellence in engineering education. As a
              premier autonomous institution, WCE seamlessly blends tradition with innovation to create a holistic
              learning environment.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              With a strong focus on academic rigor and cutting-edge research,
              WCE empowers students to contribute meaningfully to a rapidly evolving global
              landscape.
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
              <div key={i} className="group p-6 bg-[#0f172a]/40 border border-slate-800/50 rounded-2xl hover:border-indigo-500/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform" />
                  <p className="font-semibold text-slate-200">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= HOD SECTION ================= */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 blur-3xl rounded-3xl -z-10" />
          <div className="bg-[#0f172a]/60 backdrop-blur-md border border-slate-800 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="shrink-0 relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <img
                src={hodPhoto}
                alt="Dr. Vivek Nivrutirao Waghmare"
                className="relative h-60 w-100 rounded-2xl object-cover border-2 border-slate-800"
              />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <div>
                <h3 className="text-3xl font-bold text-white mb-1">Dr. Vivek Nivrutirao Waghmare</h3>
                <p className="text-indigo-400 font-medium">Professor & Head, AIML Department</p>
              </div>
              <p className="text-slate-400 leading-relaxed text-lg max-w-2xl">
                "With over 15 years of teaching and research experience, Dr. Waghmare provides 
                the academic leadership required to bridge the gap between classroom theory and 
                frontier AI research."
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                 <span className="px-4 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 font-bold">15+ Years Exp.</span>
                 <span className="px-4 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300 font-bold">Patent Holder</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= OBJECTIVES GRID ================= */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-center text-white">Department Objectives</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { text: "Industry-Relevant Education", icon: <ShieldCheck size={20}/> },
              { text: "Research & Innovation", icon: <Lightbulb size={20}/> },
              { text: "Lifelong Learning", icon: <BookOpen size={20}/> },
              { text: "Global Competence", icon: <Target size={20}/> },
              { text: "Ethical AI Solutions", icon: <Award size={20}/> },
              { text: "Mentorship & Engagement", icon: <Users size={20}/> },
              { text: "Entrepreneurship", icon: <Zap size={20}/> },
              { text: "Academic Excellence", icon: <GraduationCap size={20}/> },
            ].map((obj, i) => (
              <div key={i} className="p-6 bg-[#0f172a]/30 border border-slate-800/50 rounded-2xl hover:bg-slate-800/40 transition-all flex flex-col gap-4">
                <div className="text-indigo-500">{obj.icon}</div>
                <p className="font-medium text-slate-300 text-sm leading-snug">{obj.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= ASTRA SECTION ================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-center border-t border-slate-800 pt-32">
          <div className="space-y-8">
            <h2 className="text-5xl font-black text-white tracking-tighter uppercase">ASTRA</h2>
            <div className="space-y-4">
               <p className="text-xl text-indigo-400 font-semibold italic">“Think Deep. Learn Together. Build Intelligent Futures.”</p>
               <p className="text-slate-400 leading-relaxed">
                 Established in 2025, ASTRA is the official pulse of the AIML department. 
                 We aren't just a club; we are a community focused on theoretical depth and 
                 practical mastery.
               </p>
            </div>
          </div>
          <div className="p-8 bg-indigo-600/5 border border-indigo-500/20 rounded-3xl space-y-4">
            <h4 className="text-white font-bold">Our Vision</h4>
            <p className="text-slate-400 text-sm italic">
              "To be a center of excellence in Artificial Intelligence and Machine Learning 
              education, research, and innovation, nurturing globally competent and ethical professionals."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}