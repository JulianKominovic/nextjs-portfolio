"use client";

import ArrowUp from "@/assets/icons/ArrowUp";
import CommonButton from "./CommonButton";

export default function GoToTop() {
  return (
    <CommonButton
      onClick={() => typeof window !== "undefined" && window.scrollTo(0, 0)}
    >
      <ArrowUp />
    </CommonButton>
  );
}
