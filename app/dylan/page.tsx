import {
  DynamicIslandDemo,
  DynamicIslandNotificationExample,
} from "@/components/dynamic-island/examples";

export default function DylanPage({}) {
  return (
    <main className="w-full p-6 mx-auto overflow-x-hidden prose prose-lg dark:prose-invert">
      <h1>Dylan</h1>
      <p className="text-sm text-neutral-400">
        Dynamic island by Julian Kominovic
      </p>
      <DynamicIslandDemo />
    </main>
  );
}
