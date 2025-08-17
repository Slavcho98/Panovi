import ManufacturingExcellence from "./GalleryPage/ManufacturingExcellence";
import { LuLayers, LuClock3, LuGlobe, LuUsers } from "react-icons/lu";
import type { MetricItemProps } from "./GalleryPage/MetricItem";
import { SlLocationPin } from "react-icons/sl";
const METRICS: MetricItemProps[] = [
  { icon: LuLayers, value: "5,000m²", label: "Manufacturing Facility" },
  { icon: LuClock3, value: "25+ Years", label: "Years Experience" },
  { icon: LuGlobe, value: "15+ Countries", label: "Export Markets" },
  { icon: LuUsers, value: "25+ Specialists", label: "Expert Team" },
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
    </>
  );
}

export default Contact;
