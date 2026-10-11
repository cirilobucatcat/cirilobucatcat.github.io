import { TextLink, TitleBlock } from "./blueprint";
import { SHEET_TOTAL, SITE } from "../lib/site";

export default function Footer() {
    return (
        <footer className="border-t border-line-dash bg-ground-deep">
            <div className="site-container flex flex-col gap-5 pt-8 pb-7">
                <TitleBlock
                    cells={[
                        { label: "Project", value: "Portfolio" },
                        { label: "Drawn by", value: SITE.name },
                        { label: "Role", value: SITE.role },
                        { label: "Sheet", value: `${SHEET_TOTAL} / ${SHEET_TOTAL}`, accent: true },
                    ]}
                />
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-label text-ink-muted">
                    <p>
                        <span aria-hidden="true">{"// "}</span>© {new Date().getFullYear()} {SITE.name} · built with Next.js
                    </p>
                    <TextLink href="#top" variant="quiet" arrow="↑" className="text-label">
                        back to top
                    </TextLink>
                </div>
            </div>
        </footer>
    );
}
