import { LucideIcon, Server, Code2, Database, Wrench, Network } from "lucide-react";
import {
  SiLaravel,
  SiPhp,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiMysql,
  SiGit,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: LucideIcon | IconType;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    icon: Server,
    description: "Membangun logika server, API, dan integrasi sistem yang scalable.",
    skills: [
      { name: "Laravel", icon: SiLaravel },
      { name: "PHP", icon: SiPhp },
      { name: "REST API", icon: Network },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    description: "Menerjemahkan desain jadi antarmuka yang responsif dan interaktif.",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Merancang skema data yang efisien dan mudah dipelihara.",
    skills: [{ name: "MySQL", icon: SiMysql }],
  },
  {
    title: "Tools",
    icon: Wrench,
    description: "Workflow development sehari-hari, dari version control hingga editor.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "VS Code", icon: VscVscode },
    ],
  },
];