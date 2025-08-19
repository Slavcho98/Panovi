import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import logoLight from "../assets/logo-white.png";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="mx-auto w-[90%] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src={logoLight}
              alt={t("footer.logoAlt")}
              className="h-24 w-auto"
            />
            <p className="mt-3 max-w-sm text-sm text-white/70">
              {t("footer.tagline")}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/panovidooel/"
                target="_blank"
                rel="noreferrer"
                aria-label={t("footer.linkedinAria")}
                className="inline-flex h-12 w-12 items-center justify-center rounded-md ring-1 ring-white/20 hover:ring-white/40"
              >
                <FaLinkedin className="text-4xl" />
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold tracking-wider">
              {t("footer.reachUs")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <FiPhone className="mt-0.5 shrink-0" />
                <a
                  href="tel:+38972227215"
                  className="hover:text-white underline-offset-4 hover:underline"
                >
                  +389 72 227 215
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="mt-0.5 shrink-0" />
                <a
                  href="mailto:panovi.vladimir@gmail.com"
                  className="hover:text-white underline-offset-4 hover:underline break-words"
                >
                  panovi.vladimir@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 shrink-0" />
                <span>
                  {t("footer.address.line1")}
                  <br />
                  {t("footer.address.line2")}
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold tracking-wider">
              {t("footer.menu")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <NavLink to="/" className="hover:text-white">
                  {t("nav.home")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-white">
                  {t("nav.about")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/process" className="hover:text-white">
                  {t("nav.process")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/certificates" className="hover:text-white">
                  {t("nav.certificates")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-white">
                  {t("nav.contact")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy" className="hover:text-white">
                  {t("footer.privacy")}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        <div className="flex flex-col items-center justify-between gap-3  text-white font-light sm:flex-row text-sm">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <p>
            {t("footer.designedBy")}{" "}
            <a
              href="https://www.linkedin.com/in/adrijan-georgievski?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white underline-offset-4 underline"
              title="Adrijan G"
            >
              Adrijan G
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
