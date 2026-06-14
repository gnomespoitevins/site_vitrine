"use client";

import { useMemo, useState } from "react";
import ImageLightbox from "@/components/image-lightbox";
import SiteImage, { siteImageClasses } from "@/components/site-image";

export interface CarouselItem {
  src: string;
  alt: string;
  rotateLeft?: boolean;
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
                <SiteImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 40vw, 20vw"
                  className={`${siteImageClasses(item.rotateLeft)} opacity-90 transition-transform duration-300 hover:scale-105`}
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
        <ImageLightbox
          src={selectedItem.src}
          alt={selectedItem.alt}
          rotateLeft={selectedItem.rotateLeft}
          onClose={() => setSelectedItem(null)}
        />
      ) : null}
    </section>
  );
}
