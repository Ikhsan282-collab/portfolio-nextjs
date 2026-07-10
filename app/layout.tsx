import { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
// import font, komponen lain yang sudah ada sebelumnya...

const SITE_URL = "https://muhammad-nur-ikhsan-swart.vercel.app";

export const metadata: Metadata = {
  // ...tetap sama, tidak berubah
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}