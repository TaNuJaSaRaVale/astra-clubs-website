import React from 'react';
import { Calendar, CheckCircle2, Rocket, Timer, Zap, ArrowUpRight } from 'lucide-react';

const events = [
  {
    title: "GIM 2K25 – General Interest Meet",
    desc: "The massive inaugural event that defined ASTRA’s vision, introduced our core AI domains, and welcomed the next generation of innovators.",
    status: "Completed",
    type: "Event",
    icon: <CheckCircle2 className="w-5 h-5" />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    glow: "group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)]"
  },
  {
    title: "Club Service – ML Foundation",
    desc: "A structured club service initiative focused on strengthening core Machine Learning foundations through guided sessions, conceptual clarity, and collaborative learning for all members.",
    status: "Planned",
    type: "Club Service",
    icon: <Timer className="w-5 h-5" />,
    color: "text-amber-600",
    bg: "bg-amber-50",
    glow: "group-hover:shadow-[0_20px_40px_rgba(245,158,11,0.1)]"
  },
  {
    title: "ASTRA ML Services & Learning",
    desc: "An open initiative providing cross-departmental ML mentorship, helping students from all branches integrate AI into their specific fields.",
    status: "Planned",
    type: "Initiative",
    icon: <Rocket className="w-5 h-5" />,
    color: "text-blue-600",
    bg: "bg-blue-50",
    glow: "group-hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)]"
  }
];


export default function Events() {
  return (
    <section id="events" className="relative min-h-screen bg-[#f8faff] text-slate-800 py-24 overflow-hidden font-sans">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-175 h-175 bg-blue-400/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/10 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-20">
        
        {/* PAGE HEADER */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-100 bg-white shadow-sm text-blue-600 text-xs font-bold uppercase tracking-[0.2em]">
            <Calendar size={14} />
            <span>Timeline</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
            Events 
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 font-medium leading-relaxed">
            From technical deep-dives to collaborative research sprints, explore the 
            milestones that define the ASTRA experience.
          </p>
        </div>

        {/* EVENTS GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group relative p-10 rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-white 
              transition-all duration-500 hover:-translate-y-2 
              flex flex-col justify-between shadow-[0_20px_50px_rgba(59,130,246,0.08)] ${event.glow}`}
            >
              <div>
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-8">
                  <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full ${event.bg} border border-white/50 text-[10px] font-bold uppercase tracking-widest ${event.color}`}>
                    {event.icon}
                    {event.status}
                  </div>
                  <button className="p-2.5 rounded-full bg-slate-50 border border-slate-100 text-slate-400 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-all shadow-sm">
                    <ArrowUpRight size={18} />
                  </button>
                </div>

                <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-3 block italic">
                  {event.type}
                </span>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                  {event.desc}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                 <div className={`h-full w-0 group-hover:w-full transition-all duration-700 bg-linear-to-r from-transparent via-blue-500 to-transparent`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="pt-20 text-center">
            <div className="p-16 rounded-[3.5rem] bg-white/80 backdrop-blur-xl border border-white shadow-[0_30px_60px_rgba(59,130,246,0.1)] max-w-4xl mx-auto">
              <div className="p-4 bg-blue-50 w-fit mx-auto rounded-2xl mb-8">
                <Zap className="text-blue-600 fill-blue-600/20" size={40} />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 italic tracking-tight">Have an event idea?</h2>
              <p className="text-slate-500 mb-10 max-w-md mx-auto text-lg font-medium">We are always looking for new domains to explore. Pitch your workshop or session to the core team.</p>
              <a
  href="#contact"
  className="inline-block px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl 
  hover:bg-blue-600 transition-all shadow-xl active:scale-95"
>
  Propose an Event
</a>
            </div>
        </div>

      </div>
    </section>
  );
}