import { CapIcon } from "./icons";
import SectionEyebrow from "./SectionEyebrow";

const EDUCATION = [
    {
        degree: "Masters in Information Technology",
        school: "Leyte Normal University",
        note: "Postgraduate",
    },
    {
        degree: "Bachelor of Science in Information Technology",
        school: "Leyte Normal University",
        note: "Undergraduate Batch 2022",
    },
];

export default function Education() {
    return (
        <section id="education" aria-labelledby="education-heading" className="scroll-mt-20 border-b border-zinc-900 px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionEyebrow index="03" label="Education" />
                <h2 id="education-heading" className="mt-3 font-mono text-4xl font-bold text-zinc-100 sm:text-5xl">
                    Academic background
                </h2>

                <ol className="mt-14 space-y-10 border-l border-zinc-800 pl-8">
                    {EDUCATION.map((item) => (
                        <li key={item.degree} className="relative">
                            <span
                                aria-hidden="true"
                                className="absolute -left-11 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-cyan-400"
                            >
                                <CapIcon className="h-3.5 w-3.5" />
                            </span>
                            <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">{item.note}</p>
                            <h3 className="mt-2 font-mono text-xl font-bold text-zinc-100 sm:text-2xl">{item.degree}</h3>
                            <p className="mt-1 font-sans text-zinc-400">{item.school}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}