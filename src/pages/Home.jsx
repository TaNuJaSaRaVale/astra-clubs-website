const Home = () => {
  return (
    <section className="space-y-28">

      {/* ================= HERO SECTION ================= */}
      <div className="flex flex-col items-center text-center py-28 gap-6">
        <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 tracking-wide">
          ASTRA
        </h1>

        <p className="text-xl md:text-2xl text-purple-600 font-semibold">
          Association of Students for Theoretical Reasoning in AI
        </p>

        <p className="max-w-3xl text-lg text-slate-600 mt-4">
          The official departmental club of Artificial Intelligence & Machine Learning,  
          Walchand College of Engineering, Sangli.
        </p>
      </div>

      {/* ================= WHAT WE DO (CARDS) ================= */}
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center text-slate-900">
          What We Do at ASTRA
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              Theoretical Foundations
            </h3>
            <p className="text-slate-600">
              Strengthening mathematical reasoning and conceptual understanding
              behind AI & ML algorithms.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              Peer-to-Peer Learning
            </h3>
            <p className="text-slate-600">
              Collaborative study groups, discussions, and mentorship driven by
              students for students.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              Hands-on Projects
            </h3>
            <p className="text-slate-600">
              Applying AI & ML concepts to real-world problem statements through
              practical projects.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              Workshops & Sessions
            </h3>
            <p className="text-slate-600">
              Technical workshops, expert talks, and guided learning sessions
              on emerging AI technologies.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              Research Orientation
            </h3>
            <p className="text-slate-600">
              Encouraging research mindset, paper reading, innovation, and
              exploration of advanced AI domains.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              Industry Readiness
            </h3>
            <p className="text-slate-600">
              Bridging the gap between academics and industry expectations
              through skill development and exposure.
            </p>
          </div>

        </div>
      </div>

      {/* ================= CALL TO ACTION ================= */}
      <div className="bg-purple-600 text-white rounded-3xl py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Be a Part of ASTRA
        </h2>

        <p className="max-w-2xl mx-auto text-purple-100 mb-8">
          Join a community that believes in deep thinking, collaborative
          learning, and building intelligent solutions for the future.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="/contact"
            className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-purple-100 transition"
          >
            Contact Us
          </a>

          <a
            href="/events"
            className="border border-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-500 transition"
          >
            Explore Events
          </a>
        </div>

    
      </div>

    </section>
  );
};

export default Home;
