"use client";

import Moon from "@/assets/icons/Moon";
import Sun from "@/assets/icons/Sun";
import { useState } from "react";

export default function ToggleTheme() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") : "light"
  );

  return (
    <button
      className="flex items-center justify-center w-10 m-0 no-underline transition-colors rounded-full aspect-square hover:transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-700 dark:text-white text-neutral-900"
      onClick={() => {
        if (theme === "dark" && typeof window !== "undefined") {
          document.documentElement.classList.remove("dark");
          setTheme("light");
          localStorage.setItem("theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          setTheme("dark");
          localStorage.setItem("theme", "dark");
        }
      }}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
