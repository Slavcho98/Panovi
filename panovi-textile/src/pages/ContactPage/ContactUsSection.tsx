import ContactForm from "./ContactForm";
import ContactMapCard from "./ContactMapCard";

export default function ContactUs() {
  return (
    <section className="w-full py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ContactForm />
        </div>

        <div className="mx-auto mt-16 max-w-5xl border-t border-neutral-200 pt-12 sm:mt-20 sm:pt-16">
          <ContactMapCard
            address="Miro Baraga nn, 2210 Probishtip, North Macedonia"
            locationName="PANOVI DOOEL"
            zoom={15}
          />
        </div>
      </div>
    </section>
  );
}
