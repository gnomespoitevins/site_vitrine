import Link from "next/link";
import Image from "next/image";
import ActivityCards from "@/components/activity-cards";
import Carousel from "@/components/carousel";
import PageContainer from "@/components/page-container";
import SectionDivider from "@/components/section-divider";

const FACEBOOK_GROUP_URL = "https://www.facebook.com/groups/1444231562442494?locale=fr_FR";

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
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={FACEBOOK_GROUP_URL}
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
    </PageContainer>
  );
}
