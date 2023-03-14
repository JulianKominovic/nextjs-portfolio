import join from "@/lib/join";
import { TAILWIND_FONTS_SIZES } from "@/public/tailwind.fonts";
import { DashboardSettingsProps } from "./DashboardSettings";

export default function FontSize({
  updateSelectedLayoutItem,
  selectedLayoutItem,
}: DashboardSettingsProps) {
  return (
    <hgroup className="flex flex-wrap w-full gap-3 p-4 mb-4">
      {TAILWIND_FONTS_SIZES.map((size) => {
        return (
          <button
            className={join(
              "min-w-[64px] py-2 px-4 rounded-lg shadow-lg focus:ring focus:ring-offset-2 focus:ring-indigo-200",
              `text-${size}`
            )}
            key={size + "size"}
            onClick={() => {
              updateSelectedLayoutItem({
                ...selectedLayoutItem,
                classes: {
                  card: join(
                    `text-${size}`,
                    selectedLayoutItem?.classes?.card
                      ?.split(" ")
                      .filter(
                        (c) =>
                          !TAILWIND_FONTS_SIZES.some(
                            (fontSize) => `text-${fontSize}` === c
                          )
                      )
                      .join(" ")
                  ),
                },
              } as any);
            }}
          >
            {size}
          </button>
        );
      })}
    </hgroup>
  );
}
