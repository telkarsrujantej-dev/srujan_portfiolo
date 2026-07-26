<div align="center">

# 🚀 Bhanu Prakash — Personal Portfolio

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=00D4FF&center=true&vCenter=true&width=600&lines=Full+Stack+Developer;ECE+Engineer+%26+AI+Enthusiast;Open+Source+Contributor;Hardware+%2B+AI+%2B+Software+Builder" alt="Typing SVG" />

<br/>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-bhanutechlab.vercel.app-00D4FF?style=for-the-badge&logoColor=white)](https://bhanutechlab.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)
[![Version](https://img.shields.io/badge/Version-2.0.0-blue?style=for-the-badge)](https://github.com/Bhanu99517/Bhanu-portfolio)
[![Stars](https://img.shields.io/github/stars/Bhanu99517/Bhanu-portfolio?style=for-the-badge&color=yellow)](https://github.com/Bhanu99517/Bhanu-portfolio/stargazers)

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## 📖 About

**Bhanu Prakash Portfolio v2** is a fully responsive, modern personal portfolio website built to showcase projects, skills, achievements, and contact information. It's designed for developers, AI enthusiasts, and tech professionals who want a clean, fast, and professional online presence.

This is the **second iteration** of the portfolio — rebuilt from scratch with a more polished UI, better performance, and richer content sections including an Open Source page, GitHub stats integration, and a contact form powered by Supabase.

> 💡 *"Hardware + AI + Software = Real Products"* — Bhanu Prakash

---

## ✨ Features

### 🎨 Design & UI
- Modern, minimal dark-themed design
- Fully responsive across mobile, tablet, and desktop
- Smooth scroll animations and section transitions
- Clean typography with professional layout

### 📄 Portfolio Sections
- **Hero** — Animated introduction with typing effect and CTA buttons
- **About Me** — Background, education, and personal mission
- **Skills** — Visual tech stack grid with categorized tools and languages
- **Projects** — Showcase cards with live demo links, tech tags, and descriptions
- **Open Source** — GitHub stats, achievements, and contribution highlights
- **Contact** — Contact form with Supabase backend integration

### ⚡ Performance
- Built with **Vite** for lightning-fast builds and HMR
- Optimized asset loading and code splitting
- SEO-friendly HTML structure with proper meta tags
- Deployed on **Vercel** with global CDN

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Frontend Framework** | React 19 |
| **Language** | TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **Backend / DB** | Supabase |
| **Deployment** | Vercel |
| **Package Manager** | npm / bun |
| **Linting** | ESLint |

---

## 📁 Project Structure

```
Bhanu-portfolio/
├── .github/                    # GitHub Actions workflows
├── public/                     # Static assets (favicon, images, icons)
├── src/
│   ├── assets/                 # Images, SVGs, and media
│   ├── components/             # Reusable UI components
│   │   ├── Header.tsx          # Navigation bar
│   │   ├── Footer.tsx          # Footer with links
│   │   ├── Hero.tsx            # Landing hero section
│   │   ├── About.tsx           # About me section
│   │   ├── Skills.tsx          # Tech stack display
│   │   ├── Projects.tsx        # Project cards grid
│   │   ├── OpenSource.tsx      # GitHub stats & achievements
│   │   └── Contact.tsx         # Contact form
│   ├── App.tsx                 # Root component & routing
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles
├── supabase/                   # Supabase config & migrations
├── index.html                  # HTML entry point
├── tailwind.config.ts          # Tailwind configuration
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript config
├── package.json                # Dependencies & scripts
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** v18 or higher — [Download](https://nodejs.org/)
- **npm** v9+ or **bun** — Bundled with Node.js
- A **Supabase** account (for the contact form backend)

### 1. Clone the Repository

```bash
git clone https://github.com/Bhanu99517/Bhanu-portfolio.git
cd Bhanu-portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
bun install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Fill in your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

> ⚠️ Never commit your `.env` file — it's already in `.gitignore`.

### 4. Start the Development Server

```bash
npm run dev
```

Open **http://localhost:5173** in your browser 🎉

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| **Dev server** | `npm run dev` | Start Vite dev server with HMR |
| **Build** | `npm run build` | Compile TypeScript + bundle for production |
| **Preview** | `npm run preview` | Serve the production `dist/` build locally |
| **Lint** | `npm run lint` | Run ESLint across the codebase |

---

## 🌐 Deployment

This portfolio is deployed on **Vercel** with automatic deployments on every push to `main`.

### Deploy Your Own Fork

1. Fork this repository
2. Go to [vercel.com](https://vercel.com) and import your forked repo
3. Add your environment variables in the Vercel dashboard
4. Click **Deploy** — done! ✅

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

**Live URL:** [bhanutechlab.vercel.app](https://bhanutechlab.vercel.app)

---

## 🏆 GitHub Achievements

<div align="center">

| Achievement | Description |
|---|---|
| 🦈 **Pull Shark ×2** | Merged multiple pull requests |
| ⭐ **Starstruck** | Repository received 16+ stars |
| 👥 **Pair Extraordinaire** | Co-authored commits with collaborators |
| 🧠 **Galaxy Brain ×2** | Discussion answers marked as solutions |
| 🎯 **YOLO** | Merged a PR without a code review |
| ⚡ **Quickdraw** | Closed an issue or PR within 5 minutes |

</div>

---

## 📬 Contact

Feel free to reach out for collaborations, freelance work, or just to say hi!

| Platform | Link |
|---|---|
| 🌐 **Portfolio** | [bhanutechlab.vercel.app](https://bhanutechlab.vercel.app) |
| 📧 **Email** | [bhanu99517@gmail.com](mailto:bhanu99517@gmail.com) |
| 💼 **LinkedIn** | [g-bhanu-prakash-18a476340](https://www.linkedin.com/in/g-bhanu-prakash-18a476340) |
| 🐦 **X (Twitter)** | [@bhanu9951](https://www.x.com/bhanu9951) |
| 📸 **Instagram** | [_g_bhanu_prakash_](https://www.instagram.com/_g_bhanu_prakash_) |
| 🐙 **GitHub** | [Bhanu99517](https://github.com/Bhanu99517) |

---

## 💖 Support

If you like this project or found it helpful:

- ⭐ **Star this repository** — it means a lot!
- ☕ [Buy Me a Coffee](https://buymeacoffee.com/bhanu99517)
- 🍵 [Ko-fi](https://ko-fi.com/bhanu99517)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for full details.

```
MIT License — Copyright (c) 2024 G Bhanu Prakash
Free to use, modify, and distribute with attribution.
```

---

<div align="center">

Made with ❤️ by **[Bhanu Prakash](https://github.com/Bhanu99517)**

*ECE Engineer · Full Stack Developer · Open Source Enthusiast*

[![GitHub](https://img.shields.io/badge/Follow_on_GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Bhanu99517)

</div>
