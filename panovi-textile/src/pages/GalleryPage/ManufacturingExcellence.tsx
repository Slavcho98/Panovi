import StatusLabel, { type StatusLabelProps } from "../../ui/StatusLabel";
import MetricItem, { type MetricItemProps } from "./MetricItem";

type ManufacturingExcellenceProps = {
  headingLead?: string;
  headingHighlight?: string;
  description?: string;
  items: MetricItemProps[];
  className?: string;
  statusLabel?: StatusLabelProps;
};

export default function ManufacturingExcellence({
  headingLead = "Manufacturing",
  headingHighlight = "Excellence",
  description = "From automated cutting systems to precision finishing, our state-of-the-art equipment and expert craftsmanship ensure exceptional quality at every stage of production",
  items,
  className = "",
  statusLabel,
}: ManufacturingExcellenceProps) {
  const isThree = items.length === 3;
  const gridCols = isThree
    ? "grid-cols-1 sm:grid-cols-3"
    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className={`relative overflow-hidden text-white ${className}`}>
      {/* Radial gradient + subtle dark veil */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_0%,#1E3C72_0%,#0A1A3C_100%)]" />
      <div className="absolute inset-0 -z-10 bg-black/10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center">
          {statusLabel && (
            <div className="mb-6 flex justify-center">
              <StatusLabel {...statusLabel} />
            </div>
          )}

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight">
            <span className="block">{headingLead}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2E7BFF] to-[#1AA3FF]">
              {headingHighlight}
            </span>
          </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-slate-300 font-light">
            {description}
          </p>
        </div>

        <div className={`mt-12 grid gap-8 ${gridCols}`}>
          {items.map((it, i) => (
            <MetricItem key={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
