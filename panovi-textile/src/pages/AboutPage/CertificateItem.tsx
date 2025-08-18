import type { IconType } from "react-icons";
import { LuAward } from "react-icons/lu";

export type CertificateItemProps = {
  label: string;
  icon?: IconType;
  className?: string;
  /** Tailwind min-height classes you can override from the parent */
  minHClass?: string;
};

export default function CertificateItem({
  label,
  icon: Icon = LuAward,
  className = "",
  minHClass = "min-h-40 sm:min-h-48", // 10rem mobile, 12rem tablet+
}: CertificateItemProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm ${minHClass} ${className}`}
    >
      <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-sky-500" />
      <span className="text-sm sm:text-[15px] font-light text-neutral-700 text-center">
        {label}
      </span>
    </div>
  );
}
