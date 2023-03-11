"use client";

import { LayoutItem } from "@/app/page";
import { useState, useEffect } from "react";
import { Responsive as GridLayout } from "react-grid-layout";

import Image from "next/image";
import join from "@/lib/join";
import RenderSimpleIcon from "@/components/icons/RenderSimpleIcon";
import { siSimpleicons } from "simple-icons";

// const commonClassNames =
//   "p-4 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-between";

// const experience: LayoutItem[] = EXPERIENCE_LIST.flatMap(
//   (
//     {
//       title,
//       endDate,
//       exprienceAdquired,
//       imageSrcName,
//       role,
//       startDate,
//       technologiesUsed,
//       tldrDescriptions,
//     },
//     index
//   ) => {
//     return [
//       {
//         ...commonMockProps,
//         i: index + title,
//         children: (props) => {
//           return (
//             <div
//               {...props}
//               className={join(
//                 commonClassNames,
//                 "bg-gradient-to-tr ",
//                 title === "Koin"
//                   ? "from-neutral-50 to-green-100"
//                   : "from-neutral-50 to-cyan-100"
//               )}
//             >
//               <h1 className="text-lg font-semibold ">{title}</h1>
//               <Image
//                 alt={title}
//                 className="object-contain w-12 h-12 rounded-full"
//                 src={imageSrcName}
//                 width={200}
//                 height={60}
//               />
//             </div>
//           );
//         },
//       },
//       {
//         ...commonMockProps,
//         i: index + role,
//         children: (props) => {
//           return (
//             <div
//               {...props}
//               className={join(commonClassNames, "@container text-xl")}
//             >
//               <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-300  @xs:text-xl @sm:text-2xl @md:text-4xl @lg:text-6xl">
//                 {role}
//               </h2>
//             </div>
//           );
//         },
//       },
//       {
//         ...commonMockProps,
//         i: index + startDate,
//         children: (props) => {
//           return (
//             <div
//               {...props}
//               className={join(commonClassNames, "text-sm text-neutral-500")}
//             >
//               <time dateTime={startDate}>
//                 {startDate} - {endDate}
//               </time>
//             </div>
//           );
//         },
//       },
//       ...exprienceAdquired.map((item) => {
//         return {
//           ...commonMockProps,
//           i: index + role + item,
//           children: (props) => {
//             return (
//               <div
//                 {...props}
//                 className={join(
//                   commonClassNames,
//                   "text-sm bg-indigo-50 text-indigo-600"
//                 )}
//               >
//                 {item}
//               </div>
//             );
//           },
//         };
//       }),
//       ...technologiesUsed.map((item) => {
//         return {
//           ...commonMockProps,
//           i: index + role + item,
//           children: (props) => {
//             return (
//               <div
//                 {...props}
//                 className={join(
//                   commonClassNames,
//                   " bg-pink-50 text-pink-600 @container"
//                 )}
//               >
//                 <p className="text-sm @xs:text-lg @sm:text-xl @md:text-2xl @lg:text-4xl">
//                   {item}
//                 </p>
//                 <RenderSimpleIcon
//                   className="text-2xl @sm:text-4xl @md:text-5xl @lg:text-6xl"
//                   svgPath={TECH_ICONS[item].path}
//                 />
//               </div>
//             );
//           },
//         };
//       }),
//     ];
//   }
// ).reverse();

// const layout = [...experience];

export default function Grid({ layout, selected, setSelected }) {
  const [width, setWidth] = useState(
    window.innerWidth > 1024 ? 1024 : window.innerWidth
  );

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth > 1024) setWidth(1024);
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWidth, {
      passive: true,
    });
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <GridLayout
      useCSSTransforms
      layouts={{
        lg: layout,
        md: layout,
        sm: layout,
        xs: layout,
        xxs: layout,
      }}
      breakpoints={{ lg: 1200, md: 996, sm: 540, xs: 480, xxs: 0 }}
      cols={{
        lg: 5,
        md: 5,
        sm: 5,
        xs: 1,
        xxs: 1,
      }}
      compactType="horizontal"
      margin={[16, 16]}
      rowHeight={30}
      onLayoutChange={(layout) => {
        console.log(layout);
      }}
      className="layout"
      resizeHandles={["se"]}
      verticalCompact={true}
      width={width}
      // isDraggable={false}
      // isResizable={false}
    >
      {layout.map((item: LayoutItem) => {
        // const Exec = <GridItem {...item} key={item.i} />;
        const { text, icon, href, imageSrc, classes, ...rest } = item;
        return (
          <div
            {...rest}
            key={item.i}
            className={join(
              "flex items-center justify-between p-4 border  border-neutral-200 rounded-xl hover:bg-neutral-100 ",
              classes?.card ? classes.card : "bg-neutral-50",
              (rest as any).className,
              selected === item.i
                ? " ring-2 ring-neutral-300 ring-offset-8"
                : ""
            )}
            onClick={() => {
              setSelected(item.i);
            }}
          >
            {text ? <p className={join(classes?.text)}>{text}</p> : null}
            {imageSrc ? (
              <Image
                alt={text}
                className={join(
                  "object-contain w-12 h-12 rounded-full",
                  classes?.image
                )}
                src={imageSrc}
                width={200}
                height={60}
              />
            ) : null}
            {icon ? (
              <RenderSimpleIcon
                svgPath={siSimpleicons[icon]?.path || ""}
                className={join(classes?.icon)}
              />
            ) : null}
            {href ? <a></a> : null}
          </div>
        );
      })}
    </GridLayout>
  );
}
