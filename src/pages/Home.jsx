export default function Home() {
  return (
    <section id="home" className="text-center space-y-24">

      <div className="py-32 space-y-6">
        <h1 className="text-7xl font-extrabold tracking-tight text-white">
          ASTRA
        </h1>
        <p className="text-2xl font-semibold text-indigo-400">
          Association of Students for Theoretical Reasoning in AI
        </p>
        <p className="max-w-3xl mx-auto text-lg text-slate-400">
          Official AI & ML departmental club of Walchand College of Engineering.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {[
          "Theoretical Foundations",
          "Peer-to-Peer Learning",
          "Hands-on Projects",
          "Research Orientation",
          "Workshops & Sessions",
          "Industry Readiness",
        ].map((item) => (
          <div
            key={item}
            className="bg-[#11162a] border border-slate-800 rounded-2xl p-6
            hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
            transition-all duration-300"
          >
            <h3 className="font-semibold text-white">{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
