"use client";

import { OGType } from "@/app/api/scrapping/route";
import join from "@/lib/join";
import * as Tooltip from "@radix-ui/react-tooltip";
import Image from "next/image";
import { AnchorHTMLAttributes, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = AnchorHTMLAttributes<any>;

const variants = {
  hide: {
    opacity: 0,
    transform: "scale3d(1,0.95,1) translate3d(0px,20px,0px)",
  },
  show: {
    opacity: 1,
    transform: "scale3d(1,1,1) translate3d(0px,0px,0px)",
  },
};
function Content(
  props: Props & {
    ogData: OGType | null;
    isLoading: boolean;
    setIsOpen: (isOpen: boolean) => void;
  }
) {
  const { ogData, isLoading, setIsOpen } = props;
  if (ogData?.error) return null;
  return (
    <Tooltip.Content asChild sideOffset={5} align="start">
      <motion.a
        {...(props as any)}
        initial={variants.hide}
        exit={variants.hide}
        animate={variants.show}
        transition={{ duration: 0.1 }}
        target={props.href?.startsWith("#") ? "_self" : "_blank"}
        className="relative block w-56 p-4 transition-all origin-top border shadow-lg hover:transition-all rounded-xl bg-neutral-50 border-neutral-200 hover:shadow-2xl hover:w-80"
      >
        {isLoading ? (
          <>
            <div className="w-full h-24 mb-2 bg-gray-300 rounded-lg animate-pulse" />
            <div className="w-full h-6 mb-2 bg-gray-300 rounded-lg animate-pulse" />
            <div className="w-full h-10 bg-gray-300 rounded-lg animate-pulse" />
          </>
        ) : (
          <>
            {ogData?.image?.url ? (
              <Image
                height={ogData?.image.height || 300}
                width={ogData?.image.width || 320}
                src={ogData?.image.url}
                alt={ogData?.title}
                className="rounded-xl"
              ></Image>
            ) : null}
            <footer
              className={join(
                "pt-2 backdrop-blur-xl bg-opacity-90 bg-neutral-50",
                ogData?.image?.url ? "-mt-12" : ""
              )}
            >
              <h4
                className={join(
                  "font-bold line-clamp-2 mb-2",
                  ogData?.image?.url ? "mt-2" : "mt-0"
                )}
              >
                {ogData?.title}
              </h4>
              <p className="text-sm font-light line-clamp-3">
                {ogData?.description}
              </p>
            </footer>
          </>
        )}
      </motion.a>
    </Tooltip.Content>
  );
}

export default function LivePreviewLinks(props: Props) {
  const [ogData, setOgData] = useState<OGType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Tooltip.Provider>
      <Tooltip.Root
        delayDuration={0}
        open={isOpen}
        onOpenChange={(status) => {
          setIsOpen(status);
          if (props.href?.startsWith("#")) {
            const element = document.querySelector(props.href);
            return setOgData({
              title: element?.textContent || "",
              description: element?.nextElementSibling?.textContent || "",
              image: {
                url: "",
                width: 0,
                height: 0,
                type: "",
              },
              favicon: "",
            });
          }

          if (status && !ogData && !isLoading) {
            setIsLoading(true);
            fetch(`/api/scrapping?url=${props.href}`)
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                setOgData(data);
                setIsLoading(false);
              })
              .catch((err) => {
                setOgData(null);
                setIsLoading(false);
              });
          }
        }}
      >
        <Tooltip.Trigger asChild>
          <a
            {...props}
            target={props.href?.startsWith("#") ? "_self" : "_blank"}
            rel="noopener noreferrer"
          />
        </Tooltip.Trigger>
        <Tooltip.Portal forceMount>
          <AnimatePresence>
            {isOpen ? (
              <Content
                {...props}
                isLoading={isLoading}
                ogData={ogData}
                setIsOpen={setIsOpen}
              />
            ) : null}
          </AnimatePresence>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
