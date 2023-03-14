import join from "@/lib/join";
import { TAILWIND_COLORS } from "@/public/tailwind.colors";
import { DashboardSettingsProps } from "./DashboardSettings";

export default function FontColor({
  updateSelectedLayoutItem,
  selectedLayoutItem,
}: DashboardSettingsProps) {
  return (
    <hgroup className="flex flex-wrap w-full gap-3 p-4 mb-4">
      {TAILWIND_COLORS.map((color) => {
        return (
          <button
            className={join(
              "min-w-[64px] h-16 px-4 rounded-lg shadow-lg focus:ring focus:ring-offset-2 focus:ring-indigo-200",
              `text-${color}-50 `
            )}
            key={color + "bg"}
            onClick={() => {
              console.log(selectedLayoutItem?.classes);
              updateSelectedLayoutItem({
                ...selectedLayoutItem,
                classes: {
                  card: join(
                    `text-${color}-50 `,
                    selectedLayoutItem?.classes?.card
                      ?.split(" ")
                      .filter((c) => TAILWIND_COLORS.some((c) => c))
                      .join(" ")
                  ),
                },
              } as any);
            }}
          >
            {color}
          </button>
        );
      })}
    </hgroup>
  );
}
