import join from "@/lib/join";
import React from "react";

export default function CommonButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={join(
        "flex items-center justify-center w-8 transition-colors rounded-full aspect-square hover:transition-colors hover:bg-neutral-200",
        props.className
      )}
    />
  );
}
