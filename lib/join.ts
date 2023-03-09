export default function join(...args: (string | undefined)[]): string {
  return args.filter(Boolean).join(" ");
}
