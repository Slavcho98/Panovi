import StatsStrip from "../HomePage/StatsStrip";
import AboutIntro from "./AboutIntro";
import Hero from "./Hero";
import ManufacturingExcellence from "./ManufacturingExcellence";

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
      <ManufacturingExcellence/>
    </div>
  );
}

export default About;
