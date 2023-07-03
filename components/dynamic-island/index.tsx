"use client";
import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import clsx from "clsx";
const list = {
  hover: { height: "100%", width: "100%" },
  // initial: { scale: 1, height: 150, width: "100%" },
  initial: { scale: 0 },
  animate: { scale: 1 },
};

const item = {
  hover: { scale: 1 },
  initial: { scale: 0 },
  // initial: { scale: 1 },
};

const bar = {};
const annex = {
  initial: { left: 0, scaleX: 0 },
  animate: { left: "calc(100% + 16px)", scaleX: 1 },
  hover: { opacity: 0, display: "none" },
};
const onlyShowWhenExpanded = {
  initial: { scale: 0, width: 0, display: "none" },
  hover: { scale: 1, width: "fit-content", display: "block" },
};

const Root = ({
  children,
  open,
}: {
  children: React.ReactNode;
  open?: boolean;
}) => {
  const list = {
    hover: { height: "100%", width: "100%" },
    // initial: { scale: 1, height: 150, width: "100%" },
    initial: { scale: 0 },
    animate: { scale: 1 },
  };
  if (open) {
    list.animate["height"] = "100%";
    list.animate["width"] = "100%";
  }

  return (
    <motion.div
      initial={open ? "hover" : "initial"}
      animate="animate"
      whileHover="hover"
      variants={list}
      transition={{
        type: "spring",
        stiffness: 100,
        bounce: 0.05,
        mass: 0.5,
        velocity: 2,
      }}
      className="w-40 h-8 mx-auto overflow-hidden bg-black rounded-3xl"
    >
      {children}

      {/* {annexChildren} */}
    </motion.div>
  );
};

const Bar = ({ children, ...rest }: HTMLMotionProps<"div">) => {
  return (
    <motion.div
      variants={bar}
      {...rest}
      className={clsx(
        "flex items-center justify-start w-full h-8 p-4 origin-top select-none",
        rest.className
      )}
      transition={
        {
          velocity: 4,
          ...rest.transition,
        } as any
      }
    >
      {children}
    </motion.div>
  );
};

const Body = ({ children }) => {
  return (
    <motion.main
      className="w-full h-40 px-4 py-2"
      variants={item}
      transition={{
        velocity: 4,
      }}
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
          velocity: 4,
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
