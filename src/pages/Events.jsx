const Events = () => {
  return (
    <section className="space-y-24">

      {/* ================= PAGE HEADER ================= */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-slate-900">
          Events at ASTRA
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-600">
          ASTRA organizes technical, academic, and collaborative events aimed at
          strengthening theoretical understanding and practical skills in
          Artificial Intelligence and Machine Learning.
        </p>
      </div>

      {/* ================= EVENTS GRID ================= */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        {/* EVENT 1 */}
        <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition flex flex-col">
          <span className="text-sm text-purple-600 font-semibold mb-2">
            Completed Event
          </span>

          <h3 className="text-xl font-bold mb-3">
            GIM 2K25 – General Interest Meet
          </h3>

          <p className="text-slate-600 mb-4">
            GIM 2K25 marked the inaugural event of ASTRA, introducing students to
            the club’s vision, objectives, and collaborative learning culture.
            The event encouraged interaction, idea exchange, and awareness of
            various AI & ML domains.
          </p>

          <div className="mt-auto text-sm text-slate-500">
            📍 WCE, Sangli
          </div>
        </div>

        {/* EVENT 2 */}
        <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition flex flex-col">
          <span className="text-sm text-yellow-600 font-semibold mb-2">
            Planned Event
          </span>

          <h3 className="text-xl font-bold mb-3">
            Intra-Club Machine Learning Project Development
          </h3>

          <p className="text-slate-600 mb-4">
            A planned intra-club technical event where ASTRA members will work
            collaboratively on Machine Learning–based projects. The focus will
            be on applying theoretical knowledge to real-world problem
            statements, covering data preprocessing, model building,
            evaluation, and presentation.
          </p>

          <div className="mt-auto text-sm text-slate-500">
            🛠 Hands-on | Team-based
          </div>
        </div>

        {/* EVENT 3 */}
        <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition flex flex-col">
          <span className="text-sm text-yellow-600 font-semibold mb-2">
            Planned Initiative
          </span>

          <h3 className="text-xl font-bold mb-3">
            ASTRA ML Services & Learning Initiative
          </h3>

          <p className="text-slate-600 mb-4">
            An open initiative for students across all departments, offering
            mentorship, introductory ML workshops, peer assistance, and
            collaborative project support. This initiative aims to promote
            interdisciplinary learning and wider adoption of AI & ML concepts.
          </p>

          <div className="mt-auto text-sm text-slate-500">
            🌐 Open to all departments
          </div>
        </div>

      </div>

      {/* ================= CALL TO ACTION ================= */}
      <div className="bg-purple-600 text-white rounded-3xl py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stay Connected with ASTRA Events
        </h2>

        <p className="max-w-2xl mx-auto text-purple-100 mb-8">
          Participate in our events to strengthen your understanding of AI & ML,
          collaborate with peers, and gain real-world exposure.
        </p>

        <a
          href="/contact"
          className="inline-block bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-purple-100 transition"
        >
          Contact Us for Updates
        </a>
      </div>

    </section>
  );
};

export default Events;
