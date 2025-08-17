import type { IconType } from "react-icons";

export type MetricItemProps = {
  icon: IconType;
  value: string;
  label: string;
  helper?: string;
  className?: string;
};

export default function MetricItem({
  icon: Icon,
  value,
  label,
  helper = "",
  className = "",
}: MetricItemProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/5 ring-1 ring-white/10">
        <Icon className="h-8 w-8 text-blue-400" />
      </div>
      <div className="text-xl sm:text-2xl font-medium text-white">{value}</div>
      <div className="mt-1 text-sm text-slate-300">{label}</div>
      {helper ? <div className="mt-1 text-xs text-slate-400">{helper}</div> : null}
    </div>
  );
}
