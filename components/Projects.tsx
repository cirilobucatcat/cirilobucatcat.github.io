import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import Section from "./Section";
import { PROJECTS } from "../lib/projects";

export default function Projects() {
    const [featured, ...others] = PROJECTS;
    const count = PROJECTS.length;

    return (
        <Section id="projects" title="Things I've built and shipped" command="ls ./projects --featured">
            <FeaturedProject project={featured} />

            {others.length > 0 && (
                <ul className="flex flex-wrap gap-6">
                    {others.map((project, i) => (
                        <li key={project.slug} className="flex min-w-0 flex-[1_1_380px]">
                            <ProjectCard project={project} position={i + 2} />
                        </li>
                    ))}
                </ul>
            )}

            <p className="text-body-sm text-ink-muted">
                <span className="text-signal" aria-hidden="true">
                    ✓
                </span>{" "}
                {count} {count === 1 ? "project" : "projects"} listed{" "}
                <span className="text-amber" aria-hidden="true">
                    ·
                </span>{" "}
                more case studies in progress
            </p>
        </Section>
    );
}
