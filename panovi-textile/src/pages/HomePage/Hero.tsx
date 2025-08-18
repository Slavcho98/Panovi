import React from "react";
import { NavLink } from "react-router-dom";
import heroImg from "../../assets/hero.png";

const Hero: React.FC = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="panovi-banner"
          className="h-[60dvh] md:h-[80dvh] w-full object-cover object-center"
        />
      </div>

      <div className="relative mx-auto flex h-[80vh] w-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] leading-[1]">
            Crafting Custom Apparel For
            <br className="hidden sm:block" />
            Every Business, Everywhere !
          </h1>
          <p className="mt-3 text-base sm:text-2xl font-light leading-[1.2] text-white/85">
            From Local Dreams To Global Seams
          </p>
          <NavLink
            to="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-1.5 text-base font-light text-white hover:bg-white/10"
          >
            Get In Touch
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
