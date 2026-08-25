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
        name: "WeakChat",
        description:
            "A real-time messaging app built to stay fast and simple — instant delivery, clean threads, and an interface that gets out of the way.",
        summary:
            "WeakChat is a real-time messaging app focused on speed and clarity over feature bloat. Messages sync instantly across devices, threads stay readable even in busy group chats, and the whole interface is built to disappear so people can focus on the conversation, not the app.",
        tags: ["Real-time", "Chat", "Full-stack"],
        stack: ["Next.js", "TypeScript", "Firebase", "PWA"],
        features: [
            "Instant message delivery with optimistic UI updates",
            "Threaded replies that stay readable in busy channels",
            "Presence indicators showing who's online and typing",
            "Responsive layout that works from phone to widescreen",
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
    {
        slug: "taskflow",
        name: "TaskFlow",
        description:
            "A Kanban-style task manager for small teams — drag-and-drop boards, live sync, and just enough structure to stay organized.",
        summary:
            "TaskFlow gives small teams a Kanban board without the overhead of a full project-management suite. Boards sync live across everyone viewing them, and the structure stays intentionally simple: columns, cards, and due dates — nothing that gets in the way of actually doing the work.",
        tags: ["Productivity", "Kanban", "Web App"],
        stack: ["React", "TypeScript", "Node.js", "Redis"],
        features: [
            "Drag-and-drop boards with live multi-user sync",
            "Per-card due dates, labels, and checklists",
            "Keyboard shortcuts for fast card creation and triage",
            "Offline-friendly with automatic sync on reconnect",
        ],
        role: "Solo developer",
        year: "2024",
        liveUrl: "#",
        repoUrl: "#",
        image: "https://placehold.co/640x400/18181b/22d3ee?text=TaskFlow",
        imageAlt: "Preview of the TaskFlow interface",
        gallery: [
            { src: "https://placehold.co/800x500/18181b/71717a?text=Board+view", alt: "TaskFlow board view" },
            { src: "https://placehold.co/800x500/18181b/71717a?text=Card+detail", alt: "TaskFlow card detail" },
        ],
    },
    {
        slug: "devmetrics",
        name: "DevMetrics",
        description:
            "A lightweight analytics dashboard that turns raw usage data into clear, readable charts teams actually check.",
        summary:
            "DevMetrics takes raw product usage data and turns it into a dashboard people actually open. The focus is on a handful of charts that matter, fast load times, and readable numbers over dense, cluttered views that end up ignored.",
        tags: ["Dashboard", "Analytics", "Data Viz"],
        stack: ["Next.js", "TypeScript", "D3", "PostgreSQL"],
        features: [
            "Configurable charts for the metrics that matter most",
            "Daily, weekly, and monthly rollups with trend comparisons",
            "Shareable dashboard links for stakeholders",
            "Sub-second load times on large datasets",
        ],
        role: "Solo developer",
        year: "2024",
        liveUrl: "#",
        repoUrl: "#",
        image: "https://placehold.co/640x400/18181b/22d3ee?text=DevMetrics",
        imageAlt: "Preview of the DevMetrics interface",
        gallery: [
            { src: "https://placehold.co/800x500/18181b/71717a?text=Overview+dashboard", alt: "DevMetrics overview dashboard" },
            { src: "https://placehold.co/800x500/18181b/71717a?text=Trend+chart", alt: "DevMetrics trend chart" },
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