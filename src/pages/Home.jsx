import React from "react";
import { Sparkles, CalendarCheck } from "lucide-react";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#f8faff] text-slate-800 overflow-hidden font-sans"
    >
      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-36 space-y-36">

        {/* ================= HERO ================= */}
        <div className="text-center space-y-14 max-w-5xl mx-auto">

          {/* College + Dept */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full
              border border-slate-200 bg-white/40 backdrop-blur-xl
              shadow-sm text-[11px] uppercase tracking-[0.3em]
              font-bold text-[#6b3f1d]">
              <Sparkles size={12} className="text-[#6b3f1d]" />
              <span>Walchand College of Engineering</span>
            </div>

            <p className="text-sm md:text-base font-semibold tracking-wide
              bg-clip-text text-transparent
              bg-linear-to-r from-slate-700 via-blue-600 to-indigo-600">
              Department of Artificial Intelligence and Machine Learning
            </p>
          </div>

          {/* ASTRA */}
          <h1
            className="text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter
            bg-clip-text text-transparent
            bg-linear-to-r from-slate-900 to-blue-600"
          >
            ASTRA
          </h1>

          {/* Full Form */}
          <p className="text-xl md:text-2xl font-semibold text-slate-600 max-w-3xl mx-auto">
            <span className="text-blue-600">Association</span>{" "}
            of{" "}
            <span className="text-indigo-600">Students</span>{" "}
            for{" "}
            <span className="text-sky-600">Theoretical</span>{" "}
            <span className="text-blue-600">Reasoning</span>{" "}
            in{" "}
            <span className="text-indigo-600">AI</span>
          </p>

          {/* Motto */}
          <p className="max-w-2xl mx-auto text-base md:text-lg
            font-semibold text-slate-600 italic">
            “Think Deep. Learn Together. Build Intelligent Futures.”
          </p>
        </div>

        {/* ================= UPCOMING EVENT (GLASS CARD) ================= */}
        <div className="max-w-4xl mx-auto">
          <div
            className="
              relative overflow-hidden rounded-3xl
              bg-white/30 backdrop-blur-2xl
              border border-white/50
              shadow-[0_20px_60px_rgba(59,130,246,0.12)]
              px-10 py-12 text-center
              transition hover:shadow-[0_30px_80px_rgba(37,99,235,0.18)]
            "
          >
            {/* soft glow */}
            <div className="absolute inset-0 bg-linear-to-br
              from-blue-400/10 via-transparent to-indigo-400/10
              pointer-events-none" />

            <CalendarCheck
              size={34}
              className="mx-auto mb-6 text-blue-600"
            />

            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              Upcoming ASTRA Event
            </h2>

            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Join our next session focused on ML foundations
          .
            </p>

            <a
              href="#events"
              className="
                inline-flex items-center justify-center
                px-10 py-4 rounded-xl
                bg-slate-900/90 text-white
                font-bold tracking-wide
                hover:bg-blue-600
                hover:shadow-lg
                transition
              "
            >
             Register
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
