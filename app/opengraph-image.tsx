import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "John Doe — Web Developer, Software Developer, Software Engineer";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background: "#09090b",
                    color: "#d4d4d8",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        fontSize: 22,
                        color: "#71717a",
                        letterSpacing: 6,
                        textTransform: "uppercase",
                    }}
                >
                    {"// Portfolio"}
                </div>
                <div style={{ display: "flex", marginTop: 24, fontSize: 96, fontWeight: 700, color: "#fafafa" }}>
                    john<span style={{ color: "#22d3ee" }}>_</span>doe
                </div>
                <div style={{ display: "flex", marginTop: 24, fontSize: 32, color: "#71717a" }}>
                    Web Developer · Software Developer · Software Engineer
                </div>
            </div>
        ),
        { ...size }
    );
}