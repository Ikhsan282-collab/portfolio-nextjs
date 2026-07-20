"use client";

import { Mail, Briefcase } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from "@/components/icons/BrandIcons";
import type { ComponentType, SVGProps } from "react";
import { socials } from "@/lib/data/socials";
import { Reveal } from "@/components/motion/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Email: Mail,
  Fastwork: Briefcase,
  Jobstreet: Briefcase,
};

const FOOTER_NAV_KEYS = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "education", href: "#education" },
  { key: "contact", href: "#contact" },
] as const;

export function Footer() {
  const { t } = useLanguage();
  // Filter social yang url-nya masih kosong (misal Instagram yang belum diisi)
  // supaya tidak render <a href=""> yang jadi broken link.
  const activeSocials = socials.filter((social) => social.url.trim() !== "");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-canvas border-t border-hairline px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
        <Reveal>
          <div>
            <p className="text-sm font-bold tracking-[1.5px] text-on-dark mb-4">
              M. NUR IKHSAN
            </p>
            <p className="text-body font-light text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <p className="text-xs font-bold tracking-[1.5px] text-m-blue-text mb-4">
              {t.footer.navTitle}
            </p>
            <ul className="space-y-3">
              {FOOTER_NAV_KEYS.map((link) => (
                <li key={link.href}>
                  
                  <a  href={link.href}
                    className="relative inline-block text-body font-light text-sm transition-colors hover:text-on-dark group/navlink"
                  >
                    {t.nav[link.key]}
                    <span
                      className="absolute left-0 -bottom-0.5 h-px w-full bg-on-dark origin-left scale-x-0 group-hover/navlink:scale-x-100 transition-transform duration-300 ease-out"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div>
            <p className="text-xs font-bold tracking-[1.5px] text-m-blue-text mb-4">
              {t.footer.connectTitle}
            </p>
            <ul className="space-y-3">
              {activeSocials.map((social) => {
                const Icon = iconMap[social.label] ?? Briefcase;
                return (
                  <li key={social.label}>
                    
                    <a  href={social.url}
                      target={social.type === "link" ? "_blank" : undefined}
                      rel={social.type === "link" ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 text-body font-light text-sm transition-colors hover:text-on-dark group/social"
                    >
                      <span className="flex items-center justify-center w-7 h-7 border border-hairline transition-all duration-300 group-hover/social:border-m-blue-dark group-hover/social:-translate-y-0.5">
                        <Icon
                          className="w-3.5 h-3.5 transition-colors group-hover/social:text-m-blue-text"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </span>
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.25}>
        <div className="m-stripe-divider max-w-6xl mx-auto mb-8" />

        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted font-light tracking-[0.5px]">
          <p>{String.fromCharCode(169)} {currentYear} Muhammad Nur Ikhsan. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </Reveal>
    </footer>
  );
}