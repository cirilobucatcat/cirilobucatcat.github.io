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
    image: string;
    imageAlt: string;
    gallery: { src: string; alt: string }[];
};

export const PROJECTS: Project[] = [
    {
        slug: "weakchat",
        name: "WeakChat: Building a Chat App That Doesn't Lie to Its Users",
        description:
            "A case study on designing a lightweight, offline-first, end-to-end encrypted messenger from scratch.",
        summary:
            "WeakChat is an offline-first, end-to-end encrypted chat app for web and mobile, built as a Progressive Web App with React and Firebase.",
        tags: ["Real-time", "Chat", "Full-stack"],
        stack: ["React 19", "TypeScript", "Firebase (Auth and Firestore", "PWA", "Vite", "TailwindCSS", "Web Crypto API"],
        features: [
            "End-to-end encrypted 1:1 conversations by default — no opt-in toggle, no plaintext fallback",
            "Offline-First & PWA: Installable on desktop and mobile",
            "Multi-Device Support: Link a new device to an existing account with a short, human-typeable session code",
            "Responsive layout spanning phone to laptop widths from a single codebase"
        ],
        role: "Solo developer",
        year: "2026",
        liveUrl: "#",
        repoUrl: "#",
        image: "https://placehold.co/640x400/18181b/22d3ee?text=WeakChat",
        imageAlt: "Preview of the WeakChat interface",
        gallery: [
            { src: "https://placehold.co/800x500/18181b/71717a?text=Conversation+view", alt: "WeakChat conversation view" },
            { src: "https://placehold.co/800x500/18181b/71717a?text=Mobile+layout", alt: "WeakChat mobile layout" },
        ],
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