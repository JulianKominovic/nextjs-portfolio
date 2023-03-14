"use client";

import RenderSimpleIcon from "@/components/icons/RenderSimpleIcon";
import Image from "next/image";
import { siSimpleicons } from "simple-icons";
import { Responsive as GridLayout } from "react-grid-layout";
import { useEffect, useState } from "react";
import { LayoutItem } from "@/app/dashboard/page";
import join from "@/lib/join";

async function setLayout(layout: LayoutItem[]) {
  fetch("/api/portfolio-layout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(layout),
  });
}

export default function PortfolioGrid({ layout }: { layout: LayoutItem[] }) {
  const [width, setWidth] = useState(
    typeof window !== "undefined" && window.innerWidth > 1024
      ? 1024
      : window.innerWidth
  );
  const [localLayout, setLocalLayout] = useState(layout);

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth > 1024) setWidth(1024);
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWidth, {
      passive: true,
    });
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function deleteLayoutItem(item: LayoutItem) {
    const newLayout = localLayout.filter((el) => el.i !== item.i);
    setLocalLayout(newLayout);
  }

  return (
    <>
      <button
        onClick={() => {
          setLayout(localLayout as any);
        }}
      >
        SAVE LAYOUT
      </button>

      <GridLayout
        useCSSTransforms
        layouts={{
          lg: localLayout,
          md: localLayout,
          sm: localLayout,
          xs: localLayout,
          xxs: localLayout,
        }}
        breakpoints={{ lg: 1200, md: 996, sm: 540, xs: 480, xxs: 0 }}
        cols={{
          lg: 5,
          md: 5,
          sm: 5,
          xs: 1,
          xxs: 1,
        }}
        margin={[16, 16]}
        rowHeight={30}
        onLayoutChange={(newLayout) => {
          console.log(newLayout);
          const finalLayout = localLayout.map((item) => {
            const matched = newLayout.find((el) => el.i === item.i);
            const coords = {
              x: (matched as any).x,
              y: (matched as any).y,
              w: (matched as any).w,
              h: (matched as any).h,
            };
            return {
              ...item,
              ...coords,
            };
          });
          setLocalLayout(finalLayout as any);
        }}
        className="layout"
        resizeHandles={["se"]}
        width={width}
        //   compactType="horizontal"
        //   autoSize={true}
        //   verticalCompact={true}
        // isDraggable={false}
        // isResizable={false}
      >
        {localLayout.map((item: LayoutItem) => {
          const { text, icon, href, imageSrc, classes, ...rest } = item;
          return (
            <div
              {...rest}
              key={item.i}
              onClick={(e) => {
                e.ctrlKey && deleteLayoutItem(item);
              }}
              className={join(
                "flex items-center justify-between p-4 border  border-neutral-100 shadow-sm rounded-xl hover:bg-neutral-100 ",
                classes?.card ? classes.card : "bg-neutral-50",
                (rest as any).className
              )}
            >
              {text ? (
                <p className={join(classes?.text, "focus:outline-offset-4")}>
                  {text}
                </p>
              ) : null}
              {imageSrc ? (
                <Image
                  alt={text}
                  className={join(
                    "object-contain w-12 h-12 rounded-full",
                    classes?.image
                  )}
                  src={imageSrc}
                  width={200}
                  height={60}
                />
              ) : null}
              {icon ? (
                <RenderSimpleIcon
                  svgPath={siSimpleicons[icon]?.path || ""}
                  className={join(classes?.icon)}
                />
              ) : null}
              {href ? <a></a> : null}
            </div>
          );
        })}
      </GridLayout>
    </>
  );
}
