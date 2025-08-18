import { useEffect, useRef, useState, useCallback } from "react";
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoClose,
} from "react-icons/io5";

import img1 from "../../assets/factory-1.jpg";
import img2 from "../../assets/factory-2.jpg";
import img3 from "../../assets/factory-3.jpg";
import img4 from "../../assets/factory-4.jpg";
import img5 from "../../assets/factory-5.jpeg";
import img6 from "../../assets/factory-6.jpeg";

const IMAGES: string[] = [img1, img2, img3, img4, img5, img6];

function Lightbox({
  open,
  src,
  alt,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  open: boolean;
  src: string;
  alt?: string;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, onPrev, onNext]);

  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 40) (dx < 0 ? onNext : onPrev)();
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[999]"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute inset-0 bg-black/80" />

      <div
        className="absolute inset-0 flex items-center justify-center p-2 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 sm:top-6 sm:right-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow ring-1 ring-black/10 hover:bg-white"
        >
          <IoClose className="h-6 w-6" />
        </button>

        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-6 pointer-events-none">
          <button
            onClick={onPrev}
            aria-label="Previous image"
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow ring-1 ring-black/10 hover:bg-white"
          >
            <IoChevronBackOutline className="h-6 w-6" />
          </button>
          <button
            onClick={onNext}
            aria-label="Next image"
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow ring-1 ring-black/10 hover:bg-white"
          >
            <IoChevronForwardOutline className="h-6 w-6" />
          </button>
        </div>

        <img
          src={src}
          alt={alt}
          className="max-h-[82vh] sm:max-h-[90vh] w-auto max-w-[92vw] sm:max-w-[95vw] rounded-xl object-contain select-none"
          draggable={false}
        />

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/90 text-xs sm:text-sm bg-black/40 rounded-full px-3 py-1">
          {index + 1} / {total}
        </div>
      </div>
    </div>
  );
}

export default function FactoryShowcase() {
  const railRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState<number | null>(null);
  const isOpen = active !== null;

  const next = useCallback(() => {
    setActive((i) => (i === null ? null : (i + 1) % IMAGES.length));
  }, []);
  const prev = useCallback(() => {
    setActive((i) =>
      i === null ? null : (i - 1 + IMAGES.length) % IMAGES.length
    );
  }, []);

  const scroll = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const firstSlide = el.querySelector<HTMLElement>("[data-slide='true']");
    const gapStr =
      getComputedStyle(el).columnGap || getComputedStyle(el).gap || "0";
    const gap = parseFloat(gapStr) || 0;
    const step = firstSlide
      ? firstSlide.clientWidth + gap
      : el.clientWidth * 0.9;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const didDragRef = useRef(false);
  const dragTimerRef = useRef<number | null>(null);
  const markDragged = () => {
    didDragRef.current = true;
    if (dragTimerRef.current) window.clearTimeout(dragTimerRef.current);
    dragTimerRef.current = window.setTimeout(() => {
      didDragRef.current = false;
      dragTimerRef.current = null;
    }, 120);
  };

  const Card = ({
    src,
    alt,
    onOpen,
  }: {
    src: string;
    alt: string;
    onOpen?: () => void;
  }) => (
    <button
      type="button"
      onClick={() => {
        if (didDragRef.current) return;
        onOpen?.();
      }}
      className="block w-full text-left cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500/50 rounded-2xl"
    >
      <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
        <div className="aspect-[4/3] w-full">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </button>
  );

  return (
    <section className="bg-neutral-100">
      <div className="mx-auto w-[90%] py-14">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
            Our Textile Factory
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm md:text-base leading-7 font-light">
            A modern textile facility specialized in high-quality workwear and
            corporate apparel — driven by innovation, precision, and over two
            decades of industry expertise.
          </p>
        </div>

        <div className="mt-8 relative">
          <div
            ref={railRef}
            className="flex flex-nowrap snap-x snap-mandatory overflow-x-auto no-scrollbar gap-4 scroll-px-4 pr-4"
            role="region"
            aria-label="Factory images"
            onWheel={(e) => {
              const el = railRef.current;
              if (!el) return;
              if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                el.scrollBy({ left: e.deltaY, behavior: "smooth" });
              }
            }}
            onScroll={markDragged}
          >
            {IMAGES.map((src, i) => (
              <div
                key={i}
                data-slide="true"
                className="
                  snap-start
                  min-w-[85%]
                  sm:min-w-[70%]
                  md:min-w-[48%]
                  lg:min-w-[32%]
                  xl:min-w-[28%]
                "
                aria-roledescription="slide"
                aria-label={`Slide ${i + 1} of ${IMAGES.length}`}
              >
                <Card
                  src={src}
                  alt={`Factory image ${i + 1}`}
                  onOpen={() => setActive(i)}
                />
              </div>
            ))}
          </div>

      
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1">
            <button
              onClick={() => scroll(-1)}
              className="pointer-events-auto cursor-pointer inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow ring-1 ring-black/10 hover:bg-white"
              aria-label="Previous"
            >
              <IoChevronBackOutline className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="pointer-events-auto cursor-pointer inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow ring-1 ring-black/10 hover:bg-white"
              aria-label="Next"
            >
              <IoChevronForwardOutline className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <Lightbox
        open={isOpen}
        src={IMAGES[active ?? 0]}
        alt={active !== null ? `Factory image ${active + 1}` : undefined}
        index={active ?? 0}
        total={IMAGES.length}
        onClose={() => setActive(null)}
        onPrev={prev}
        onNext={next}
      />
    </section>
  );
}
