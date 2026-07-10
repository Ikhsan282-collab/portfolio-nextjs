import { Metadata } from "next";
import "./globals.css";
// import font, komponen lain yang sudah ada sebelumnya...

const SITE_URL = "https://muhammad-nur-ikhsan-swart.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Muhammad Nur Ikhsan — Full Stack Developer",
    template: "%s | Muhammad Nur Ikhsan",
  },
  description:
    "Portofolio Muhammad Nur Ikhsan, Full Stack Developer yang membangun aplikasi web skalabel, landing page responsif, REST API, dan sistem manajemen bisnis menggunakan Laravel, PHP, MySQL, React, dan Next.js.",
  keywords: [
    "Muhammad Nur Ikhsan",
    "Full Stack Developer",
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
    title: "Muhammad Nur Ikhsan — Full Stack Developer",
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

// INI BAGIAN YANG KEMUNGKINAN HILANG — komponen default export wajib ada
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}