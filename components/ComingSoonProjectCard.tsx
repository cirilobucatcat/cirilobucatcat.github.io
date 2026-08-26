function ClockIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" />
        </svg>
    );
}

export default function ComingSoonProjectCard() {
    return (
        <div
            className="flex flex-col overflow-hidden rounded-xl border border-dashed border-zinc-800 bg-zinc-900/10 transition-colors hover:border-zinc-700"
            aria-label="More projects coming soon"
        >
            <div className="relative flex aspect-16/10 w-full items-center justify-center overflow-hidden border-b border-dashed border-zinc-800 bg-zinc-900/20">
                <ClockIcon className="h-10 w-10 text-zinc-700" />
            </div>

            <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-xs text-zinc-600">NEXT / UP</span>
                <h3 className="mt-2 font-mono text-xl font-bold text-zinc-100">Coming soon</h3>
                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-zinc-400">
                    A new case study is currently in the works. Check back shortly.
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-mono text-sm font-semibold text-zinc-600">
                    In progress
                </span>
            </div>
        </div>
    );
}