"use client";

import { useState, type FormEvent } from "react";
import { SendIcon, CheckCircleIcon } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [errors, setErrors] = useState<Record<string, string>>({});

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const message = String(formData.get("message") || "").trim();

        const nextErrors: Record<string, string> = {};
        if (!name) nextErrors.name = "Enter your name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email.";
        if (!message) nextErrors.message = "Enter a message.";

        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;
        setStatus("submitting");

        try {

            await new Promise((resolve) => setTimeout(resolve, 900));
            setStatus("success");
            form.reset();
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div role="status" className="flex items-start gap-3 rounded-xl border border-cyan-400/30 bg-cyan-400/5 p-6 font-sans text-zinc-300">
                <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                <p>Thanks — your message has been sent. I&apos;ll reply soon.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className=" transition-colors duration-500 mt-2 w-full rounded border border-zinc-800 bg-zinc-900/40 px-4 py-3 font-sans text-sm text-zinc-200 outline-none placeholder:text-zinc-600 focus:border-cyan-400 focus:outline focus:outline-cyan-400 focus:outline-offset-2"
                    placeholder="Your name"
                />
                {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-400">
                        {errors.name}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="mt-2 w-full rounded border border-zinc-800 bg-zinc-900/40 px-4 py-3 font-sans text-sm text-zinc-200 outline-none placeholder:text-zinc-600 focus:border-cyan-400"
                    placeholder="you@example.com"
                />
                {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-400">
                        {errors.email}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="mt-2 w-full resize-none rounded border border-zinc-800 bg-zinc-900/40 px-4 py-3 font-sans text-sm text-zinc-200 outline-none placeholder:text-zinc-600 focus:border-cyan-400"
                    placeholder="Tell me about your project"
                />
                {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-400">
                        {errors.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 rounded bg-cyan-400 px-6 py-3 font-mono text-sm font-semibold text-zinc-950 transition-opacity disabled:opacity-60"
            >
                {status === "submitting" ? "Sending..." : "Send message"}
                <SendIcon className="h-4 w-4" />
            </button>

            {status === "error" && (
                <p role="alert" className="text-xs text-red-400">
                    Something went wrong. Please try again.
                </p>
            )}
        </form>
    );
}