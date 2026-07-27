<div align="center">

# Minimalist CV (ATS Friendly)

**A resume that's fully interactive on the web and switches to a clean ATS-friendly document the moment you print it.**

<img src="https://github.com/user-attachments/assets/dd7290dc-ae67-4795-96fc-72d7d81fb662" width="100%" alt="Minimalist CV preview" />

<br />

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTheLinuxGuy-ssh%2Fcv)

[![Next.js](https://img.shields.io/badge/Next.js-16-ffffff?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-ffffff?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-ffffff?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/github/license/thelinuxguy-ssh/cv?style=for-the-badge&color=ffffff&labelColor=0c0c0e)](./LICENSE)
[![Stars](https://img.shields.io/github/stars/thelinuxguy-ssh/cv?style=for-the-badge&color=ffffff&labelColor=0c0c0e)](https://github.com/thelinuxguy-ssh/cv/stargazers)

</div>

<br />

Simple web app that renders a minimalist CV with an ATS-friendly layout. The web version is fully interactive, every project link opens in a new tab. Print it and it switches to a clean, structured document instead, no icons, no columns, nothing an ATS parser can't read.

All resume content lives in a single file. Edit `resume-data.ts`, everything else updates itself.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Docker](#docker)
- [License](#license)

---

## Getting Started

```bash
git clone https://github.com/thelinuxguy-ssh/cv.git
cd cv
npm install
npm run dev
# open http://localhost:3000
# edit src/data/resume-data.ts to customize
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | start development server |
| `npm run build` | build for production |
| `npm run lint` | run biome linting checks |
| `npm run check` | run both linting and formatting checks |
| `npm run check:fix` | run both linting and formatting with auto-fix |
| `npm run format` | check code formatting with biome |
| `npm run format:fix` | format code with biome |

---

## Project Structure

```
src/
├── public/
│   └── profile.png      # profile photo
├── app/                 # next.js app router
│   ├── components/      # page-level components
│   │   ├── education.tsx
│   │   ├── header.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   ├── summary.tsx
│   │   └── work-experience.tsx
│   ├── favicon.ico
│   ├── layout.tsx       # root layout with metadata
│   └── page.tsx         # main resume page
│
├── components/          # shared components
│   ├── icons/            # social icon components
│   └── ui/                # shadcn/ui components
├── data/                 # resume data configuration
│   └── resume-data.ts
└── lib/                  # utilities and types
    ├── structured-data.ts
    ├── types.ts
    └── utils.ts
```

---

## Customization

All resume content lives in a single file.

```typescript
// src/data/resume-data.ts
export const RESUME_DATA = {
  name: "Your Name",
  initials: "YN",
  location: "Your City, Country",
  about: "Brief description",
  summary: "Professional summary",
  // ... more fields
}
```

Styling uses Tailwind CSS — customize colors in `tailwind.config.js` and global styles in `src/app/globals.css`.

---

## Docker

```bash
docker compose build     # build the container
docker compose up -d     # run the container
docker compose down      # stop the container
```

---

## License

<div align="center">

**MIT** — see [`LICENSE`](./LICENSE) for details.

</div>
