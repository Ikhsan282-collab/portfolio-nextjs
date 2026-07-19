import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
  slug: "dcistem-company-profile",
  title: "Company Profile Website — PT Dcistem Cyber Internasional",
  description:
    "Website profil perusahaan untuk PT Dcistem Cyber Internasional, menampilkan informasi perusahaan, layanan, serta produk unggulan mereka (Arcomnet) kepada calon klien.",
  features: [
    "Halaman profil perusahaan (visi, misi, tentang kami)",
    "Halaman layanan/produk, termasuk promosi Arcomnet sebagai layanan WiFi unggulan",
    "Formulir kontak/inquiry untuk calon klien",
    "Galeri atau highlight portofolio/klien",
  ],
  techStack: ["HTML", "CSS", "JavaScript", "PHP"],
  role: "Freelance Developer — membangun tampilan dan struktur halaman sesuai kebutuhan klien, termasuk menyusun narasi promosi produk Arcomnet.",
  challenges:
    "Menerjemahkan identitas PT Dcistem sebagai perusahaan teknologi/ISP ke dalam desain yang terasa profesional dan terpercaya, sekaligus memastikan produk Arcomnet ditampilkan menarik tanpa membuat halaman terasa seperti dua situs yang terpisah.",
  solutions:
    "Menyusun struktur halaman yang jelas (profil perusahaan → layanan → produk Arcomnet → kontak) dengan konsistensi visual di seluruh section, sehingga pengunjung memahami hubungan antara PT Dcistem dan Arcomnet secara alami.",
  thumbnail: "/images/projects/dcistem-thumb.png",
  screenshots: [],
  githubUrl: "https://github.com/Ikhsan282-collab/arcomnet-wifi-admin",
  liveUrl: undefined,
},
 {
  slug: "jaspindo-movers-landing",
  title: "Landing Page — Jaspindo Movers",
  description:
    "Landing page untuk Jaspindo Movers, perusahaan jasa pindahan dan logistik, dirancang untuk membangun kepercayaan calon pelanggan dan mendorong konsultasi langsung via WhatsApp.",
  features: [
    "Hero section dengan statistik kepercayaan (jumlah pelanggan, proyek, pekerja)",
    "Halaman detail layanan: Jasa Pindahan, Jasa Pengiriman, Jasa Penyimpanan",
    "Section testimoni pelanggan",
    "Section FAQ untuk menjawab pertanyaan umum calon klien",
    "Tombol konsultasi & estimasi biaya yang terhubung langsung ke WhatsApp (dengan template pesan otomatis)",
    "Tautan ke Instagram dan email bisnis",
    "Halaman kontak terpisah (Contact.php)",
  ],
  techStack: ["PHP", "CSS", "JavaScript"],
  role: "Freelance Developer",
  challenges:
    "Merancang landing page yang membangun kepercayaan (trust) untuk bisnis jasa fisik seperti pindahan — tanpa database, semua interaksi (konsultasi, estimasi biaya, kontak) harus mengarah langsung ke channel eksternal (WhatsApp, Instagram, Email) dengan pengalaman yang tetap terasa mulus dan terarah.",
  solutions:
    "Menyusun setiap CTA dengan link WhatsApp yang sudah berisi template pesan sesuai konteks (misalnya form estimasi otomatis mengisi jenis layanan, lokasi, dan volume barang), sehingga pengunjung tidak perlu mengetik ulang dan proses follow-up bisnis jadi lebih cepat — solusi stateless tanpa perlu backend penyimpanan data.",
  thumbnail: "/images/projects/jaspindo-thumb.png",
  screenshots: [],
  githubUrl: "https://github.com/Ikhsan282-collab/jaspindo-movers-landing",
  liveUrl: "https://jaspindomovers.site/",
},
  {
  slug: "daily-konveksi-admin",
  title: "Sistem Administrasi — Daily Konveksi",
  description:
    "Sistem administrasi untuk mengelola operasional bisnis konveksi (Daily Konveksi), dikembangkan sebagai project kuliah.",
  features: [
    "Input dan manajemen data pesanan/pelanggan melalui panel admin",
    "Tracking status pesanan secara bertahap (dari input hingga selesai)",
    "Pencatatan data operasional bisnis konveksi",
  ],
  techStack: ["Laravel", "PHP", "MySQL"],
  role: "Developer (Project Kuliah)",
  challenges:
    "Merancang query database untuk merepresentasikan alur status pesanan secara akurat, sambil menjaga relasi antar data (pesanan, pelanggan, operasional) tetap konsisten dan mudah ditelusuri — mirip tantangan yang dihadapi di project Arcomnet.",
  solutions:
    "Memanfaatkan bantuan AI sebagai sparring partner untuk merancang struktur query dan relasi database yang lebih efisien, sehingga alur status pesanan bisa di-tracking dengan jelas tanpa duplikasi logika.",
  thumbnail: "/images/projects/daily-konveksi-thumb.png",
  screenshots: [],
  githubUrl: "https://github.com/Ikhsan282-collab/daily-konveksi-admin",
  liveUrl: undefined,
},
  {
  slug: "arcomnet-wifi-admin",
  title: "Sistem Administrasi WiFi — Arcomnet",
  description:
    "Sistem administrasi untuk mengelola layanan WiFi Arcomnet, dikembangkan sebagai project kuliah.",
  features: [
    "Pendaftaran pelanggan baru melalui panel admin",
    "Manajemen data pelanggan (input, update, tracking status)",
    "Alur pemasangan: admin mengubah status ke 'pending pemasangan', teknisi menerima notifikasi pemasangan baru",
    "Teknisi memperbarui status setelah pemasangan selesai",
    "Pencatatan pembayaran (manual, belum terintegrasi payment gateway)",
  ],
  techStack: ["Laravel", "PHP", "MySQL"],
  role: "Developer (Project Kuliah)",
  challenges:
    "Query database menjadi cukup kompleks karena harus merepresentasikan alur status pemasangan secara akurat — dari pendaftaran, pending pemasangan, hingga selesai — sambil tetap menjaga relasi data pelanggan, teknisi, dan pembayaran tetap konsisten dan mudah ditelusuri.",
  solutions:
    "Memanfaatkan bantuan AI sebagai sparring partner untuk merancang ulang struktur query dan relasi database yang lebih efisien, sehingga alur status pemasangan bisa di-tracking dengan jelas tanpa duplikasi logika di banyak tempat.",
  thumbnail: "/images/projects/arcomnet-thumb.png",
  screenshots: [],
  githubUrl: "https://github.com/Ikhsan282-collab/manajemen-arcomnet",
  liveUrl: undefined,
},
 {
  slug: "sistem-informasi-kos",
  title: "Sistem Informasi Kos",
  description:
    "Aplikasi desktop untuk manajemen data kos (kamar, penyewa, pembayaran), dibangun dengan Java Swing murni (tanpa GUI Builder) sebagai project kuliah.",
  features: [
    "Manajemen data kamar kos (ketersediaan, tipe, harga)",
    "Manajemen data penyewa/penghuni",
    "Pencatatan dan tracking pembayaran sewa",
    "Koneksi ke database untuk penyimpanan data secara terstruktur",
  ],
  techStack: ["Java", "Java Swing", "JDBC", "MySQL"],
  role: "Developer (Project Kuliah)",
  challenges:
    "Membangun antarmuka Java Swing secara manual (coding langsung, tanpa bantuan GUI Builder seperti NetBeans), sehingga penataan layout dan komponen harus dilakukan lebih presisi. Tantangan lain ada pada koneksi API/database (JDBC) — memastikan query CRUD berjalan benar dan data ter-sinkronisasi dengan tampilan Swing secara real-time.",
  solutions:
    "Mempelajari dan menerapkan layout manager Java Swing (seperti GridLayout/BorderLayout) secara manual untuk menyusun antarmuka tanpa GUI Builder, serta merancang koneksi JDBC yang stabil antara aplikasi desktop dan database MySQL untuk operasi data yang konsisten.",
  thumbnail: "/images/projects/sistem-kos-thumb.png",
  screenshots: [],
  githubUrl: "https://github.com/Ikhsan282-collab/sistem-informasi-kos",
  liveUrl: undefined,
},
  {
  slug: "smart-boarding-house-management-system",
  title: "Smart Boarding House Management System (SBHMS)",
  description:
    "Sistem manajemen kost berbasis web dan mobile yang mencakup manajemen kamar, booking online, pembayaran, komplain, hingga laporan keuangan — dibangun ulang dari aplikasi desktop lama (Java Swing) menjadi arsitektur client-server modern.",
  features: [
    "Autentikasi & manajemen role (Admin, Manajer Kost, Penyewa)",
    "Manajemen kost & kamar, termasuk upload foto",
    "Booking online dengan approval admin",
    "Pembayaran dengan upload bukti transfer & verifikasi admin",
    "Modul komplain dengan tracking status",
    "Laporan keuangan (pendapatan, pengeluaran, laba rugi) dengan export PDF/Excel",
    "Notifikasi WhatsApp untuk booking, pembayaran, dan komplain",
    "Chat real-time dengan typing indicator & read receipt",
  ],
  techStack: ["Java Spring Boot", "React", "TypeScript", "Flutter", "MySQL", "JWT"],
  role: "Full Stack Developer (Solo Project) — merancang dan membangun backend REST API, frontend web, dan aplikasi mobile dari nol.",
  challenges:
    "Migrasi sistem lama dari aplikasi desktop Java Swing menjadi arsitektur client-server modern yang mendukung banyak pengguna secara bersamaan, sekaligus menjaga konsistensi bisnis proses lama sambil merancang ulang struktur database dan REST API agar scalable dan mudah dikembangkan lebih lanjut.",
  solutions:
    "Menerapkan Clean Architecture di backend Spring Boot dengan pemisahan Service Layer yang jelas, membangun REST API yang konsisten untuk dikonsumsi oleh frontend web (React) maupun aplikasi mobile (Flutter), serta mengintegrasikan notifikasi WhatsApp pihak ketiga untuk meningkatkan pengalaman pengguna.",
  thumbnail: "/images/projects/sbms-thumb.png",
  screenshots: [],
  githubUrl: "https://github.com/Ikhsan282-collab/Smart_Boarding_House_Management_System",
  liveUrl: undefined,
},
];