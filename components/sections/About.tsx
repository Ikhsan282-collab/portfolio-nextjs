"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, Globe, Palette } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { CV_PATH, CV_FILENAME } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const HIGHLIGHT_ICONS = [GraduationCap, Briefcase, Globe, Palette];
const HIGHLIGHT_KEYS = ["education", "work", "web", "design"] as const;

export function About() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="about" className="bg-canvas py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <Reveal direction="left">
          <TiltCard
            className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0 border border-hairline overflow-hidden"
            maxTilt={6}
          >
            <Image
              src="/images/headshot.jpeg"
              alt="Muhammad Nur Ikhsan"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 384px"
              priority
            />
          </TiltCard>
        </Reveal>

        <Reveal direction="right">
          <div>
            <p className="text-sm font-bold tracking-[1.5px] text-m-blue-text mb-4">
              {t.about.label}
            </p>
            <h2 className="text-4xl md:text-5xl mb-6">
              <TextReveal text={t.about.heading} delay={0.15} immediate />
            </h2>

            <p className="text-body font-light leading-relaxed mb-10">
              {t.about.description}
            </p>

            <ul className="space-y-2 mb-10">
              {HIGHLIGHT_KEYS.map((key, index) => {
                const isOpen = activeIndex === index;
                const Icon = HIGHLIGHT_ICONS[index];
                const item = t.about.highlights[key];
                return (
                  <li key={key} className="border-b border-hairline last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center gap-3 py-3 text-left transition-transform duration-300 hover:translate-x-1"
                    >
                      <Icon
                        className="w-4 h-4 text-m-blue-text shrink-0"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <span className="text-sm font-bold tracking-[0.5px] flex-1">
                        {item.text}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-m-blue-text text-xs"
                        aria-hidden="true"
                      >
                        ↓
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pb-4 pl-7 text-sm font-light text-body/80 leading-relaxed">
                            {item.detail}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>

            
            <a  href={CV_PATH}
              download={CV_FILENAME}
              className="inline-block border border-on-dark px-8 py-4 text-sm font-bold tracking-[1.5px] transition-all duration-300 hover:bg-on-dark hover:text-canvas hover:scale-[1.02]"
            >
              {t.about.downloadCV}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

