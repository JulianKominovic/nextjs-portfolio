import CSSShowcaseBanner from "../assets/images/css-showcase-banner.png";
import MockosBanner from "../assets/images/mockos-banner.png";
import MockosLogo from "../assets/images/mockos-logo.png";
import SittlyBanner from "../assets/images/sittly-banner.png";
import SittlyLogo from "../assets/images/sittly-logo.png";

import {
  BACKEND_TECH_LIST,
  FRONTEND_TECH_LIST,
  TESTING_AUTOMATION_TECH_LIST,
  TOOLS_TECH_LIST,
} from "./techs";
export type Project = {
  title: string;
  description: string;
  techs: (
    | TOOLS_TECH_LIST
    | TESTING_AUTOMATION_TECH_LIST
    | FRONTEND_TECH_LIST
    | BACKEND_TECH_LIST
  )[];
  urls: {
    github: string;
    demo?: string;
  };
  images: {
    banner: {
      src: string;
    };
    logo?: {
      src: string;
    };
  };
};

export type ReducedProject = Pick<Project, "title" | "description"> &
  Partial<Pick<Project, "urls">>;

export const PROJECTS: Project[] = [
  {
    title: "Sittly",
    description:
      "Sittly es una herramienta estilo Spotlight para Ubuntu que te permite una serie de acciones rápidas con unas pocas interacciones, como por ejemplo, abrir una aplicación, buscar en Google, abrir una URL guardada, explorar tus carpetas, pegar emojis, etc. El desarrollo va lento dado que solo puedo invertirle unas pocas horas al mes.",
    techs: [
      FRONTEND_TECH_LIST.ELECTRON,
      FRONTEND_TECH_LIST.TYPESCRIPT,
      FRONTEND_TECH_LIST.REACT,
      FRONTEND_TECH_LIST.NEXT_UI,
      FRONTEND_TECH_LIST.ZUSTAND,
      FRONTEND_TECH_LIST.CSS_IN_JS,
      TOOLS_TECH_LIST.GIT,
      TOOLS_TECH_LIST.GITHUB,
      TOOLS_TECH_LIST.FIGMA,
    ],
    urls: {
      github: "https://github.com/JulianKominovic/sittly",
      demo: "https://github.com/JulianKominovic/sittly/releases",
    },
    images: {
      banner: {
        src: (SittlyBanner as any).src,
      },
      logo: {
        src: (SittlyLogo as any).src,
      },
    },
  },
  {
    title: "Mockos",
    description:
      "Una aplicación demasiado ambiciosa. El objetivo era poder interceptar tráfico HTTP y modificarlo en tiempo real para conseguir mockear facilmente respuestas sin tocar nada en la aplicación que esté siendo desarrollada. No tengo planes de continuarla.",
    techs: [
      FRONTEND_TECH_LIST.TYPESCRIPT,
      FRONTEND_TECH_LIST.ELECTRON,
      FRONTEND_TECH_LIST.NEXT_UI,
      BACKEND_TECH_LIST.EXPRESS,
      BACKEND_TECH_LIST.NODEJS,
    ],
    urls: {
      github: "https://github.com/JulianKominovic/mockos",
    },
    images: {
      banner: {
        src: (MockosBanner as any).src,
      },
      logo: {
        src: (MockosLogo as any).src,
      },
    },
  },
  {
    title: "CSS Showcase",
    description:
      "Cuando estoy aburrido y tengo ganas de hacer CSS le invierto tiempo a esta aplicación. Si bien no tiene un objetivo claro, me sirve para practicar y aprender nuevas técnicas. La idea es que sea una especie de exposición de CSS, donde se puedan ver diferentes animaciones, transiciones, componentes fuera de lo común, etc.",
    techs: [
      FRONTEND_TECH_LIST.TYPESCRIPT,
      FRONTEND_TECH_LIST.ASTRO,
      FRONTEND_TECH_LIST.TAILWIND_CSS,
    ],
    urls: {
      github: "https://github.com/JulianKominovic/css-showcase",
      demo: "https://juliankominovic.github.io/css-showcase/",
    },
    images: {
      banner: {
        src: (CSSShowcaseBanner as any).src,
      },
    },
  },
];

export const SMALL_PROJECTS: ReducedProject[] = [
  {
    title: "useQuery",
    description:
      "~1kb hook para hacer requests con features extras como retries, cache, etc.",
    urls: {
      github: "https://github.com/JulianKominovic/use-query",
      demo: "",
    },
  },
  {
    title: "Git client",
    description:
      "Cliente para usar Git de una forma más amigable. Fue una idea que tuve para probar Tauri y Typescript. No tengo planes de continuarla.",
    urls: {
      github: "https://github.com/JulianKominovic/git-client",
      demo: "",
    },
  },
  {
    title: "Mikasa copilot",
    description: "Intento de Github copilot corriendo en un server local.",
    urls: {
      github: "https://github.com/JulianKominovic/mikasa-copilot",
      demo: "",
    },
  },
];
