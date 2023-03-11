"use client";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "../styles/react-grid-layout.css";

import Grid from "../sections/Grid";
import GridItem, { GridItemProps } from "@/components/grid/ItemRenderer";
import { useState } from "react";

import DashboardSettings from "@/components/tools/DashboardSettings";
export type LayoutItem = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
} & GridItemProps;

function AddCardButton({ children, onClick }) {
  return (
    <button
      className="h-10 hover:opacity-40 [&__p]:text-neutral-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function Home() {
  const [layout, setLayout] = useState<LayoutItem[]>([
    {
      i: "a",
      x: 0,
      y: 0,
      w: 1,
      h: 2,
      text: "test",
    },
    {
      i: "b",
      x: 0,
      y: 0,
      w: 1,
      h: 2,
      text: "b test",
    },
  ]);

  const [selected, setSelected] = useState<LayoutItem["i"] | null>(null);

  return (
    <main className="relative max-w-5xl min-h-screen py-8 mx-auto overflow-x-hidden">
      <Grid layout={layout} setSelected={setSelected} selected={selected} />
      <nav className="fixed h-12 px-8 py-4 overflow-hidden transition-all -translate-x-1/2 border w-96 bottom-4 bg-neutral-50 border-neutral-200 left-1/2 hover:h-96 hover:w-[600px] hover:transition-all rounded-xl flex flex-wrap gap-4 ">
        <DashboardSettings
          updateSelectedLayoutItem={(newItem: LayoutItem) => {
            setLayout((prev) => {
              return prev.map((item) => {
                if (item.i === selected) {
                  return {
                    ...item,
                    ...newItem,
                  };
                }
                return item;
              });
            });
          }}
          selectedLayoutItem={layout.find((item) => item.i === selected)}
        />
      </nav>
    </main>
  );
}
