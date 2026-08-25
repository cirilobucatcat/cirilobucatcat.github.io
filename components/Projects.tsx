import SectionEyebrow from "./SectionEyebrow";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../lib/projects";

export default function Projects() {
    return (
        <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-20 border-b border-zinc-900 px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionEyebrow index="02" label="Projects" />
                <h2 id="projects-heading" className="mt-3 font-mono text-4xl font-bold text-zinc-100 sm:text-5xl">
                    Selected work
                </h2>
                <p className="mt-4 max-w-2xl font-sans text-zinc-400">
                    A look at what I&apos;ve been building. More case studies coming soon.
                </p>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.slug} project={project} index={index} total={PROJECTS.length} />
                    ))}
                </div>
            </div>
        </section>
    );
}