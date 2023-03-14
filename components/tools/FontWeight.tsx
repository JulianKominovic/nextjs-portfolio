import join from "@/lib/join";
import {
  TAILWIND_FONTS_SIZES,
  TAILWIND_FONTS_WEIGHTS,
} from "@/public/tailwind.fonts";
import { DashboardSettingsProps } from "./DashboardSettings";

export default function FontWeight({
  updateSelectedLayoutItem,
  selectedLayoutItem,
}: DashboardSettingsProps) {
  return (
    <hgroup className="flex flex-wrap w-full gap-3 p-4 mb-4">
      {TAILWIND_FONTS_WEIGHTS.map((weight) => {
        return (
          <button
            className={join(
              "min-w-[64px] py-2 px-4 rounded-lg shadow-lg focus:ring focus:ring-offset-2 focus:ring-indigo-200",
              `font-${weight}`
            )}
            key={weight + "weight"}
            onClick={() => {
              updateSelectedLayoutItem({
                ...selectedLayoutItem,
                classes: {
                  card: join(
                    `font-${weight}`,
                    selectedLayoutItem?.classes?.card
                      ?.split(" ")
                      .filter(
                        (c) =>
                          !TAILWIND_FONTS_WEIGHTS.some((w) => `font-${w}` === c)
                      )
                      .join(" ")
                  ),
                },
              } as any);
            }}
          >
            {weight}
          </button>
        );
      })}
    </hgroup>
  );
}
