import DarkFeatureStrip from "./HomePage/DarkFeatureStrip";
import FactoryShowcase from "./HomePage/FactoryShowCase";
import Hero from "./HomePage/Hero";
import WhoWeAreSection from "./HomePage/WhoWeAre";

function Home() {
  return (
    <div>
      <Hero />
      <WhoWeAreSection />
      <DarkFeatureStrip/>
      <FactoryShowcase/>
    </div>
  );
}

export default Home;
