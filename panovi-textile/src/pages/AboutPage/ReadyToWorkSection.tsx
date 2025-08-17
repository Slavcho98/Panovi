import { Link } from "react-router-dom";
import { LuMapPin, LuPanelRightOpen } from "react-icons/lu";

export default function ReadyToWorkSection() {
  return (
    <section className="bg-[#0F172A] text-white border-b border-white/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-24">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Ready to Work With Us?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 w-2/3 mx-auto">
            Experience the PANOVI difference. From concept to completion, we deliver textile solutions that exceed expectations.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/25 px-6 py-3 text-slate-200 hover:bg-white/10"
            >
              <span className="text-sm sm:text-base">Get In Touch</span>
              <LuMapPin className="h-5 w-5 opacity-80 group-hover:opacity-100" />
            </Link>

            <Link
              to="/process"
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/25 px-6 py-3 text-slate-200 hover:bg-white/10"
            >
              <span className="text-sm sm:text-base">See Our Process</span>
              <LuPanelRightOpen className="h-5 w-5 opacity-80 group-hover:opacity-100" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
