"use client";
import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import clsx from "clsx";

const list = {
  hover: { height: "100%", width: "100%", scale: 1 },
  initial: { scale: 0 },
  animate: { scale: 1 },
};

const item = {
  initial: { opacity: 0, scaleY: 0, y: "200%" },
  hover: { opacity: 1, scaleY: 1, y: 0 },
};

const bar = {
  initial: {
    top: "-100%",
  },
  animate: { top: 0 },
  hover: { top: "-100%" },
};
const annex = {
  initial: { left: 0, scaleX: 0 },
  animate: { left: "calc(100% + 16px)", scaleX: 1 },
  hover: { opacity: 0, display: "none" },
};
const onlyShowWhenExpanded = {
  initial: { scale: 0, width: 0, display: "none" },
  hover: { scale: 1, width: "fit-content" },
};

const Root = ({
  children,
  open,
}: {
  children: React.ReactNode;
  open?: boolean;
}) => {
  return (
    <motion.div
      initial="initial"
      animate={open ? "hover" : "animate"}
      whileHover="hover"
      exit="exit"
      variants={list}
      transition={{
        // type: "spring",
        // stiffness: 100,
        // bounce: 0.05,
        // mass: 0.5,
        // velocity: 2,
        // type: "tween",

        type: "spring",
        stiffness: 300,
        damping: 40,
        mass: 1,
        // bounce: 0.05,
        // mass: 0.5,
        // velocity: 2,
        // type: "tween",
      }}
      className="relative w-40 h-8 mx-auto overflow-hidden bg-black rounded-3xl"
    >
      {children}
    </motion.div>
  );
};

const Bar = ({ children, ...rest }: HTMLMotionProps<"div">) => {
  return (
    <motion.div
      variants={bar}
      {...rest}
      className={clsx(
        "flex items-center justify-start w-full h-8 p-4 origin-top select-none absolute left-0 top-0 z-10",
        rest.className
      )}
      transition={
        {
          velocity: 1,
          ...rest.transition,
        } as any
      }
    >
      {children}
    </motion.div>
  );
};

const Body = ({ children, ...rest }: HTMLMotionProps<"main">) => {
  return (
    <motion.main
      variants={item}
      {...rest}
      transition={
        {
          velocity: 1,
          ...rest.transition,
        } as any
      }
      className={clsx("w-full h-full px-4 py-2", rest.className)}
    >
      {children}
    </motion.main>
  );
};

const OnlyShowWhenExpanded = ({
  children,
  ...rest
}: HTMLMotionProps<"div">) => {
  return (
    <motion.div
      variants={onlyShowWhenExpanded}
      {...rest}
      transition={
        {
          velocity: 1,
          ...rest.transition,
        } as any
      }
    >
      {children}
    </motion.div>
  );
};

// const Annex = ({ children, ...rest }: HTMLMotionProps<"div">) => {
//   return (
//     <motion.div
//       variants={annex}
//       {...rest}
//       className={clsx(
//         "h-8 overflow-hidden bg-black rounded-3xl absolute origin-left top-0 min-w-[60px] select-none pointer-events-none ",
//         rest.className
//       )}
//       transition={
//         {
//           velocity: 4,
//           ...rest.transition,
//         } as any
//       }
//     >
//       {children}
//     </motion.div>
//   );
// };
// Annex.displayName = "Annex";

const parts = {
  Root,
  Body,
  Bar,
  OnlyShowWhenExpanded,
  //   Annex,
};

export default parts;
