import { useState } from "react";
import { Linkedin, Instagram, Mail, MapPin, Building2, Send, Zap } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Feedback from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0AFeedback:%0A${message}`;
    window.location.href = `mailto:wce.astra@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-[#f8faff] text-slate-800 overflow-hidden font-sans">
      
      {/* Background Glows - Soft Blue Tones */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-400/10 blur-[130px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400/10 blur-[130px] rounded-full -z-10" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT: CONTACT DETAILS */}
          <div className="space-y-12">
            <header className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-100 bg-white shadow-sm text-blue-600 text-xs font-bold uppercase tracking-widest">
                <Zap size={14} className="fill-blue-600/20" />
                <span>Get in Touch</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter">
                Contact Us<span className="text-blue-600">.</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-md leading-relaxed font-medium">
                Have a question or a brilliant idea? Reach out to the <span className="text-slate-900 font-bold">ASTRA</span> team and let's build the future together.
              </p>
            </header>

            <div className="space-y-8">
              {/* Contact Cards */}
              {[
                { icon: <Mail size={24} />, label: "Email", value: "wce.astra@gmail.com", isLink: true },
                { icon: <Building2 size={24} />, label: "Department", value: "AI & Machine Learning", isLink: false },
                { icon: <MapPin size={24} />, label: "Institution", value: "Walchand College of Engineering, Sangli", isLink: false }
              ].map((item, idx) => (
                <div key={idx} className="group flex items-start gap-6 p-2">
                  <div className="p-4 rounded-2xl bg-white border border-blue-50 text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                    {item.isLink ? (
                      <a href={`mailto:${item.value}`} className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-2xl font-bold text-slate-900 leading-tight">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          
              /*UI enhancement */

            {/* SOCIAL LINKS */}
            <div className="pt-10 border-t border-slate-200">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Connect With Us</h2>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.linkedin.com/company/astra2025/" target="_blank" rel="noreferrer" 
                   className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0a66c2]/5 border border-[#0a66c2]/10 text-[#0a66c2] hover:bg-[#0a66c2] hover:text-white transition-all font-bold shadow-sm">
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a href="https://www.instagram.com/wce_astra" target="_blank" rel="noreferrer"
                   className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-pink-500/5 border border-pink-500/10 text-pink-500 hover:bg-pink-500 hover:text-white transition-all font-bold shadow-sm">
                  <Instagram size={20} /> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: FEEDBACK FORM */}
          <div className="relative group">
            {/* Soft decorative glow behind the card */}
            <div className="absolute -inset-4 bg-linear-to-tr from-blue-500/10 to-indigo-500/10 rounded-[3.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-700" />
            
            <div className="relative bg-white/80 backdrop-blur-2xl p-10 md:p-12 rounded-[3rem] border border-white shadow-[0_30px_80px_rgba(59,130,246,0.12)]">
              <h2 className="text-4xl font-bold mb-10 text-slate-900 tracking-tight text-center lg:text-left">
                Send Feedback
              </h2>

              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="space-y-2.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-6 py-4.5 rounded-[1.25rem] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-6 py-4.5 rounded-[1.25rem] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    required
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-6 py-4.5 rounded-[1.25rem] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none resize-none transition-all placeholder:text-slate-400 font-medium"
                    placeholder="Tell us what you think..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group bg-slate-900 hover:bg-blue-600 text-white font-bold py-5 rounded-3xl shadow-[0_20px_40px_rgba(15,23,42,0.2)] hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  Submit Feedback <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}