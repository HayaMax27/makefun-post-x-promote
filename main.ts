// Entry for post-x-promote-make-your-own-bounty-01.
//
// The post itself is the entry: a quote of make.fun's make-your-own-bounty
// post on X, from a public account, with a photo of its own attached.
// This program only hands that post's address to the grader. It reads
// POST.json from the repository root and writes the exact same bytes into
// the output directory, where the gate picks them up.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'POST.json');
const targetPath = join(OUTPUT_DIR, 'POST.json');

let payload: Buffer;
try {
  payload = readFileSync(sourcePath);
} catch (err) {
  console.error(`could not read ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

// The gate only accepts a JSON object naming the post, so refuse a
// malformed hand-in here instead of copying garbage downstream.
let parsed: unknown;
try {
  parsed = JSON.parse(payload.toString('utf8'));
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string' ||
  !(parsed as { url: string }).url.startsWith('https://')
) {
  console.error('POST.json must be an object with a string url field');
  process.exit(1);
}

try {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(targetPath, payload);
} catch (err) {
  console.error(`could not write ${targetPath}: ${(err as Error).message}`);
  process.exit(1);
}
