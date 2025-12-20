import React from 'react';
import { Calendar, CheckCircle2, Rocket, Timer, Zap, ArrowUpRight } from 'lucide-react';

const events = [
  {
    title: "GIM 2K25 – General Interest Meet",
    desc: "The massive inaugural event that defined ASTRA’s vision, introduced our core AI domains, and welcomed the next generation of innovators.",
    status: "Completed",
    type: "Event",
    icon: <CheckCircle2 className="w-5 h-5" />,
    color: "text-emerald-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]"
  },
  {
    title: "Intra-Club ML Project Development",
    desc: "A high-intensity building phase where club members collaborate on real-world ML models, focusing on data engineering and model optimization.",
    status: "Planned",
    type: "Workshop",
    icon: <Timer className="w-5 h-5" />,
    color: "text-amber-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]"
  },
  {
    title: "ASTRA ML Services & Learning",
    desc: "An open initiative providing cross-departmental ML mentorship, helping students from all branches integrate AI into their specific fields.",
    status: "Planned",
    type: "Initiative",
    icon: <Rocket className="w-5 h-5" />,
    color: "text-indigo-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
  }
];

export default function Events() {
  return (
    <section id="events" className="relative min-h-screen bg-[#020617] text-slate-300 py-24 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-20">
        
        {/* PAGE HEADER */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]">
            <Calendar size={14} />
            <span>Timeline</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none">
            Events at <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">ASTRA</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed">
            From technical deep-dives to collaborative research sprints, explore the 
            milestones that define the ASTRA experience.
          </p>
        </div>

        {/* EVENTS GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-[2.5rem] bg-[#0f172a]/40 border border-slate-800/50 
              transition-all duration-500 hover:-translate-y-2 hover:bg-[#0f172a]/70 hover:border-slate-700 
              flex flex-col justify-between ${event.glow}`}
            >
              <div>
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-8">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold uppercase tracking-widest ${event.color}`}>
                    {event.icon}
                    {event.status}
                  </div>
                  <button className="p-2 rounded-full bg-white/5 border border-white/5 text-slate-500 group-hover:text-white group-hover:bg-indigo-600 transition-all">
                    <ArrowUpRight size={18} />
                  </button>
                </div>

                <span className="text-xs font-bold text-slate-600 uppercase tracking-[0.3em] mb-3 block italic">
                  {event.type}
                </span>
                
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-indigo-400 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {event.desc}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                 <div className={`h-full w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-transparent via-indigo-500 to-transparent`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="pt-20 text-center">
           <div className="p-12 rounded-[3rem] bg-gradient-to-b from-indigo-500/5 to-transparent border border-indigo-500/10">
              <Zap className="mx-auto mb-6 text-indigo-500 fill-indigo-500/20" size={40} />
              <h2 className="text-3xl font-bold text-white mb-4 italic">Have an event idea?</h2>
              <p className="text-slate-500 mb-8 max-w-md mx-auto">We are always looking for new domains to explore. Pitch your workshop or session to the core team.</p>
              <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-indigo-50 transition-all active:scale-95">
                Propose an Event
              </button>
           </div>
        </div>

      </div>
    </section>
  );
}