"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** How far down the viewport the reading position sits: the rail fills to this line. */
const READING_LINE = 0.6;

/**
 * Wraps the experience entries and fills the rail as the page scrolls: an amber line grows
 * from the first node toward the last, following the reading position, and each circle
 * fills amber once the line enters it.
 * Without JavaScript, or with reduced motion on, the rail simply stays as drawn.
 */
export default function TimelineFill({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timeline = ref.current;
        if (!timeline) return;

        const entries = timeline.querySelectorAll<HTMLElement>(".tb-commit");
        const nodes = timeline.querySelectorAll<HTMLElement>(".tb-commit-node");
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let frame = 0;

        function update() {
            frame = 0;
            if (!timeline || nodes.length === 0) return;

            const origin = timeline.getBoundingClientRect();
            // Node centres, measured from the top-left of the timeline.
            const centres = [...nodes].map((node) => {
                const box = node.getBoundingClientRect();
                return { x: box.left + box.width / 2 - origin.left, y: box.top + box.height / 2 - origin.top };
            });
            const first = centres[0];
            const last = centres[centres.length - 1];
            const reading = reducedMotion.matches ? -Infinity : window.innerHeight * READING_LINE - origin.top;
            const fill = Math.min(Math.max(reading - first.y, 0), last.y - first.y);

            // The line is 2px wide and sits exactly over the rail's stem, which runs through the node centres.
            timeline.style.setProperty("--timeline-x", `${first.x - 1}px`);
            timeline.style.setProperty("--timeline-start", `${first.y}px`);
            timeline.style.setProperty("--timeline-fill", `${fill}px`);
            // A circle fills, and its entry slides in, as soon as the line touches the circle's top edge.
            // Entries are only hidden once this script runs, so no-JS and reduced-motion visitors see everything.
            timeline.toggleAttribute("data-enhanced", !reducedMotion.matches);
            nodes.forEach((node, i) => {
                const reached = reading >= centres[i].y - node.offsetHeight / 2;
                node.toggleAttribute("data-reached", reached);
                entries[i]?.toggleAttribute("data-reached", reached);
            });
        }

        function schedule() {
            if (!frame) frame = requestAnimationFrame(update);
        }

        update();
        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);
        reducedMotion.addEventListener("change", schedule);
        return () => {
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", schedule);
            reducedMotion.removeEventListener("change", schedule);
            cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div ref={ref} className="site-timeline">
            <span className="site-timeline-fill" aria-hidden="true" />
            <ol className="flex flex-col">{children}</ol>
        </div>
    );
}
