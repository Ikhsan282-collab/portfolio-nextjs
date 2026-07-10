import Image from "next/image";

interface ProjectThumbnailProps {
  src?: string;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
  objectPosition?: "center" | "top" | "bottom";
}

// Ambil 2 huruf pertama dari tiap kata judul, maksimal 2 kata â€”
// dipakai sebagai fallback visual kalau thumbnail belum tersedia.
function getInitials(title: string) {
  return title
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function ProjectThumbnail({
  src,
  alt,
  className,
  sizes,
  priority,
  objectPosition = "center",
}: ProjectThumbnailProps) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-m-blue-dark/15 to-surface-card ${className}`}
      >
        <span aria-hidden="true" className="text-3xl font-bold tracking-[2px] text-m-blue-dark/40">
          {getInitials(alt)}
        </span>
      </div>
    );
  }

  const objectPositionClass =
    objectPosition === "top"
      ? "object-top"
      : objectPosition === "bottom"
      ? "object-bottom"
      : "object-center";

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${objectPositionClass} transition-transform duration-500 group-hover:scale-105`}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}