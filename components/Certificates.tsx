import { SpecCard, TextLink } from "./blueprint";
import Section from "./Section";

const CERTIFICATES = [
    {
        title: "Google Digital Marketing & E-commerce Professional Certificate(v.2)",
        description: "Certified training covering digital marketing strategy, channels, and analytics.",
        year: "2026",
        link: "https://www.credly.com/badges/7b6d5d11-30fd-494c-b0e2-291aab5c306f/public_url",
    },
    {
        title: "Google Cybersecurity Professional Certificate(v.2)",
        description: "Certified training covering core cybersecurity principles and best practices.",
        year: "2026",
        link: "https://www.credly.com/badges/1be80ef6-ea03-47fc-b5f5-d105242903d3/public_url",
    },
];

function BadgeIcon() {
    return (
        <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <circle cx="12" cy="9" r="5" />
            <path d="M8.5 13.5 7 21l5-3 5 3-1.5-7.5" />
        </svg>
    );
}

export default function Certificates() {
    return (
        <Section id="certificates" title="Verified skills" command="ls ./certificates --verified">
            <ul className="flex flex-wrap gap-5">
                {CERTIFICATES.map((cert) => (
                    <li key={cert.title} className="flex min-w-0 flex-[1_1_300px]">
                        <SpecCard as="article" className="flex w-full flex-col">
                            <div className="flex items-start gap-4 p-(--space-card)">
                                <span className="site-badge">
                                    <BadgeIcon />
                                </span>
                                <div className="flex min-w-0 flex-col gap-1">
                                    <h3 className="type-heading-sm">{cert.title}</h3>
                                    <p className="text-body-sm text-ink-secondary">{cert.description}</p>
                                </div>
                            </div>
                            <p className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-dashed border-line-dash px-(--space-card) pt-1 pb-2 text-label text-ink-muted">
                                <span>
                                    issued <time dateTime={cert.year}>{cert.year}</time> · via Credly
                                </span>
                                <TextLink href={cert.link} arrow="↗" className="text-label">
                                    verify<span className="sr-only">: {cert.title}</span>
                                </TextLink>
                            </p>
                        </SpecCard>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
