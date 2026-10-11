import { Prompt, RoleLine, SpecCard, TerminalWindow } from "./blueprint";
import Section from "./Section";

const STEPS = [
    {
        name: "plan",
        ai: "Drafts specs, data models, and task breakdowns.",
        me: "Set the scope, trade-offs, and architecture.",
    },
    {
        name: "build",
        ai: "Scaffolds boilerplate and suggests implementations.",
        me: "Shape, refactor, and own every line that ships.",
    },
    {
        name: "review",
        ai: "Flags bugs and drafts tests.",
        me: "Verify, challenge, and decide what merges.",
    },
    {
        name: "ship",
        ai: "Writes docs and deploy scripts.",
        me: "Release, monitor, and iterate.",
    },
];

const SUMMARY = [
    "less boilerplate, more time for design decisions",
    "faster feedback from idea to working prototype",
    "I review and own everything that ships",
];

export default function Workflow() {
    return (
        <Section id="ai" title="How AI made my development faster" command="ai --workflow --explain">
            {/* The rail repeats the step names below, so it is decoration only. */}
            <div aria-hidden="true" className="flex items-center gap-2.5 text-label tracking-[0.06em] text-ink-muted">
                {STEPS.map((step, i) => (
                    <span key={step.name} className="contents">
                        <span className={`size-2.5 shrink-0 rounded-full ${i === 0 ? "bg-amber" : "bg-signal"}`} />
                        <span>{step.name}</span>
                        {i < STEPS.length - 1 ? (
                            <span className="flex-1 border-t border-dashed border-line-chip" />
                        ) : (
                            <span className="text-signal">→</span>
                        )}
                    </span>
                ))}
            </div>

            <ol className="flex flex-wrap gap-5">
                {STEPS.map((step, i) => (
                    <li key={step.name} className="flex min-w-0 flex-[1_1_250px]">
                        <SpecCard as="article" pad className="flex w-full flex-col gap-3.5">
                            <div className="flex flex-col gap-1">
                                <p className="text-label text-amber" aria-hidden="true">
                                    step_{String(i + 1).padStart(2, "0")}
                                </p>
                                <h3 className="type-heading-card">{step.name}()</h3>
                            </div>
                            <dl className="flex flex-col gap-3.5 border-t border-dashed border-line-dash pt-3">
                                <RoleLine role="ai">{step.ai}</RoleLine>
                                <RoleLine role="me">{step.me}</RoleLine>
                            </dl>
                        </SpecCard>
                    </li>
                ))}
            </ol>

            <TerminalWindow bar={false} bodyClassName="px-6 py-5">
                <Prompt command="ai --summary" />
                <ul>
                    {SUMMARY.map((line) => (
                        <li key={line}>
                            <span className="tb-check" aria-hidden="true">
                                ✓
                            </span>{" "}
                            <span className="text-ink-secondary">{line}</span>
                        </li>
                    ))}
                </ul>
            </TerminalWindow>
        </Section>
    );
}
