export const siteConfig = {
  name: "Gnomespoitevins",
  fullName: "Les Gnomes Poitevins",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://site-vitrine.vercel.app",
  description:
    "Association ludique à Poitiers spécialisée en trollball et escrime ludique. Initiations, entraînements et animations médiévales pour petits et grands.",
  email: "gnomespoitevins@gmail.com",
  facebookGroupUrl: "https://www.facebook.com/groups/1444231562442494?locale=fr_FR",
  locale: "fr_FR",
  logoPath: "/logo-gnomes-poitevins.jpg",
  keywords: [
    "Gnomespoitevins",
    "Les Gnomes Poitevins",
    "trollball",
    "escrime ludique",
    "association Poitiers",
    "jeu de rôle grandeur nature",
    "animation médiévale",
    "sport ludique",
    "Montamisé",
    "Vienne",
  ],
} as const;

export function absoluteUrl(path = "") {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
