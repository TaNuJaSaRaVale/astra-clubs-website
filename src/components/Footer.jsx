import { Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#080c18] text-gray-500 overflow-hidden font-sans border-t border-white/5">
      {/* Top gradient blur glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-indigo-500/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left: branding */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span
            className="text-2xl font-black tracking-tight"
            style={{
              fontFamily: "Syne, sans-serif",
              background: "linear-gradient(135deg, #fff, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ASTRA
          </span>
          <p className="text-xs text-gray-400 font-medium tracking-wide">AI & ML Club · WCE Sangli</p>
        </div>

        {/* Center: copyright */}
        <p className="text-sm text-gray-500 text-center font-medium">
          © {new Date().getFullYear()} ASTRA Club. All rights reserved.
        </p>

        {/* Right: social icons */}
        <div className="flex items-center gap-4">
          {[
            { href: "mailto:wce.astra@gmail.com",                       icon: <Mail size={18} />,      label: "Email"     },
            { href: "https://www.linkedin.com/company/astra2025/",       icon: <Linkedin size={18} />,  label: "LinkedIn"  },
            { href: "https://www.instagram.com/wce_astra",               icon: <Instagram size={18} />, label: "Instagram" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400
                bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 hover:text-indigo-300
                transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(99,102,241,0.2)]"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}