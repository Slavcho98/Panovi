import StatsStrip from "../HomePage/StatsStrip";
import AboutHighlightsList from "./AboutHighlightsList";
import AboutIntro from "./AboutIntro";
import CertificatesList from "./CertificatesList";
import Hero from "./Hero";
import ManufacturingExcellence from "./ManufacturingExcellence";
import ReadyToWorkSection from "./ReadyToWorkSection";
import StandOutSection from "./StandOutSection";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

function About() {
  const { t } = useTranslation();
  const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://www.panovi.mk";

  const DIFFERENTIATORS = t("about.differentiators", {
    returnObjects: true,
  }) as string[];
  const CERTS = t("about.certs", { returnObjects: true }) as string[];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About | PANOVI",
    url: `${SITE_URL}/about`,
    description:
      "Learn about PANOVI’s history, mission, and commitment to high-quality textile manufacturing.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: `${SITE_URL}/about`,
        },
      ],
    },
  };

  return (
    <div>
      <Helmet>
        <title>About | PANOVI</title>
        <meta
          name="description"
          content="Learn about PANOVI’s history, mission, and commitment to high-quality textile manufacturing."
        />
        <link rel="canonical" href={`${SITE_URL}/about`} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="About | PANOVI" />
        <meta
          property="og:description"
          content="Learn about PANOVI’s history, mission, and commitment to high-quality textile manufacturing."
        />
        <meta property="og:url" content={`${SITE_URL}/about`} />
        <meta property="og:image" content={`${SITE_URL}/og-about.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | PANOVI" />
        <meta
          name="twitter:description"
          content="Learn about PANOVI’s history, mission, and commitment to high-quality textile manufacturing."
        />
        <meta name="twitter:image" content={`${SITE_URL}/og-about.jpg`} />
      </Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <AboutIntro />
      <StatsStrip
        numberSize="text-4xl"
        numberWeight="font-bold"
        labelSize="text-2xl"
      />
      <ManufacturingExcellence />
      <AboutHighlightsList items={DIFFERENTIATORS} />
      <StandOutSection />
      <CertificatesList items={CERTS} />
      <ReadyToWorkSection />
    </div>
  );
}

export default About;
