"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "left" | "right";
  className?: string;
  /** Jalankan animasi langsung saat mount, bukan menunggu masuk viewport.
   *  Pakai untuk konten di atas fold (mis. Hero) supaya tidak menunda LCP. */
  immediate?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  className,
  immediate = false,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = {
    up: { y: 24, x: 0 },
    left: { y: 0, x: -24 },
    right: { y: 0, x: 24 },
  }[direction];

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const trigger = immediate
    ? { animate: { opacity: 1, y: 0, x: 0 } }
    : {
        whileInView: { opacity: 1, y: 0, x: 0 },
        viewport: { once: true, margin: "-80px" },
      };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      {...trigger}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
