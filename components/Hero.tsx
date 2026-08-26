"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRightIcon, ChevronDownIcon } from "./icons";

const ROLES = ["Web Developer", "Software Developer", "Software Engineer"];
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
    const reduceMotion = useReducedMotion();

    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: reduceMotion ? 0 : 0.14,
                delayChildren: reduceMotion ? 0 : 0.15,
            },
        },
    };

    const item: Variants = {
        hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: reduceMotion ? 0 : 0.6, ease: EASE },
        },
    };

    const roleLine: Variants = {
        hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: reduceMotion ? 0 : 0.4,
                ease: EASE,
                staggerChildren: reduceMotion ? 0 : 0.12,
                delayChildren: 0.05,
            },
        },
    };

    const roleWord: Variants = {
        hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: reduceMotion ? 0 : 0.3, ease: "easeOut" },
        },
    };

    return (
        <section
            id="hero"
            aria-label="Introduction"
            className="relative flex min-h-screen scroll-mt-20 flex-col justify-center overflow-hidden border-b border-zinc-900 px-5 pt-24 lg:px-8"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_55%_55%_at_50%_25%,black,transparent_80%)]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[28%] h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[110px]"
            />

            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="relative mx-auto w-full max-w-6xl"
            >
                <motion.p
                    variants={item}
                    className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500"
                >
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/60 motion-reduce:animate-none" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                    </span>
                    Available for new projects
                </motion.p>

                <motion.h1
                    variants={item}
                    className="font-mono text-5xl font-bold leading-[0.95] tracking-tight text-zinc-100 sm:text-4xl lg:text-6xl"
                >
                    <span aria-hidden="true">
                        Cirilo Bucatcat Jr.
                    </span>
                    <span className="sr-only">Cirilo Bucatcat Jr.</span>
                </motion.h1>

                <motion.div
                    variants={roleLine}
                    className="mt-6 max-w-2xl font-mono text-sm text-zinc-500 sm:text-base"
                >
                    <span className="text-zinc-300">Full-stack Web Developer </span>
                </motion.div>
                <motion.p
                    variants={item}
                    className="mt-8 max-w-xl font-sans text-base leading-relaxed text-zinc-400 sm:text-lg"
                >
                    I plan, develop, and leverage AI capabilities to create scalable, end-to-end applications. Focused on delivering intelligent, production-ready systems that solve real problems.
                </motion.p>

                <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
                    <Link
                        href="#projects"
                        className="group inline-flex items-center gap-2 rounded bg-cyan-400 px-5 py-3 font-mono text-sm font-semibold text-zinc-950 transition-transform hover:-translate-y-0.5 active:scale-[0.97]"
                    >
                        View projects
                        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded border border-zinc-700 px-5 py-3 font-mono text-sm font-semibold text-zinc-300 transition-colors hover:border-cyan-400 hover:text-cyan-400 active:scale-[0.97]"
                    >
                        Get in touch
                    </Link>
                </motion.div>
            </motion.div>

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