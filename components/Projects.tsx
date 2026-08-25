import Link from "next/link";
import { ExternalLinkIcon } from "./icons";
import SectionEyebrow from "./SectionEyebrow";

function ChatMock() {
    return (
        <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <svg viewBox="0 0 320 260" className="w-full" aria-hidden="true">
                <rect x="0" y="0" width="320" height="36" rx="10" className="fill-zinc-800" />
                <circle cx="20" cy="18" r="4" className="fill-cyan-400" />
                <rect x="34" y="14" width="70" height="8" rx="4" className="fill-zinc-600" />
                <rect x="16" y="56" width="150" height="26" rx="13" className="fill-zinc-800" />
                <rect x="16" y="90" width="110" height="26" rx="13" className="fill-zinc-800" />
                <rect x="154" y="132" width="150" height="26" rx="13" className="fill-cyan-400/20" />
                <rect x="194" y="166" width="110" height="26" rx="13" className="fill-cyan-400/20" />
                <rect x="16" y="200" width="130" height="26" rx="13" className="fill-zinc-800" />
                <rect x="16" y="236" width="288" height="16" rx="8" className="fill-zinc-800" />
            </svg>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-20 border-b border-zinc-900 px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionEyebrow index="02" label="Projects" />
                <h2 id="projects-heading" className="mt-3 font-mono text-4xl font-bold text-zinc-100 sm:text-5xl">
                    Selected work
                </h2>
                <p className="mt-4 max-w-2xl font-sans text-zinc-400">
                    A look at what I&apos;ve been building. More case studies coming soon.
                </p>

                <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div className="order-2 lg:order-1">
                        <ChatMock />

                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="font-mono text-xs text-zinc-600">01 / 01</span>
                        <h3 className="mt-2 font-mono text-2xl font-bold text-zinc-100 sm:text-3xl">WeakChat</h3>
                        <p className="mt-4 font-sans leading-relaxed text-zinc-400">
                            A real-time messaging app built to stay fast and simple —
                            instant delivery, clean threads, and an interface that gets out
                            of the way.
                        </p>
                        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Focus areas">
                            {["Real-time", "Chat", "Full-stack"].map((tag) => (
                                <li key={tag} className="rounded-full border border-zinc-800 px-3 py-1 font-mono text-xs text-zinc-400">
                                    {tag}
                                </li>
                            ))}
                        </ul>
                        {/* Replace href="#" with the live project or repo URL */}
                        <Link
                            href="#"
                            className="mt-7 inline-flex items-center gap-2 font-mono text-sm font-semibold text-cyan-400 underline-offset-4 hover:underline"
                        >
                            View project
                            <ExternalLinkIcon className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
                
            </div>
        </section>
    );
}