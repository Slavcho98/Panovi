export type CertificateImageItemProps = {
  src: string;
  alt?: string;
  category: string;
  title: string;
  description: string;
  pillClassName?: string;
  className?: string;
  onOpen?: () => void;
};

export default function CertificateImageItem({
  src,
  alt = "Certificate",
  category,
  title,
  description,
  pillClassName,
  className = "",
  onOpen,
}: CertificateImageItemProps) {
  const pill =
    pillClassName ??
    (category.toLowerCase().includes("environment")
      ? "bg-blue-50 text-blue-700 ring-blue-200/60"
      : category.toLowerCase().includes("quality")
      ? "bg-indigo-50 text-indigo-700 ring-indigo-200/60"
      : category.toLowerCase().includes("safety")
      ? "bg-amber-50 text-amber-700 ring-amber-200/60"
      : category.toLowerCase().includes("energy")
      ? "bg-emerald-50 text-emerald-700 ring-emerald-200/60"
      : "bg-blue-50 text-blue-700 ring-blue-200/60");

  return (
    <div className={`rounded-[24px] overflow-hidden shadow-lg ring-1 ring-black/10 bg-white ${className}`}>
      <button
        type="button"
        onClick={onOpen}
        className="group relative block aspect-[3/4] w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
        aria-label={`Open ${title}`}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
        />
      </button>

      <div className="p-4 sm:p-5">
        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${pill}`}>
          {category}
        </span>

        <h3 className="mt-2 text-[15px] sm:text-base font-semibold text-neutral-900">
          {title}
        </h3>
        <p className="mt-1 text-xs sm:text-sm leading-snug text-neutral-500">
          {description}
        </p>
      </div>
    </div>
  );
}
