export interface Project {
  slug: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  role: string;
  challenges: string;
  solutions: string;
  thumbnail?: string; // opsional — kalau belum ada, tampilkan placeholder
  screenshots: string[];
  githubUrl?: string;
  liveUrl?: string;
}