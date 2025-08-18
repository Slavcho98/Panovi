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
const METRICS: MetricItemProps[] = [
  { icon: LuLayers, value: "5,000m²", label: "Manufacturing Facility" },
  { icon: LuClock3, value: "25+ Years", label: "Years Experience" },
  { icon: LuGlobe, value: "15+ Countries", label: "Export Markets" },
  { icon: LuUsers, value: "25+ Specialists", label: "Expert Team" },
];

const CONTACT_CARDS = [
  {
    icon: LuMapPin,
    title: "Our Location",
    line1: "PANOVI DOOEL",
    line2: "North Macedonia",
    accent: "#ef114d",
  },
  {
    icon: LuPhone,
    title: "Phone Numbers",
    line1: "+ 389 72 227 215",
    line2: "North Macedonia",
    accent: "#3b82f6",
  },
  {
    icon: LuMail,
    title: "Email Address",
    line1: "panovi.vladimir@gmail.com",
    line2: "North Macedonia",
    accent: "#10b981",
  },
  {
    icon: LuClock3,
    title: "Business Hours",
    line1: "Mon - Fri: 07:00 - 15:00",
    line2: "Sat - Sun: Closed",
    accent: "#8b5cf6",
  },
];

function Contact() {
  return (
    <div>
      <ManufacturingExcellence
        items={METRICS}
        headingLead="Get in"
        headingHighlight="Touch"
        description="Ready to discuss your textile manufacturing needs? Our certified facility and expert team are here to deliver premium solutions that exceed your expectations"
        statusLabel={{
          text: "PANOVI DOOEL • North Macedonia",
          icon: SlLocationPin,
          iconColor: "#EF013C",
          bgColor: "#2197FF",
          textColor: "#fff",
        }}
      />
      <ContactCardList items={CONTACT_CARDS} />
      <ContactUs />
      <QualityTeaser
        title="Ready to Start Your Project?
"
        description="With our ISO-certified facility, advanced JUKI equipment, and 25+ years of experience, we're ready to handle projects of any scale. From small custom orders to large production runs, we deliver quality that meets international standards."
        highlights={[
          "Quick Response Time",
          "OEKO-TEX® Sustainable",
          "Custom Solutions",
          "Quality Guarantee",
          "25+ Years Experience",
        ]}
      />
    </div>
  );
}

export default Contact;
