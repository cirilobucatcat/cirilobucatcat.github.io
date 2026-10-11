import { LeaderRow, SpecCard } from "./blueprint";
import Section from "./Section";

type Tool = { name: string; use: string };

type Module = {
    name: string;
    /** The highlighted module: amber card with a CORE marker. One per group. */
    core?: boolean;
    tools: Tool[];
};

const MODULES: Module[] = [
    {
        name: "languages",
        tools: [
            { name: "JavaScript", use: "web apps" },
            { name: "TypeScript", use: "type safety" },
            { name: "Python", use: "scripting" },
            { name: "PHP", use: "server-side apps" },
        ],
    },
    {
        name: "frontend",
        tools: [
            { name: "Vue.js", use: "interfaces" },
            { name: "React", use: "interfaces" },
            { name: "Angular", use: "large apps" },
            { name: "Next.js", use: "full stack apps" },
            { name: "Tailwind CSS", use: "styling" },
        ],
    },
    {
        name: "backend_data",
        tools: [
            { name: "Node.js", use: "APIs" },
            { name: "Laravel", use: "web backends" },
            { name: "PostgreSQL", use: "relational" },
            { name: "MySQL", use: "relational" },
            { name: "MongoDB", use: "documents" },
            { name: "Firebase", use: "realtime, auth" },
            { name: "REST APIs", use: "integrations" },
        ],
    },
    {
        name: "ai",
        core: true,
        tools: [
            { name: "LLM APIs", use: "AI features" },
            { name: "AI agents", use: "automation" },
            { name: "AI-assisted dev", use: "speed" },
        ],
    },
    {
        name: "tooling",
        tools: [
            { name: "Git", use: "version control" },
            { name: "Docker", use: "containers" },
            { name: "Figma", use: "design handoff" },
            { name: "npm", use: "JS packages" },
            { name: "Composer", use: "PHP packages" },
            { name: "Apache", use: "web server" },
            { name: "Nginx", use: "web server" },
            { name: "Linux", use: "servers" },
            { name: "Jira", use: "planning" },
            { name: "Bitbucket", use: "repositories" },
            { name: "DigitalOcean", use: "hosting" },
        ],
    },
];

const TOOL_COUNT = MODULES.reduce((total, mod) => total + mod.tools.length, 0);

export default function TechStack() {
    return (
        <Section id="stack" title="The tools I reach for" command="cat stack.json | jq '.modules'">
            <ul className="flex flex-wrap gap-5">
                {MODULES.map((mod, i) => (
                    <li key={mod.name} className="flex min-w-0 flex-[1_1_250px]">
                        <SpecCard as="article" tone={mod.core ? "amber" : "default"} className="flex w-full flex-col">
                            <header
                                className={`flex items-center justify-between gap-3 border-b px-5 py-3.5 ${mod.core ? "border-amber-line" : "border-line-dash"}`}
                            >
                                <h3 className="text-body font-bold">
                                    <span className="text-amber">mod/</span>
                                    {mod.name}
                                </h3>
                                {mod.core ? (
                                    <span className="text-caption font-bold text-amber">CORE</span>
                                ) : (
                                    <span className="text-caption text-ink-muted" aria-hidden="true">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                )}
                            </header>
                            {/* One column in a narrow card; a card left alone on its row spreads its tools across several. */}
                            <dl className="grid grid-cols-[repeat(auto-fill,minmax(min(210px,100%),1fr))] gap-x-10 gap-y-1 px-5 pt-3 pb-4.5">
                                {mod.tools.map((tool) => (
                                    <LeaderRow key={tool.name} name={tool.name} use={tool.use} tone={mod.core ? "amber" : "default"} />
                                ))}
                            </dl>
                        </SpecCard>
                    </li>
                ))}
            </ul>

            <p className="text-body-sm text-ink-muted">
                <span className="text-signal" aria-hidden="true">
                    ✓
                </span>{" "}
                {MODULES.length} modules · {TOOL_COUNT} tools loaded{" "}
                <span className="text-amber" aria-hidden="true">
                    ·
                </span>{" "}
                always learning the next one
            </p>
        </Section>
    );
}
