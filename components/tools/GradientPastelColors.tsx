import join from "@/lib/join";
import { TAILWIND_COLORS } from "@/public/tailwind.colors";
import { DashboardSettingsProps } from "./DashboardSettings";

export default function GradientPastelColors({
  updateSelectedLayoutItem,
  selectedLayoutItem,
}: DashboardSettingsProps) {
  return (
    <hgroup className="flex flex-wrap w-full gap-3 p-4 mb-4">
      {TAILWIND_COLORS.flatMap((color) => {
        return TAILWIND_COLORS.map((color2) => {
          if (color === color2) return null;
          return (
            <button
              className={join(
                "min-w-[64px] h-16 px-4 rounded-lg shadow-lg focus:ring focus:ring-offset-2 focus:ring-indigo-200",
                `from-${color}-50 to-${color2}-50 bg-gradient-to-tr`
              )}
              key={color + "grad" + color2}
              onClick={() => {
                updateSelectedLayoutItem({
                  ...selectedLayoutItem,
                  classes: {
                    card: join(
                      `from-${color}-50 to-${color2}-50 bg-gradient-to-tr`,
                      selectedLayoutItem?.classes?.card
                        ?.split(" ")
                        .filter(
                          (c) =>
                            !c.startsWith("bg-") &&
                            !c.startsWith("from-") &&
                            !c.startsWith("to-")
                        )
                        .join(" ")
                    ),
                  },
                } as any);
              }}
            >
              {color + " to " + color2}
            </button>
          );
        });
      })}
    </hgroup>
  );
}
