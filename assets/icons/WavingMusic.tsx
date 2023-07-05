import clsx from "clsx";
import React from "react";
import "./waving-music.css";
const WavingMusic = ({
  className,
  waveLinesClassName,
}: {
  className?: string;
  waveLinesClassName?: string;
}) => {
  return (
    <div className={clsx(className, "flex items-center gap-1 text-white")}>
      <div className={clsx("wave-line", waveLinesClassName)}></div>
      <div className={clsx("wave-line", waveLinesClassName)}></div>
      <div className={clsx("wave-line", waveLinesClassName)}></div>
      <div className={clsx("wave-line", waveLinesClassName)}></div>
      <div className={clsx("wave-line", waveLinesClassName)}></div>
      <div className={clsx("wave-line", waveLinesClassName)}></div>
    </div>
  );
};

export default WavingMusic;
