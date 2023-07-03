"use client";
import DynamicIsland from "./index";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";

export const DynamicIslandDemo = () => {
  return (
    <>
      <div className="max-w-md p-4 mx-auto rounded-lg h-80 bg-slate-100">
        <DynamicIsland.Root>
          <DynamicIsland.Bar className="flex items-center justify-between px-4">
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-4 h-4 bg-red-700 rounded-full"></div>
          </DynamicIsland.Bar>
          {/* <DynamicIsland.Annex>
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </DynamicIsland.Annex> */}
          <DynamicIsland.Body>
            <div className="w-full h-10 bg-white rounded-lg">hola</div>
            <div className="w-full h-10 bg-white rounded-lg">hola</div>
          </DynamicIsland.Body>
        </DynamicIsland.Root>
      </div>
    </>
  );
};

export const DynamicIslandNotificationExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="max-w-md p-4 mx-auto rounded-lg h-44 bg-slate-100">
        <DynamicIsland.Root open={open}>
          <DynamicIsland.Bar className="flex items-center justify-between px-4 text-sm">
            <FeatherIcon
              icon="bell"
              size={14}
              className="bg-red"
              fill="white"
            />
            <div className="flex items-center justify-center min-w-[20px] h-5 bg-red-600 rounded-full text-white px-2 gap-2">
              3
              <DynamicIsland.OnlyShowWhenExpanded>
                Notifications
              </DynamicIsland.OnlyShowWhenExpanded>
            </div>
          </DynamicIsland.Bar>
          <DynamicIsland.Body>
            <div className="w-full h-10 bg-white rounded-lg">hola</div>
          </DynamicIsland.Body>
        </DynamicIsland.Root>
      </section>
      <footer className="flex items-center gap-4 my-4">
        <button
          className="px-4 py-3 rounded-lg text-neutral-800 bg-neutral-200"
          onClick={() => {
            setOpen(true);
            setTimeout(() => {
              setOpen(false);
            }, 3000);
          }}
        >
          New notification
        </button>
        <button
          className="px-4 py-3 rounded-lg text-neutral-800 bg-neutral-200"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {open ? "Close" : "Open"}
        </button>
      </footer>
    </>
  );
};
