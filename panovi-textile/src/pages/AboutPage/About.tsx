import StatsStrip from "../HomePage/StatsStrip";
import AboutHighlightsList from "./AboutHighlightsList";
import AboutIntro from "./AboutIntro";
import CertificatesList from "./CertificatesList";
import Hero from "./Hero";
import ManufacturingExcellence from "./ManufacturingExcellence";
import ReadyToWorkSection from "./ReadyToWorkSection";
import StandOutSection from "./StandOutSection";
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


const CERTS = [
  "OEKO–TEX® STeP",
  "TÜV AUSTRIA",
  "ISO 9001:2015",
  "ISO 14001:2015",
  "ISO 45001:2018",
  "SA8000:2014",
  "SEDEX SMETA 4",
  "ISO 50001:2018",
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
      <StandOutSection/>
      <CertificatesList items={CERTS}/>
      <ReadyToWorkSection/>
    </div>
  );
}

export default About;
