import { EXPERIENCE } from "./experience";

export const SITE = {
    url: "https://cirilobucatcat.github.io",
    name: "Cirilo Bucatcat Jr.",
    handle: "cirilo-bucatcat",
    role: "Full-stack Web Developer",
    title: "Cirilo Bucatcat Jr. — Full-stack Web Developer",
    description:
        "Portfolio of Cirilo Bucatcat Jr., a full-stack web developer building end-to-end web applications with React, Next.js, Node.js and Laravel.",
    email: "bucatcat1999@gmail.com",
    github: "https://github.com/cirilobucatcat",
    linkedin: "https://www.linkedin.com/in/cirilo-bucatcat-jr",
    ogImage: "/og.png",
};

export type SectionId = "projects" | "stack" | "services" | "ai" | "experience" | "certificates" | "contact";

type SectionEntry = { id: SectionId; nav: string; label: string };

const ALL_SECTIONS: SectionEntry[] = [
    { id: "projects", nav: "projects", label: "Projects" },
    { id: "stack", nav: "stack", label: "Tech Stack" },
    { id: "services", nav: "services", label: "Services" },
    { id: "ai", nav: "ai", label: "AI-Powered Development" },
    { id: "experience", nav: "experience", label: "Experience" },
    { id: "certificates", nav: "certs", label: "Certificates" },
    { id: "contact", nav: "contact", label: "Contact" },
];

/** Home page sections after the hero, in page order. */
export const SECTIONS = ALL_SECTIONS.filter((section) => section.id !== "experience" || EXPERIENCE.length > 0);

const pad = (n: number) => String(n).padStart(2, "0");

/** The hero is sheet 01; the footer title block shares the last sheet with Contact. */
export const SHEET_TOTAL = pad(SECTIONS.length + 1);

export function sectionMeta(id: SectionId) {
    const position = SECTIONS.findIndex((section) => section.id === id) + 1;
    return {
        index: pad(position),
        label: SECTIONS[position - 1]?.label ?? "",
        sheet: `${pad(position + 1)} / ${SHEET_TOTAL}`,
        // Every second section sits on the band surface so each reads as a separate sheet.
        band: position % 2 === 0,
    };
}

export const NAV_ITEMS = SECTIONS.filter((section) => section.id !== "contact").map((section) => ({
    href: `/#${section.id}`,
    label: section.nav,
    num: sectionMeta(section.id).index,
}));

/** Serialise JSON-LD for a script tag, escaping "<" as the Next.js docs recommend. */
export function jsonLd(data: object) {
    return JSON.stringify(data).replace(/</g, "\\u003c");
}
