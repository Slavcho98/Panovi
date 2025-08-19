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

function Contact() {
  const { t } = useTranslation();

  const METRICS: MetricItemProps[] = [
    { icon: LuLayers, value: t("contact.metrics.0.value"), label: t("contact.metrics.0.label") },
    { icon: LuClock3, value: t("contact.metrics.1.value"), label: t("contact.metrics.1.label") },
    { icon: LuGlobe,  value: t("contact.metrics.2.value"), label: t("contact.metrics.2.label") },
    { icon: LuUsers,  value: t("contact.metrics.3.value"), label: t("contact.metrics.3.label") },
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
      line1: t("contact.cards.1.line1"),
      line2: t("contact.cards.1.line2"),
      accent: "#3b82f6",
    },
    {
      icon: LuMail,
      title: t("contact.cards.2.title"),
      line1: t("contact.cards.2.line1"),
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

  return (
    <div>
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
