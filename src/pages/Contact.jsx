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
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-[#020617] text-slate-300 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: CONTACT DETAILS */}
          <div className="space-y-12">
            <header className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest">
                <Zap size={14} />
                <span>Get in Touch</span>
              </div>
              <h1 className="text-6xl font-black text-white tracking-tighter">
                Contact Us<span className="text-indigo-500">.</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-md leading-relaxed">
                Have a question or a brilliant idea? Reach out to the <span className="text-white font-semibold">ASTRA</span> team and let's build the future together.
              </p>
            </header>

            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="group flex items-start gap-5">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 group-hover:border-indigo-500/50 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:wce.astra@gmail.com" className="text-xl font-semibold text-white hover:text-indigo-400 transition-colors">
                    wce.astra@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-5">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 group-hover:border-indigo-500/50 transition-colors">
                  <Building2 size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Department</p>
                  <p className="text-xl font-semibold text-white">AI & Machine Learning</p>
                </div>
              </div>

              <div className="group flex items-start gap-5">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 group-hover:border-indigo-500/50 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Institution</p>
                  <p className="text-xl font-semibold text-white leading-tight">
                    Walchand College of Engineering, Sangli
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="pt-8 border-t border-slate-800/50">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Connect With Us</h2>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/astra2025/" target="_blank" rel="noreferrer" 
                   className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0a66c2]/10 border border-[#0a66c2]/20 text-[#0a66c2] hover:bg-[#0a66c2]/20 transition-all font-bold">
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a href="https://www.instagram.com/wce_astra" target="_blank" rel="noreferrer"
                   className="flex items-center gap-3 px-5 py-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-500 hover:bg-pink-500/20 transition-all font-bold">
                  <Instagram size={20} /> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: FEEDBACK FORM */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-[2.5rem] blur opacity-75 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-[#0f172a]/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl">
              <h2 className="text-3xl font-bold mb-8 text-white tracking-tight text-center lg:text-left">
                Send Feedback
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-900/50 border border-slate-800 text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-600"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900/50 border border-slate-800 text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-600"
                    placeholder="Your email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    required
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-900/50 border border-slate-800 text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none resize-none transition-all placeholder:text-slate-600"
                    placeholder="Tell us what you think..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-5 rounded-2xl shadow-xl shadow-indigo-500/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
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