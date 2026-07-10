"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/lib/data/skills";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { TextReveal } from "@/components/motion/TextReveal";

export function Skills() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="skills" className="bg-canvas py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-bold tracking-[1.5px] text-m-blue-text mb-4">
            WHAT I WORK WITH
          </p>
          <h2 className="text-4xl md:text-5xl mb-16">
            <TextReveal text="SKILLS" delay={0.1} />
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isOpen = expanded === category.title;

            return (
              <Reveal key={category.title} delay={index * 0.1}>
                <TiltCard className="relative bg-gradient-to-br from-surface-card to-surface-card/60 backdrop-blur-sm border border-hairline transition-all duration-300 hover:border-m-blue-dark hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : category.title)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-m-blue-dark/10 flex items-center justify-center">
                          <Icon
                            className="w-5 h-5 text-m-blue-text"
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                        </div>
                        <h3 className="text-sm font-bold tracking-[1.5px]">
                          {category.title.toUpperCase()}
                        </h3>
                      </div>
                      <span className="text-xs font-bold text-body/40 tabular-nums">
                        {String(category.skills.length).padStart(2, "0")}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {category.skills.map((skill) => {
                        const SkillIcon = skill.icon;
                        return (
                          <li
                            key={skill.name}
                            className="flex items-center gap-2.5 text-body font-light text-sm transition-transform duration-300 hover:translate-x-1"
                          >
                            <SkillIcon
                              className="w-4 h-4 text-m-blue-text/70 shrink-0"
                              aria-hidden="true"
                            />
                            {skill.name}
                          </li>
                        );
                      })}
                    </ul>

                    {/* Indikator kecil supaya user tahu card ini bisa diklik */}
                    <span className="mt-4 flex items-center gap-1 text-xs font-bold tracking-[1px] text-m-blue-text/70">
                      {isOpen ? "TUTUP" : "DETAIL"}
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        â†“
                      </motion.span>
                    </span>
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
                        <p className="px-6 pb-6 text-sm font-light text-body/80 leading-relaxed border-t border-hairline pt-4">
                          {category.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}