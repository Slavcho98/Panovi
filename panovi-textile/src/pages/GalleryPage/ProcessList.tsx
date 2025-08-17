import ProcessItem, { type ProcessItemProps } from "./ProcessItem";

type ProcessListProps = {
  items: ProcessItemProps[];
  className?: string;
};

export default function ProcessList({
  items,
  className = "",
}: ProcessListProps) {
  return (
    <section className={`py-10 sm:py-14 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {items.map((it, i) => (
            <ProcessItem key={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
