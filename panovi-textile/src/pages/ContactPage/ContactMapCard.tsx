import { LuMapPin } from "react-icons/lu";
import { useTranslation } from "react-i18next";

type ContactMapCardProps = {
  title?: string;
  subtitle?: string;
  address?: string;
  locationName?: string;
  ctaLabel?: string;
  directionsHref?: string;
  zoom?: number;
  className?: string;
};

export default function ContactMapCard({
  title,
  subtitle,
  address,
  locationName,
  ctaLabel,
  directionsHref,
  zoom = 15,
  className = "",
}: ContactMapCardProps) {
  const { t } = useTranslation();

  const locName = locationName ?? t("contact.map.locationName");
  const addr = address ?? t("contact.map.address");
  const destinationLabel = [locName, addr].filter(Boolean).join(", ");
  const encodedDest = encodeURIComponent(destinationLabel);
  const embedUrl = `https://www.google.com/maps?q=${encodedDest}&z=${zoom}&output=embed`;
  const dirUrl =
    directionsHref ??
    `https://www.google.com/maps/dir/?api=1&destination=${encodedDest}`;

  const parts = (addr || "").split(",");
  const country = (parts.pop() || "").trim();
  const rest = parts.join(",").trim();

  return (
    <div className={`space-y-3 ${className}`}>
      <div>
        <h3 className="text-2xl sm:text-3xl font-light text-neutral-900">
          {title ?? t("contact.map.title")}
        </h3>
        <p className="mt-1 text-sm text-neutral-500 max-w-lg font-light">
          {subtitle ?? t("contact.map.subtitle")}
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden">
        <div className="aspect-[4/3] w-full">
          <iframe
            src={embedUrl}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={locName}
          />
        </div>

        <div className="flex items-start justify-between gap-3 border-t border-neutral-200 p-5">
          <div className="max-w-[68%] sm:max-w-[75%]">
            <div className="text-sm font-medium text-neutral-800">{locName}</div>
            <div className="text-xs text-neutral-500 leading-snug">
              {rest}
              {rest && ","}
              <br />
              {country}
            </div>
          </div>

          <a
            href={dirUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#ef114d] px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95"
          >
            <LuMapPin className="h-4 w-4" />
            {ctaLabel ?? t("contact.map.cta")}
          </a>
        </div>
      </div>
    </div>
  );
}
