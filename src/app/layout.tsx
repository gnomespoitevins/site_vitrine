import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import JsonLd from "@/components/json-ld";
import SiteShell from "@/components/site-shell";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} | Trollball et escrime ludique à Poitiers`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  category: "association sportive",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: siteConfig.logoPath, type: "image/jpeg" }],
    shortcut: siteConfig.logoPath,
    apple: [{ url: siteConfig.logoPath, type: "image/jpeg" }],
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    siteName: siteConfig.fullName,
    title: `${siteConfig.fullName} | Trollball à Poitiers`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.logoPath,
        width: 1200,
        height: 1200,
        alt: `Logo ${siteConfig.fullName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} | Trollball à Poitiers`,
    description: siteConfig.description,
    images: [siteConfig.logoPath],
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
        <JsonLd />
        <SiteShell>{children}</SiteShell>
        <Analytics />
      </body>
    </html>
  );
}
