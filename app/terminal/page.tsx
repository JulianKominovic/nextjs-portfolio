import AnimatedTerminal from "@/components/terminal/AnimatedTerminal";
import "../../styles/terminal/index.css";
export default function TerminalPage() {
  return (
    <main className="grid px-4 grid-cols-1 grid-rows-[60px_1fr_1fr] gap-4 mt-4">
      <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Thermynal
      </h1>
      <AnimatedTerminal />
    </main>
  );
}
