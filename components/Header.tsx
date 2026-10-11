"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Caret, cx } from "./blueprint";
import { NAV_ITEMS, SITE } from "../lib/site";

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
        <header className="tb-nav">
            <nav aria-label="Main" className="tb-nav-inner">
                <Link href="/" className="tb-nav-brand" onClick={() => setOpen(false)}>
                    <span className="tb-nav-tilde" aria-hidden="true">
                        ~/
                    </span>
                    <span>{SITE.handle}</span>
                    <span className="sr-only">, home</span>
                    <span className="tb-nav-prompt" aria-hidden="true">
                        $
                    </span>
                    <Caret />
                </Link>

                <button
                    type="button"
                    className="tb-btn tb-btn-ghost tb-btn-sm lg:hidden"
                    aria-expanded={open}
                    aria-controls="nav-links"
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? "close" : "menu"}
                </button>

                <ul
                    id="nav-links"
                    className={cx(
                        "basis-full flex-col border-t border-line-rule pt-2 pb-3",
                        "lg:flex lg:basis-auto lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-0.5 lg:border-t-0 lg:p-0",
                        open ? "flex" : "hidden",
                    )}
                >
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="tb-nav-link block max-lg:px-0" onClick={() => setOpen(false)}>
                                <span className="tb-nav-num" aria-hidden="true">
                                    {item.num}
                                </span>{" "}
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li className="max-lg:mt-2">
                        <Link href="/#contact" className="tb-btn tb-btn-ghost tb-btn-sm tb-nav-cta max-lg:ml-0" onClick={() => setOpen(false)}>
                            ./contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
