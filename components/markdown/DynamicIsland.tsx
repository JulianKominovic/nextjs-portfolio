"use client";

import GoToTop from "./GoToTop";
import LiveProgress from "./LiveProgress";
import { motion } from "framer-motion";
import Share from "./Share";
export default function DynamicIsland() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed flex items-center gap-2 px-4 py-2 overflow-hidden -translate-x-1/2 bg-white bg-opacity-50 border-none rounded-full bottom-2 left-1/2 backdrop-blur-lg dark:bg-opacity-50 dark:bg-neutral-900"
    >
      <GoToTop />
      <Share />
      <LiveProgress />
    </motion.nav>
  );
}
