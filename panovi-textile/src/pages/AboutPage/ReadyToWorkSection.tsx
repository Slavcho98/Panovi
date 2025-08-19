import { Link } from "react-router-dom";
import { LuMapPin, LuPanelRightOpen } from "react-icons/lu";
import { useTranslation } from "react-i18next";

export default function ReadyToWorkSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#0F172A] text-white border-b border-white/30">
      <div className="mx-auto w-[90%] max-w-5xl py-16 sm:py-24">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight">
            {t("about.ready.title")}
          </h2>

          <p className="mt-4 w-full sm:w-2/3 mx-auto text-sm sm:text-lg text-slate-300 font-light">
            {t("about.ready.subtitle")}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5">
            <Link
              to="/contact"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-white/25 px-6 py-3 text-slate-200 hover:bg-white/10"
            >
              <span className="text-sm sm:text-base">{t("about.ready.contactCta")}</span>
              <LuMapPin className="h-5 w-5 opacity-80 group-hover:opacity-100" />
            </Link>

            <Link
              to="/process"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-white/25 px-6 py-3 text-slate-200 hover:bg-white/10"
            >
              <span className="text-sm sm:text-base">{t("about.ready.processCta")}</span>
              <LuPanelRightOpen className="h-5 w-5 opacity-80 group-hover:opacity-100" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
