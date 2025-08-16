import React from "react";
import heroImg from "../../assets/about-banner.jpeg";

const Hero: React.FC = () => {
  return (
    <section
      style={{ backgroundImage: `url(${heroImg})` }}
      className="relative h-[50vh] bg-cover bg-no-repeat bg-[position:center_40%]"
    >
      <div className="absolute inset-0 bg-[#005BE4]/50" />

      <div className="relative mx-auto flex h-full w-full max-w-7xl items-center pt-64 justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center text-white">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/80">
            Get to know
          </p>
          <h1 className="mt-2 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.9] uppercase">
        who we are
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
