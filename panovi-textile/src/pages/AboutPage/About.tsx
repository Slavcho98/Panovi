import StatsStrip from "../HomePage/StatsStrip";
import AboutHighlightsList from "./AboutHighlightsList";
import AboutIntro from "./AboutIntro";
import CertificatesList from "./CertificatesList";
import Hero from "./Hero";
import ManufacturingExcellence from "./ManufacturingExcellence";
import ReadyToWorkSection from "./ReadyToWorkSection";
import StandOutSection from "./StandOutSection";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  const DIFFERENTIATORS = t("about.differentiators", {
    returnObjects: true,
  }) as string[];

  const CERTS = t("about.certs", {
    returnObjects: true,
  }) as string[];

  return (
    <div>
      <Hero />
      <AboutIntro />
      <StatsStrip numberSize="text-4xl" numberWeight="font-bold" labelSize="text-2xl" />
      <ManufacturingExcellence />
      <AboutHighlightsList items={DIFFERENTIATORS} />
      <StandOutSection />
      <CertificatesList items={CERTS} />
      <ReadyToWorkSection />
    </div>
  );
}

export default About;
