import { useRef } from "react";
import type { IconType } from "react-icons";
import { LuShieldCheck } from "react-icons/lu";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import CertificateItem from "./CertificateItem";
import certificatesImg from "../../assets/certificates.png";

export type CertificatesListProps = {
  title?: string;
  subtitle?: string;
  items: string[];
  cardIcon?: IconType;
  viewAllHref?: string;
  className?: string;
};

export default function CertificatesList({
  title = "Our Certifications",
  subtitle = "We maintain the highest international standards through rigorous certification processes that validate our commitment to quality, safety, and sustainability.",
  items,
  cardIcon,
  viewAllHref = "#",
  className = "",
}: CertificatesListProps) {
  const railRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-neutral-800">
            {title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-500 font-light">
            {subtitle}
          </p>
        </div>

        <div className="relative sm:hidden">
          <div
            ref={railRef}
            className="-mx-4 flex snap-x snap-mandatory overflow-x-auto gap-4 px-4 scroll-px-4"
            role="region"
            aria-label="Certificates"
          >
            {items.map((label, i) => (
              <div
                key={i}
                className="min-w-[80%] snap-start"
                aria-roledescription="slide"
                aria-label={`Slide ${i + 1} of ${items.length}`}
              >
                <CertificateItem
                  label={label}
                  icon={cardIcon}
                  className="h-full"
                />
              </div>
            ))}
          </div>

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

        <div className="hidden sm:grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((label, i) => (
            <CertificateItem key={i} label={label} icon={cardIcon} />
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href={viewAllHref}
            className="inline-flex items-center gap-2 rounded-full border border-sky-400 px-5 py-2 text-sm font-medium text-sky-600 hover:bg-sky-50"
          >
            View All Certifications
            <LuShieldCheck className="h-4 w-4" />
          </a>
        </div>

        <div
          className="relative mt-10 overflow-hidden rounded-[32px] mx-auto w-[90%] h-80 sm:h-[22rem] md:h-[26rem] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${certificatesImg})` }}
          role="img"
          aria-label="Certificates wall"
        >
          <div className="absolute inset-0 flex items-end">
            <div className="p-6 md:p-10">
              <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-light drop-shadow-md">
                Our Factory In Probishtip
              </h3>
              <p className="mt-2 max-w-3xl text-white/90 text-xs sm:text-sm md:text-base drop-shadow font-light">
                A State-Of-The-Art Facility Where Traditional Craftsmanship
                Meets Modern Technology, Producing Premium Textile Solutions For
                Clients Across Europe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
