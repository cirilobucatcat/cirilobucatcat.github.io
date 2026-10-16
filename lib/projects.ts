export type Project = {
    slug: string;
    name: string;
    description: string;
    summary: string;
    tags: string[];
    stack: string[];
    features: string[];
    role: string;
    year: string;
    liveUrl?: string;
    repoUrl?: string;
    image: StaticImageData;
    imageAlt: string;
    gallery: { src: string; alt: string }[];
};

import weakChatMain from '@/public/weakchat/main.png'
import { StaticImageData } from 'next/image';

export const PROJECTS: Project[] = [
    {
        slug: "charlotte",
        name: "Charlotte — Case Study",
        description:
            "An online storefront for a made-to-order pâtisserie Concept project · UI/UX design, design system and front-end architecture",
        summary:
            "Charlotte is a made-to-order cake shop for signature cakes, petits gâteaux, gift boxes and custom celebration cakes, for collection or delivery. The brief was to design the online experience around one brand colour, #ED96D7, taking cues from a cake-shop landing page on Dribbble. The result is an editorial storefront on a warm cream ground: a refined serif with one italic accent word per headline, quiet uppercase labels, hairlines instead of shadows, and the brand pink used as large, confident fields. Every product sits inside an arch. I took the design through three visual directions, then turned the chosen one into a working prototype, a handoff spec for a Next.js build, and a reusable design system.",
        tags: ["E-commerce", "Full-stack"],
        stack: ["Next.js", "TypeScript", "Supabase", "Vite", "TailwindCSS"],
        features: [
            "Coming soon",
        ],
        role: "Solo developer",
        year: "2026",
        liveUrl: "https://charlotte-jade-psi.vercel.app/",
        repoUrl: "https://github.com/cirilobucatcat/charlotte",
        image: weakChatMain,
        imageAlt: "Preview of the Charlotte interface",
        gallery: [],
    },,
    {
        slug: "weakchat",
        name: "WeakChat: Building a Chat App That Doesn't Lie to Its Users",
        description:
            "A case study on designing a lightweight, offline-first, end-to-end encrypted messenger from scratch.",
        summary:
            "WeakChat is an offline-first, end-to-end encrypted chat app for web and mobile, built as a Progressive Web App with React and Firebase.",
        tags: ["Real-time", "Chat", "Full-stack"],
        stack: ["React 19", "TypeScript", "Firebase", "PWA", "Vite", "TailwindCSS", "Web Crypto API"],
        features: [
            "End-to-end encrypted 1:1 conversations by default — no opt-in toggle, no plaintext fallback",
            "Offline-First & PWA: Installable on desktop and mobile",
            "Multi-Device Support: Link a new device to an existing account with a short, human-typeable session code",
            "Responsive layout spanning phone to laptop widths from a single codebase"
        ],
        role: "Solo developer",
        year: "2026",
        liveUrl: "https://offline-first-chat.vercel.app/",
        repoUrl: "https://github.com/cirilobucatcat/offline-first-chat",
        image: weakChatMain,
        imageAlt: "Preview of the WeakChat interface",
        gallery: [],
    },
];

export function getProjectBySlug(slug: string) {
    return PROJECTS.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
    const index = PROJECTS.findIndex((project) => project.slug === slug);
    const previous = index > 0 ? PROJECTS[index - 1] : PROJECTS[PROJECTS.length - 1];
    const next = index < PROJECTS.length - 1 ? PROJECTS[index + 1] : PROJECTS[0];
    return { previous, next };
}