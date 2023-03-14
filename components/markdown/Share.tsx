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
              title: "WebShare API Demo",
              url: "https://codepen.io/ayoisaiah/pen/YbNazJ",
            })
            .then(() => {
              console.log("Thanks for sharing!");
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
