import React from "react";
import { NavLink } from "react-router-dom";
import heroImg from "../../assets/hero.png";

const Hero: React.FC = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          className="h-[58vh] w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-neutral-900/45" />
      </div>

      <div className="relative mx-auto flex h-[58vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-tight">
            Crafting Custom Apparel For
            <br className="hidden sm:block" />
            Every Business, Everywhere !
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/85">
            From Local Dreams To Global Seams
          </p>
          <NavLink
            to="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
          >
            Get In Touch
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
