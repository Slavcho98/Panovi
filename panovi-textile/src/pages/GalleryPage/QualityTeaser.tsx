type QualityTeaserProps = {
  title: string;
  description: string;
  highlights?: string[];
  className?: string;
  boxClassName?: string;
};

export default function QualityTeaser({
  title,
  description,
  highlights = [],
  className = "",
  boxClassName = "",
}: QualityTeaserProps) {
  return (
    <section className={`w-full py-12 sm:py-16 ${className}`}>
      <div
        className={`mx-auto w-4/5 rounded-[26px] border border-neutral-200 bg-white/90 shadow-[0_6px_0_rgba(0,0,0,0.08)] ${boxClassName}`}
      >
        <div className="px-6 py-8 text-center sm:px-10 sm:py-10">
          <h3 className="text-lg sm:text-xl font-semibold text-neutral-800">
            {title}
          </h3>

          <p className="mx-auto mt-3 max-w-3xl text-xs sm:text-sm leading-relaxed text-neutral-600">
            {description}
          </p>

          {highlights.length > 0 && (
            <p className="mx-auto mt-4 max-w-3xl text-[11px] sm:text-xs text-neutral-700">
              {highlights.join(" • ")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
