import type { Metadata } from "next";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Services from "../components/Services";
import Workflow from "../components/Workflow";
import Experience from "../components/Experience";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import { SITE, jsonLd } from "../lib/site";

export const metadata: Metadata = {
    alternates: { canonical: "/" },
};

const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": `${SITE.url}/#website`,
            url: SITE.url,
            name: SITE.name,
            description: SITE.description,
            inLanguage: "en",
            publisher: { "@id": `${SITE.url}/#person` },
        },
        {
            "@type": "Person",
            "@id": `${SITE.url}/#person`,
            name: SITE.name,
            url: SITE.url,
            jobTitle: SITE.role,
            email: `mailto:${SITE.email}`,
            sameAs: [SITE.github, SITE.linkedin],
            alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Leyte Normal University",
            },
            knowsAbout: [
                "JavaScript",
                "TypeScript",
                "Python",
                "PHP",
                "React",
                "Next.js",
                "Vue.js",
                "Tailwind CSS",
                "Node.js",
                "Laravel",
                "PostgreSQL",
                "MySQL",
                "MongoDB",
                "Docker",
                "LLM APIs",
            ],
        },
    ],
};

export default function Home() {
    return (
        <main id="main-content" className="flex-1">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
            <Hero />
            <Projects />
            <TechStack />
            <Services />
            <Workflow />
            <Experience />
            <Certificates />
            <Contact />
        </main>
    );
}
