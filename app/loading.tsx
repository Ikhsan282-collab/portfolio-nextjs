"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-canvas">
      <div className="flex flex-col items-center gap-6">
        <svg
          viewBox="0 0 200 80"
          className="w-40 h-16"
          aria-hidden="true"
        >
          <motion.path
            d="M10 65 L10 15 L35 50 L60 15 L60 65"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-hairline"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
          <motion.path
            d="M85 15 L85 65"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-hairline"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 1.1 }}
          />
          <motion.path
            d="M110 65 L110 15 L145 15 Q160 15 160 30 Q160 42 145 42 L110 42 M135 42 L160 65"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-on-dark"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1.3 }}
          />
        </svg>

        <div className="flex items-center gap-1">
          <p className="text-xs font-bold tracking-[1.5px] text-body">
            MEMUAT
          </p>
          <motion.span
            className="flex gap-0.5"
            aria-hidden="true"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1 h-1 rounded-full bg-body"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.span>
        </div>

        <div className="w-32 h-px bg-hairline relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 w-1/3 bg-on-dark"
            animate={{ x: ["-100%", "300%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}