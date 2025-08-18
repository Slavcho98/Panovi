import React from "react";
import type { IconType } from "react-icons";
import AboutCard from "./AboutCard";

type AboutHighlightsListProps = {
  title?: string;
  subtitle?: string;
  items: string[];
  cardIcon?: IconType;
  className?: string;
};

const AboutHighlightsList: React.FC<AboutHighlightsListProps> = ({
  title = "What Makes Us Different",
  subtitle = "Our commitment to excellence is reflected in every aspect of our operation, from advanced technology to sustainable practices.",
  items,
  cardIcon,
}) => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-neutral-800">
            {title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-500 font-light">
            {subtitle}
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((text, i) => (
            <AboutCard key={i} text={text} icon={cardIcon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHighlightsList;