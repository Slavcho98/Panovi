import type { IconType } from "react-icons";

function hexToRgba(hex: string, alpha = 0.15) {
  const h = hex.replace("#", "");
  const v = parseInt(
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h,
    16
  );
  const r = (v >> 16) & 255,
    g = (v >> 8) & 255,
    b = v & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function toTelHref(raw: string) {
  const trimmed = raw.trim();
  const hasPlus = trimmed.startsWith("+");
  const digits = trimmed.replace(/[^\d]/g, "");
  return `tel:${hasPlus ? "+" : ""}${digits}`;
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
const phoneRe = /^[+]?[\d\s().-]{6,}$/;

export type ContactCardItemProps = {
  icon: IconType;
  title: string;
  line1: string;
  line2?: string;
  accent?: string;
  href?: string; // optional; will be inferred if not provided
  className?: string;
};

export default function ContactCardItem({
  icon: Icon,
  title,
  line1,
  line2,
  accent = "#ef4444",
  href,
  className = "",
}: ContactCardItemProps) {
  let derivedHref = href;
  let aria = undefined as string | undefined;

  if (!derivedHref) {
    if (emailRe.test(line1)) {
      derivedHref = `mailto:${line1.trim()}`;
      aria = `Email ${line1.trim()}`;
    } else if (phoneRe.test(line1)) {
      derivedHref = toTelHref(line1);
      aria = `Call ${line1.replace(/\s+/g, " ")}`;
    }
  }

  const CardContent = (
    <div
      className={`rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_6px_0_rgba(0,0,0,0.06)] ${className}`}
      style={{ borderTopWidth: 4, borderTopColor: accent }}
    >
      <div
        className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
        style={{ backgroundColor: hexToRgba(accent, 0.15) }}
      >
        <Icon className="h-5 w-5" style={{ color: accent }} />
      </div>

      <div className="text-[15px] font-medium text-neutral-800">{title}</div>
      <div className="mt-1 text-sm text-neutral-500">{line1}</div>
      {line2 ? (
        <div className="mt-1 text-sm text-neutral-500">{line2}</div>
      ) : null}
    </div>
  );

  // Whole card becomes a link when we have mailto/tel/URL
  return derivedHref ? (
    <a
      href={derivedHref}
      className="block cursor-pointer transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded-2xl"
      aria-label={aria}
      {...(derivedHref.startsWith("http")
        ? { target: "_blank", rel: "noreferrer noopener" }
        : {})}
    >
      {CardContent}
    </a>
  ) : (
    <div className="transition-transform hover:-translate-y-0.5">
      {CardContent}
    </div>
  );
}
