import ContactCardItem, { type ContactCardItemProps } from "./ContactCardItem";

type ContactCardListProps = {
  items: ContactCardItemProps[];
  className?: string;
  title?: string;
  subtitle?: string;
};

export default function ContactCardList({
  items,
  className = "",
  title,
  subtitle,
}: ContactCardListProps) {
  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        {(title || subtitle) && (
          <div className="mb-6 text-center">
            {title ? (
              <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className="mt-2 text-neutral-500">{subtitle}</p>
            ) : null}
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <ContactCardItem key={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
