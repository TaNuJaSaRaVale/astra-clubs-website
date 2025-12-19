export default function Events() {
  return (
    <section id="events" className="space-y-24">

      {/* PAGE HEADER */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-slate-900">
          Events at ASTRA
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-600">
          Technical, academic, and collaborative events organized by ASTRA.
        </p>
      </div>

      {/* EVENTS GRID */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <span className="text-purple-600 font-semibold text-sm">
            Completed Event
          </span>
          <h3 className="text-xl font-bold mt-2">
            GIM 2K25 – General Interest Meet
          </h3>
          <p className="text-slate-600 mt-3">
            Inaugural event introducing ASTRA’s vision and AI domains.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <span className="text-yellow-600 font-semibold text-sm">
            Planned Event
          </span>
          <h3 className="text-xl font-bold mt-2">
            Intra-Club ML Project Development
          </h3>
          <p className="text-slate-600 mt-3">
            Hands-on ML project building with peer collaboration.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <span className="text-yellow-600 font-semibold text-sm">
            Planned Initiative
          </span>
          <h3 className="text-xl font-bold mt-2">
            ASTRA ML Services & Learning Initiative
          </h3>
          <p className="text-slate-600 mt-3">
            Open ML mentorship and learning support for all departments.
          </p>
        </div>

      </div>

    </section>
  );
}
