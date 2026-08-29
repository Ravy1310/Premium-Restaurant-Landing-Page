Product Requirements Document (PRD)
Project: Ember & Oak Admin Panel (CMS)
Version: 1.0
Status: Draft

1. Latar Belakang
Website Ember & Oak saat ini berupa landing page statis. Setiap ada perubahan harga menu, penambahan foto galeri baru, atau pembaruan jam operasional, pihak restoran harus menghubungi developer untuk mengubah kode. Untuk operasional restoran yang bergerak cepat, hal ini sangat tidak efisien. Dibutuhkan sebuah Admin Panel (CMS) agar pihak manajemen dapat mengedit konten secara mandiri, real-time, tanpa perlu pengetahuan coding.

2. Tujuan Produk
Menyediakan dashboard yang aman (membutuhkan login) bagi pihak manajemen restoran.

Memungkinkan kustomisasi mandiri untuk seluruh teks, gambar, dan data di Landing Page.

Menyediakan antarmuka untuk melihat dan mengelola data Reservasi dan Pesan (Contact) yang masuk dari pengunjung.

3. Asumsi & Batasan
Asumsi: Admin Panel ini akan dibangun dalam satu codebase (Monorepo) yang sama dengan Landing Page Next.js saat ini, memanfaatkan Server Components dan Server Actions.

Database: Membutuhkan database (misal: PostgreSQL dengan Prisma/Drizzle ORM, atau Supabase/Firebase) untuk menyimpan data dinamis.

Autentikasi: Menggunakan NextAuth.js atau Supabase Auth untuk mengamankan route /admin.

Penyimpanan Media: Membutuhkan layanan cloud storage (seperti AWS S3, Cloudinary, atau Vercel Blob) untuk menyimpan unggahan gambar.

4. Detail Modul & Fitur (Arsitektur Menu)
Admin Panel akan memiliki Sidebar navigasi di sebelah kiri. Berikut adalah detail menu dan fungsinya:

📊 1. Modul Dashboard (/admin)
Halaman ringkasan saat Admin pertama kali login.

Fitur Utama:

Kartu Statistik: Total Reservasi Baru, Total Pesan Masuk, Jumlah Menu Aktif.

Recent Activity: Menampilkan 5 reservasi atau pesan terakhir yang masuk.

Grafik Sederhana (Opsional): Tren reservasi 7 hari terakhir.

🏠 2. Modul Content Management
Modul utama untuk mengatur elemen Landing Page. Modul ini dipecah berdasarkan section:

A. Hero Section (/admin/hero)

Fitur Utama: Form untuk mengedit Judul Utama (Heading), Sub-judul (Description), Label Kategori (misal: "Fine Dining Experience"), Teks Tombol CTA, dan Upload/Ganti Gambar Background Hero.

B. About Section (/admin/about)

Fitur Utama: Text Editor (WYSIWYG) untuk mengubah cerita/filosofi restoran, form untuk mengedit Nama Chef & Profil singkat, dan mengatur angka statistik (misal: "10+ Years of Excellence").

C. Menu Management (/admin/menu)

Fitur Utama:

Manajemen Kategori: Tambah, edit, hapus, dan atur urutan kategori menu (Cuisine, Drinks, Desserts).

Manajemen Item: CRUD (Create, Read, Update, Delete) hidangan. Input meliputi: Nama Menu, Harga, Deskripsi, Upload Foto, dan Tag (misal: New, Signature, Spicy).

Fitur Toggle Visibility: Menyembunyikan menu tertentu jika bahan sedang kosong.

D. Gallery Management (/admin/gallery)

Fitur Utama:

Upload multiple images.

Menetapkan kategori filter untuk setiap foto (All, Atmosphere, Cuisine, dll).

Menghapus foto lama atau mengatur foto mana yang di-pin di halaman depan.

E. Testimonials (/admin/testimonials)

Fitur Utama:

Menambah testimoni baru secara manual.

Form input: Nama Tamu, Tanggal, Rating Bintang (1-5), Teks Ulasan, dan Inisial/Warna background avatar.

Fitur Featured: Memilih 1 ulasan untuk dijadikan kutipan besar (Hero Testimonial).

F. FAQ Management (/admin/faq)

