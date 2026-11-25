import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original one-line joke about office life, written for this entry.
const JOKE =
  "The fire drill is the only meeting everyone attends on time: the agenda is just 'leave'.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
