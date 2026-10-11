import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

// A route handler rather than opengraph-image.tsx: the static export writes this out as a real
// og.png, so GitHub Pages serves it as image/png instead of an extensionless octet-stream.
export const dynamic = "force-static";

const GROUND = "#050e1f";
const INK = "#dce8ff";
const INK_MUTED = "#8fa3c8";
const SIGNAL = "#4d9bff";
const AMBER = "#ffb547";
const GRID = "rgba(77,155,255,0.1)";
const BRACKET = 44;

/** JetBrains Mono for the image. Falls back to the built-in font if Google Fonts is unreachable at build time. */
async function loadFont(weight: 400 | 700) {
    try {
        const css = await fetch(`https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@${weight}`).then((res) => res.text());
        const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
        if (!url) return null;
        const data = await fetch(url).then((res) => res.arrayBuffer());
        return { name: "JetBrains Mono", data, weight, style: "normal" as const };
    } catch {
        return null;
    }
}

export async function GET() {
    const fonts = (await Promise.all([loadFont(400), loadFont(700)])).filter((font) => font !== null);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "0 96px",
                    backgroundColor: GROUND,
                    backgroundImage: `linear-gradient(${GRID} 1px, transparent 1px), linear-gradient(90deg, ${GRID} 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                    color: INK,
                    fontFamily: "JetBrains Mono",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 40,
                        left: 40,
                        width: BRACKET,
                        height: BRACKET,
                        borderTop: `5px solid ${AMBER}`,
                        borderLeft: `5px solid ${AMBER}`,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        right: 40,
                        bottom: 40,
                        width: BRACKET,
                        height: BRACKET,
                        borderRight: `5px solid ${AMBER}`,
                        borderBottom: `5px solid ${AMBER}`,
                    }}
                />

                <div style={{ display: "flex", fontSize: 28, color: INK_MUTED }}>
                    <span style={{ color: AMBER }}>~/</span>
                    <span>{SITE.handle}</span>
                    <span style={{ color: SIGNAL, marginLeft: 16 }}>$</span>
                    <span style={{ marginLeft: 16 }}>whoami</span>
                </div>
                <div style={{ display: "flex", marginTop: 28, fontSize: 84, fontWeight: 700, letterSpacing: -3 }}>
                    <span>{SITE.name}</span>
                    <span style={{ color: SIGNAL }}>_</span>
                </div>
                <div style={{ display: "flex", marginTop: 20, fontSize: 36, color: AMBER }}>{SITE.role}</div>
                <div style={{ display: "flex", marginTop: 44, fontSize: 24, color: INK_MUTED }}>
                    react · next.js · node.js · laravel
                </div>
            </div>
        ),
        { width: 1200, height: 630, fonts },
    );
}
