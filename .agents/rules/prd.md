---
trigger: always_on
---

# Product Requirements Document (PRD)

# Ember & Oak — Premium Restaurant Landing Page

**Version:** 1.0
**Status:** Draft
**Author:** Rafi Isnanto Syahlefi
**Project Type:** Marketing Website / Restaurant Landing Page

---

# 1. Latar Belakang

Ember & Oak adalah restoran premium yang menawarkan pengalaman fine dining untuk pasangan, keluarga, wisatawan, dan pelanggan bisnis.

Saat ini informasi restoran masih tersebar di berbagai platform seperti Instagram, WhatsApp, dan Google Maps. Pelanggan harus menghubungi restoran secara manual untuk melihat menu, menanyakan ketersediaan meja, atau melakukan reservasi.

Proses tersebut sering menyebabkan:

* Balasan reservasi lambat.
* Kesalahan pencatatan reservasi.
* Informasi yang tidak konsisten.
* Calon pelanggan kehilangan minat karena proses yang kurang praktis.

Oleh karena itu diperlukan sebuah website resmi yang menjadi pusat informasi restoran sekaligus memudahkan pelanggan melakukan reservasi.

---

# 2. Problem Statement

Pelanggan mengalami kesulitan mendapatkan informasi restoran secara cepat karena informasi tersebar di berbagai platform dan proses reservasi masih dilakukan secara manual melalui WhatsApp atau telepon.

Hal ini mengurangi kenyamanan pelanggan dan berpotensi menurunkan jumlah reservasi.

---

# 3. Tujuan Produk

Membangun website restoran premium yang mampu:

* Menampilkan identitas restoran secara profesional.
* Memudahkan pelanggan melihat menu.
* Menampilkan suasana restoran melalui galeri.
* Mempermudah proses reservasi.
* Meningkatkan jumlah reservasi online.

---

# 4. Target Pengguna

## Primary User

Calon pelanggan yang:

* Mencari restoran premium.
* Ingin melihat menu sebelum datang.
* Ingin melihat suasana restoran.
* Ingin melakukan reservasi secara online.

## Secondary User

Pelanggan lama yang ingin:

* Melakukan reservasi ulang.
* Melihat menu terbaru.
* Mengetahui promo terbaru.

---

# 5. User Persona

## Persona

**Nama**

Sarah Wijaya

**Umur**

29 Tahun

**Pekerjaan**

Marketing Manager

**Goals**

* Menemukan restoran premium.
* Reservasi dengan cepat.
* Mengetahui harga sebelum datang.

**Pain Points**

* Sulit melihat menu.
* Harus chat WhatsApp hanya untuk bertanya.
* Tidak tahu suasana restoran.

---

# 6. Product Goals

Website harus mampu membuat pengunjung:

1. Mengenal restoran.
2. Melihat menu.
3. Percaya terhadap kualitas restoran.
4. Melakukan reservasi.

---

# 7. Success Metrics

Keberhasilan website diukur dari:

* Jumlah reservasi online meningkat.
* Pengunjung membuka halaman menu.
* Pengunjung melihat galeri.
* Pengunjung menghubungi restoran.
* Bounce rate menurun.

---

# 8. User Journey

```
Landing Page

↓

Hero Section

↓

Melihat Menu

↓

Melihat Gallery

↓

Membaca Testimoni

↓

Melakukan Reservasi

↓

Reservasi Berhasil
```

---

# 9. Functional Requirements

## 9.1 Navbar

### Tujuan

Navigasi cepat menuju seluruh section.

### Fitur

* Logo
* Home
* Menu
* About
* Gallery
* Reservation
* Contact
* Sticky Navbar
* Mobile Menu

---

## 9.2 Hero Section

### Menampilkan

* Headline
* Deskripsi restoran
* CTA Reserve Table
* CTA View Menu

---

## 9.3 Digital Menu

### Menampilkan

* Foto makanan
* Nama menu
* Deskripsi
* Harga
* Rating
* Kategori

Kategori:

* Appetizer
* Main Course
* Dessert
* Beverages

---

## 9.4 Gallery

Menampilkan:

* Foto makanan
* Interior restoran
* Suasana restoran

Gallery menggunakan grid responsive.

---

## 9.5 About

Berisi:

* Cerita restoran
* Filosofi
* Statistik

Contoh statistik:

* 10+ Years Experience
* 500+ Happy Customers
* 50+ Signature Dishes

---

## 9.6 Testimonial

Menampilkan review pelanggan.

Isi:

* Nama
* Foto
* Rating
* Review

---

## 9.7 Reservation Form

Field:

* Nama
* Email
* Nomor Telepon
* Tanggal
* Waktu
* Jumlah Tamu

Validasi:

* Semua field wajib diisi.
* Format email valid.
* Nomor telepon valid.

Setelah submit:

* Menampilkan pesan sukses.
* (Level 1) Data belum disimpan ke database.

---

## 9.8 FAQ

Accordion berisi pertanyaan umum.

Contoh:

* Apakah harus reservasi?
* Apakah menerima acara ulang tahun?
* Jam operasional?
* Apakah tersedia area parkir?

---

## 9.9 Contact

Menampilkan:

* Alamat
* Nomor Telepon
* Email
* Jam Operasional
* Google Maps

---

## 9.10 Footer

Berisi:

