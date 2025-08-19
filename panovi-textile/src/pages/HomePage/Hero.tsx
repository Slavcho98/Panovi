import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroImg from "../../assets/hero.png";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[60dvh] md:h-[80dvh] overflow-hidden">
      <img
        src={heroImg}
        alt={t("home.hero.alt")}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center text-white">
          <h1 className="whitespace-pre-line text-3xl sm:text-4xl lg:text-[48px] leading-[1]">
            {t("home.hero.title")}
          </h1>
          <p className="mt-3 text-base sm:text-2xl font-light leading-[1.2] text-white/85">
            {t("home.hero.subtitle")}
          </p>
          <NavLink
            to="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-1.5 text-base font-light text-white hover:bg-white/10"
          >
            {t("home.hero.cta")}
          </NavLink>
        </div>
      </div>
    </section>
  );
}
