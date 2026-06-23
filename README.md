# Tanushree Shahapurmath — Portfolio

Multi-page recruiter-ready portfolio built with React, Vite, Tailwind CSS, React Router DOM, Framer Motion, and React Icons.

## Tech stack
- React 18 + Vite
- Tailwind CSS 3 (custom dark theme: `#0F172A` background, `#1E293B` cards, `#8B5CF6` primary, `#06B6D4` accent)
- React Router DOM (client-side routing, 6 pages)
- Framer Motion (page/element animations, animated nav pill, animated skill bars)
- React Icons (social + UI icons)

## Pages
- `/` — Home (hero, about preview, featured skills, featured projects)
- `/about` — About (career objective, education, strengths, resume download)
- `/skills` — Skills (categorized cards with animated progress bars)
- `/experience` — Experience (timeline: Armtronix IoT, Nayoda)
- `/projects` — Projects (SkillSphere, SkinInsight, GoParky)
- `/contact` — Contact (info cards + styled form)

## Getting started

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (typically `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

Output goes to `dist/`. Deploy that folder to Netlify, Vercel, GitHub Pages, or any static host.

## Things to customize before going live

1. **Resume**: add your actual `resume.pdf` to the `public/` folder — the Download Resume buttons link to `/resume.pdf`.
2. **Social links**: update GitHub/LinkedIn URLs in `src/components/Footer.jsx` and `src/pages/Home.jsx`.
3. **Project links**: update `github` / `demo` URLs in `src/data/content.js`.
4. **Contact form**: the form in `src/pages/Contact.jsx` is currently front-end only. Wire it up to a service like Formspree, EmailJS, or your own backend endpoint to receive real submissions.
5. **Profile photo**: the hero currently shows initials in a gradient circle (`src/pages/Home.jsx`) — swap in a real photo if you'd like.

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── PageHeader.jsx
│   └── ScrollToTop.jsx
├── data/
│   └── content.js        # skills, experience, projects data
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```
