import * as RadixTabs from "@radix-ui/react-tabs";
import FontSize from "./FontSize";
import { DashboardSettingsProps } from "./DashboardSettings";
import PastelColors from "./PastelColors";
import GradientPastelColors from "./GradientPastelColors";
import FontWeight from "./FontWeight";
import FontAlignment from "./FontAlignment";

export function Trigger(props: RadixTabs.TabsTriggerProps) {
  return (
    <RadixTabs.Trigger
      {...props}
      className="flex items-center justify-center flex-grow p-2 border-b bg-neutral-50 hover:bg-neutral-100 disabled:text-neutral-300 disabled:pointer-events-none disabled:cursor-not-allowed aria-selected:bg-neutral-200 border-b-neutral-200"
    />
  );
}

export default function StylesTab({
  updateSelectedLayoutItem,
  selectedLayoutItem,
}: DashboardSettingsProps) {
  return (
    <RadixTabs.Root className="w-full" defaultValue="tab1">
      <RadixTabs.List
        className="flex w-full mb-8"
        aria-label="Manage your account"
      >
        <Trigger value="background">Background</Trigger>
        <Trigger value="font">Font</Trigger>
      </RadixTabs.List>
      <RadixTabs.Content className="TabsContent" value="background">
        <PastelColors
          updateSelectedLayoutItem={updateSelectedLayoutItem}
          selectedLayoutItem={selectedLayoutItem}
        />
        <GradientPastelColors
          updateSelectedLayoutItem={updateSelectedLayoutItem}
          selectedLayoutItem={selectedLayoutItem}
        />
      </RadixTabs.Content>
      <RadixTabs.Content value="font">
        <h2>Size</h2>

        <FontSize
          updateSelectedLayoutItem={updateSelectedLayoutItem}
          selectedLayoutItem={selectedLayoutItem}
        />
        <h2>Weight</h2>
        <FontWeight
          updateSelectedLayoutItem={updateSelectedLayoutItem}
          selectedLayoutItem={selectedLayoutItem}
        />
        <h2>Align</h2>
        <FontAlignment
          updateSelectedLayoutItem={updateSelectedLayoutItem}
          selectedLayoutItem={selectedLayoutItem}
        />
      </RadixTabs.Content>
    </RadixTabs.Root>
  );
}
