import { absoluteUrl, siteConfig } from "@/lib/site-config";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${absoluteUrl("/")}#organization`,
        name: siteConfig.fullName,
        alternateName: siteConfig.name,
        url: absoluteUrl("/"),
        logo: absoluteUrl(siteConfig.logoPath),
        email: siteConfig.email,
        sameAs: [siteConfig.facebookGroupUrl],
        description: siteConfig.description,
        areaServed: {
          "@type": "City",
          name: "Poitiers",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        url: absoluteUrl("/"),
        name: siteConfig.fullName,
        description: siteConfig.description,
        inLanguage: "fr-FR",
        publisher: { "@id": `${absoluteUrl("/")}#organization` },
      },
      {
        "@type": "SportsOrganization",
        "@id": `${absoluteUrl("/")}#sports-organization`,
        name: siteConfig.fullName,
        url: absoluteUrl("/"),
        sport: ["Trollball", "Escrime ludique"],
        description: siteConfig.description,
        email: siteConfig.email,
        parentOrganization: { "@id": `${absoluteUrl("/")}#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
