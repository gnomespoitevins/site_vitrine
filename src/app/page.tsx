import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const activities = [
    {
      title: "Jeux narratifs",
      text: "Sessions conviviales de jeux de role et de plateaux dans un cadre accessible a tous.",
    },
    {
      title: "Ateliers creatifs",
      text: "Peinture de figurines, creation de decors et partage de techniques au rythme de chacun.",
    },
    {
      title: "Evenements associatifs",
      text: "Rencontres ponctuelles pour faire decouvrir l'univers et accueillir de nouveaux membres.",
    },
  ];

  return (
    <div className="flex flex-1 justify-center px-4 py-10 sm:px-8">
      <main className="w-full max-w-5xl space-y-10 rounded-3xl border bg-card/90 p-6 shadow-sm sm:p-10">
        <section className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
          <div className="mx-auto md:mx-0">
            <Image
              src="/logo-gnomes-vitrine.svg"
              alt="Logo Gnomespoitevins"
              width={140}
              height={140}
              priority
            />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Association ludique
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Gnomespoitevins
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              Une vitrine epuree pour presenter nos activites, notre esprit associatif et
              nos prochains rendez-vous.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <Link
                className={buttonVariants({ variant: "default" })}
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nous suivre
              </Link>
              <Link className={buttonVariants({ variant: "secondary" })} href="mailto:contact@gnomespoitevins.fr">
                Nous contacter
              </Link>
            </div>
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Nos activites</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {activities.map((activity) => (
              <Card key={activity.title} className="border-border/80 bg-background/80">
                <CardHeader>
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{activity.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Informations pratiques</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Rencontres regulieres sur la metropole, sessions ouvertes sur inscription et
            communication des prochaines dates via reseaux sociaux.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Cette version reste volontairement simple: une seule page accueil, sans espace
            profil ni administration.
          </p>
        </section>
      </main>
    </div>
  );
}
