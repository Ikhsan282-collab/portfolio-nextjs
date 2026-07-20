"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Language, translations } from "./translations";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  t: (typeof translations)[Language];
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "portfolio-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");

  // Baca preferensi bahasa yang tersimpan saat pertama kali load,
  // supaya pilihan user tidak reset tiap kali membuka halaman ulang.
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored === "id" || stored === "en") {
      setLanguage(stored);
    }
  }, []);

  function toggleLanguage() {
    setLanguage((prev) => {
      const next = prev === "id" ? "en" : "id";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
