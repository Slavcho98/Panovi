import type { IconType } from "react-icons";

export type ProcessItemProps = {
  imageSrc: string;
  icon: IconType;
  title: string;
  metric: string;
  label: string;
  description: string;
  className?: string;
};

export default function ProcessItem({
  imageSrc,
  icon: Icon,
  title,
  metric,
  label,
  description,
  className = "",
}: ProcessItemProps) {
  return (
    <div
      className={`rounded-[28px] overflow-hidden bg-white shadow-sm ${className}`}
    >
      <div className="relative h-64 sm:h-72 md:h-96">
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute left-5 bottom-5 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="text-white">
            <div className="text-sm font-medium leading-tight">{title}</div>
            <div className="text-xs text-blue-300 leading-tight">{metric}</div>
            <div className="text-[11px] text-white/75 leading-tight">
              {label}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-5 text-sm leading-relaxed text-neutral-700">
        {description}
      </div>
    </div>
  );
}
