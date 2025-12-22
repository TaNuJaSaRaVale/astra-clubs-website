import React from "react";
import {
  Brain,
  Users,
  Globe,
  FileText,
  Terminal,
  Megaphone,
  HeartHandshake,
  Code,
  Palette,
  Wallet,
  Sparkles
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
    desc: "Engaging in workshops, study groups, and hands-on technical activities organized by ASTRA.",
    icon: <Sparkles className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Collaborative Growth",
    desc: "Sharing knowledge through peer-to-peer learning and collaborative problem-solving.",
    icon: <Users className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Exploration & Exposure",
    desc: "Early exposure to research papers, impactful projects, and emerging AI technologies.",
    icon: <Globe className="w-6 h-6 text-blue-600" />
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
    desc: "Oversees technical learning paths, workshops, and project architectures.",
    icon: <Terminal className="w-6 h-6 text-blue-600" />
  },
  {
    role: "Public Relations Officer",
    desc: "Manages outreach, partnerships, and ASTRA’s public presence.",
    icon: <Megaphone className="w-6 h-6 text-blue-600" />
  },
  {
    role: "Club Service Director",
    desc: "Coordinates mentorship initiatives and inclusive learning programs.",
    icon: <HeartHandshake className="w-6 h-6 text-blue-600" />
  },
  {
    role: "Web Developer",
    desc: "Designs and maintains ASTRA’s official web platforms.",
    icon: <Code className="w-6 h-6 text-blue-600" />
  },
  {
    role: "Art & Design Team",
    desc: "Builds ASTRA’s visual branding and creative identity.",
    icon: <Palette className="w-6 h-6 text-blue-600" />
  },
  {
    role: "Treasurer",
    desc: "Manages budgeting, expenses, and financial transparency.",
    icon: <Wallet className="w-6 h-6 text-blue-600" />
  }
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative min-h-screen bg-[#f8faff] text-slate-800 py-24 overflow-hidden font-sans"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-blue-400/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-400/10 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-24">

        {/* ================= INTRO TEXT (KEPT) ================= */}
        <p className="max-w-4xl mx-auto text-center text-lg text-slate-500 font-medium leading-relaxed">
          ASTRA is powered by a dedicated collective of students at{" "}
          <span className="text-slate-900 font-bold">
            Walchand College of Engineering
          </span>
          , united to push the boundaries of{" "}
          <span className="text-slate-900 font-semibold">
            Artificial Intelligence
          </span>.
        </p>

        {/* ================= MEMBER BOARD ================= */}
        <div className="space-y-10">
          <h2 className="text-5xl font-black text-slate-900 tracking-tight text-center">
            Member Board{" "}
            <span className="text-slate-400 font-light">(First Year)</span>
          </h2>

          <SwipeRow>
            {memberValues.map((item, i) => (
              <div
                key={i}
                className="min-w-[420px] h-[320px]
                bg-white/70 backdrop-blur-xl border border-white
                rounded-[2.5rem] p-10 snap-center
                flex flex-col justify-between
                group transition-all duration-500
                hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(59,130,246,0.12)]"
              >
                <div>
                  <div className="mb-6 p-5 w-fit rounded-2xl bg-blue-50 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </div>
              </div>
            ))}
          </SwipeRow>
        </div>

        {/* ================= ASSOCIATE BOARD ================= */}
        <div className="space-y-10">
          <h2 className="text-5xl font-black text-slate-900 tracking-tight text-center">
            Associate Board
          </h2>

          <SwipeRow>
            {associateRoles.map((item, i) => (
              <div
                key={i}
                className="min-w-[420px] h-[320px]
                bg-white/70 backdrop-blur-xl border border-white
                rounded-[2.5rem] p-10 snap-center
                flex flex-col justify-between
                group transition-all duration-500
                hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(59,130,246,0.12)]"
              >
                <div>
                  <div className="mb-6 p-5 w-fit rounded-2xl bg-blue-50 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {item.role}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </div>
              </div>
            ))}
          </SwipeRow>
        </div>

      </div>
    </section>
  );
}
