export interface Education {
  institution: string;
  degree: { id: string; en: string };
  period: { id: string; en: string };
  status: { id: string; en: string };
}

export const education: Education = {
  institution: "STMIK Mardira Indonesia",
  degree: {
    id: "S1 Teknik Informatika",
    en: "Bachelor's Degree in Informatics Engineering",
  },
  period: {
    id: "Perkiraan Lulus 2026",
    en: "Expected Graduation 2026",
  },
  status: {
    id: "Sedang menyelesaikan tugas akhir (skripsi)",
    en: "Currently completing final thesis",
  },
};