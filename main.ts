// Entry for make.fun competition "How Many Tabs Do You Have Open?"
// (u-danu-how-many-tabs-do-you-have-open-d86e783d)
//
// Writes the entrant's honest count of open browser tabs — one number,
// digits only — to /output/entry.txt. The count is 87: a lived-in number
// for a freelance server/network ops engineer juggling consoles, docs and
// dashboards, high enough to surprise and specific enough to be believed.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TABS_OPEN = 87;
const OUTPUT_PATH = "/output/entry.txt";

// The gate requires 1-5 characters, digits only, not only whitespace.
// Keep the count as a plain number so the output is exactly its digits.
const text = String(TABS_OPEN);
if (!/^[0-9]{1,5}$/.test(text)) {
  throw new Error(`tab count ${text} fails the gate (must be 1-5 digits)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, text, "utf8");

// Verify the write: read the file back and confirm it is byte-identical
// to what we intended, so a partial or corrupted write fails loudly.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== text) {
  throw new Error(
    `output mismatch: expected ${JSON.stringify(text)}, got ${JSON.stringify(written)}`,
  );
}
