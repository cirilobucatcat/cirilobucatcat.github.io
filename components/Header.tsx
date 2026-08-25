"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MenuIcon, CloseIcon } from "./icons";

const NAV_ITEMS = [
    { href: "/#hero", label: "Hero" },
    { href: "/#projects", label: "Projects" },
    { href: "/#education", label: "Education" },
    { href: "/#services", label: "Services" },
    { href: "/#certificates", label: "Certificates" },
    { href: "/#contact", label: "Contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
                <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-zinc-100" onClick={() => setOpen(false)}>
                    Cirilo Bucatcat Jr.
                </Link>

                <nav aria-label="Primary" className="hidden lg:block">
                    <ul className="flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-zinc-500">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="transition-colors hover:text-cyan-400">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded border border-zinc-800 text-zinc-300 lg:hidden"
                    aria-expanded={open}
                    aria-controls="mobile-nav"
                    aria-label={open ? "Close menu" : "Open menu"}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
                </button>
            </div>

            <nav id="mobile-nav" aria-label="Mobile" className={`border-t border-zinc-900 bg-zinc-950 lg:hidden ${open ? "block" : "hidden"}`}>
                <ul className="flex flex-col px-5 py-4 font-mono text-sm uppercase tracking-widest text-zinc-400">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href} className="border-b border-zinc-900 last:border-0">
                            <Link href={item.href} className="block py-3 hover:text-cyan-400" onClick={() => setOpen(false)}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}