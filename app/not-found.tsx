import { Button, Prompt, TerminalWindow } from "../components/blueprint";

export const metadata = {
    title: "Page not found",
};

export default function NotFound() {
    return (
        <main id="main-content" className="site-container flex flex-1 flex-col items-start justify-center gap-6 py-(--space-section)">
            <p className="tb-section-tag">
                <span aria-hidden="true">[404] </span>Not found
            </p>
            <h1 className="tb-section-title">Nothing here</h1>
            <p className="max-w-125 text-body-lg text-ink-secondary">The page you&apos;re looking for doesn&apos;t exist, or it moved.</p>

            <TerminalWindow bar={false} className="w-full max-w-135" bodyClassName="px-6 py-5">
                <Prompt command="cd ./this-page" />
                <p className="text-ink-secondary">cd: no such file or directory</p>
            </TerminalWindow>

            <Button href="/" arrow>
                back to home
            </Button>
        </main>
    );
}
