"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

const NAV_KEYS = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "education", href: "#education" },
  { key: "contact", href: "#contact" },
] as const;

export function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function handleLinkClick() {
    setIsOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 bg-canvas transition-colors duration-300 ${
        isScrolled ? "border-b border-hairline" : "border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto h-full px-6 flex items-center justify-between">
        <a href="#" className="text-sm font-bold tracking-[1.5px] text-on-dark">
          M. NUR IKHSAN
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_KEYS.map((link) => (
              <li key={link.href}>
                
                 <a href={link.href}
                  className="text-sm font-light text-body tracking-[0.5px] transition-colors hover:text-on-dark"
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Buka menu navigasi"
            aria-expanded={isOpen}
            className="text-on-dark"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-canvas md:hidden"
          >
            <div className="m-stripe-divider w-full" />

            <div className="flex justify-between items-center px-6 h-16">
              <span className="text-sm font-bold tracking-[1.5px] text-on-dark">
                M. NUR IKHSAN
              </span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Tutup menu navigasi"
                className="text-on-dark"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            <ul className="flex flex-col items-center justify-center gap-8 flex-1 h-[calc(100%-64px)]">
              {NAV_KEYS.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + index * 0.05 }}
                >
                  
                  <a  href={link.href}
                    onClick={handleLinkClick}
                    className="text-2xl font-bold tracking-[1px] text-on-dark uppercase"
                  >
                    {t.nav[link.key]}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}