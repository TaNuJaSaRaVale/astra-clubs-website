import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Instagram, Mail, MapPin, Building2, Send, Zap } from "lucide-react";

/* ─── NEURAL CANVAS (Shared Dark Theme Background) ───────── */
function NeuralCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const COUNT = 35; // slightly lower count for contact page to not overwhelm
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.5 + 0.4,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(148,130,255,0.65)";
        ctx.fill();
      });
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}

/* ─── Fade-up wrapper ─────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Feedback from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0AFeedback:%0A${message}`;
    window.location.href = `mailto:wce.astra@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactItems = [
    { icon: <Mail size={22} />, label: "Email", value: "wce.astra@gmail.com", isLink: true },
    { icon: <Building2 size={22} />, label: "Department", value: "AI & Machine Learning", isLink: false },
    { icon: <MapPin size={22} />, label: "Institution", value: "Walchand College of Engineering, Sangli", isLink: false },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-28
        bg-[#080c18] text-white overflow-hidden font-sans"
    >
      {/* Background & Effects */}
      <NeuralCanvas />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 blur-[130px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* ── LEFT: Contact info ── */}
          <div className="space-y-12">

            <FadeUp className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 shadow-sm text-indigo-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                <Zap size={13} className="fill-indigo-300" />
                Get in Touch
              </div>
              <h1
                className="text-5xl md:text-7xl font-black text-white tracking-tighter"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Contact Us
              </h1>
              <p className="text-xl text-gray-400 max-w-md leading-relaxed font-medium mx-auto lg:mx-0">
                Have a question or a brilliant idea? Reach out to the{" "}
                <span className="text-white font-bold">ASTRA</span> team - let's build the
                future together.
              </p>
            </FadeUp>

            <div className="space-y-6">
              {contactItems.map((item, idx) => (
                <FadeUp key={idx} delay={idx * 0.08}>
                  <div className="group flex items-start gap-5 p-2 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                    <div
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 text-indigo-400 shadow-sm
                        group-hover:bg-indigo-500/20 group-hover:text-indigo-300 group-hover:border-indigo-500/50
                        transition-all duration-300 flex-shrink-0"
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      {item.isLink ? (
                        <a
                          href={`mailto:${item.value}`}
                          className="text-xl font-bold text-gray-200 hover:text-indigo-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xl font-bold text-gray-200 leading-tight">{item.value}</p>
                      )}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Socials */}
            <FadeUp delay={0.3}>
              <div className="pt-8 border-t border-white/10">
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5 text-center lg:text-left">
                  Connect With Us
                </h2>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href="https://www.linkedin.com/company/astra2025/"
                    target="_blank" rel="noreferrer"
                    className="flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-0.5 group"
                    style={{
                      background: "rgba(10,102,194,0.08)",
                      border: "1px solid rgba(10,102,194,0.2)",
                      color: "#60a5fa",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(10,102,194,0.2)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(10,102,194,0.4)"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(10,102,194,0.08)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.color = "#60a5fa"; }}
                  >
                    <Linkedin size={19} className="transition-transform group-hover:scale-110" /> LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/wce_astra"
                    target="_blank" rel="noreferrer"
                    className="flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-0.5 group"
                    style={{
                      background: "rgba(236,72,153,0.08)",
                      border: "1px solid rgba(236,72,153,0.2)",
                      color: "#f472b6",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(236,72,153,0.2)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(236,72,153,0.4)"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(236,72,153,0.08)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.color = "#f472b6"; }}
                  >
                    <Instagram size={19} className="transition-transform group-hover:scale-110" /> Instagram
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ── RIGHT: Form ── */}
          <FadeUp delay={0.1}>
            <div className="relative group">
              {/* Glow halo */}
              <div
                className="absolute -inset-4 rounded-[3.5rem] opacity-40 group-hover:opacity-70 transition-opacity duration-700 -z-10"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.15), transparent 70%)",
                  filter: "blur(24px)",
                }}
              />

              <div
                className="relative bg-white/5 backdrop-blur-2xl p-10 md:p-12 rounded-[2.75rem] border border-white/10"
                style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)" }}
              >
                <div className="absolute inset-0 pointer-events-none rounded-[2.75rem]" style={{ background: "radial-gradient(circle at 100% 0%, rgba(99,102,241,0.08) 0%, transparent 60%)" }} />

                <h2
                  className="relative text-3xl font-bold mb-10 text-white tracking-tight text-center lg:text-left"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Send Feedback
                </h2>

                <form onSubmit={handleSubmit} className="relative space-y-6">
                  {[
                    { label: "Full Name", type: "text", value: name, set: setName, ph: "Aarav Sharma" },
                    { label: "Email Address", type: "email", value: email, set: setEmail, ph: "you@example.com" },
                  ].map((field) => (
                    <div key={field.label} className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        value={field.value}
                        onChange={(e) => field.set(e.target.value)}
                        placeholder={field.ph}
                        className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-2xl
                          focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50 focus:bg-white/10
                          outline-none transition-all placeholder:text-gray-600 font-medium shadow-inner"
                      />
                    </div>
                  ))}

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you think..."
                      className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-2xl
                        focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50 focus:bg-white/10
                        outline-none resize-none transition-all placeholder:text-gray-600 font-medium shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-3 py-4 rounded-2xl
                      text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                    style={{
                      background: sent ? "#10b981" : "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      boxShadow: sent ? "0 0 20px rgba(16,185,129,0.4)" : "0 10px 30px rgba(99,102,241,0.3)",
                      border: "1px solid rgba(255,255,255,0.1)"
                    }}
                    onMouseEnter={(e) => { if (!sent) { e.currentTarget.style.boxShadow = "0 15px 40px rgba(99,102,241,0.5)"; } }}
                    onMouseLeave={(e) => { if (!sent) { e.currentTarget.style.boxShadow = "0 10px 30px rgba(99,102,241,0.3)"; } }}
                  >
                    {sent ? "Sent! ✓" : (
                      <>
                        Submit Feedback
                        <Send size={17} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
