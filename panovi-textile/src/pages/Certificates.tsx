import {
  LuBadgeCheck,
  LuClock3,
  LuCog,
  LuLayers,
  LuLeaf,
  LuLightbulb,
  LuShieldCheck,
  LuUser,
  LuUsers,
} from "react-icons/lu";
import { PiMedalLight } from "react-icons/pi";
import { FaCircle } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet"; // ✅ added

import ManufacturingExcellence from "./GalleryPage/ManufacturingExcellence";
import type { MetricItemProps } from "./GalleryPage/MetricItem";
import CertFeaturesList from "./CertificatesPage/CertFeatureList";
import CertificateImageList from "./CertificatesPage/CertificateImageList";
import type { CertificateImageItemProps } from "./CertificatesPage/CertificateImageItem";

import cert1 from "../assets/certificate_1.jpg";
import cert2 from "../assets/certificate_2.jpg";
import cert3 from "../assets/certificate_3.jpg";
import cert4 from "../assets/certificate_4.jpg";
import cert5 from "../assets/certificate_5.jpg";
import QualityTeaser from "./GalleryPage/QualityTeaser";
import StatusLabel from "../ui/StatusLabel";

function Certificates() {
  const { t } = useTranslation();
  const SITE_URL = (
    import.meta.env.VITE_SITE_URL ?? "https://www.panovi.mk"
  ).replace(/\/+$/, ""); // ✅ added

  const heroLead = t("certificatesPage.hero.headingLead");
  const heroHighlight = t("certificatesPage.hero.headingHighlight");
  const heroDesc = t("certificatesPage.hero.description");
  const heroStatus = t("certificatesPage.hero.statusText");

  const metricTexts = t("certificatesPage.metrics", {
    returnObjects: true,
  }) as Array<{
    value: string;
    label: string;
  }>;
  const METRICS: MetricItemProps[] = [
    {
      icon: LuLayers,
      ...(metricTexts?.[0] ?? {
        value: "2,000m² Manufacturing",
        label: "Certified Facility",
      }),
    },
    {
      icon: LuClock3,
      ...(metricTexts?.[1] ?? {
        value: "15+ Years Certified",
        label: "Certification History",
      }),
    },
    {
      icon: LuCog,
      ...(metricTexts?.[2] ?? {
        value: "100% Current",
        label: "Compliance Rate",
      }),
    },
    {
      icon: LuUser,
      ...(metricTexts?.[3] ?? {
        value: "5 International Standards",
        label: "Certification Scope",
      }),
    },
  ];

  const listTexts = t("certificatesPage.list", {
    returnObjects: true,
  }) as Array<{
    alt: string;
    category: string;
    title: string;
    description: string;
  }>;
  const CERT_ITEMS: CertificateImageItemProps[] = [
    {
      src: cert1,
      ...(listTexts?.[0] ?? {
        alt: "OEKO–TEX® STeP",
        category: "Environmental Standard",
        title: "OEKO–TEX® STeP",
        description: "Sustainable Textile Production Certification",
      }),
    },
    {
      src: cert2,
      ...(listTexts?.[1] ?? {
        alt: "ISO 14001:2015",
        category: "Environmental Standard",
        title: "ISO 14001:2015",
        description: "Environmental Management System",
      }),
    },
    {
      src: cert3,
      ...(listTexts?.[2] ?? {
        alt: "ISO 9001:2015",
        category: "Quality Standard",
        title: "ISO 9001:2015",
        description: "Quality Management System",
      }),
    },
    {
      src: cert4,
      ...(listTexts?.[3] ?? {
        alt: "ISO 45001:2018",
        category: "Safety Standard",
        title: "ISO 45001:2018",
        description: "Occupational Health & Safety Management System",
      }),
    },
    {
      src: cert5,
      ...(listTexts?.[4] ?? {
        alt: "ISO 50001:2018",
        category: "Energy Standard",
        title: "ISO 50001:2018",
        description: "Energy Management System for optimized performance",
      }),
    },
  ];

  const featureTexts = t("certificatesPage.features", {
    returnObjects: true,
  }) as Array<{
    title: string;
    subtitle: string;
  }>;
  const CERT_FEATURES = [
    {
      icon: LuShieldCheck,
      ...(featureTexts?.[0] ?? {
        title: "Compliance Guarantee",
        subtitle: "Full regulatory compliance across international markets",
      }),
    },
    {
      icon: LuLeaf,
      ...(featureTexts?.[1] ?? {
        title: "Sustainable Operations",
        subtitle: "Environmentally responsible manufacturing processes",
      }),
    },
    {
      icon: LuBadgeCheck,
      ...(featureTexts?.[2] ?? {
        title: "Quality Assurance",
        subtitle: "Consistent high-quality output with systematic controls",
      }),
    },
    {
      icon: LuUsers,
      ...(featureTexts?.[3] ?? {
        title: "Worker Safety",
        subtitle: "Comprehensive safety protocols protecting our team",
      }),
    },
    {
      icon: LuLightbulb,
      ...(featureTexts?.[4] ?? {
        title: "Energy Efficiency",
        subtitle: "Optimized energy performance reducing environmental impact",
      }),
    },
  ];

  const teaserTitle = t("certificatesPage.teaser.title");
  const teaserDesc = t("certificatesPage.teaser.description");
  const teaserHighlights = t("certificatesPage.teaser.highlights", {
    returnObjects: true,
  }) as string[];

  // ✅ SEO: JSON-LD for a list of certificates
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Certificates",
    url: `${SITE_URL}/certificates`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "OEKO-TEX® STeP" },
      { "@type": "ListItem", position: 2, name: "ISO 14001:2015" },
      { "@type": "ListItem", position: 3, name: "ISO 9001:2015" },
      { "@type": "ListItem", position: 4, name: "ISO 45001:2018" },
      { "@type": "ListItem", position: 5, name: "ISO 50001:2018" },
    ],
  };

  return (
    <div>
      <Helmet>
        <title>Certificates | PANOVI</title>
        <meta
          name="description"
          content="Explore PANOVI’s certifications including OEKO-TEX®, ISO 9001, ISO 14001, ISO 45001, and ISO 50001—proof of our commitment to quality, safety, and sustainability."
        />
        <link rel="canonical" href={`${SITE_URL}/certificates`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Certificates | PANOVI" />
        <meta
          property="og:description"
          content="PANOVI’s international certifications: OEKO-TEX®, ISO 9001, ISO 14001, ISO 45001, ISO 50001."
        />
        <meta property="og:url" content={`${SITE_URL}/certificates`} />
        <meta property="og:image" content={`${SITE_URL}/og-certificates.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Certificates | PANOVI" />
        <meta
          name="twitter:description"
          content="PANOVI’s international certifications: OEKO-TEX®, ISO 9001, ISO 14001, ISO 45001, ISO 50001."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/og-certificates.jpg`}
        />
      </Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ManufacturingExcellence
        items={METRICS}
        headingLead={heroLead}
        headingHighlight={heroHighlight}
        description={heroDesc}
        statusLabel={{
          text: heroStatus,
          bgColor: "#2197FF",
          bgOpacity: 0.08,
          textColor: "#fff",
          icon: PiMedalLight,
          iconColor: "#FFA600",
        }}
      />
      <CertificateImageList items={CERT_ITEMS} />
      <CertFeaturesList items={CERT_FEATURES} />

      <StatusLabel
        text={t("certificatesPage.statusCurrentValid")}
        bgColor="#00FA53"
        bgOpacity={0.08}
        textColor="#222423"
        icon={FaCircle}
        iconColor="#7BFFA7"
      />

      <QualityTeaser
        title={teaserTitle}
        description={teaserDesc}
        highlights={teaserHighlights}
      />
    </div>
  );
}

export default Certificates;
