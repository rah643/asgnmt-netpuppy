# TIS - Tula's International School Redesign

[![Build Status](https://img.shields.io/badge/Build-Passing-emerald)](https://tis.edu.in)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-purple)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14-ff0055)](https://framer.com/motion)

An agency-grade, modern, highly responsive, animated homepage redesign for **Tula's International School (TIS), Dehradun**—India's top co-educational boarding school. 

Built around the authentic **"Modern Gurukul"** philosophy (*Mind, Body & Soul*), this application elevates the brand identity into a sleek, editorial digital experience for prospective parents, students, and global visitors.

---

## 🌟 Key Features

1. **Editorial Hero Section**: Dynamic typography layout with stagger reveals, dual CTAs, stats ticker, and floating campus info cards.
2. **Modern Gurukul Introduction**: Highlighting the Tri-Fold growth philosophy (*Mind, Body & Soul*), 1:8 mentor ratio, and Himalayan eco-campus.
3. **Core Pillars & Why TIS**: Asymmetric feature cards highlighting CBSE & Cambridge pathways, 16+ Olympic sports, and pastoral care.
4. **Interactive Campus Life**: Categorized visual showcase (Sports, Gurukul Labs, Performing Arts "Raga", Residential Hostels) with hover states.
5. **Interactive Academic Programs**: Tabbed curriculum explorer for Primary, Middle, and Senior Secondary (JEE/NEET/CUET/SAT preparation).
6. **Verified Achievements & Accolades**: 25+ Years of Trust, #1 Co-Ed Boarding School ranking, Forbes Great Indian School accreditation.
7. **Accessible Testimonials Slider**: Smooth parent & alumnus story carousel with touch swiping and keyboard arrow key navigation (`←` / `→`).
8. **Interactive Admissions Inquiry Modal**: Accessible quick application modal for scheduling campus visits and downloading prospectus.

---

## 🛠️ Interactive Features & Custom Hooks

- **Feature 1 : Custom Desktop Cursor (`CustomCursor.jsx`)**: 
  Smooth outer ring + trailing dot system that expands over interactive buttons, links, and photography. Automatically disabled on touch screens, mobile devices, and reduced-motion settings.
- **Feature 2 : Scroll-Triggered Reveal Components (`Reveal.jsx`)**:
  Reusable `<Reveal>` and `<StaggerContainer>` components powered by Framer Motion's `whileInView` with `once: true` viewport detection.
- **Feature 3 : Scroll Progress Indicator (`ScrollProgress.jsx`)**:
  Thin top progress bar using Framer Motion `useScroll` and `useSpring` hooks for high-performance 60 FPS feedback.
- **Feature 4 : Theme Switcher (`ThemeToggle.jsx` & `useTheme.js`)**:
  Dark/Light mode persistence with `localStorage`, system preference auto-detection, and smooth color transitions without theme flashing.

---

## 💻 Tech Stack

- **Framework**: React 19 (Vite 8)
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Animation System**: Framer Motion 14 (Primary animation engine)
- **Iconography**: Lucide React
- **Build System**: Vite (Rolldown production bundler)
- **Deployment Target**: Vercel / Netlify

---

## 📐 Project Structure

```
tulas-international-school/
├── public/
│   └── assets/
│       └── images/         # Campus, Gurukul, Sports & Performing Arts visuals
├── src/
│   ├── assets/             # Static brand assets
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky overlay header & mobile drawer
│   │   ├── CustomCursor.jsx    # Custom desktop trailing ring cursor
│   │   ├── ScrollProgress.jsx  # Framer Motion top progress bar
│   │   ├── ThemeToggle.jsx     # Dark/Light theme toggle button
│   │   ├── Reveal.jsx          # Reusable scroll reveal & stagger wrappers
│   │   ├── SectionHeading.jsx  # Editorial section heading component
│   │   ├── Button.jsx          # Micro-interactive button component
│   │   ├── InquiryModal.jsx    # Admissions application dialog
│   │   └── Footer.jsx          # Semantic footer with campus links & social icons
│   ├── sections/
│   │   ├── Hero.jsx            # Editorial Hero Section
│   │   ├── Introduction.jsx    # Modern Gurukul Philosophy Section
│   │   ├── WhyTIS.jsx          # Core Pillars & Strengths
│   │   ├── CampusLife.jsx      # Asymmetric Campus Showcase
│   │   ├── Academics.jsx       # Interactive Tabbed Curriculum Explorer
│   │   ├── Achievements.jsx    # Verified Stats & Accolades
│   │   ├── Testimonials.jsx    # Controlled Story Carousel
│   │   └── AdmissionsCTA.jsx   # Admissions Step-by-Step Conversion CTA
│   ├── hooks/
│   │   ├── useTheme.js          # Dark/Light mode theme persistence hook
│   │   └── useMediaQuery.js     # Responsive & prefers-reduced-motion hooks
│   ├── data/
│   │   └── schoolData.js        # Centralized authentic TIS facts & content
│   ├── App.jsx                 # App layout & root state management
│   ├── main.jsx                # React entry point
│   └── index.css               # Design system tokens & Tailwind imports
├── index.html                  # SEO meta tags, Google Fonts (Cormorant & Plus Jakarta)
├── vite.config.js              # Vite & Tailwind v4 plugin configuration
└── README.md                   # Project documentation
```

---

## ⚡ Installation & Local Development

Follow these steps to run the site locally:

1. Install **Node.js 20.19+** (or **22.12+**) and npm.
2. Open this project folder in VS Code, then open a terminal with **Terminal → New Terminal**.
3. Install the project dependencies:
  ```bash
  npm install
  ```
4. Start the Vite development server:
  ```bash
  npm run dev
  ```
5. Open the local URL printed in the terminal, usually `http://localhost:5173`.
6. To stop the server, focus the terminal and press **Ctrl+C**.

To verify a production build, run:
```bash
npm run build
```

---

## 📱 Responsive Support

Tested and verified across all standard viewport dimensions:
- **320px** (iPhone SE / Small Android)
- **375px & 390px** (iPhone 13 / 14 / 15)
- **430px** (iPhone Pro Max)
- **768px** (iPad / Tablet Portrait)
- **1024px** (Tablet Landscape / Laptop)
- **1280px & 1440px** (Desktop Monitor)
- **1920px+** (Ultra-Wide Displays)

---

## ♿ Accessibility & Performance

- **Semantic HTML5**: Native `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` tags.
- **Keyboard Navigation**: Full tab index order, visible focus rings, arrow key support for carousels, and `Escape` key support for modals.
- **Reduced Motion**: Automatically disables custom cursor and non-essential layout animations when `prefers-reduced-motion: reduce` is enabled.
- **Color Contrast**: Complies with WCAG AA standards in both Light (`#FAF8F5`) and Dark (`#090D14`) modes.
- **Performance**: Zero runtime scroll listeners on main thread; hardware-accelerated CSS `transform` and `opacity` transitions.

---

## 🚀 Future Improvements

1. **Virtual 360° Campus Tour Integration**: Embed WebGL interactive 3D panorama views of the 22-acre Himalayan campus.
2. **Multi-Language Support**: i18n localization in Hindi, French, Spanish, and Arabic for international parents.
3. **Student Portal Integration**: SSO login for active parents to view term grade sheets and house sports achievements.

---

*Redesigned with ❤️ for Tula's International School, Dehradun.*
