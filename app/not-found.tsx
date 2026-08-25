import Link from "next/link";

export const metadata = {
    title: "Page not found",
};

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-600">{"// 404"}</p>
            <h1 className="mt-8 font-mono text-4xl font-bold text-zinc-100 sm:text-5xl">Nothing here</h1>
            <p className="mt-4 max-w-sm font-sans text-zinc-400">
                The page you&apos;re looking for doesn&apos;t exist, or it moved.
            </p>

            <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded bg-cyan-400 px-5 py-3 font-mono text-sm font-semibold text-zinc-950 transition-transform hover:-translate-y-0.5"
            >
                Back to home
            </Link>
        </main>
    );
}