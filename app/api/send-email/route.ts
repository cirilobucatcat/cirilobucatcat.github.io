import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";
import { contactFormEmail } from "@/lib/emailTemplate";

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const { subject, text, html } = contactFormEmail({ name, email, message });

        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: process.env.MAIL_TO,
            replyTo: email,
            subject,
            text,
            html
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email send failed:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}