"use client";

import { useState } from "react";
import { projects } from "@/lib/data/projects";
import { Project } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="bg-canvas py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-bold tracking-[1.5px] text-m-blue-text mb-4">
            {t.projects.label}
          </p>
          <h2 className="text-4xl md:text-5xl mb-16">
            <TextReveal text={t.projects.heading} delay={0.1} immediate />
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onSelect={setSelectedProject}
              delay={index * 0.1}
              index={index}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
