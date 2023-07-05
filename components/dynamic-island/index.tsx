"use client";
import React, { forwardRef, useContext, useId, useMemo, useState } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import clsx from "clsx";
import useMobileDetect from "use-mobile-detect-hook";

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
  exit: {
    top: "100%",
  },
};
// const annex = {
//   initial: { left: 0, scaleX: 0 },
//   animate: { left: "calc(100% + 16px)", scaleX: 1 },
//   hover: { opacity: 0, display: "none" },
// };
const onlyShowWhenExpanded = {
  initial: { scale: 0, width: 0, display: "none" },
  hover: { scale: 1, width: "fit-content" },
};

const DynamicIslandContext = React.createContext<{
  barHeight: SizesType;
  barWidth: SizesType;
  open?: boolean;
  id: string;
}>({
  barHeight: "normal",
  barWidth: "normal",
  open: undefined,
  id: "",
});

const DynamicIslandProvider = ({ children, barHeight, open, barWidth, id }) => {
  return (
    <DynamicIslandContext.Provider value={{ barHeight, open, barWidth, id }}>
      {children}
    </DynamicIslandContext.Provider>
  );
};

type SizesType = "normal" | "large" | "full";

type RootProps = {
  children: React.ReactNode;
  open?: boolean;
  freezed?: boolean;
  barHeight?: SizesType;
  barWidth?: SizesType;
};

const GLOBAL_DELAY = 0.05;
const height: Record<SizesType, string> = {
  normal: "h-8",
  large: "h-14",
  full: "h-full",
};
const width: Record<SizesType, string> = {
  normal: "w-40",
  large: "w-72",
  full: "w-full",
};
const Root = ({
  children,
  open,
  freezed,
  barHeight = "normal",
  barWidth = "normal",
  onBlur,
  onFocus,
  onHoverEnd,
  onHoverStart,
  onTap,
  onTapCancel,
  onTapStart,
}: RootProps &
  Pick<
    HTMLMotionProps<"div">,
    | "onHoverStart"
    | "onHoverEnd"
    | "onTap"
    | "onTapCancel"
    | "onTapStart"
    | "onFocus"
    | "onBlur"
  >) => {
  const [state, setState] = useState<"hovering" | "double-tap">("hovering");
  const id = useId();
  const isDesktop = useMobileDetect().isDesktop();

  return (
    <DynamicIslandProvider
      id={id}
      open={open}
      barHeight={barHeight}
      barWidth={barWidth}
    >
      <motion.div
        initial="initial"
        animate={open || state === "double-tap" ? "hover" : "animate"}
        whileHover={
          freezed || open ? "none" : state === "hovering" ? "hover" : "none"
        }
        exit="exit"
        variants={list}
        onHoverEnd={onHoverEnd}
        onTapCancel={onTapCancel}
        onTapStart={onTapStart}
        onHoverStart={(e, info) => {
          onHoverStart?.(e, info);
          !freezed && isDesktop && setState("hovering");
        }}
        onTap={(e, info) => {
          onTap?.(e, info);
          !freezed && setState("double-tap");
        }}
        onBlur={(e) => {
          onBlur?.(e);
          !freezed && setState("hovering");
        }}
        onFocus={(e) => {
          onFocus?.(e);
          !freezed && setState("double-tap");
        }}
        role="menubar"
        tabIndex={0}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 40,
          mass: 1,
          delay: GLOBAL_DELAY,
        }}
        className={clsx(
          "relative mx-auto overflow-hidden bg-black rounded-3xl focus:outline focus:outline-1 focus:outline-offset-4 focus:outline-current",
          height[barHeight],
          width[barWidth]
        )}
      >
        {children}
      </motion.div>
    </DynamicIslandProvider>
  );
};

const Bar = ({ children, ...rest }: HTMLMotionProps<"div">) => {
  const { barHeight } = useContext(DynamicIslandContext);
  return (
    <motion.div
      variants={bar}
      {...rest}
      className={clsx(
        "flex items-center justify-start w-full origin-top select-none absolute left-0 top-0 z-10 px-4",
        rest.className,
        height[barHeight]
      )}
      transition={
        {
          velocity: 1,
          delay: GLOBAL_DELAY,
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
          delay: GLOBAL_DELAY,

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

const Animated = (props: HTMLMotionProps<"div">) => (
  <motion.div
    {...(props as any)}
    className={clsx("w-full h-full", props.className)}
    initial={{
      y: "-100%",
      opacity: 1,
    }}
    animate={{
      y: 0,
      opacity: 1,
    }}
    exit={{
      y: "100%",
      opacity: 0,
    }}
    layout
  />
);

const parts = {
  Root,
  Body,
  Bar,
  OnlyShowWhenExpanded,
  Animated,
  //   Annex,
};

export default parts;
