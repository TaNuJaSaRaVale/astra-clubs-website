import React from 'react';
import { 
  Brain, Users, Sprout, Globe, FileText, Terminal, 
  Megaphone, HeartHandshake, Code, Palette, Wallet, Sparkles 
} from "lucide-react";
import SwipeRow from "../components/SwipeRow";

const memberValues = [
  {
    title: "Learning & Skill Development",
    desc: "Building strong fundamentals in AI, ML, and the mathematical concepts behind neural networks.",
    icon: <Brain className="w-6 h-6 text-indigo-400" />
  },
  {
    title: "Active Participation",
    desc: "Engaging in intensive workshops, study groups, and hands-on activities organized by the club.",
    icon: <Sparkles className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Collaborative Growth",
    desc: "Sharing knowledge and experiences through peer-to-peer learning to grow as a community.",
    icon: <Users className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Exploration & Exposure",
    desc: "Gaining early exposure to research papers, high-impact projects, and emerging tech.",
    icon: <Globe className="w-6 h-6 text-emerald-400" />
  }
];

const associateRoles = [
  {
    role: "Secretary",
    desc: "Handles official documentation, communication, and departmental coordination.",
    icon: <FileText className="w-6 h-6" />
  },
  {
    role: "Technical Head",
    desc: "Oversees technical learning, workshop quality, and project architectures.",
    icon: <Terminal className="w-6 h-6" />
  },
  {
    role: "Public Relations Officer",
    desc: "Manages outreach, external communication, and ASTRA's public presence.",
    icon: <Megaphone className="w-6 h-6" />
  },
  {
    role: "Club Service Director",
    desc: "Coordinates mentorship programs and ensures inclusive learning initiatives.",
    icon: <HeartHandshake className="w-6 h-6" />
  },
  {
    role: "Web Developer",
    desc: "Designs and maintains the official ASTRA digital platforms and web architecture.",
    icon: <Code className="w-6 h-6" />
  },
  {
    role: "Art & Design Team",
    desc: "Crafts the visual branding and creative identity of ASTRA across all media.",
    icon: <Palette className="w-6 h-6" />
  },
  {
    role: "Treasurer",
    desc: "Manages financial budgeting, expense tracking, and club fund transparency.",
    icon: <Wallet className="w-6 h-6" />
  }
];

export default function Team() {
  return (
    <section id="team" className="relative min-h-screen bg-[#020617] text-slate-300 overflow-hidden font-sans">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

        {/* ================= PAGE INTRO ================= */}
        <div className="text-center space-y-6">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-white">
            Our Team<span className="text-indigo-500">_</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-400 leading-relaxed">
            ASTRA is powered by a dedicated collective of students at <span className="text-white font-semibold">Walchand College of Engineering</span>, 
            working to push the boundaries of Artificial Intelligence.
          </p>
        </div>

        {/* ================= MEMBER BOARD ================= */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Member Board <span className="text-slate-500 font-light">(First Year)</span>
            </h2>
            <p className="max-w-3xl text-slate-400 leading-relaxed">
              The foundation of ASTRA. These members represent the future of the club, 
              actively developing their theoretical and practical AI & ML foundations.
            </p>
          </div>

          <SwipeRow>
            {memberValues.map((item, i) => (
              <div
                key={i}
                className="min-w-[320px] bg-[#0f172a]/40 backdrop-blur-md border border-slate-800 rounded-3xl p-8
                  snap-center hover:border-indigo-500/30 transition-all duration-300 group shadow-2xl"
              >
                <div className="mb-6 p-4 w-fit rounded-2xl bg-slate-900/80 border border-slate-800 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </SwipeRow>
        </div>

        {/* ================= ASSOCIATE BOARD ================= */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Associate Board
            </h2>
            <p className="max-w-3xl text-slate-400 leading-relaxed">
              Our leadership team. Responsible for managing operations, guiding technical 
              initiatives, and maintaining the vision of the department.
            </p>
          </div>

          <SwipeRow>
            {associateRoles.map((item, i) => (
              <div
                key={i}
                className="min-w-[320px] bg-[#0f172a]/40 backdrop-blur-md border border-slate-800 rounded-3xl p-8
                  snap-center hover:border-indigo-500/30 transition-all duration-300 group shadow-2xl"
              >
                <div className="mb-6 p-4 w-fit rounded-2xl bg-indigo-500/5 border border-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.role}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </SwipeRow>
        </div>

      </div>
    </section>
  );
}