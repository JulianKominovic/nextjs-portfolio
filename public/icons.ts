import {
  BACKEND_TECH_LIST,
  FRONTEND_TECH_LIST,
  TESTING_AUTOMATION_TECH_LIST,
  TOOLS_TECH_LIST,
} from "./techs";
import {
  siAstro,
  siAxios,
  siBabel,
  siBootstrap,
  siCypress,
  siElectron,
  siEslint,
  siExpress,
  siFigma,
  siGit,
  siGithub,
  siGithubactions,
  siGnubash,
  siHeroku,
  siJest,
  siLinux,
  SimpleIcon,
  siNetlify,
  siNodedotjs,
  siNpm,
  siPostman,
  siPrettier,
  siPuppeteer,
  siReact,
  siReactrouter,
  siSass,
  siStorybook,
  siStyledcomponents,
  siTailwindcss,
  siTestinglibrary,
  siTypescript,
  siWebpack,
  siYarn,
} from "simple-icons";
export const TECH_ICONS: Record<
  | FRONTEND_TECH_LIST
  | BACKEND_TECH_LIST
  | TOOLS_TECH_LIST
  | TESTING_AUTOMATION_TECH_LIST,
  SimpleIcon
> = {
  [FRONTEND_TECH_LIST.REACT]: siReact,
  [FRONTEND_TECH_LIST.TYPESCRIPT]: siTypescript,
  [FRONTEND_TECH_LIST.REACT_ROUTER]: siReactrouter,
  [FRONTEND_TECH_LIST.AXIOS]: siAxios,
  [FRONTEND_TECH_LIST.SASS]: siSass,
  [FRONTEND_TECH_LIST.CSS_IN_JS]: siStyledcomponents,
  [FRONTEND_TECH_LIST.TAILWIND_CSS]: siTailwindcss,
  [FRONTEND_TECH_LIST.WEBPACK]: siWebpack,
  [FRONTEND_TECH_LIST.BABEL]: siBabel,
  [FRONTEND_TECH_LIST.BOOTSTRAP]: siBootstrap,
  [FRONTEND_TECH_LIST.ESLINT]: siEslint,
  [FRONTEND_TECH_LIST.PRETTIER]: siPrettier,
  [FRONTEND_TECH_LIST.STORYBOOK]: siStorybook,
  [FRONTEND_TECH_LIST.ELECTRON]: siElectron,
  [FRONTEND_TECH_LIST.ASTRO]: siAstro,
  [FRONTEND_TECH_LIST.ZUSTAND]: {} as any,
  [FRONTEND_TECH_LIST.NEXT_UI]: {} as any,

  [BACKEND_TECH_LIST.NODEJS]: siNodedotjs,
  [BACKEND_TECH_LIST.EXPRESS]: siExpress,

  [TOOLS_TECH_LIST.GIT]: siGit,
  [TOOLS_TECH_LIST.FIGMA]: siFigma,
  [TOOLS_TECH_LIST.HEROKU]: siHeroku,
  [TOOLS_TECH_LIST.LINUX]: siLinux,
  [TOOLS_TECH_LIST.NETLIFY]: siNetlify,
  [TOOLS_TECH_LIST.NPM]: siNpm,
  [TOOLS_TECH_LIST.YARN]: siYarn,
  [TOOLS_TECH_LIST.POSTMAN]: siPostman,
  [TOOLS_TECH_LIST.GITHUB]: siGithub,

  [TESTING_AUTOMATION_TECH_LIST.JEST]: siJest,
  [TESTING_AUTOMATION_TECH_LIST.BASH]: siGnubash,
  [TESTING_AUTOMATION_TECH_LIST.CYPRESS]: siCypress,
  [TESTING_AUTOMATION_TECH_LIST.GITHUB_ACTIONS]: siGithubactions,
  [TESTING_AUTOMATION_TECH_LIST.PUPPETEER]: siPuppeteer,
  [TESTING_AUTOMATION_TECH_LIST.REACT_TESTING_LIBRARY]: siTestinglibrary,
};