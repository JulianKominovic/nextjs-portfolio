import { LayoutItem } from "@/app/page";
import join from "@/lib/join";
import * as RadixTabs from "@radix-ui/react-tabs";
import GradientPastelColors from "./GradientPastelColors";
import PastelColors from "./PastelColors";
import * as RadixAccordion from "@radix-ui/react-accordion";
import FontSize from "./FontSize";
import StylesTab from "./StylesTabs";

export type DashboardSettingsProps = {
  selectedLayoutItem?: LayoutItem;
  updateSelectedLayoutItem: (layoutItem: LayoutItem) => void;
};

function Trigger(props: RadixTabs.TabsTriggerProps) {
  return (
    <RadixTabs.Trigger
      {...props}
      className="flex items-center justify-center flex-grow p-2 rounded-xl bg-neutral-50 hover:bg-neutral-100 disabled:text-neutral-300 disabled:pointer-events-none disabled:cursor-not-allowed aria-selected:bg-neutral-200"
    />
  );
}

export default function DashboardSettings({
  selectedLayoutItem,
  updateSelectedLayoutItem,
}: DashboardSettingsProps) {
  return (
    <RadixTabs.Root className="w-full" defaultValue="tab1">
      <RadixTabs.List
        className="flex w-full gap-4 mb-8"
        aria-label="Manage your account"
      >
        <Trigger value="add-cards">Add cards</Trigger>
        <Trigger disabled={!selectedLayoutItem} value="adjustments">
          Settings
        </Trigger>

        <Trigger disabled={!selectedLayoutItem} value="styles">
          Styles
        </Trigger>
      </RadixTabs.List>
      <RadixTabs.Content className="TabsContent" value="add-cards">
        {/* <AddCardButton
          onClick={() => {
            setLayout([
              ...layout,
              {
                i: "c",
                x: 0,
                y: 0,
                w: 1,
                h: 2,
                text: Math.random().toString(36).substring(7),
              },
            ]);
          }}
        >
          <GridItem text="Blank card" />
        </AddCardButton>
        <AddCardButton
          onClick={() => {
            setLayout([
              ...layout,
              {
                i: "c",
                x: 0,
                y: 0,
                w: 1,
                h: 2,
                classes: {
                  card: "bg-gradient-to-r from-orange-50 to-orange-100",
                },
                text: Math.random().toString(36).substring(7),
              },
            ]);
          }}
        >
          <GridItem
            text="Gradients ;)"
            classes={{
              card: "bg-gradient-to-r from-orange-50 to-orange-100",
            }}
          />
        </AddCardButton> */}
      </RadixTabs.Content>
      <RadixTabs.Content className="TabsContent" value="adjustments">
        {["text", "imageSrc", "icon", "href"].map((key) => {
          return (
            <hgroup className="flex items-center gap-4 mb-4 " key={key}>
              <label className="w-16 text-neutral-900" htmlFor={key}>
                {key}
              </label>
              <input
                className="flex-grow p-2 border rounded-xl"
                key={key}
                type="text"
                name={key}
                value={selectedLayoutItem?.[key]}
                onChange={(e) =>
                  updateSelectedLayoutItem({
                    ...selectedLayoutItem,
                    [key]: e.target.value,
                  })
                }
              />
            </hgroup>
          );
        })}
      </RadixTabs.Content>

      <RadixTabs.Content
        className="w-full h-[calc(100vh-180px)]  overflow-auto"
        value="styles"
      >
        <StylesTab
          updateSelectedLayoutItem={updateSelectedLayoutItem}
          selectedLayoutItem={selectedLayoutItem}
        />
      </RadixTabs.Content>
    </RadixTabs.Root>
  );
}
