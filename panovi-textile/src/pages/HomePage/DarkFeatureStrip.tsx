import React from "react";
import { NavLink } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { PiPresentationChartBold } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";

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
    <h3 className="text-white text-2xl sm:text-[26px] font-semibold tracking-tight">
      {title}
    </h3>
    <p className="mt-2 max-w-xl text-sm leading-7 text-white/75">{children}</p>
    <Pill to={to} icon={icon}>
      {ctaText}
    </Pill>
  </div>
);

const DarkFeatureStrip: React.FC = () => {
  return (
    <section className="bg-[#1D2A3D]">
      <div className="mx-auto w-[90%] px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-[70%]">
              <LeftBlock
                title="Visit our local factory"
                ctaText="View location"
                to="/contact"
                icon={<SlLocationPin size={16} />}
              >
                See where craftsmanship meets innovation. Located in the heart
                of Probishtip, North Macedonia.
              </LeftBlock>
            </div>
            <div className="lg:w-[30%] lg:ml-auto">
              <BigGhostCard icon={<SlLocationPin size={32} />} />
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-[70%]">
              <LeftBlock
                title="What proves our quality"
                ctaText="See our certificates"
                to="/certificates"
                icon={<GoShieldCheck size={16} />}
              >
                Certifications that speak for us:{" "}
                <span className="font-medium">OEKO-TEX®</span> &amp;{" "}
                <span className="font-medium">TÜV Austria</span>. Trusted by
                standards. Proven by results.
              </LeftBlock>
            </div>
            <div className="lg:w-[30%] lg:ml-auto">
              <BigGhostCard icon={<GoShieldCheck size={32} />} />
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-[70%]">
              <LeftBlock
                title="How we make it happen"
                ctaText="See behind the scenes"
                to="/gallery"
                icon={<PiPresentationChartBold size={16} />}
              >
                Crafted with care. Backed by process. Every step is optimized
                for precision, efficiency, and sustainability.
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
