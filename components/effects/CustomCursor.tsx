"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isReady, setIsReady] = useState(false);
  const [isPointerTarget, setIsPointerTarget] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Dot mengikuti cursor secara instan (tanpa spring)
  // Ring mengikuti dengan spring physics — inilah sumber efek "lag" halus
  const ringX = useSpring(cursorX, { damping: 25, stiffness: 300, mass: 0.5 });
  const ringY = useSpring(cursorY, { damping: 25, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Di HP tidak ada cursor sama sekali, dan kalau user set reduced-motion
    // di OS-nya, hormati preferensi itu — jangan paksa animasi mengejar mouse.
    if (isTouch || prefersReducedMotion) return;

    function moveCursor(e: MouseEvent) {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    }

    function handleHover(e: MouseEvent) {
      const target = e.target as HTMLElement;
      setIsPointerTarget(!!target.closest("a, button, [role='button']"));
    }

    setIsReady(true);
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY]);

  if (!isReady) return null;

  return (
    <>
      {/* Dot kecil, mengikuti cursor 1:1 tanpa delay */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-on-dark pointer-events-none z-[9999] hidden md:block"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* Ring lebih besar, mengejar dengan spring — ini yang bikin efek "hidup" */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-m-blue-dark pointer-events-none z-[9999] hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isPointerTarget ? 56 : 32,
          height: isPointerTarget ? 56 : 32,
          opacity: isPointerTarget ? 0.6 : 0.35,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}