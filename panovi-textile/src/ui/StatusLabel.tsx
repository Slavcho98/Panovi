import type { IconType } from "react-icons";

export type StatusLabelProps = {
  text: string;
  bgColor?: string;
  bgOpacity?: number;
  textColor?: string;
  icon?: IconType;
  iconColor?: string;
  iconClassName?: string;
  className?: string;
};

function hexToRgba(hex: string, alpha = 1) {
  const h = hex.replace("#", "");
  const v = parseInt(h.length === 3 ? h.split("").map(c => c + c).join("") : h, 16);
  const r = (v >> 16) & 255, g = (v >> 8) & 255, b = v & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function StatusLabel({
  text,
  bgColor = "#00FA53",
  bgOpacity = 0.08,
  textColor = "#222423",
  icon: Icon,
  iconColor = "#7BFFA7",
  iconClassName = "h-5 w-5",
  className = "",
}: StatusLabelProps) {
  const bg = hexToRgba(bgColor, bgOpacity);

  return (
    <div
      className={`mx-auto w-fit flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium shadow-[0_4px_0_rgba(0,0,0,0.12)] ring-1 ring-black/5 ${className}`}
      style={{ backgroundColor: bg }}
      role="status"
      aria-live="polite"
    >
      {Icon ? <Icon className={iconClassName} style={{ color: iconColor }} aria-hidden /> : null}
      <span style={{ color: textColor }}>{text}</span>
    </div>
  );
}
