import CertificateImageItem, {
  type CertificateImageItemProps,
} from "./CertificateImageItem";

type CertificateImageListProps = {
  items: CertificateImageItemProps[];
  className?: string;
  title?: string;
  subtitle?: string;
};

export default function CertificateImageList({
  items,
  className = "",
  title = "Our Certifications",
  subtitle = "Committed to excellence through internationally recognized standards and certifications that demonstrate our dedication to quality, safety, and environmental responsibility.",
}: CertificateImageListProps) {
  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto w-[90%] py-12 sm:py-16">
        <header className="mx-auto mb-8 sm:mb-32 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-800">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base sm:text-lg text-neutral-500">
              {subtitle}
            </p>
          )}
        </header>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {items.map((it, i) => (
            <CertificateImageItem key={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
