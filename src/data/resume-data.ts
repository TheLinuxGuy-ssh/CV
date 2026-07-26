import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Jordan Rivera",
  initials: "JR",
  location: "Remote",
  locationLink: "",
  baseUrl: "https://cv.example.com",
  about:
    "Full-Stack Developer and Founder building developer tools and cloud infrastructure.",
  summary:
    "Full-stack developer and founder with 6+ years of experience in React, Next.js, and TypeScript. Built a mobile platform with real-time video (LiveKit/WebRTC) for 1,500+ concurrent users. Built a B2B infrastructure platform combining Kubernetes with an automated control plane. Delivered 20+ freelance projects across four countries.",
  avatarUrl: "profile.png",
  personalWebsiteUrl: "https://example.dev",
  contact: {
    email: "jordan@example.com",
    tel: "+15550100",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jordanrivera-dev",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jordanrivera-dev",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "State University",
      degree: "Bachelor of Technology in Computer Science (Core)",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Acme Labs",
      link: "https://acmelabs.example.com",
      badges: ["React Native", "Next.js", "Supabase", "LiveKit", "TypeScript"],
      title: "Founder & Full-Stack Developer",
      start: "2023",
      end: null,
      description:
        "Founder of an open-source, ambient co-presence social platform for developers. Spans a React Native mobile app and a Next.js web app on a self-hosted backend.",
      highlights: [
        "Engineered a ~19,000-line React Native/Expo production app with LiveKit-powered peer-to-peer video calling",
        "Designed and shipped a polymorphic posts system and real-time social feed across the mobile and web apps",
        "Self-hosted the entire backend — Supabase, mailcow, and LiveKit — cutting all third-party SaaS dependence",
        "Load-tested the platform at ~1,500 concurrent users with no performance degradation",
      ],
    },
    {
      company: "Nimbus Cloud",
      link: "https://github.com/nimbus-cloud-example",
      badges: ["Infrastructure", "Kubernetes", "LLM Tooling", "TypeScript"],
      title: "Founder & Full-Stack Developer",
      start: "2023",
      end: null,
      description:
        "Founder of a B2B infrastructure platform combining Kubernetes with an automated control plane for datacenter operations.",
      highlights: [
        "Architected a certificate control node automating mTLS renewal across 20+ nodes and 50+ services",
        "Runs a 24-hour auto-renewal cycle, eliminating manual certificate tracking across the fleet",
        "Designed and validated automation tooling against live production infrastructure ahead of launch",
      ],
    },
    {
      company: "BrightPath AI",
      link: "",
      badges: ["React", "Next.js", "Firebase", "Gmail API", "TypeScript"],
      title: "Senior Full-Stack Developer",
      start: "2021",
      end: null,
      description:
        "Senior developer building internal tools that automate client communication and project tracking for creative agencies.",
      highlights: [
        "Developed a React/Next.js/Firebase dashboard that auto-drafts email replies for team review",
        "Processes 1,000+ client emails per day to keep drafts and timelines current",
        "Automated project timeline updates from inbound client emails, cutting manual data entry to zero",
        "Owned the email-parsing and reply-suggestion pipeline end-to-end, from ingestion through UI",
      ],
    },
    {
      company: "Freelance",
      link: "https://example.dev",
      badges: [
        "Remote",
        "React",
        "Next.js",
        "TypeScript",
        "Full-Stack Development",
      ],
      title: "Freelance Full-Stack Developer",
      start: "2019",
      end: null,
      description:
        "Full-stack web development and consulting for clients across four countries.",
      highlights: [
        "Delivered 20+ full-stack web projects across four countries, owning scope, architecture, and deployment end-to-end",
        "Optimized media delivery with FFmpeg, cutting First Contentful Paint to ~0.4s",
        "Lighthouse scores reached 90–100 after the optimization",
      ],
    },
  ],
  skills: [
    "React / Next.js",
    "TypeScript",
    "React Native / Expo",
    "Node.js",
    "Svelte",
    "CSS / Tailwind",
    "PostgreSQL / Supabase",
    "Firebase",
    "Redis",
    "LiveKit / WebRTC",
    "Docker / Nginx",
    "Kubernetes",
    "CI/CD (GitHub Actions)",
    "Linux / Systems Administration",
    "mTLS / PKI",
    "System Architecture",
  ],
  projects: [
    {
      title: "PixelDesk",
      techStack: ["TypeScript", "React", "Browser-based"],
      description:
        "Browser-based desktop-OS environment simulator. Top 5 finish, example hackathon 2025.",
      highlights: [
        "Implemented a custom window manager with drag, z-index stacking, and minimize/maximize at 60fps",
        "Created 10+ simulated apps including a file browser, terminal, and chess game",
        "Shipped a full desktop shell with glassmorphism styling rendered entirely in the browser",
      ],
      link: {
        label: "GitHub",
        href: "https://github.com/jordanrivera-dev/pixeldesk",
      },
    },
    {
      title: "DotfilesKit",
      techStack: ["Shell", "Hyprland", "Arch Linux"],
      description:
        "Documented Linux desktop configuration and install tooling.",
      highlights: [
        "Wrote a Bash installer for a full desktop setup, covering AUR packages, 30+ apps, theming, and config backup",
        "Added tiered install options so users choose what they need instead of installing everything at once",
      ],
      link: {
        label: "GitHub",
        href: "https://github.com/jordanrivera-dev/dotfileskit",
      },
    },
    {
      title: "TabStart",
      techStack: ["TypeScript", "Next.js", "HTML/CSS"],
      description:
        "Terminal-driven browser start page with a live configuration and theming engine.",
      highlights: [
        "Developed a command-driven config system with theme switching and remote config import",
        "Implemented a command handler with autocomplete and configurable search shortcuts",
        "Created a live JSON editor for editing config directly in the browser",
      ],
      link: {
        label: "GitHub",
        href: "https://github.com/jordanrivera-dev/tabstart",
      },
    },
  ],
} as const;
