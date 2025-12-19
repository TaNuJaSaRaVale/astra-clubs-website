import hodPhoto from "../assets/hod-vivek-waghmare.jpg";

export default function About() {
  return (
    <section id="about" className="space-y-20">

      {/* ABOUT WCE */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-slate-900">
          About Walchand College of Engineering
        </h2>

        <p className="text-slate-700 leading-relaxed max-w-5xl">
          Established in 1947, Walchand College of Engineering (WCE), Sangli,
          stands as a beacon of excellence in engineering education.
        </p>

        <p className="text-slate-700 leading-relaxed max-w-5xl">
          With a strong focus on academic rigor, research, and industry
          collaboration, WCE empowers students to contribute meaningfully to a
          rapidly evolving global landscape.
        </p>

        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Over 75 years of excellence in engineering education</li>
          <li>Autonomous institution affiliated with Shivaji University</li>
          <li>NBA & NAAC accredited</li>
          <li>Strong industry collaborations</li>
        </ul>
      </div>

      {/* HOD SECTION */}
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-slate-900">
          Head of the Department
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="flex justify-center">
            <img
              src={hodPhoto}
              alt="Dr. Vivek Nivrutirao Waghmare"
              className="h-48 w-48 rounded-2xl object-cover shadow-md"
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

            <p className="text-slate-700">
              A respected academician with over 15 years of teaching and
              research experience, leading the department with vision and
              innovation.
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT ASTRA */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-slate-900">
          About ASTRA – Departmental Club
        </h2>

        <p className="text-slate-700 max-w-5xl">
          ASTRA (Association of Students for Theoretical Reasoning in AI) is the
          official departmental club of AI & ML at WCE, established in 2025.
        </p>

        <p className="text-lg font-semibold text-purple-600">
          “Think Deep. Learn Together. Build Intelligent Futures.”
        </p>
      </div>

    </section>
  );
}
