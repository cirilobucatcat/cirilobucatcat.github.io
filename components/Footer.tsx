import Link from "next/link";

const NAV_ITEMS = [
    { href: "/#projects", label: "Projects" },
    { href: "/#stack", label: "Stack" },
    { href: "/#services", label: "Services" },
    { href: "/#certificates", label: "Certificates" },
    { href: "/#contact", label: "Contact" },
];

export default function Footer() {
    return (
        <footer className="border-t border-zinc-900 px-5 py-10 lg:px-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
                <p className="font-mono text-xs text-zinc-600">© {new Date().getFullYear()} Cirilo Bucatcat Jr. Built with Next.js.</p>
                <nav aria-label="Footer">
                    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-zinc-600">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="hover:text-cyan-400">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
}