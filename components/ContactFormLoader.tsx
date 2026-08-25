"use client";

import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("./ContactForm"), {
    ssr: false,
    loading: () => (
        <div
            aria-hidden="true"
            className="h-[420px] w-full animate-pulse rounded-xl border border-zinc-800 bg-zinc-900/30"
        />
    ),
});

export default function ContactFormLoader() {
    return <ContactForm />;
}