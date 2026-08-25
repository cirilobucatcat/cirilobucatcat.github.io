"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
    { id: "hero", index: "01" },
    { id: "projects", index: "02" },
    { id: "education", index: "03" },
    { id: "services", index: "04" },
    { id: "certificates", index: "05" },
    { id: "contact", index: "06" },
];

export default function EditorGutter() {
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -45% 0px" }
        );

        SECTIONS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav aria-label="Section progress" className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
            <ol className="relative flex flex-col gap-7 border-l border-zinc-800 pl-5">
                {SECTIONS.map(({ id, index }) => {
                    const isActive = active === id;
                    return (
                        <li key={id} className="relative">
                            <span
                                aria-hidden="true"
                                className={`absolute -left-6 top-2.5 h-2 w-2 rounded-full transition-colors ${isActive ? "bg-cyan-400" : "bg-zinc-700"
                                    }`}
                            />
                            <a
                                href={`#${id}`}
                                aria-current={isActive ? "true" : undefined}
                                className={`font-mono text-[11px] uppercase tracking-widest transition-colors ${isActive ? "text-cyan-400" : "text-zinc-600 hover:text-zinc-400"
                                    }`}
                            >
                                {index}
                            </a>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}