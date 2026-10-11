/*
 * Terminal Blueprint components, ported from the design system's components/bundle.js.
 * Class names match app/blueprint.css. Where the bundle renders generic div/span,
 * these render the semantic element (dl rows, figure, list items, header).
 */
import type { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type ClassValue = string | false | null | undefined;

export function cx(...parts: ClassValue[]) {
    return parts.filter(Boolean).join(" ");
}

/** true renders →; pass another glyph such as ↗ or ↓. */
type Glyph = true | string;

function Arrow({ glyph }: { glyph?: Glyph }) {
    if (!glyph) return null;
    return (
        <span className="tb-arrow" aria-hidden="true">
            {glyph === true ? "→" : glyph}
        </span>
    );
}

export function Caret({ tone }: { tone?: "amber" | "signal" }) {
    return (
        <span className={cx("tb-caret", tone === "signal" && "tb-caret-signal")} aria-hidden="true">
            _
        </span>
    );
}

/* ---------- actions ---------- */

type AnchorProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & { href: string };

/** Routes go through next/link; external links open in a new tab and say so. */
export function Anchor({ href, children, ...rest }: AnchorProps) {
    if (href.startsWith("/")) {
        return (
            <Link href={href} {...rest}>
                {children}
            </Link>
        );
    }
    if (/^https?:\/\//.test(href)) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
                {children}
                <span className="sr-only"> (opens in a new tab)</span>
            </a>
        );
    }
    return (
        <a href={href} {...rest}>
            {children}
        </a>
    );
}

type ButtonProps = AnchorProps & {
    /** primary: action fill, one per view. ghost: outlined, hover turns amber. */
    variant?: "primary" | "ghost";
    size?: "md" | "sm";
    arrow?: Glyph;
};

export function Button({ variant = "primary", size = "md", arrow, className, children, ...rest }: ButtonProps) {
    return (
        <Anchor className={cx("tb-btn", `tb-btn-${variant}`, size === "sm" && "tb-btn-sm", className)} {...rest}>
            {children}
            <Arrow glyph={arrow} />
        </Anchor>
    );
}

type TextLinkProps = AnchorProps & {
    /** default: signal blue. quiet: ink-secondary. */
    variant?: "default" | "quiet";
    arrow?: Glyph;
};

export function TextLink({ variant = "default", arrow, className, children, ...rest }: TextLinkProps) {
    return (
        <Anchor className={cx("tb-link", variant === "quiet" && "tb-link-quiet", className)} {...rest}>
            {children}
            <Arrow glyph={arrow} />
        </Anchor>
    );
}

/* ---------- labels ---------- */

export function Tag({ tone = "outline", children }: { tone?: "amber" | "outline" | "head"; children: ReactNode }) {
    return <span className={cx("tb-tag", `tb-tag-${tone}`)}>{children}</span>;
}

export function ChipList({ items, size = "sm", label }: { items: string[]; size?: "sm" | "md"; label?: string }) {
    return (
        <ul className="tb-chips" aria-label={label}>
            {items.map((item) => (
                <li key={item} className={cx("tb-chip", size === "md" && "tb-chip-md")}>
                    {item}
                </li>
            ))}
        </ul>
    );
}

export function StatusBadge({ inline, pulse = true, children }: { inline?: boolean; pulse?: boolean; children: ReactNode }) {
    return (
        <span className={cx("tb-status", inline && "tb-status-inline")}>
            <span className={cx("tb-dot", pulse && "tb-dot-pulse")} aria-hidden="true" />
            <span>{children}</span>
        </span>
    );
}

/* ---------- terminal ---------- */

type PromptProps = {
    command: string;
    /** Type the command out once on load. */
    typed?: boolean;
    /** Command text in ink-muted, as under a section title. */
    muted?: boolean;
    className?: string;
};

/** A shell command line. It is flavour, not content, so it is hidden from assistive tech. */
export function Prompt({ command, typed, muted, className }: PromptProps) {
    const chars = command.length;
    const typedStyle = {
        width: 0,
        "--tb-chars": `${chars}ch`,
        animation: `tb-type 1.8s steps(${chars}) .4s forwards`,
    } as CSSProperties;

    return (
        <p className={cx("tb-prompt", muted && "tb-prompt-muted", className)} aria-hidden="true">
            <span className="tb-prompt-symbol">$</span>{" "}
            {typed ? (
                <span className="tb-typed" style={typedStyle}>
                    {command}
                </span>
            ) : (
                command
            )}
        </p>
    );
}

type TerminalWindowProps = {
    /** File or session name in the title bar, e.g. "contact.sh". */
    title?: string;
    /** false for a plain rounded block without the title bar and glow. */
    bar?: boolean;
    className?: string;
    bodyClassName?: string;
    children: ReactNode;
};

