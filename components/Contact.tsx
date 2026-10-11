import { Button, Caret, Prompt, StatusBadge, TerminalRow, TerminalWindow, cx } from "./blueprint";
import { SITE, sectionMeta } from "../lib/site";

const stripProtocol = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

export default function Contact() {
    const meta = sectionMeta("contact");

    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className={cx("site-section relative overflow-hidden", meta.band && "site-section-band")}
        >
            <div aria-hidden="true" className="site-glow -bottom-55 left-[30%] -ml-102.5 h-110 w-205" />

            <div className="site-container relative flex flex-wrap items-center gap-12 py-28">
                <div className="flex min-w-0 flex-[1_1_480px] flex-col items-start gap-6">
                    <p className="tb-section-tag">
                        <span aria-hidden="true">[{meta.index}] </span>
                        {meta.label}
                    </p>
                    <h2 id="contact-heading" className="type-display-md">
                        Let&apos;s build something <span className="text-signal">worth shipping</span>
                        <Caret />
                    </h2>
                    <p className="max-w-125 text-body-lg text-ink-secondary">
                        Have a project in mind or just want to say hello? Send me an email and I&apos;ll get back to you.
                    </p>
                    <Button href={`mailto:${SITE.email}`} arrow>
                        send an email
                    </Button>
                </div>

                <TerminalWindow title="contact.sh" className="max-w-135 min-w-0 flex-[1_1_400px]">
                    <Prompt command="./contact --list" />
                    <address className="not-italic">
                        <ul>
                            <TerminalRow label="email" href={`mailto:${SITE.email}`}>
                                {SITE.email}
                            </TerminalRow>
                            <TerminalRow label="github" href={SITE.github} arrow="↗">
                                {stripProtocol(SITE.github)}
                            </TerminalRow>
                            <TerminalRow label="linkedin" href={SITE.linkedin} arrow="↗">
                                {stripProtocol(SITE.linkedin)}
                            </TerminalRow>
                            <TerminalRow label="status">
                                <StatusBadge inline>available for new projects</StatusBadge>
                            </TerminalRow>
                        </ul>
                    </address>
                </TerminalWindow>
            </div>
        </section>
    );
}
