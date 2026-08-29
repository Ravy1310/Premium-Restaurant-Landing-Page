<div align="center">

# 🔥 Ember & Oak

### Premium Restaurant Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

<br />

**EN** | [ID](#-tentang-proyek)

</div>

---

## 📖 About

A visually rich, single-page-style restaurant landing page for a fictional fine dining restaurant called **Ember & Oak**. The design theme is **Modern, Elegant, Premium, Warm** — inspired by Michelin-star restaurants and editorial layouts. Built with Next.js App Router and packed with smooth scroll animations, parallax effects, and a premium UI experience.

## 🇮🇩 Tentang Proyek

Halaman arahan restoran bergaya single-page yang kaya secara visual untuk restoran fine dining fiktif bernama **Ember & Oak**. Tema desainnya adalah **Modern, Elegan, Premium, Hangat** — terinspirasi dari restoran bintang Michelin dan tata letak editorial. Dibangun dengan Next.js App Router dan dilengkapi dengan animasi scroll halus, efek parallax, dan pengalaman UI premium.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| **Next.js 16** | React framework with App Router |
| **React 19** | UI library |
| **TypeScript 5** | Type-safe development |
| **Tailwind CSS 4** | Utility-first styling |
| **shadcn/ui** | Reusable UI components |
| **Framer Motion** | Page & component animations |
| **GSAP + ScrollTrigger** | Scroll-linked & parallax animations |
| **Lenis** | Smooth scrolling |
| **Lucide React** | Icon library |

---

## ✨ Features

- **7 Pages** — Home, Menu, About, Gallery, Testimonials, Reservation, FAQ, Contact
- **Preloader** — Animated loading screen with progress counter (once per session)
- **Smooth Scrolling** — Lenis-powered smooth scroll with GSAP ScrollTrigger integration
- **Parallax Hero** — Full-screen hero with parallax image effect
- **Word-by-Word Reveal** — Scroll-linked text animation on the story banner
- **Sticky Navbar** — Transparent on top, white with shadow on scroll; mobile hamburger menu
- **Filterable Gallery** — Category-based filtering (Cuisine, Drinks, Desserts, Atmosphere)
- **Reservation Form** — Full booking form with date, time, guests, and special requests
- **FAQ Accordion** — Bento-style category navigation with animated expand/collapse
- **Responsive Design** — Optimized for Desktop (1280px+), Laptop (1024px), Tablet (768px), Mobile (390px)
- **Accessibility** — Keyboard navigation, semantic HTML, alt text, focus rings, AA contrast compliance

---

## 📁 Project Structure

```
ember-and-oak/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global Tailwind styles
│   ├── About/page.tsx
│   ├── Menu/page.tsx
│   ├── gallery/page.tsx
│   ├── testimonials/page.tsx
│   ├── reservation/page.tsx
│   ├── faq/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/                 # Navbar, Footer
│   ├── common/                 # SmoothScroll, Preloader
│   ├── ui/                     # shadcn Button
│   └── sections/               # Page section components
│       ├── Home/               # Hero, StoryBanner, FeaturedMenu, About
│       ├── AboutPage/
│       ├── Menu/
│       ├── Gallery/
│       ├── Testimonials/
│       ├── Reservation/
│       ├── FAQ/
│       └── Contact/
├── data/                       # Static data (menu, testimonials, FAQ, gallery)
├── lib/                        # Utilities (cn helper)
└── public/images/              # Image assets
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to the project directory
cd ember-and-oak

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production

```bash
# Build the project
npm run build

# Start the production server
npm start
```

---

## 📋 Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## ⚙️ Configuration

| File | Purpose |
| --- | --- |
| `tailwind.config.ts` | Custom colors, fonts, shadows, and breakpoints |
| `next.config.ts` | Next.js configuration (remote image domains) |
| `tsconfig.json` | TypeScript configuration with path aliases (`@/*`) |
| `postcss.config.mjs` | PostCSS with Tailwind CSS plugin |
| `components.json` | shadcn/ui component configuration |
| `DESIGN.MD` | Full design system specification |

---

## 🗺️ Roadmap

- [x] Landing page with 7+ pages
- [x] Smooth scroll & parallax animations
- [x] Responsive design
- [x] Preloader animation
- [ ] **Phase 2 — Admin CMS** (authentication, CRUD, database integration)

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 Ember & Oak

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

Made with ❤️ for fine dining enthusiasts

</div>
