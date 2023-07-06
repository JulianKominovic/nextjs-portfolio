"use client";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  useAnimation,
  usePresence,
} from "framer-motion";
import clsx from "clsx";
import useMobileDetect from "use-mobile-detect-hook";

type AnimationVariants = "open" | "initial" | "exit" | "idle";

const item: Record<AnimationVariants, any> = {
  initial: { opacity: 0, scaleY: 0, y: "200%", filter: "blur(6px)" },
  idle: { opacity: 0, scaleY: 0, y: "200%", filter: "blur(6px)" },
  open: { opacity: 1, scaleY: 1, y: 0, filter: "blur(0)" },
  exit: { opacity: 0, scaleY: 0, y: "200%", filter: "blur(6px)" },
};

const bar: Record<AnimationVariants, any> = {
  initial: {
    top: "-100%",
    filter: "blur(6px)",
  },
  idle: { top: 0, filter: "blur(0)" },
  open: { top: "-100%", filter: "blur(6px)" },
  exit: {
    top: "100%",
    filter: "blur(6px)",
  },
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
  className?: string;
};

const GLOBAL_DELAY = 0.05;
const height: Record<SizesType, string> = {
  normal: "h-8",
  large: "h-14",
  full: "h-full",
};
const heightInPx: Record<SizesType, string> = {
  normal: "32px",
  large: "56px",
  full: "100%",
};
const widthInPx: Record<SizesType, string> = {
  normal: "160px",
  large: "320px",
  full: "100%",
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
  className,
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
  const controls = useAnimation();
  const id = useId();
  const isDesktop = useMobileDetect().isDesktop();
  useEffect(() => {
    controls.start("idle" as AnimationVariants);
  }, [controls]);

  useEffect(() => {
    controls.stop();
    controls.start("idle" as AnimationVariants);
  }, [barHeight, barWidth]);

  useEffect(() => {
    if (open === undefined) return;
    open
      ? controls.start("open" as AnimationVariants)
      : controls.start("idle" as AnimationVariants);
  }, [open, controls]);

  const list: Record<AnimationVariants, any> = {
    open: {
      height: "100%",
      width: "100%",
      scale: 1,
    },
    initial: { scale: 0 },
    exit: { scale: 0 },
    idle: {
      height: heightInPx[barHeight],
      width: widthInPx[barWidth],
      scale: 1,
    },
  };
  return (
    <DynamicIslandProvider
      id={id}
      open={open}
      barHeight={barHeight}
      barWidth={barWidth}
    >
      <motion.div
        animate={controls}
        variants={list}
        initial="initial"
        exit="exit"
        onTapCancel={onTapCancel}
        onTapStart={onTapStart}
        onHoverStart={(e, info) => {
          onHoverStart?.(e, info);
          if (freezed) return;
          if (!isDesktop) return;
          controls.start("open" as AnimationVariants);
        }}
        onHoverEnd={(e, info) => {
          onHoverEnd?.(e, info);
          if (freezed) return;
          if (!isDesktop) return;
          controls.start("idle" as AnimationVariants);
        }}
        onTap={(e, info) => {
          onTap?.(e, info);
          if (freezed) return;
          if (isDesktop) return;
          controls.start("open" as AnimationVariants);
        }}
        onFocus={(e) => {
          onFocus?.(e);
          if (freezed) return;
          if (!isDesktop) return;
          controls.start("open" as AnimationVariants);
        }}
        onBlur={(e) => {
          onBlur?.(e);
          if (freezed) return;
          controls.start("idle" as AnimationVariants);
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
        layout
        layoutId={id}
        className={clsx(
          "relative mx-auto overflow-hidden bg-black rounded-3xl focus:outline focus:outline-1 focus:outline-offset-4 focus:outline-current",
          className
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
      className={clsx("w-full h-full p-4", rest.className)}
    >
      {children}
    </motion.main>
  );
};

const Animated = (props: HTMLMotionProps<"div">) => (
  <motion.div
    {...(props as any)}
    className={clsx("w-full h-full", props.className)}
    layout
  />
);

const parts = {
  Root,
  Body,
  Bar,
  Animated,
};

export default parts;
