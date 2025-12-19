import hodPhoto from "../assets/hod-vivek-waghmare.jpg";
import SwipeRow from "../components/SwipeRow";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 space-y-32"
    >

      {/* ================= PAGE INTRO ================= */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-slate-900">
          About
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-600">
          Walchand College of Engineering · Department of Artificial Intelligence
          & Machine Learning · ASTRA Club
        </p>
      </div>

      {/* ================= ABOUT WCE ================= */}
      <div className="space-y-10">
        <h2 className="text-4xl font-bold text-slate-900">
          Walchand College of Engineering, Sangli
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-slate-700 leading-relaxed">
            Established in 1947, Walchand College of Engineering (WCE), Sangli,
            stands as a beacon of excellence in engineering education. As a
            premier autonomous institution affiliated with Shivaji University,
            WCE seamlessly blends tradition with innovation to create a holistic
            learning environment.
          </p>

          <p className="text-slate-700 leading-relaxed">
            With a strong focus on academic rigor, cutting-edge research,
            state-of-the-art facilities, and robust industry collaborations,
            WCE empowers students to excel academically, develop critical
            skills, and contribute meaningfully to a rapidly evolving global
            landscape.
          </p>
        </div>

        {/* WCE HIGHLIGHTS – SWIPE */}
        <SwipeRow>
          {[
            "Over 75 years of excellence in engineering education",
            "Autonomous institution affiliated with Shivaji University",
            "Accredited by NBA and NAAC with top rankings",
            "State-of-the-art laboratories and research facilities",
            "Strong industry collaborations and placement ecosystem",
          ].map((item, i) => (
            <div
              key={i}
              className="
                min-w-[300px]
                bg-white rounded-2xl p-6
                border shadow-sm
                snap-center
                hover:-translate-y-1 hover:shadow-md
                transition
              "
            >
              <p className="font-medium text-slate-800">
                {item}
              </p>
            </div>
          ))}
        </SwipeRow>

        <p className="text-slate-700 leading-relaxed max-w-5xl">
          Beyond academics, life at WCE is vibrant, inclusive, and full of
          opportunities for personal and professional growth, ensuring a
          holistic student experience.
        </p>
      </div>

      {/* ================= ABOUT DEPARTMENT ================= */}
      <div className="space-y-10">
        <h2 className="text-4xl font-bold text-slate-900">
          Department of Artificial Intelligence & Machine Learning
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-slate-50 p-8 rounded-2xl space-y-4">
            <h3 className="text-2xl font-semibold">
              Academic Excellence
            </h3>
            <p className="text-slate-700">
              Established in 2024, the department has consistently upheld its
              commitment to strong academic rigor, blending foundational
              knowledge with cutting-edge AI and ML technologies through an
              industry-aligned curriculum.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl space-y-4">
            <h3 className="text-2xl font-semibold">
              Research & Industry Interface
            </h3>
            <p className="text-slate-700">
              Faculty and students actively contribute through publications,
              conferences, and collaborative projects with industry leaders,
              bridging the gap between academia and professional practice.
            </p>
          </div>
        </div>

        <p className="text-slate-700 leading-relaxed max-w-5xl">
          The department boasts modern laboratories, high-performance computing
          facilities, advanced software tools, and strong industry partnerships
          for internships, placements, and real-world exposure.
        </p>
      </div>

      {/* ================= HOD ================= */}
      <div className="bg-slate-50 rounded-3xl p-12 space-y-10">
        <h2 className="text-4xl font-bold text-center">
          Head of the Department
        </h2>

        <div className="grid gap-10 md:grid-cols-3 items-center">
          <div className="flex justify-center">
            <img
              src={hodPhoto}
              alt="Dr. Vivek Nivrutirao Waghmare"
              className="h-60 w-100 rounded-2xl object-cover shadow-md"
            />
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-semibold">
              Dr. Vivek Nivrutirao Waghmare
            </h3>
            <p className="text-slate-600">
              Professor & Head, AIML Department<br />
              Walchand College of Engineering, Sangli
            </p>
            <p className="text-slate-700 leading-relaxed">
              With over 15 years of teaching and research experience, Dr.
              Waghmare has published numerous research papers, holds patents,
              received prestigious awards, and provides strong academic and
              research leadership to the department.
            </p>
          </div>
        </div>
      </div>

      {/* ================= OBJECTIVES – SWIPE ================= */}
      <div className="space-y-10">
        <h2 className="text-4xl font-bold text-center">
          Department Objectives
        </h2>

        <SwipeRow>
          {[
            "Deliver quality and industry-relevant education",
            "Promote research, innovation, and emerging technologies",
            "Develop competent, industry-ready professionals",
            "Encourage lifelong learning and adaptability",
            "Strengthen industry–academia collaboration",
            "Foster entrepreneurship and leadership",
            "Enable socially responsible AI solutions",
            "Enhance global competence and exposure",
            "Sustain academic excellence through modern pedagogy",
            "Empower alumni engagement and mentorship",
          ].map((obj, i) => (
            <div
              key={i}
              className="
                min-w-[300px]
                bg-white p-6 rounded-2xl
                border shadow-sm
                snap-center
              "
            >
              <p className="font-medium text-slate-700">
                {obj}
              </p>
            </div>
          ))}
        </SwipeRow>
      </div>

      {/* ================= VISION & MISSION ================= */}
      <div className="space-y-8 max-w-5xl">
        <h2 className="text-4xl font-bold">
          Vision & Mission
        </h2>

        <p className="text-slate-700">
          <strong>Vision:</strong> To be a center of excellence in Artificial
          Intelligence and Machine Learning education, research, and innovation,
          nurturing globally competent and ethical professionals.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Adopting vibrant curricula and teaching practices</li>
          <li>Providing industry exposure and interdisciplinary collaboration</li>
          <li>Empowering critical thinking and problem-solving skills</li>
          <li>Inculcating lifelong learning and ethical responsibility</li>
        </ul>
      </div>

      {/* ================= ASTRA CLUB ================= */}
      <div className="space-y-6 max-w-5xl">
        <h2 className="text-4xl font-bold">
          ASTRA – Departmental Club
        </h2>

        <p className="text-slate-700 leading-relaxed">
          ASTRA (Association of Students for Theoretical Reasoning in AI),
          established in 2025, is the official departmental club of the
          Artificial Intelligence & Machine Learning Department at WCE.
        </p>

        <p className="text-slate-700 leading-relaxed">
          The club promotes collaborative learning, peer-to-peer engagement,
          strong theoretical foundations, and hands-on application of AI and ML
          concepts through workshops, discussions, projects, and study groups.
        </p>

        <p className="font-semibold text-slate-800">
          Motto: “Think Deep. Learn Together. Build Intelligent Futures.”
        </p>
      </div>

    </section>
  );
}
