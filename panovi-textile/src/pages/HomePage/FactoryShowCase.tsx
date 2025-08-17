import React, { useRef } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

import img1 from "../../assets/factory-1.jpg";
import img2 from "../../assets/factory-2.png";
import img3 from "../../assets/factory-3.jpg";
import img4 from "../../assets/factory-4.jpg";

const IMAGES: string[] = [img1, img2, img3, img4];

const FactoryShowcase: React.FC = () => {
  const railRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  const Card = ({ src, alt }: { src: string; alt: string }) => (
    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
      <div className="aspect-[4/3] w-full">
        <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      </div>
    </div>
  );

  return (
    <section className="bg-neutral-100">
      <div className="mx-auto w-[90%] py-14">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
            Our Textile Factory
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm md:text-base leading-7 text-neutral-600">
            A modern textile facility specialized in high-quality workwear and corporate apparel — driven by
            innovation, precision, and over two decades of industry expertise.
          </p>
        </div>

        {/* Mobile slider (< md) */}
        <div className="mt-8 md:hidden relative">
          <div
            ref={railRef}
            className="flex snap-x snap-mandatory overflow-x-auto gap-4 scroll-px-4 pr-4"
            role="region"
            aria-label="Factory images"
          >
            {IMAGES.map((src, i) => (
              <div
                key={i}
                className="min-w-[85%] snap-start"
                aria-roledescription="slide"
                aria-label={`Slide ${i + 1} of ${IMAGES.length}`}
              >
                <Card src={src} alt={`Factory image ${i + 1}`} />
              </div>
            ))}
          </div>

          {/* Prev / Next */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1">
            <button
              onClick={() => scroll(-1)}
              className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow ring-1 ring-black/10 hover:bg-white"
              aria-label="Previous"
            >
              <IoChevronBackOutline className="h-5 w-5" aria-hidden />
            </button>
            <button
              onClick={() => scroll(1)}
              className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow ring-1 ring-black/10 hover:bg-white"
              aria-label="Next"
            >
              <IoChevronForwardOutline className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        {/* Tablet and up: grid (md:2, lg:4) */}
        <div className="mt-8 hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
          {IMAGES.map((src, i) => (
            <Card key={i} src={src} alt={`Factory image ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactoryShowcase;
