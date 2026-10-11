import { ChipList, CommitEntry } from "./blueprint";
import Section from "./Section";
import TimelineFill from "./TimelineFill";
import { EXPERIENCE } from "../lib/experience";

/** A stable, commit-like label for a role. Decoration only: it identifies nothing. */
function shortHash(input: string) {
    let hash = 0x811c9dc5;
    for (let i = 0; i < input.length; i++) {
        hash ^= input.charCodeAt(i);
        hash = Math.imul(hash, 0x01000193);
    }
    return (hash >>> 0).toString(16).padStart(8, "0").slice(0, 7);
}

export default function Experience() {
    if (EXPERIENCE.length === 0) return null;

    return (
        <Section id="experience" title="Where I've shipped" command="git log --career --graph">
            <TimelineFill>
                {EXPERIENCE.map((role, i) => (
                    <CommitEntry
                        key={`${role.title}-${role.company ?? ""}-${role.start}`}
                        hash={shortHash(`${role.title}@${role.company ?? ""}:${role.start}`)}
                        title={role.title}
                        company={role.company}
                        start={role.start}
                        end={role.end}
                        lines={role.highlights}
                        first={i === 0}
                        last={i === EXPERIENCE.length - 1}
                    >
                        {role.stack && role.stack.length > 0 && <ChipList items={role.stack} label={role.company ? `Stack used at ${role.company}` : `Stack used as ${role.title}`} />}
                    </CommitEntry>
                ))}
            </TimelineFill>
        </Section>
    );
}
