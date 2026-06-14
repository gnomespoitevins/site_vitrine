import Link from "next/link";
import Image from "next/image";
import Carousel from "@/components/carousel";
import PageContainer from "@/components/page-container";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  const homeItems = [
    { src: "/Images/trollball/1.jpg", alt: "Entrainement trollball 1" },
    { src: "/Images/trollball/2.jpg", alt: "Entrainement trollball 2" },
    { src: "/Images/trollball/3.jpg", alt: "Entrainement trollball 3" },
    { src: "/Images/trollball/4.jpg", alt: "Entrainement trollball 4" },
    { src: "/Images/trollball/5.jpg", alt: "Entrainement trollball 5" },
    { src: "/Images/evenement/1.jpg", alt: "Article de presse Les Gnomes poitevins" },
  ];

  return (
    <PageContainer title="Laissez-vous porter par l'imaginaire">
      <section className="parchment-section p-5 sm:p-7">
        <div className="grid gap-4 md:grid-cols-[160px_1fr] md:items-center">
          <div className="mx-auto">
            <Image src="/logo-gnomes-poitevins.jpg" alt="Logo Gnomespoitevins" width={140} height={140} priority className="rounded-lg" />
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-[var(--forest)]">Association ludique a Poitiers</h2>
            <p className="mb-3 text-sm leading-relaxed text-[var(--ink-soft)]">
              Notre association pratique le trollball, une forme d escrime ludique en equipe
              melant tactique, deplacement et jeu de role grandeur nature dans une ambiance
              medievale et conviviale.
            </p>
            <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
              Nous participons regulierement a des evenements et pouvons proposer des
              animations d escrime ludique pour faire decouvrir la discipline.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="https://www.facebook.com/GnomesEtAssocies?locale=fr_FR"
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
        <h2 className="mb-4 text-lg font-semibold text-[var(--forest)]">Nos activites</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Trollball",
              text: "Escrime ludique en equipe melant tactique, deplacement et ambiance medievale.",
              image: "/Images/trollball/2.jpg",
            },
            {
              title: "Evenements",
              text: "Rencontres associatives, initiations et temps forts communautaires.",
              image: "/Images/evenement/1.jpg",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-[var(--forest)]/25 bg-[var(--parchment)] shadow"
            >
              <div className="h-28 overflow-hidden bg-[var(--brown)]/60">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={160}
                />
              </div>
              <div className="p-3">
                <h3 className="mb-1 text-sm font-semibold text-[var(--forest)]">{item.title}</h3>
                <p className="text-xs text-[var(--ink-soft)]">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Carousel title="Ambiance de l'association" items={homeItems} />
    </PageContainer>
  );
}
