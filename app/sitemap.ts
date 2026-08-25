import type { MetadataRoute } from "next";
import { PROJECTS } from "../lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://cirilobucatcat.github.io";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        ...PROJECTS.map((project) => ({
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
    ];
}