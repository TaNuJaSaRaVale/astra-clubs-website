
import { useRef, useState,useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Brain, Users, Globe, FileText, Terminal, Megaphone,
  HeartHandshake, Code, Palette, Wallet, Sparkles, X,Film, Calendar
} from "lucide-react";

/* ─── Member values (first-year board) ───────────────────── */
const memberValues = [
  { title: "Learning & Skill Development", desc: "Building strong fundamentals in AI, ML, and the mathematical concepts behind neural networks.", icon: <Brain className="w-6 h-6" />, color: "#6366f1" },
  { title: "Active Participation",         desc: "Engaging in workshops, study groups, and hands-on technical activities organized by ASTRA.",   icon: <Sparkles className="w-6 h-6" />, color: "#8b5cf6" },
  { title: "Collaborative Growth",         desc: "Sharing knowledge through peer-to-peer learning and collaborative problem-solving.",             icon: <Users className="w-6 h-6" />,   color: "#06b6d4" },
  { title: "Exploration & Exposure",       desc: "Early exposure to research papers, impactful projects, and emerging AI technologies.",           icon: <Globe className="w-6 h-6" />,   color: "#10b981" },
];

/* ─── Associate roles ─────────────────────────────────────── */
const associateRoles = [
  {
    role: "Secretary",
    desc: "Handles official documentation, communication, and departmental coordination.",
    icon: <FileText className="w-6 h-6" />,
    color: "#6366f1",
   members: [
    { 
      name: "Srishti Hegde", 
      initials: "SH", 
      image: "https://lh3.googleusercontent.com/d/1doAgHsZ2MPVZDJh_D14BHtzuOWdGv9Wg",
      zoom: "scale-100", // "Bit back" - reduced from scale-110
      pos: "object-center", 
      bg: "#ede9fe", fg: "#5b21b6" 
    },
    { 
      name: "Atharva Ranadive", 
      initials: "AR", 
      image: "https://lh3.googleusercontent.com/d/1zyLDx9lueJR5du6fRTe6JmV6bwQnNb9J",
      zoom: "scale-[2]", // "Bring front" - heavily zoomed to match her framing
      pos: "object-[center_70%]", // Focus on head/shoulders
      bg: "#dbeafe", fg: "#1d4ed8" 
    },
  ],
  },
  {
    role: "Program Directors",
    desc: "Oversees the planning, execution, and scheduling of all ASTRA club events.",
    icon: <Calendar className="w-6 h-6" />, 
    color: "#10b981", 
    members: [
      { 
        name: "Harshal Chothe", 
        initials: "HC", 
        image: "https://drive.google.com/thumbnail?id=1Y_uT2isQkF5YVGUuXSNCbiDA9V2bczPI&sz=w1000", 
        zoom: "scale-[1.2] translate-y-[12%]", 
        pos: "object-[center_10%]", 
        bg: "#ecfdf5", 
        fg: "#065f46" 
      },
      { 
        name: "Shreenish Samadhan Shinde", 
        initials: "SS", 
        image: "https://drive.google.com/thumbnail?id=1J1lZ5KmO4vRG4zOVvz2QRqJSUqjbQOV7&sz=w1000", 
        zoom: "scale-[1.6] translate-x-[8%]", 
        pos: "object-[center_25%] ", 
        bg: "#f0fdf4", 
        fg: "#166534" 
      },
    ],
  },
  {
    role: "Technical Head",
    desc: "Oversees technical learning paths, workshops, and project architectures.",
    icon: <Terminal className="w-6 h-6" />,
    color: "#8b5cf6",
    members: [
      { 
      name: "Tanmay Wagh", 
      initials: "TW", 
      image: "https://drive.google.com/thumbnail?id=16ZtYx6v6X-hELiyryEca_eoXVcKIxkt9&sz=w1000", 
      zoom: "scale-[1]", pos: "object-[center_25%]", bg: "#ecfeff", fg: "#155e75" 
    },
    { 
      name: "Pratik Vijay Naik", 
      initials: "PN", 
      image: "https://drive.google.com/thumbnail?id=1rZCigi3ArxzO4h6NH1bfrBoKiO2-rqxp&sz=w1000", 
      zoom: "scale-[1.2]", pos: "object-[center_25%]", bg: "#f0f9ff", fg: "#0369a1" 
    },
     { 
      name: "Prerna Mahadev Fegade", 
      initials: "PF", 
     image: "https://drive.google.com/thumbnail?id=1pChfKwDBrg_NETvADGw31-eivr8ihJda&sz=w1000",
      zoom: "scale-[1]", pos: "object-[center_30%]", bg: "#f0f9ff", fg: "#0369a1" 
    },
    ],
  },
  {
    role: "Public Relations Officer",
    desc: "Manages outreach, partnerships, and ASTRA's public presence.",
    icon: <Megaphone className="w-6 h-6" />,
    color: "#ec4899",
    members: [
      { 
      name: "Snehal Dhanaji Patil", 
      initials: "SP", 
      image: "https://drive.google.com/thumbnail?id=1Eo0TR_y98wyKqqOki4bXJ9CDEDiGRo2n&sz=w1000", 
      zoom: "scale-[1.3] translate-x-[8%]", 
      pos: "object-[center_65%]", 
      bg: "#fffbeb", 
      fg: "#9a3412" 
    },
    { 
      name: "Atharva Bhupendra Shrivastava", 
      initials: "AS", 
      image: "https://drive.google.com/thumbnail?id=1L8rbBPBKzMV1Nfcw3FmqzXzLzryEMHiO&sz=w1000", 
      zoom: "scale-[3.2] translate-x-[10%]", 
      pos: "object-[center_35%]", 
      bg: "#fff7ed", 
      fg: "#9a3412" 
    },
    { 
      name: "Gautam Rajesh Papat", 
      initials: "GP", 
      image: "https://drive.google.com/thumbnail?id=1WPzJoYVm8XlJRXCyDWr56bbzO-852POE&sz=w1000", 
      zoom: "scale-[3.3] translate-x-[50%]", // Forces him 15% to the RIGHT to correct left alignment
pos: "object-[center_25%]",
      bg: "#fffbeb", 
      fg: "#b45309" 
    },
    { 
      name: "Rachel Panhalkar", 
      initials: "RP", 
      image: "https://drive.google.com/thumbnail?id=1SF1sJcjP4kpBA3uQXSHZ3dmyWm6HQGjj&sz=w1000", 
      zoom: "scale-[1.3] -translate-y-[-15%] translate-x-[6%]", 
      pos: "object-top",
      bg: "#fff7ed", 
      fg: "#9a3412" 
    },
    ],
  },
  {
    role: "Club Service Director",
    desc: "Coordinates mentorship initiatives and inclusive learning programs.",
    icon: <HeartHandshake className="w-6 h-6" />,
    color: "#10b981",
    members: [
     { 
      name: "Kimaya Manglesh Patil", 
      initials: "KP", 
      image: "https://drive.google.com/thumbnail?id=1Ka9JXGbfc3xObYbRUxGNnGMtX32uqaS2&sz=w1000", 
      zoom: "scale-[1.5] translate-x-[8%]", pos: "object-[center_15%]", bg: "#ecfeff", fg: "#0891b2" 
    },
    { 
      name: "Shrutika Shivaji Patil", 
      initials: "SP", 
      image: "https://drive.google.com/thumbnail?id=1Q6fVWIDrTn-qVrtwL7G-nQGuwC7kFv8-&sz=w1000", 
      zoom: "scale-[1.4] translate-x-[8%]", pos: "object-[center_20%]", bg: "#f0f9ff", fg: "#0284c7" 
    },
    { 
      name: "Varad Nandakishor Chaudhari", 
      initials: "VC", 
      image: "https://drive.google.com/thumbnail?id=1LNaWisQ3rb5HMiQhMaFJ5tP3upaK-OX6&sz=w1000", 
      zoom: "scale-[1.3] translate-y-[11%]", pos: "object-[center_-20%]", bg: "#e0f2fe", fg: "#0369a1" 
    },
    ],
  },
  {
  role: "Web Developer",
  desc: "ASTRA chya adhikrut web platforms che design ani maintainance kartat.",
  icon: <Code className="w-6 h-6" />,
  color: "#06b6d4",
  members: [
    { 
      name: "Tanuja Sambhaji Saravale", 
      initials: "TS", 
      image: "https://drive.google.com/thumbnail?id=18T-3ZxWg1WyCcuKHbBS-LCzGBxZXgg_O&sz=w1000", 
      zoom: "scale-[1.3]", // Chehra javal annyasathi
      pos: "object-[center_10%]", // Chehra varti ghenyasathi
      bg: "#f0f9ff", 
      fg: "#0369a1" 
    },
  ],
},
  {
  role: "Editors",
  desc: "Crafts and polishes high-quality video content and digital media for ASTRA.",
  icon: <Film className="w-6 h-6" />, 
  color: "#6366f1", 
  members: [
    { 
      name: "Manaswi Vishal Sorde", 
      initials: "MS", 
      image: "https://drive.google.com/thumbnail?id=1fiH3dFwdoeC-kCitlQWgh9gze5Xf1qQ3&sz=w1000", 
      zoom: "scale-[0.9]", 
      pos: "object-[center_35%]", 
      bg: "#eef2ff", 
      fg: "#4338ca" 
    },
  ],
},
  {
  role: "Art & Design Team",
  desc: "Builds ASTRA's visual branding and creative identity.",
  icon: <Palette className="w-6 h-6" />,
  color: "#f59e0b",
  members: [
    { 
      name: "Rrucha Anand Wamanse", 
      initials: "RW", 
      image: "https://lh3.googleusercontent.com/d/1o5TMLn_xp_WeX8YpFfvpy1y_aXxPcppL", 
      zoom: "scale-[1.8]", 
      pos: "object-[center_50%]", 
      bg: "#fff7ed", 
      fg: "#9a3412" 
    },
    { 
      name: "Reva Premendra Meshram", 
      initials: "RM", 
      image: "https://lh3.googleusercontent.com/d/1Nd7vgX8gT53ErD8baI2SuWJvm4HPAGBf", 
      zoom: "scale-[1.6]", 
      pos: "object-[center_30%]", 
      bg: "#fffbeb", 
      fg: "#b45309" 
    },
  ],
},
  {
    role: "Treasurer",
    desc: "Manages budgeting, expenses, and financial transparency.",
    icon: <Wallet className="w-6 h-6" />,
    color: "#ef4444",
   members: [
      { 
        name: "Aditya Dattatraya Patil", 
        initials: "AP", 
        image: "https://lh3.googleusercontent.com/d/1CwLVFxzZgnBE9cN4XiwZWcPKh4xroS_8", 
        zoom: "scale-[1]", // Heavy zoom to show face/shoulders clearly
        pos: "object-[center_10%]", // Precise positioning for his specific photo
        bg: "#fef2f2", fg: "#991b1b" 
      },
      { 
      name: "Vaidehi Mahesh Tendulkar", 
      initials: "VT", 
      image: "https://drive.google.com/thumbnail?id=1PgZLG7kdFHWvu-f_WkuEjqlSL1jz2wm3&sz=w1000", 
      zoom: "scale-[1]", 
      pos: "object-[center_5%]", // Adjusted to bring her face up and front
      bg: "#eef2ff", 
      fg: "#4338ca" 
    },
    ],
  },
];

