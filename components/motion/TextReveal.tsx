"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

// Membelah teks jadi per-huruf, dianimasikan dengan orkestrasi
// staggerChildren (satu animasi induk mengatur semua anak) dan
// baru berjalan saat section masuk viewport (whileInView),
// bukan langsung saat komponen mount.
export function TextReveal({
  text,
  className,
  delay = 0,
  staggerDelay = 0.03,
}: TextRevealProps) {
  const letters = text.split("");
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <span className={className} aria-label={text}>
        {text}
      </span>
    );
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
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.span
      className={className}
      aria-label={text}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          aria-hidden="true"
          variants={child}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
