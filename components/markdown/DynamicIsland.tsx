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
      layout
      className="fixed flex items-center gap-2 px-4 py-2 overflow-hidden -translate-x-1/2 bg-opacity-50 border rounded-full shadow-md bottom-2 bg-neutral-50 border-neutral-200 left-1/2 backdrop-blur-md"
    >
      <GoToTop />
      <Share />
      <LiveProgress />
    </motion.nav>
  );
}
