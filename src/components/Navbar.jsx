import React, { useState, useEffect } from 'react';
import logo from "../assets/astra-logo.png";
import wceLogo from "../assets/wce-logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-white/70 backdrop-blur-xl py-3 border-slate-200/60 shadow-[0_10px_30px_rgba(59,130,246,0.08)]" 
          : "bg-transparent py-5 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12">

    {/* LOGOS */}
<div className="flex items-center gap-4 group">

  {/* WCE LOGO — FIRST */}
  <img
    src={wceLogo}
    alt="WCE Logo"
    className="h-14 md:h-15 w-auto cursor-pointer"
    onClick={() => scrollToSection("home")}
  />

  {/* Divider */}
  <div className="hidden lg:block h-6 w-px bg-slate-200/40"></div>

  {/* ASTRA LOGO — SECOND */}
  <img
    src={logo}
    alt="ASTRA Logo"
    className="h-14 md:h-15 w-auto cursor-pointer"
    onClick={() => scrollToSection("home")}
  />

</div>



        {/* NAV LINKS */}
<div className="hidden md:flex items-center gap-8 text-[13px] font-bold uppercase tracking-widest text-slate-500">
  {["Home", "About", "Events", "Team", "Contact"].map((item) => (
    <button
      key={item}
      onClick={() => scrollToSection(item.toLowerCase())}
      className="relative group transition-colors hover:text-blue-600"
    >
      {item}
      {/* Underline indicator */}
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(37,99,235,0.4)]"></span>
    </button>
  ))}
</div>


        {/* MOBILE TOGGLE */}
        <div className="md:hidden flex items-center">
            <div className="p-2 space-y-1.5 cursor-pointer">
               <div className="w-6 h-0.5 bg-slate-900"></div>
               <div className="w-4 h-0.5 bg-blue-600 ml-auto"></div>
            </div>
        </div>

      </div>
    </nav>
  );
}