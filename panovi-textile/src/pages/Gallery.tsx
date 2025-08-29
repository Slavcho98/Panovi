import {
  LuClock3,
  LuCog,
  LuLayers,
  LuUserCog,
  LuSettings2,
} from "react-icons/lu";
import { PiScissors } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import ManufacturingExcellence from "./GalleryPage/ManufacturingExcellence";
import ProcessList from "./GalleryPage/ProcessList";
import QualityTeaser from "./GalleryPage/QualityTeaser";

import imgCutting from "./../assets/manufactur-1.jpg";
import imgCraft from "./../assets/manufactur-2.jpg";
import imgOverlock from "./../assets/manufactur-3.jpg";
import imgFinish from "./../assets/manufactur-4.jpg";

function Gallery() {
  const { t } = useTranslation();
  const SITE_URL = (
    import.meta.env.VITE_SITE_URL ?? "https://www.panovi.mk"
  ).replace(/\/+$/, "");

  const metricTexts = t("process.metrics", { returnObjects: true }) as Array<{
    value: string;
    label: string;
    helper: string;
  }>;

  const METRICS = [
    {
      icon: LuLayers,
      ...(metricTexts?.[0] ?? {
        value: "60,000+ units/month",
        label: "Production Capacity",
        helper: "Large-scale manufacturing capability",
      }),
    },
    {
      icon: LuClock3,
      ...(metricTexts?.[1] ?? {
        value: "99.9% First Pass",
        label: "Quality Rate",
        helper: "Exceptional quality control",
      }),
    },
    {
      icon: LuCog,
      ...(metricTexts?.[2] ?? {
        value: "Industrial Professional",
        label: "Equipment Grade",
        helper: "Top-tier manufacturing equipment",
      }),
    },
  ];

  const stepTexts = t("process.steps", { returnObjects: true }) as Array<{
    title: string;
    metric: string;
    label: string;
    description: string;
  }>;

  const PROCESS_ITEMS = [
    {
      imageSrc: imgCutting,
      icon: PiScissors,
      ...(stepTexts?.[0] ?? {
        title: "Advanced Pattern & Cutting",
        metric: "98.8% Material Efficiency",
        label: "Automated CAD/CAM Systems",
        description:
          "State-of-the-art automated cutting systems ensuring precision and minimal waste in every piece.",
      }),
    },
    {
      imageSrc: imgCraft,
      icon: LuUserCog,
      ...(stepTexts?.[1] ?? {
        title: "Expert Craftsmanship",
        metric: "15+ Years Experience",
        label: "JUKI Professional Series",
        description:
          "Skilled artisans operating professional JUKI equipment with precision and attention to detail.",
      }),
    },
    {
      imageSrc: imgOverlock,
      icon: LuLayers,
      ...(stepTexts?.[2] ?? {
        title: "Precision Overlocking",
        metric: "5000 RPM Capability",
        label: "JUKI MO-3900 Series",
        description:
          "Professional JUKI MO-3900 series machines delivering perfect seam finishing and durability.",
      }),
    },
    {
      imageSrc: imgFinish,
      icon: LuSettings2,
      ...(stepTexts?.[3] ?? {
        title: "Specialized Finishing",
        metric: "Micro-Precision Control",
        label: "EH 30 Specialist Equipment",
        description:
          "EH 30 specialized equipment for advanced finishing techniques and quality enhancement.",
      }),
    },
  ];

  const teaserTitle = t("process.teaser.title");
  const teaserDescription = t("process.teaser.description");
  const teaserHighlights = t("process.teaser.highlights", {
    returnObjects: true,
  }) as string[];

  return (
    <div>
      {/* ✅ SEO */}
      <Helmet>
        <title>Manufacturing Gallery & Process | PANOVI</title>
        <meta
          name="description"
          content="See PANOVI’s manufacturing process: cutting, craftsmanship, overlocking, and finishing—backed by industrial-grade equipment and strict quality controls."
        />
        <link rel="canonical" href={`${SITE_URL}/gallery`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Manufacturing Gallery & Process | PANOVI"
        />
        <meta
          property="og:description"
          content="Explore PANOVI’s end-to-end manufacturing workflow and quality standards."
        />
        <meta property="og:url" content={`${SITE_URL}/gallery`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Manufacturing Gallery & Process | PANOVI"
        />
        <meta
          name="twitter:description"
          content="Explore PANOVI’s end-to-end manufacturing workflow and quality standards."
        />
        <meta name="twitter:image" content={`${SITE_URL}/og-gallery.jpg`} />
      </Helmet>

      <ManufacturingExcellence items={METRICS} />
      <ProcessList items={PROCESS_ITEMS} />
      <QualityTeaser
        title={teaserTitle}
        description={teaserDescription}
        highlights={teaserHighlights}
      />
    </div>
  );
}

export default Gallery;
