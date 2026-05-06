import Link from "next/link";
import Image from "next/image";
import Carousel from "@/components/carousel";
import PageContainer from "@/components/page-container";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  const homeItems = [
    {
      src: "/gallery-1.svg",
      alt: "Scene associative 1",
    },
    {
      src: "/gallery-2.svg",
      alt: "Scene associative 2",
    },
    {
      src: "/gallery-3.svg",
      alt: "Scene associative 3",
    },
    {
      src: "/gallery-4.svg",
      alt: "Scene associative 4",
    },
    {
      src: "/gallery-5.svg",
      alt: "Scene associative 5",
    },
  ];

  return (
    <PageContainer title="Laissez-vous porter par l'imaginaire">
      <section className="parchment-section p-5 sm:p-7">
        <div className="grid gap-4 md:grid-cols-[160px_1fr] md:items-center">
          <div className="mx-auto">
            <Image src="/logo-gnomes-vitrine.svg" alt="Logo Gnomespoitevins" width={140} height={140} priority />
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-[var(--forest)]">Association ludique a Poitiers</h2>
            <p className="mb-3 text-sm leading-relaxed text-[var(--ink-soft)]">
              Nous rassemblons passionnes et curieux autour du jeu narratif, de la creation
              et des rencontres conviviales. Cette vitrine reprend l identite visuelle
              historique du projet, dans une version simplifiee.
            </p>
            <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
              Decouvrez nos activites principales et suivez nos prochaines dates.
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
                href="mailto:contact@gnomespoitevins.fr"
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
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Jeux de role",
              text: "Scenarios immersifs, sessions sur table et univers partages.",
              image: "/gallery-1.svg",
            },
            {
              title: "Ateliers creatifs",
              text: "Peinture, decors et fabrication pour faire vivre les mondes de jeu.",
              image: "/gallery-2.svg",
            },
            {
              title: "Evenements",
              text: "Rencontres associatives, initiations et temps forts communautaires.",
              image: "/gallery-3.svg",
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

      <SectionDivider />

      <section className="parchment-section p-5 sm:p-7">
        <h2 className="mb-3 text-xl font-semibold text-[var(--forest)]">Informations pratiques</h2>
        <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
          Activites regulieres, accueil des nouveaux participants et communication via reseaux
          sociaux. Cette version reste volontairement concentree sur la page accueil.
        </p>
      </section>

      <Carousel title="Ambiance de l'association" items={homeItems} />
    </PageContainer>
  );
}
