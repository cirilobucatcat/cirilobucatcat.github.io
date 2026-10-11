import { ChipList, Figure, SpecCard, TextLink } from "./blueprint";
import type { Project } from "../lib/projects";

/** A project in the grid under the featured one. `position` is its place in the full list, starting at 1. */
export default function ProjectCard({ project, position }: { project: Project; position: number }) {
    const number = String(position).padStart(2, "0");
    // The hero diagram is Fig. 01, so project figures start at 02.
    const figure = String(position + 1).padStart(2, "0");

    return (
        <SpecCard as="article" className="flex w-full flex-col">
            <Figure
                label={`Fig. ${figure}`}
                image={project.image}
                alt={project.imageAlt}
                sizes="(min-width: 1024px) 564px, 100vw"
                className="h-52.5 border-b border-line-card"
            />

            <div className="flex grow flex-col gap-3 p-6">
                <p className="flex justify-between gap-3 text-label tracking-[0.06em] text-ink-muted uppercase">
                    <span>Project {number}</span>
                    <span>{project.year}</span>
                </p>
                <h3 className="type-heading-card">{project.name}</h3>
                <p className="text-body-sm text-ink-secondary">{project.description}</p>
                <ChipList items={project.tags} label={`Focus areas for ${project.name}`} />
                <TextLink href={`/projects/${project.slug}`} arrow className="mt-auto self-start pb-0">
                    case study<span className="sr-only">: {project.name}</span>
                </TextLink>
            </div>
        </SpecCard>
    );
}
