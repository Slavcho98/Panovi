// src/components/StandOutSection.jsx
import React from "react";

const VideoPlaceholder = () => (
  <div className="relative aspect-video w-full rounded-[28px] bg-white/10 ring-1 ring-white/15 shadow-lg flex items-center justify-center">
    <span className="text-3xl font-semibold text-slate-200">Video</span>
    <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" />
  </div>
);

export default function StandOutSection() {
  return (
    <section className="bg-[#16283b] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <VideoPlaceholder />
          <div className="space-y-3">
            <p className="text-sm text-slate-300">crafted to make</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
              You Stand Out
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-200">
              modern textile factory with a <span className="font-semibold">high level of mechanization</span>, a{" "}
              <span className="font-semibold">well-structured organizational system</span>, and advanced software
              for real-time production monitoring. Thanks to our production process, we offer{" "}
              <span className="font-semibold">complete solutions for workwear and corporate clothing</span>, tailored
              to meet the specific needs of each client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