* Logo
* Copyright
* Quick Links
* Social Media

---

# 10. Non Functional Requirements

Website harus:

* Responsive
* Cepat dibuka
* SEO Friendly
* Accessible
* Mobile First
* Cross Browser

Target Lighthouse

Performance ≥ 95

Accessibility ≥ 95

Best Practice ≥ 95

SEO ≥ 95

---

# 11. Design Requirements

Konsep:

Modern

Elegant

Luxury

Warm

Minimalist

Warna:

Background

```
#FAF7F2
```

Primary

```
#8B4513
```

Secondary

```
#D4A373
```

Typography

Heading

Playfair Display

Body

Inter

---

# 12. Call To Action

Primary CTA

Reserve Table

Secondary CTA

View Menu

---

# 13. Structur Folder 
ember-and-oak/
│
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── api/
│   │
│   ├── globals.css
│   ├── favicon.ico
│   ├── layout.tsx
│   └── not-found.tsx
│
├── components/
│   │
│   ├── common/
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   ├── Button.tsx
│   │   ├── Heading.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Loading.tsx
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   │
│   ├── sections/
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   ├── HeroImage.tsx
│   │   │   └── HeroContent.tsx
│   │   │
│   │   ├── FeaturedMenu/
│   │   │   ├── FeaturedMenu.tsx
│   │   │   ├── MenuCard.tsx
│   │   │   └── MenuPrice.tsx
│   │   │
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   ├── Stats.tsx
│   │   │   └── Story.tsx
│   │   │
│   │   ├── Gallery/
│   │   │   ├── Gallery.tsx
│   │   │   └── GalleryCard.tsx
│   │   │
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.tsx
│   │   │   └── TestimonialCard.tsx
│   │   │
│   │   ├── Reservation/
│   │   │   ├── Reservation.tsx
│   │   │   └── ReservationForm.tsx
│   │   │
│   │   ├── FAQ/
│   │   │   ├── FAQ.tsx
│   │   │   └── FAQItem.tsx
│   │   │
│   │   └── Contact/
│   │       ├── Contact.tsx
│   │       ├── ContactInfo.tsx
│   │       └── Map.tsx
│   │
│   └── ui/
│       └── shadcn components
│
├── data/
│   ├── menu.ts
│   ├── testimonials.ts
│   ├── faq.ts
│   ├── gallery.ts
│   └── statistics.ts
│
├── hooks/
│   ├── useScroll.ts
│   ├── useMediaQuery.ts
│   └── useNavbar.ts
│
├── lib/
│   ├── constants.ts
│   ├── navigation.ts
│   ├── metadata.ts
│   └── utils.ts
│
├── services/
│   └── reservation.service.ts
│
├── types/
│   ├── menu.ts
│   ├── reservation.ts
│   ├── testimonial.ts
│   └── faq.ts
│
├── public/
│   │
│   ├── images/
│   │   ├── hero/
│   │   ├── menu/
│   │   ├── gallery/
│   │   ├── restaurant/
│   │   └── testimonials/
│   │
│   ├── icons/
│   │
│   └── logo/
│
├── styles/
│   └── animations.css
│
├── docs/
│   ├── PRD.md
│   ├── DESAIN.md
│   ├── INSTRUCTION.md
│   └── CHANGELOG.md
│
├── .env.example
├── components.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
---

# 14. Konten yang Disediakan

Owner menyediakan:

* Logo
* Foto makanan
* Foto restoran
* Menu
* Harga
* Testimoni
* Lokasi
* Jam operasional

---

# 15. Out of Scope (Versi 1)

Fitur berikut **tidak** termasuk pada versi pertama:

* Login pengguna
* Dashboard admin
* CMS untuk mengelola menu
* Pembayaran online
* Penyimpanan reservasi ke database
* Integrasi WhatsApp API
* Sistem loyalitas pelanggan
* Multi bahasa

---

# 16. Future Enhancements

Versi berikutnya akan menambahkan:

* Dashboard Admin
* CMS Menu
* Reservasi tersimpan ke database
* Riwayat reservasi
* Promo dinamis
* Blog restoran
* Newsletter
* Dark Mode
* Favorite Menu
* Search Menu
* Filter Menu
* Integrasi Google Reviews
* Instagram Feed

---

# 17. Definition of Done

Project dianggap selesai apabila:

* Semua section berhasil diimplementasikan.
* Responsive pada desktop, tablet, dan mobile.
* Navigasi berjalan dengan baik.
* Form reservasi memiliki validasi.
* CTA berfungsi.
* Google Maps dapat ditampilkan.
* Website lolos pengujian dasar pada browser modern.
* Siap di-deploy ke Vercel.

---

# 18. Ringkasan

Website **Ember & Oak** dirancang sebagai landing page restoran premium yang berfokus pada **meningkatkan reservasi online**, memberikan informasi yang jelas, serta membangun citra restoran yang elegan dan profesional. Pada versi pertama, fokus utama adalah menghadirkan pengalaman pengguna yang cepat, mudah, dan meyakinkan, sehingga pengunjung terdorong untuk melihat menu, mengenal restoran, dan melakukan reservasi. Setelah fondasi ini selesai, versi berikutnya dapat dikembangkan menjadi website yang lebih dinamis dengan dashboard admin, CMS, dan fitur-fitur bisnis lainnya.