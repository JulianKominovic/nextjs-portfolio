"use client";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "../../styles/react-grid-layout.css";

// import Grid from "../../sections/Grid";
import { useState } from "react";

import DashboardSettings from "@/components/tools/DashboardSettings";
export type LayoutItem = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
} & {
  text: string;
  href?: string;
  icon?: string;
  imageSrc?: string;
  classes?: {
    card?: string;
    text?: string;
    icon?: string;
    image?: string;
  };
};

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

  function updateSelectedLayoutItem(newItem: Partial<LayoutItem>) {
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
  }

  const selectedLayoutItem = layout.find((item) => item.i === selected);

  return (
    <main className="relative max-w-5xl min-h-screen py-8 ml-4 mr-auto overflow-x-hidden">
      {/* <Grid
        setLayout={setLayout}
        layout={layout}
        setSelected={setSelected}
        selected={selected}
        updateSelectedLayoutItem={updateSelectedLayoutItem}
        selectedLayoutItem={selectedLayoutItem}
      />
      <nav className="fixed right-4 top-4 flex flex-wrap h-[calc(100vh-40px)] gap-4 px-8 py-4 overflow-hidden transition-all border w-96 bg-neutral-50 border-neutral-200  rounded-xl">
        <DashboardSettings
          updateSelectedLayoutItem={updateSelectedLayoutItem}
          selectedLayoutItem={selectedLayoutItem}
        />
      </nav> */}
    </main>
  );
}