Fitur Utama: CRUD Pertanyaan dan Jawaban. Mengelompokkan FAQ berdasarkan kategori (Reservasi, General, dll).

G. Contact & Footer (/admin/contact)

Fitur Utama: Form untuk mengupdate Alamat Restoran, Nomor Telepon, Email, Jam Operasional per hari, serta tautan (URL) Sosial Media.

📅 3. Modul Inbox & Operations
A. Reservations (/admin/reservations)

Fitur Utama: Tabel data interaktif menampilkan input dari form "Secure Your Table". Kolom meliputi: Nama, Email, Tanggal, Jam, Jumlah Tamu, Spesial Request.

Action: Mengubah status reservasi (Pending, Confirmed, Cancelled, Completed).

B. Contact Messages (/admin/messages)

Fitur Utama: Kotak masuk (Inbox) untuk membaca pesan yang dikirim pengunjung melalui form "Send an Inquiry".

⚙️ 4. Modul Settings (/admin/settings)
Fitur Utama: Pengaturan SEO (Title Tag, Meta Description global), upload Favicon, dan manajemen akses akun Admin (ubah password).

5. Struktur Folder (Next.js App Router)
Agar codebase tetap bersih dan memisahkan ranah Public (pengunjung) dan Private (Admin), kita akan menggunakan fitur Route Groups (...) di Next.js.

Plaintext
📦 ember-and-oak
├── 📂 app
│   ├── 📂 (public)                 # Membungkus SEMUA halaman landing page saat ini
│   │   ├── 📂 about
│   │   ├── 📂 menu
│   │   ├── 📄 layout.tsx           # Public Layout (Navbar & Footer Landing Page)
│   │   └── 📄 page.tsx             # Halaman Utama
│   │
│   ├── 📂 (admin)                  # Membungkus SEMUA halaman khusus Admin
│   │   ├── 📂 login                # Halaman Login Admin
│   │   │   └── 📄 page.tsx
│   │   └── 📂 admin                # Route /admin/... (Dilindungi oleh Middleware)
│   │       ├── 📄 layout.tsx       # Admin Layout (Sidebar & Topbar khusus Admin)
│   │       ├── 📄 page.tsx         # /admin (Dashboard Utama)
│   │       ├── 📂 hero
│   │       ├── 📂 menu             # Halaman tabel manajemen menu
│   │       │   ├── 📄 page.tsx
│   │       │   └── 📂 [id]         # Halaman Edit menu spesifik
│   │       ├── 📂 gallery
│   │       ├── 📂 reservations
│   │       └── 📂 settings
│   │
│   ├── 📂 api                      # REST API / Server Actions untuk CRUD ke database
│   └── 📄 middleware.ts            # Memblokir akses ke /admin jika belum login
│
├── 📂 components
│   ├── 📂 admin                    # Komponen khusus untuk Admin Panel
│   │   ├── 📂 layout               # SidebarAdmin.tsx, TopbarAdmin.tsx
│   │   ├── 📂 forms                # FormMenu.tsx, FormHero.tsx, UploadImage.tsx
│   │   └── 📂 ui                   # Reusable UI (Tabel, Modal, Toast)
│   └── 📂 sections                 # (Komponen Landing page saat ini tetap di sini)
│
├── 📂 lib
│   ├── 📂 db                       # Setup koneksi Database (Prisma/Drizzle)
│   ├── 📂 auth                     # Setup NextAuth.js
│   └── 📂 utils                    # Helper functions format tanggal, upload gambar, dll
│
└── 📂 prisma                       # (Jika pakai Prisma) Schema database
    └── 📄 schema.prisma
Penjelasan Struktur:
Route Groups (public) dan (admin): Tanda kurung tidak akan memengaruhi URL. URL tetap akan menjadi namarestoran.com/menu dan namarestoran.com/admin. Namun, ini memungkinkan kita memiliki dua layout.tsx yang sangat berbeda (satu untuk desain elegan pengunjung, satu lagi berbentuk dasbor kerja untuk staf).

Komponen Dipisah: Komponen pengunjung (components/sections) tidak bercampur dengan komponen admin (components/admin), mencegah bundle size membengkak di sisi pengguna.

Database (/lib/db): Kita wajib mengimplementasikan struktur tabel yang akan mendistribusikan data ke Landing Page secara dinamis.