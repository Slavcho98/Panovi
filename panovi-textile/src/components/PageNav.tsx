import { NavLink } from "react-router-dom";
import { FaLinkedin, FaFacebook } from "react-icons/fa6";
import logo from "../assets/logo-black.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Certificates", to: "/certificates" },
  { label: "Contact", to: "/contact" },
];

function PageNav() {
  return (
    <nav className="bg-white border-y border-neutral-200">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-sm text-neutral-700">
            <button className="hover:text-black">EN</button>
            <span className="text-neutral-300">|</span>
            <button className="hover:text-black">DE</button>
          </div>
          <NavLink to="/">
            <img
              src={logo}
              alt="Panovi Logo"
              className="h-8 w-auto select-none"
            />
          </NavLink>
        </div>

        <ul className="flex items-center gap-6 text-sm text-neutral-600">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  [
                    "transition-colors",
                    isActive ? "font-semibold text-black" : "hover:text-black",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:text-black"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:text-black"
          >
            <FaFacebook className="h-4 w-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default PageNav;
