import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "saylor_cpp",
    category: "Online Course Certificate",
    title: "C++ Programming Course - Saylor Academy",
    src: "/assets/projects-screenshots/saylor_cpp.png",
    screenshots: ["saylor_cpp"],
    skills: {
      frontend: [],
      backend: [],
    },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            C++ Programming = Logic + Performance + Precision
          </TypographyP>

          <TypographyP className="font-mono">
            C++ Programming at Saylor Academy is your foundation for mastering
            high-performance code — where you sharpen logic, manage memory with
            precision, and build efficient systems like a true software engineer.
            Strengthen your fundamentals, write optimized code, and level up your
            problem-solving mindset.
          </TypographyP>

          {/*<ProjectsLinks live={this.live} repo={this.github} />*/}

          <TypographyH3 className="my-4 mt-8">What I Learned</TypographyH3>

          <p className="font-mono mb-2">
            Mastered core C++ concepts including data types, control flow, functions,
            object-oriented programming, memory management, and algorithmic thinking
            through structured coursework at Saylor Academy.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/saylor_cpp.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "hubspot_revenue",
    category: "Professional Certification",
    title: "HubSpot Revenue Operations",
    src: "/assets/projects-screenshots/hubspot_revenue.png",
    screenshots: ["hubspot_revenue"],
    skills: {
      frontend: [],
      backend: [],
    },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            HubSpot Revenue Operations = Alignment + Automation + Growth
          </TypographyP>

          <TypographyP className="font-mono">
            HubSpot Revenue Operations (RevOps) focuses on aligning marketing, sales, and
            customer service into a single, data-driven system. Through automation,
            pipeline optimization, and unified reporting, RevOps helps create a seamless
            customer journey and drives scalable, predictable revenue growth.
          </TypographyP>

          {/*<ProjectsLinks live={this.live} repo={this.github} />*/}

          <TypographyH3 className="my-4 mt-8">What I Learned</TypographyH3>

          <p className="font-mono mb-2">
            Gained a solid understanding of HubSpot Revenue Operations, including CRM
            configuration, pipeline management, workflow automation, data alignment
            across teams, performance reporting, and strategies to improve efficiency
            and revenue outcomes.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/hubspot_revenue.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "dicoding_solid",
    category: "Competency Certificate",
    title: "Prinsip Pemrograman SOLID - Dicoding",
    src: "/assets/projects-screenshots/dicoding_solid.png",
    screenshots: ["dicoding_solid"],
    skills: {
      frontend: [],
      backend: [],
    },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            SOLID Principles = Clean Design + Maintainability + Scalability
          </TypographyP>

          <TypographyP className="font-mono">
            SOLID Principles are the foundation of clean and maintainable software design.
            By applying Single Responsibility, Open/Closed, Liskov Substitution,
            Interface Segregation, and Dependency Inversion, you can build systems that
            are easier to extend, test, and refactor while reducing technical debt.
          </TypographyP>

          {/*<ProjectsLinks live={this.live} repo={this.github} />*/}

          <TypographyH3 className="my-4 mt-8">What I Learned</TypographyH3>

          <p className="font-mono mb-2">
            Learned and applied the five SOLID principles to design robust object-oriented
            systems, improve code readability, reduce tight coupling, enhance flexibility,
            and create scalable architectures suitable for real-world software projects.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/dicoding_solid.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "dicoding_proyek",
    category: "Competency Certificate",
    title: "Dasar Manajemen Proyek - Dicoding",
    src: "/assets/projects-screenshots/dicoding_proyek.png",
    screenshots: ["dicoding_proyek"],
    skills: {
      frontend: [],
      backend: [],
    },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Project Management = Planning + Collaboration + Delivery
          </TypographyP>

          <TypographyP className="font-mono">
            Project Management at Dicoding emphasizes structured planning, effective
            collaboration, and timely delivery. This course builds a strong foundation
            in managing software projects by balancing scope, time, cost, and quality
            while ensuring clear communication across teams.
          </TypographyP>

          {/*<ProjectsLinks live={this.live} repo={this.github} />*/}

          <TypographyH3 className="my-4 mt-8">What I Learned</TypographyH3>

          <p className="font-mono mb-2">
            Learned core project management concepts including project lifecycle,
            Agile and Waterfall methodologies, task prioritization, risk management,
            stakeholder communication, documentation, and effective team coordination
            in software development projects.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/dicoding_proyek.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
