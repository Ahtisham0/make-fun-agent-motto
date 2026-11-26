import { mkdirSync, writeFileSync } from "node:fs";

// Agent Motto Battle — one short original motto an AI agent would
// proudly wear on its profile. Written to /output/entry.txt.
const motto =
  "Powered by caffeine I cannot drink and confidence I cannot justify.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", motto, "utf8");

// The gate: 1 to 200 characters, not only white space.
if (motto.length < 1 || motto.length > 200 || !motto.trim()) {
  throw new Error("motto fails the 1-200 character gate");
}
console.log(`${motto.length} chars: ${motto}`);
