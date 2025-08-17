import CertificateImageItem, {
  type CertificateImageItemProps,
} from "./CertificateImageItem";

type CertificateImageListProps = {
  items: CertificateImageItemProps[];
  className?: string;
};

export default function CertificateImageList({
  items,
  className = "",
}: CertificateImageListProps) {
  return (
    <div
      className={`mx-auto w-[90%] py-16 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ${className}`}
    >
      {items.map((it, i) => (
        <CertificateImageItem key={i} {...it} />
      ))}
    </div>
  );
}
