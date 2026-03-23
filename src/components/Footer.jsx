import { Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#f8faff] text-slate-500 overflow-hidden">
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 5%, rgba(99,102,241,0.3) 30%, rgba(167,139,250,0.4) 50%, rgba(99,102,241,0.3) 70%, transparent 95%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: branding */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span
            className="text-lg font-black text-slate-900 tracking-tight"
            style={{
              fontFamily: "Syne, sans-serif",
              background: "linear-gradient(135deg, #6366f1, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ASTRA
          </span>
          <p className="text-xs text-slate-400">AI & ML Club · WCE Sangli</p>
        </div>

        {/* Center: copyright */}
        <p className="text-xs text-slate-400 text-center">
          © {new Date().getFullYear()} ASTRA Club. All rights reserved.
        </p>

        {/* Right: social icons */}
        <div className="flex items-center gap-3">
          {[
            { href: "mailto:wce.astra@gmail.com",                       icon: <Mail size={16} />,      label: "Email"     },
            { href: "https://www.linkedin.com/company/astra2025/",       icon: <Linkedin size={16} />,  label: "LinkedIn"  },
            { href: "https://www.instagram.com/wce_astra",               icon: <Instagram size={16} />, label: "Instagram" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-400
                border border-slate-200 bg-white hover:border-indigo-300 hover:text-indigo-500
                transition-all duration-200 hover:-translate-y-0.5"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}