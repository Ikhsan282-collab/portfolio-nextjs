"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/types";
import { ProjectThumbnail } from "./ProjectThumbnail";
import Image from "next/image";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="bg-canvas border border-hairline max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >

          <div className="relative -mx-8 -mt-8 mb-6 border-b border-hairline overflow-hidden bg-surface-card">
            <Image
              src={project.thumbnail ?? ""}
              alt={project.title}
              width={1200}
              height={0}
              style={{ width: "100%", height: "auto" }}
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-contain"
            />
          </div>
            <div className="flex justify-between items-start mb-6">
              <h3 id="project-modal-title" className="text-2xl font-bold">
                {project.title}
              </h3>
              <button
                onClick={onClose}
                aria-label="Tutup detail project"
                className="text-sm font-bold tracking-[1.5px] transition-colors hover:text-m-blue-text"
              >
                TUTUP ✕
              </button>
            </div>

            <p className="text-body font-light leading-relaxed mb-8">
              {project.description}
            </p>

            {project.features.length > 0 && (
              <div className="mb-8">
                <h4 className="text-xs font-bold tracking-[1.5px] text-m-blue-text mb-3">
                  FITUR
                </h4>
                <ul className="list-disc list-inside space-y-1 text-body font-light">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-8">
              <h4 className="text-xs font-bold tracking-[1.5px] text-m-blue-text mb-3">
                TECH STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-bold tracking-[0.5px] border border-hairline px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-bold tracking-[1.5px] text-m-blue-text mb-3">
                PERAN SAYA
              </h4>
              <p className="text-body font-light">{project.role}</p>
            </div>

            {project.challenges && (
              <div className="mb-8">
                <h4 className="text-xs font-bold tracking-[1.5px] text-m-blue-text mb-3">
                  TANTANGAN & SOLUSI
                </h4>
                <p className="text-body font-light mb-2">{project.challenges}</p>
                <p className="text-body font-light">{project.solutions}</p>
              </div>
            )}

            {(project.githubUrl || project.liveUrl) && (
              <div className="flex gap-4 pt-4 border-t border-hairline">
                {project.githubUrl && (
                  
                  <a  href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-on-dark px-6 py-3 text-sm font-bold tracking-[1.5px] transition-all duration-300 hover:bg-on-dark hover:text-canvas hover:scale-[1.02]"
                  >
                    GITHUB
                  </a>
                )}
                {project.liveUrl && (
                  
                   <a href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-on-dark px-6 py-3 text-sm font-bold tracking-[1.5px] transition-all duration-300 hover:bg-on-dark hover:text-canvas hover:scale-[1.02]"
                  >
                    LIVE DEMO
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}