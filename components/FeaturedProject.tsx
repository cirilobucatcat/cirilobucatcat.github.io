import { Figure, SpecCard, SpecRow, Tag, TextLink } from "./blueprint";
import type { Project } from "../lib/projects";

/** The first project, drawn large. The hero diagram is Fig. 01, so this is Fig. 02. */
export default function FeaturedProject({ project }: { project: Project }) {
    return (
        <SpecCard as="article" className="flex flex-wrap">
            <Figure
                label="Fig. 02 · Featured"
                image={project.image}
                alt={project.imageAlt}
                sizes="(min-width: 1024px) 660px, 100vw"
                className="aspect-2/1 min-h-0 min-w-0 flex-[1.3_1_440px] border-r border-b border-line-dash lg:aspect-auto lg:min-h-85"
            />

            <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-4.5 p-8">
                <ul className="flex flex-wrap gap-2" aria-label="Project type">
                    <li>
                        <Tag tone="amber">Featured</Tag>
                    </li>
                    {project.tags.map((tag) => (
                        <li key={tag}>
                            <Tag>{tag}</Tag>
                        </li>
                    ))}
                </ul>

                <h3 className="type-heading-feature">{project.name}</h3>
                <p className="text-body text-ink-secondary">{project.description}</p>

                <dl>
                    <SpecRow label="Stack">{project.stack.join(" · ")}</SpecRow>
                    <SpecRow label="Role">{project.role}</SpecRow>
                    <SpecRow label="Year">{project.year}</SpecRow>
                </dl>

                <p className="mt-auto flex flex-wrap gap-x-5 gap-y-1">
                    <TextLink href={`/projects/${project.slug}`} arrow>
                        case study<span className="sr-only">: {project.name}</span>
                    </TextLink>
                    {project.liveUrl && (
                        <TextLink href={project.liveUrl} variant="quiet" arrow="↗">
                            live demo
                        </TextLink>
                    )}
                    {project.repoUrl && (
                        <TextLink href={project.repoUrl} variant="quiet" arrow="↗">
                            source
                        </TextLink>
                    )}
                </p>
            </div>
        </SpecCard>
    );
}
