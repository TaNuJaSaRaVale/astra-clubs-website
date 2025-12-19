import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-white shadow-sm">
      <h1 className="text-xl font-bold text-purple-600">ASTRA</h1>

      <ul className="flex gap-6 font-medium">
        {["/", "/about", "/events", "/team", "/contact"].map((path, i) => {
          const labels = ["Home", "About", "Events", "Team", "Contact"];
          return (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600"
                    : "text-gray-700 hover:text-purple-500"
                }
              >
                {labels[i]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
