"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.25;

type ZoomableImageLightboxProps = {
  src: string;
  alt: string;
  rotateLeft?: boolean;
  onClose: () => void;
};

function clampScale(value: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));
}

function getTouchDistance(a: React.Touch, b: React.Touch) {
  return Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
}

export default function ZoomableImageLightbox({
  src,
  alt,
  rotateLeft = false,
  onClose,
}: ZoomableImageLightboxProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    active: boolean;
    startX: number;
    startY: number;
    originX: number;
    originY: number;
  } | null>(null);
  const pinchRef = useRef<{ distance: number; scale: number } | null>(null);

  const applyZoomDelta = useCallback((delta: number) => {
    setScale((prev) => {
      const next = clampScale(prev + delta);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const delta = event.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
      applyZoomDelta(delta);
    };

    element.addEventListener("wheel", onWheel, { passive: false });
    return () => element.removeEventListener("wheel", onWheel);
  }, [applyZoomDelta]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (scale <= 1) return;
    dragRef.current = {
      active: true,
      startX: event.clientX,
      startY: event.clientY,
      originX: position.x,
      originY: position.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current?.active) return;
    setPosition({
      x: dragRef.current.originX + event.clientX - dragRef.current.startX,
      y: dragRef.current.originY + event.clientY - dragRef.current.startY,
    });
  };

  const stopDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current?.active) return;
    dragRef.current.active = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length !== 2) return;
    dragRef.current = null;
    pinchRef.current = {
      distance: getTouchDistance(event.touches[0]!, event.touches[1]!),
      scale,
    };
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length !== 2 || !pinchRef.current) return;
    event.preventDefault();
    const distance = getTouchDistance(event.touches[0]!, event.touches[1]!);
    const ratio = distance / pinchRef.current.distance;
    const next = clampScale(pinchRef.current.scale * ratio);
    setScale(next);
    if (next === 1) setPosition({ x: 0, y: 0 });
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length < 2) pinchRef.current = null;
    if (event.touches.length === 0) dragRef.current = null;
  };

  const handleDoubleClick = () => {
    if (scale > 1) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    } else {
      setScale(2);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-[var(--brown)] bg-[var(--parchment)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-2 border-b border-[var(--brown)]/30 px-3 py-2">
          <div className="flex items-center gap-1">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => applyZoomDelta(-ZOOM_STEP)}
              disabled={scale <= MIN_SCALE}
              aria-label="Dézoomer"
            >
              −
            </Button>
            <span className="min-w-12 text-center text-xs font-semibold text-[var(--brown)]">
              {Math.round(scale * 100)}%
            </span>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => applyZoomDelta(ZOOM_STEP)}
              disabled={scale >= MAX_SCALE}
              aria-label="Zoomer"
            >
              +
            </Button>
          </div>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Fermer
          </Button>
        </div>

        <div
          ref={containerRef}
          className={`relative h-[70vh] w-full touch-none overflow-hidden ${
            scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
          }`}
          onDoubleClick={handleDoubleClick}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="relative h-full w-full will-change-transform"
            style={{
              transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
            }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              className={`pointer-events-none object-contain select-none ${rotateLeft ? "-rotate-90" : ""}`}
              draggable={false}
            />
          </div>
        </div>

        <p className="px-3 py-2 text-center text-xs text-[var(--brown)]/70">
          Molette ou pincement pour zoomer · Double-clic pour agrandir · Glisser pour déplacer
        </p>
      </div>
    </div>
  );
}