/* ─── Horizontal scroll row with dot indicator ────────────── */
function SwipeSection({ items, renderCard }) {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  const onScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const progress = scrollLeft / (scrollWidth - clientWidth);
    setActive(Math.round(progress * (items.length - 1)));
  };

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
      >
        {items.map((item, i) => (
          <div key={i} className="snap-center flex-shrink-0">
            {renderCard(item, i)}
          </div>
        ))}
      </div>
      {/* Dot indicator */}
      <div className="flex justify-center gap-1.5 mt-5">
        {items.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width:      i === active ? 20 : 6,
              height:     6,
              background: i === active ? "#6366f1" : "#cbd5e1",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Flip card for associate roles ──────────────────────── */
function FlipCard({ role }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(role.members.length / itemsPerPage);

  // --- AUTOMATIC SLIDE LOGIC ---
  useEffect(() => {
    if (totalPages <= 1) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [totalPages]); 

  const currentMembers = role.members.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="flip-card w-[400px] h-[400px]">
      <div className="flip-card-inner w-full h-full">
        {/* Front Side */}
        <div className="flip-card-front w-full h-full bg-white/70 backdrop-blur-xl border border-white rounded-[2rem] p-9 flex flex-col justify-between">
          <div>
            <div className="mb-5 p-4 w-fit rounded-2xl" style={{ background: `${role.color}15`, border: `1px solid ${role.color}25` }}>
              <span style={{ color: role.color }}>{role.icon}</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{role.role}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{role.desc}</p>
          </div>
          <p className="text-xs text-slate-300 font-medium">Hover to see team →</p>
        </div>

        {/* Back Side (Auto-Sliding, No Arrows) */}
        <div className="flip-card-back w-full h-full bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-6 flex flex-col justify-center items-center relative">
          <h3 className="text-lg font-bold text-slate-900 mb-8" style={{ fontFamily: 'Syne, sans-serif' }}>{role.role}</h3>
          
          <div className="flex flex-row justify-center gap-10 w-full px-4 items-center min-h-[180px]">
            {currentMembers.map((m) => (
              <div key={m.name} className="flex flex-col items-center gap-3 transition-opacity duration-500">
                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center text-3xl font-bold shadow-xl overflow-hidden border-[6px]"
                  style={{ background: m.bg, color: m.fg, borderColor: `${m.fg}20` }}
                >
                  {m.image ? (
                    <img 
                      src={m.image.includes('drive.google.com') 
                        ? m.image.replace("open?id=", "thumbnail?id=") + "&sz=w1000" 
                        : m.image} 
                      alt={m.name} 
                      className={`w-full h-full object-cover ${m.pos || 'object-center'} ${m.zoom || 'scale-110'}`} 
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span>{m.initials}</span>
                  )}
                </div>
                <p className="text-[11px] font-black text-slate-800 text-center leading-tight max-w-[120px]">
                  {m.name}
                </p>
              </div>
            ))}
          </div>

          {/* Dots / Indicators only (Arrows removed) */}
          {totalPages > 1 && (
            <div className="absolute bottom-10 flex justify-center gap-2 w-full">
              {[...Array(totalPages)].map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${currentPage === i ? 'bg-indigo-600 w-6' : 'bg-slate-300 w-1.5'}`} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
/* ─── Fade-up wrapper ─────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Team page ───────────────────────────────────────────── */
export default function Team() {
  return (
    <section
      id="team"
      className="relative min-h-screen bg-[#f8faff] text-slate-800 py-32 overflow-hidden font-sans"
    >
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-blue-400/8 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-400/8 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-24">

        {/* ── Page header ── */}
        <FadeUp className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-100 bg-white shadow-sm text-indigo-600 text-xs font-bold uppercase tracking-widest">
            Our People
          </div>
          <h1
            className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            The Team
          </h1>
          <p className="max-w-3xl mx-auto text-center text-lg text-slate-500 font-medium leading-relaxed">
            ASTRA is powered by a dedicated collective of students at{" "}
            <span className="text-slate-900 font-bold">Walchand College of Engineering</span>,
            united to push the boundaries of{" "}
            <span className="text-indigo-600 font-semibold">Artificial Intelligence</span>.
          </p>
        </FadeUp>

        {/* ── Member Board ── */}
        <FadeUp>
          <div className="space-y-8">
            <h2
              className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight text-center"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Member Board{" "}
              <span className="text-slate-400 font-light text-3xl">(First Year)</span>
            </h2>
            <p className="text-center text-slate-400 text-sm">Swipe to explore →</p>

            <SwipeSection
              items={memberValues}
              renderCard={(item) => (
                <div
                  className="w-[360px] h-[300px] bg-white/70 backdrop-blur-xl border border-white
                    rounded-[2rem] p-9 flex flex-col justify-between group
                    hover:-translate-y-2 transition-all duration-400"
                  style={{ boxShadow: "0 20px 50px rgba(99,102,241,0.08)" }}
                >
                  <div>
                    <div
                      className="mb-5 p-4 w-fit rounded-2xl transition-colors"
                      style={{ background: `${item.color}12`, border: `1px solid ${item.color}22` }}
                    >
                      <span style={{ color: item.color }}>{item.icon}</span>
                    </div>
                    <h3
                      className="text-xl font-bold text-slate-900 mb-3"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  {/* Bottom progress bar */}
                  <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full w-0 group-hover:w-full transition-all duration-700 rounded-full"
                      style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                    />
                  </div>
                </div>
              )}
            />
          </div>
        </FadeUp>

        {/* ── Associate Board ── */}
        <FadeUp>
          <div className="space-y-8">
            <h2
              className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight text-center"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Associate Board
            </h2>
            <p className="text-center text-slate-400 text-sm">Hover each card to meet the team · Swipe to explore →</p>

            <SwipeSection
              items={associateRoles}
              renderCard={(role) => <FlipCard role={role} />}
            />
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
