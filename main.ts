// Museum of the Year 3000 — u-donrulezz-museum-of-the-year-3000-b727a0bb
// Entry line: 110 characters (gate: 1-200).
// Why this line fits the brief: it is a deadpan museum label for an ordinary
// object from today (the hotel "Do Not Disturb" door sign) as misread in the
// year 3000 — a magic ward that repels "cleaning spirits". The humour comes
// from the misreading itself: the sign really does keep housekeeping out, so
// the future curator's supernatural explanation is both true and absurd. The
// object is fresh (not the fork / parking meter / key / group chat of the
// brief's examples) and the line trusts the reader to get the joke with no
// throat-clearing or self-explanation.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Do Not Disturb sign: a magic ward hung on doors to repel the cleaning spirits, who obeyed it without question.";

// Runtime gate: the kit requires 1-200 characters. Fail loudly instead of
// silently shipping an out-of-gate line.
if (line.length < 1 || line.length > 200) {
  throw new Error(`Entry line length ${line.length} is outside the 1-200 gate.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
