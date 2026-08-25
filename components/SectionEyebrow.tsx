export default function SectionEyebrow({
    index,
    label,
}: {
    index: string;
    label: string;
}) {
    return (
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-zinc-600">
            <span aria-hidden="true" className="text-cyan-400">
                {`// ${index}`}
            </span>
            {label}
        </p>
    );
}