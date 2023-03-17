export default function join(
  ...args: (string | undefined | null | boolean)[]
): string {
  return args.filter(Boolean).join(" ");
}
