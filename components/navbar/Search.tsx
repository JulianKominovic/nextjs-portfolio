"use client";
import { AnimatePresence, motion } from "framer-motion";
import * as Popover from "@radix-ui/react-popover";
import SearchIcon from "@/assets/icons/Search";
import { useRef, useState } from "react";
import CommonButton from "../markdown/CommonButton";
import join from "@/lib/join";
import MiniSearch, { SearchResult } from "minisearch";
import Link from "next/link";

export default function Searchbar({ indexes, setIsOpen, isOpen }) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const index = useRef(
    MiniSearch.loadJSON(indexes, {
      fields: ["title", "content", "description"],
      storeFields: ["title", "description", "content", "filename"],
      idField: "filename",
    })
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const onChange = async (e) => {
    if (!e.target.value) return setResults([]);
    if (!index.current) return;
    const query = e.target.value;
    setResults(index.current.search(query).slice(0, 5));
  };
  return (
    <Popover.Root
      open={isOpen}
      onOpenChange={(isOpen) => {
        setResults([]);
      }}
    >
      <Popover.Trigger asChild>
        <motion.div
          className={join(
            "flex items-center !m-0 h-10 ",
            isOpen && "dark:bg-neutral-800 bg-neutral-100 rounded-full"
          )}
        >
          <CommonButton
            key={"fire-hyper-search"}
            onClick={() => setIsOpen(!isOpen)}
            className={join("m-0 flex items-center !w-10")}
          >
            {isOpen ? "x" : <SearchIcon />}
          </CommonButton>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                ref={inputRef}
                onChange={onChange}
                key="input-hyper-search"
                initial={{
                  width: 0,
                }}
                animate={{
                  width: 268,
                }}
                exit={{
                  width: 0,
                  transition: {
                    type: "keyframes",
                    duration: 0.5,
                  },
                }}
                transition={{
                  type: "spring",
                  duration: 1,
                }}
                onAnimationComplete={(e) => {
                  inputRef.current?.focus();
                }}
                type="text"
                autoFocus={true}
                className="py-2 bg-transparent rounded-full outline-none"
              />
            )}
          </AnimatePresence>
        </motion.div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content sideOffset={16}>
          <AnimatePresence>
            {results.length > 0 && (
              <motion.ul
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="flex flex-col gap-4 p-4 overflow-auto rounded-xl bg-neutral-800 w-72 h-fit max-h-96"
              >
                {results.map((pr) => {
                  return (
                    <Link
                      onClick={() => setIsOpen(false)}
                      href={
                        "/blog/" + pr.id + "?highlight=" + pr.terms.join(" ")
                      }
                      key={pr.id}
                    >
                      <h4 className="text-lg font-medium">{pr.title}</h4>
                      <p className="text-neutral-500"> {pr.description}</p>
                    </Link>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
