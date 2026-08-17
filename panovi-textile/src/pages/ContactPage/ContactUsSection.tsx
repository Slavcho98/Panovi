import ContactForm from "./ContactForm";
import ContactMapCard from "./ContactMapCard";

export default function ContactUs() {
  return (
    <section className="w-full  py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-16 md:grid-cols-2">
          <ContactMapCard
            address="Miro Baraga nn, 2210 Probishtip, North Macedonia"
            locationName="PANOVI DOOEL"
            zoom={15}
          />

          <ContactForm
            onSubmitForm={async (data) => {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              });
              if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                throw new Error(err.error || "Something went wrong");
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}