export function TerminalWindow({ title, bar = true, className, bodyClassName, children }: TerminalWindowProps) {
    return (
        <div className={cx("tb-window", !bar && "tb-window-plain", className)}>
            {bar && (
                <div className="tb-window-bar" aria-hidden="true">
                    <span className="tb-window-dot" />
                    <span className="tb-window-dot" />
                    <span className="tb-window-dot" />
                    {title && <span className="tb-window-title">{title}</span>}
                </div>
            )}
            <div className={cx("tb-window-body", bodyClassName)}>{children}</div>
        </div>
    );
}

type TerminalRowProps = {
    /** The key column, e.g. "email". */
    label: string;
    /** Makes the row a link with an arrow. */
    href?: string;
    /** Default →. Use ↗ for external links. */
    arrow?: string;
    children: ReactNode;
};

/** One row of a terminal listing. Renders a list item; wrap rows in a ul. */
export function TerminalRow({ label, href, arrow = "→", children }: TerminalRowProps) {
    const cells = (
        <>
            <span className="tb-row-key">{label}</span>
            <span className="tb-row-value">{children}</span>
        </>
    );
    return (
        <li>
            {href ? (
                <Anchor href={href} className="tb-row tb-row-link">
                    {cells}
                    <span className="tb-arrow" aria-hidden="true">
                        {arrow}
                    </span>
                </Anchor>
            ) : (
                <div className="tb-row">{cells}</div>
            )}
        </li>
    );
}

/** Who does what in a workflow step. Renders a dt/dd pair; wrap rows in a dl. */
export function RoleLine({ role, className, children }: { role: "ai" | "me"; className?: string; children: ReactNode }) {
    return (
        <div className={cx("tb-role", `tb-role-${role}`, className)}>
            <dt className="tb-role-badge">{role.toUpperCase()}</dt>
            <dd className="tb-role-text">{children}</dd>
        </div>
    );
}

