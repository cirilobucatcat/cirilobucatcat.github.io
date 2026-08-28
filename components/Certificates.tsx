import { BadgeIcon } from "./icons";
import SectionEyebrow from "./SectionEyebrow";

const CERTIFICATES = [
  {
    title: "Google Digital Marketing & E-commerce Professional Certificate(v.2)",
    description:
      "Certified training covering digital marketing strategy, channels, and analytics.",
    year: "2026",
    link: "https://www.credly.com/badges/7b6d5d11-30fd-494c-b0e2-291aab5c306f/public_url?trk=public_profile_see-credential",
  },
  {
    title: "Google Cybersecurity Professional Certificate(v.2)",
    description:
      "Certified training covering core cybersecurity principles and best practices.",
    year: "2026",
    link: "https://www.credly.com/badges/1be80ef6-ea03-47fc-b5f5-d105242903d3/public_url",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="scroll-mt-20 border-b border-zinc-900 px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow index="05" label="Certificates" />
        <h2
          id="certificates-heading"
          className="mt-3 font-mono text-4xl font-bold text-zinc-100 sm:text-5xl"
        >
          Certifications
        </h2>

        <p className="mt-4 max-w-2xl font-sans text-zinc-400">
          Verified credentials, specialized training, and continuous technical learning.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {CERTIFICATES.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View certificate: ${cert.title} (opens in a new tab)`}
              className="group flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 p-7 transition-colors hover:border-cyan-400/50 hover:bg-zinc-900/60"
            >
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 text-cyan-400">
                <BadgeIcon className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-mono text-lg font-bold text-zinc-100">
                    {cert.title}
                  </h3>
                  <svg
                    className="h-4 w-4 shrink-0 text-zinc-600 transition-colors group-hover:text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
                <p className="mt-2 font-sans text-sm leading-relaxed text-zinc-400">
                  {cert.description}
                </p>
                <p className="mt-2 font-mono text-xs font-medium uppercase tracking-wide text-zinc-500">
                  {cert.year}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
