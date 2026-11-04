# James Carter — Legal Representation Landing Page

A modern, production-grade, pixel-perfect landing page for premier attorney **James Carter & Associates**, meticulously translated from Figma to code following Domain-Driven Design (DDD) principles.

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)
![GSAP](https://img.shields.io/badge/GSAP-3.12-green?style=flat&logo=greensock)
![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-orange?style=flat)

---

## 🏛️ Project Architecture (Domain-Driven Design)

The codebase strictly adheres to DDD architectural layers to ensure separation of concerns, testability, and zero code bloat:

```
src/
├── app/                  # Next.js App Router (Layout & Metadata)
├── domain/               # Core business models, entities & validation
│   ├── stats/            # Key figures & metrics
│   ├── practice-area/    # Legal domains & classifications
│   ├── process/          # 4-step strategic roadmap
│   ├── attorney/         # Credentials & bar admissions
│   ├── testimonial/      # Client reviews & ratings
│   ├── faq/              # Legal FAQs
│   └── consultation/     # Booking schema & validations
├── application/          # Client hooks & business workflows
│   ├── use-scroll-navigation.hook.ts
│   ├── use-count-up.hook.ts
│   ├── use-testimonials-slider.hook.ts
│   ├── use-faq-accordion.hook.ts
│   └── use-consultation-form.hook.ts
└── presentation/         # Atomic design system & views
    ├── components/
    │   ├── atoms/        # Button, Input, Textarea, SectionHeading, Checklist, BackToTop
    │   ├── molecules/    # StatCard, PracticeAreaCard, ProcessStepCard, TestimonialCard, FaqItem, ConsultationCalendar, HeaderNavbar
    │   └── organisms/    # Hero, Intro, WhyUs, KeyFigures, PracticeAreas, HowItWorks, AttorneyProfile, Testimonials, FAQ, Consultation, Footer
    ├── providers/        # SmoothScrollProvider (Lenis + GSAP ticker synchronization)
    ├── styles/           # Global typography & design tokens
    └── views/            # Master LandingPageView composition
```

---

## ✨ Key Features & Engineering Highlights

- **Pixel-Perfect Fidelity:** Exact match with Figma Desktop (1440px) and Mobile (360px) viewports.
- **Micro-Interactions & Motion:**
  - GSAP ScrollTrigger word-by-word opacity highlight scrub across the firm narrative.
  - Lenis smooth momentum scrolling with anchor navigation.
  - Zero-CLS animated CSS Grid accordions for FAQ items.
  - Animated stat count-up with viewport intersection observers and SSR zero-flash safety.
- **Interactive Booking Engine:**
  - `react-day-picker` calendar with past-date and Sunday guardrails.
  - 3 meeting formats: Confidential Video, Manhattan Office, Direct Phone.
  - Dynamic time-slot selector with Eastern Standard Time (EST) indicator.
  - One-click Google Calendar integration.
- **Accessibility & Performance:**
  - WCAG 2.1 AA compliant form controls with `aria-invalid` and `aria-describedby` links.
  - Lightweight page bundle (~91 kB initial JS).
  - No bloated external component libraries; 100% custom reusable design tokens.
  - Strict file-size cap: **All files under 180 lines of code**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.17.0
- npm or pnpm

### Installation

```bash
git clone <repository-url>
cd jamesCarterLawyer
npm install
```

### Running Locally

```bash
# Development server
npm run dev

# Production build & start
npm run build
npm run start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 License

Private & Confidential. Proprietary design rights reserved by Ashford & Vance / James Carter & Associates.
