# 🌐 Herald Ago — Official Digital Product Design & UX Engineering Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-heraldago.com-235fe6?style=for-the-badge&logo=vercel&logoColor=white)](https://www.heraldago.com)
[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![WCAG 2.2 AA](https://img.shields.io/badge/WCAG_2.2_AA-Compliant-green?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)

> **Designed and engineered 0 to 1 by Herald Ago** — MSc in IT (Web Communication Design) graduate from the **University of Southern Denmark (SDU)**, Odense, Denmark.

This repository contains the complete source code for **[heraldago.com](https://www.heraldago.com)**, a production-grade, ultra-performant digital product design portfolio and case study archive built to showcase end-to-end UX research, design systems engineering, interactive prototypes, and accessible software development.

---

## ✨ Key Features & Highlights

- ⚡ **100/100 Google PageSpeed Scores**: Built with Next.js 15 App Router and static site generation (SSG) for sub-50ms Time to First Byte (TTFB) and high-performance WebP/AVIF asset optimization.
- ♿ **Strict WCAG 2.2 AA Accessibility**: Full keyboard navigation support, visible focus rings, dynamic skip-to-content links, high contrast ratio text palettes, and semantic HTML5 structure.
- 📜 **Dedicated Master's Thesis Hub (`/thesis`)**: An interactive summary of empirical UX research on player types and game mechanics in educational platforms, featuring an embedded 102-page PDF reader (`/thesis-herald-ago.pdf`).
- 🎮 **Interactive Prototype Simulators**: Real-time React component prototypes for public transit ticketing portals, museum booking engines, and enterprise software flows.
- 🌓 **Dynamic Theme Engine**: Tailored Light & Dark mode support with WCAG-compliant color systems (`#FAF7F2` warm ivory light mode & `#090A0C` matte dark mode).
- 📈 **Real Business Metrics**: Detailed empirical case studies featuring verified ROI, including a **+187% YoY net profit increase** for *I Pupi Siciliani* and a **-45% checkout friction reduction** for *Ungdomskort*.

---

## 🚀 Featured Flagship Case Studies

1. **[Ungdomskort Transit Redesign](https://www.heraldago.com/ungdomskort)**  
   *National Danish Student Travel Pass Overhaul* — End-to-end mobile and web redesign solving payment complexity, mobile responsiveness, and enforcing strict WCAG 2.2 AA compliance for Denmark's national student public transit pass.

2. **[Sydbank Enterprise Alation Data Catalog](https://www.heraldago.com/sydbank)**  
   *Enterprise Data Governance UX* — Transforming complex banking data governance workflows into intuitive user journeys for 2,000+ financial analysts and compliance officers.

3. **[X-Bit Museum App Design](https://www.heraldago.com/xbit)**  
   *Google UX Certificate Capstone* — Mobile exhibition booking app with empirical user research, wireframing, high-fidelity interactive prototyping, and usability testing.

4. **[I Pupi Siciliani E-Commerce](https://www.heraldago.com/ipupisiciliani)**  
   *Live Sicilian Wine E-Commerce Retail Build* — End-to-end UX/UI redesign, studio product photography, and custom WooCommerce development driving **+187% YoY net profit**.

5. **[Master's Thesis Research (`/thesis`)](https://www.heraldago.com/thesis)**  
   *SDU Master of Science (MSc) in IT Research* — Investigating gamification mechanics, player types (Hexad framework), and UX engagement in digital learning platforms.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) + Custom Glassmorphism System |
| **Typography** | `Plus Jakarta Sans`, `Syne`, `JetBrains Mono` via `next/font/google` |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Analytics & Monitoring** | [@vercel/analytics](https://vercel.com/analytics) & [@vercel/speed-insights](https://vercel.com/speed-insights) |
| **Deployment & Hosting** | [Vercel Global Edge Network](https://vercel.com/) |

---

## 📁 Repository Structure

```text
portfolio/
├── public/
│   ├── assets/                 # Web-optimized image assets (AVIF / WebP / JPEG)
│   ├── thesis-herald-ago.pdf   # 102-page Master's Thesis PDF
│   ├── herald-ago-icon.svg     # Personal Brand Logo
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── about/              # Biography, SDU MSc Degree & Technical Skills (/about)
│   │   ├── thesis/             # Dedicated Master's Thesis Hub & PDF Reader (/thesis)
│   │   ├── resume/             # Official Resume & Experience Timeline (/resume)
│   │   ├── work/               # Complete Case Study & Enterprise Archive (/work)
│   │   ├── [case-study]/       # Individual Dynamic Case Study Pages
│   │   ├── globals.css         # Custom CSS Variables, Themes & Base Styles
│   │   ├── layout.tsx          # Root Layout, Metadata & Vercel Telemetry
│   │   └── page.tsx            # Homepage Hero, Flagship Projects & Endorsements
│   ├── components/
│   │   ├── CaseStudyDetail.tsx # Rich Case Study Renderer with Interactive Demos
│   │   ├── ExperienceTimeline.tsx # Interactive Career Timeline
│   │   ├── Footer.tsx          # Personal Signature & Tech Stack Badges
│   │   ├── Header.tsx          # Accessible Navigation Header & Mobile Menu
│   │   ├── Hero.tsx            # Display Typography & Capability Pills
│   │   ├── InteractivePrototype.tsx # Interactive Step-by-Step UI Simulator
│   │   ├── UngdomskortPortal.tsx # Live Public Transit Application Prototype
│   │   └── ThemeProvider.tsx   # Light/Dark Theme Switcher Context
│   └── data/
│       ├── experience.ts       # Verified LinkedIn Career Experience & Skills
│       ├── projects.ts         # Comprehensive Case Study Metadata & Research Metrics
│       └── testimonials.ts     # Client & Founder Endorsements
├── next.config.ts              # Next.js Asset Optimization & Security Headers
├── tailwind.config.ts          # Custom Design System Tokens, Colors & Shadows
├── tsconfig.json               # TypeScript Compiler Configuration
└── package.json                # Dependencies & Build Scripts
```

---

## 💻 Local Development Setup

To run this repository locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Heraldago/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the live app.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 👤 Author & Signature

**Herald Ago**  
*MSc in IT (Web Communication Design) · Digital Product Designer & Design Engineer*  
- **Website**: [heraldago.com](https://www.heraldago.com)  
- **LinkedIn**: [linkedin.com/in/heraldago](https://www.linkedin.com/in/heraldago/)  
- **Email**: [heraldago1@gmail.com](mailto:heraldago1@gmail.com)  
- **Location**: Odense, Denmark & Italy

---

## 📄 License

Designed and developed by Herald Ago. All rights reserved. © 2026.
