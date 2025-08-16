import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaFacebook } from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import logoLight from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="mx-auto w-[90%] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={logoLight} alt="Panovi" className="h-10 w-auto" />
            <p className="mt-3 max-w-sm text-sm text-white/70">
              Where innovation meets responsibility. Textile excellence in
              harmony with nature.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-white/20 hover:ring-white/40"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-white/20 hover:ring-white/40"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold tracking-wider">REACH US</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <FiPhone className="mt-0.5 shrink-0" />
                <span>+389 072-227-285</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="mt-0.5 shrink-0" />
                <span>panovi.vladimir@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 shrink-0" />
                <span>
                  str. Miro Baraga nn 2210 Probishtip
                  <br />
                  North Macedonia
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold tracking-wider">MENU</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <NavLink to="/" className="hover:text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-white">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="hover:text-white">
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/certificates" className="hover:text-white">
                  Certificates
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-white">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-white">
                  Find us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Panovi DOOEL. All rights reserved.</p>
          <a
            href="#"
            className="hover:text-white"
            title="Designed by Adrijan G"
          >
            designed by Adrijan G
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
