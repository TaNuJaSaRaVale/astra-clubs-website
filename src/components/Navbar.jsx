import logo from "../assets/astra-logo.png";

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b">
  <div className="flex items-center justify-between px-6 lg:px-12 py-4">

    {/* LOGO — hard left */}
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="ASTRA Logo"
        className="h-14 w-auto cursor-pointer"
        onClick={() => scrollToSection("home")}
      />
    </div>

    {/* NAV LINKS */}
    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
      {["home", "about", "events", "team", "contact"].map((item) => (
        <button
          key={item}
          onClick={() => scrollToSection(item)}
          className="relative group"
        >
          <span className="capitalize">{item}</span>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-slate-900 transition-all group-hover:w-full"></span>
        </button>
      ))}
    </div>
  </div>
</nav>

  );
}
