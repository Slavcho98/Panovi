import { LuClock3, LuCog, LuLayers, LuUser } from "react-icons/lu";
import ManufacturingExcellence from "./GalleryPage/ManufacturingExcellence";
import type { MetricItemProps } from "./GalleryPage/MetricItem";
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
  {
    icon: LuCog,
    value: "100% Current",
    label: "Compliance Rate",
  },
  {
    icon: LuUser,
    value: "5 International Standards",
    label: "Certification Scope",
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
    </div>
  );
}

export default Certificates;
