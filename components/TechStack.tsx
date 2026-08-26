import {
    Braces,
    Layers,
    Terminal,
    Atom,
    Component,
    Palette,
    Server,
    Database,
    Globe,
    GitBranch,
    Container,
    type LucideIcon,
    Brush,
} from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";

type StackItem = {
    name: string;
    icon: LucideIcon;
};

type StackCategory = {
    label: string;
    items: StackItem[];
};

const STACK: StackCategory[] = [
    {
        label: "Languages",
        items: [
            { name: "JavaScript", icon: Braces },
            { name: "TypeScript", icon: Layers },
            { name: "Python", icon: Terminal },
        ],
    },
    {
        label: "Frontend",
        items: [
            { name: "Vue.js", icon: Atom },
            { name: "React", icon: Atom },
            { name: "Next.js", icon: Component },
            { name: "Tailwind CSS", icon: Palette },
        ],
    },
    {
        label: "Backend & data",
        items: [
            { name: "Node.js", icon: Server },
            { name: "Laravel", icon: Server },
            { name: "PostgreSQL", icon: Database },
            { name: "MySQL", icon: Database },
            { name: "REST APIs", icon: Globe },
        ],
    },
    {
        label: "Tooling",
        items: [
            { name: "Git", icon: GitBranch },
            { name: "Docker", icon: Container },
            { name: "Figma", icon: Brush },
        ],
    },
];

export default function TechStack() {
    return (
        <section id="stack" aria-labelledby="stack-heading" className="scroll-mt-20 border-b border-zinc-900 px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionEyebrow index="03" label="Tech Stack" />
                <h2 id="stack-heading" className="mt-3 font-mono text-4xl font-bold text-zinc-100 sm:text-5xl">
                    Tools I build with
                </h2>
                <p className="mt-4 max-w-2xl font-sans text-zinc-400">
                    Update this list to match what you actually use day to day.
                </p>

                <div className="mt-14 space-y-10">
                    {STACK.map((category) => (
                        <div key={category.label}>
                            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-600">{category.label}</h3>
                            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                {category.items.map(({ name, icon: Icon }) => (
                                    <li
                                        key={name}
                                        className="group flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/30 px-4 py-3 transition-colors hover:border-cyan-400/40"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-zinc-800 text-cyan-400 transition-colors group-hover:border-cyan-400/40"
                                        >
                                            <Icon className="h-4 w-4" strokeWidth={1.75} />
                                        </span>
                                        <span className="font-sans text-sm text-zinc-300">{name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}