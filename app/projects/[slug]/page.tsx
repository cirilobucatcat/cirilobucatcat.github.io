import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon, ExternalLinkIcon } from "../../../components/icons";
import { PROJECTS, getProjectBySlug, getAdjacentProjects } from "../../../lib/projects";

type PageParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return {};

    return {
        title: project.name,
        description: project.description,
        openGraph: {
            title: `${project.name} — Cirilo Bucatcat Jr.`,
            description: project.description,
            images: [{ url: project.image }],
        },
    };
}

export default async function ProjectDetailPage({ params }: PageParams) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();

    const { previous, next } = getAdjacentProjects(project.slug);

    return (
        <main id="main-content" className="px-5 pb-24 pt-32 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-cyan-400"
                >
                    <span className="text-cyan-400"> {"<<"} </span> Back
                </Link>

                <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">{"// case study"}</p>
                <h1 className="mt-3 font-mono text-4xl font-bold text-zinc-100 sm:text-5xl">{project.name}</h1>
                <p className="mt-4 max-w-2xl font-sans text-lg text-zinc-400">{project.description}</p>

                <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-zinc-900 py-6 sm:grid-cols-4">
                    <div>
                        <dt className="font-mono text-xs uppercase tracking-widest text-zinc-600">Role</dt>
                        <dd className="mt-1 font-sans text-sm text-zinc-300">{project.role}</dd>
                    </div>
                    <div>
                        <dt className="font-mono text-xs uppercase tracking-widest text-zinc-600">Year</dt>
                        <dd className="mt-1 font-sans text-sm text-zinc-300">{project.year}</dd>
                    </div>
                    <div>
                        <dt className="font-mono text-xs uppercase tracking-widest text-zinc-600">Stack</dt>
                        <dd className="mt-1 font-sans text-sm text-zinc-300">{project.stack.join(", ")}</dd>
                    </div>
                    <div>
                        <dt className="font-mono text-xs uppercase tracking-widest text-zinc-600">Links</dt>
                        <dd className="mt-1 flex flex-col gap-1 font-sans text-sm">
                            {project.liveUrl && (
                                <a href={project.liveUrl} className="inline-flex items-center gap-1.5 text-cyan-400 underline-offset-4 hover:underline">
                                    Live site <ExternalLinkIcon className="h-3.5 w-3.5" />
                                </a>
                            )}
                            {project.repoUrl && (
                                <a href={project.repoUrl} className="inline-flex items-center gap-1.5 text-cyan-400 underline-offset-4 hover:underline">
                                    Source <ExternalLinkIcon className="h-3.5 w-3.5" />
                                </a>
                            )}
                        </dd>
                    </div>
                </dl>

                <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                    <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 900px, 100vw"
                        className="object-cover"
                        priority
                    />
                </div>

                <section aria-labelledby="overview-heading" className="mt-14">
                    <h2 id="overview-heading" className="font-mono text-2xl font-bold text-zinc-100">
                        Overview
                    </h2>
                    <p className="mt-4 max-w-2xl font-sans leading-relaxed text-zinc-400">{project.summary}</p>
                </section>

                <section aria-labelledby="features-heading" className="mt-14">
                    <h2 id="features-heading" className="font-mono text-2xl font-bold text-zinc-100">
                        Key features
                    </h2>
                    <ul className="mt-4 space-y-3">
                        {project.features.map((feature) => (
                            <li key={feature} className="flex gap-3 font-sans text-zinc-400">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </section>

                {project.gallery.length > 0 && (
                    <section aria-labelledby="gallery-heading" className="mt-14">
                        <h2 id="gallery-heading" className="font-mono text-2xl font-bold text-zinc-100">
                            Gallery
                        </h2>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            {project.gallery.map((image) => (
                                <div key={image.src} className="relative aspect-[8/5] overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
                                    <Image src={image.src} alt={image.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <nav aria-label="More projects" className="mt-20 grid gap-4 border-t border-zinc-900 pt-10 sm:grid-cols-2">
                    <Link href={`/projects/${previous.slug}`} className="group rounded-xl border border-zinc-800 p-5 transition-colors hover:border-cyan-400/40">
                        <span className="font-mono text-xs uppercase tracking-widest text-zinc-600">Previous</span>
                        <span className="mt-2 block font-mono text-lg font-bold text-zinc-100">{previous.name}</span>
                    </Link>
                    <Link
                        href={`/projects/${next.slug}`}
                        className="group rounded-xl border border-zinc-800 p-5 text-right transition-colors hover:border-cyan-400/40"
                    >
                        <span className="font-mono text-xs uppercase tracking-widest text-zinc-600">Next</span>
                        <span className="mt-2 flex items-center justify-end gap-2 font-mono text-lg font-bold text-zinc-100">
                            {next.name}
                            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                    </Link>
                </nav>
            </div>
        </main>
    );
}