import ManufacturingExcellence from "./GalleryPage/ManufacturingExcellence";
import {
  LuLayers,
  LuClock3,
  LuGlobe,
  LuUsers,
  LuMail,
  LuPhone,
  LuMapPin,
} from "react-icons/lu";
import type { MetricItemProps } from "./GalleryPage/MetricItem";
import { SlLocationPin } from "react-icons/sl";
import ContactCardList from "./ContactPage/ContactCardList";
import ContactUs from "./ContactPage/ContactUsSection";
import QualityTeaser from "./GalleryPage/QualityTeaser";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet"; // ✅ add

function Contact() {
  const { t } = useTranslation();
  const SITE_URL = (
    import.meta.env.VITE_SITE_URL ?? "https://www.panovi.mk"
  ).replace(/\/+$/, ""); // ✅ add

  const METRICS: MetricItemProps[] = [
    {
      icon: LuLayers,
      value: t("contact.metrics.0.value"),
      label: t("contact.metrics.0.label"),
    },
    {
      icon: LuClock3,
      value: t("contact.metrics.1.value"),
      label: t("contact.metrics.1.label"),
    },
    {
      icon: LuGlobe,
      value: t("contact.metrics.2.value"),
      label: t("contact.metrics.2.label"),
    },
    {
      icon: LuUsers,
      value: t("contact.metrics.3.value"),
      label: t("contact.metrics.3.label"),
    },
  ];

  const CONTACT_CARDS = [
    {
      icon: LuMapPin,
      title: t("contact.cards.0.title"),
      line1: t("contact.cards.0.line1"),
      line2: t("contact.cards.0.line2"),
      accent: "#ef114d",
    },
    {
      icon: LuPhone,
      title: t("contact.cards.1.title"),
      line1: t("contact.cards.1.line1"), // phone
      line2: t("contact.cards.1.line2"),
      accent: "#3b82f6",
    },
    {
      icon: LuMail,
      title: t("contact.cards.2.title"),
      line1: t("contact.cards.2.line1"), // email
      line2: t("contact.cards.2.line2"),
      accent: "#10b981",
    },
    {
      icon: LuClock3,
      title: t("contact.cards.3.title"),
      line1: t("contact.cards.3.line1"),
      line2: t("contact.cards.3.line2"),
      accent: "#8b5cf6",
    },
  ];

  // Pull core contact details for JSON-LD (simple + robust)
  const street1 = t("contact.cards.0.line1");
  const street2 = t("contact.cards.0.line2");
  const phone = t("contact.cards.1.line1");
  const email = t("contact.cards.2.line1");

  // ✅ JSON-LD: Organization + ContactPoint (helps Google understand phone/email)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PANOVI",
    url: `${SITE_URL}/contact`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: phone,
        email: email,
        availableLanguage: ["en", "de", "mk"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: [street1, street2].filter(Boolean).join(", "),
    },
  };

  return (
    <div>
      {/* ✅ SEO goes first */}
      <Helmet>
        <title>Contact | PANOVI</title>
        <meta
          name="description"
          content="Get in touch with PANOVI. Find our address, phone, and email for inquiries about manufacturing, certifications, and orders."
        />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact | PANOVI" />
        <meta
          property="og:description"
          content="Address, phone, and email to reach PANOVI for workwear manufacturing inquiries."
        />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:image" content={`${SITE_URL}/og-contact.png`} />{" "}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | PANOVI" />
        <meta
          name="twitter:description"
          content="Reach PANOVI by phone or email. We’ll help with quotes, orders, and certifications."
        />
        <meta name="twitter:image" content={`${SITE_URL}/og-contact.jpg`} />
      </Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page UI */}
      <ManufacturingExcellence
        items={METRICS}
        headingLead={t("contact.hero.headingLead")}
        headingHighlight={t("contact.hero.headingHighlight")}
        description={t("contact.hero.description")}
        statusLabel={{
          text: t("contact.hero.statusLabel"),
          icon: SlLocationPin,
          iconColor: "#EF013C",
          bgColor: "#2197FF",
          textColor: "#fff",
        }}
      />

      <ContactCardList items={CONTACT_CARDS} />
      <ContactUs />
      <QualityTeaser
        title={t("contact.teaser.title")}
        description={t("contact.teaser.description")}
        highlights={[
          t("contact.teaser.highlights.0"),
          t("contact.teaser.highlights.1"),
          t("contact.teaser.highlights.2"),
          t("contact.teaser.highlights.3"),
          t("contact.teaser.highlights.4"),
        ]}
      />
    </div>
  );
}

export default Contact;
