"use client";

import Image from "next/image";

type ImageLightboxProps = {
  src: string;
  alt: string;
  rotateLeft?: boolean;
  onClose: () => void;
};

export default function ImageLightbox({ src, alt, rotateLeft = false, onClose }: ImageLightboxProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-lg border border-[var(--brown)] bg-[var(--parchment)] p-2"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-md border border-[var(--brown)] bg-[var(--brown)] px-2 py-1 text-xs font-bold text-[var(--parchment)] hover:bg-[var(--forest)]"
        >
          Fermer
        </button>
        <div className="relative flex h-[70vh] w-full items-center justify-center">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={1200}
            sizes="100vw"
            className={`max-h-full max-w-full object-contain ${rotateLeft ? "-rotate-90" : ""}`}
          />
        </div>
      </div>
    </div>
  );
}
