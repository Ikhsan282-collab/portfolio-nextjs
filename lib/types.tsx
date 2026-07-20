export interface Project {
  slug: string;
  title: { id: string; en: string };
  description: { id: string; en: string };
  features: { id: string[]; en: string[] };
  techStack: string[];
  role: { id: string; en: string };
  challenges: { id: string; en: string };
  solutions: { id: string; en: string };
  thumbnail?: string; // opsional - kalau belum ada, tampilkan placeholder
  screenshots: string[];
  githubUrl?: string;
  liveUrl?: string;
}