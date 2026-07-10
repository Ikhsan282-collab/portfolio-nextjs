"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  /** Sama seperti Reveal: jalan langsung saat mount untuk konten atas fold. */
  immediate?: boolean;
}

// Teks asli disediakan untuk screen reader lewat elemen sr-only terpisah
// (bukan aria-label di <span>, karena role "generic" tidak mendukung itu).
// Versi animasi per-kata ditandai aria-hidden karena murni dekoratif.
export function TextReveal({
  text,
  className,
  delay = 0,
  staggerDelay = 0.06,
  duration = 0.4,
  immediate = false,
}: TextRevealProps) {
  const words = text.split(" ");
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: "easeOut" },
    },
  };

  const trigger = immediate
    ? { animate: "visible" as const }
    : {
        whileInView: "visible" as const,
        viewport: { once: true, margin: "-80px" },
      };

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        variants={container}
        initial="hidden"
        {...trigger}
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={child}
            style={{ display: "inline-block" }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </motion.span>
    </span>
  );
}
