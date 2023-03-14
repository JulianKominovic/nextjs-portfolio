import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "../../styles/react-grid-layout.css";

import { LayoutItem } from "../dashboard/page";
import { EXPERIENCE_LIST } from "@/public/experience";
import join from "@/lib/join";
// import PortfolioGrid from "@/sections/PortfolioGrid";
import { TECH_ICONS } from "@/public/icons";
import fs from "fs/promises";

async function readLayout(): Promise<LayoutItem[]> {
  const layoutString = await fs.readFile("./public/layout.json", "utf-8");
  return JSON.parse(layoutString);
}

const commonProps: Pick<LayoutItem, "h" | "w" | "x" | "y"> = {
  h: 2,
  w: 1,
  x: 0,
  y: 0,
};

const commonClassNames =
  "p-4 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-between";
const experience: LayoutItem[] = EXPERIENCE_LIST.flatMap(
  (
    {
      title,
      endDate,
      exprienceAdquired,
      imageSrcName,
      role,
      startDate,
      technologiesUsed,
      tldrDescriptions,
    },
    index
  ): LayoutItem[] => {
    return [
      {
        ...commonProps,
        i: index + title,
        imageSrc: imageSrcName.src,
        text: title,
        classes: {
          image: "object-contain w-20 h-20 rounded-full",
          card: join(
            commonClassNames,
            "bg-gradient-to-tr ",
            title === "Koin"
              ? "from-neutral-50 to-green-100"
              : "from-neutral-50 to-cyan-100",
            "flex-col-reverse !justify-center gap-8"
          ),
          text: "text-lg font-semibold ",
        },
        h: 8,
        y: index * 8,
      },
      {
        ...commonProps,

        i: index + startDate,
        text: startDate,
        classes: {
          card: join(commonClassNames, "text-sm text-neutral-500"),
        },
        h: 1,
        x: 1,
        y: index * 6 - 1,
      },
      {
        ...commonProps,

        i: index + endDate,
        text: endDate,
        classes: {
          card: join(commonClassNames, "text-sm text-neutral-500"),
        },
        h: 1,
        x: 0,
        y: 0,
      },
      {
        ...commonProps,
        i: index + role,
        text: role,
        classes: {
          card: join(commonClassNames, "@container text-xl"),
          text: "font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-300  @xs:text-xl @sm:text-2xl @md:text-4xl @lg:text-6xl",
        },
        y: index * 6 + 3,
        h: 7,
        x: 1,
      },

      ...exprienceAdquired.map((item): LayoutItem => {
        return {
          ...commonProps,
          i: index + role + item,
          text: item,
          h: 1,
          classes: {
            card: join(commonClassNames, "text-sm bg-green-50 text-green-600"),
          },
        };
      }),
      ...technologiesUsed.map((item) => {
        return {
          i: index + role + item,
          ...commonProps,
          text: item,
          h: 1,
          icon: TECH_ICONS[item].path,
          classes: {
            card: join(
              commonClassNames,
              " bg-pink-50 text-pink-600 @container"
            ),
            text: "text-sm @xs:text-lg @sm:text-xl @md:text-2xl @lg:text-4xl",
            icon: "text-2xl @sm:text-4xl @md:text-5xl @lg:text-6xl",
          },
        };
      }),
    ];
  }
).reverse();

async function getLayout() {
  try {
    const layoutFromFile = await readLayout();
    console.log("LAYOUT FROM FILE", layoutFromFile);
    if (layoutFromFile.length > 0) {
      const layout = [...experience];
      return layout
        .map((item, index) => {
          const itemFromFile = layoutFromFile.find(
            (element) => element.i === item.i
          );

          return { ...item, ...itemFromFile };
        })
        .filter(Boolean);
    } else {
      const layout = [...experience];

      return layout;
    }
  } catch (err) {
    const layout = [...experience];
    return layout;
  }
}

export default async function Home() {
  return (
    <main className="relative max-w-5xl min-h-screen py-8 mx-auto overflow-x-hidden">
      {/* <PortfolioGrid layout={await getLayout()} /> */}
    </main>
  );
}
