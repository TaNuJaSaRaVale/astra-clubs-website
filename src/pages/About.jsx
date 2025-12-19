import hodPhoto from "../assets/hod-vivek-waghmare.jpg";

const About = () => {
  return (
    <section className="space-y-20">

      {/* ABOUT WCE */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-slate-900">
          About Walchand College of Engineering
        </h2>

        <p className="text-slate-700 leading-relaxed max-w-5xl">
          Established in 1947, Walchand College of Engineering (WCE), Sangli,
          stands as a beacon of excellence in engineering education. As a
          premier autonomous institution affiliated with Shivaji University,
          WCE seamlessly blends tradition with innovation to create a holistic
          learning environment.
        </p>

        <p className="text-slate-700 leading-relaxed max-w-5xl">
          With a strong focus on academic rigor, cutting-edge research,
          state-of-the-art facilities, and robust industry collaborations,
          WCE empowers students to excel academically, develop critical skills,
          and contribute meaningfully to a rapidly evolving global landscape.
        </p>

        <ul className="grid gap-3 sm:grid-cols-2 list-disc pl-6 text-slate-700">
          <li>Over 75 years of excellence in engineering education</li>
          <li>Autonomous institution affiliated with Shivaji University</li>
          <li>Accredited by NBA and NAAC with top rankings</li>
          <li>State-of-the-art labs, libraries, and research facilities</li>
          <li>Strong industry collaborations and placement opportunities</li>
        </ul>

        <p className="text-slate-700 leading-relaxed max-w-5xl">
          Beyond academics, life at WCE is vibrant, inclusive, and full of
          opportunities for personal and professional growth, offering a
          perfect balance of academics, culture, and extracurricular
          activities.
        </p>
      </div>

      {/* ABOUT DEPARTMENT */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-slate-900">
          Department of Artificial Intelligence & Machine Learning
        </h2>

        <p className="text-slate-700 leading-relaxed max-w-5xl">
          Established in 2024, the Department of Artificial Intelligence and
          Machine Learning at Walchand College of Engineering has rapidly
          emerged as a center of excellence in AI-driven education, research,
          and innovation.
        </p>

        <p className="text-slate-700 leading-relaxed max-w-5xl">
          The department blends strong foundational knowledge with
          cutting-edge technologies, preparing students to thrive in a
          rapidly evolving technological landscape. Its curriculum is
          industry-aligned, research-oriented, and globally relevant.
        </p>

        <p className="text-slate-700 leading-relaxed max-w-5xl">
          Faculty and students actively contribute to research through reputed
          publications, conferences, and collaborative industry projects.
          Strong industry ties enable internships, placements, and real-world
          exposure.
        </p>
      </div>

      {/* HOD SECTION */}
<div className="space-y-8">
  <h2 className="text-4xl font-bold text-slate-900">
    Head of the Department
  </h2>

  <div className="grid gap-8 md:grid-cols-3 items-start">
    
    {/* Photo Placeholder */}
    <div className="flex justify-center">
      <img
  src={hodPhoto}
  alt="Dr. Vivek Nivrutirao Waghmare - HOD AIML"
  className="h-48 w-48 rounded-2xl object-cover shadow-md"
/>

    </div>

    {/* HOD Content */}
    <div className="md:col-span-2 space-y-4">
      <h3 className="text-2xl font-semibold text-slate-900">
        Dr. Vivek Nivrutirao Waghmare
      </h3>

      <p className="text-slate-600">
        Professor & Head, Department of Artificial Intelligence and Machine Learning  
        <br />
        Walchand College of Engineering, Sangli
      </p>

      <p className="text-slate-700 leading-relaxed">
        Dr. Vivek Nivrutirao Waghmare is a highly respected academician and
        researcher with over 15 years of teaching and research experience. He
        leads the Department of Artificial Intelligence and Machine Learning at
        WCE with a strong vision for academic excellence, innovation, and
        ethical technological advancement.
      </p>

      <p className="text-slate-700 leading-relaxed">
        He has published more than 33 research papers in reputed international
        journals and conferences and holds 6 patents. He has received multiple
        research grants from government funding agencies and actively
        contributes to national and international research initiatives.
      </p>

      <p className="text-slate-700 leading-relaxed">
        His research interests include Computational Science and High-Performance
        Computing. He is also a recipient of the <strong>Excellence in Teaching
        Award</strong> and is widely admired for his academic leadership and
        mentorship.
      </p>
    </div>

  </div>
</div>


      {/* OBJECTIVES */}
      <div className="space-y-6">
        <h3 className="text-3xl font-semibold text-slate-900">
          Department Objectives
        </h3>

        <ul className="space-y-3 list-disc pl-6 text-slate-700 max-w-5xl">
          <li>Deliver industry-relevant, high-quality AI & ML education</li>
          <li>Promote research, innovation, and emerging technologies</li>
          <li>Develop competent, industry-ready professionals</li>
          <li>Encourage lifelong learning and technological adaptability</li>
          <li>Strengthen industry–academia collaboration</li>
          <li>Foster entrepreneurship and innovation-driven leadership</li>
          <li>Enable socially responsible and ethical AI solutions</li>
          <li>Enhance global exposure and professional competence</li>
          <li>Sustain academic excellence through modern pedagogy</li>
          <li>Empower alumni engagement for mutual growth</li>
        </ul>
      </div>

      {/* VISION & MISSION */}
      <div className="space-y-6">
        <h3 className="text-3xl font-semibold text-slate-900">
          Vision & Mission
        </h3>

        <p className="text-slate-700 max-w-5xl">
          <strong>Vision:</strong> To be a center of excellence in Artificial
          Intelligence and Machine Learning education, research, and
          innovation, nurturing globally competent and ethical professionals.
        </p>

        <ul className="space-y-2 list-disc pl-6 text-slate-700 max-w-5xl">
          <li>Adopting vibrant curricula and teaching practices</li>
          <li>Providing strong industry exposure and collaboration</li>
          <li>Empowering critical thinking and problem-solving skills</li>
          <li>Inculcating lifelong learning and ethical responsibility</li>
        </ul>
      </div>

      {/* ABOUT ASTRA */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-slate-900">
          About ASTRA – Departmental Club
        </h2>

        <p className="text-slate-700 leading-relaxed max-w-5xl">
          ASTRA (Association of Students for Theoretical Reasoning in AI),
          established in 2025, is the official departmental club of the
          Artificial Intelligence & Machine Learning Department at WCE.
        </p>

        <p className="text-slate-700 leading-relaxed max-w-5xl">
          Founded by students and for students, ASTRA aims to foster
          collaborative learning, critical thinking, and continuous growth in
          Artificial Intelligence and Machine Learning through peer-to-peer
          engagement.
        </p>
      </div>

      {/* CLUB VISION / MISSION / MOTTO */}
      <div className="space-y-6">
        <h3 className="text-3xl font-semibold text-slate-900">
          ASTRA Vision, Mission & Motto
        </h3>

        <p className="text-slate-700 max-w-5xl">
          <strong>Vision:</strong> To build a strong learning community that
          excels in theoretical reasoning, practical understanding, and ethical
          application of AI & ML.
        </p>

        <ul className="space-y-2 list-disc pl-6 text-slate-700 max-w-5xl">
          <li>Promote collaborative and peer-driven learning</li>
          <li>Strengthen theoretical and mathematical foundations</li>
          <li>Encourage hands-on projects and research orientation</li>
          <li>Bridge academia, industry, and emerging AI technologies</li>
        </ul>

        <p className="text-lg font-semibold text-purple-600">
          Motto: “Think Deep. Learn Together. Build Intelligent Futures.”
        </p>
      </div>

    </section>
  );
};

export default About;
