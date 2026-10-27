# ⚡ Tejas Chaudhari — Developer Portfolio

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=flat&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A state-of-the-art, high-performance personal portfolio web application built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **GSAP**. Designed with rich aesthetics, glassmorphism, fluid micro-interactions, smooth momentum scrolling, dynamic dark/light themes, and interactive 3D elements.

---

## 🌟 Key Features

- **🎨 Premium Visual Aesthetics**: Glassmorphic frosted cards, curated color palettes, ambient gradient glows, and dynamic particle backgrounds.
- **🌓 Seamless Dark / Light Mode**: Instant zero-flash theme persistence using early paint scripts with circular animated transitions via the View Transitions API.
- **✨ Fluid Animations & Micro-Interactions**:
  - GSAP & ScrollTrigger scroll-driven reveals
  - Interactive magnetic buttons and custom cursor with trailing effect
  - 3D perspective tilt cards (`TiltCard.tsx`)
  - Interactive technology orbit diagram and animated skill bars
  - Swiper 3D coverflow carousel for project showcases
  - Lenis smooth momentum scrolling
- **🧭 Multi-Page Client-Side Routing**:
  - `Home (/)`: Hero section with dynamic typing roles, quick chips, featured projects showcase, services preview, and animated CTA.
  - `About (/about)`: Personal background, education highlights, and core values.
  - `Skills (/skills)`: Categorized skill proficiencies (Programming, Web, Backend, Database, QA Testing, AI/ML, Tools) + interactive Tech Orbit diagram.
  - `Experience (/experience)`: Interactive timeline displaying industry roles, QA experience, and engineering internships.
  - `Projects (/projects)`: Searchable & filterable project catalog by technology tags.
  - `Project Details (/projects/:slug)`: Dedicated deep-dive case studies for prototypes and systems.
  - `Services (/services)`: Service offerings across Full-Stack, QA Testing, AI/ML, and Data Analytics.
  - `Certifications (/certifications)`: Verifiable credentials and academic achievements.
  - `Resume (/resume)`: Formatted online curriculum vitae with one-click print/download capability.
  - `Contact (/contact)`: Interactive form with Web3Forms integration, input validation, and honeypot spam protection.
  - `404 (/not-found)`: Custom animated page not found screen.
- **🎮 Easter Egg**: Built-in Konami code listener (`↑ ↑ ↓ ↓ ← → ← → B A`).

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Core Framework** | React 18, React DOM |
| **Language** | TypeScript 5 |
| **Build Tool & Bundler** | Vite 7 |
| **Styling** | Vanilla CSS + Tailwind CSS 3 + PostCSS |
| **Motion & Animation** | GSAP 3, @gsap/react, Lenis (Smooth Scroll), Swiper |
| **Icons** | Lucide React |
| **Routing** | React Router DOM v7 |
| **Backend Integration** | Supabase JS client, Web3Forms API |

---

## 📂 Project Directory Structure

```text
portfolio/
├── .bolt/                  # Bolt workspace configuration
├── dist/                   # Production build output (generated after build)
├── node_modules/           # Installed npm packages (generated after install)
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── CustomCursor.tsx    # Smooth trailing cursor
│   │   ├── Footer.tsx          # Site footer with social links & copyright
│   │   ├── MagneticButton.tsx  # Magnetic hover + ripple effect button
│   │   ├── Navigation.tsx      # Sidebar & mobile drawer navigation
│   │   ├── PageShell.tsx       # Standard page layout wrapper
│   │   ├── PageTransition.tsx  # Route transition wrappers
│   │   ├── ParticleField.tsx   # Canvas-based ambient particle field
│   │   ├── SectionHeading.tsx  # Eyebrow + title + subtitle section header
│   │   ├── SplitText.tsx       # GSAP text reveal helpers
│   │   ├── ThemeToggle.tsx     # Sun/moon dark-light toggle button
│   │   └── TiltCard.tsx        # 3D interactive tilting card container
│   ├── data/
│   │   └── siteData.ts         # Central data source for portfolio content
│   ├── hooks/              # Custom React hooks
│   │   ├── useKonami.ts        # Easter egg key combination listener
│   │   ├── usePageMeta.ts      # Dynamic document title & meta tags
│   │   ├── useSmoothScroll.ts  # Lenis smooth scroll engine
│   │   ├── useTheme.ts         # Dark/light mode theme management
│   │   └── useTypingRoles.ts   # Typewriter text cycling for hero
│   ├── pages/              # Routed page views
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── Projects.tsx
│   │   ├── Resume.tsx
│   │   ├── Services.tsx
│   │   └── Skills.tsx
│   ├── App.tsx             # Main routing & application shell
│   ├── index.css           # Global design tokens, gradients & utilities
│   ├── main.tsx            # React application entry point
│   └── vite-env.d.ts       # Vite TypeScript type declarations
├── eslint.config.js        # ESLint flat configuration
├── index.html              # Single page application HTML root
├── package.json            # Scripts & project dependencies
├── postcss.config.js       # PostCSS plugins (Tailwind, Autoprefixer)
├── tailwind.config.js      # Tailwind design system configuration
├── tsconfig.json           # Root TypeScript configuration
├── tsconfig.app.json       # Frontend TypeScript compiler options
└── vite.config.ts          # Vite bundler configuration & path aliases
```

