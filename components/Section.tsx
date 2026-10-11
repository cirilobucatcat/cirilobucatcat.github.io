import type { ReactNode } from "react";
import { SectionHeader, cx } from "./blueprint";
import { sectionMeta, type SectionId } from "../lib/site";

type SectionProps = {
    id: SectionId;
    title: string;
    /** Shell command under the title, without the $. */
    command: string;
    children: ReactNode;
};

/** One sheet of the home page: numbered header, then the section's content. */
export default function Section({ id, title, command, children }: SectionProps) {
    const meta = sectionMeta(id);
    const headingId = `${id}-heading`;

    return (
        <section id={id} aria-labelledby={headingId} className={cx("site-section", meta.band && "site-section-band")}>
            <div className="site-container flex flex-col gap-8 py-(--space-section)">
                <SectionHeader id={headingId} index={meta.index} label={meta.label} title={title} command={command} sheet={meta.sheet} />
                {children}
            </div>
        </section>
    );
}
