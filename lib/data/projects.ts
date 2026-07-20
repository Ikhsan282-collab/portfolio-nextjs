import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "dcistem-company-profile",
    title: {
      id: "Company Profile Website - PT Dcistem Cyber Internasional",
      en: "Company Profile Website - PT Dcistem Cyber Internasional",
    },
    description: {
      id: "Website profil perusahaan untuk PT Dcistem Cyber Internasional, menampilkan informasi perusahaan, layanan, serta produk unggulan mereka (Arcomnet) kepada calon klien.",
      en: "Company profile website for PT Dcistem Cyber Internasional, showcasing the company's information, services, and flagship product (Arcomnet) to prospective clients.",
    },
    features: {
      id: [
        "Halaman profil perusahaan (visi, misi, tentang kami)",
        "Halaman layanan/produk, termasuk promosi Arcomnet sebagai layanan WiFi unggulan",
        "Formulir kontak/inquiry untuk calon klien",
        "Galeri atau highlight portofolio/klien",
      ],
      en: [
        "Company profile page (vision, mission, about us)",
        "Services/products page, including promotion of Arcomnet as the flagship WiFi service",
        "Contact/inquiry form for prospective clients",
        "Portfolio/client gallery and highlights",
      ],
    },
    techStack: ["HTML", "CSS", "JavaScript", "PHP"],
    role: {
      id: "Freelance Developer - membangun tampilan dan struktur halaman sesuai kebutuhan klien, termasuk menyusun narasi promosi produk Arcomnet.",
      en: "Freelance Developer - built the page layout and structure according to client requirements, including crafting the promotional narrative for the Arcomnet product.",
    },
    challenges: {
      id: "Menerjemahkan identitas PT Dcistem sebagai perusahaan teknologi/ISP ke dalam desain yang terasa profesional dan terpercaya, sekaligus memastikan produk Arcomnet ditampilkan menarik tanpa membuat halaman terasa seperti dua situs yang terpisah.",
      en: "Translating PT Dcistem's identity as a technology/ISP company into a design that feels professional and trustworthy, while ensuring the Arcomnet product stood out without making the page feel like two disconnected websites.",
    },
    solutions: {
      id: "Menyusun struktur halaman yang jelas (profil perusahaan -> layanan -> produk Arcomnet -> kontak) dengan konsistensi visual di seluruh section, sehingga pengunjung memahami hubungan antara PT Dcistem dan Arcomnet secara alami.",
      en: "Structured the page flow clearly (company profile -> services -> Arcomnet product -> contact) with consistent visuals across every section, so visitors naturally understand the relationship between PT Dcistem and Arcomnet.",
    },
    thumbnail: "/images/projects/dcistem-thumb.png",
    screenshots: [],
    githubUrl: "https://github.com/Ikhsan282-collab/arcomnet-wifi-admin",
    liveUrl: undefined,
  },
  {
    slug: "jaspindo-movers-landing",
    title: {
      id: "Landing Page - Jaspindo Movers",
      en: "Landing Page - Jaspindo Movers",
    },
    description: {
      id: "Landing page untuk Jaspindo Movers, perusahaan jasa pindahan dan logistik, dirancang untuk membangun kepercayaan calon pelanggan dan mendorong konsultasi langsung via WhatsApp.",
      en: "A landing page for Jaspindo Movers, a moving and logistics company, designed to build trust with prospective customers and drive direct consultations via WhatsApp.",
    },
    features: {
      id: [
        "Hero section dengan statistik kepercayaan (jumlah pelanggan, proyek, pekerja)",
        "Halaman detail layanan: Jasa Pindahan, Jasa Pengiriman, Jasa Penyimpanan",
        "Section testimoni pelanggan",
        "Section FAQ untuk menjawab pertanyaan umum calon klien",
        "Tombol konsultasi & estimasi biaya yang terhubung langsung ke WhatsApp (dengan template pesan otomatis)",
        "Tautan ke Instagram dan email bisnis",
        "Halaman kontak terpisah (Contact.php)",
      ],
      en: [
        "Hero section with trust-building statistics (number of customers, projects, and workers)",
        "Detailed service pages: Moving Service, Shipping Service, Storage Service",
        "Customer testimonials section",
        "FAQ section addressing common questions from prospective clients",
        "Consultation & cost estimate buttons linked directly to WhatsApp (with auto-filled message templates)",
        "Links to Instagram and business email",
        "Separate contact page (Contact.php)",
      ],
    },
    techStack: ["PHP", "CSS", "JavaScript"],
    role: {
      id: "Freelance Developer",
      en: "Freelance Developer",
    },
    challenges: {
      id: "Merancang landing page yang membangun kepercayaan (trust) untuk bisnis jasa fisik seperti pindahan - tanpa database, semua interaksi (konsultasi, estimasi biaya, kontak) harus mengarah langsung ke channel eksternal (WhatsApp, Instagram, Email) dengan pengalaman yang tetap terasa mulus dan terarah.",
      en: "Designing a landing page that builds trust for a physical service business like moving - with no database, every interaction (consultation, cost estimate, contact) had to route directly to external channels (WhatsApp, Instagram, Email) while keeping the experience smooth and purposeful.",
    },
    solutions: {
      id: "Menyusun setiap CTA dengan link WhatsApp yang sudah berisi template pesan sesuai konteks (misalnya form estimasi otomatis mengisi jenis layanan, lokasi, dan volume barang), sehingga pengunjung tidak perlu mengetik ulang dan proses follow-up bisnis jadi lebih cepat - solusi stateless tanpa perlu backend penyimpanan data.",
      en: "Built every CTA with a WhatsApp link that already includes a context-aware message template (for example, the estimate form auto-fills the service type, location, and item volume), so visitors don't need to retype anything and business follow-up becomes faster - a stateless solution with no backend data storage required.",
    },
    thumbnail: "/images/projects/jaspindo-thumb.png",
    screenshots: [],
    githubUrl: "https://github.com/Ikhsan282-collab/jaspindo-movers-landing",
    liveUrl: "https://jaspindomovers.site/",
  },
  {
    slug: "daily-konveksi-admin",
    title: {
      id: "Sistem Administrasi - Daily Konveksi",
      en: "Admin System - Daily Konveksi",
    },
    description: {
      id: "Sistem administrasi untuk mengelola operasional bisnis konveksi (Daily Konveksi), dikembangkan sebagai project kuliah.",
      en: "An administration system for managing the operations of a garment/convection business (Daily Konveksi), developed as a university project.",
    },
    features: {
      id: [
        "Input dan manajemen data pesanan/pelanggan melalui panel admin",
        "Tracking status pesanan secara bertahap (dari input hingga selesai)",
        "Pencatatan data operasional bisnis konveksi",
      ],
      en: [
        "Order/customer data input and management via admin panel",
        "Step-by-step order status tracking (from input to completion)",
        "Recording of convection business operational data",
      ],
    },
    techStack: ["Laravel", "PHP", "MySQL"],
    role: {
      id: "Developer (Project Kuliah)",
      en: "Developer (University Project)",
    },
    challenges: {
      id: "Merancang query database untuk merepresentasikan alur status pesanan secara akurat, sambil menjaga relasi antar data (pesanan, pelanggan, operasional) tetap konsisten dan mudah ditelusuri - mirip tantangan yang dihadapi di project Arcomnet.",
      en: "Designing database queries to accurately represent the order status flow, while keeping relationships between data (orders, customers, operations) consistent and easy to trace - similar to the challenges faced in the Arcomnet project.",
    },
    solutions: {
      id: "Memanfaatkan bantuan AI sebagai sparring partner untuk merancang struktur query dan relasi database yang lebih efisien, sehingga alur status pesanan bisa di-tracking dengan jelas tanpa duplikasi logika.",
      en: "Used AI as a sparring partner to design a more efficient query structure and database relationships, so the order status flow could be tracked clearly without duplicating logic.",
    },
    thumbnail: "/images/projects/daily-konveksi-thumb.png",
    screenshots: [],
    githubUrl: "https://github.com/Ikhsan282-collab/daily-konveksi-admin",
    liveUrl: undefined,
  },
  {
    slug: "arcomnet-wifi-admin",
    title: {
      id: "Sistem Administrasi WiFi - Arcomnet",
      en: "WiFi Administration System - Arcomnet",
    },
    description: {
      id: "Sistem administrasi untuk mengelola layanan WiFi Arcomnet, dikembangkan sebagai project kuliah.",
      en: "An administration system for managing Arcomnet's WiFi service, developed as a university project.",
    },
    features: {
      id: [
        "Pendaftaran pelanggan baru melalui panel admin",
        "Manajemen data pelanggan (input, update, tracking status)",
        "Alur pemasangan: admin mengubah status ke 'pending pemasangan', teknisi menerima notifikasi pemasangan baru",
        "Teknisi memperbarui status setelah pemasangan selesai",
        "Pencatatan pembayaran (manual, belum terintegrasi payment gateway)",
      ],
      en: [
        "New customer registration via admin panel",
        "Customer data management (input, update, status tracking)",
        "Installation flow: admin changes status to 'pending installation', technician receives a new installation notification",
        "Technician updates the status once installation is complete",
        "Payment recording (manual, not yet integrated with a payment gateway)",
      ],
    },
    techStack: ["Laravel", "PHP", "MySQL"],
    role: {
      id: "Developer (Project Kuliah)",
      en: "Developer (University Project)",
    },
    challenges: {
      id: "Query database menjadi cukup kompleks karena harus merepresentasikan alur status pemasangan secara akurat - dari pendaftaran, pending pemasangan, hingga selesai - sambil tetap menjaga relasi data pelanggan, teknisi, dan pembayaran tetap konsisten dan mudah ditelusuri.",
      en: "The database queries became fairly complex since they needed to accurately represent the installation status flow - from registration, to pending installation, to completion - while keeping customer, technician, and payment data relationships consistent and easy to trace.",
    },
    solutions: {
      id: "Memanfaatkan bantuan AI sebagai sparring partner untuk merancang ulang struktur query dan relasi database yang lebih efisien, sehingga alur status pemasangan bisa di-tracking dengan jelas tanpa duplikasi logika di banyak tempat.",
      en: "Used AI as a sparring partner to redesign a more efficient query structure and database relationships, so the installation status flow could be tracked clearly without duplicating logic across multiple places.",
    },
    thumbnail: "/images/projects/arcomnet-thumb.png",
    screenshots: [],
    githubUrl: "https://github.com/Ikhsan282-collab/manajemen-arcomnet",
    liveUrl: undefined,
  },
  {
    slug: "sistem-informasi-kos",
    title: {
      id: "Sistem Informasi Kos",
      en: "Boarding House Information System",
    },
    description: {
      id: "Aplikasi desktop untuk manajemen data kos (kamar, penyewa, pembayaran), dibangun dengan Java Swing murni (tanpa GUI Builder) sebagai project kuliah.",
      en: "A desktop application for managing boarding house data (rooms, tenants, payments), built with pure Java Swing (no GUI Builder) as a university project.",
    },
    features: {
      id: [
        "Manajemen data kamar kos (ketersediaan, tipe, harga)",
        "Manajemen data penyewa/penghuni",
        "Pencatatan dan tracking pembayaran sewa",
        "Koneksi ke database untuk penyimpanan data secara terstruktur",
      ],
      en: [
        "Room data management (availability, type, price)",
        "Tenant/occupant data management",
        "Rent payment recording and tracking",
        "Database connection for structured data storage",
      ],
    },
    techStack: ["Java", "Java Swing", "JDBC", "MySQL"],
    role: {
      id: "Developer (Project Kuliah)",
      en: "Developer (University Project)",
    },
    challenges: {
      id: "Membangun antarmuka Java Swing secara manual (coding langsung, tanpa bantuan GUI Builder seperti NetBeans), sehingga penataan layout dan komponen harus dilakukan lebih presisi. Tantangan lain ada pada koneksi API/database (JDBC) - memastikan query CRUD berjalan benar dan data ter-sinkronisasi dengan tampilan Swing secara real-time.",
      en: "Building the Java Swing interface manually (hand-coded, without a GUI Builder like NetBeans), which required more precise layout and component arrangement. Another challenge was the API/database connection (JDBC) - ensuring CRUD queries ran correctly and data stayed synchronized with the Swing UI in real time.",
    },
    solutions: {
      id: "Mempelajari dan menerapkan layout manager Java Swing (seperti GridLayout/BorderLayout) secara manual untuk menyusun antarmuka tanpa GUI Builder, serta merancang koneksi JDBC yang stabil antara aplikasi desktop dan database MySQL untuk operasi data yang konsisten.",
      en: "Learned and applied Java Swing layout managers (such as GridLayout/BorderLayout) manually to build the interface without a GUI Builder, and designed a stable JDBC connection between the desktop app and MySQL database for consistent data operations.",
    },
    thumbnail: "/images/projects/sistem-kos-thumb.png",
    screenshots: [],
    githubUrl: "https://github.com/Ikhsan282-collab/sistem-informasi-kos",
    liveUrl: undefined,
  },
  {
    slug: "smart-boarding-house-management-system",
    title: {
      id: "Smart Boarding House Management System (SBHMS)",
      en: "Smart Boarding House Management System (SBHMS)",
    },
    description: {
      id: "Sistem manajemen kost berbasis web dan mobile yang mencakup manajemen kamar, booking online, pembayaran, komplain, hingga laporan keuangan - dibangun ulang dari aplikasi desktop lama (Java Swing) menjadi arsitektur client-server modern.",
      en: "A web and mobile-based boarding house management system covering room management, online booking, payments, complaints, and financial reports - rebuilt from the old desktop application (Java Swing) into a modern client-server architecture.",
    },
    features: {
      id: [
        "Autentikasi & manajemen role (Admin, Manajer Kost, Penyewa)",
        "Manajemen kost & kamar, termasuk upload foto",
        "Booking online dengan approval admin",
        "Pembayaran dengan upload bukti transfer & verifikasi admin",
        "Modul komplain dengan tracking status",
        "Laporan keuangan (pendapatan, pengeluaran, laba rugi) dengan export PDF/Excel",
        "Notifikasi WhatsApp untuk booking, pembayaran, dan komplain",
        "Chat real-time dengan typing indicator & read receipt",
      ],
      en: [
        "Authentication & role management (Admin, Boarding House Manager, Tenant)",
        "Boarding house & room management, including photo uploads",
        "Online booking with admin approval",
        "Payments with transfer proof upload & admin verification",
        "Complaint module with status tracking",
        "Financial reports (income, expenses, profit/loss) with PDF/Excel export",
        "WhatsApp notifications for bookings, payments, and complaints",
        "Real-time chat with typing indicator & read receipts",
      ],
    },
    techStack: ["Java Spring Boot", "React", "TypeScript", "Flutter", "MySQL", "JWT"],
    role: {
      id: "Full Stack Developer (Solo Project) - merancang dan membangun backend REST API, frontend web, dan aplikasi mobile dari nol.",
      en: "Full Stack Developer (Solo Project) - designed and built the backend REST API, web frontend, and mobile app from scratch.",
    },
    challenges: {
      id: "Migrasi sistem lama dari aplikasi desktop Java Swing menjadi arsitektur client-server modern yang mendukung banyak pengguna secara bersamaan, sekaligus menjaga konsistensi bisnis proses lama sambil merancang ulang struktur database dan REST API agar scalable dan mudah dikembangkan lebih lanjut.",
      en: "Migrating the legacy Java Swing desktop application into a modern client-server architecture that supports multiple concurrent users, while preserving existing business process logic and redesigning the database and REST API structure to be scalable and easy to extend.",
    },
    solutions: {
      id: "Menerapkan Clean Architecture di backend Spring Boot dengan pemisahan Service Layer yang jelas, membangun REST API yang konsisten untuk dikonsumsi oleh frontend web (React) maupun aplikasi mobile (Flutter), serta mengintegrasikan notifikasi WhatsApp pihak ketiga untuk meningkatkan pengalaman pengguna.",
      en: "Implemented Clean Architecture in the Spring Boot backend with a clear Service Layer separation, built a consistent REST API consumed by both the web frontend (React) and mobile app (Flutter), and integrated third-party WhatsApp notifications to improve the user experience.",
    },
    thumbnail: "/images/projects/sbms-thumb.png",
    screenshots: [],
    githubUrl: "https://github.com/Ikhsan282-collab/Smart_Boarding_House_Management_System",
    liveUrl: undefined,
  },
];