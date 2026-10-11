import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Figure, SectionHeader, SpecCard, SpecRow, TextLink } from "../../../components/blueprint";
import { PROJECTS, getProjectBySlug, getAdjacentProjects } from "../../../lib/projects";
import { SITE, jsonLd } from "../../../lib/site";

type PageParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return {};

    const image = {
        url: project.image.src,
        width: project.image.width,
        height: project.image.height,
        alt: project.imageAlt,
    };

    return {
        title: project.name,
        description: project.description,
        alternates: { canonical: `/projects/${project.slug}` },
        openGraph: {
            type: "article",
            locale: "en_US",
            url: `/projects/${project.slug}`,
            siteName: SITE.name,
            title: `${project.name} — ${SITE.name}`,
            description: project.description,
            images: [image],
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.name} — ${SITE.name}`,
            description: project.description,
            images: [image],
        },
    };
}

export default async function ProjectDetailPage({ params }: PageParams) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();

    const url = `${SITE.url}/projects/${project.slug}`;
    const { previous, next } = getAdjacentProjects(project.slug);

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
                    { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE.url}/#projects` },
                    { "@type": "ListItem", position: 3, name: project.name, item: url },
                ],
            },
            {
                "@type": "CreativeWork",
                "@id": `${url}#project`,
                url,
                name: project.name,
                headline: project.name,
                description: project.description,
                abstract: project.summary,
                image: `${SITE.url}${project.image.src}`,
                dateCreated: project.year,
                keywords: [...project.tags, ...project.stack].join(", "),
                inLanguage: "en",
                author: { "@type": "Person", "@id": `${SITE.url}/#person`, name: SITE.name, url: SITE.url },
            },
        ],
    };

    return (
        <main id="main-content" className="flex-1">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />

            <article className="site-container flex flex-col gap-8 pt-14 pb-(--space-section)">
                <nav aria-label="Breadcrumb" className="text-body-sm text-ink-muted">
                    <ol className="flex flex-wrap items-center gap-x-1">
                        <li>
                            <Link href="/" className="text-amber hover:text-ink">
                                ~<span className="sr-only"> home</span>
                            </Link>
                        </li>
                        <li aria-hidden="true">/</li>
                        <li>
                            <Link href="/#projects" className="text-ink-secondary hover:text-amber">
                                projects
                            </Link>
                        </li>
                        <li aria-hidden="true">/</li>
                        <li aria-current="page" className="text-ink">
                            {project.slug}
                        </li>
                    </ol>
                </nav>

                <SectionHeader as="h1" label="Case study" title={project.name} command={`cat ./projects/${project.slug}/README.md`} />

                <p className="max-w-175 text-body-lg text-ink-secondary">{project.description}</p>

                <div className="flex flex-col gap-1">
                    <SpecCard as="dl" lift={false} surface="window" className="max-w-190 px-4.5 py-1.5">
                        <SpecRow label="Role">{project.role}</SpecRow>
                        <SpecRow label="Year">
                            <time dateTime={project.year}>{project.year}</time>
                        </SpecRow>
                        <SpecRow label="Stack">{project.stack.join(" · ")}</SpecRow>
                    </SpecCard>

                    {(project.liveUrl || project.repoUrl) && (
                        <p className="flex flex-wrap gap-x-5 gap-y-1">
                            {project.liveUrl && (
                                <TextLink href={project.liveUrl} arrow="↗">
                                    live demo
                                </TextLink>
                            )}
                            {project.repoUrl && (
                                <TextLink href={project.repoUrl} variant="quiet" arrow="↗">
                                    source
                                </TextLink>
                            )}
                        </p>
                    )}
                </div>

                <SpecCard lift={false}>
                    <Figure
                        label="Fig. 01"
                        image={project.image}
                        alt={project.imageAlt}
                        eager
                        sizes="(min-width: 1248px) 1152px, 100vw"
                        className="min-h-0"
                        style={{ aspectRatio: `${project.image.width} / ${project.image.height}` }}
                    />
                </SpecCard>

                <section aria-labelledby="overview-heading" className="flex flex-col gap-3">
                    <h2 id="overview-heading" className="type-heading-card">
                        Overview
                    </h2>
                    <p className="max-w-175 text-body text-ink-secondary">{project.summary}</p>
                </section>

                <section aria-labelledby="features-heading" className="flex flex-col gap-3">
                    <h2 id="features-heading" className="type-heading-card">
                        Key features
                    </h2>
                    <ul className="tb-diff">
                        {project.features.map((feature) => (
                            <li key={feature} className="tb-diff-line">
                                <span className="tb-diff-sign" aria-hidden="true">
                                    +
                                </span>
                                <span className="tb-diff-text">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {project.gallery.length > 0 && (
                    <section aria-labelledby="gallery-heading" className="flex flex-col gap-3">
                        <h2 id="gallery-heading" className="type-heading-card">
                            Gallery
                        </h2>
                        <ul className="flex flex-wrap gap-5">
                            {project.gallery.map((image) => (
                                <li key={image.src} className="min-w-0 flex-[1_1_380px]">
                                    <figure className="tb-figure aspect-8/5 min-h-0 border border-line-card">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            sizes="(min-width: 840px) 50vw, 100vw"
                                            className="tb-figure-img"
                                        />
                                    </figure>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {PROJECTS.length > 1 && (
                    <nav aria-label="More projects" className="flex flex-wrap justify-between gap-x-6 border-t border-line-rule pt-4">
                        <TextLink href={`/projects/${previous.slug}`} variant="quiet">
                            previous: {previous.name}
                        </TextLink>
                        <TextLink href={`/projects/${next.slug}`} arrow>
                            next: {next.name}
                        </TextLink>
                    </nav>
                )}
            </article>
        </main>
    );
}
