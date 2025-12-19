import SwipeRow from "../components/SwipeRow";

export default function Team() {
  return (
    <section
      id="team"
      className="max-w-7xl mx-auto px-4 space-y-32"
    >

      {/* ================= PAGE INTRO ================= */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-slate-900">
          Our Team
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-600">
          ASTRA is powered by a dedicated team of students working together
          to promote learning, innovation, and growth in Artificial
          Intelligence & Machine Learning.
        </p>
      </div>

      {/* ================= MEMBER BOARD ================= */}
      <div className="space-y-10">
        <h2 className="text-4xl font-bold text-slate-900">
          Member Board (First Year)
        </h2>

        <p className="max-w-4xl text-slate-700">
          The Member Board consists of first-year students who form the
          foundation of ASTRA. While they do not hold formal posts, members
          actively participate in learning activities, discussions, projects,
          and collaborative initiatives, developing strong theoretical and
          practical foundations in AI & ML.
        </p>

        <SwipeRow>
          {[
            {
              title: "Learning & Skill Development",
              desc: "Members focus on building strong fundamentals in Artificial Intelligence, Machine Learning, and related mathematical concepts through guided learning sessions.",
            },
            {
              title: "Active Participation",
              desc: "Members actively take part in workshops, study groups, discussions, and hands-on activities organized by the club.",
            },
            {
              title: "Collaborative Growth",
              desc: "Peer-to-peer learning is encouraged, helping members grow together by sharing knowledge, ideas, and experiences.",
            },
            {
              title: "Exploration & Exposure",
              desc: "Members explore various domains of AI & ML, gaining early exposure to research, projects, and emerging technologies.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                min-w-[320px]
                bg-white rounded-2xl p-6
                border shadow-sm
                snap-center
                hover:-translate-y-1 hover:shadow-md
                transition-all duration-300
              "
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </SwipeRow>
      </div>

      {/* ================= ASSOCIATE BOARD ================= */}
      <div className="space-y-10">
        <h2 className="text-4xl font-bold text-slate-900">
          Associate Board
        </h2>

        <p className="max-w-4xl text-slate-700">
          The Associate Board comprises students holding specific leadership
          and functional responsibilities. These members manage operations,
          guide initiatives, and ensure smooth functioning of ASTRA while
          aligning activities with the club’s vision and objectives.
        </p>

        <SwipeRow>
          {[
            {
              role: "Secretary",
              desc: "Handles official documentation, meeting records, communication, and coordination among members and faculty.",
            },
            {
              role: "Technical Head",
              desc: "Oversees technical learning activities, workshops, projects, and ensures technical quality within the club.",
            },
            {
              role: "Public Relations Officer",
              desc: "Manages external communication, promotions, outreach activities, and represents the club to the broader community.",
            },
            {
              role: "Club Service Director",
              desc: "Coordinates club services, learning initiatives, mentorship programs, and ensures inclusive participation.",
            },
            {
              role: "Web Developer",
              desc: "Designs, develops, and maintains the official ASTRA website and digital platforms.",
            },
            {
              role: "Art & Design Team",
              desc: "Responsible for visual branding, posters, creative designs, and maintaining a strong visual identity for ASTRA.",
            },
            {
              role: "Treasurer",
              desc: "Manages financial planning, budgeting, expense tracking, and ensures transparent handling of club funds.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                min-w-[320px]
                bg-white rounded-2xl p-6
                border shadow-sm
                snap-center
                hover:-translate-y-1 hover:shadow-md
                transition-all duration-300
              "
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.role}
              </h3>
              <p className="text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </SwipeRow>
      </div>

    </section>
  );
}
