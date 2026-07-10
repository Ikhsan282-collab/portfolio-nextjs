import { Project } from "@/lib/types";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { ProjectThumbnail } from "./ProjectThumbnail";

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
  delay?: number;
};

export function ProjectCard({ project, onSelect, delay = 0 }: ProjectCardProps) {
  return (
    <Reveal delay={delay}>
      <TiltCard className="overflow-hidden">
        <button
          onClick={() => onSelect(project)}
          className="w-full text-left border border-hairline transition-colors duration-300 hover:border-m-blue-dark group"
        >
          <ProjectThumbnail
            src={project.thumbnail}
            alt={project.title}
            className="aspect-video mb-4 border-b border-hairline overflow-hidden"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          <div className="p-6 pt-0">
            <h3 className="text-lg font-bold mb-2 group-hover:text-m-blue-text transition-colors">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-bold tracking-[0.5px] text-body"
                >
                  {tech}
                </span>
              ))}
            </div>

            <span className="text-xs font-bold tracking-[1.5px] text-m-blue-text inline-flex items-center gap-1">
              LIHAT DETAIL
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </button>
      </TiltCard>
    </Reveal>
  );
}