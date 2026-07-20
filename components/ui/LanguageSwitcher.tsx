"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Ganti bahasa / Switch language"
      className="flex items-center gap-1 text-xs font-bold tracking-[1.5px] border border-hairline px-3 py-2 transition-colors duration-300 hover:border-m-blue-dark"
    >
      <span className={language === "id" ? "text-on-dark" : "text-body/40"}>ID</span>
      <span className="text-body/40">/</span>
      <span className={language === "en" ? "text-on-dark" : "text-body/40"}>EN</span>
    </button>
  );
}
