export type Role = {
    title: string;
    /** Leave out for freelance or self-employed roles; the title is shown on its own. */
    company?: string;
    /** Year or year-month, e.g. "2024" or "2024-03". */
    start: string;
    /** Leave out for the current role. */
    end?: string;
    highlights: string[];
    stack?: string[];
};

// Newest first. The Experience section and its nav link stay hidden while this list is empty.
//
// PLACEHOLDER DATA: every entry below is a dummy. Replace the bracketed text and the years
// with your real roles before publishing; a push to main puts whatever is here on the live site.
export const EXPERIENCE: Role[] = [
    {
        title: "IT Programmer",
        company: "Holy Infant College of Tacloban City, Inc.",
        start: "2024-08",
        highlights: [
            "Accelerates full-stack development (Next.js, React, Laravel, PHP, Vue.js, Tailwind CSS) by building with AI tools such as Claude, Codex, and Cursor, delivering institutional web applications 50% faster than traditional manual development.", 
            "Designed a plan-then-execute multi-model workflow: Claude Opus handles architecture and detailed implementation plans, while cost-efficient models (DeepSeek, Qwen3-Coder) carry out the plans, speeding up delivery while cutting AI tooling costs by 10%.",
            "Uses AI agents to automate scaffolding, test generation, refactoring, and prototyping, shortening the path from requirement to working prototype from 2 days to 4 hours, with every line of generated code reviewed before deployment.",
            "Partners with school staff and administration to automate enrollment workflows, using AI-assisted prototyping to turn requirements into working tools quickly and significantly reduce processing bottlenecks and manual record-keeping errors.",
            "Manages and secures the in-house relational database systems, enforcing data integrity, encryption, and automated backups for all student academic records.",
            "Diagnoses and resolves hardware, software, and network issues through routine maintenance to sustain 99.9% uptime for critical academic systems."
        ],
        stack: ["Laravel", "PHP", "Vue.js", "Next.js", "React", "Tailwind CSS", "Claude", "Supabase", "MySQL", "PostgreSQL"],
    },
    {
        title: "Freelance Full Stack Developer",
        start: "2023-11",
        end: "2024-05",
        highlights: [
            "Assumed leadership of discontinued client projects, implementing new features and resolving legacy bugs.",
            "Developed and integrated REST APIs to enhance application functionality.",
            "Managed end-to-end deployments using Digital Ocean Droplets, AWS EC2 instances, and Shared Hosting environments.",
            "Utilized a modern stack including React Native for mobile-responsive solutions and Docker for environment consistency."
        ],
        stack: ["Laravel", "Inertia.js", "jQuery", "Docker"],
    },
    {
        title: "Software Developer",
        company: "Intechsive Software Development",
        start: "2022-06",
        end: "2023-04",
        highlights: [
            "Implemented secure payment subscription models using Laravel Cashier and the Stripe API.",
            "Developed and integrated third-party APIs and new features within a collaborative 2-team project environment.",
            "Deployed high-performance frontend static websites using AWS CloudFront and S3.",
            "Managed dockerized application deployments on AWS EC2 instances to streamline development workflows.",
        ],
        stack: ["Angular", "TypeScript", "Laravel", "PHP", "Docker", "AWS"],
    },
    {
        title: "Software Developer Intern",
        company: "Intechsive Software Development",
        start: "2022-03",
        end: "2022-05",
        highlights: [
            "Developed REST APIs to be consumed on frontend written on Angular",
            "Configured docker services as needed on the project",
            "Managed AWS EC2 Instance",
            "Wrote PHP Unit Tests ensuring to catch problems at an early stage of the development",
        ],
        stack: ["Angular", "TypeScript", "Laravel", "PHP", "Docker", "AWS"],
    },
];
