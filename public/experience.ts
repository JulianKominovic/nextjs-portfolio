import {
  BACKEND_TECH_LIST,
  FRONTEND_TECH_LIST,
  TESTING_AUTOMATION_TECH_LIST,
  TOOLS_TECH_LIST,
} from "./techs";
import AlkemyLogo from "../assets/images/alkemy-logo.png";
import KoinLogo from "../assets/images/koin-logo.png";

export const EXPERIENCE_LIST = [
  {
    title: "Alkemy",
    tldrDescriptions: [
      "Aceleración en Alkemy. Durante todo el mes de diciembre formamos un equipo de frontend developers para desarrollar una aplicación web para una ONG.",
      "El proyecto consistía en una landing page, secciones de noticias y varios call to action, además un dashboard para administrar los datos de los usuarios y un frontend para que los usuarios puedan registrarse y loguearse.",
    ],
    technologiesUsed: [
      FRONTEND_TECH_LIST.REACT,
      FRONTEND_TECH_LIST.REACT_ROUTER,
      FRONTEND_TECH_LIST.AXIOS,
      FRONTEND_TECH_LIST.SASS,
      FRONTEND_TECH_LIST.WEBPACK,
      TOOLS_TECH_LIST.GIT,
      TOOLS_TECH_LIST.GITHUB,
    ],
    exprienceAdquired: [
      "Trabajo en equipo",
      "Metodologías ágiles",
      "Scrum",
      "Kanban",
      "Pair programming",
      "Manejo de versiones",
    ],
    startDate: "Noviembre 2021",
    endDate: "Enero 2022",
    imageSrcName: AlkemyLogo,
    role: "Junior frontend developer",
  },
  {
    title: "Koin",
    tldrDescriptions: [
      "Luego de la aceleración en Alkemy, me incorporé a Koin, una empresa dedicada al rubro fintech, integrante de Grupo Despegar, como Software Developer I.",
      "Durante los primeros meses me dediqué a aprender sobre el negocio, a conocer el stack tecnológico de la empresa, la enorme infraestructura que tienen montada y los métodos y procesos de los equipos.",
    ],
    technologiesUsed: [
      FRONTEND_TECH_LIST.REACT,
      FRONTEND_TECH_LIST.REACT_ROUTER,
      FRONTEND_TECH_LIST.AXIOS,
      FRONTEND_TECH_LIST.SASS,
      FRONTEND_TECH_LIST.BABEL,
      FRONTEND_TECH_LIST.ESLINT,
      FRONTEND_TECH_LIST.PRETTIER,
      BACKEND_TECH_LIST.EXPRESS,
      BACKEND_TECH_LIST.NODEJS,

      FRONTEND_TECH_LIST.WEBPACK,
      TOOLS_TECH_LIST.GIT,
      TOOLS_TECH_LIST.GITHUB,
    ],
    exprienceAdquired: [
      "Infraestructura y plataformas",
      "Integración continua",
      "APIs y microservicios",
      "Trabajo en equipo",
      "Versionado",
      "Procesos de una empresa de tecnogoía",
    ],
    startDate: "Enero 2022",
    endDate: "Agosto 2022",
    imageSrcName: KoinLogo,
    role: "Software Developer I",
  },
  {
    title: "Koin",
    tldrDescriptions: [
      "Luego del ascenso mi rol y tareas siguen siendo las mismas. Logré ampliar mi stack tecnológico y adquirir nuevas experiencias.",

      "Durante los primeros meses fui parte de un equipo de backend, donde pude aprender mucho del funcionamiento de la empresa asi como también aprender patrones, estrategias y buenas practicas de codigo. Empecé a preocuparme por la calidad del codigo y la escalabilidad de los proyectos.",

      "Luego fui reubicado en un equipo exclusivo de frontend, lo cual me benefició mucho porque implicó poder trabajar con gente con mucha experiencia, tecnologías y métodos que no conocía o tenía poca experiencia en ellos.",
    ],
    technologiesUsed: [
      FRONTEND_TECH_LIST.REACT,
      FRONTEND_TECH_LIST.REACT_ROUTER,
      FRONTEND_TECH_LIST.AXIOS,
      FRONTEND_TECH_LIST.SASS,
      FRONTEND_TECH_LIST.BABEL,
      FRONTEND_TECH_LIST.ESLINT,
      FRONTEND_TECH_LIST.PRETTIER,
      FRONTEND_TECH_LIST.WEBPACK,
      FRONTEND_TECH_LIST.STORYBOOK,

      BACKEND_TECH_LIST.EXPRESS,
      BACKEND_TECH_LIST.NODEJS,

      TOOLS_TECH_LIST.GIT,
      TOOLS_TECH_LIST.GITHUB,
      TOOLS_TECH_LIST.LINUX,
      TOOLS_TECH_LIST.POSTMAN,

      TESTING_AUTOMATION_TECH_LIST.BASH,
      TESTING_AUTOMATION_TECH_LIST.CYPRESS,
      TESTING_AUTOMATION_TECH_LIST.GITHUB_ACTIONS,
      TESTING_AUTOMATION_TECH_LIST.JEST,
      TESTING_AUTOMATION_TECH_LIST.REACT_TESTING_LIBRARY,
      TESTING_AUTOMATION_TECH_LIST.PUPPETEER,
    ],
    exprienceAdquired: [
      "Design systems",
      "Adaptabilidad",
      "Trabajo en equipo",
      "Escalabilidad",
      "Calidad de código",
      "Testing",
      "Buenas prácticas",
    ],
    startDate: "Agosto 2022",
    endDate: "Febrero 2023",
    imageSrcName: KoinLogo,
    role: "Software Developer II",
  },
  {
    title: "Koin",
    tldrDescriptions: [
      "Las responsabilidades y tareas siguen siendo las mismas. Estoy reforzando los conocimientos que fui adquiriendo. Trabajo en mejorar la calidad del código y la escalabilidad de los proyectos, a la vez que intento aportar en los procesos del negocio, del equipo y del area.",
    ],
    technologiesUsed: [
      FRONTEND_TECH_LIST.REACT,
      FRONTEND_TECH_LIST.REACT_ROUTER,
      FRONTEND_TECH_LIST.AXIOS,
      FRONTEND_TECH_LIST.SASS,
      FRONTEND_TECH_LIST.BABEL,
      FRONTEND_TECH_LIST.ESLINT,
      FRONTEND_TECH_LIST.PRETTIER,
      FRONTEND_TECH_LIST.WEBPACK,
      FRONTEND_TECH_LIST.STORYBOOK,

      BACKEND_TECH_LIST.EXPRESS,
      BACKEND_TECH_LIST.NODEJS,

      TOOLS_TECH_LIST.GIT,
      TOOLS_TECH_LIST.GITHUB,
      TOOLS_TECH_LIST.LINUX,
      TOOLS_TECH_LIST.POSTMAN,

      TESTING_AUTOMATION_TECH_LIST.BASH,
      TESTING_AUTOMATION_TECH_LIST.CYPRESS,
      TESTING_AUTOMATION_TECH_LIST.GITHUB_ACTIONS,
      TESTING_AUTOMATION_TECH_LIST.JEST,
      TESTING_AUTOMATION_TECH_LIST.REACT_TESTING_LIBRARY,
      TESTING_AUTOMATION_TECH_LIST.PUPPETEER,
    ],
    exprienceAdquired: [
      "Design systems",
      "Adaptabilidad",
      "Trabajo en equipo",
      "Escalabilidad",
      "Calidad de código",
      "Testing",
      "Buenas prácticas",
    ],
    startDate: "Febrero 2023",
    endDate: "presente",
    imageSrcName: KoinLogo,
    role: "Software Developer III",
  },
];
