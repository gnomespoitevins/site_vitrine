import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ActivityCards from "@/components/activity-cards";
import Carousel from "@/components/carousel";
import PageContainer from "@/components/page-container";
import SectionDivider from "@/components/section-divider";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Accueil",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.fullName} | Trollball et escrime ludique à Poitiers`,
    description: siteConfig.description,
    url: "/",
  },
};

export default function Home() {
  const homeItems = [
    { src: "/Images/trollball/1.jpg", alt: "Entraînement trollball 1" },
    { src: "/Images/trollball/2.jpg", alt: "Entraînement trollball 2" },
    { src: "/Images/trollball/3.jpg", alt: "Entraînement trollball 3" },
    { src: "/Images/trollball/4.jpg", alt: "Entraînement trollball 4" },
    { src: "/Images/trollball/5.jpg", alt: "Entraînement trollball 5" },
    {
      src: "/Images/evenement/1.jpg",
      alt: "Article de presse Les Gnomes poitevins",
      rotateLeft: true,
    },
  ];

  const activityItems = [
    {
      title: "Trollball",
      text: "Escrime ludique en équipe mêlant tactique, déplacement et ambiance médiévale.",
      image: "/Images/trollball/2.jpg",
    },
    {
      title: "Événements",
      text: "Rencontres associatives, initiations et temps forts communautaires.",
      image: "/Images/evenement/1.jpg",
      rotateLeft: true,
    },
  ];

  return (
    <PageContainer title="Laissez-vous porter par l'imaginaire">
      <section className="parchment-section p-5 sm:p-7">
        <div className="grid gap-4 md:grid-cols-[160px_1fr] md:items-center">
          <div className="mx-auto">
            <Image src="/logo-gnomes-poitevins.jpg" alt="Logo Gnomespoitevins" width={140} height={140} priority className="rounded-lg" />
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-[var(--forest)]">Association ludique à Poitiers</h2>
            <p className="mb-3 text-sm leading-relaxed text-[var(--ink-soft)]">
              Notre association pratique le trollball, une forme d&apos;escrime ludique en équipe
              mêlant tactique, déplacement et jeu de rôle grandeur nature dans une ambiance
              médiévale et conviviale.
            </p>
            <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
              Nous participons régulièrement à des événements et pouvons proposer des
              animations d&apos;escrime ludique pour faire découvrir la discipline.
              <br />
              <br />
              Notre créneau de trollball a lieu le dimanche matin de 10h00 à 12h00 au{" "}
              <a
                href={siteConfig.trollballSession.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="da-link"
              >
                {siteConfig.trollballSession.placeLabel}
              </a>
              , en extérieur ou en intérieur suivant la météo.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={siteConfig.facebookGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[var(--gold)] bg-[var(--gold)] px-4 text-sm font-semibold text-[var(--ink)] shadow transition-colors hover:bg-[var(--sand)]"
              >
                Nous suivre
              </Link>
              <Link
                href="mailto:gnomespoitevins@gmail.com"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[var(--forest)]/40 bg-[var(--forest)]/10 px-4 text-sm font-semibold text-[var(--forest)] transition-colors hover:bg-[var(--forest)]/20"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="parchment-card p-5 sm:p-6">
        <h2 className="mb-4 text-lg font-semibold text-[var(--forest)]">Nos activités</h2>
        <ActivityCards items={activityItems} />
      </section>

      <Carousel title="Ambiance de l'association" items={homeItems} />

      <SectionDivider />

      <section className="parchment-card p-5 sm:p-6">
        <h2 className="mb-4 text-lg font-semibold text-[var(--forest)]">Les partenaires de l&apos;association</h2>
        <article className="rounded-xl border border-[var(--gold)]/60 bg-[var(--parchment)] p-4 shadow-md">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg border border-[var(--gold)]/60 bg-white">
              <Image
                src={siteConfig.gnomesAssociesPartner.logo}
                alt={siteConfig.gnomesAssociesPartner.name}
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-base font-semibold text-[var(--brown)]">{siteConfig.gnomesAssociesPartner.name}</h3>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-[var(--ink-soft)]">
            {siteConfig.gnomesAssociesPartner.description}
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={siteConfig.gnomesAssociesPartner.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--brown)]/40 bg-white px-3 py-2 text-xs font-semibold text-[var(--brown)] transition hover:bg-[#f3e6c8]"
            >
              <Image
                src={siteConfig.gnomesAssociesPartner.logo}
                alt=""
                width={16}
                height={16}
                className="rounded-sm object-cover"
              />
              Facebook
            </a>
            <a
              href={siteConfig.gnomesAssociesPartner.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--brown)]/40 bg-white px-3 py-2 text-xs font-semibold text-[var(--brown)] transition hover:bg-[#f3e6c8]"
            >
              <Image
                src={siteConfig.gnomesAssociesPartner.logo}
                alt=""
                width={16}
                height={16}
                className="rounded-sm object-cover"
              />
              Site web
            </a>
          </div>
        </article>
      </section>
    </PageContainer>
  );
}
