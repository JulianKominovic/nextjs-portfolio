import join from "@/lib/join";
import { TAILWIND_COLORS } from "@/public/tailwind.colors";
import { DashboardSettingsProps } from "./DashboardSettings";

export default function PastelColors({
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
              `bg-${color}-50 `
            )}
            key={color + "bg"}
            onClick={() => {
              console.log(selectedLayoutItem?.classes);
              updateSelectedLayoutItem({
                ...selectedLayoutItem,
                classes: {
                  card: join(
                    `bg-${color}-50 `,
                    selectedLayoutItem?.classes?.card
                      ?.split(" ")
                      .filter((c) => !c.startsWith("bg-"))
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
