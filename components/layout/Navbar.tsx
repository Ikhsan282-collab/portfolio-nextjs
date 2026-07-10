"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
// hapus definisi `const navLinks = [...]` yang lama,
// lalu ganti semua pemakaian `navLinks` → `NAV_LINKS` di file itu

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Border bawah muncul setelah scroll sedikit — sinyal visual halus
  // bahwa nav sedang "mengambang" di atas konten, bukan animasi berat.
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cegah scroll body saat menu mobile terbuka
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
        
        <a  href="#"
          className="text-sm font-bold tracking-[1.5px] text-on-dark"
        >
          M. NUR IKHSAN
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              
              <a  href={link.href}
                className="text-sm font-light text-body tracking-[0.5px] transition-colors hover:text-on-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Buka menu navigasi"
          aria-expanded={isOpen}
          className="md:hidden text-on-dark"
        >
          <Menu className="w-6 h-6" strokeWidth={1.5} />
        </button>
      </nav>

      {/* Mobile fullscreen overlay */}
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
              {navLinks.map((link, index) => (
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
                    {link.label}
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