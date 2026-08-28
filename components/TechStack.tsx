import {
    JavaScriptIcon,
    TypeScriptIcon,
    PythonIcon,
    VueIcon,
    ReactIcon,
    NextJsIcon,
    TailwindCssIcon,
    NodeJsIcon,
    LaravelIcon,
    PostgreSqlIcon,
    MySqlIcon,
    ApiIcon,
    GitIcon,
    DockerIcon,
    FigmaIcon,
    type IconProps,
    AngularIcon,
    MongoDbIcon,
    NpmIcon,
    PhpIcon,
    ComposerIcon,
    LinuxIcon,
    ApacheIcon,
    NginxIcon,
    JiraIcon,
    BitbucketIcon,
    DigitalOceanIcon,
    FirebaseIcon,
} from "./icons";
import SectionEyebrow from "./SectionEyebrow";
import type { ComponentType } from "react";

type StackItem = {
    name: string;
    Icon: ComponentType<IconProps>;
};

type StackCategory = {
    label: string;
    items: StackItem[];
};

const STACK: StackCategory[] = [
    {
        label: "Languages",
        items: [
            { name: "JavaScript", Icon: JavaScriptIcon },
            { name: "TypeScript", Icon: TypeScriptIcon },
            { name: "Python", Icon: PythonIcon },
            { name: "PHP", Icon: PhpIcon },
        ],
    },
    {
        label: "Frontend",
        items: [
            { name: "Vue.js", Icon: VueIcon },
            { name: "React", Icon: ReactIcon },
            { name: "Angular", Icon: AngularIcon },
            { name: "Next.js", Icon: NextJsIcon },
            { name: "Tailwind CSS", Icon: TailwindCssIcon },
        ],
    },
    {
        label: "Backend & Database",
        items: [
            { name: "Node.js", Icon: NodeJsIcon },
            { name: "Laravel", Icon: LaravelIcon },
            { name: "PostgreSQL", Icon: PostgreSqlIcon },
            { name: "MySQL", Icon: MySqlIcon },
            { name: "MongoDB", Icon: MongoDbIcon },
            { name: "Firebase", Icon: FirebaseIcon },
            { name: "REST APIs", Icon: ApiIcon },
        ],
    },
    {
        label: "Tooling",
        items: [
            { name: "Git", Icon: GitIcon },
            { name: "Docker", Icon: DockerIcon },
            { name: "Figma", Icon: FigmaIcon },
            { name: "Node Package Manager", Icon: NpmIcon },
            { name: "Composer", Icon: ComposerIcon },
            { name: "Apache", Icon: ApacheIcon },
            { name: "Nginx", Icon: NginxIcon },
            { name: "Linux", Icon: LinuxIcon },
            { name: "Jira", Icon: JiraIcon },
            { name: "Bitbucket", Icon: BitbucketIcon },
            { name: "Digital Ocean", Icon: DigitalOceanIcon },
        ],
    },
];

export default function TechStack() {
    return (
        <section id="stack" aria-labelledby="stack-heading" className="scroll-mt-20 border-b border-zinc-900 px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionEyebrow index="03" label="Tech Stack" />
                <h2 id="stack-heading" className="mt-3 font-mono text-4xl font-bold text-zinc-100 sm:text-5xl">
                    Tools I build with
                </h2>
                <p className="mt-4 max-w-2xl font-sans text-zinc-400">
                    Here is the tech stack I have used throughout my career.
                </p>

                <div className="mt-14 space-y-10">
                    {STACK.map((category) => (
                        <div key={category.label}>
                            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-600">{category.label}</h3>
                            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                {category.items.map(({ name, Icon }) => (
                                    <li
                                        key={name}
                                        className="group flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/30 px-4 py-3 transition-colors hover:border-cyan-400/40"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-zinc-800 text-cyan-400 transition-colors group-hover:border-cyan-400/40"
                                        >
                                            <Icon className="h-4 w-4" />
                                        </span>
                                        <span className="font-sans text-sm text-zinc-300">{name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}