"use client";

import Moon from "@/assets/icons/Moon";
import Sun from "@/assets/icons/Sun";
import { cookies } from "next/headers";
import { useState } from "react";

export default function ToggleTheme({ initialTheme }) {
  const [theme, setTheme] = useState(initialTheme);
  return (
    <button
      className="flex items-center justify-center w-10 m-0 no-underline transition-colors rounded-full aspect-square hover:transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-700 dark:text-white text-neutral-900"
      onClick={() => {
        if (theme === "dark" && typeof window !== "undefined") {
          document.documentElement.classList.remove("dark");
          setTheme("light");
          document.cookie = "theme=light;";
        } else {
          document.documentElement.classList.add("dark");
          setTheme("dark");
          document.cookie = "theme=dark;";
        }
      }}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
