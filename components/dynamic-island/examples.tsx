"use client";
import DynamicIsland from "./index";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";
import { siGithub } from "simple-icons";
import RenderSimpleIcon from "../icons/RenderSimpleIcon";
import Image from "next/image";

type DemoTypes =
  | "notification"
  | "music"
  | "call"
  | "chat"
  | "alert"
  | "status";
const RenderDemo = ({ demo, open }) => {
  switch (demo) {
    case "notification":
      return <DynamicIslandNotificationExample open={open} />;
    case "music":
      return <DynamicIslandMusicExample open={open} />;
    default:
      return <DynamicIslandNotificationExample open={open} />;
  }
};

export const DynamicIslandDemo = () => {
  const [open, setOpen] = useState(false);
  const [demo, setDemo] = useState<DemoTypes>("notification");

  return (
    <>
      <section className="max-w-md p-4 mx-auto rounded-lg h-44 bg-slate-100">
        <RenderDemo demo={demo} open={open} />
      </section>
      <footer className="flex flex-wrap items-center gap-4 my-4">
        {["notification", "music", "call", "chat", "alert", "status"].map(
          (demo) => (
            <button
              key={demo}
              className="px-4 py-3 rounded-lg text-neutral-800 bg-neutral-200"
              onClick={() => {
                setDemo(demo as DemoTypes);
              }}
            >
              {demo}
            </button>
          )
        )}
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

export const DynamicIslandNotificationExample = ({ open }) => {
  return (
    <DynamicIsland.Root open={open}>
      <DynamicIsland.Bar className="flex items-center justify-between px-4 text-sm">
        <FeatherIcon icon="bell" size={14} className="bg-red" fill="white" />
        <div className="flex items-center justify-center min-w-[20px] h-5 bg-red-600 rounded-full text-white px-2 gap-2">
          1
        </div>
      </DynamicIsland.Bar>
      <DynamicIsland.Body className="flex items-center gap-4">
        <RenderSimpleIcon svgPath={siGithub.path} className="text-4xl" />

        <aside className="flex flex-col justify-between w-full h-full py-1">
          <div className="flex flex-col">
            <small className="mb-1 text-xs text-neutral-500">Github</small>
            <h3 className="m-0 text-sm font-semibold">Review requested</h3>
            <p className="m-0 text-xs text-neutral-400">
              You have been requested to review a pull request.
            </p>
            <p className="m-0 text-xs text-neutral-400">
              <b className="text-neutral-300">victor</b> wants to merge{" "}
              <b className="text-neutral-300">develop</b> into{" "}
              <b className="text-neutral-300">main</b>.
            </p>
          </div>
          <footer className="flex items-center gap-2">
            <button className="flex-grow px-4 py-2 text-sm rounded-lg bg-neutral-800">
              Dismiss
            </button>
            <button className="flex-grow px-4 py-2 text-sm text-blue-200 bg-blue-900 rounded-lg">
              View pull request
            </button>
          </footer>
        </aside>
      </DynamicIsland.Body>
    </DynamicIsland.Root>
  );
};

export const DynamicIslandMusicExample = ({ open }) => {
  return (
    <DynamicIsland.Root open={open}>
      <DynamicIsland.Bar className="flex items-center justify-between px-4 text-sm">
        <FeatherIcon icon="play" size={14} className="bg-red" fill="white" />

        <div className="flex -space-x-1">
          <FeatherIcon icon="bar-chart-2" size={18} fill="white" />
          <FeatherIcon
            icon="bar-chart-2"
            size={18}
            fill="white"
            style={{
              transform: "rotateY(180deg)",
            }}
          />
          <FeatherIcon icon="bar-chart-2" size={18} fill="white" />
        </div>
      </DynamicIsland.Bar>
      <DynamicIsland.Body className="flex flex-col gap-4">
        <header className="flex items-center justify-between">
          <aside className="flex gap-4 h-fit">
            <Image
              src="/images/dynamic-island/duki-album.jpeg"
              alt="Duki Album cover"
              width={55}
              height={55}
              className="m-0 rounded-lg"
            ></Image>
            <div>
              <h3 className="m-0 text-base font-semibold">Malbec</h3>
              <small className="m-0 text-sm text-neutral-500">Duki</small>
            </div>
          </aside>
          <div className="flex -space-x-1">
            <FeatherIcon icon="bar-chart-2" size={20} fill="white" />
            <FeatherIcon
              icon="bar-chart-2"
              size={20}
              fill="white"
              style={{
                transform: "rotateY(180deg)",
              }}
            />
            <FeatherIcon icon="bar-chart-2" size={20} fill="white" />
          </div>
        </header>
        <footer className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <p className="m-0 text-sm text-neutral-500">2:16</p>
            <input
              type="range"
              className="w-full h-1 rounded-full bg-neutral-200"
            />
            <p className="m-0 text-sm text-neutral-500">3:27</p>
          </div>
          <div className="flex items-center justify-evenly">
            <FeatherIcon icon="repeat" size={20} fill="white" />
            <FeatherIcon icon="skip-back" size={20} fill="white" />
            <FeatherIcon icon="pause" size={20} fill="white" />
            <FeatherIcon icon="skip-forward" size={20} fill="white" />
            <FeatherIcon icon="shuffle" size={20} fill="white" />
          </div>
        </footer>
      </DynamicIsland.Body>
    </DynamicIsland.Root>
  );
};
