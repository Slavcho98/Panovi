import React from "react";

const IMAGES = [
  "https://picsum.photos/seed/factory1/1200/900",
  "https://picsum.photos/seed/factory2/1200/900",
  "https://picsum.photos/seed/factory3/1200/900",
  "https://picsum.photos/seed/factory4/1200/900",
];

const FactoryShowcase: React.FC = () => {
  return (
    <section className="bg-neutral-100">
      <div className="mx-auto w-[90%] py-14">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
            Our Textile Factory
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm md:text-base leading-7 text-neutral-600">
            A modern textile facility specialized in high-quality workwear and
            corporate apparel — driven by innovation, precision, and over two
            decades of industry expertise.
          </p>
        </div>

        {/* Images row */}
        <div className="mt-8 flex gap-4">
          {IMAGES.map((src, i) => (
            <div
              key={i}
              className="basis-[20%] grow overflow-hidden rounded-2xl ring-1 ring-black/5 bg-white"
            >
              <img
                src={src}
                alt={`Factory ${i + 1}`}
                className="block h-36 sm:h-44 lg:h-52 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactoryShowcase;
