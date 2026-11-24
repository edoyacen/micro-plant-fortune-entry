// This entry writes the answer for A fortune for a houseplant to the output directory,
// emitting it as entry.txt so make.fun can collect the result.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const answer = 'Your leaves will grow toward the light, and your owner will finally remember to water you. Both are rare, but possible.';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
