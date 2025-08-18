import type { IconType } from "react-icons";

type CertFeatureItemProps = {
  icon: IconType;
  title: string;
  subtitle: string;
  className?: string;
};

export default function CertFeatureItem({
  icon: Icon,
  title,
  subtitle,
  className = "",
}: CertFeatureItemProps) {
  return (
    <div
      className={`rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm ${className}`}
    >
      <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-blue-400/40">
        <Icon className="h-6 w-6 text-blue-500" />
      </div>
      <div className="text-[15px] font-medium text-neutral-800">{title}</div>
      <div className="mt-1 text-xs text-neutral-500">{subtitle}</div>
    </div>
  );
}
