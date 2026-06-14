import Image from "next/image";
import { cn } from "@/lib/utils";

type SiteImageProps = {
  src: string;
  alt: string;
  rotateLeft?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function siteImageClasses(rotateLeft?: boolean, mode: "cover" | "contain" = "cover") {
  return cn(
    mode === "cover" ? "object-cover" : "object-contain",
    rotateLeft && "origin-center -rotate-90 scale-[1.35]",
  );
}

export default function SiteImage({
  src,
  alt,
  rotateLeft = false,
  fill = false,
  width,
  height,
  className,
  sizes,
  priority,
}: SiteImageProps) {
  const imageClass = cn(siteImageClasses(rotateLeft), className);

  if (fill) {
    return <Image src={src} alt={alt} fill sizes={sizes} className={imageClass} priority={priority} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={imageClass}
      priority={priority}
    />
  );
}
