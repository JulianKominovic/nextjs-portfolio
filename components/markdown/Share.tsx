"use client";

import CommonButton from "./CommonButton";
import ShareIcon from "@/assets/icons/Share";
export default function Share() {
  return (
    <CommonButton
      className="flex sm:hidden"
      onClick={() => {
        if (navigator.share) {
          navigator
            .share({
              title: document.title,
              url: window.location.href,
              text: document.title,
            })
            .catch(console.error);
        } else {
          // fallback
        }
      }}
    >
      <ShareIcon />
    </CommonButton>
  );
}
