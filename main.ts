import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original one-line joke about office life, written for this entry.
const JOKE =
  "The fire drill is the only meeting everyone attends on time: the agenda is just 'leave'.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";

// Gate validation: the entry must be exactly one line, 1–200 characters,
// and not only white space. Fail loudly instead of writing an invalid entry.
if (
  JOKE.length < 1 ||
  JOKE.length > 200 ||
  JOKE.trim().length === 0 ||
  JOKE.includes("\n") ||
  JOKE.includes("\r")
) {
  console.error(
    "Invalid entry: joke must be one line, 1-200 characters, not only white space.",
  );
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
