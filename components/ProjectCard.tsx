import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";
import type { Project } from "../lib/projects";

export default function ProjectCard({
    project,
    index,
    total,
}: {
    project: Project;
    index: number;
    total: number;
}) {
    const position = String(index + 1).padStart(2, "0");
    const totalLabel = String(total).padStart(2, "0");

    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 transition-colors hover:border-cyan-400/40"
        >
            <div className="relative aspect-16/10 w-full overflow-hidden border-b border-zinc-800 bg-zinc-900">
                <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>

            <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-xs text-zinc-600">
                    {position} / {totalLabel}
                </span>
                <h3 className="mt-2 font-mono text-xl font-bold text-zinc-100">{project.name}</h3>
                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-zinc-400">{project.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Focus areas for ${project.name}`}>
                    {project.tags.map((tag) => (
                        <li key={tag} className="rounded-full border border-zinc-800 px-3 py-1 font-mono text-xs text-zinc-400">
                            {tag}
                        </li>
                    ))}
                </ul>

                <span className="mt-6 inline-flex items-center gap-2 font-mono text-sm font-semibold text-cyan-400">
                    View case study
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
            </div>
        </Link>
    );
}