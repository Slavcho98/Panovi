import { Helmet } from "react-helmet";
import DarkFeatureStrip from "./HomePage/DarkFeatureStrip";
import FactoryShowcase from "./HomePage/FactoryShowCase";
import Hero from "./HomePage/Hero";
import WhoWeAreSection from "./HomePage/WhoWeAre";

function Home() {
  const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://www.panovi.mk";

  return (
    <div>
      <Helmet>
        <title>PANOVI • Quality Textile & Apparel</title>
        <meta
          name="description"
          content="Discover PANOVI’s quality apparel, certifications, and capabilities. Explore our gallery and contact us for custom orders."
        />
        <link rel="canonical" href={`${SITE_URL}/`} />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="PANOVI • Quality Textile & Apparel"
        />
        <meta
          property="og:description"
          content="Discover PANOVI’s quality apparel, certifications, and capabilities. Explore our gallery and contact us for custom orders."
        />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={`${SITE_URL}/og-home.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PANOVI • Quality Textile & Apparel"
        />
        <meta
          name="twitter:description"
          content="Discover PANOVI’s quality apparel, certifications, and capabilities. Explore our gallery and contact us for custom orders."
        />
        <meta name="twitter:image" content={`${SITE_URL}/og-home.jpg`} />
      </Helmet>

      {/* Page Content */}
      <Hero />
      <WhoWeAreSection />
      <DarkFeatureStrip />
      <FactoryShowcase />
    </div>
  );
}

export default Home;
