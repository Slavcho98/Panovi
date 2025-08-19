import React from "react";
import { NavLink } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { PiPresentationChartBold } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";
import { useTranslation, Trans } from "react-i18next";

const Pill = ({
  to,
  children,
  icon,
}: {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => (
  <NavLink
    to={to}
    className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/25 px-3.5 py-2 text-sm text-white hover:border-white/40"
  >
    <span>{children}</span>
    {icon ? <span className="text-white/70">{icon}</span> : null}
  </NavLink>
);

const BigGhostCard = ({ icon }: { icon: React.ReactNode }) => (
  <div className="bg-[#314158] relative h-40 w-full rounded-[28px] ring-1 ring-white/10 backdrop-blur-sm flex items-center justify-center">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-white/15 text-white/70">
      {icon}
    </div>
    <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/5" />
  </div>
);

const LeftBlock = ({
  title,
  children,
  ctaText,
  to,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  ctaText: string;
  to: string;
  icon?: React.ReactNode;
}) => (
  <div>
    <h3 className="text-white text-2xl sm:text-[32px] font-medium tracking-tight">
      {title}
    </h3>
    <p className="mt-2 max-w-xl text-sm leading-7 text-white font-light">{children}</p>
    <Pill to={to} icon={icon}>
      {ctaText}
    </Pill>
  </div>
);

const DarkFeatureStrip: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#1D2A3D]">
      <div className="mx-auto w-[90%] px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-14">
          {/* Visit */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-[70%]">
              <LeftBlock
                title={t("home.features.visit.title")}
                ctaText={t("home.features.visit.cta")}
                to="/contact"
                icon={<SlLocationPin size={16} />}
              >
                {t("home.features.visit.body")}
              </LeftBlock>
            </div>
            <div className="lg:w-[30%] lg:ml-auto">
              <BigGhostCard icon={<SlLocationPin size={32} />} />
            </div>
          </div>

          {/* Quality */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-[70%]">
              <LeftBlock
                title={t("home.features.quality.title")}
                ctaText={t("home.features.quality.cta")}
                to="/certificates"
                icon={<GoShieldCheck size={16} />}
              >
                <Trans i18nKey="home.features.quality.body">
                  Zertifizierungen, die für uns sprechen: <span className="font-medium">OEKO-TEX®</span> &{" "}
                  <span className="font-medium">TÜV Austria</span>. Trusted by standards. Proven by results.
                </Trans>
              </LeftBlock>
            </div>
            <div className="lg:w-[30%] lg:ml-auto">
              <BigGhostCard icon={<GoShieldCheck size={32} />} />
            </div>
          </div>

          {/* Process */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-[70%]">
              <LeftBlock
                title={t("home.features.process.title")}
                ctaText={t("home.features.process.cta")}
                to="/process"
                icon={<PiPresentationChartBold size={16} />}
              >
                {t("home.features.process.body")}
              </LeftBlock>
            </div>
            <div className="lg:w-[30%] lg:ml-auto">
              <BigGhostCard icon={<PiPresentationChartBold size={32} />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkFeatureStrip;
