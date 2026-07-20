export interface ExperienceRole {
  title: { id: string; en: string };
  period: { id: string; en: string };
  description: { id: string[]; en: string[] };
}

export interface Experience {
  company: string;
  roles: ExperienceRole[];
}

export const experience: Experience = {
  company: "PT Dcistem Cyber Internasional",
  roles: [
    {
      title: {
        id: "Freelance Web Developer",
        en: "Freelance Web Developer",
      },
      period: {
        id: "2024",
        en: "2024",
      },
      description: {
        id: [
          "Membangun Company Profile Website untuk kebutuhan promosi perusahaan.",
        ],
        en: [
          "Built a Company Profile Website for the company's promotional needs.",
        ],
      },
    },
    {
      title: {
        id: "Network & Web Support Intern",
        en: "Network & Web Support Intern",
      },
      period: {
        id: "Pertengahan 2025 - Dijeda (Sedang Skripsi)",
        en: "Mid 2025 - Paused (Working on Thesis)",
      },
      description: {
        id: [
          "Mempelajari dasar-dasar jaringan komputer dan konfigurasi Mikrotik.",
          "Membantu proses penyambungan internet dari server ke pelanggan.",
        ],
        en: [
          "Learned the fundamentals of computer networking and Mikrotik configuration.",
          "Assisted with connecting internet service from the server to customers.",
        ],
      },
    },
  ],
};