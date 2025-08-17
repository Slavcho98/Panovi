import { useEffect, useState } from "react";
import { LuX } from "react-icons/lu"; 
import CertificateImageItem, {
  type CertificateImageItemProps,
} from "./CertificateImageItem";

type CertificateImageListProps = {
  items: CertificateImageItemProps[];
  className?: string;
  title?: string;
  subtitle?: string;
};

function Lightbox({
  open,
  onClose,
  src,
  alt,
  caption,
}: {
  open: boolean;
  onClose: () => void;
  src: string;
  alt?: string;
  caption?: string;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-xl sm:max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="mx-auto max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl bg-white"
        />
        {caption && (
          <div className="mt-3 text-center text-white/90 text-sm">{caption}</div>
        )}

        {/* round close button with icon */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer -top-4 -right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-neutral-800 shadow-lg ring-1 ring-black/10 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
          aria-label="Close"
        >
          <LuX className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default function CertificateImageList({
  items,
  className = "",
  title = "Our Certifications",
  subtitle = "Committed to excellence through internationally recognized standards and certifications that demonstrate our dedication to quality, safety, and environmental responsibility.",
}: CertificateImageListProps) {
  const [selected, setSelected] = useState<CertificateImageItemProps | null>(null);

  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto w-[90%] py-12 sm:py-16">
        <header className="mx-auto mb-8 sm:mb-10 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-800">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base sm:text-lg text-neutral-500">{subtitle}</p>
          )}
        </header>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {items.map((it, i) => (
            <CertificateImageItem key={i} {...it} onOpen={() => setSelected(it)} />
          ))}
        </div>
      </div>

      <Lightbox
        open={!!selected}
        onClose={() => setSelected(null)}
        src={selected?.src ?? ""}
        alt={selected?.alt}
        caption={selected ? `${selected.title} — ${selected.description}` : undefined}
      />
    </section>
  );
}
