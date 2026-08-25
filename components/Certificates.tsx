import { BadgeIcon } from "./icons";
import SectionEyebrow from "./SectionEyebrow";

const CERTIFICATES = [
    {
        title: "Google Digital Marketing and E-commerce",
        description: "Certified training covering digital marketing strategy, channels, and analytics.",
    },
    {
        title: "Google Cybersecurity",
        description: "Certified training covering core cybersecurity principles and best practices.",
    },
];

export default function Certificates() {
    return (
        <section id="certificates" aria-labelledby="certificates-heading" className="scroll-mt-20 border-b border-zinc-900 px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionEyebrow index="05" label="Certificates" />
                <h2 id="certificates-heading" className="mt-3 font-mono text-4xl font-bold text-zinc-100 sm:text-5xl">
                    Certifications
                </h2>

                <div className="mt-14 grid gap-6 sm:grid-cols-2">
                    {CERTIFICATES.map((cert) => (
                        <div key={cert.title} className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 p-7">
                            <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 text-cyan-400">
                                <BadgeIcon className="h-5 w-5" />
                            </span>
                            <div>
                                <h3 className="font-mono text-lg font-bold text-zinc-100">{cert.title}</h3>
                                <p className="mt-2 font-sans text-sm leading-relaxed text-zinc-400">{cert.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}