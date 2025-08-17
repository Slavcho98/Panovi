import StatsStrip from "../HomePage/StatsStrip";
import AboutHighlightsList from "./AboutHighlightsList";
import AboutIntro from "./AboutIntro";
import Hero from "./Hero";
import ManufacturingExcellence from "./ManufacturingExcellence";
const DIFFERENTIATORS = [
  "Modern textile factory with high level of mechanization",
  "Well-structured organizational system",
  "Advanced software for real-time production monitoring",
  "Complete solutions for workwear and corporate clothing",
  "Latest generation cutting technology",
  "25+ years of experience in textile industry",
  "Most competitive factory in the region",
  "Internationally recognized certifications",
];
function About() {
  return (
    <div>
      <Hero />
      <AboutIntro />
      <StatsStrip
        numberSize="text-4xl"
        numberWeight="font-bold"
        labelSize="text-2xl"
      />
      <ManufacturingExcellence />
      <AboutHighlightsList items={DIFFERENTIATORS} />
    </div>
  );
}

export default About;
