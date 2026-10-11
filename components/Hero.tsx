import { Button, Caret, LayerStack, Prompt, SpecCard, SpecRow, StatusBadge, type Layer } from "./blueprint";
import { SHEET_TOTAL, SITE } from "../lib/site";

const LAYERS: Layer[] = [
    { index: "01", label: "Client", title: "Interface", meta: "React · Next.js · Vue" },
    { index: "02", label: "API", title: "Services", meta: "Node.js · Laravel" },
    { index: "03", label: "AI layer", title: "Intelligence", meta: "LLM APIs · Agents", active: true },
    { index: "04", label: "Data", title: "Storage", meta: "PostgreSQL · MySQL · Firebase · Supabase" },
];

const STACK_STRIP = "javascript · typescript · python · php · react · next.js · vue · node.js · laravel · postgresql · docker";

export default function Hero() {
    return (
        <section aria-labelledby="hero-heading" className="site-hero">
            <div aria-hidden="true" className="site-glow -top-40 left-[62%] -ml-95 h-140 w-190" />

            <div className="site-container relative flex flex-wrap items-center gap-x-12 gap-y-14 pt-20 pb-18">
                <div className="flex min-w-0 flex-[1_1_520px] flex-col items-start gap-6.5">
                    <StatusBadge>Status: available for new projects</StatusBadge>
                    <Prompt command="whoami && ./build --with-ai" typed />

                    <h1 id="hero-heading" className="flex flex-col gap-6.5">
                        <span className="type-display-lg">
                            I build full-stack web apps that <span className="text-amber">ship</span>
                            <Caret tone="signal" />
                        </span>{" "}
                        <span className="text-body font-normal text-ink-muted">
                            <span aria-hidden="true">{"// "}</span>
                            {SITE.role} · <span className="whitespace-nowrap">{SITE.name}</span>
                        </span>
                    </h1>

                    <p className="max-w-140 text-body-lg text-ink-secondary">
                        I plan, build, and ship end-to-end web applications, using AI to move faster. Focused on production-ready systems
                        that solve real problems.
                    </p>

                    <div className="flex flex-wrap gap-3.5">
                        <Button href="#projects" arrow>
                            view projects
                        </Button>
                        <Button href="#ai" variant="ghost">
                            how I build with AI
                        </Button>
                    </div>

                    <SpecCard as="dl" lift={false} surface="window" className="w-full max-w-130 px-4.5 py-1.5">
                        <SpecRow label="Role">{SITE.role}</SpecRow>
                        <SpecRow label="Focus">Web apps · APIs · AI features</SpecRow>
                        <SpecRow label="Stack">React · Next.js · Node.js · Laravel</SpecRow>
                    </SpecCard>
                </div>

                <SpecCard
                    as="figure"
                    surface="window"
                    className="flex max-w-135 min-w-0 flex-[1_1_400px] flex-col border-line-chip p-5 shadow-(--shadow-window)"
                >
                    <figcaption className="flex flex-wrap justify-between gap-x-3 gap-y-1.5 border-b border-line-dash pb-3.5 text-label tracking-[0.06em] uppercase">
                        <span>
                            <span className="text-amber">Fig. 01</span> <span className="text-ink-muted">· System overview</span>
                        </span>
                        <span className="text-ink-muted" aria-hidden="true">
                            Rev 02
                        </span>
                    </figcaption>
                    <LayerStack layers={LAYERS} className="pt-4.5 pb-3.5" />
                    <p
                        aria-hidden="true"
                        className="flex flex-wrap justify-between gap-x-3 gap-y-1.5 border-t border-line-dash pt-3.5 text-caption tracking-[0.06em] text-ink-muted uppercase"
                    >
                        <span>Drawn by: {SITE.name}</span>
                        <span>Sheet 01 / {SHEET_TOTAL}</span>
                    </p>
                </SpecCard>
            </div>

            <div className="border-t border-dashed border-line-dash bg-surface-inset">
                <p className="site-container flex flex-wrap gap-x-3.5 gap-y-1.5 py-4 text-body-sm text-ink-muted">
                    <span className="text-amber">stack:</span>
                    <span>{STACK_STRIP}</span>
                </p>
            </div>
        </section>
    );
}
