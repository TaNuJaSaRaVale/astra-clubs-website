import React from 'react';
import { BookOpen, Users, Code, Search, Presentation, Briefcase, ArrowRight, Sparkles } from 'lucide-react';

const features = [
  {
    title: "Theoretical Foundations",
    desc: "Deep diving into the mathematical core of neural networks and algorithms.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Peer-to-Peer Learning",
    desc: "Knowledge sharing sessions where students teach students.",
    icon: <Users className="w-6 h-6" />,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Hands-on Projects",
    desc: "Building real-world applications from Computer Vision to LLMs.",
    icon: <Code className="w-6 h-6" />,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Research Orientation",
    desc: "Fostering a culture of reading and publishing technical papers.",
    icon: <Search className="w-6 h-6" />,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Workshops & Sessions",
    desc: "Regular bootcamps and expert talks on emerging AI trends.",
    icon: <Presentation className="w-6 h-6" />,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Industry Readiness",
    desc: "Preparing for AI roles with mock interviews and portfolio building.",
    icon: <Briefcase className="w-6 h-6" />,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
];

export default function Home() {

  const scrollToAbout = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-[#f8faff] text-slate-800 overflow-hidden font-sans">

      {/* Background */}
      <div className="absolute top-[-20%] left-[-10%] w-200 h-200 bg-blue-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-[-5%] w-150 h-150 bg-indigo-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_0.5px,transparent_0.5px)] bg-size-[40px_40px] opacity-30 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-40 space-y-48">

        {/* HERO */}
        <div className="text-center space-y-12 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-slate-200 bg-white/40 backdrop-blur-xl shadow-sm text-slate-500 text-[10px] uppercase tracking-[0.3em] font-bold">
            <Sparkles size={12} className="text-blue-500" />
            <span>Walchand College of Engineering</span>
          </div>

          <div className="relative py-4">
            <h1
              className="text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter leading-none
              bg-clip-text text-transparent bg-linear-to-r from-slate-900 to-blue-600"
            >
              ASTRA
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-blue-400/5 blur-[80px] -z-10 rounded-full" />
          </div>

          <div className="space-y-8">
            <p className="text-xl md:text-2xl font-semibold text-slate-600 max-w-2xl mx-auto">
              Association of Students for <span className="text-blue-600">Theoretical Reasoning</span> in AI
            </p>
            <p className="max-w-xl mx-auto text-base text-slate-400 font-medium">
              Advancing the frontier of intelligence through rigorous research, collaborative learning, and practical implementation.
            </p>
          </div>

          <div className="flex justify-center pt-10">
            <button
              onClick={scrollToAbout}
              className="group px-12 py-4 bg-slate-900 text-white font-bold rounded-2xl transition-all hover:bg-blue-600 hover:shadow-[0_20px_40px_rgba(37,99,235,0.2)] active:scale-95 flex items-center gap-3"
            >
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* FEATURES GRID WITH VIDEO-LIKE HOVER */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto pb-24">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-[2.5rem] p-10 bg-white/60 backdrop-blur-xl border border-white
              transition-all duration-500 hover:-translate-y-3
              shadow-[0_20px_50px_rgba(59,130,246,0.06)] hover:shadow-[0_40px_80px_rgba(37,99,235,0.18)]"
            >

              {/* HOVER GLOW LAYER */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* CONTENT */}
              <div className="relative z-10">
                <div className={`mb-8 p-4 w-fit rounded-2xl ${item.bg} ${item.color} border border-blue-50
                  transition-all duration-500 group-hover:scale-110 group-hover:shadow-md`}>
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>

                <div className="mt-8 w-8 h-1 bg-slate-200 rounded-full group-hover:w-full group-hover:bg-blue-500 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
