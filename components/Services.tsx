import { SpecCard } from "./blueprint";
import Section from "./Section";

const SERVICES = [
    {
        title: "Web Development",
        description:
            "Responsive, accessible websites and web apps built with modern frameworks and clean, maintainable code.",
    },
    {
        title: "Software Development",
        description:
            "End-to-end application development — from planning and architecture to deployment and support.",
    },
    {
        title: "Software Engineering",
        description:
            "Robust, scalable systems designed with sound engineering practices, testing, and long-term maintainability in mind.",
    },
];

export default function Services() {
    return (
        <Section id="services" title="What I can help with" command="ls ./services">
            <ul className="flex flex-wrap gap-5">
                {SERVICES.map(({ title, description }, i) => (
                    <li key={title} className="flex min-w-0 flex-[1_1_300px]">
                        <SpecCard as="article" pad className="flex w-full flex-col gap-3.5">
                            <div className="flex flex-col gap-1">
                                <p className="text-label text-amber" aria-hidden="true">
                                    svc_{String(i + 1).padStart(2, "0")}
                                </p>
                                <h3 className="type-heading-card">{title}</h3>
                            </div>
                            <p className="border-t border-dashed border-line-dash pt-3 text-body-sm text-ink-secondary">{description}</p>
                        </SpecCard>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
