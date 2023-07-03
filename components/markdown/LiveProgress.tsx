"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
export default function LiveProgress() {
  const [scrolled, setScrolled] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const timerRef = useRef<NodeJS.Timer>();

  const calculateScrolled = useCallback(() => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height = Math.ceil(
      document.documentElement.scrollHeight -
        (window.innerHeight || document.documentElement.clientHeight)
    );
    const scrollDelta = Math.ceil((winScroll / height) * 100);
    setScrolled(scrollDelta > 100 ? 100 : scrollDelta);
    setScrolling(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setScrolling(false);
      clearTimeout(timerRef.current);
    }, 1000);
  }, []);

  useEffect(() => {
    calculateScrolled();
    window.addEventListener("scroll", calculateScrolled, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", calculateScrolled);
    };
  }, [calculateScrolled]);

  return (
    <AnimatePresence>
      {scrolled !== 0 && (
        <motion.div
          className="flex items-center gap-2 w-fit"
          key="text-scrolled-bar"
          exit={{
            width: 0,
          }}
        >
          <motion.div
            animate={{ width: scrolled } as any}
            className="h-1 rounded-full bg-neutral-700 dark:bg-neutral-400"
          ></motion.div>
          <AnimatePresence>
            {scrolling ? (
              <motion.div
                key="text-scrolled"
                className="mr-3 origin-left"
                initial={{ width: 0, scaleX: 0 }}
                animate={{ width: 34, scaleX: 1 }}
                exit={{ width: 0, scaleX: 0 }}
                transition={{
                  duration: 0.4,
                }}
              >
                {scrolled}%
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