---

## 📋 Prerequisites

Before running the project locally, verify that you have the following installed on your computer:

1. **Node.js**: Version `18.0.0` or higher (Node `20.x` or `24.x` recommended).
   - Check version:
     ```bash
     node -v
     ```
2. **npm** (comes packaged with Node.js): Version `9.x` or higher.
   - Check version:
     ```bash
     npm -v
     ```

*(Optional: You can also use `yarn`, `pnpm`, or `bun` if preferred.)*

---

## 🚀 Manual Step-by-Step Running Guide

Follow these steps in your terminal to set up and run the application manually from scratch:

### Step 1: Open Terminal & Navigate to the Project Folder
Open PowerShell, Command Prompt, or your preferred terminal and navigate to the project directory:

```bash
cd "d:\Tejas Class Projects\portfolio\project"
```

### Step 2: Install Project Dependencies
Install all required npm packages:

```bash
npm install
```

> **Note**: This will create the `node_modules/` folder and download all necessary packages specified in `package.json`.

---

### Step 3: Start the Development Server
Run the local Vite development server:

```bash
npm run dev
```

Once started, the terminal will display output similar to:
```text
  VITE v7.3.7  ready in 346 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

### Step 4: Open in Your Browser
Open your browser and navigate to:

👉 **[http://localhost:5173](http://localhost:5173)**

The portfolio website will load with live Hot Module Replacement (HMR). Any edits you make in the code will immediately update on screen without refreshing.

---

### Step 5: (Optional) Verify TypeScript Types & Code Quality
To ensure all TypeScript code and ESLint rules pass with zero errors:

```bash
# Type check all TypeScript files
npm run typecheck

# Run ESLint linter
npm run lint
```

---

### Step 6: (Optional) Build for Production
To generate an optimized, minified production bundle:

```bash
npm run build
```

This compiles your application into the `dist/` directory.

To test and preview the production build locally before deployment:

```bash
npm run preview
```

The preview server will launch (typically at `http://localhost:4173`).

---

## ⚙️ Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts the local development server at `http://localhost:5173` with instant HMR. |
| `npm run build` | Compiles and bundles production-ready assets into the `dist/` folder. |
| `npm run preview` | Locally serves the production `dist/` folder for verification. |
| `npm run typecheck` | Validates TypeScript types across the codebase using `tsc --noEmit`. |
| `npm run lint` | Runs ESLint to verify code quality and style conventions. |

---

## 🎨 How to Personalize & Customize Content

All text, links, experiences, projects, and contact configuration are stored cleanly in a single configuration file:

📁 **`src/data/siteData.ts`**

### 1. Update Personal Profile & Social Links
Open `src/data/siteData.ts` and customize the `site` object:
```typescript
export const site = {
  name: 'Your Full Name',
  shortName: 'Your Nickname',
  location: 'City, Country',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  typingRoles: [
    'Software Developer',
    'Full-Stack Engineer',
    // ... add your roles
  ],
  hero: { ... },
  bio: 'Your personal summary...',
};
```

### 2. Configure Contact Form Emails
The contact form uses [Web3Forms](https://web3forms.com/) for zero-backend email delivery.
1. Get a free access key from [web3forms.com](https://web3forms.com/).
2. In `src/data/siteData.ts`, replace the placeholder key:
   ```typescript
   export const contact = {
     web3formsKey: 'YOUR_ACTUAL_WEB3FORMS_ACCESS_KEY',
   };
   ```

### 3. Add or Modify Projects
Add items to the `projects` array in `src/data/siteData.ts`:
```typescript
{
  slug: 'my-project-slug',
  title: 'Project Title',
  status: 'Prototype / Production',
  badge: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
  summary: 'Short summary for card view...',
  tech: ['React', 'TypeScript', 'Tailwind'],
  description: 'Full in-depth project description for detail page...',
  features: [
    'Key feature 1',
    'Key feature 2',
  ],
  demoUrl: 'https://your-demo-url.com',
  githubUrl: 'https://github.com/your-repo',
  featured: true,
}
```

---

## ❓ Troubleshooting & FAQs

### Port `5173` is already in use
If another process is using port 5173, Vite will automatically switch to the next available port (e.g. `5174`), or you can specify a custom port:
```bash
npm run dev -- --port 3000
```

### PowerShell execution policy error (`ps1 cannot be loaded`)
If you see an execution policy error on Windows:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```
Then rerun `npm run dev`.

### Styles not applying or cache issues
If you make changes to Tailwind config and don't see them reflected:
```bash
# Delete Vite cache and restart
Remove-Item -Recurse -Force node_modules/.vite
npm run dev
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and deploy for your personal portfolio.
