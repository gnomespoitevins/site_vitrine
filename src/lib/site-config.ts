export const siteConfig = {
  name: "Gnomespoitevins",
  fullName: "Les Gnomes Poitevins",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://site-vitrine.vercel.app",
  description:
    "Association ludique à Poitiers spécialisée en trollball et escrime ludique. Initiations, entraînements et animations médiévales pour petits et grands.",
  email: "gnomespoitevins@gmail.com",
  facebookGroupUrl: "https://www.facebook.com/groups/1444231562442494?locale=fr_FR",
  trollballSession: {
    mapsUrl:
      "https://www.google.com/maps/place/Gymnase+de+Montamisé/@46.6204665,0.427441,120m/data=!3m1!1e3!4m15!1m8!3m7!1s0x47fdba5368bb215d:0x405d39260e7a210!2s86360+Montamisé!3b1!8m2!3d46.620536!4d0.421398!16s%2Fm%2F03qhhl_!3m5!1s0x47fdbbbab59f6dd3:0xb9b56b22b0c46eb5!8m2!3d46.6207204!4d0.4274923!16s%2Fg%2F113h8h7tz?entry=ttu",
    placeLabel: "gymnase de Montamisé",
  },
  gnomesAssociesPartner: {
    name: "Gnomes et Associés",
    description:
      "Association partenaire à Dunkerque autour du grandeur nature, de l'escrime ludique, des figurines, des jeux de rôle et des événements médiévaux fantastiques.",
    logo: "/Images/partners/gnomes-et-associes.jpg",
    facebookUrl: "https://www.facebook.com/GnomesEtAssocies?locale=fr_FR",
    websiteUrl: "https://gnomesetassocies.vercel.app/",
  },
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
