
import { useLocation } from "react-router-dom";
import {Helmet} from "react-helmet";
type SeoProps = {
  title?: string;
  description?: string;
  image?: string;        // absolute URL preferred for OG/Twitter
  canonicalPath?: string;
  noindex?: boolean;
  type?: "website" | "article";
  twitterHandle?: string; // e.g. "@panovi"
};

const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "https://www.panovi.mk").replace(/\/+$/, "");
const DEFAULT_TITLE = "PANOVI • Quality Textile & Apparel";
const DEFAULT_DESC =
  "PANOVI crafts high-quality textile and apparel. Explore our products, certifications, and gallery.";
const DEFAULT_IMAGE = `${SITE_URL}/og-default.jpg`;

export default function Seo({
  title,
  description,
  image,
  canonicalPath,
  noindex,
  type = "website",
  twitterHandle,
}: SeoProps) {
  const { pathname } = useLocation();
  const pageTitle = title ? `${title} | PANOVI` : DEFAULT_TITLE;
  const desc = description ?? DEFAULT_DESC;
  const canonical = `${SITE_URL}${canonicalPath ?? pathname}`;
  const ogImage = image ?? DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="PANOVI" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
