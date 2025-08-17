import MetricItem, { type MetricItemProps } from "./MetricItem";

type ManufacturingExcellenceProps = {
  headingLead?: string;
  headingHighlight?: string;
  description?: string;
  items: MetricItemProps[];
  className?: string;
};

export default function ManufacturingExcellence({
  headingLead = "Manufacturing",
  headingHighlight = "Excellence",
  description = "From automated cutting systems to precision finishing, our state-of-the-art equipment and expert craftsmanship ensure exceptional quality at every stage of production",
  items,
  className = "",
}: ManufacturingExcellenceProps) {
  return (
    <section
      className={`bg-gradient-to-br from-[#0E2241] to-[#0A1830] text-white ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
            <span className="block">{headingLead}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2E7BFF] to-[#1AA3FF]">
              {headingHighlight}
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-slate-300">
            {description}
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <MetricItem key={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
