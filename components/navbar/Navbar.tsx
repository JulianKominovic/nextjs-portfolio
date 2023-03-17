"use client";

import { AnimatePresence, motion } from "framer-motion";
import Blog from "@/assets/icons/Blog";
import Home from "@/assets/icons/Home";
import Link from "next/link";
import Searchbar from "./Search";
import ToggleTheme from "./ToggleTheme";
import { useState } from "react";

export default function Navbar({ indexes }) {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <motion.nav className="z-50 fixed w-[100vw] prose dark:prose-invert -translate-x-1/2 top-2 sm:top-4 left-1/2">
      <ul className="flex gap-4 px-4 py-1 mx-auto overflow-hidden list-none bg-white bg-opacity-50 border rounded-full w-80 sm:mx-auto dark:bg-opacity-50 dark:bg-neutral-900 justify-evenly backdrop-blur-md dark:border-neutral-800">
        <AnimatePresence key="items-layout">
          {!searchIsOpen && (
            <motion.li className="p-0 m-0" key="home-opt">
              <Link
                className="flex items-center justify-center w-10 m-0 no-underline transition-colors bg-transparent rounded-full aspect-square hover:transition-colors bg-neutral-50 hover:bg-neutral-300 dark:hover:bg-neutral-700"
                href="/"
              >
                <Home />
              </Link>
            </motion.li>
          )}
          {!searchIsOpen && (
            <motion.li className="p-0 m-0" key="blog-opt">
              <Link
                className="flex items-center justify-center w-10 m-0 no-underline transition-colors bg-transparent rounded-full aspect-square hover:transition-colors bg-neutral-50 hover:bg-neutral-300 dark:hover:bg-neutral-700"
                href="/blog"
              >
                <Blog />
              </Link>
            </motion.li>
          )}
          <motion.li className="p-0 m-0" key="search-opt">
            <Searchbar
              indexes={indexes}
              isOpen={searchIsOpen}
              setIsOpen={setSearchIsOpen}
            />
          </motion.li>
          {!searchIsOpen && (
            <motion.li className="p-0 m-0" key="theme-opt">
              <ToggleTheme />
            </motion.li>
          )}
        </AnimatePresence>
      </ul>
    </motion.nav>
  );
}
