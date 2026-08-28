import { BrowserIcon, LayersIcon, CpuIcon } from "./icons";
import SectionEyebrow from "./SectionEyebrow";

const SERVICES = [
    {
        icon: BrowserIcon,
        title: "Web Development",
        description:
            "Responsive, accessible websites and web apps built with modern frameworks and clean, maintainable code.",
    },
    {
        icon: LayersIcon,
        title: "Software Development",
        description:
            "End-to-end application development — from planning and architecture to deployment and support.",
    },
    {
        icon: CpuIcon,
        title: "Software Engineering",
        description:
            "Robust, scalable systems designed with sound engineering practices, testing, and long-term maintainability in mind.",
    },
];

export default function Services() {
    return (
        <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 border-b border-zinc-900 px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionEyebrow index="04" label="Services" />
                <h2 id="services-heading" className="mt-3 font-mono text-4xl font-bold text-zinc-100 sm:text-5xl">
                    What I can help with
                </h2>
                <p className="mt-4 max-w-2xl font-sans text-zinc-400">
                    Here is the tech stack I have used throughout my career.
                </p>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map(({ icon: Icon, title, description }) => (
                        <div
                            key={title}
                            className="group rounded-xl border border-zinc-800 bg-zinc-900/30 p-7 transition-colors hover:border-cyan-400/40"
                        >
                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 text-cyan-400 transition-colors group-hover:border-cyan-400/40">
                                <Icon className="h-5 w-5" />
                            </span>
                            <h3 className="mt-5 font-mono text-lg font-bold text-zinc-100">{title}</h3>
                            <p className="mt-3 font-sans text-sm leading-relaxed text-zinc-400">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}