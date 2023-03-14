import join from "@/lib/join";
import { TAILWIND_ALIGNMENTS } from "@/public/tailwind.fonts";
import { DashboardSettingsProps } from "./DashboardSettings";

export default function FontAlignment({
  updateSelectedLayoutItem,
  selectedLayoutItem,
}: DashboardSettingsProps) {
  return (
    <hgroup className="flex flex-wrap w-full gap-3 p-4 mb-4">
      {TAILWIND_ALIGNMENTS.map((align) => {
        return (
          <button
            className={join(
              "min-w-[64px] py-2 px-4 rounded-lg shadow-lg focus:ring focus:ring-offset-2 focus:ring-indigo-200 w-full",
              `text-${align}`
            )}
            key={align + "align"}
            onClick={() => {
              updateSelectedLayoutItem({
                ...selectedLayoutItem,
                classes: {
                  card: join(
                    `text-${align}`,
                    selectedLayoutItem?.classes?.card
                      ?.split(" ")
                      .filter(
                        (c) =>
                          !TAILWIND_ALIGNMENTS.some(
                            (fontalign) => `text-${fontalign}` === c
                          )
                      )
                      .join(" ")
                  ),
                },
              } as any);
            }}
          >
            {align}
          </button>
        );
      })}
    </hgroup>
  );
}
