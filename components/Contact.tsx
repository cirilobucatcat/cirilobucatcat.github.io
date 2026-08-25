import { MailIcon, ExternalLinkIcon } from "./icons";
import SectionEyebrow from "./SectionEyebrow";
import ContactFormLoader from "./ContactFormLoader";

export default function Contact() {
    return (
        <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionEyebrow index="06" label="Contact" />
                <h2 id="contact-heading" className="mt-3 font-mono text-4xl font-bold text-zinc-100 sm:text-5xl">
                    Let&apos;s work together
                </h2>
                <p className="mt-4 max-w-xl font-sans text-zinc-400">
                    Have a project in mind or just want to say hello? Send a message
                    and I&apos;ll get back to you.
                </p>

                <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
                    <div className="space-y-6">
                        {/* Replace with your real email and profile links */}
                        <a href="mailto:bucatcat1999@gmail.com" className="flex items-center gap-3 font-mono text-sm text-zinc-300 hover:text-cyan-400">
                            <MailIcon className="h-4 w-4" />
                            bucatcat1999@gmail.com
                        </a>
                        <div className="flex flex-col gap-3 font-mono text-sm text-zinc-300">
                            <a href="https://github.com/cirilobucatcat" className="flex items-center gap-3 hover:text-cyan-400">
                                <ExternalLinkIcon className="h-4 w-4" />
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/cirilo-bucatcat-jr" className="flex items-center gap-3 hover:text-cyan-400">
                                <ExternalLinkIcon className="h-4 w-4" />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <ContactFormLoader />
                </div>
            </div>
        </section>
    );
}