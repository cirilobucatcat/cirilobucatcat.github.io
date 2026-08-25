import Link from "next/link";
import { ArrowRightIcon, ChevronDownIcon } from "./icons";

export default function Hero() {
    return (
        <section
            id="hero"
            aria-label="Introduction"
            className="relative flex min-h-screen scroll-mt-20 flex-col justify-center overflow-hidden border-b border-zinc-900 px-5 pt-24 lg:px-8"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_55%_55%_at_50%_25%,black,transparent_80%)]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[28%] h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[110px]"
            />


            <div className="relative mx-auto w-full max-w-6xl">
                <p className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/60 motion-reduce:animate-none" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                    </span>
                    Available for new projects
                </p>

                <h1 className="font-mono text-5xl font-bold leading-[0.95] tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
                    <span aria-hidden="true">
                        Cirilo Bucatcat Jr.
                    </span>
                    <span className="sr-only">Cirilo Bucatcat Jr.</span>
                </h1>

                <div className="mt-6 max-w-2xl font-mono text-sm text-zinc-500 sm:text-base">
                    <span className="text-zinc-300">Full-stack Web Developer <span className="text-cyan-400">/</span> Software Developer <span className="text-cyan-400">/</span> Software Engineer</span>
                </div>

                <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-zinc-400 sm:text-lg">
                    I plan, develop, and leverage AI capabilities to create scalable, end-to-end applications. Focused on delivering intelligent, production-ready systems that solve real problems.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                    <Link
                        href="#projects"
                        className="group inline-flex items-center gap-2 rounded bg-cyan-400 px-5 py-3 font-mono text-sm font-semibold text-zinc-950 transition-transform hover:-translate-y-0.5"
                    >
                        View projects
                        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded border border-zinc-700 px-5 py-3 font-mono text-sm font-semibold text-zinc-300 transition-colors hover:border-cyan-400 hover:text-cyan-400"
                    >
                        Get in touch
                    </Link>
                </div>
            </div>

            <Link
                href="#projects"
                aria-label="Scroll to projects section"
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-zinc-600 transition-colors hover:text-cyan-400 lg:block"
            >
                <ChevronDownIcon className="h-6 w-6 animate-bounce motion-reduce:animate-none" />
            </Link>
        </section>
    );
}