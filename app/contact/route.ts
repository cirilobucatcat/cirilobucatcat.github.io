import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
    name?: string;
    email?: string;
    message?: string;
};

function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
    let body: ContactPayload;

    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();

    if (!name || !isValidEmail(email) || !message) {
        return NextResponse.json({ error: "Missing or invalid fields." }, { status: 422 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    // Swap this block for whatever email provider you use (Resend, Postmark, SES, etc).
    if (apiKey && toEmail) {
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "Portfolio <onboarding@resend.dev>",
                to: toEmail,
                reply_to: email,
                subject: `New message from ${name}`,
                text: message,
            }),
        });

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
        }
    } else {
        // No email provider configured yet — log so the message isn't silently lost.
        console.log("Contact form submission:", { name, email, message });
    }

    return NextResponse.json({ ok: true });
}