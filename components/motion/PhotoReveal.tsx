"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

interface PhotoRevealProps {
  src: string;
  alt: string;
}

export function PhotoReveal({ src, alt }: PhotoRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isTouch =
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  // Bangun string CSS mask secara reaktif — setiap kali springX/springY
  // berubah, template ini otomatis re-evaluate tanpa trigger re-render React.
  const maskImage = useMotionTemplate`radial-gradient(circle 120px at ${springX}% ${springY}%, black 40%, transparent 100%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(((e.clientX - rect.left) / rect.width) * 100);
    y.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  function handleMouseLeave() {
    x.set(50);
    y.set(50);
  }

  if (isTouch) {
    return (
      <div className="relative aspect-[4/5] border border-hairline overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover grayscale"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-[4/5] border border-hairline overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover grayscale"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />

      <motion.div
        className="absolute inset-0"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <Image
          src={src}
          alt=""
          aria-hidden="true"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}