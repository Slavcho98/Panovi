import StatsStrip from "../HomePage/StatsStrip";
import AboutIntro from "./AboutIntro";
import Hero from "./Hero";

function About() {
  return (
    <div>
     <Hero/>
     <AboutIntro/>
 <StatsStrip numberSize="text-4xl" numberWeight="font-bold" labelSize="text-2xl" />

    </div>
  );
}

export default About;
