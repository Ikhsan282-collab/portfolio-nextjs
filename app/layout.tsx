import { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { GalaxyLoader } from "@/components/ui/GalaxyLoader";

const SITE_URL = "https://muhammad-nur-ikhsan-swart.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Muhammad Nur Ikhsan â€” Web Developer",
    template: "%s | Muhammad Nur Ikhsan",
  },
  description:
    "Portofolio Muhammad Nur Ikhsan, Web Developer yang membangun aplikasi web skalabel, landing page responsif, REST API, dan sistem manajemen bisnis menggunakan Laravel, PHP, MySQL, React, dan Next.js.",
  keywords: [
    "Muhammad Nur Ikhsan",
    "Web Developer",
    "Web Developer Indonesia",
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "PHP Developer",
  ],
  authors: [{ name: "Muhammad Nur Ikhsan", url: SITE_URL }],
  creator: "Muhammad Nur Ikhsan",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Muhammad Nur Ikhsan Portfolio",
    title: "Muhammad Nur Ikhsan â€” Web Developer",
    description:
      "Membangun aplikasi web skalabel, landing page responsif, REST API, dan sistem manajemen bisnis dengan Laravel, PHP, MySQL, React, dan Next.js.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <LanguageProvider>
          <GalaxyLoader />
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
