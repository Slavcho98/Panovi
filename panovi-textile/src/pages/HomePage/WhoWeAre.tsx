import React from "react";
import { NavLink } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";
import { Trans, useTranslation } from "react-i18next";
import aboutImg from "../../assets/factory-4.jpg";
import StatsStrip from "./StatsStrip";

const WhoWeAreSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-neutral-50 pb-10">
      <div className="mx-auto w-[90%] py-12 lg:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="basis-[40%] grow overflow-hidden rounded-2xl">
            <img
              src={aboutImg}
              alt={t("home.whoWeAre.altSewing")}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="basis-[40%] grow flex flex-col justify-center">
            <p className="text-xs font-light uppercase tracking-widest">
              {t("home.whoWeAre.kicker")}
            </p>
            <h2 className="mt-1 text-3xl font-semibold tracking-tight">
              {t("home.whoWeAre.title")}
            </h2>
            <p className="mt-3 text-sm leading-7 font-light">
              <Trans i18nKey="home.whoWeAre.body">
                <span className="font-medium">Panovi</span>
                <span className="font-medium">(Made in EUROPE)</span>
                <span className="font-medium">Pance Panov</span>
              </Trans>
            </p>
            <NavLink
              to="/about"
              className="group text-center md:text-start mt-4 w-1/2 md:w-1/3 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:border-neutral-400 hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-neutral-300"
            >
              <span>{t("home.whoWeAre.cta")}</span>
              <LuChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </NavLink>
          </div>
        </div>
      </div>
      <StatsStrip />
    </section>
  );
};

export default WhoWeAreSection;
