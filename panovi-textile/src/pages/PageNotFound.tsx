import { NavLink } from "react-router-dom";
import sewingImg from "../assets/vecteezy_sewing-machine-vector-isolated-on-white-background_15159466-removebg-preview.png";

export default function PageNotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F4F7FC]">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#cfe3ff_0%,transparent_60%)]" />

      {/* Content */}
      <div className="relative mx-auto w-[90%] max-w-5xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center">
          {/* Illustration */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-blue-500/10 blur-2xl" />
            <img
              src={sewingImg}
              alt="Sewing machine illustration"
              className="relative h-44 w-auto sm:h-60 object-contain drop-shadow-xl"
            />
          </div>

          {/* Text */}
          <p className="mt-6 text-sm font-medium tracking-wider text-blue-600">
            ERROR 404
          </p>
          <h1 className="mt-1 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Page Not Found
          </h1>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-neutral-600">
            We couldn’t stitch that page together. It may have been moved,
            deleted, or the URL is incorrect.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
            <NavLink
              to="/"
              className="inline-flex w-full items-center justify-center rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:border-neutral-400"
            >
              Back to Home
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#0F172A] px-5 py-2.5 text-sm font-medium text-white hover:opacity-95"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
