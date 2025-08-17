import type { IconType } from "react-icons";
import { LuAward } from "react-icons/lu";

export type CertificateItemProps = {
  label: string;
  icon?: IconType;
  className?: string;
};

export default function CertificateItem({
  label,
  icon: Icon = LuAward,
  className = "",
}: CertificateItemProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm ${className}`}
    >
      <Icon className="h-6 w-6 text-sky-500" />
      <span className="text-sm font-medium text-neutral-700 text-center">
        {label}
      </span>
    </div>
  );
}
