import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
};

export function MenuIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
    );
}

export function CloseIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M6 6l12 12M18 6L6 18" />
        </svg>
    );
}

export function ArrowRightIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    );
}

export function ChevronDownIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M6 9l6 6 6-6" />
        </svg>
    );
}

export function MailIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
        </svg>
    );
}

export function ExternalLinkIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M7 17L17 7M9 7h8v8" />
        </svg>
    );
}

export function SendIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M4 12l16-7-6 16-3-6-7-3z" />
        </svg>
    );
}

export function CheckCircleIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <circle cx="12" cy="12" r="9" />
            <path d="M8.5 12.5l2.5 2.5 5-5" />
        </svg>
    );
}

export function CapIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M12 4l9 4.5-9 4.5-9-4.5L12 4z" />
            <path d="M7 11v4c0 1.5 2.5 3 5 3s5-1.5 5-3v-4" />
        </svg>
    );
}

export function BadgeIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <circle cx="12" cy="9" r="5.5" />
            <path d="M9 13.5L7.5 20l4.5-2.5L16.5 20 15 13.5" />
        </svg>
    );
}

export function BrowserIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <rect x="3" y="4.5" width="18" height="15" rx="2" />
            <path d="M3 9h18" />
            <circle cx="6.5" cy="6.75" r="0.6" fill="currentColor" stroke="none" />
            <circle cx="8.5" cy="6.75" r="0.6" fill="currentColor" stroke="none" />
        </svg>
    );
}

export function LayersIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M12 3l9 5-9 5-9-5 9-5z" />
            <path d="M3 13l9 5 9-5" />
        </svg>
    );
}

export function CpuIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <rect x="7" y="7" width="10" height="10" rx="1.5" />
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.5 5.5l2 2M16.5 16.5l2 2M5.5 18.5l2-2M16.5 7.5l2-2" />
        </svg>
    );
}