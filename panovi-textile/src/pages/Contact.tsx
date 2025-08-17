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
    line1: "Mon - Fri: 07:00 - 14:30",
    line2: "Sat: 07:30 - 12:00",
    accent: "#8b5cf6",
  },
];

function Contact() {
  return (
    <>
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
    </>
  );
}

export default Contact;
