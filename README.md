<img width="2090" height="3316" alt="screencapture-cv-bbe2-vercel-app-2026-07-26-12_33_31" src="https://github.com/user-attachments/assets/dd7290dc-ae67-4795-96fc-72d7d81fb662" />

<h1>Minimalist CV (ATS Friendly)<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTheLinuxGuy-ssh%2Fcv"><img src="https://vercel.com/button" alt="Deploy with Vercel" height="24" align="right"></a></h1>

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

Simple web app that renders a minimalist CV with ATS-friendly layout.

## getting started

```bash
git clone https://github.com/thelinuxguy-ssh/cv.git
cd cv
npm install
npm run dev
# open http://localhost:3000
# edit src/data/resume-data.ts to customize
```

## scripts

```bash
npm run dev                 # start development server
npm run build               # build for production
npm run lint                # run biome linting checks
npm run check               # run both linting and formatting checks
npm run check:fix           # run both linting and formatting with auto-fix
npm run format              # check code formatting with biome
npm run format:fix          # format code with biome
```

## project structure

```
src/
├──public/
│  └── profile.png      # profile photo

├── app/                # next.js app router
│   ├── components/     # page-level components
│   │   ├── education.tsx
│   │   ├── header.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   ├── summary.tsx
│   │   └── work-experience.tsx
│   ├── favicon.ico
│   ├── layout.tsx      # root layout with metadata
│   └── page.tsx        # main resume page
    
├── components/         # shared components
│   ├── icons/          # social icon components
│   └── ui/             # shadcn/ui components
├── data/               # resume data configuration
│   └── resume-data.ts
└── lib/                # utilities and types
    ├── structured-data.ts
    ├── types.ts
    └── utils.ts
```

## customization

All resume content lives in a single file:

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

styling uses tailwind css — customize colors in `tailwind.config.js` and global styles in `src/app/globals.css`.

## docker

```bash
docker compose build     # build the container
docker compose up -d     # run the container
docker compose down      # stop the container
```

## license

MIT