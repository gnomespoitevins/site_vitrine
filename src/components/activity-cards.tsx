"use client";

import { useState } from "react";
import ZoomableImageLightbox from "@/components/zoomable-image-lightbox";
import SiteImage, { siteImageClasses } from "@/components/site-image";

type ActivityItem = {
  title: string;
  text: string;
  image: string;
  rotateLeft?: boolean;
};

export default function ActivityCards({ items }: { items: ActivityItem[] }) {
  const [selected, setSelected] = useState<ActivityItem | null>(null);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.title}
            className="group flex flex-col overflow-hidden rounded-xl border border-[var(--forest)]/25 bg-[var(--parchment)] shadow"
          >
            <button
              type="button"
              onClick={() => setSelected(item)}
              className="relative h-36 overflow-hidden bg-[var(--brown)]/60 sm:h-40"
              aria-label={`Agrandir ${item.title}`}
            >
              <SiteImage
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`${siteImageClasses(item.rotateLeft)} transition-transform duration-300 group-hover:scale-105`}
              />
            </button>
            <div className="p-3">
              <h3 className="mb-1 text-sm font-semibold text-[var(--forest)]">{item.title}</h3>
              <p className="text-xs text-[var(--ink-soft)]">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
      {selected ? (
        <ZoomableImageLightbox
          key={selected.image}
          src={selected.image}
          alt={selected.title}
          rotateLeft={selected.rotateLeft}
          onClose={() => setSelected(null)}
        />
      ) : null}
    </>
  );
}
