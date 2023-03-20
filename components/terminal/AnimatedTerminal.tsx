"use client";
import Terminal from "react-animated-term";

const spinner = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
const termLines = [
  {
    text: "node example.js",
    cmd: true,
    delay: 80,
  },
  {
    text: "✔ Loaded app",
    cmd: false,
    repeat: true,
    repeatCount: 5,
    frames: spinner.map(function (spinner) {
      return {
        text: spinner + " Loading app",
        delay: 40,
      };
    }),
  },
  {
    text: "echo 'Hola'",
    cmd: true,
  },
  {
    text: "echo 'Hola'",
    cmd: true,
  },
  {
    text: "echo 'Hola'",
    cmd: true,
  },
  {
    text: "echo 'Hola'",
    cmd: true,
  },
  {
    text: "echo 'Hola'",
    cmd: true,
  },
  {
    text: "echo 'Hola'",
    cmd: true,
  },
  {
    text: "echo 'Hola'",
    cmd: true,
  },
  {
    text: "echo 'Hola'",
    cmd: true,
  },
  {
    text: "echo 'Hola'",
    cmd: true,
  },
  {
    text: "echo 'Hola'",
    cmd: true,
  },
  {
    text: "echo 'Hola'",
    cmd: true,
  },
  {
    text: "echo 'Hola'",
    cmd: true,
  },
  {
    text: "echo 'Hola'",
    cmd: true,
  },
  {
    text: "echo 'Hola'",
    cmd: true,
  },
];
export default function AnimatedTerminal() {
  return (
    <>
      <Terminal lines={termLines} interval={40} />
      <table></table>
    </>
  );
}
