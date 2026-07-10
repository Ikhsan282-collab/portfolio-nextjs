"use client";

import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // derajat maksimum kemiringan, default 8
}

export function TiltCard({ children, className, maxTilt = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouch] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches
  );

  // Posisi mouse relatif dalam card, dinormalisasi -0.5 sampai 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring supaya gerakan halus/lag natural, bukan snap kasar mengikuti mouse
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  // Posisi glare (kilau cahaya) mengikuti mouse, dari 0% ke 100%
  const glareX = useTransform(springX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(springY, [-0.5, 0.5], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  // Di device touch, tilt tidak masuk akal (tidak ada mouse hover) —
  // render children apa adanya tanpa wrapper animasi, hindari overhead sia-sia.
  if (isTouch) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
        position: "relative",
      }}
    >
      {children}

      {/* Glare — lapisan gradient tipis yang mengikuti posisi mouse,
          memberi ilusi permukaan memantulkan cahaya saat dimiringkan. */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([x, y]) =>
              `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.08), transparent 60%)`
          ),
        }}
      />
    </motion.div>
  );
}