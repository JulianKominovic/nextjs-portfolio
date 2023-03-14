"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
export default function LiveProgress() {
  const [scrolled, setScrolled] = useState({});
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
    setScrolled(scrollDelta);
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

  if (scrolled === 0) return null;
  return (
    <motion.div className="flex items-center gap-2">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: scrolled } as any}
        transition={{ duration: 0.2 }}
        className="h-1 rounded-full bg-gradient-to-r from-neutral-400 to-neutral-800"
      ></motion.div>
      <AnimatePresence>
        {scrolling ? (
          <motion.div
            key="text-scrolled"
            initial={{ width: 0, scaleX: 0 }}
            animate={{ width: "34px", scaleX: 1 }}
            exit={{ width: 0, scaleX: 0 }}
            transition={{ duration: 0.2 }}
          >
            {scrolled}%
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
