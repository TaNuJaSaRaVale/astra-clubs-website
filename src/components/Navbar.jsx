import logo from "../assets/astra-logo.png";

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0b0f19] border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div
          onClick={() => scrollToSection("home")}
          className="cursor-pointer"
        >
          <img
            src={logo}
            alt="ASTRA Club Logo"
            className="h-20 w-20 object-contain"
          />
        </div>

        {/* NAV LINKS */}
        <div className="flex gap-6 text-gray-300">
          <button onClick={() => scrollToSection("home")} className="hover:text-purple-400">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:text-purple-400">
            About
          </button>
          <button onClick={() => scrollToSection("events")} className="hover:text-purple-400">
            Events
          </button>
          <button onClick={() => scrollToSection("team")} className="hover:text-purple-400">
            Team
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-purple-400">
            Contact
          </button>
        </div>

      </div>
    </nav>
  );
}