type CommitEntryProps = {
    /** Short decorative hash, e.g. "e4f1a90". */
    hash: string;
    title: string;
    /** Leave out for freelance or self-employed roles with no employer. */
    company?: string;
    /** Year or year-month, e.g. "2024" or "2024-03". */
    start: string;
    /** Leave out for the current role: amber node and a HEAD tag. */
    end?: string;
    /** Highlights, shown as + diff lines. */
    lines: string[];
    first?: boolean;
    last?: boolean;
    /** Extra content under the lines, such as chips. */
    children?: ReactNode;
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2024-03" becomes "Mar 2024"; a bare "2024" stays "2024". */
function formatDate(value: string) {
    const match = /^(\d{4})-(\d{2})/.exec(value);
    const month = match ? MONTHS[Number(match[2]) - 1] : undefined;
    return match && month ? `${month} ${match[1]}` : value.slice(0, 4);
}

/** One role in the experience timeline. Renders a list item; wrap entries in an ol. */
export function CommitEntry({ hash, title, company, start, end, lines, first, last, children }: CommitEntryProps) {
    const head = !end;
    return (
        <li className={cx("tb-commit", head && "tb-commit-is-head")}>
            <div className="tb-commit-rail" aria-hidden="true">
                <span className={cx("tb-commit-stem", "tb-commit-stem-top", first && "tb-commit-stem-hidden")} />
                <span className="tb-commit-node" />
                <span className={cx("tb-commit-stem", "tb-commit-stem-bottom", last && "tb-commit-stem-hidden")} />
            </div>
            <article className="tb-commit-body" style={{ "--line-count": lines.length } as CSSProperties}>
                <p className="tb-commit-meta">
                    <span className="tb-commit-hash" aria-hidden="true">
                        commit {hash}
                    </span>
                    {head && <span className="tb-tag tb-tag-head">HEAD → current</span>}
                    <span className="tb-commit-dates">
                        <time dateTime={start}>{formatDate(start)}</time> — {end ? <time dateTime={end}>{formatDate(end)}</time> : "Present"}
                    </span>
                </p>
                <h3 className="tb-commit-title">
                    {title}
                    {company && (
                        <>
                            <span className="tb-commit-at"> @ </span>
                            {company}
                        </>
                    )}
                </h3>
                {lines.length > 0 && (
                    <ul className="tb-diff">
                        {lines.map((line, i) => (
                            <li key={line} className="tb-diff-line" style={{ "--i": i } as CSSProperties}>
                                <span className="tb-diff-sign" aria-hidden="true">
                                    +
                                </span>
                                <span className="tb-diff-text">{line}</span>
                            </li>
                        ))}
                    </ul>
                )}
                {children}
            </article>
        </li>
    );
}

/* ---------- layout ---------- */

type SectionHeaderProps = {
    /** Id for the heading, so the section can point at it with aria-labelledby. */
    id?: string;
    /** "01" renders as "[01]". */
    index?: string;
    /** Uppercased tag text, e.g. "Projects". */
    label: string;
    title: ReactNode;
    /** Shell command under the title, without the $. */
    command?: string;
    /** "02 / 07" renders as "SHEET 02 / 07". */
    sheet?: string;
    as?: "h1" | "h2";
};

export function SectionHeader({ id, index, label, title, command, sheet, as: Heading = "h2" }: SectionHeaderProps) {
    return (
        <header className="tb-section-header">
            <div className="tb-section-main">
                <p className="tb-section-tag">
                    {index && <span aria-hidden="true">[{index}] </span>}
                    {label}
                </p>
                <Heading id={id} className="tb-section-title">
                    {title}
                </Heading>
                {command && <Prompt command={command} muted />}
            </div>
            {sheet && (
                <p className="tb-sheet" aria-hidden="true">
                    SHEET {sheet}
                </p>
            )}
        </header>
    );
}

export type TitleBlockCell = { label: string; value: ReactNode; accent?: boolean };

export function TitleBlock({ cells }: { cells: TitleBlockCell[] }) {
    return (
        <dl className="tb-titleblock">
            {cells.map((cell) => (
                <div key={cell.label} className="tb-titleblock-cell">
                    <dt className="tb-titleblock-label">{cell.label}</dt>
                    <dd className={cx("tb-titleblock-value", cell.accent && "tb-titleblock-accent")}>{cell.value}</dd>
                </div>
            ))}
        </dl>
    );
}

/* ---------- blueprint ---------- */

type SpecCardProps<T extends ElementType> = {
    as?: T;
    /** amber: the one highlighted card in a group. */
    tone?: "default" | "amber";
    /** Hover lift. Set false for static containers. */
    lift?: boolean;
    /** Add space-card (22px) padding. */
    pad?: boolean;
    /** window: the darker terminal surface. */
    surface?: "default" | "window";
    className?: string;
    children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function SpecCard<T extends ElementType = "div">({
    as,
    tone = "default",
    lift = true,
    pad,
    surface = "default",
    className,
    children,
    ...rest
}: SpecCardProps<T>) {
    const Component: ElementType = as ?? "div";
    return (
        <Component
            className={cx(
                "tb-spec",
                tone === "amber" && "tb-spec-amber",
                lift && "tb-spec-lift",
                pad && "tb-spec-pad",
                surface === "window" && "tb-spec-window",
                className,
            )}
            {...rest}
        >
            {children}
        </Component>
    );
}

/** A key and its value. Renders a dt/dd pair; wrap rows in a dl. */
export function SpecRow({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div className="tb-spec-row">
            <dt className="tb-spec-row-key">{label}</dt>
            <dd className="tb-spec-row-value">{children}</dd>
        </div>
    );
}

/** A tool joined to its use by a dotted leader. Renders a dt/dd pair; wrap rows in a dl. */
export function LeaderRow({ name, use, tone = "default" }: { name: string; use: string; tone?: "default" | "amber" }) {
    return (
        // When the pair is too long for one line, the use drops to the next line and the leader fills it.
        <div className={cx("tb-leader flex-wrap", tone === "amber" && "tb-leader-amber")}>
            <dt className="tb-leader-name">{name}</dt>
            <dd className="flex min-w-0 flex-auto items-baseline gap-2">
                <span className="tb-leader-dots" aria-hidden="true" />
                <span className="tb-leader-use">{use}</span>
            </dd>
        </div>
    );
}

type FigureProps = {
    /** Amber corner label, e.g. "FIG. 02". */
    label?: string;
    image?: StaticImageData;
    alt?: string;
    /** Placeholder text when there is no image. */
    caption?: string;
    /** Load ahead of other images: use for the one above the fold. */
    eager?: boolean;
    sizes?: string;
    className?: string;
    style?: CSSProperties;
};

export function Figure({ label, image, alt = "", caption = "[ screenshot ]", eager, sizes, className, style }: FigureProps) {
    return (
        <figure className={cx("tb-figure", className)} style={style}>
            {image ? (
                <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes={sizes}
                    loading={eager ? "eager" : "lazy"}
                    fetchPriority={eager ? "high" : "auto"}
                    className="tb-figure-img"
                />
            ) : (
                <span className="tb-figure-caption">{caption}</span>
            )}
            {label && <figcaption className="tb-figure-label">{label}</figcaption>}
        </figure>
    );
}

export type Layer = { index: string; label: string; title: string; meta: string; active?: boolean };

export function LayerStack({ layers, className }: { layers: Layer[]; className?: string }) {
    return (
        <ol className={cx("tb-layers", className)}>
            {layers.map((layer, i) => (
                <li key={layer.index}>
                    {i > 0 && (
                        <div className="tb-layer-link" aria-hidden="true">
                            ↕
                        </div>
                    )}
                    <div className={cx("tb-layer", layer.active && "tb-layer-active")}>
                        <div className="tb-layer-head">
                            <span className="tb-layer-index">
                                {layer.index} · {layer.label}
                            </span>
                            <span className="tb-layer-title">{layer.title}</span>
                        </div>
                        <span className="tb-layer-meta">{layer.meta}</span>
                    </div>
                </li>
            ))}
        </ol>
    );
}
