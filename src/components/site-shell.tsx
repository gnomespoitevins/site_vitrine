import Image from "next/image";
import Link from "next/link";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[var(--sand)]">
      <header className="bg-gradient-to-r from-[var(--brown)] via-[var(--forest)] to-[var(--gold)] text-[var(--sand)] shadow-lg">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-3 py-2 sm:gap-5 sm:px-5 sm:py-3 lg:px-8">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo-gnomes-poitevins.jpg"
              alt="Logo Gnomespoitevins"
              width={320}
              height={320}
              priority
              className="h-[5.5rem] w-auto drop-shadow-lg sm:h-28 md:h-32 lg:h-36"
            />
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center md:flex">
              <Link
                href="/"
                className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-md border border-[var(--gold)] bg-[var(--forest)] px-3 text-sm font-semibold tracking-wide text-[var(--sand)] shadow-md lg:px-4"
              >
                Accueil
              </Link>
            </nav>

            <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
              <Link
                href="mailto:gnomespoitevins@gmail.com"
                className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md border border-[var(--gold)] bg-[var(--gold)] px-2 text-xs font-semibold text-[var(--ink)] shadow transition-colors hover:bg-[var(--sand)] sm:h-11 sm:px-4 sm:text-sm"
              >
                Contact
              </Link>
            </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-3 py-5 sm:px-4 sm:py-6">{children}</main>

      <footer className="mt-10 border-t border-[var(--brown)]/60 bg-[var(--brown)] text-[var(--parchment)]">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="medieval-title text-sm tracking-wide text-[var(--sand)]">Gnomespoitevins</div>
              <div className="text-xs text-[var(--parchment)]/90">Association ludique et créative</div>
              <div className="text-xs text-[var(--parchment)]/90">gnomespoitevins@gmail.com</div>
            </div>
            <Link href="/" className="shrink-0">
              <Image
                src="/logo-gnomes-poitevins.jpg"
                alt="Logo Gnomespoitevins"
                width={176}
                height={176}
                className="h-16 w-auto drop-shadow-md sm:h-20"
              />
            </Link>
            <div className="text-xs text-[var(--parchment)]/80">
              © {new Date().getFullYear()} Gnomespoitevins - Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
