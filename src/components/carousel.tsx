"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

export interface CarouselItem {
  src: string;
  alt: string;
}

export default function Carousel({
  title,
  items,
}: {
  title?: string;
  items: CarouselItem[];
}) {
  const [start, setStart] = useState(0);
  const [selectedItem, setSelectedItem] = useState<CarouselItem | null>(null);

  const visible = useMemo(() => {
    if (items.length <= 5) {
      return items;
    }
    return Array.from({ length: 5 }, (_, index) => items[(start + index) % items.length]);
  }, [items, start]);

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="parchment-card px-4 py-4 sm:px-5 sm:py-5">
      {title ? <h3 className="mb-3 text-base font-semibold uppercase tracking-wide text-[var(--brown)]">{title}</h3> : null}
      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={items.length <= 5}
          onClick={() => setStart((prev) => (prev - 1 + items.length) % items.length)}
          className="hidden h-9 w-9 items-center justify-center rounded-full border border-[var(--forest)]/30 bg-[var(--forest)]/10 text-[var(--forest)] shadow hover:bg-[var(--forest)]/20 disabled:cursor-not-allowed disabled:opacity-40 sm:flex"
        >
          ‹
        </button>
        <div className="scrollbar-thin flex w-full gap-3 overflow-x-auto">
          {visible.map((item, index) => (
            <figure
              key={`${item.src}-${index}`}
              className="relative h-32 min-w-[120px] flex-1 overflow-hidden rounded-xl border border-[var(--brown)]/40 bg-[var(--brown)]/70 shadow-inner sm:h-40"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                className="relative block h-full w-full"
                aria-label={`Agrandir ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-300 hover:scale-105"
                  fill
                  sizes="(max-width: 640px) 40vw, 20vw"
                />
              </button>
            </figure>
          ))}
        </div>
        <button
          type="button"
          disabled={items.length <= 5}
          onClick={() => setStart((prev) => (prev + 1) % items.length)}
          className="hidden h-9 w-9 items-center justify-center rounded-full border border-[var(--forest)]/30 bg-[var(--forest)]/10 text-[var(--forest)] shadow hover:bg-[var(--forest)]/20 disabled:cursor-not-allowed disabled:opacity-40 sm:flex"
        >
          ›
        </button>
      </div>
      {selectedItem ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setSelectedItem(null)}>
          <div className="relative w-full max-w-5xl overflow-hidden rounded-lg border border-[var(--brown)] bg-[var(--parchment)] p-2" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-3 top-3 z-10 rounded-md border border-[var(--brown)] bg-[var(--brown)] px-2 py-1 text-xs font-bold text-[var(--parchment)] hover:bg-[var(--forest)]"
            >
              Fermer
            </button>
            <div className="relative h-[70vh] w-full">
              <Image src={selectedItem.src} alt={selectedItem.alt} fill sizes="100vw" className="object-contain" />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
