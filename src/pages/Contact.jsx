import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Instagram, Mail, MapPin, Building2, Send, Zap } from "lucide-react";

/* ─── Fade-up wrapper ─────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }) {
  const ref    = useRef(null);
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
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");
  const [sent,    setSent]    = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Feedback from ${name}`;
    const body    = `Name: ${name}%0AEmail: ${email}%0A%0AFeedback:%0A${message}`;
    window.location.href = `mailto:wce.astra@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactItems = [
    { icon: <Mail size={22} />,      label: "Email",       value: "wce.astra@gmail.com",                    isLink: true  },
    { icon: <Building2 size={22} />, label: "Department",  value: "AI & Machine Learning",                  isLink: false },
    { icon: <MapPin size={22} />,    label: "Institution", value: "Walchand College of Engineering, Sangli", isLink: false },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-28
        bg-[#f8faff] text-slate-800 overflow-hidden font-sans"
    >
      {/* Background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-400/10 blur-[130px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 blur-[130px] rounded-full -z-10" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* ── LEFT: Contact info ── */}
          <div className="space-y-12">

            <FadeUp className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-100 bg-white shadow-sm text-indigo-600 text-xs font-bold uppercase tracking-widest">
                <Zap size={13} className="fill-indigo-200" />
                Get in Touch
              </div>
              <h1
                className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Contact Us
              </h1>
              <p className="text-xl text-slate-500 max-w-md leading-relaxed font-medium">
                Have a question or a brilliant idea? Reach out to the{" "}
                <span className="text-slate-900 font-bold">ASTRA</span> team — let's build the
                future together.
              </p>
            </FadeUp>

            <div className="space-y-6">
              {contactItems.map((item, idx) => (
                <FadeUp key={idx} delay={idx * 0.08}>
                  <div className="group flex items-start gap-5 p-2">
                    <div
                      className="p-4 rounded-2xl bg-white border border-indigo-50 text-indigo-600 shadow-sm
                        group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600
                        transition-all duration-300 flex-shrink-0"
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      {item.isLink ? (
                        <a
                          href={`mailto:${item.value}`}
                          className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xl font-bold text-slate-900 leading-tight">{item.value}</p>
                      )}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Socials */}
            <FadeUp delay={0.3}>
              <div className="pt-8 border-t border-slate-200">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
                  Connect With Us
                </h2>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/company/astra2025/"
                    target="_blank" rel="noreferrer"
                    className="flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(10,102,194,0.06)",
                      border:     "1px solid rgba(10,102,194,0.14)",
                      color:      "#0a66c2",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#0a66c2"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(10,102,194,0.06)"; e.currentTarget.style.color = "#0a66c2"; }}
                  >
                    <Linkedin size={19} /> LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/wce_astra"
                    target="_blank" rel="noreferrer"
                    className="flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(236,72,153,0.06)",
                      border:     "1px solid rgba(236,72,153,0.14)",
                      color:      "#ec4899",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#ec4899"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(236,72,153,0.06)"; e.currentTarget.style.color = "#ec4899"; }}
                  >
                    <Instagram size={19} /> Instagram
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
                  background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(167,139,250,0.12))",
                  filter: "blur(24px)",
                }}
              />

              <div
                className="relative bg-white/80 backdrop-blur-2xl p-10 md:p-12 rounded-[2.75rem] border border-white"
                style={{ boxShadow: "0 30px 80px rgba(99,102,241,0.10)" }}
              >
                <h2
                  className="text-3xl font-bold mb-10 text-slate-900 tracking-tight text-center lg:text-left"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Send Feedback
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { label: "Full Name",      type: "text",  value: name,    set: setName,    ph: "Aarav Sharma" },
                    { label: "Email Address",  type: "email", value: email,   set: setEmail,   ph: "you@example.com" },
                  ].map((field) => (
                    <div key={field.label} className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        value={field.value}
                        onChange={(e) => field.set(e.target.value)}
                        placeholder={field.ph}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-5 py-4 rounded-2xl
                          focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white
                          outline-none transition-all placeholder:text-slate-300 font-medium"
                      />
                    </div>
                  ))}

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you think..."
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-5 py-4 rounded-2xl
                        focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white
                        outline-none resize-none transition-all placeholder:text-slate-300 font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-3 py-4 rounded-2xl
                      text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                    style={{
                      background:  sent ? "#10b981" : "#1e293b",
                      boxShadow:   "0 20px 40px rgba(15,23,42,0.18)",
                    }}
                    onMouseEnter={(e) => { if (!sent) { e.currentTarget.style.background = "#6366f1"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(99,102,241,0.3)"; } }}
                    onMouseLeave={(e) => { if (!sent) { e.currentTarget.style.background = "#1e293b"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(15,23,42,0.18)"; } }}
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
