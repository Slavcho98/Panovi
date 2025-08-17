import { LuClock3, LuCog, LuLayers } from "react-icons/lu";
import ManufacturingExcellence from "./GalleryPage/ManufacturingExcellence";
const METRICS = [
  {
    icon: LuLayers,
    value: "60,000+ units/month",
    label: "Production Capacity",
    helper: "Large-scale manufacturing capability",
  },
  {
    icon: LuClock3,
    value: "99.9% First Pass",
    label: "Quality Rate",
    helper: "Exceptional quality control",
  },
  {
    icon: LuCog,
    value: "Industrial Professional",
    label: "Equipment Grade",
    helper: "Top-tier manufacturing equipment",
  },
];

function Gallery() {
  return (
    <div>
      <ManufacturingExcellence items={METRICS} />
    </div>
  );
}

export default Gallery;
