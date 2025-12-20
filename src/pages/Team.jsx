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
    icon: <Brain className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Active Participation",
    desc: "Engaging in intensive workshops, study groups, and hands-on activities organized by the club.",
    icon: <Sparkles className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Collaborative Growth",
    desc: "Sharing knowledge and experiences through peer-to-peer learning to grow as a community.",
    icon: <Users className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Exploration & Exposure",
    desc: "Gaining early exposure to research papers, high-impact projects, and emerging tech.",
    icon: <Globe className="w-6 h-6 text-blue-500" />
  }
];

const associateRoles = [
  {
    role: "Secretary",
    desc: "Handles official documentation, communication, and departmental coordination.",
    icon: <FileText className="w-6 h-6 text-blue-600" />
  },
  {
    role: "Technical Head",
    desc: "Oversees technical learning, workshop quality, and project architectures.",
    icon: <Terminal className="w-6 h-6 text-blue-600" />
  },
  {
    role: "Public Relations Officer",
    desc: "Manages outreach, external communication, and ASTRA's public presence.",
    icon: <Megaphone className="w-6 h-6 text-blue-600" />
  },
  {
    role: "Club Service Director",
    desc: "Coordinates mentorship programs and ensures inclusive learning initiatives.",
    icon: <HeartHandshake className="w-6 h-6 text-blue-600" />
  },
  {
    role: "Web Developer",
    desc: "Designs and maintains the official ASTRA digital platforms and web architecture.",
    icon: <Code className="w-6 h-6 text-blue-600" />
  },
  {
    role: "Art & Design Team",
    desc: "Crafts the visual branding and creative identity of ASTRA across all media.",
    icon: <Palette className="w-6 h-6 text-blue-600" />
  },
  {
    role: "Treasurer",
    desc: "Manages financial budgeting, expense tracking, and club fund transparency.",
    icon: <Wallet className="w-6 h-6 text-blue-600" />
  }
];

export default function Team() {
  return (
    <section id="team" className="relative min-h-screen bg-[#f8faff] text-slate-800 overflow-hidden font-sans">
      
      {/* Background Decorative Glows - Adjusted for Light Mode */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-150 bg-blue-400/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-8 py-24 space-y-24">

        {/* ================= PAGE INTRO (Left Aligned like Image) ================= */}
        <div className="space-y-4 max-w-4xl">
          <p className="text-slate-600 text-lg font-medium leading-relaxed">
            ASTRA is powered by a dedicated collective of students at <span className="text-slate-900 font-bold">Walchand College of Engineering</span>, 
            working to push the boundaries of Artificial Intelligence.
          </p>
        </div>

        {/* ================= MEMBER BOARD ================= */}
        <div className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Member Board <span className="text-slate-400 font-light">(First Year)</span>
            </h2>
            <p className="max-w-2xl text-slate-500 font-medium">
              The foundation of ASTRA. These members represent the future of the club, 
              actively developing their theoretical and practical AI & ML foundations.
            </p>
          </div>

          <SwipeRow>
            {memberValues.map((item, i) => (
              <div
                key={i}
                className="min-w-85 bg-white/70 backdrop-blur-xl border border-white rounded-[2.5rem] p-10
                  snap-center hover:scale-[1.02] transition-all duration-300 group 
                  shadow-[0_20px_50px_rgba(59,130,246,0.12)]"
              >
                <div className="mb-8 p-4 w-fit rounded-2xl bg-blue-50/80 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </SwipeRow>
        </div>

        {/* ================= ASSOCIATE BOARD ================= */}
        <div className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Associate Board
            </h2>
            <p className="max-w-2xl text-slate-500 font-medium">
              Our leadership team. Responsible for managing operations, guiding technical 
              initiatives, and maintaining the vision of the department.
            </p>
          </div>

          <SwipeRow>
            {associateRoles.map((item, i) => (
              <div
                key={i}
                className="min-w-85 bg-white/70 backdrop-blur-xl border border-white rounded-[2.5rem] p-10
                  snap-center hover:scale-[1.02] transition-all duration-300 group
                  shadow-[0_20px_50px_rgba(59,130,246,0.12)]"
              >
                <div className="mb-8 p-4 w-fit rounded-2xl bg-blue-50/80 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.role}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
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