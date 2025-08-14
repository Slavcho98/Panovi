import React from "react";
import { NavLink } from "react-router-dom";
import aboutImg from "../../assets/about.png";
import StatsStrip from "./StatsStrip";

const WhoWeAreSection: React.FC = () => {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto w-[90%] py-12 lg:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="basis-[40%] grow overflow-hidden rounded-2xl">
            <img
              src={aboutImg}
              alt="Sewing at Panovi"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="basis-[40%] grow flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              get to know
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              WHO WE ARE
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              <strong>Panovi</strong> is a textile factory in the Republic of
              North Macedonia (Made in EUROPE) founded in 1999 by Pance Panov; a
              factory specializing in work and corporate clothing. Panovi
              actively produces over 60,000 pieces per month, with maximum
              quality, for customers across Europe.
            </p>
            <NavLink
              to="/about"
              className="mt-4 inline-block rounded-full border border-neutral-300 px-3.5 py-2 text-sm text-neutral-700 hover:border-neutral-400"
            >
              More About us &rsaquo;
            </NavLink>
          </div>
        </div>
      </div>
      <StatsStrip />
    </section>
  );
};

export default WhoWeAreSection;
