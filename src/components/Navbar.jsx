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
        
        {/* Logo */}
        <h1
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold text-white cursor-pointer"
        >
          ASTRA
        </h1>

        {/* Navigation Links */}
        <div className="flex gap-6 text-gray-300">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-blue-400 transition"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-blue-400 transition"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("events")}
            className="hover:text-blue-400 transition"
          >
            Events
          </button>

          <button
            onClick={() => scrollToSection("team")}
            className="hover:text-blue-400 transition"
          >
            Team
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-blue-400 transition"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
