import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://site-vitrine.vercel.app";
const siteLogoPath = "/logo-gnomes-vitrine.svg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gnomespoitevins",
  description: "Vitrine sobre de l'association Gnomespoitevins.",
  icons: {
    icon: [{ url: siteLogoPath, type: "image/svg+xml" }],
    shortcut: siteLogoPath,
    apple: [{ url: siteLogoPath, type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Gnomespoitevins",
    description: "Vitrine sobre de l'association Gnomespoitevins.",
    locale: "fr_FR",
    type: "website",
    images: [{ url: siteLogoPath, alt: "Logo Gnomespoitevins" }],
  },
  twitter: {
    card: "summary",
    title: "Gnomespoitevins",
    description: "Vitrine sobre de l'association Gnomespoitevins.",
    images: [siteLogoPath],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
