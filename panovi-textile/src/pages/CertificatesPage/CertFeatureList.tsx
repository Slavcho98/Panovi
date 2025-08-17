import CertFeatureItem from "./CertFeatureItem";
import type { IconType } from "react-icons";

type Feature = { icon: IconType; title: string; subtitle: string };

type CertFeaturesListProps = {
  items: Feature[];
  className?: string;
};

export default function CertFeaturesList({
  items,
  className = "",
}: CertFeaturesListProps) {
  return (
    <div
      className={`mx-auto pb-16 w-[90%] grid gap-5 sm:grid-cols-2 lg:grid-cols-5 ${className}`}
    >
      {items.map((it, i) => (
        <CertFeatureItem
          key={i}
          icon={it.icon}
          title={it.title}
          subtitle={it.subtitle}
        />
      ))}
    </div>
  );
}
