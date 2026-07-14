# 🛠️ INSTRUCTION.md
# Ember & Oak — Step-by-Step Build Guide

> Panduan implementasi project secara bertahap.
>
> **Aturan utama:** Jangan melompat ke tahap berikutnya sebelum tahap sebelumnya selesai dan telah diuji.

---

# Development Roadmap

```
Planning
    ↓
Design System
    ↓
Project Setup
    ↓
Layout
    ↓
Components
    ↓
Sections
    ↓
Responsive
    ↓
Animation
    ↓
SEO
    ↓
Testing
    ↓
Deployment
```

---

# STEP 1 — Project Initialization

## Objective

Membuat project dengan struktur yang rapi.

---

## Install

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* shadcn/ui
* Framer Motion
* Lucide React

---

## Folder Structure

```
app/

components/

data/

hooks/

lib/

public/

styles/

types/

utils/
```

---

## Success Criteria

* Project dapat dijalankan.
* Tidak ada error.
* Tailwind berjalan.
* shadcn berhasil diinstall.

---

# STEP 2 — Design System

## Objective

Membuat pondasi UI.

---

## Buat

### Colors

```
Primary

Secondary

Background

Text

Border

Success

Danger
```

---

### Typography

```
Heading

Body

Button

Caption
```

---

### Spacing

```
4
8
12
16
24
32
48
64
96
```

---

### Border Radius

```
sm

md

lg

xl

2xl
```

---

### Shadow

```
Card

Hover

Button
```

---

## Success Criteria

Semua style menggunakan design token.

Tidak ada hardcoded color.

---

# STEP 3 — Global Layout

## Objective

Membuat kerangka website.

---

Buat

```
Navbar

Footer

Container

Section Wrapper
```

---

Navbar harus

- Responsive
- Sticky
- Smooth Scroll

---

Footer

- Logo
- Copyright
- Quick Links

---

Success Criteria

Semua halaman menggunakan layout yang sama.

---

# STEP 4 — Hero Section

## Objective

Membuat first impression yang kuat.

---

Isi

- Headline
- Description
- CTA Primary
- CTA Secondary
- Hero Image
- Scroll Indicator

---

Animation

Fade In

Image Scale

Button Hover

---

Success Criteria

Hero memenuhi seluruh layar.

CTA terlihat jelas.

---

# STEP 5 — Featured Menu

## Objective

Menampilkan menu unggulan.

---

Buat data

```
Menu[]

- id

- name

- category

- description

- image

- rating

- price
```

---

UI

Grid Card

Desktop

3

Tablet

2

Mobile

1

---

Card

Image

Category

Name

Description

Price

Rating

---

Hover

Scale

Shadow

---

Success Criteria

Semua card responsive.

---

# STEP 6 — About Section

## Objective

Membangun kepercayaan.

---

Isi

Story

Mission

Vision

Statistics

---

Statistics

```
10+

Years

500+

Customers

50+

Signature Dishes
```

---

Success Criteria

Image dan text seimbang.

---

# STEP 7 — Gallery

## Objective

Menampilkan suasana restoran.

---

Grid

Desktop

4

Tablet

2

Mobile

1

---

Hover

Zoom

Overlay

---

Success Criteria

Tidak ada gambar yang pecah.

---

# STEP 8 — Testimonials

## Objective

Meningkatkan trust.

---

Data

```
Name

Avatar

Rating

Review
```

---

Card

Avatar

Stars

Review

Name

---

Success Criteria

Minimal 3 testimonial.

---

# STEP 9 — Reservation Form

## Objective

Mengubah pengunjung menjadi pelanggan.

---

Fields

```
Name

Email

Phone

Date

Time

Guests
```

---

Validation

Required

Email

Phone

---

Button

Reserve Now

---

Level 1

Belum menggunakan database.

Submit

↓

Toast Success

---

Success Criteria

Tidak ada field kosong.

---

# STEP 10 — FAQ

## Objective

Mengurangi pertanyaan pelanggan.

---

Gunakan

Accordion

---

Minimal

5 FAQ

---

Success Criteria

Animation smooth.

---

# STEP 11 — Contact

## Objective

Mempermudah pelanggan menghubungi restoran.

---

Isi

Address

Phone

Email

Opening Hours

Google Maps

---

CTA

Call

WhatsApp

---

Success Criteria

Semua link bekerja.

---

# STEP 12 — Responsive

## Objective

Website nyaman di semua device.

---

Breakpoint

```
Mobile

Tablet

Laptop

Desktop
```

---

Checklist

Navbar

Hero

Grid

Gallery

Footer

---

Success Criteria

Tidak ada horizontal scroll.

---

# STEP 13 — Animation

Library

Framer Motion

---

Gunakan

Fade Up

Fade Left

Fade Right

Scale

Hover Lift

---

Jangan berlebihan.

Prioritaskan performa.

---

Success Criteria

Animasi halus.

---

# STEP 14 — Accessibility

Checklist

✓ Alt Image

✓ Semantic HTML

✓ Focus Ring

✓ Keyboard Navigation

✓ Contrast AA

---

Success Criteria

Website dapat digunakan tanpa mouse.

---

# STEP 15 — SEO

Tambahkan

- Metadata
- Title
- Description
- Open Graph
- robots.txt
- sitemap.xml
- favicon

---

Success Criteria

SEO siap dipublish.

---

# STEP 16 — Performance

Checklist

✓ next/image

✓ Lazy Loading

✓ Dynamic Import bila diperlukan

✓ Optimized Fonts

✓ Optimized Images

---

Target

Performance

95+

---

# STEP 17 — Testing

Checklist

Navbar

Hero

Menu

Gallery

Testimonials

Reservation

FAQ

Contact

Footer

---

Responsive

Desktop

Tablet

Mobile

---

Browser

Chrome

Edge

Firefox

Safari

---

# STEP 18 — Deployment

Deploy ke Vercel.

---

Checklist

- Tidak ada error build.
- Metadata muncul.
- Responsive.
- Semua link aktif.
- Form dapat digunakan.
- Lighthouse minimal 95.

---

# Project Checklist

## Foundation

- [ ] Setup Project
- [ ] Install Dependencies
- [ ] Folder Structure
- [ ] Design System

---

## Layout

- [ ] Navbar
- [ ] Footer
- [ ] Container

---

## Sections

- [ ] Hero
- [ ] Featured Menu
- [ ] About
- [ ] Gallery
- [ ] Testimonials
- [ ] Reservation
- [ ] FAQ
- [ ] Contact

---

## UI

- [ ] Responsive
- [ ] Hover
- [ ] Animation
- [ ] Accessibility

---

## Optimization

- [ ] SEO
- [ ] Performance
- [ ] Testing

---

## Release

- [ ] Deploy
- [ ] Final Review

---

# Definition of Done

Project dianggap selesai jika:

- Semua fitur pada PRD versi 1 telah selesai.
- Responsive pada seluruh ukuran layar.
- Tidak ada error di console.
- Build berhasil.
- Website siap dipresentasikan ke client.
- Website layak dimasukkan ke portfolio profesional.