import { LuClock3, LuCog, LuLayers } from "react-icons/lu";
import { LuUserCog, LuSettings2 } from "react-icons/lu";
import { PiScissors } from "react-icons/pi";

import ManufacturingExcellence from "./GalleryPage/ManufacturingExcellence";
import ProcessList from "./GalleryPage/ProcessList";
import imgCutting from "./../assets/manufactur-1.jpg"
import imgCraft from "./../assets/manufactur-2.jpg"
import imgOverlock from "./../assets/manufactur-3.jpg"
import imgFinish from "./../assets/manufactur-4.jpg"


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

const PROCESS_ITEMS = [
  {
    imageSrc: imgCutting,
    icon: PiScissors,
    title: "Advanced Pattern & Cutting",
    metric: "98.8% Material Efficiency",
    label: "Automated CAD/CAM Systems",
    description:
      "State-of-the-art automated cutting systems ensuring precision and minimal waste in every piece.",
  },
  {
    imageSrc: imgCraft,
    icon: LuUserCog,
    title: "Expert Craftsmanship",
    metric: "15+ Years Experience",
    label: "JUKI Professional Series",
    description:
      "Skilled artisans operating professional JUKI equipment with precision and attention to detail.",
  },
  {
    imageSrc: imgOverlock,
    icon: LuLayers,
    title: "Precision Overlocking",
    metric: "5000 RPM Capability",
    label: "JUKI MO-3900 Series",
    description:
      "Professional JUKI MO-3900 series machines delivering perfect seam finishing and durability.",
  },
  {
    imageSrc: imgFinish,
    icon: LuSettings2,
    title: "Specialized Finishing",
    metric: "Micro-Precision Control",
    label: "EH 30 Specialist Equipment",
    description:
      "EH 30 specialized equipment for advanced finishing techniques and quality enhancement.",
  },
];

function Gallery() {
  return (
    <div>
      <ManufacturingExcellence items={METRICS} />
      <ProcessList items={PROCESS_ITEMS} />
    </div>
  );
}

export default Gallery;
