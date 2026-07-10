export interface ExperienceRole {
  title: string;
  period: string;
  description: string[];
}

export interface Experience {
  company: string;
  roles: ExperienceRole[];
}

export const experience: Experience = {
  company: "PT Dcistem Cyber Internasional",
  roles: [
    {
      title: "Freelance Web Developer",
      period: "2024",
      description: [
        "Membangun Company Profile Website untuk kebutuhan promosi perusahaan.",
      ],
    },
    {
      title: "Network & Web Support Intern",
      period: "Pertengahan 2025 — Dijeda (Sedang Skripsi)",
      description: [
        "Mempelajari dasar-dasar jaringan komputer dan konfigurasi Mikrotik.",
        "Membantu proses penyambungan internet dari server ke pelanggan.",
      ],
    },
  ],
};