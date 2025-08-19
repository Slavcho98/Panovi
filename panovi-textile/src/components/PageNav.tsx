import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaFacebook } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo-black.png";

function PageNav() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    [
      "block px-2 py-2 transition-colors",
      isActive ? "font-semibold text-black" : "text-neutral-600 hover:text-black",
    ].join(" ");

  const navItems = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.about"), to: "/about" },
    { label: t("nav.process"), to: "/process" },
    { label: t("nav.certificates"), to: "/certificates" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  const setLang = (lng: "en" | "de") => i18n.changeLanguage(lng);
  const lang = (i18n.resolvedLanguage || "en").slice(0, 2);

  const LangButtons = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-3 text-sm text-neutral-700 ${className}`}>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-1.5 rounded focus:outline-none focus:ring-2 focus:ring-neutral-300 ${
          lang === "en" ? "font-semibold text-black underline underline-offset-4" : "hover:text-black"
        }`}
      >
        EN
      </button>
      <span className="text-neutral-300">|</span>
      <button
        onClick={() => setLang("de")}
        aria-pressed={lang === "de"}
        className={`px-1.5 rounded focus:outline-none focus:ring-2 focus:ring-neutral-300 ${
          lang === "de" ? "font-semibold text-black underline underline-offset-4" : "hover:text-black"
        }`}
      >
        DE
      </button>
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex">
            <LangButtons />
          </div>

          <NavLink to="/" onClick={() => setOpen(false)} className="inline-flex">
            <img src={logo} alt="Panovi Logo" className="h-8 w-auto select-none" />
          </NavLink>
        </div>

        <ul className="hidden lg:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={linkCls}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href="https://www.linkedin.com/company/panovidooel/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:text-black"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          {/* <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:text-black"
          >
            <FaFacebook className="h-4 w-4" />
          </a> */}
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-neutral-300 text-neutral-700 hover:text-black hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 transform bg-current transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 transform bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-5 transform bg-current transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={[
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 border-t border-neutral-200",
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="px-4 sm:px-6 py-4 space-y-4">
          <LangButtons />

          <ul className="grid gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={linkCls} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:text-black"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:text-black"
            >
              <FaFacebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default PageNav;
