import { Helmet } from "react-helmet-async";
import { BUSINESS } from "@/data/business";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  type?: "website" | "article";
  jsonLd?: object | object[];
}

export default function SEO({
  title,
  description,
  canonical,
  type = "website",
  jsonLd,
}: SEOProps) {
  const canonicalUrl = BUSINESS.url + canonical;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={BUSINESS.name} />
      <meta property="og:image" content={BUSINESS.url + "/og-image.png"} />
      <meta property="og:locale" content="ro_RO" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={BUSINESS.url + "/og-image.png"} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd])}
        </script>
      )}
    </Helmet>
  );
}
