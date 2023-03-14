import { LayoutItem } from "@/app/dashboard/page";
import { useState, useEffect } from "react";
import { Responsive as GridLayout } from "react-grid-layout";

import Image from "next/image";
import join from "@/lib/join";
import RenderSimpleIcon from "@/components/icons/RenderSimpleIcon";
import { siSimpleicons } from "simple-icons";

type GridProps = {
  layout: LayoutItem[];
  selected: string | null;
  setSelected: (value: string | null) => void;
  updateSelectedLayoutItem: (value: Partial<LayoutItem>) => void;
  selectedLayoutItem: LayoutItem | undefined;
  setLayout: (value: LayoutItem[]) => void;
};

const BREAKPOINT = 1000;
const ROW_HEIGHT = 40;
const MARGINS = 32;
const BREAKPOINTS = { lg: 1200, md: 996, sm: 540, xs: 480, xxs: 0 };
const COLS = {
  lg: 5,
  md: 5,
  sm: 5,
  xs: 1,
  xxs: 1,
};

export default function Grid({
  layout,
  selected,
  setSelected,
  updateSelectedLayoutItem,
  setLayout,
  selectedLayoutItem,
}: GridProps) {
  const [width, setWidth] = useState(
    window?.innerWidth > BREAKPOINT ? BREAKPOINT : window?.innerWidth
  );
  const [editing, setEditing] = useState(true);

  useEffect(() => {
    if (!window) return;
    const updateWidth = () => {
      if (window?.innerWidth > BREAKPOINT) setWidth(BREAKPOINT);
      setWidth(window?.innerWidth);
    };
    window?.addEventListener("resize", updateWidth, {
      passive: true,
    });
    return () => window?.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const fetchOgInfo = async (url: string) => {
      const res = await fetch(`/api/scrapping?url=${url}`);
      const data = await res.json();
      return { ...data, requestedUrl: url };
    };
    if (!editing) {
      const layoutItemsWithHref = layout
        .map((item) => item.href)
        .filter(Boolean) as string[];
      console.log(layoutItemsWithHref);
      Promise.allSettled(layoutItemsWithHref.map(fetchOgInfo)).then(
        (results) => {
          setLayout((prev: LayoutItem[]) => {
            return prev.map((item) => {
              const matched = results.find(
                (el) => el.value.requestedUrl === item.href
              );
              console.log({
                matched,
                item,
              });
              if (matched && matched.status === "fulfilled") {
                return {
                  ...item,
                  imageSrc: matched?.value?.image?.url,
                };
              }
              return item;
            });
          });
        }
      );
    }
  }, [editing]);

  const columnsNumber = width > BREAKPOINTS.xs ? 5 : 1;
  const columnWidth = width / columnsNumber;
  return (
    <>
      <button
        onClick={() => {
          setEditing(!editing);
        }}
      >
        Set editing {editing ? "OFF" : "ON"}
      </button>
      <GridLayout
        useCSSTransforms
        layouts={{
          lg: layout,
          md: layout,
          sm: layout,
          xs: layout,
          xxs: layout,
        }}
        breakpoints={BREAKPOINTS}
        cols={COLS}
        compactType="horizontal"
        margin={[MARGINS, MARGINS]}
        rowHeight={ROW_HEIGHT}
        onLayoutChange={(newLayout) => {
          const finalLayout = layout.map((item) => {
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
          setLayout(finalLayout);
        }}
        className="layout"
        resizeHandles={["se"]}
        verticalCompact={true}
        width={width}
        isDraggable={editing}
        isResizable={editing}
      >
        {layout.map((item: LayoutItem) => {
          const { text, icon, href, imageSrc, classes, ...rest } = item;

          const height = item.h * ROW_HEIGHT + item.h * MARGINS;
          const width = item.w * columnWidth;
          const isVertical = height > width;
          console.log({
            height,
            width,
            isVertical,
            columnWidth,
            h: item.h,
            w: item.w,
          });

          return (
            <a
              {...rest}
              key={item.i}
              href={href}
              target="_blank"
              className={join(
                "flex gap-4 items-center justify-between border  border-neutral-100 shadow-sm rounded-xl hover:bg-neutral-100 overflow-hidden",
                classes?.card ? classes.card : "bg-neutral-50",
                (rest as any).className,
                selected === item.i
                  ? " ring-2 ring-neutral-300 ring-offset-8"
                  : "",
                !text && imageSrc ? "p-0" : "p-4",
                isVertical ? "flex-col" : "flex-row",
                href ? "cursor-pointer" : "cursor-default"
              )}
              onClick={(e) => {
                setSelected(selected === item.i ? null : item.i);
                if (editing) e.preventDefault();
              }}
            >
              {text ? (
                <p
                  contentEditable
                  suppressContentEditableWarning={true}
                  onInput={(e) => {
                    updateSelectedLayoutItem({
                      ...selectedLayoutItem,
                      text: e.currentTarget.textContent,
                    });
                  }}
                  className={join(
                    classes?.text,
                    "focus:outline-offset-4 block w-full",
                    imageSrc && !isVertical ? "max-w-[33%]" : ""
                  )}
                >
                  {text}
                </p>
              ) : null}
              {imageSrc ? (
                <img
                  alt={text}
                  className={join(
                    text
                      ? "object-contain w-full   h-full object-cover"
                      : "object-contain w-full h-full object-cover",
                    isVertical ? "rounded-b-xl" : "rounded-lg",
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
            </a>
          );
        })}
      </GridLayout>
    </>
  );
}
