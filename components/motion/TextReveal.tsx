"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

// Membelah teks jadi per-huruf, tiap huruf jadi <motion.span> terpisah
// supaya bisa dianimasikan satu-satu dengan stagger. Spasi tetap
// dipertahankan sebagai &nbsp; agar layout kata tidak "menempel".
export function TextReveal({
  text,
  className,
  delay = 0,
  staggerDelay = 0.03,
}: TextRevealProps) {
  const letters = text.split("");

  return (
    <span className={className} aria-label={text}>
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          aria-hidden="true"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + index * staggerDelay,
            ease: "easeOut",
          }}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}