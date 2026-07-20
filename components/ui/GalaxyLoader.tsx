"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RING_CONFIGS = [
  { radius: 50, count: 6, duration: 6, size: 2.5, opacity: 0.9 },
  { radius: 90, count: 10, duration: 11, size: 2, opacity: 0.6 },
  { radius: 130, count: 14, duration: 17, size: 1.5, opacity: 0.4 },
];

const CENTER = 160;
const VISIBLE_DURATION = 4000;

function buildStars(radius: number, count: number, size: number, opacity: number) {
  return Array.from({ length: count }).map((_, i) => {
    const angle = (i / count) * Math.PI * 2;
    const x = Number((CENTER + radius * Math.cos(angle)).toFixed(3));
    const y = Number((CENTER + radius * Math.sin(angle)).toFixed(3));
    return (
      <circle
        key={i}
        cx={x}
        cy={y}
        r={size}
        fill="currentColor"
        opacity={opacity}
      />
    );
  });
}

export function GalaxyLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setVisible(false), VISIBLE_DURATION);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-canvas flex items-center justify-center text-on-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <svg width="320" height="320" viewBox="0 0 320 320" className="max-w-[70vw] max-h-[70vw]">
            <circle
              cx={CENTER}
              cy={CENTER}
              r="4"
              className="text-m-blue-text"
              fill="currentColor"
            >
              <animate
                attributeName="r"
                values="3;6;3"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;1;0.6"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>

            {RING_CONFIGS.map((ring, index) => (
              <motion.g
                key={ring.radius}
                className={index === 0 ? "text-m-blue-text" : "text-on-dark"}
                animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
                transition={{
                  duration: ring.duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
              >
                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r={ring.radius}
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.12"
                  strokeWidth="1"
                />
                {buildStars(ring.radius, ring.count, ring.size, ring.opacity)}
              </motion.g>
            ))}
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}