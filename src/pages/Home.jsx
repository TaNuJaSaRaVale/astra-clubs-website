import React from 'react';
import { BookOpen, Users, Code, Search, Presentation, Briefcase, Zap, ArrowRight } from 'lucide-react';

const features = [
  {
    title: "Theoretical Foundations",
    desc: "Deep diving into the mathematical core of neural networks and algorithms.",
    icon: <BookOpen className="w-5 h-5" />,
    color: "text-blue-400",
    bg: "bg-blue-500/10"
  },
  {
    title: "Peer-to-Peer Learning",
    desc: "Knowledge sharing sessions where students teach students.",
    icon: <Users className="w-5 h-5" />,
    color: "text-purple-400",
    bg: "bg-purple-500/10"
  },
  {
    title: "Hands-on Projects",
    desc: "Building real-world applications from Computer Vision to LLMs.",
    icon: <Code className="w-5 h-5" />,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10"
  },
  {
    title: "Research Orientation",
    desc: "Fostering a culture of reading and publishing technical papers.",
    icon: <Search className="w-5 h-5" />,
    color: "text-amber-400",
    bg: "bg-amber-500/10"
  },
  {
    title: "Workshops & Sessions",
    desc: "Regular bootcamps and expert talks on emerging AI trends.",
    icon: <Presentation className="w-5 h-5" />,
    color: "text-rose-400",
    bg: "bg-rose-500/10"
  },
  {
    title: "Industry Readiness",
    desc: "Preparing for AI roles with mock interviews and portfolio building.",
    icon: <Briefcase className="w-5 h-5" />,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10"
  },
];

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen bg-[#020617] text-slate-200 overflow-hidden font-sans">
      
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-30" 
           style={{ backgroundImage: `radial-gradient(circle at 50% 50%, #1e293b 0%, transparent 70%)` }}>
      </div>

      {/* Background Decorative Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
      
      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32 space-y-32">
        
        {/* Hero Section */}
        <div className="text-center space-y-10 max-w-5xl mx-auto">
          {/* Institution Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-indigo-400 text-[10px] uppercase tracking-[0.2em] font-bold">
            <Zap size={12} className="fill-current" />
            <span>Walchand College of Engineering</span>
          </div>
          
          {/* Clean Title - No Dots */}
          <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-white leading-none">
            ASTRA
          </h1>
          
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-medium text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Association of Students for <span className="text-indigo-400">Theoretical Reasoning</span> in AI
            </p>
            <p className="max-w-xl mx-auto text-base text-slate-500 leading-relaxed">
              Advancing the frontier of intelligence through rigorous research, 
              collaborative learning, and real-world implementation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <button className="group px-10 py-4 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
              Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-white font-bold rounded-2xl transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#0f172a]/40 border border-slate-800/60 rounded-3xl p-8 hover:bg-[#0f172a]/80 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className={`mb-6 p-4 w-fit rounded-2xl ${item.bg} ${item.color} group-hover:scale-105 transition-transform duration-300`}>
                {item.icon}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}