// components/contact/ContactCardItem.tsx
import type { IconType } from "react-icons";

function hexToRgba(hex: string, alpha = 0.15) {
  const h = hex.replace("#", "");
  const v = parseInt(h.length === 3 ? h.split("").map(c => c + c).join("") : h, 16);
  const r = (v >> 16) & 255, g = (v >> 8) & 255, b = v & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export type ContactCardItemProps = {
  icon: IconType;
  title: string;
  line1: string;
  line2?: string;
  accent?: string;       // hex color for top border & icon background
  href?: string;         // optional link
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
  const content = (
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
      {line2 ? <div className="mt-1 text-sm text-neutral-500">{line2}</div> : null}
    </div>
  );

  return href ? (
    <a href={href} className="block transition-transform hover:-translate-y-0.5">
      {content}
    </a>
  ) : (
    <div className="transition-transform hover:-translate-y-0.5">{content}</div>
  );
}
