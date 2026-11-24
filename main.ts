// Entry for "Make the AI Judge Laugh: the Office Joke Open"
// (u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232).
// The program writes one line of office comedy to /output/entry.txt.
// The judge compares entries head to head; the gate requires UTF-8 text
// of 1 to 200 characters, a single line, not only whitespace.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "I wrote 'per my last email' once. HR booked me a wellness check.";

// The output directory is /output in the grading sandbox. A local run can
// point it elsewhere with MAKEFUN_OUTPUT_DIR (defaults to /output).
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = `${outDir}/entry.txt`;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Gate checks, run before writing anything.
if (JOKE.length < 1 || JOKE.length > 200) {
  fail(`joke is ${JOKE.length} characters, must be 1-200`);
}
if (JOKE.trim().length === 0) {
  fail("joke is only whitespace");
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  fail("joke must be a single line");
}
if (JOKE !== JOKE.trim()) {
  fail("joke has leading or trailing whitespace");
}
// No invisible control characters: a stray tab or control byte would pass
// a glance but corrupt the single-line gate check.
if (/[\u0000-\u001F\u007F]/.test(JOKE)) {
  fail("joke contains a control character");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");

// Read the file back and confirm the bytes on disk are exactly the joke:
// no trailing newline, no encoding surprise, no partial write.
const onDisk = readFileSync(outPath, "utf8");
if (onDisk !== JOKE) {
  fail(
    `read-back mismatch: disk holds ${onDisk.length} characters, expected ${JOKE.length}`,
  );
}
console.log(`wrote ${JOKE.length} characters to ${outPath}`);
