"use client";
import DynamicIsland from "./index";
import {
  BsPlay,
  BsBellFill,
  BsPlayFill,
  BsRepeat,
  BsSkipBackwardFill,
  BsPauseFill,
  BsSkipForwardFill,
  BsShuffle,
  BsPhoneFill,
  BsTelephoneFill,
} from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { siGithub } from "simple-icons";
import RenderSimpleIcon from "../icons/RenderSimpleIcon";
import Image from "next/image";
import WavingMusic from "@/assets/icons/WavingMusic";
import { AnimatePresence } from "framer-motion";

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
    case "call":
      return <DynamicIslandCallExample open={open} />;
    case "chat":
      return <DynamicIslandChatExample open={open} />;
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
        <BsBellFill className="text-sm text-white animate-bounce" />
        <div className="flex items-center justify-center min-w-[20px] h-5 bg-red-600 rounded-full text-white px-2 gap-2">
          1
        </div>
      </DynamicIsland.Bar>
      <DynamicIsland.Body className="flex items-center gap-4">
        <RenderSimpleIcon svgPath={siGithub.path} className="text-4xl" />

        <aside className="flex flex-col justify-between w-full h-full py-1">
          <div className="flex flex-col">
            <small className="mb-1 text-xs text-neutral-500">Github</small>
            <h3 className="m-0 text-sm font-semibold text-white">
              Review requested
            </h3>
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
            <button className="flex-grow px-4 py-2 text-sm rounded-lg bg-neutral-800 text-neutral-100">
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
        <BsPlayFill className="text-lg text-white " />

        <WavingMusic className="w-10 h-4" />
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
            <div className="flex flex-col">
              <h3 className="m-0 text-base font-semibold text-white">Malbec</h3>
              <small className="m-0 text-sm text-neutral-500">Duki</small>
            </div>
          </aside>
          <WavingMusic className="w-10 h-6" />
        </header>
        <footer className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <p className="m-0 text-sm text-neutral-500">2:16</p>
            <input
              defaultValue={67}
              type="range"
              className="w-full h-1 rounded-full bg-neutral-200"
            />
            <p className="m-0 text-sm text-neutral-500">3:27</p>
          </div>
          <div className="flex items-center justify-evenly">
            <BsRepeat className="text-sm text-white" />
            <BsSkipBackwardFill className="text-sm text-white" />
            <BsPauseFill className="text-3xl text-white" />
            <BsSkipForwardFill className="text-sm text-white" />
            <BsShuffle className="text-sm text-white" />
          </div>
        </footer>
      </DynamicIsland.Body>
    </DynamicIsland.Root>
  );
};

export const DynamicIslandCallExample = ({ open }) => {
  const [seconds, setSeconds] = useState(0);
  const [callState, setCallState] = useState<"calling" | "talking">("calling");
  const intervalId = useRef<NodeJS.Timer | null>(null);
  useEffect(() => {
    if (callState === "calling") {
      setSeconds(0);
      return clearInterval(intervalId.current as any);
    }
    intervalId.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId.current as any);
    };
  }, [callState]);

  return (
    <>
      <DynamicIsland.Root
        open={open}
        barHeight={callState === "calling" ? "large" : "normal"}
        barWidth={callState === "calling" ? "large" : "normal"}
        freezed
      >
        <DynamicIsland.Bar>
          {callState === "calling" ? (
            <DynamicIsland.Animated className="flex items-center gap-4 px-4 text-sm">
              <Image
                src="/images/dynamic-island/elon-musk-profile.jpg"
                alt="Elon Musk"
                className="rounded-full"
                width={40}
                height={40}
              />
              <div className="inline-block">
                <small className="m-0 text-neutral-300">Discord</small>
                <h3 className="m-0 text-sm font-semibold text-white">
                  Elon Musk
                </h3>
              </div>
              <div className="flex gap-2 ml-auto">
                <button
                  className="animate-bounce flex items-center justify-center w-8 h-8 bg-green-600 rounded-[50%]"
                  onClick={() => setCallState("talking")}
                >
                  <BsTelephoneFill className="text-white" />
                </button>
                <button className="flex items-center justify-center w-8 h-8 bg-red-600 rounded-[50%]">
                  <BsTelephoneFill className="text-white rotate-[135deg]" />
                </button>
              </div>
            </DynamicIsland.Animated>
          ) : (
            <DynamicIsland.Animated className="flex items-center justify-between w-full gap-4 px-4 text-sm">
              <div className="flex items-center h-full gap-2">
                <BsTelephoneFill className="text-green-400" />
                <p className="text-green-400">
                  {Intl.DateTimeFormat("en", {
                    minute: "numeric",
                    second: "numeric",
                  }).format(seconds * 1000)}
                </p>
              </div>
              <WavingMusic
                className="w-10 h-4"
                waveLinesClassName="!bg-green-400"
              />
            </DynamicIsland.Animated>
          )}
        </DynamicIsland.Bar>
        <DynamicIsland.Body className="flex items-center gap-4"></DynamicIsland.Body>
      </DynamicIsland.Root>

      <button
        onClick={() => {
          setCallState(callState === "calling" ? "talking" : "calling");
        }}
      >
        Toggle call state ({callState})
      </button>
    </>
  );
};

export const DynamicIslandChatExample = ({ open }) => {
  const messages = [
    "Hi!",
    "Did you hear about the new Tesla?",
    "It's amazing!",
    "I'm going to buy it!",
    "I'm so excited!",
    "Hurts 30k, but it's worth it!",
  ];
  const [messageIdx, setMessageIdx] = useState(0);
  const [state, setState] = useState<"idle" | "incomming-message">(
    "incomming-message"
  );
  const [pause, setPause] = useState(false);
  const currentMessage = messages[messageIdx];

  useEffect(() => {
    const intervalShowId = setInterval(() => {
      setState("idle");
    }, 3000);

    const intervalId = setInterval(() => {
      setState("incomming-message");
      setMessageIdx((prev) => (prev + 1 >= messages.length ? 0 : prev + 1));
    }, 6000);

    if (pause) {
      clearInterval(intervalId);
      clearInterval(intervalShowId);
    }

    return () => {
      clearInterval(intervalId);
      clearInterval(intervalShowId);
    };
  }, [messages.length, pause]);

  return (
    <DynamicIsland.Root
      open={open}
      barHeight={state === "incomming-message" ? "large" : "normal"}
      barWidth={state === "incomming-message" ? "large" : "normal"}
      onHoverStart={() => setPause(true)}
      onHoverEnd={() => setPause(false)}
    >
      <DynamicIsland.Bar>
        {state === "incomming-message" && (
          <DynamicIsland.Animated className="flex items-center">
            <Image
              src="/images/dynamic-island/elon-musk-profile.jpg"
              alt="Elon Musk"
              className="rounded-full"
              width={40}
              height={40}
            />
            <div className="inline-block">
              <small className="m-0 text-neutral-300">Elon musk</small>
              <h3 className="m-0 text-sm font-semibold text-white truncate">
                {currentMessage}
              </h3>
            </div>
          </DynamicIsland.Animated>
        )}
      </DynamicIsland.Bar>
      <DynamicIsland.Body>
        <p>{currentMessage}</p>
      </DynamicIsland.Body>
    </DynamicIsland.Root>
  );
};
