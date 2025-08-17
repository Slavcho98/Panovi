import {
  LuBadgeCheck,
  LuClock3,
  LuCog,
  LuLayers,
  LuLeaf,
  LuLightbulb,
  LuShieldCheck,
  LuUser,
  LuUsers,
} from "react-icons/lu";

import ManufacturingExcellence from "./GalleryPage/ManufacturingExcellence";
import type { MetricItemProps } from "./GalleryPage/MetricItem";
import CertFeaturesList from "./CertificatesPage/CertFeatureList";
import CertificateImageList from "./CertificatesPage/CertificateImageList";
import type { CertificateImageItemProps } from "./CertificatesPage/CertificateImageItem";

import cert1 from "../assets/certificate_1.jpg";
import cert2 from "../assets/certificate_2.jpg";
import cert3 from "../assets/certificate_3.jpg";
import cert4 from "../assets/certificate_4.jpg";
import cert5 from "../assets/certificate_5.jpg";
import QualityTeaser from "./GalleryPage/QualityTeaser";

const METRICS: MetricItemProps[] = [
  {
    icon: LuLayers,
    value: "5,000m² Manufacturing",
    label: "Certified Facility",
  },
  {
    icon: LuClock3,
    value: "15+ Years Certified",
    label: "Certification History",
  },
  { icon: LuCog, value: "100% Current", label: "Compliance Rate" },
  {
    icon: LuUser,
    value: "5 International Standards",
    label: "Certification Scope",
  },
];

const CERT_FEATURES = [
  {
    icon: LuShieldCheck,
    title: "Compliance Guarantee",
    subtitle: "Full regulatory compliance across international markets",
  },
  {
    icon: LuLeaf,
    title: "Sustainable Operations",
    subtitle: "Environmentally responsible manufacturing processes",
  },
  {
    icon: LuBadgeCheck,
    title: "Quality Assurance",
    subtitle: "Consistent high-quality output with systematic controls",
  },
  {
    icon: LuUsers,
    title: "Worker Safety",
    subtitle: "Comprehensive safety protocols protecting our team",
  },
  {
    icon: LuLightbulb,
    title: "Energy Efficiency",
    subtitle: "Optimized energy performance reducing environmental impact",
  },
];

// updated to include text per card
const CERT_ITEMS: CertificateImageItemProps[] = [
  {
    src: cert1,
    alt: "OEKO-TEX® STeP",
    category: "Environmental Standard",
    title: "OEKO–TEX® STeP",
    description: "Sustainable Textile Production Certification",
  },
  {
    src: cert2,
    alt: "ISO 14001:2015",
    category: "Environmental Standard",
    title: "ISO 14001:2015",
    description: "Environmental Management System",
  },
  {
    src: cert3,
    alt: "ISO 9001:2015",
    category: "Quality Standard",
    title: "ISO 9001:2015",
    description: "Quality Management System",
  },
  {
    src: cert4,
    alt: "ISO 45001:2018",
    category: "Safety Standard",
    title: "ISO 45001:2018",
    description: "Occupational Health & Safety Management System",
  },
  {
    src: cert5,
    alt: "ISO 50001:2018",
    category: "Energy Standard",
    title: "ISO 50001:2018",
    description: "Energy Management System for optimized performance",
  },
];

function Certificates() {
  return (
    <div>
      <ManufacturingExcellence
        items={METRICS}
        headingLead="Certified"
        description="Our comprehensive certification portfolio demonstrates unwavering commitment to quality, environmental responsibility, worker safety, and sustainable manufacturing practices"
      />
      <CertificateImageList items={CERT_ITEMS} />
      <CertFeaturesList items={CERT_FEATURES} />
      <QualityTeaser
        title="Complete Standards Compliance"
        description="Our comprehensive certification portfolio spanning quality, environmental management, worker safety, sustainability, and energy efficiency demonstrates our total commitment to responsible manufacturing. Combined with advanced equipment and expert craftsmanship, we deliver excellence at every stage."
        highlights={[
          " ISO Quality & Safety Certified",
          " OEKO-TEX® Sustainable",
          " Energy Management Optimized",
          "Professional JUKI Equipment",
          "25+ Years Experience",
        ]}
      />
    </div>
  );
}

export default Certificates;
